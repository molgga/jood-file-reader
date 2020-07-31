# @jood/file-reader

javascript clientside file reader

---

![TRAVIS](https://travis-ci.org/molgga/jood-file-reader.svg?branch=master)
![NPM version](https://img.shields.io/npm/v/@jood/file-reader.svg)
![NPM license](https://img.shields.io/npm/l/@jood/file-reader)
![NPM download](https://img.shields.io/npm/dt/@jood/file-reader)
![NPM bundle size](https://img.shields.io/bundlephobia/min/@jood/file-reader)

---

## FileReadStream

file read chunk size

```typescript
import { FileReadStream, FileReadEvent, FileReadEventType, FileReadResponseType } from '@jood/file-reader';

const onFileInputChange = async (evt: Event) => {
  const file = evt.target.files[0];
  const reader = new FileReadStream(file, { chunkSize: 1024 * 10, responseType: FileReadResponseType.BLOB });
  const { type, state, error } = await reader.start();
  if (type === FileReadEventType.RESOLVE) {
    console.log('resolve', state.blob);
  } else if (type === FileReadEventType.REJECT) {
    console.log('reject', error);
  }
}
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
