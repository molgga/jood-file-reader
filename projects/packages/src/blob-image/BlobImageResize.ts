/* eslint-disable */
import { ResizeType, ResizeConfig, ResizeResult, DrawBound } from './types';

/**
 * Blob 이미지 리사이즈 용
 * Blob -> Canvas&Image resize -> Blob.
 * @class BlobImageResize
 * @example
  const someBlob = new Blob([file], { type: file.type });
  const resizer = new BlobImageResize(someBlob, {
    expectWidth: 200,
    expectHeight: 200,
    resizeType: ResizeType.COVER
  });
  const { blob } = await resizer.create();
  const url = URL.createObjectURL(blob);
  const revoke = () => {
    URL.revokeObjectURL(url);
  };
  // ...
  <img :src="url" @load="revoke" @error="revoke" alt="" />
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
    } = config;
    this.quality = quality;
    this.maxWidth = expectWidth;
    this.maxHeight = expectHeight;
    this.resizeType = resizeType;
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
  // 리사이징 최대 사이즈
  protected maxWidth: number;
  protected maxHeight: number;
  // 리사이징 할 때 캔버스에 그려낼 사이즈 타입
  protected resizeType: ResizeType;
  // 리사이징 완료된 Blob
  protected resizeBlob: Blob;
  // 응답용 promize
  protected promise: Promise<ResizeResult>;
  protected promiseResolve: (value: ResizeResult) => void;
  protected promiseReject: (reason?: any) => void;

  /**
   * 리사이징 타입 - SCALE 형
   * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   * @example
    const resizer = new BlobImageResize(null, { expectWidth: 200, expectHeight: 200 });
    // dx, dy 모두 0
    console.log(resizer.getResizeToScale(100, 100)); // 결과이미지: 100x100
    console.log(resizer.getResizeToScale(100, 200)); // 결과이미지: 100x200
    console.log(resizer.getResizeToScale(100, 300)); // 결과이미지: 66x200
    console.log(resizer.getResizeToScale(200, 100)); // 결과이미지: 200x100
    console.log(resizer.getResizeToScale(200, 200)); // 결과이미지: 200x200
    console.log(resizer.getResizeToScale(200, 300)); // 결과이미지: 133x200
    console.log(resizer.getResizeToScale(300, 100)); // 결과이미지: 200x66
    console.log(resizer.getResizeToScale(300, 200)); // 결과이미지: 200x133
    console.log(resizer.getResizeToScale(300, 300)); // 결과이미지: 200x200
   */
  getResizeToScale(sw: number, sh: number): DrawBound {
    const dx: number = 0;
    const dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    const isLandscape: boolean = sh <= sw;
    if (isLandscape) {
      dw = Math.min(this.maxWidth, sw);
      dh = Math.floor((dw / sw) * sh);
    } else {
      dh = Math.min(this.maxWidth, sh);
      dw = Math.floor((dh / sh) * sw);
    }
    return {
      dx,
      dy,
      dw,
      dh,
    };
  }

  /**
   * 리사이징 타입 - COVER 형
   * 정해진 expect 사이즈에 빈 여백 없이 맞춤, 원본 이미지가 작으면 늘리고, 넘치면 잘려나감.
   * @param {number} sw
   * @param {number} sh
   * @returns {DrawBound}
   * @example
    const resizer = new BlobImageResize(null, { expectWidth: 200, expectHeight: 200 });
    // 결과 이미지 모두 200x200
    console.log(resizer.getResizeToCover(100, 100)); // {dx: 0, dy: 0, dw: 200, dh: 200}
    console.log(resizer.getResizeToCover(100, 200)); // {dx: 0, dy: -100, dw: 200, dh: 400}
    console.log(resizer.getResizeToCover(100, 300)); // {dx: 0, dy: -200, dw: 200, dh: 600}
    console.log(resizer.getResizeToCover(200, 100)); // {dx: -100, dy: 0, dw: 400, dh: 200}
    console.log(resizer.getResizeToCover(200, 200)); // {dx: 0, dy: 0, dw: 200, dh: 200}
    console.log(resizer.getResizeToCover(200, 300)); // {dx: 0, dy: -50, dw: 200, dh: 300}
    console.log(resizer.getResizeToCover(300, 100)); // {dx: -200, dy: 0, dw: 600, dh: 200}
    console.log(resizer.getResizeToCover(300, 200)); // {dx: -50, dy: 0, dw: 300, dh: 200}
    console.log(resizer.getResizeToCover(300, 300)); // {dx: 0, dy: 0, dw: 200, dh: 200}
   */
  getResizeToCover(sw: number, sh: number): DrawBound {
    let dx: number = 0;
    let dy: number = 0;
    let dw: number = 0;
    let dh: number = 0;
    let expectRatio: number = this.maxWidth / this.maxHeight;
    let contentRatio: number = sw / sh;
    if (expectRatio < contentRatio) {
      dh = this.maxHeight;
      dw = this.maxHeight * contentRatio;
    } else {
      dw = this.maxWidth;
      dh = this.maxWidth / contentRatio;
    }
    dx = (this.maxWidth - dw) * 0.5;
    dy = (this.maxHeight - dh) * 0.5;
    return {
      dx,
      dy,
      dw,
      dh,
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
      this.domCanvas.width = this.maxWidth;
      this.domCanvas.height = this.maxHeight;
    } else {
      drawBound = this.getResizeToScale(imageWidth, imageHeight);
      this.domCanvas.width = drawBound.dw;
      this.domCanvas.height = drawBound.dh;
    }
    const { dx, dy, dw, dh } = drawBound;
    this.domCanvasContext.drawImage(this.domImage, 0, 0, imageWidth, imageHeight, dx, dy, dw, dh);
    // this.domCanvas.toBlob(this.onResized.bind(this), this.blob.type, this.quality);
    this.domCanvas.toBlob(this.onResized.bind(this), 'image/jpeg', this.quality); // type 이 jpeg 로 하지 않는 경우 quality 적용이 안되는듯
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
