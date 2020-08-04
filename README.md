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

(한번에 읽기 어려운)파일을 chunk 사이즈로 나눠서 읽음.

- chunkSize: number (default: 1024 * 1024 * 10) - 파일을 1회 읽을 때 byte 량
- responseType: FileReadResponseType (BLOB) - 파일을 읽기 완료 시 반환될 결과(Blob || ArrayBuffer[])
  - BLOB - 결과값을 blob(Blob) 으로 반환.
  - BUFFER - 결과값을 buffers(ArrayBuffers[]) 로 반환.

### Promise
```typescript
import { FileReadStream, FileReadEvent, FileReadEventType, FileReadResponseType } from '@jood/file-reader';

const onFileInputChange = async (evt: Event) => {
  const file = evt.target.files[0];
  const reader = new FileReadStream(file, { chunkSize: 1024 * 10, responseType: FileReadResponseType.BLOB });
  try {
    const { state } = await reader.start();
    const {
      fileName,
      fileType,
      fileSize,
      fileLastModified,
      total, // byte total
      readed, // byte read
      chunkSize, // config chunkSize
      responseType, // config responseType
      blob, // if responseType BLOB
      buffers, // if responseType BUFFER
    } = state;
    console.log('resolve', state.blob);
  } catch(err) {
    cosnole.error(err);
  }
}
```

### Observable
```typescript
import { FileReadStream, FileReadEvent, FileReadEventType, FileReadResponseType } from '@jood/file-reader';

const onFileInputChange = (evt: Event) => {
  const file = evt.target.files[0];
  const reader = new FileReadStream(file, { chunkSize: 1024 * 10, responseType: FileReadResponseType.BLOB });
  reader.start().subscribe(evt => {
    const { type, state, error } = evt;
    if (type === FileReadEventType.CHANGE) {
      console.log('change', state.readed/state.total);
    } else if (type === FileReadEventType.RESOLVE) {
      console.log('resolve', state.blob);
    } else if (type === FileReadEventType.REJECT) {
      console.log('reject', error);
    }
  });
}
```

---

## BlobImageResize

이미지 리사이징, quality 처리 함.

- expectWidth: number - 리사이징 예상 width

- expectHeight: number - 리사이징 예상 height

- resizeType: ResizeType (default=ResizeType.SCALE) - 리사이징 타입. expectWidth, expectHeight 기준.
  - COVER - 여백 없이 expect 사이즈를 채움. 원본이 expect 사이즈 보다 작은 경우 늘리지 않음.
  - COVER_STRETCH - 여백 없이 expect 사이즈를 채움. 원본이 expect 사이즈 보다 작은 경우 늘림.
  - SCALE - 이미지 비율 유지, 원본이 expect 사이즈 보다 작은 경우 늘리지 않음.
  - SCALE_STRETCH - 이미지 비율 유지, 원본이 expect 사이즈 보다 작은 경우 작은것을 기준으로 늘림.

- quality(default=0.9) - 이미지 퀄리티((0 < n < 1) ~ 1);

- expectContentType: string (default=undefined) - quality 는 image/jpeg 타입인 경우만 적용됨, 강제로 type 을 지정하여 quality 적용을 하려는 경우 사용.
  \ 예) image/png 타입인 file 의 경우 image/jpeg 로 강제 지정하면 quality 적용은 가능하고, 대신 이미지의 transparent 영역이 canvas 의 기본 배경색으로 채워짐.

- fillBgColor: string (default=undefined) - expectContentType 을 지정하는 경우 transparent 처리가 canvas 의 기본색상으로 채워지는데 그때 적용될 color 값.

### Promise
```typescript
import { BlobImageResize } from '@jood/file-reader';
const onFileInputChange = async (evt: Event) => {
  const file = evt.target.files[0];
  const blob = new Blob([file], { type: file.type });
  const resizer = new BlobImageResize({ 
    resizeType: ResizeType.COVER
    expectWidth: 200, 
    expectHeight: 200,
    quality: 0.9,
  });
  try {
    const { blob, width, height } = await resizer.create();
    const resizedFile = new File([blob], file.name, {
      lastModified: file.lastModified || Date.now()
    });
  } catch(err) {
    console.error(err);
  }
}
```

### Observable
```typescript
import { BlobImageResize, ResizeType } from '@jood/file-reader';
const onFileInputChange = async (evt: Event) => {
  const file = evt.target.files[0];
  const blob = new Blob([file], { type: file.type });
  const resizer = new BlobImageResize({ 
    resizeType: ResizeType.COVER
    expectWidth: 200, 
    expectHeight: 200,
    quality: 0.9,
  });
  const { blob, width, height } = await resizer.create();
  const resizedFile = new File([blob], file.name, {
    lastModified: file.lastModified || Date.now()
  });
}
```

---

This library was generated with [Angular CLI](https://github.com/angular/angular-cli)
