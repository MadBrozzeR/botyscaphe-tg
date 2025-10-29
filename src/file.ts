import fs from 'fs/promises';

export class File {
  name: string;
  data: Buffer;

  constructor (name: string, data: Buffer) {
    this.name = name;
    this.data = data;
  }

  static async from (path: string) {
    const file = await fs.readFile(path);
    const slashPos = path.lastIndexOf('/');
    const name = slashPos > -1 ? path.substring(slashPos + 1) : path;

    return new File(name, file);
  }

  static hasFiles<T extends {}> (source: T) {
    for (const key in source) {
      const value = source[key];

      if (value instanceof File) {
        return true;
      } else if (value instanceof Object) {
        if (this.hasFiles(value)) {
          return true;
        }
      }
    }

    return false;
  }
}
