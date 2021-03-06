import * as ExifReader from 'exifreader';
import { toBufferByBlob } from '../utils/toBuffer';
import { ResizeType, ResizeConfig, ResizeResult, DrawBound } from './types';

interface ParseMaxSize {
  maxWidth: number;
  maxHeight: number;
}

interface ParseMetadata {
  sw: number;
  sh: number;
  orientation?: number;
}

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
      applyOrientation = false,
    } = config;
    this.quality = quality;
    this.maxWidth = expectWidth;
    this.maxHeight = expectHeight;
    this.resizeType = resizeType;
    this.forceContentType = expectContentType;
    this.fillBgColor = fillBgColor;
    this.applyOrientation = applyOrientation;
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
  // orientation 적용 여부
  protected applyOrientation: boolean;
  protected detectedOrientation: number;
  // 응답용 promize
  protected promise: Promise<ResizeResult>;
  protected promiseResolve: (value: ResizeResult) => void;
  protected promiseReject: (reason?: any) => void;

  /**
   * 리사이징 타입 - SCALE 형
   * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤. 원본이 작은 경우 늘리지 않음.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   */
  getResizeToScale(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
    const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
    const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
    const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
  getResizeToFixed(sw: number, sh: number): DrawBound {
    const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
   * 이미지 사이즈와 옵션 조합으로 리사이징 가능한 최대 넓이, 높이 반환
   * @protected
   * @param {number} sw
   * @param {number} sh
   * @returns {ParseMaxSize}
   */
  protected getMaxSize(sw: number, sh: number): ParseMaxSize {
    let maxWidth = this.maxWidth;
    let maxHeight = this.maxHeight;
    if (this.maxWidth <= 0 && this.maxHeight <= 0) {
      maxWidth = sw;
      maxHeight = sh;
    } else if (this.maxWidth <= 0) {
      if (this.resizeType === ResizeType.SCALE_STRETCH) {
        maxWidth = sw <= sh ? sw * (this.maxHeight / sh) : this.maxHeight;
      } else if (this.resizeType === ResizeType.FIXED) {
        maxWidth = sw * (this.maxHeight / sh);
      } else {
        maxWidth = maxHeight;
      }
    } else if (this.maxHeight <= 0) {
      if (this.resizeType === ResizeType.SCALE_STRETCH) {
        maxHeight = sh <= sw ? sh * (this.maxWidth / sw) : this.maxWidth;
      } else if (this.resizeType === ResizeType.FIXED) {
        maxHeight = sh * (this.maxWidth / sw);
      } else {
        maxHeight = maxWidth;
      }
    }
    return {
      maxWidth: maxWidth,
      maxHeight: maxHeight,
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
    this.draw(imageWidth, imageHeight);
  }

  async toBufferByBlob(blob: Blob) {
    return await toBufferByBlob(blob);
  }

  /**
   * 이미지 orientation 등 설정 정보에 따라 그려져야할 사이즈, 방향 등 반환
   * @protected
   * @param {number} imageWidth
   * @param {number} imageHeight
   * @returns {Promise<ParseMetadata>}
   */
  protected async parseDrawMetadata(
    imageWidth: number,
    imageHeight: number
  ): Promise<ParseMetadata> {
    let sw = imageWidth;
    let sh = imageHeight;
    let orientation = 0;
    if (this.applyOrientation === true) {
      try {
        // const buffer = await this.blob.arrayBuffer();
        const buffer = await this.toBufferByBlob(this.blob);
        const result = ExifReader.load(buffer);
        if (result.Orientation && result.Orientation.value) {
          orientation = result.Orientation.value;
        }
      } catch (err) {
        console.error(err);
      }
      if (4 < orientation) {
        sw = imageHeight;
        sh = imageWidth;
      }
    }
    return { sw, sh, orientation };
  }

  /**
   * 이미지가 그려져야할 영역 정보 반환
   * @protected
   * @param {number} sw
   * @param {number} sh
   * @return {DrawBound}
   */
  protected parseDrawBound(sw: number, sh: number): DrawBound {
    let drawBound: DrawBound;
    switch (this.resizeType) {
      case ResizeType.COVER:
        drawBound = this.getResizeToCover(sw, sh);
        break;
      case ResizeType.COVER_STRETCH:
        drawBound = this.getResizeToCoverStretch(sw, sh);
        break;
      case ResizeType.SCALE_STRETCH:
        drawBound = this.getResizeToScaleStretch(sw, sh);
        break;
      case ResizeType.SCALE:
        drawBound = this.getResizeToScale(sw, sh);
        break;
      default:
        drawBound = this.getResizeToFixed(sw, sh);
        break;
    }
    return drawBound;
  }

  /**
   * 그리기
   * @protected
   * @param {number} imageWidth
   * @param {number} imageHeight
   * @returns {Promise<void>}
   */
  protected async draw(imageWidth: number, imageHeight: number): Promise<void> {
    const { sw, sh, orientation } = await this.parseDrawMetadata(imageWidth, imageHeight);
    const { dx, dy, dw, dh, mw, mh } = this.parseDrawBound(sw, sh);
    const tx = dw + dx * 2;
    const ty = dh + dy * 2;
    const contentType = this.forceContentType || this.blob.type;
    const canvas = this.domCanvas;
    const context = this.domCanvasContext;
    canvas.width = mw;
    canvas.height = mh;

    if (this.fillBgColor) {
      context.fillStyle = this.fillBgColor;
      context.fillRect(0, 0, mw, mh);
    }
    switch (orientation) {
      case 2:
        context.translate(tx, 0);
        context.scale(-1, 1);
        break;
      case 3:
        context.translate(tx, ty);
        context.rotate(Math.PI);
        break;
      case 4:
        context.translate(0, ty);
        context.scale(1, -1);
        break;
      case 5:
        context.rotate(Math.PI * 0.5);
        context.scale(1, -1);
        break;
      case 6:
        context.rotate(Math.PI * 0.5);
        context.translate(0, -tx);
        break;
      case 7:
        context.rotate(Math.PI * 0.5);
        context.translate(ty, -tx);
        context.scale(-1, 1);
        break;
      case 8:
        context.rotate(Math.PI * -0.5);
        context.translate(-ty, 0);
        break;
    }
    if (4 < orientation) {
      context.drawImage(this.domImage, 0, 0, sh, sw, dy, dx, dh, dw);
    } else {
      context.drawImage(this.domImage, 0, 0, sw, sh, dx, dy, dw, dh);
    }

    this.detectedOrientation = orientation;
    // 그리기 완료 (type 이 jpeg 인 경우만 quality 적용이 됨)
    canvas.toBlob(this.onResized.bind(this), contentType, this.quality);
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
    const orientation = this.detectedOrientation || 0;
    return {
      blob: blob,
      width: blob ? width : 0,
      height: blob ? height : 0,
      orientation,
    };
  }
}
