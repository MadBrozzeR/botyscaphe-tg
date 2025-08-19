import type { IncomingMessage } from 'http';
import https from 'https';
import type { Update, Method } from './types';
import * as Type from './types';
import type { TGBotResponse } from './types.common';

import { validateRequest, collectData } from './utils';
import { API_HOST } from './constants';

type Options = {
  secret?: string;
  token: string;
};
type MethodNoRequestData = {
  [K in keyof Method as Method[K][0] extends void ? K : never]: Method[K];
};
type MethodWithRequestData = Omit<Method, keyof MethodNoRequestData>;

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

  send<T = any> (action: string, message: string) {
    const path = `/bot${this.options.token}/${action}`;

    return new Promise<TGBotResponse<T>>(function (resolve, reject) {
      https.request({
        hostname: API_HOST,
        method: 'POST',
        path: path,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(message)
        }
      }, function (response) {
        collectData(response).then(function (data) {
          const responseData: TGBotResponse = JSON.parse(data.toString());
          if (responseData.ok) {
            resolve(responseData);
          } else {
            reject(responseData);
          }
        }).catch(reject);
      })
        .on('error', reject)
        .end(message);
    });
  }

  useMethod<K extends keyof MethodNoRequestData> (action: K):
    Promise<TGBotResponse<MethodNoRequestData[K][1]>>;
  useMethod<K extends keyof MethodWithRequestData> (action: K, message: MethodWithRequestData[K][0]):
    Promise<TGBotResponse<MethodWithRequestData[K][1]>>;
  useMethod<K extends keyof Method> (action: K, message?: Method[K][0]) {
    return this.send<Method[K][1]>(action, message ? JSON.stringify(message) : '');
  }

  sendMessage (message: Type.SendMessageData) {
    return this.useMethod('sendMessage', message);
  }

  editMessageText (message: Type.EditMessageTextData) {
    return this.useMethod('editMessageText', message);
  }

  editMessageReplyMarkup (message: Type.EditMessageReplyMarkupData) {
    return this.useMethod('editMessageReplyMarkup', message);
  }
}
