/**
 * 리사이즈 타입
 *  - SCALE: 최대 크기에 맞춤, 이미지 비율 유지.
 *  - COVER: 최대 크기에 맞춤, 이미지 넘치면 잘라냄.
 * @export
 * @enum {number}
 */
export enum ResizeType {
  SCALE,
  COVER,
}

/**
 * 리사이즈 옵션
 * @export
 * @interface ResizeConfig
 */
export interface ResizeConfig {
  /**
   * 리사이즈 예상 width
   * @type {number}
   */
  expectWidth?: number;
  /**
   * 리사이즈 예상 height
   * @type {number}
   */
  expectHeight?: number;
  /**
   * 이미지 품질
   * @type {number}
   */
  quality?: number;
  /**
   * 리사이즈 타입
   * @type {ResizeType}
   */
  resizeType?: ResizeType;
}

/**
 * 리사이즈 결과
 * @export
 * @interface ResizeResult
 */
export interface ResizeResult {
  /**
   * 리사이즈 된 Blob
   * @type {Blob}
   */
  blob: Blob;
  /**
   * 리사이즈 된 width 사이즈
   * @type {number}
   */
  width: number;
  /**
   * 리사이즈 된 height 사이즈
   * @type {number}
   */
  height: number;
  /**
   * 오류가 있는 경우
   * @type {*}
   * @memberof ResizeResult
   */
  error?: any;
}

/**
 * 리사이즈 계산 정보
 * @interface DrawBound
 */
export interface DrawBound {
  dx: number;
  dy: number;
  dw: number;
  dh: number;
}
