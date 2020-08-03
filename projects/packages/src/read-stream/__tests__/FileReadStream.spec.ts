import { FileReadStream } from "../FileReadStream";
import { FileReadEventType, FileReadResponseType, FileReadEvent } from "../types";

function createSampleFile(byte: number, fileName: string = "sample-file") {
  const buffer = new ArrayBuffer(byte);
  return new File([buffer], fileName);
}

describe('FileReadStream', () => {
  
  it("responseType BLOB 확인", async () => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BLOB,
    });
    const { state } = await stream.start();
    expect(state.responseType).toBe(FileReadResponseType.BLOB);
    expect(state.blob.constructor).toBe(Blob);
    expect(state.buffers).toBe(undefined);
  });

  it("responseType BUFFER 확인", async () => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BUFFER,
    });
    const { state } = await stream.start();
    expect(state.responseType).toBe(FileReadResponseType.BUFFER);
    expect(state.blob).toBe(undefined);
    expect(state.buffers.length).not.toBe(0);
  });

  it("파일 async로 읽기 성공 및 정보 확인", async () => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BLOB,
    });
    const { type, state } = await stream.start();
    expect(type).toBe(FileReadEventType.RESOLVE);
    expect(state.responseType).toBe(FileReadResponseType.BLOB);
    expect(state.fileName).toBe(FILE_NAME);
    expect(state.fileType).toBe("");
    expect(state.fileSize).toBe(FILE_SIZE);
    expect(state.total).toBe(FILE_SIZE);
    expect(state.readed).toBe(FILE_SIZE);
    expect(state.chunkSize).toBe(CHUNK_SIZE);
  });

  it("파일 async로 읽기 오류 및 정보 확인", async () => {
    const file: any = {};
    try {
      const stream = new FileReadStream(file);
      await stream.start();
    } catch (err) {
      const { error, state, type } = err;
      expect(error instanceof Error).toBe(true);
      expect(type).toBe(FileReadEventType.REJECT);
      expect(state).toBe(null);
    }
  });
  
  it("파일 async로 읽기 중 abort 확인", async () => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 1;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    try {
      const stream = new FileReadStream(file, {
        chunkSize: CHUNK_SIZE,
        responseType: FileReadResponseType.BLOB,
      });
      requestAnimationFrame(() => {
        stream.abort();
      });
      await stream.start();
    } catch (err) {
      const { error, state, type } = err;
      expect(error instanceof Error).toBe(true);
      expect(type).toBe(FileReadEventType.ABORT);
      expect(state).toBe(null);
    }
  });

  it("파일 Observer로 읽기 성공 및 정보 확인", async (testDone) => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BLOB,
    });
    let testCountResolve = 0;
    let testCountReject = 0;
    let testCountChange = 0;
    stream.observeState().subscribe((evt: FileReadEvent) => {
      const { type, state } = evt;
      switch (type) {
        case FileReadEventType.REJECT:
          testCountReject++;
          break;
        case FileReadEventType.CHANGE:
          testCountChange++;
          expect(state.readed).toBe(testCountChange * CHUNK_SIZE); // 현재 읽은양 = 읽어들인 카운트 * 청크사이즈
          break;
        case FileReadEventType.RESOLVE:
          testCountResolve++;
          expect(testCountChange).toBe(4);
          expect(testCountResolve).toBe(1);
          expect(testCountReject).toBe(0);
          expect(state.total).toBe(FILE_SIZE);
          expect(state.responseType).toBe(FileReadResponseType.BLOB);
          expect(state.fileName).toBe(FILE_NAME);
          expect(state.fileType).toBe("");
          expect(state.fileSize).toBe(1024);
          expect(state.total).toBe(1024);
          expect(state.readed).toBe(1024);
          expect(state.chunkSize).toBe(256);
          testDone();
          break;
      }
    });
    stream.start().catch((err) => {
      console.log(err);
      testDone();
    });
  });

  it("파일 Observer로 읽기 오류 및 정보 확인", async (testDone) => {
    const noneFile: any = {};
    const stream = new FileReadStream(noneFile);
    let testCountResolve = 0;
    let testCountReject = 0;
    let testCountChange = 0;
    stream.observeState().subscribe((evt: FileReadEvent) => {
      const { error, type, state } = evt;
      switch (type) {
        case FileReadEventType.REJECT:
          testCountReject++;
          expect(testCountChange).toBe(0);
          expect(testCountResolve).toBe(0);
          expect(testCountReject).toBe(1);
          expect(state).toBe(null);
          expect(error instanceof Error).toBe(true);
          testDone();
          break;
        case FileReadEventType.CHANGE:
          testCountChange++;
          break;
        case FileReadEventType.RESOLVE:
          testCountResolve++;
          break;
      }
    });
    stream.start().catch((err) => {
      // noop. observer subscribe test
    });
  });

  it("파일 Observer로 읽기 중 abort 확인", async (testDone) => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BLOB,
    });
    let testCountResolve = 0;
    let testCountReject = 0;
    let testCountAbort = 0;
    let testCountChange = 0;
    stream.observeState().subscribe((evt: FileReadEvent) => {
      const { error, type, state } = evt;
      switch (type) {
        case FileReadEventType.REJECT:
          testCountReject++;
          break;
        case FileReadEventType.ABORT:
          testCountAbort++;
          expect(testCountChange).toBe(2);
          expect(testCountResolve).toBe(0);
          expect(testCountReject).toBe(0);
          expect(testCountAbort).toBe(1);
          expect(error instanceof Error).toBe(true);
          expect(type).toBe(FileReadEventType.ABORT);
          expect(state).toBe(null);
          testDone();
          break;
        case FileReadEventType.CHANGE:
          testCountChange++;
          if (2 === testCountChange) {
            stream.abort();
          }
          break;
        case FileReadEventType.RESOLVE:
          testCountResolve++;
          break;
      }
    });
    stream.start().catch((err) => {
      // noop. observer subscribe test
    });
  });

  it("destroy 확인", () => {
    const FILE_NAME = "sample-file-name";
    const FILE_SIZE = 1024;
    const CHUNK_SIZE = 256;
    const file = createSampleFile(FILE_SIZE, FILE_NAME);
    const stream = new FileReadStream(file, {
      chunkSize: CHUNK_SIZE,
      responseType: FileReadResponseType.BLOB,
    });
    stream.destroy();
    const start = () => {
      stream.start();
    };
    expect(start).toThrowError();
  });

  it("onReaderError", async () => {
    const stream = new FileReadStream(null);
    try {
      const { state } = await stream.start();
    } catch(err) {
      expect(err.error).not.toBeNull();
    }
  });

  it("getState", async () => {
    const stream = new FileReadStream(null, { chunkSize: 10, responseType: FileReadResponseType.BLOB });
    const state = stream.getState();
    expect(state.fileName).toBe(null);
    expect(state.fileType).toBe(null);
    expect(state.fileSize).toBe(0);
    expect(state.fileLastModified).not.toBe(null);
    expect(state.total).toBe(0);
    expect(state.readed).toBe(0);
    expect(state.responseType).toBe(FileReadResponseType.BLOB);
    expect(state.chunkSize).toBe(10);
  });
});
