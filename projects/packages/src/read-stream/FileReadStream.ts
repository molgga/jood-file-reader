/* eslint-disable */
import { Subject, Observable } from 'rxjs';
import {
  FileReadEventType,
  FileReadEvent,
  FileReadState,
  FileReadConfig,
  FileReadResponseType,
} from './types';

/**
 * 파일 스트림 읽기.
 * FileReader 사용시 한번에 못 읽는 용량 끊어서 읽기 용.
 * @class FileReadStream
 * @example
  const onFileInputChange = async (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReadStream(file, { chunkSize: 1024 * 10 });
    // reader.observeState().subscribe({ type, state } => console.log(state.readed));
    const { type, state } = await reader.start();
    if (type === FileReadEventType.RESOLVE) {
      console.log(state.blob);
    } else if (type === FileReadEventType.REJECT) {
      console.log('error');
    }
  }
 */
export class FileReadStream {
  /**
   * @param {File} file FileReader 로 읽을 파일
   * @param {FileReadConfig} [config={}] 스트림 옵션
   */
  constructor(file: File, config: FileReadConfig = {}) {
    this.readFile = file;
    this.reader = new FileReader();
    this.reader.onload = this.onReaderLoaded.bind(this);
    this.reader.onerror = this.onReaderError.bind(this);
    this.subjectState = new Subject();
    const { chunkSize = 1024 * 1024 * 10, responseType = FileReadResponseType.BLOB } = config;
    this.readChunkSize = chunkSize;
    this.responseType = responseType;
  }

  // 변경사항 알리미 @see https://rxjs-dev.firebaseapp.com
  protected subjectState: Subject<FileReadEvent>;
  // 파일 리더
  protected reader: FileReader;
  // 읽을 파일
  protected readFile: File;
  // 읽기 시작 여부
  protected readStarted: boolean = false;
  // 1회 읽을량
  protected readChunkSize: number;
  // 현재 읽기 offset
  protected readOffset: number = 0;
  // 현재 읽어야할 offset
  protected readOffsetNext: number = 0;
  // 현재 읽은량
  protected readCurrent: number = 0;
  // 현재 취소 상태인지 확인용
  protected readStateAbort: boolean = false;
  // 읽은 버퍼
  protected buffers: ArrayBuffer[] = [];
  // 응답시 파일 타입
  protected responseType: FileReadResponseType;
  // subjectState 로 진행(완료) 상태를 받을 수 있지만, 편의용 async/await 도 제공
  protected readPromise: Promise<FileReadEvent>;
  protected readPromiseResolve: (value: FileReadEvent) => void;
  protected readPromiseReject: (reason?: any) => void;

  /**
   * 파일 읽기 1회 완료
   * @protected
   * @param {Event} evt
   */
  protected onReaderLoaded(evt: Event) {
    this.readCurrent = this.readOffsetNext;
    this.readOffset += this.readChunkSize;
    this.buffers.push(this.reader.result as ArrayBuffer);
    this.stateChanged();
    this.next();
  }

  /**
   * 파일 읽기 1회 오류
   * @protected
   * @param {Event} evt
   */
  protected onReaderError(evt: Event) {
    this.resultReject(new Error('file reader onerror event'));
  }

  /**
   * 다음 구간 읽기
   * @protected
   */
  protected next() {
    if (this.readStateAbort) {
      return;
    }
    try {
      const maxSize = this.readFile.size;
      if (maxSize <= this.readOffset) {
        this.resultResolve();
        return;
      }
      let expectNext = this.readOffset + this.readChunkSize;
      if (maxSize <= expectNext) expectNext = maxSize;
      this.readOffsetNext = expectNext;
      const sliceBlob = this.readFile.slice(this.readOffset, this.readOffsetNext);
      this.reader.readAsArrayBuffer(sliceBlob);
    } catch (err) {
      this.resultReject(err);
    }
  }

  /**
   * state 변경 시 알림
   * @protected
   */
  protected stateChanged() {
    this.subjectState.next({
      type: FileReadEventType.CHANGE,
      state: this.getState(),
    });
  }

  /**
   * 완료 시 알림
   * @protected
   */
  protected resultResolve() {
    const result: FileReadEvent = {
      type: FileReadEventType.RESOLVE,
      state: this.getState(),
    };
    this.reader.onload = null;
    this.reader.onerror = null;
    this.readPromiseResolve(result);
    this.subjectState.next(result);
  }

  /**
   * 실패 시 알림
   * @protected
   * @param {*} reason
   */
  protected resultReject(reason: any, type: FileReadEventType = FileReadEventType.REJECT) {
    const result: FileReadEvent = {
      type,
      state: null,
      error: reason,
    };
    this.reader.onload = null;
    this.reader.onerror = null;
    this.readPromiseReject(result);
    this.subjectState.next(result);
  }

  /**
   * 읽기 시작
   * @returns {Promise<FileReadEvent>}
   */
  start(): Promise<FileReadEvent> {
    if (this.readStarted) return;
    this.readStarted = true;
    this.readPromise = new Promise((resolve, reject) => {
      this.readPromiseResolve = resolve;
      this.readPromiseReject = reject;
    });
    this.next();
    return this.readPromise;
  }

  /**
   * 상태변경 옵저버
   * @returns {Observable<FileReadEvent>}
   */
  observeState(): Observable<FileReadEvent> {
    return this.subjectState.asObservable();
  }

  /**
   * 현재 상태
   * @returns {FileReadState}
   */
  getState(): FileReadState {
    const { name = null, type = null, size = 0, lastModified = Date.now() } = this.readFile || {};
    const state: FileReadState = {
      fileName: name,
      fileType: type,
      fileSize: size,
      fileLastModified: lastModified,
      total: size,
      readed: this.readCurrent,
      responseType: this.responseType,
      chunkSize: this.readChunkSize,
    };
    switch (this.responseType) {
      case FileReadResponseType.BLOB:
        state.blob = new Blob(this.buffers, { type });
        break;
      case FileReadResponseType.BUFFER:
        state.buffers = this.buffers;
        break;
    }
    return state;
  }

  /**
   * 파일 읽기 중단
   */
  abort(): void {
    this.readStateAbort = true;
    if (this.reader) {
      this.reader.abort();
      this.reader.onload = null;
      this.reader.onerror = null;
      this.resultReject(new Error('file reader abort event'), FileReadEventType.ABORT);
    }
  }

  /**
   * 파기
   */
  destroy() {
    if (this.reader) {
      this.reader.abort();
      this.reader.onload = null;
      this.reader.onerror = null;
      this.reader = null;
    }
    this.readFile = null;
  }
}
