/* eslint-disable */
import { ResizeType, ResizeConfig, ResizeResult, DrawBound } from './types';

/**
 * Blob 이미지 리사이즈 용
 * Blob -> Canvas&Image resize -> Blob.
 * @class BlobImageResize
 */
export class BlobImageResize {
  /**
   * @param {Blob} blob 변경할 원본 Blob
   * @param {ResizeConfig} [config={}] 리사이징 옵션
   */
  constructor(blob: Blob, config: ResizeConfig = {}) {
    this.blob = blob;
    const {
      expectWidth = 2000,
      expectHeight = 2000,
      quality = 0.9,
      resizeType = ResizeType.SCALE,
      expectContentType,
      fillBgColor,
    } = config;
    this.quality = quality;
    this.maxWidth = expectWidth;
    this.maxHeight = expectHeight;
    this.resizeType = resizeType;
    this.forceContentType = expectContentType;
    this.fillBgColor = fillBgColor;
  }

  // 리사이징 대상 Blob
  protected blob: Blob;
  // 리사이징 대상 Blob 의 URL
  protected blobURL: string;
  // 리사이징 대상 Blob 을 로드할 이미지
  protected domImage: HTMLImageElement;
  // 리사이징 대상 이미지를 그려낼 캔버스
  protected domCanvas: HTMLCanvasElement;
  protected domCanvasContext: CanvasRenderingContext2D;
  // 캔버스에서 만들어낼 이미지 퀄리티
  protected quality: number;
  // contentType 강제 지정
  protected forceContentType: string;
  // 리사이징 최대 사이즈
  protected maxWidth: number;
  protected maxHeight: number;
  // 캔버스 배경 컬러
  protected fillBgColor: string;
  // 리사이징 할 때 캔버스에 그려낼 사이즈 타입
  protected resizeType: ResizeType;
  // 리사이징 완료된 Blob
  protected resizeBlob: Blob;
  // 응답용 promize
  protected promise: Promise<ResizeResult>;
  protected promiseResolve: (value: ResizeResult) => void;
  protected promiseReject: (reason?: any) => void;

  protected getMax(sw: number, sh: number) {
    let maxWidth = this.maxWidth;
    let maxHeight = this.maxHeight;
    if (this.maxWidth <= 0 && this.maxHeight <= 0) {
      maxWidth = sw;
      maxHeight = sh;
    } else if (this.maxWidth <= 0) {
      if (this.resizeType === ResizeType.SCALE_STRETCH) {
        maxWidth = sw <= sh ? sw * (this.maxHeight / sh) : this.maxHeight;
      } else {
        maxWidth = sw * (this.maxHeight / sh);
      }
    } else if (this.maxHeight <= 0) {
      if (this.resizeType === ResizeType.SCALE_STRETCH) {
        maxHeight = sh <= sw ? sh * (this.maxWidth / sw) : this.maxWidth;
      } else {
        maxHeight = sh * (this.maxWidth / sw);
      }
    }
    return {
      maxWidth: maxWidth,
      maxHeight: maxHeight,
    };
  }
  /**
   * 리사이징 타입 - SCALE 형
   * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤. 원본이 작은 경우 늘리지 않음.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToScale(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMax(sw, sh);
    const dx: number = 0;
    const dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    const isLandscape: boolean = sh <= sw;
    if (isLandscape) {
      dw = Math.min(maxWidth, sw);
      dh = Math.floor((dw / sw) * sh);
    } else {
      dh = Math.min(maxHeight, sh);
      dw = Math.floor((dh / sh) * sw);
    }
    return { dx, dy, dw, dh, mw: dw, mh: dh };
  }

  /**
   * 리사이징 타입 - SCALE 형
   * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤. 원본이 작은 경우 비율에 맞춰서 늘림.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToScaleStretch(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMax(sw, sh);
    const dx: number = 0;
    const dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    let contentRatio: number = 1;
    const isLandscape: boolean = sh <= sw;
    if (isLandscape) {
      contentRatio = sw / sh;
      contentRatio = 1 < contentRatio ? contentRatio : 1;
      dw = maxWidth * contentRatio;
      dh = Math.floor((dw / sw) * sh);
    } else {
      contentRatio = sh / sw;
      contentRatio = 1 < contentRatio ? contentRatio : 1;
      dh = maxHeight * contentRatio;
      dw = Math.floor((dh / sh) * sw);
    }
    return { dx, dy, dw, dh, mw: dw, mh: dh };
  }

  /**
   * 리사이징 타입 - COVER 형
   * 정해진 expect 사이즈에 빈 여백 없이 맞춤. 원본이 작은 경우 늘리지 않으며, cover 처리가 가능한 최대 사이즈로 맞춤.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToCover(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMax(sw, sh);
    const min = Math.min(sw, sh, maxWidth, maxHeight);
    const mw = Math.min(min, sw, maxWidth);
    const mh = Math.min(min, sh, maxHeight);
    let dx: number = 0;
    let dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    let expectRatio: number = mw / mh;
    let contentRatio: number = sw / sh;
    if (expectRatio < contentRatio) {
      dh = mh;
      dw = mh * contentRatio;
    } else {
      dw = mw;
      dh = mw / contentRatio;
    }
    dx = (mw - dw) * 0.5;
    dy = (mh - dh) * 0.5;
    return { dx, dy, dw, dh, mw, mh };
  }

  /**
   * 리사이징 타입 - COVER 형
   * 정해진 expect 사이즈에 빈 여백 없이 맞춤. 원본이 작은 경우 늘림.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToCoverStretch(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMax(sw, sh);
    let dx: number = 0;
    let dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    let expectRatio: number = maxWidth / maxHeight;
    let contentRatio: number = sw / sh;
    if (expectRatio < contentRatio) {
      dh = maxHeight;
      dw = maxHeight * contentRatio;
    } else {
      dw = maxWidth;
      dh = maxWidth / contentRatio;
    }
    dx = (maxWidth - dw) * 0.5;
    dy = (maxHeight - dh) * 0.5;
    return { dx, dy, dw, dh, mw: maxWidth, mh: maxHeight };
  }

  /**
   * 리사이징 타입 - Fixed 형
   * 정해진 expect 사이즈에 맞춤.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToFixed(sw: number, sh: number) {
    const { maxWidth, maxHeight } = this.getMax(sw, sh);
    let dw: number = maxWidth;
    let dh: number = maxHeight;
    return {
      dx: 0,
      dy: 0,
      dw: dw,
      dh: dh,
      mw: dw,
      mh: dh,
    };
  }

  /**
   * 이미지 로드 완료
   * @protected
   */
  protected onImageLoaded() {
    URL.revokeObjectURL(this.blobURL);
    const imageWidth = this.domImage.naturalWidth;
    const imageHeight = this.domImage.naturalHeight;
    let drawBound: DrawBound;
    if (this.resizeType === ResizeType.COVER) {
      drawBound = this.getResizeToCover(imageWidth, imageHeight);
    } else if (this.resizeType === ResizeType.COVER_STRETCH) {
      drawBound = this.getResizeToCoverStretch(imageWidth, imageHeight);
    } else if (this.resizeType === ResizeType.SCALE_STRETCH) {
      drawBound = this.getResizeToScaleStretch(imageWidth, imageHeight);
    } else if (this.resizeType === ResizeType.SCALE) {
      drawBound = this.getResizeToScale(imageWidth, imageHeight);
    } else {
      drawBound = this.getResizeToFixed(imageWidth, imageHeight);
    }
    const { dx, dy, dw, dh, mw, mh } = drawBound;
    const contentType = this.forceContentType || this.blob.type;
    this.domCanvas.width = mw;
    this.domCanvas.height = mh;
    if (this.fillBgColor) {
      this.domCanvasContext.fillStyle = this.fillBgColor;
      this.domCanvasContext.fillRect(0, 0, mw, mh);
    }
    this.domCanvasContext.drawImage(this.domImage, 0, 0, imageWidth, imageHeight, dx, dy, dw, dh);
    this.domCanvas.toBlob(this.onResized.bind(this), contentType, this.quality); // type 이 jpeg 인 경우만 quality 적용이 됨
  }

  /**
   * 이미지 로드 오류
   * @protected
   */
  protected onImageError() {
    URL.revokeObjectURL(this.blobURL);
    this.promiseReject({
      ...this.getState(),
      error: new Error('image load error'),
    });
  }

  /**
   * 이미지 리사이징 완료
   * @protected
   * @param {Blob} resizeBlob
   */
  protected onResized(resizeBlob: Blob) {
    this.resizeBlob = resizeBlob;
    this.promiseResolve(this.getState());
  }

  /**
   * 리사이징 이미지 생성하기
   * @returns {Promise<ResizeResult>}
   */
  create(): Promise<ResizeResult> {
    this.domCanvas = document.createElement('canvas');
    this.domCanvasContext = this.domCanvas.getContext('2d');
    this.domImage = new Image();
    this.domImage.onload = this.onImageLoaded.bind(this);
    this.domImage.onerror = this.onImageError.bind(this);
    this.promise = new Promise((resolve, reject) => {
      this.promiseResolve = resolve;
      this.promiseReject = reject;
      try {
        this.blobURL = URL.createObjectURL(this.blob);
        this.domImage.src = this.blobURL;
      } catch (err) {
        this.promiseReject({
          ...this.getState(),
          error: err,
        });
      }
    });
    return this.promise;
  }

  getState(): ResizeResult {
    const blob = this.resizeBlob || null;
    const { width = 0, height = 0 } = this.domCanvas || {};
    return {
      blob: blob,
      width: blob ? width : 0,
      height: blob ? height : 0,
    };
  }
}
