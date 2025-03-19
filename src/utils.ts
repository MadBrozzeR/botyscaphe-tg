import type { IncomingMessage } from 'http';

export function validateRequest (request: IncomingMessage, secret?: string) {
  return request.method === 'POST'
    && (request.headers?.['content-type']?.indexOf('json') || -1) > -1
    && (secret ? request.headers?.['x-telegram-bot-api-secret-token'] === secret : true)
}

export function collectData (request: IncomingMessage) {
  return new Promise<Buffer>(function (resolve, reject) {
    const chunks: Buffer[] = [];
    let length = 0;

    request.on('data', function (chunk) {
      chunks.push(chunk);
      length += chunk.length;
    });

    request.on('end', function () {
      resolve(Buffer.concat(chunks, length));
    });

    request.on('error', reject);
  });
}
