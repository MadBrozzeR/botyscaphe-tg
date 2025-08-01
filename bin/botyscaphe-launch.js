#!/usr/bin/env node

const fs = require('fs/promises');
const https = require('https');
const TGBot = require('../build/bot.js').Bot;

const ARG_RE = /^--(\w+)(?:=(['"]?)(.+)\2)?$/;
const METHOD_RE = /^\w+$/;
const DATA_RE = /^\{.+\}$/;

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
  method: process.argv[2],
  data: process.argv[process.argv.length - 1],
  params: getParams(process.argv),
};

function getParamsFromJson () {
  return new Promise(function (resolve, reject) {
    fs.readFile('./.bot.json').then(function (data) {
      resolve(JSON.parse(data.toString()));
    }).catch(reject);
  });
}

getParamsFromJson().then(function (botParams) {
  if (!METHOD_RE.test(PARAMS.method)) {
    throw new Error(`Method "${PARAMS.method}" is incorrect`);
  }
  if (!DATA_RE.test(PARAMS.data)) {
    throw new Error(`Submited data doesn't look like JSON:\n${PARAMS.data}`);
  }
  const token = botParams.token;
  const secret = botParams.secret;
  const bot = new TGBot({ token, secret });

  bot.send(PARAMS.method, PARAMS.data).then(console.log).catch(console.error);
}).catch(console.error);
