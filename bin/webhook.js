#!/usr/bin/env node

const fs = require('fs/promises');
const https = require('https');

const ARG_RE = /^--(\w+)(?:=(['"]?)(.+)\2)?$/;
const API_HOST = 'api.telegram.org';

function getParams (args) {
  const params = {};

  args.forEach(function (argument) {
    const regMatch = ARG_RE.exec(argument);

    if (regMatch) {
      const [, name,, value] = regMatch;

      params[name] || (params[name] = []);

      params[name].push(value === undefined ? true : value);
    }
  });

  return params;
};

const PARAMS = {
  command: process.argv[2],
  params: getParams(process.argv),
};

const PARAMS_MAP = {
  url: 'url',
  cert: function (values) {
    throw new Error(
      'Unfortunately, self-signed sertificates are not yet supported. Contact developer if you need an implementation'
    );
  },
  ip: 'ip_address',
  maxcon: 'max_connections',
  upd: function (values) {
    return {
      name: 'allowed_updates',
      value: `["${values.join('", "')}"]`,
    };
  },
  drop: 'drop_pending_updates',
  secret: 'secret_token',
};

function checkValueIsAllowed (value) {
  const type = typeof value;

  return type === 'string' || type === 'booleana' || type === 'number';
}

function getRequestParams (params) {
  const result = {};

  for (const key in params) {
    if (typeof PARAMS_MAP[key] === 'string' && checkValueIsAllowed(params[key][0])) {
      result[PARAMS_MAP[key]] = params[key][0];
    } else if (PARAMS_MAP[key] instanceof Function) {
      const { name, value } = PARAMS_MAP[key](params[key]);

      if (name && checkValueIsAllowed(value)) {
        result[name] = value;
      }
    }
  }

  return result;
}

function getParamsFromJson () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./.bot.json').then(function (data) {
      resolve(JSON.parse(data.toString()));
    }).catch(reject);
  });
}

function request (token, method, data) {
  const path = `/bot${token}/${method}`;
  const message = data && JSON.stringify(data);

  return new Promise(function (resolve, reject) {
    https.request({
      hostname: API_HOST,
      method: 'POST',
      path: path,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': message ? Buffer.byteLength(message) : 0,
      }
    }, resolve)
      .on('error', reject)
      .end(message);
  });
}

function getData (response) {
  const chunks = [];
  let length = 0;

  return new Promise(function (resolve, reject) {
    response
      .on('data', function (chunk) {
        chunks.push(chunk);
        length += chunk.length;
      })
      .on('end', function () {
        try {
          const data = JSON.parse(Buffer.concat(chunks, length).toString());

          if (data.ok) {
            resolve(data.result);
          } else {
            reject(data);
          }
        } catch (error) {
          reject(error);
        }
      });
  });
}

switch (PARAMS.command) {
  case 'set':
    if (!PARAMS.params.url || !PARAMS.params.url.length) {
      throw new Error('Argument --url is required');
    }

    getParamsFromJson().then(function (botParams) {
      const token = botParams.token;
      const requestParams = getRequestParams(PARAMS.params);
      request(token, 'setWebhook', requestParams).then(getData).then(console.log);
    }).catch(console.error);

    break;
  case 'get':
    getParamsFromJson().then(function (botParams) {
      const token = botParams.token;
      request(token, 'getWebhookInfo').then(getData).then(console.log);
    }).catch(console.error);

    break;

  case 'delete':
    if (!PARAMS.params.yes || !PARAMS.params.yes.length) {
      throw new Error('Argument --yes is required');
    }

    getParamsFromJson().then(function (botParams) {
      const token = botParams.token;
      const requestParams = getRequestParams(PARAMS.params);
      request(token, 'setWebhook', requestParams).then(getData).then(console.log);
    }).catch(console.error);

    break;
}
