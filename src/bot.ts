import type { IncomingMessage } from 'http';
import https from 'https';
import type { Update } from './types.in';
import type { EditMessageReplyMarkupData, EditMessageTextData, SendMessageData } from './types.out';

import { validateRequest, collectData } from './utils';
import { API_HOST } from './constants';

type Options = {
  secret?: string;
  token: string;
};

export class Bot {
  options: Options;

  constructor (options: Options) {
    if (!options.token) {
      throw new Error('Bot token is required');
    }

    this.options = options;
  }

  getFromRequest (request: IncomingMessage) {
    const { options } = this;

    return new Promise<Update>(function (resolve, reject) {
      if (validateRequest(request, options.secret)) {
        collectData(request)
          .then(function (data) {
            resolve(JSON.parse(data.toString()));
          })
          .catch(reject);
      } else {
        reject(new Error('Wrong request parameters'));
      }
    });
  }

  send (action: string, message: string) {
    const path = `/bot${this.options.token}/${action}`;

    return new Promise(function (resolve, reject) {
      https.request({
        hostname: API_HOST,
        method: 'POST',
        path: path,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(message)
        }
      }, resolve)
        .on('error', reject)
        .end(message);
    });
  }

  sendMessage (message: SendMessageData) {
    return this.send('sendMessage', JSON.stringify(message));
  }

  editMessage (message: EditMessageTextData) {
    return this.send('editMessageText', JSON.stringify(message));
  }

  editMessageReplyMarkup (message: EditMessageReplyMarkupData) {
    return this.send('editMessageReplyMarkup', JSON.stringify(message));
  }
}
