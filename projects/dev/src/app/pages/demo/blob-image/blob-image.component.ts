import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { BlobImageResize, ResizeType } from 'projects/packages/src/public-api';

interface Info {
  title: string;
  type: string;
  size: number;
  width: number;
  height: number;
}

@Component({
  selector: 'demo-blob-image',
  templateUrl: './blob-image.component.html',
  styleUrls: ['./blob-image.component.scss'],
})
export class BlobImageComponent implements OnInit {
  constructor() {}

  infos: Info[];
  optionWidths: { label: string; value: number }[];
  optionHeights: { label: string; value: number }[];
  optionQualities: { label: string; value: number }[];
  testWidth: number = 600;
  testHeight: number = 0;
  testQuality: number = 0.9;
  testContentType: string = '';
  testFillBgColor: string = '';

  @ViewChildren('demoCanvasRefs') demoCanvasRefs: QueryList<ElementRef<HTMLCanvasElement>>;
  demoList: any[];

  ngOnInit() {
    this.optionWidths = Array.from(Array(10)).map((a, b) => {
      const index = b; // + 1;
      const size = 100 * index;
      return { value: size, label: size.toString() };
    });
    this.optionHeights = Array.from(Array(10)).map((a, b) => {
      const index = b; // + 1;
      const size = 100 * index;
      return { value: size, label: size.toString() };
    });
    this.optionQualities = Array.from(Array(10)).map((a, b) => {
      const index = b + 1;
      const size = parseFloat((0.1 * index).toFixed(1));
      return { value: size, label: size.toString() };
    });
    this.demoList = [
      { title: 'original', info: null, resizeType: null },
      { title: 'resize - fixed', info: null, resizeType: ResizeType.FIXED },
      { title: 'resize - scale', info: null, resizeType: ResizeType.SCALE },
      { title: 'resize - scale stretch', info: null, resizeType: ResizeType.SCALE_STRETCH },
      { title: 'resize - cover', info: null, resizeType: ResizeType.COVER },
      { title: 'resize - cover stretch', info: null, resizeType: ResizeType.COVER_STRETCH },
    ];
  }

  onFileChange(evt) {
    const { files = [] } = (evt && evt.target) || {};
    const file = files[0];
    if (!file) return;
    this.resizeStart(file);
    evt.target.value = null;
  }

  async resizeStart(file: File) {
    this.infos = [];
    const originalBlob = new Blob([file], { type: file.type });
    const len = this.demoList.length;
    const refCanvasList = this.demoCanvasRefs.toArray();
    for (let i = 0; i < len; i++) {
      const demo = this.demoList[i];
      const { nativeElement } = refCanvasList[i];
      const info = await this.drawResizeDemo(nativeElement, originalBlob, demo.resizeType);
      demo.info = {
        ...info,
        title: demo.title,
      };
    }
  }

  private async drawResizeDemo(canvas: HTMLCanvasElement, blob: Blob, resizeType: ResizeType) {
    const expectWidth = this.testWidth;
    const expectHeight = this.testHeight;
    const expectContentType = this.testContentType || undefined;
    const quality = this.testQuality;
    const fillBgColor = this.testFillBgColor || undefined;
    let resizeBlob: Blob = blob;
    let resizeCanvas: HTMLCanvasElement;
    let resizeWidth: number = 0;
    let resizeHeight: number = 0;
    if (ResizeType[resizeType]) {
      const resizer = new BlobImageResize(blob, {
        expectWidth,
        expectHeight,
        quality,
        resizeType,
        expectContentType,
        fillBgColor,
      });
      const resizeResult = await resizer.create();
      resizeBlob = resizeResult.blob;
      resizeWidth = resizeResult.width;
      resizeHeight = resizeResult.height;
    } else {
      resizeBlob = blob;
      resizeCanvas = await this.drawToCanvas(canvas, {
        blob: resizeBlob,
        width: 0,
        height: 0,
      });
    }
    resizeCanvas = await this.drawToCanvas(canvas, {
      blob: resizeBlob,
      width: resizeWidth,
      height: resizeHeight,
    });
    return Promise.resolve({
      size: resizeBlob.size,
      type: resizeBlob.type,
      width: resizeCanvas.width,
      height: resizeCanvas.height,
    });
  }

  private async drawToCanvas(
    canvas: HTMLCanvasElement,
    draw: { blob: Blob; width: number; height: number }
  ): Promise<HTMLCanvasElement> {
    return new Promise((resolve) => {
      const { blob, width, height } = draw;
      const context = canvas.getContext('2d');
      const image = new Image();
      image.onload = () => {
        canvas.width = width || image.naturalWidth;
        canvas.height = height || image.naturalHeight;
        context.drawImage(image, 0, 0);
        URL.revokeObjectURL(image.src);
        resolve(canvas);
      };
      image.onerror = () => {
        console.error('image load error');
        URL.revokeObjectURL(image.src);
        resolve(canvas);
      };
      image.src = URL.createObjectURL(blob);
    });
  }
}
