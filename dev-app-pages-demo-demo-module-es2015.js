(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-app-pages-demo-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <mat-label>expectWidth</mat-label>\n    <mat-select [(ngModel)]=\"testWidth\">\n      <mat-option *ngFor=\"let data of optionWidths\" [value]=\"data.value\">{{\n        data.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>expectHeight</mat-label>\n    <mat-select [(ngModel)]=\"testHeight\">\n      <mat-option *ngFor=\"let data of optionHeights\" [value]=\"data.value\">{{\n        data.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>quality</mat-label>\n    <mat-select [(ngModel)]=\"testQuality\">\n      <mat-option *ngFor=\"let data of optionQualities\" [value]=\"data.value\">{{\n        data.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <div class=\"my-desc\">\n    (quality: allow only contentType image/jpeg)\n  </div>\n  <mat-form-field>\n    <mat-label>expectContentType</mat-label>\n    <input matInput [(ngModel)]=\"testContentType\" />\n    <mat-hint>ex) image/jpeg</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>fillBgColor</mat-label>\n    <input matInput [(ngModel)]=\"testFillBgColor\" />\n    <mat-hint>ex) #ff0000</mat-hint>\n  </mat-form-field>\n</div>\n\n<div class=\"file-wrap\">\n  <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" />\n</div>\n\n<div class=\"demo-wrap\">\n  <div *ngFor=\"let demo of demoList\" class=\"demo-item\">\n    <div class=\"panel-canvas\">\n      <div class=\"draw-area\">\n        <canvas #demoCanvasRefs></canvas>\n      </div>\n    </div>\n    <div *ngIf=\"demo.info\" class=\"panel-info\">\n      <em class=\"tit\">{{ demo.info.title }}</em>\n      <dl class=\"dl\">\n        <dt class=\"dt\">size</dt>\n        <dd class=\"dd\">{{ demo.info.size }}bype / {{ (demo.info.size / 1024).toFixed(2) }}kb</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">type</dt>\n        <dd class=\"dd\">{{ demo.info.type }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">width</dt>\n        <dd class=\"dd\">{{ demo.info.width }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">height</dt>\n        <dd class=\"dd\">{{ demo.info.height }}</dd>\n      </dl>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"canvas-wrap\">\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasOriginal></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCover></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCoverNoneStretch></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasScale></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-wrap\">\n  <div *ngFor=\"let info of infos\" class=\"info-item\">\n    <em class=\"tit\">{{ info.title }}</em>\n    <dl class=\"dl\">\n      <dt class=\"dt\">size</dt>\n      <dd class=\"dd\">{{ info.size }}bype / {{ (info.size / 1024).toFixed(2) }}kb</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">type</dt>\n      <dd class=\"dd\">{{ info.type }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">width</dt>\n      <dd class=\"dd\">{{ info.width }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">height</dt>\n      <dd class=\"dd\">{{ info.height }}</dd>\n    </dl>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <mat-form-field>\n    <mat-label>chunk size</mat-label>\n    <mat-select [(ngModel)]=\"testChunk\">\n      <mat-option *ngFor=\"let chunk of optionChunks\" [value]=\"chunk.value\">{{\n        chunk.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>response type</mat-label>\n    <mat-select [(ngModel)]=\"testResponseType\">\n      <mat-option *ngFor=\"let chunk of optionResponseTypes\" [value]=\"chunk.value\">{{\n        chunk.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div>\n  <input type=\"file\" (change)=\"onFileChange($event)\" />\n</div>\n\n<hr class=\"partition\" />\n\n<div class=\"print-stack\">\n  <div class=\"stack-opt\">\n    <button mat-raised-button color=\"warn\" [disabled]=\"!reader\" (click)=\"onFileAbort($event)\">\n      abort\n    </button>\n    <div class=\"spacer\"></div>\n    <div class=\"stack-count\">read count: {{ changeStackCount }}</div>\n  </div>\n  <div class=\"stack-list\">\n    <div *ngFor=\"let fileEvent of changeStack\" class=\"stack-item\">\n      <div class=\"aside\">\n        {{ fileEvent.type }}\n      </div>\n      <div *ngIf=\"fileEvent.state\" class=\"bside\">\n        <span class=\"label\">\n          <span class=\"dt\">readed</span>\n          <span class=\"dd\">{{ fileEvent.state.readed }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">total</span>\n          <span class=\"dd\">{{ fileEvent.state.total }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">percent</span>\n          <span class=\"dd\">{{ (fileEvent.state.readed / fileEvent.state.total).toFixed(2) }}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../packages/src/blob-image/BlobImageResize.ts":
/*!*****************************************************!*\
  !*** ../packages/src/blob-image/BlobImageResize.ts ***!
  \*****************************************************/
/*! exports provided: BlobImageResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobImageResize", function() { return BlobImageResize; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../packages/src/blob-image/types.ts");
/* eslint-disable */

/**
 * Blob 이미지 리사이즈 용
 * Blob -> Canvas&Image resize -> Blob.
 * @class BlobImageResize
 */
class BlobImageResize {
    /**
     * @param {Blob} blob 변경할 원본 Blob
     * @param {ResizeConfig} [config={}] 리사이징 옵션
     */
    constructor(blob, config = {}) {
        this.blob = blob;
        const { expectWidth = 2000, expectHeight = 2000, quality = 0.9, resizeType = _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE, expectContentType, fillBgColor, } = config;
        this.quality = quality;
        this.maxWidth = expectWidth;
        this.maxHeight = expectHeight;
        this.resizeType = resizeType;
        this.forceContentType = expectContentType;
        this.fillBgColor = fillBgColor;
    }
    getMax(sw, sh) {
        let maxWidth = this.maxWidth;
        let maxHeight = this.maxHeight;
        if (this.maxWidth <= 0 && this.maxHeight <= 0) {
            maxWidth = sw;
            maxHeight = sh;
        }
        else if (this.maxWidth <= 0) {
            if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE_STRETCH) {
                maxWidth = sw <= sh ? sw * (this.maxHeight / sh) : this.maxHeight;
            }
            else {
                maxWidth = maxHeight;
            }
        }
        else if (this.maxHeight <= 0) {
            if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE_STRETCH) {
                maxHeight = sh <= sw ? sh * (this.maxWidth / sw) : this.maxWidth;
            }
            else {
                maxHeight = maxWidth;
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
    getResizeToScale(sw, sh) {
        const { maxWidth, maxHeight } = this.getMax(sw, sh);
        const dx = 0;
        const dy = 0;
        let dw = 0;
        let dh = 0;
        const isLandscape = sh <= sw;
        if (isLandscape) {
            dw = Math.min(maxWidth, sw);
            dh = Math.floor((dw / sw) * sh);
        }
        else {
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
    getResizeToScaleStretch(sw, sh) {
        const { maxWidth, maxHeight } = this.getMax(sw, sh);
        const dx = 0;
        const dy = 0;
        let dw = 0;
        let dh = 0;
        let contentRatio = 1;
        const isLandscape = sh <= sw;
        if (isLandscape) {
            contentRatio = sw / sh;
            contentRatio = 1 < contentRatio ? contentRatio : 1;
            dw = maxWidth * contentRatio;
            dh = Math.floor((dw / sw) * sh);
        }
        else {
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
    getResizeToCover(sw, sh) {
        const { maxWidth, maxHeight } = this.getMax(sw, sh);
        const min = Math.min(sw, sh, maxWidth, maxHeight);
        const mw = Math.min(min, sw, maxWidth);
        const mh = Math.min(min, sh, maxHeight);
        let dx = 0;
        let dy = 0;
        let dw = 0;
        let dh = 0;
        let expectRatio = mw / mh;
        let contentRatio = sw / sh;
        if (expectRatio < contentRatio) {
            dh = mh;
            dw = mh * contentRatio;
        }
        else {
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
    getResizeToCoverStretch(sw, sh) {
        const { maxWidth, maxHeight } = this.getMax(sw, sh);
        let dx = 0;
        let dy = 0;
        let dw = 0;
        let dh = 0;
        let expectRatio = maxWidth / maxHeight;
        let contentRatio = sw / sh;
        if (expectRatio < contentRatio) {
            dh = maxHeight;
            dw = maxHeight * contentRatio;
        }
        else {
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
    getResizeToFixed(sw, sh) {
        const { maxWidth, maxHeight } = this.getMax(sw, sh);
        let dw = maxWidth;
        let dh = maxHeight;
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
    onImageLoaded() {
        URL.revokeObjectURL(this.blobURL);
        const imageWidth = this.domImage.naturalWidth;
        const imageHeight = this.domImage.naturalHeight;
        let drawBound;
        if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].COVER) {
            drawBound = this.getResizeToCover(imageWidth, imageHeight);
        }
        else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].COVER_STRETCH) {
            drawBound = this.getResizeToCoverStretch(imageWidth, imageHeight);
        }
        else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE_STRETCH) {
            drawBound = this.getResizeToScaleStretch(imageWidth, imageHeight);
        }
        else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE) {
            drawBound = this.getResizeToScale(imageWidth, imageHeight);
        }
        else {
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
    onImageError() {
        URL.revokeObjectURL(this.blobURL);
        this.promiseReject(Object.assign(Object.assign({}, this.getState()), { error: new Error('image load error') }));
    }
    /**
     * 이미지 리사이징 완료
     * @protected
     * @param {Blob} resizeBlob
     */
    onResized(resizeBlob) {
        this.resizeBlob = resizeBlob;
        this.promiseResolve(this.getState());
    }
    /**
     * 리사이징 이미지 생성하기
     * @returns {Promise<ResizeResult>}
     */
    create() {
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
            }
            catch (err) {
                this.promiseReject(Object.assign(Object.assign({}, this.getState()), { error: err }));
            }
        });
        return this.promise;
    }
    getState() {
        const blob = this.resizeBlob || null;
        const { width = 0, height = 0 } = this.domCanvas || {};
        return {
            blob: blob,
            width: blob ? width : 0,
            height: blob ? height : 0,
        };
    }
}


/***/ }),

/***/ "../packages/src/blob-image/index.ts":
/*!*******************************************!*\
  !*** ../packages/src/blob-image/index.ts ***!
  \*******************************************/
/*! exports provided: ResizeType, BlobImageResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../packages/src/blob-image/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"]; });

/* harmony import */ var _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlobImageResize */ "../packages/src/blob-image/BlobImageResize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlobImageResize", function() { return _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__["BlobImageResize"]; });





/***/ }),

/***/ "../packages/src/blob-image/types.ts":
/*!*******************************************!*\
  !*** ../packages/src/blob-image/types.ts ***!
  \*******************************************/
/*! exports provided: ResizeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeType", function() { return ResizeType; });
/**
 * 리사이즈 타입
 *  - SCALE: 이미지 비율 유지, 원본이 예상 크기 보다 작은 경우 늘리지 않음.
 *  - SCALE_STRETCH: 이미지 비율 유지, 원본이 예상 크기 보다 작은 경우 작은것을 기준으로 늘림.
 *  - COVER: 이미지 넘치면 잘라냄, 원본이 예상 크기 보다 작은 경우 늘리지 않음.
 *  - COVER_STRETCH: 이미지 넘치면 잘라냄, 원본이 예상 크기 보다 작은 경우 늘림.
 * @export
 * @enum {number}
 */
var ResizeType;
(function (ResizeType) {
    ResizeType[ResizeType["SCALE"] = 0] = "SCALE";
    ResizeType[ResizeType["SCALE_STRETCH"] = 1] = "SCALE_STRETCH";
    ResizeType[ResizeType["COVER"] = 2] = "COVER";
    ResizeType[ResizeType["COVER_STRETCH"] = 3] = "COVER_STRETCH";
    ResizeType[ResizeType["FIXED"] = 4] = "FIXED";
})(ResizeType || (ResizeType = {}));


/***/ }),

/***/ "../packages/src/public-api.ts":
/*!*************************************!*\
  !*** ../packages/src/public-api.ts ***!
  \*************************************/
/*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream, ResizeType, BlobImageResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _read_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./read-stream */ "../packages/src/read-stream/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadEventType", function() { return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function() { return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadResponseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadStream", function() { return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadStream"]; });

/* harmony import */ var _blob_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blob-image */ "../packages/src/blob-image/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizeType", function() { return _blob_image__WEBPACK_IMPORTED_MODULE_1__["ResizeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlobImageResize", function() { return _blob_image__WEBPACK_IMPORTED_MODULE_1__["BlobImageResize"]; });





/***/ }),

/***/ "../packages/src/read-stream/FileReadStream.ts":
/*!*****************************************************!*\
  !*** ../packages/src/read-stream/FileReadStream.ts ***!
  \*****************************************************/
/*! exports provided: FileReadStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReadStream", function() { return FileReadStream; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../packages/src/read-stream/types.ts");
/* eslint-disable */


/**
 * 파일 스트림 읽기.
 * FileReader 사용시 한번에 못 읽는 용량 끊어서 읽기 용.
 * @class FileReadStream
 */
class FileReadStream {
    /**
     * @param {File} file FileReader 로 읽을 파일
     * @param {FileReadConfig} [config={}] 스트림 옵션
     */
    constructor(file, config = {}) {
        // 읽기 시작 여부
        this.readStarted = false;
        // 현재 읽기 offset
        this.readOffset = 0;
        // 현재 읽어야할 offset
        this.readOffsetNext = 0;
        // 현재 읽은량
        this.readCurrent = 0;
        // 현재 취소 상태인지 확인용
        this.readStateAbort = false;
        // 읽은 버퍼
        this.buffers = [];
        this.readFile = file;
        this.reader = new FileReader();
        this.reader.onload = this.onReaderLoaded.bind(this);
        this.reader.onerror = this.onReaderError.bind(this);
        this.subjectState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        const { chunkSize = 1024 * 1024 * 10, responseType = _types__WEBPACK_IMPORTED_MODULE_1__["FileReadResponseType"].BLOB } = config;
        this.readChunkSize = chunkSize;
        this.responseType = responseType;
    }
    /**
     * 파일 읽기 1회 완료
     * @protected
     * @param {Event} evt
     */
    onReaderLoaded(evt) {
        this.readCurrent = this.readOffsetNext;
        this.readOffset += this.readChunkSize;
        this.buffers.push(this.reader.result);
        this.stateChanged();
        this.next();
    }
    /**
     * 파일 읽기 1회 오류
     * @protected
     * @param {Event} evt
     */
    onReaderError(evt) {
        this.resultReject(new Error('file reader onerror event'));
    }
    /**
     * 다음 구간 읽기
     * @protected
     */
    next() {
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
            if (maxSize <= expectNext)
                expectNext = maxSize;
            this.readOffsetNext = expectNext;
            const sliceBlob = this.readFile.slice(this.readOffset, this.readOffsetNext);
            this.reader.readAsArrayBuffer(sliceBlob);
        }
        catch (err) {
            this.onReaderError(err);
        }
    }
    /**
     * state 변경 시 알림
     * @protected
     */
    stateChanged() {
        this.subjectState.next({
            type: _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].CHANGE,
            state: this.getState(),
        });
    }
    /**
     * 완료 시 알림
     * @protected
     */
    resultResolve() {
        const result = {
            type: _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].RESOLVE,
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
    resultReject(reason, type = _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].REJECT) {
        const result = {
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
    start() {
        if (this.readStarted)
            return;
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
    observeState() {
        return this.subjectState.asObservable();
    }
    /**
     * 현재 상태
     * @returns {FileReadState}
     */
    getState() {
        const { name = null, type = null, size = 0, lastModified = Date.now() } = this.readFile || {};
        const state = {
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
            case _types__WEBPACK_IMPORTED_MODULE_1__["FileReadResponseType"].BLOB:
                state.blob = new Blob(this.buffers, { type });
                break;
            case _types__WEBPACK_IMPORTED_MODULE_1__["FileReadResponseType"].BUFFER:
                state.buffers = this.buffers;
                break;
        }
        return state;
    }
    /**
     * 파일 읽기 중단
     */
    abort() {
        this.readStateAbort = true;
        if (this.reader) {
            this.reader.abort();
            this.reader.onload = null;
            this.reader.onerror = null;
            this.resultReject(new Error('file reader abort event'), _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].ABORT);
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


/***/ }),

/***/ "../packages/src/read-stream/index.ts":
/*!********************************************!*\
  !*** ../packages/src/read-stream/index.ts ***!
  \********************************************/
/*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../packages/src/read-stream/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadEventType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FileReadEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function() { return _types__WEBPACK_IMPORTED_MODULE_0__["FileReadResponseType"]; });

/* harmony import */ var _FileReadStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileReadStream */ "../packages/src/read-stream/FileReadStream.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileReadStream", function() { return _FileReadStream__WEBPACK_IMPORTED_MODULE_1__["FileReadStream"]; });

/**
 * dependencies
 * - rxjs: https://rxjs-dev.firebaseapp.com
 */




/***/ }),

/***/ "../packages/src/read-stream/types.ts":
/*!********************************************!*\
  !*** ../packages/src/read-stream/types.ts ***!
  \********************************************/
/*! exports provided: FileReadEventType, FileReadResponseType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReadEventType", function() { return FileReadEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function() { return FileReadResponseType; });
/**
 * 스트림 이벤트 타입
 *  - CHANGE: 변경사항이 있음
 *  - RESOLVE: 완료
 *  - REJECT: 오류
 * @export
 * @enum {string}
 */
var FileReadEventType;
(function (FileReadEventType) {
    FileReadEventType["CHANGE"] = "CHANGE";
    FileReadEventType["RESOLVE"] = "RESOLVE";
    FileReadEventType["REJECT"] = "REJECT";
    FileReadEventType["ABORT"] = "ABORT";
})(FileReadEventType || (FileReadEventType = {}));
/**
 * 스트립 상태 정보 중 완료시 파일 타입.
 *  - BUFFER: ArrayBuffer[] 타입
 *  - BLOB: Blob 타입
 * @export
 * @enum {string}
 */
var FileReadResponseType;
(function (FileReadResponseType) {
    FileReadResponseType["BUFFER"] = "BUFFER";
    FileReadResponseType["BLOB"] = "BLOB";
})(FileReadResponseType || (FileReadResponseType = {}));


/***/ }),

/***/ "./src/app/modules/example/common/common.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/example/common/common.module.ts ***!
  \*********************************************************/
/*! exports provided: ExampleCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleCommonModule", function() { return ExampleCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let ExampleCommonModule = class ExampleCommonModule {
};
ExampleCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
    })
], ExampleCommonModule);



/***/ }),

/***/ "./src/app/pages/demo/blob-image/blob-image.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/demo/blob-image/blob-image.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".file-wrap {\n  padding: 30px 0;\n}\n\n.my-desc {\n  padding: 10px 0;\n  color: #999999;\n}\n\n.demo-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.demo-wrap .demo-item {\n  padding: 10px;\n  width: 25%;\n  min-width: 280px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info {\n  padding: 10px 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info .tit {\n  display: block;\n  padding-bottom: 5px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.demo-wrap .demo-item .panel-info .dl {\n  display: flex;\n  padding: 5px 0;\n  align-items: center;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dt {\n  width: 50px;\n  color: #999999;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dd {\n  color: #000000;\n}\n\n.demo-wrap .demo-item .panel-canvas {\n  position: relative;\n  padding-bottom: 100%;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  border: 1px dashed #000000;\n  background-color: #f9f9f9;\n  background-image: linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9), linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area > canvas {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vYmxvYi1pbWFnZS9ibG9iLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBRkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFJSjs7QUFISTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBS047O0FBSk07RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU1SOztBQUpNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU1SOztBQUxRO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFPVjs7QUFMUTtFQUNFLGNBQUE7QUFPVjs7QUFGSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQUlOOztBQUhNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBNQUFBO0VBZ0JBLDBCQUFBO0VBQ0EsbUNBQUE7QUFWUjs7QUFXUTtFQUNFLGNBQUE7QUFUViIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL2Jsb2ItaW1hZ2UvYmxvYi1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXdyYXAge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ubXktZGVzYyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4uZGVtby13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAuZGVtby1pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWluLXdpZHRoOiAyODBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC5wYW5lbC1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAudGl0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5kbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuZHQge1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICB9XG4gICAgICAgIC5kZCB7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucGFuZWwtY2FudmFzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC5kcmF3LWFyZWEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMDAwMDAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgICNkOWQ5ZDkgMjUlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzUlLFxuICAgICAgICAgICAgI2Q5ZDlkOSA3NSUsXG4gICAgICAgICAgICAjZDlkOWQ5XG4gICAgICAgICAgKSxcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgICNkOWQ5ZDkgMjUlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMjUlLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzUlLFxuICAgICAgICAgICAgI2Q5ZDlkOSA3NSUsXG4gICAgICAgICAgICAjZDlkOWQ5XG4gICAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMTBweCAxMHB4O1xuICAgICAgICA+IGNhbnZhcyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/demo/blob-image/blob-image.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/demo/blob-image/blob-image.component.ts ***!
  \***************************************************************/
/*! exports provided: BlobImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobImageComponent", function() { return BlobImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/packages/src/public-api */ "../packages/src/public-api.ts");



let BlobImageComponent = class BlobImageComponent {
    constructor() {
        this.testWidth = 600;
        this.testHeight = 0;
        this.testQuality = 0.9;
        this.testContentType = '';
        this.testFillBgColor = '';
    }
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
            { title: 'resize - fixed', info: null, resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].FIXED },
            { title: 'resize - scale', info: null, resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE },
            { title: 'resize - scale stretch', info: null, resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE_STRETCH },
            { title: 'resize - cover', info: null, resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].COVER },
            { title: 'resize - cover stretch', info: null, resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].COVER_STRETCH },
        ];
    }
    onFileChange(evt) {
        const { files = [] } = (evt && evt.target) || {};
        const file = files[0];
        if (!file)
            return;
        this.resizeStart(file);
        evt.target.value = null;
    }
    resizeStart(file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infos = [];
            const originalBlob = new Blob([file], { type: file.type });
            const len = this.demoList.length;
            const refCanvasList = this.demoCanvasRefs.toArray();
            for (let i = 0; i < len; i++) {
                const demo = this.demoList[i];
                const { nativeElement } = refCanvasList[i];
                const info = yield this.drawResizeDemo(nativeElement, originalBlob, demo.resizeType);
                demo.info = Object.assign(Object.assign({}, info), { title: demo.title });
            }
        });
    }
    drawResizeDemo(canvas, blob, resizeType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const expectWidth = this.testWidth;
            const expectHeight = this.testHeight;
            const expectContentType = this.testContentType || undefined;
            const quality = this.testQuality;
            const fillBgColor = this.testFillBgColor || undefined;
            let resizeBlob = blob;
            let resizeCanvas;
            let resizeWidth = 0;
            let resizeHeight = 0;
            if (projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ResizeType"][resizeType]) {
                const resizer = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["BlobImageResize"](blob, {
                    expectWidth,
                    expectHeight,
                    quality,
                    resizeType,
                    expectContentType,
                    fillBgColor,
                });
                const resizeResult = yield resizer.create();
                resizeBlob = resizeResult.blob;
                resizeWidth = resizeResult.width;
                resizeHeight = resizeResult.height;
            }
            else {
                resizeBlob = blob;
                resizeCanvas = yield this.drawToCanvas(canvas, {
                    blob: resizeBlob,
                    width: 0,
                    height: 0,
                });
            }
            resizeCanvas = yield this.drawToCanvas(canvas, {
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
        });
    }
    drawToCanvas(canvas, draw) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
    }
};
BlobImageComponent.ctorParameters = () => [];
BlobImageComponent.propDecorators = {
    demoCanvasRefs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['demoCanvasRefs',] }]
};
BlobImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-blob-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./blob-image.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./blob-image.component.scss */ "./src/app/pages/demo/blob-image/blob-image.component.scss")).default]
    })
], BlobImageComponent);



/***/ }),

/***/ "./src/app/pages/demo/demo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/demo/demo.module.ts ***!
  \*******************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/pages/demo/demo.routing */ "./src/app/pages/demo/demo.routing.ts");
/* harmony import */ var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/example/common/common.module */ "./src/app/modules/example/common/common.module.ts");
/* harmony import */ var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read-stream/read-stream.component */ "./src/app/pages/demo/read-stream/read-stream.component.ts");
/* harmony import */ var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blob-image/blob-image.component */ "./src/app/pages/demo/blob-image/blob-image.component.ts");








let PageModule = class PageModule {
};
PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"], _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__["ExampleCommonModule"]],
        declarations: [_read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_6__["ReadStreamComponent"], _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__["BlobImageComponent"]],
    })
], PageModule);



/***/ }),

/***/ "./src/app/pages/demo/demo.routing.ts":
/*!********************************************!*\
  !*** ./src/app/pages/demo/demo.routing.ts ***!
  \********************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-stream/read-stream.component */ "./src/app/pages/demo/read-stream/read-stream.component.ts");
/* harmony import */ var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blob-image/blob-image.component */ "./src/app/pages/demo/blob-image/blob-image.component.ts");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'read-stream',
                component: _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__["ReadStreamComponent"],
            },
            {
                path: 'blob-image',
                component: _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_4__["BlobImageComponent"],
            },
            {
                path: '**',
                component: _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__["ReadStreamComponent"],
            },
        ],
    },
];
let RoutingModule = class RoutingModule {
};
RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/pages/demo/read-stream/read-stream.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/demo/read-stream/read-stream.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".partition {\n  display: block;\n  margin: 30px 0;\n  padding: 0;\n  height: 1px;\n  border: none;\n  background-color: #eeeeee;\n}\n\n.print-stack .stack-opt {\n  display: flex;\n  align-items: center;\n}\n\n.print-stack .stack-opt .spacer {\n  flex: 1;\n}\n\n.print-stack .stack-count {\n  padding: 5px 0;\n  text-align: right;\n  font-size: 14px;\n}\n\n.print-stack .stack-list {\n  display: block;\n  margin-top: 5px;\n  height: 400px;\n  overflow: auto;\n  border: 1px solid #999999;\n}\n\n.print-stack .stack-item {\n  display: flex;\n  align-items: center;\n  margin: 3px;\n  padding: 5px;\n  font-size: 14px;\n  border: 1px solid #cccccc;\n  box-sizing: border-box;\n}\n\n.print-stack .stack-item .aside {\n  width: 90px;\n}\n\n.print-stack .stack-item .bside {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.print-stack .stack-item .label {\n  flex: 1;\n}\n\n.print-stack .stack-item .label .dt {\n  display: block;\n  font-size: 12px;\n  color: #888888;\n}\n\n.print-stack .stack-item .label .dd {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vcmVhZC1zdHJlYW0vcmVhZC1zdHJlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFDSTtFQUNFLE9BQUE7QUFDTjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVJO0VBQ0UsV0FBQTtBQUFOOztBQUVJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQU47O0FBRUk7RUFDRSxPQUFBO0FBQU47O0FBQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDUjs7QUFDTTtFQUNFLGNBQUE7QUFDUiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL3JlYWQtc3RyZWFtL3JlYWQtc3RyZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnByaW50LXN0YWNrIHtcbiAgLnN0YWNrLW9wdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbiAgLnN0YWNrLWNvdW50IHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnN0YWNrLWxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIH1cbiAgLnN0YWNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC5hc2lkZSB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgLmJzaWRlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgZmxleDogMTtcbiAgICAgIC5kdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgfVxuICAgICAgLmRkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/demo/read-stream/read-stream.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/demo/read-stream/read-stream.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReadStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadStreamComponent", function() { return ReadStreamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/packages/src/public-api */ "../packages/src/public-api.ts");



let ReadStreamComponent = class ReadStreamComponent {
    constructor() {
        this.optionChunks = [];
        this.optionResponseTypes = [];
        this.testChunk = 1024;
        this.testResponseType = projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadResponseType"].BLOB;
        this.changeStack = [];
        this.changeStackCount = 0;
        this.changeStackDisplayMax = 50;
    }
    ngOnInit() {
        this.optionResponseTypes = [
            { label: 'BLOB', value: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadResponseType"].BLOB },
            { label: 'BUFFER', value: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadResponseType"].BUFFER },
        ];
        this.optionChunks = Array.from(Array(8)).map((a, b) => {
            const index = b + 1;
            const byte = Math.pow(index * index * 32, 2);
            const kb = byte / 1024;
            const mb = kb / 1024;
            const label = mb < 1 ? `${kb}kb` : `${mb.toFixed(2)}mb`;
            return {
                value: byte,
                label,
            };
        });
        this.testChunk = this.optionChunks[1].value;
    }
    onFileChange(evt) {
        const { files = [] } = (evt && evt.target) || {};
        const file = files[0];
        if (!file)
            return;
        this.readStart(file);
        evt.target.value = null;
    }
    onFileAbort() {
        if (this.reader) {
            this.reader.abort();
            this.reader.destroy();
            this.reader = null;
        }
    }
    readStart(file) {
        this.changeStack = [];
        this.changeStackCount = 0;
        if (this.reader) {
            this.reader.destroy();
            this.reader = null;
        }
        this.reader = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadStream"](file, {
            chunkSize: this.testChunk,
            responseType: this.testResponseType,
        });
        this.reader.observeState().subscribe((evt) => {
            const { type, state } = evt;
            this.changeStackCount++;
            this.changeStack.push({ type, state });
            if (this.changeStackDisplayMax < this.changeStack.length) {
                this.changeStack.shift();
            }
            switch (type) {
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadEventType"].RESOLVE:
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadEventType"].REJECT:
                    console.log(state);
                    this.reader.destroy();
                    this.reader = null;
                    break;
            }
        });
        this.reader.start().catch((err) => console.log(err));
    }
};
ReadStreamComponent.ctorParameters = () => [];
ReadStreamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-read-stream',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./read-stream.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./read-stream.component.scss */ "./src/app/pages/demo/read-stream/read-stream.component.scss")).default]
    })
], ReadStreamComponent);



/***/ })

}]);
//# sourceMappingURL=dev-app-pages-demo-demo-module-es2015.js.map