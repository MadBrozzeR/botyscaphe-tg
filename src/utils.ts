import type { IncomingMessage } from 'http';
import { File } from './file';

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

function isPrimitiveValue (value: any): value is string | number | boolean {
  const type = typeof value;

  return type === 'string' || type === 'boolean' || type === 'number';
}

function collectFormData<T extends {}> (
  data: T,
  name = '',
  result: Buffer[] = []
) {
  for (const key in data) {
    const currentName = name ? `${name}[${key}]` : key;
    const value = data[key];

    if (value instanceof File) {
      result.push(Buffer.concat([
        Buffer.from(`Content-Disposition: form-data; name="${currentName}"; filename="${value.name}"\r\n\r\n`),
        value.data,
      ]));
    } else if (value instanceof Buffer) {
      result.push(Buffer.concat([
        Buffer.from(`Content-Disposition: form-data; name="${currentName}"\r\n\r\n`),
        value,
      ]));
    } else if (value instanceof Object) {
      collectFormData(value, currentName, result)
    } else {
      if (isPrimitiveValue(value)){
        result.push(Buffer.concat([
          Buffer.from(`Content-Disposition: form-data; name="${currentName}"\r\n\r\n`),
          Buffer.from(value.toString()),
        ]));
      } else {
        throw new Error(`Unknown data type for "${currentName}": ${typeof value}`);
      }
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

export function generateBoundary () {
  return '--MIMEBoundary-=-zZaaAbBccCdDZz-=-' + Date.now();
}

export function getBoundary (text: string) {
  const regMatch = BOUNDARY_RE.exec(text);

  if (regMatch && regMatch[1]) {
    return regMatch[1];
  }

  return generateBoundary();
}
