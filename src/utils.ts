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

function collectFormData<T extends {}> (
  data: T,
  name = '',
  result: Buffer[] = []
) {
  for (const key in data) {
    const currentName = name ? `${name}[${key}]` : key;

    if (data[key] instanceof Buffer) {
      result.push(Buffer.concat([
        Buffer.from(`Content-Disposition: form-data; name="${currentName}"\r\n\r\n`),
        data[key],
      ]));
    } else if (data[key] instanceof Object) {
      collectFormData(data[key], currentName, result)
    } else if (typeof data[key] === 'string'){
      result.push(Buffer.concat([
        Buffer.from(`Content-Disposition: form-data; name="${currentName}"\r\n\r\n`),
        Buffer.from(data[key]),
      ]));
    } else {
      throw new Error(`Unknown data type for "${currentName}": ${typeof data[key]}`);
    }
  }

  return result;
}

export function makeFormData<T extends {}> (data: T, boundary: string) {
  const boundaryBuffer = Buffer.from(`--${boundary}\r\n`);
  const endBoundaryBuffer = Buffer.from(`--${boundary}--\r\n`);
  const newLineBuffer = Buffer.from('\r\n');
  const dataBuffers = collectFormData(data);
  const result: Buffer[] = [];
  let resultLength = 0;

  for (let index = 0 ; index < dataBuffers.length ; ++index) {
    const current = dataBuffers[index];
    if (current) {
      result.push(boundaryBuffer, current, newLineBuffer);
      resultLength += boundaryBuffer.length + current.length + newLineBuffer.length;
    }
  }

  if (resultLength) {
    resultLength += endBoundaryBuffer.length;
    result.push(endBoundaryBuffer);

    return Buffer.concat(result, resultLength);
  }

  return Buffer.alloc(0);
}

const BOUNDARY_RE = /boundary=['"]?([^\s'";]+)['"]?/;

export function getBoundary (text: string) {
  const regMatch = BOUNDARY_RE.exec(text);

  if (regMatch && regMatch[1]) {
    return regMatch[1];
  }

  return '--MIMEBoundary-=-zZaaAbBccCdDZz-=-' + Date.now();
}
