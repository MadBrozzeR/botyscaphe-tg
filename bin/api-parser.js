#!/usr/bin/env node

const fs = require('fs/promises');
const https = require('https');

const TELEGRAM_API_URL = 'https://core.telegram.org/bots/api';
const FILE = process.argv[2];
const METHOD_RE = /^(\w)(\w+)$/;
const LINE_RE = /(^\w+$)|(?:(\w+)\t(.+?)(?:\t(\w+))?\t(.+))/;
const TYPE_RE = /(Int\b|String|Boolean)|(?:(Array of )([\w ,]+?)$)/g;
const OR_RE = / or /g;
const RETURN_RE = /\. ?(?:On success, |Returns )(?:returns |if the .+?, |the .+? as |information .+? as |basic .+? of )?(?:the sent |the edited |the uploaded |the stopped |the |a )?(an [Aa]rray of )?(\w+)(?:.+?otherwise (\w+))?/;
const DESCRIPTION_LENGTH = 98;
const NEW_LINE_SYMBOLS = {
  ' ': null,
  '-': null,
};
const VOID_TYPE = /Requires no parameters\./;
const METHOD_SEPARATOR_RE = /-{5,}\n/;
const STRING_VARIANTS_RE = [
  /\. Currently, (?:it can be one of |can be |either )((?:“\w+”(?:(?: \([^\)]+\)| for [^,]+)?)(?:, )?(?:or )?)+)/,
  /, (?:must be |currently )?(?:one of |can be |pass )(?:either )?((?:“[\w\/]+”(?: (?:for|if) [^,]+)?(?:, )?(?: ?or )?)+)/,
];
const STRING_VARIANT_RE = /, (?:must be |always )(one of )?(“?[\w\/]+”?|“”)/;
const INTEGER_VARIANTS_RE = /(?:;|,) must be (?:one of )?((?:(?:, or |, and |, )?(?:\d+)( \* \d+| \([^\)]+\)| for [^,]+)?)+)/;
const PREFIX = {
  METHOD_DATA: '',
};

const TYPE_MAP = {
  Int: 'Integer',
  String: 'string',
  Boolean: 'boolean',
};

function matchAll (text, regExp, action) {
  let match = null;
  const result = [];

  while (match = regExp.exec(text)) {
    const current = action(match);
    (current === undefined) || result.push(current);
  }

  return result;
}

const VARIANT_TYPES = {
  String (description) {
    /* Variants:
     * , one of “”, “”
     * , pass “”, “”, or “”
     * , can be either “”, “” or “”
     * , must be one of “” for ..., “” for ...
     * , must be one of “”, “”, or “”
     * , must be one of “”, “”
     * , currently can be “” or “”
     * , currently one of “”, “”
     * , currently one of “” for ..., “” for ...
     * . Currently, can be “” (), “” ()
     * . Currently, one of “” for ... or “” for ...
     * . Currently, must be one of “” for ... or “” for ...
     * . Currently, one of “” if ..., or “” if ...
     * . Currently, it can be one of “”, “”
     * . Currently, either “” for ..., “” for ..., or “” for ...
     */
    let match =
      // /(?:\. Currently, |, currently |, )(?:it can be |can be |must be |pass )?(?:one of |either )?((?:“\w+”(?:(?: \([^\)]+\)| for [^,]+)?)(?:, )?(?:or )?)+)/.exec(description);
      STRING_VARIANTS_RE[0].exec(description) ||
      STRING_VARIANTS_RE[1].exec(description);

    if (match) {
      const variants = matchAll(match[1], /“(.+?)”/g, (regMatch) => regMatch[1]);

      return variants.map((variant) => `'${variant}'`).join(' | ');
    }

    match = STRING_VARIANT_RE.exec(description);

    if (match && !match[1]) {
      return `'${match[2].replace(/[“”]/g, '')}'`;
    }

    return null;
  },

  Integer (description) {
    /* Variants:
     * . Currently, must be one of ... (), ... (), or ... ()
     * ; must be one of ..., ..., or ...
     * ; must be ... for ..., 1500 ..., and 2500 for ...
     * ; must be one of ... * ..., ... * ..., ..., or ... * ...
     */

    const match = INTEGER_VARIANTS_RE.exec(description);

    if (match) {
      const purgedVariants = match[1].replace(/(?:(\d+) \* (\d+))| for [^,]+| \([^\)]+\)/g, function (_, multiplier1, multiplier2) {
        if (multiplier1 && multiplier2) {
          return parseInt(multiplier1, 10) * parseInt(multiplier2, 10);
        }

        return '';
      });

      return matchAll(purgedVariants, /\d+/g, match => match[0]).join(' | ');
    }

    return null;
  },

  /*
  'InlineKeyboardMarkup or ReplyKeyboardMarkup or ReplyKeyboardRemove or ForceReply' () {
    return 'ReplyMarkup';
  },
  */
};

function replaceTypes (raw, description) {
  if (description && raw in VARIANT_TYPES) {
    const result = VARIANT_TYPES[raw](description);

    if (result) {
      return result;
    }
  }

  return raw.replace(OR_RE, ' | ').replace(TYPE_RE, function (_, type, arrayWords, array) {
    if (type in TYPE_MAP) {
      return TYPE_MAP[type];
    }

    if (array) {
      const data = replaceTypes(array.replace(/ and |, /g, ' | '));
      const content = {
        isComposite: (data.indexOf(' ') > -1),
        data: data,
      };

      return content.isComposite ? `Array<${content.data}>` : `${content.data}[]`;
    }
  });
}

function shorten (data, length) {
  const result = [];
  let rest = data;

  while (rest.length > length) {
    let position = length;
    for (; position > 0 ; --position) {
      if (rest[position] in NEW_LINE_SYMBOLS) {
        break;
      }
    }
    if (position === 0) {
      position = length;
    }

    result.push(rest.substring(0, position).trim());
    rest = rest.substring(position).trim();
  }

  rest && result.push(rest);

  return result;
}

function extractReturnType (line, previous) {
  const match = RETURN_RE.exec(line);

  return match ? replaceTypes(match[2] + (match[1] ? '[]' : '') + (match[3] ? ` | ${match[3]}` : '')) : previous;
}

function parse(data) {
  const lines = data.split('\n');
  const method = lines.shift();
  const typeName = method[0].toUpperCase() === method[0]
    ? method
    : method.replace(METHOD_RE, (_, first, rest) => `${first.toUpperCase()}${rest}Data`);
  let description = '';
  let currentLine = lines.shift();
  let result = '';
  let returns = '';
  let dataType = 'INIT';

  while (currentLine) {
    returns = extractReturnType(currentLine, returns);
    if (dataType === 'INIT' && VOID_TYPE.test(currentLine)) {
      dataType = 'VOID';
    }
    description += (description ? '\n' : '') + '* ' + shorten(currentLine, DESCRIPTION_LENGTH).join('\n* ');
    currentLine = lines.shift();
  }

  lines.forEach(function (line) {
    if (line) {
      const match = LINE_RE.exec(line);
      const currentDataType = !!match[1] ? 'LIST' : 'OBJECT';

      if (dataType === 'INIT') {
        dataType = currentDataType;
      } else if (dataType !== currentDataType) {
        throw new Error('Unexpectet switch between List and Table in ' + method);
      }

      if (dataType === 'LIST') {
        result += (result ? ' | ' : '') + match[1];
      } else {
        const isOptional = match[4] === 'Optional' || (match[5].substring(0, 9) === 'Optional.');
        result += `  ${match[2]}${isOptional ? '?' : ''}: ${replaceTypes(match[3], match[5])}; // ${match[5]}\n`;
      }
    }
  });

  if (dataType === 'LIST' && result.length > DESCRIPTION_LENGTH) {
    result = result.replace(/ \| /g, ' |\n  ');
  }

  switch (dataType) {
    case 'LIST':
      result = `export type ${typeName} = ${result};\n\n`;
      break;
    case 'VOID':
      result = `export type ${typeName} = void;\n\n`;
      break;
    case 'OBJECT':
    default:
      result = `export type ${typeName} = {${result ? `\n${result}` : ''}};\n\n`;
      break;
  }

  if (description) {
    result = `/**\n${description}\n*/\n${result}`;
  }

  return {
    type: result,
    method: typeName === method ? '' : `${method}: [${PREFIX.METHOD_DATA}${typeName}, ${returns}]`,
  };
}

const HEAD_RE = /<h4><a .+?><i .+?><\/i><\/a>(\w+)<\/h4>\n/;
const DESTRUCTION_RE = /((?:<blockquote>[\w\W]+?<\/blockquote>\n|<p>.+<\/p>\n|<div .+?>\n|\s+<a .+?><img .+? \/><\/a>\n|<\/div>\n+)+)/;
const TABLE_RE = /(?:<table.*?>\n[\w\W]+?<tbody>\n([\w\W]+?)\n<\/tbody>\n)?/;
const LIST_RE = /(?:<ul>\n((?:<li><a .+?>\w+<\/a><\/li>\n)+)<\/ul>\n)?/;
const PART_RE = new RegExp([HEAD_RE, DESTRUCTION_RE, TABLE_RE, LIST_RE].map((regexp) => regexp.source).join(''), 'g');

fs.readFile(FILE).catch(function () {
  return new Promise(function (resolve, reject) {
    https.get(TELEGRAM_API_URL, function (response) {
      const data = [];
      let length = 0;
      response.on('data', function (chunk) {
        data.push(chunk);
        length += chunk.length;
      });
      response.on('end', function () {
        const result = Buffer.concat(data, length);
        if (FILE) {
          fs.writeFile(FILE, result).then(function () {
            resolve(result);
          }).catch(reject);
        } else {
          resolve(result);
        }
      });
    });
  });
}).then(function (data) {
  const content = data.toString();
  let regMatch = null;
  let result = {
    types: '',
    methodTypes: '',
    methods: 'export type Method = {\n',
  };

  while (regMatch = PART_RE.exec(data)) {
    const data = `${regMatch[1]}\n` +
      `${regMatch[2].replace(/<.+?>/g, '').replace(/\n{2,}/g, '\n')}` +
      `${regMatch[3] ? regMatch[3].replace(/<\/td>\n<td>/g, '\t').replace(/<\/td>\n<\/tr>\n<tr>\n<td>/g, '\n').replace(/<.+?>/g, '') : ''}` +
      `${regMatch[4] ? ('\n' + regMatch[4].replace(/<.+?>/g, '')) : ''}`;

    const parsed = parse(data);
    if (parsed.method) {
      result.methodTypes += parsed.type;
      result.methods += `  ${parsed.method},\n`;
    } else {
      result.types += parsed.type;
    }
  }

  result.methods += '};';
  console.log([result.types, result.methodTypes, result.methods].join('// ----------------------------\n'));
});
