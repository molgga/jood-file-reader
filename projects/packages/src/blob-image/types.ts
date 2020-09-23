/**
 * 리사이즈 타입
 *  - SCALE: 이미지 비율 유지, 원본이 예상 크기 보다 작은 경우 늘리지 않음.
 *  - SCALE_STRETCH: 이미지 비율 유지, 원본이 예상 크기 보다 작은 경우 작은것을 기준으로 늘림.
 *  - COVER: 이미지 넘치면 잘라냄, 원본이 예상 크기 보다 작은 경우 늘리지 않음.
 *  - COVER_STRETCH: 이미지 넘치면 잘라냄, 원본이 예상 크기 보다 작은 경우 늘림.
 * @export
 * @enum {number}
 */
export enum ResizeType {
  SCALE,
  SCALE_STRETCH,
  COVER,
  COVER_STRETCH,
  FIXED,
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
   * 이미지 품질 (jpeg type 이 아닌건 quality 적용이 되지 않음)
   * @type {number}
   */
  quality?: number;
  /**
   * canvas 에 그려질 contentType 을 강제하려는 경우의 값, 지정하지 않으면 읽어낸 값으로 지정
   * @type {string}
   */
  expectContentType?: string;
  /**
   * canvas 의 기본 배경 컬러 지정
   * @type {string}
   */
  fillBgColor?: string;
  /**
   * 리사이즈 타입
   * @type {ResizeType}
   */
  resizeType?: ResizeType;

  /**
   * exif orientation 정보가 있는 경우 적용 여부
   * @type {boolean}
   */
  applyOrientation?: boolean;
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
   * allowOrientation 적용시 exif 에서 찾아낸 orientation 값
   * @type {number}
   */
  orientation?: number;
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
  mw: number;
  mh: number;
}
