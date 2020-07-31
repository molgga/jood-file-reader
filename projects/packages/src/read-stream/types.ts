/**
 * 스트림 이벤트 타입
 *  - CHANGE: 변경사항이 있음
 *  - RESOLVE: 완료
 *  - REJECT: 오류
 * @export
 * @enum {string}
 */
export enum FileReadEventType {
  CHANGE = 'CHANGE',
  RESOLVE = 'RESOLVE',
  REJECT = 'REJECT',
  ABORT = 'ABORT',
}

/**
 * 스트림 이벤트
 * @export
 * @interface FileReadEvent
 */
export interface FileReadEvent {
  /**
   * 이벤트 타입명
   * @type {FileReadEventType}
   */
  type: FileReadEventType;
  /**
   * 스트림 상태
   * @type {FileReadState}
   */
  state: FileReadState;
  /**
   * 오류
   * @type {*}
   */
  error?: any;
}

/**
 * 스트림 상태 정보
 * @export
 * @interface FileReadState
 */
export interface FileReadState {
  /**
   * 파일명
   * @type {string}
   */
  fileName: string;
  /**
   * 파일의 (Mime)타입
   * @type {string}
   */
  fileType: string;
  /**
   * 파일의 용량
   * @type {number}
   */
  fileSize: number;
  /**
   * 파일의 마지막 수정시간
   * @type {number}
   */
  fileLastModified: number;
  /**
   * 읽어들인 용량
   * @type {number}
   */
  readed: number;
  /**
   * 읽어내야할 용량(파일 용량)
   * @type {number}
   */
  total: number;
  /**
   * 1회 읽기시 읽어들일 용량
   * @type {number}
   */
  chunkSize: number;
  /**
   * 읽기 완료 후 반환 타입
   * @type {FileReadResponseType}
   */
  responseType: FileReadResponseType;
  /**
   * responseType 이 BUFFER 인 경우 반환하는 ArrayBuffer[]
   * @type {ArrayBuffer[]}
   */
  buffers?: ArrayBuffer[];
  /**
   * responseType 이 BLOB 인 경우 반환하는 Blob
   * @type {Blob}
   */
  blob?: Blob;
}

/**
 * 스트림 옵션
 * @export
 * @interface FileReadConfig
 */
export interface FileReadConfig {
  /**
   * 1회에 읽어들일 용량
   * @type {number}
   */
  chunkSize?: number;
  /**
   * 읽기 완료 후 반환 타입
   * @type {FileReadResponseType}
   */
  responseType?: FileReadResponseType;
}

/**
 * 스트립 상태 정보 중 완료시 파일 타입.
 *  - BUFFER: ArrayBuffer[] 타입
 *  - BLOB: Blob 타입
 * @export
 * @enum {string}
 */
export enum FileReadResponseType {
  BUFFER = 'BUFFER',
  BLOB = 'BLOB',
}
