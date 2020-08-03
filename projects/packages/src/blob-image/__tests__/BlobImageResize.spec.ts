import { BlobImageResize } from '../BlobImageResize';
import { ResizeType, ResizeResult, DrawBound } from '../types';

const TEST_REAL_IMAGE_URL = 'data:image/gif;base64,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';
const TEST_REAL_IMAGE_WIDTH = 61;
const TEST_REAL_IMAGE_HEIGHT = 68;

function createSampleBlob(byte: number) {
  const buffer = new ArrayBuffer(byte);
  return new Blob([buffer]);
}

async function createSampleImageBlob(): Promise<Blob> {
  return new Promise(resolve => {
    fetch(TEST_REAL_IMAGE_URL).then(res => res.blob()).then(blob => {
      resolve(blob);
    }).catch(() => {
      resolve(null);
    });
  })
}

describe('BlobImageResize', () => {
  it('getResizeToCover 확인', () => {
    const blob = createSampleBlob(1024);
    const resizer = new BlobImageResize(blob, { expectWidth: 200, expectHeight: 200 });
    let bound: DrawBound;
    bound = resizer.getResizeToCover(100, 300);
    expect(bound).toEqual({ dx: 0, dy: -100, dw: 100, dh: 300, mw: 100, mh: 100 });
    bound = resizer.getResizeToCover(200, 300);
    expect(bound).toEqual({ dx: 0, dy: -50, dw: 200, dh: 300, mw: 200, mh: 200 });
    bound = resizer.getResizeToCover(300, 200);
    expect(bound).toEqual({ dx: -50, dy: 0, dw: 300, dh: 200, mw: 200, mh: 200  });
    bound = resizer.getResizeToCover(300, 100);
    expect(bound).toEqual({ dx: -100, dy: 0, dw: 300, dh: 100, mw: 100, mh: 100 });
    bound = resizer.getResizeToCover(100, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 100, dh: 100, mw: 100, mh: 100 });
    bound = resizer.getResizeToCover(300, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
  });

  it('getResizeToCoverStretch 확인', () => {
    const blob = createSampleBlob(1024);
    const resizer = new BlobImageResize(blob, { expectWidth: 200, expectHeight: 200 });
    let bound: DrawBound;
    bound = resizer.getResizeToCoverStretch(100, 300);
    expect(bound).toEqual({ dx: 0, dy: -200, dw: 200, dh: 600, mw: 200, mh: 200 });
    bound = resizer.getResizeToCoverStretch(200, 300);
    expect(bound).toEqual({ dx: 0, dy: -50, dw: 200, dh: 300, mw: 200, mh: 200 });
    bound = resizer.getResizeToCoverStretch(300, 200);
    expect(bound).toEqual({ dx: -50, dy: 0, dw: 300, dh: 200, mw: 200, mh: 200  });
    bound = resizer.getResizeToCoverStretch(300, 100);
    expect(bound).toEqual({ dx: -200, dy: 0, dw: 600, dh: 200, mw: 200, mh: 200 });
    bound = resizer.getResizeToCoverStretch(100, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
    bound = resizer.getResizeToCover(300, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
  });

  it('getResizeToScale 확인', () => {
    const blob = createSampleBlob(1024);
    const resizer = new BlobImageResize(blob, { expectWidth: 200, expectHeight: 200 });
    let bound: DrawBound;
    bound = resizer.getResizeToScale(100, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 66, dh: 200, mw: 66, mh: 200 });
    bound = resizer.getResizeToScale(200, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 133, dh: 200, mw: 133, mh: 200 });
    bound = resizer.getResizeToScale(300, 200);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 133, mw: 200, mh: 133 });
    bound = resizer.getResizeToScale(300, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 66, mw: 200, mh: 66 });
    bound = resizer.getResizeToScale(100, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 100, dh: 100, mw: 100, mh: 100 });
    bound = resizer.getResizeToScale(300, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
  });

  it('getResizeToScaleStretch 확인', () => {
    const blob = createSampleBlob(1024);
    const resizer = new BlobImageResize(blob, { expectWidth: 200, expectHeight: 200 });
    let bound: DrawBound;
    bound = resizer.getResizeToScaleStretch(100, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 600, mw: 200, mh: 600 });
    bound = resizer.getResizeToScaleStretch(200, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 300, mw: 200, mh: 300 });
    bound = resizer.getResizeToScaleStretch(300, 200);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 300, dh: 200, mw: 300, mh: 200 });
    bound = resizer.getResizeToScaleStretch(300, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 600, dh: 200, mw: 600, mh: 200 });
    bound = resizer.getResizeToScaleStretch(100, 100);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
    bound = resizer.getResizeToScaleStretch(300, 300);
    expect(bound).toEqual({ dx: 0, dy: 0, dw: 200, dh: 200, mw: 200, mh: 200 });
  });

  it('create 확인', async () => {
    const blob = await createSampleImageBlob();
    const resizer = new BlobImageResize(blob, {
      expectWidth: 200, // 예상 width
      expectHeight: 200, // 예상 height
      quality: 0.9,
      fillBgColor: '#ff0000',
      resizeType: ResizeType.SCALE
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(61);
    expect(resized.height).toBe(68);
  });

  it('create, resize COVER 확인 - 이미지 원본 사이즈 보다 expect 사이즈가 큰 경우', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 100;
    const expectHeight = 100;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.COVER
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(Math.min(TEST_REAL_IMAGE_WIDTH, TEST_REAL_IMAGE_HEIGHT));
    expect(resized.height).toBe(Math.min(TEST_REAL_IMAGE_WIDTH, TEST_REAL_IMAGE_HEIGHT));
  });

  it('create, resize COVER 확인 - 이미지 원본 사이즈 보다 expect 사이즈가 작은 경우', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 50;
    const expectHeight = 50;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.COVER
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(expectWidth);
    expect(resized.height).toBe(expectHeight);
  });

  it('create, resize SCALE 확인 - 이미지 원본 사이즈 보다 expect 사이즈가 큰 경우', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 100;
    const expectHeight = 100;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.SCALE
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(TEST_REAL_IMAGE_WIDTH);
    expect(resized.height).toBe(TEST_REAL_IMAGE_HEIGHT);
  });

  it('create, resize SCALE 확인 - 이미지 원본 사이즈 보다 expect 사이즈가 작은 경우', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 50;
    const expectHeight = 50;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.SCALE
    });
    const resized = await resizer.create();
    if (TEST_REAL_IMAGE_WIDTH < TEST_REAL_IMAGE_HEIGHT) {
      expect(resized.width).toBe(Math.floor(TEST_REAL_IMAGE_WIDTH * (expectWidth/TEST_REAL_IMAGE_HEIGHT)));
      expect(resized.height).toBe(expectHeight);
    } else {
      expect(resized.width).toBe(expectWidth);
      expect(resized.height).toBe(Math.floor(TEST_REAL_IMAGE_HEIGHT * (expectWidth/TEST_REAL_IMAGE_WIDTH)));
    }
  });

  it('create, resize COVER stretch 확인', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 100;
    const expectHeight = 100;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.COVER_STRETCH
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(expectWidth);
    expect(resized.height).toBe(expectHeight);
  });

  it('create, resize SCALE stretch 확인', async () => {
    const blob = await createSampleImageBlob();
    const expectWidth = 100;
    const expectHeight = 100;
    const resizer = new BlobImageResize(blob, {
      expectWidth,
      expectHeight,
      quality: 0.9,
      resizeType: ResizeType.SCALE_STRETCH
    });
    const resized = await resizer.create();
    expect(resized.width).toBe(99);
    expect(resized.height).toBe(111);
  });

  it('create, none blob error 확인', async (testDone) => {
    const noneBlob = {} as any;
    const expectWidth = 50;
    const expectHeight = 50;
    const resizer = new BlobImageResize(noneBlob, {
      expectWidth,
      expectHeight,
    });
    resizer.create().catch((err: ResizeResult) => {
      expect(err).not.toBeNull();
      expect(err.error).not.toBeNull();
      expect(err.blob).toBe(null);
      expect(err.width).toBe(0);
      expect(err.height).toBe(0);
      testDone();
    });
  });

  it('create, onImageError 확인', async (testDone) => {
    const noneImageBlob = createSampleBlob(1024);
    const expectWidth = 50;
    const expectHeight = 50;
    const resizer = new BlobImageResize(noneImageBlob);
    resizer.create().catch((err: ResizeResult) => {
      expect(err).not.toBeNull();
      expect(err.error).not.toBeNull();
      expect(err.blob).toBe(null);
      expect(err.width).toBe(0);
      expect(err.height).toBe(0);
      testDone();
    });
  });
});
