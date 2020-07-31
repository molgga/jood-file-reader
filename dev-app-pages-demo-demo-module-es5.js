(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-app-pages-demo-demo-module"], {
    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html":
    /*!************************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDemoBlobImageBlobImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  @TODO - blob-image works!\n</p>\n";
      /***/
    },

    /***/
    "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDemoReadStreamReadStreamComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <mat-form-field>\n    <mat-label>test chunk size</mat-label>\n    <mat-select [(ngModel)]=\"testChunkSize\">\n      <mat-option *ngFor=\"let chunk of optionChunkList\" [value]=\"chunk.value\">{{\n        chunk.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <br />\n  <br />\n  @TODO - test option: responseType = BUFFER | BLOB\n  <br />\n  <br />\n  <br />\n</div>\n\n<div>\n  <input type=\"file\" (change)=\"onFileChange($event)\" />\n</div>\n\n<hr class=\"partition\" />\n\n<div class=\"print-stack\">\n  <div class=\"stack-opt\">\n    <button mat-raised-button color=\"warn\" [disabled]=\"!reader\" (click)=\"onFileAbort($event)\">\n      abort\n    </button>\n    <div class=\"spacer\"></div>\n    <div class=\"stack-count\">read count: {{ changeStackCount }}</div>\n  </div>\n  <div class=\"stack-list\">\n    <div *ngFor=\"let fileEvent of changeStack\" class=\"stack-item\">\n      <div class=\"aside\">\n        {{ fileEvent.type }}\n      </div>\n      <div *ngIf=\"fileEvent.state\" class=\"bside\">\n        <span class=\"label\">\n          <span class=\"dt\">readed</span>\n          <span class=\"dd\">{{ fileEvent.state.readed }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">total</span>\n          <span class=\"dd\">{{ fileEvent.state.total }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">percent</span>\n          <span class=\"dd\">{{ (fileEvent.state.readed / fileEvent.state.total).toFixed(2) }}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "../packages/src/blob-image/BlobImageResize.ts":
    /*!*****************************************************!*\
      !*** ../packages/src/blob-image/BlobImageResize.ts ***!
      \*****************************************************/

    /*! exports provided: BlobImageResize */

    /***/
    function packagesSrcBlobImageBlobImageResizeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlobImageResize", function () {
        return BlobImageResize;
      });
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types */
      "../packages/src/blob-image/types.ts");
      /* eslint-disable */

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


      var BlobImageResize = /*#__PURE__*/function () {
        /**
         * @param {Blob} blob 변경할 원본 Blob
         * @param {ResizeConfig} [config={}] 리사이징 옵션
         */
        function BlobImageResize(blob) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, BlobImageResize);

          this.blob = blob;
          var _config$expectWidth = config.expectWidth,
              expectWidth = _config$expectWidth === void 0 ? 2000 : _config$expectWidth,
              _config$expectHeight = config.expectHeight,
              expectHeight = _config$expectHeight === void 0 ? 2000 : _config$expectHeight,
              _config$quality = config.quality,
              quality = _config$quality === void 0 ? 0.9 : _config$quality,
              _config$resizeType = config.resizeType,
              resizeType = _config$resizeType === void 0 ? _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].SCALE : _config$resizeType;
          this.quality = quality;
          this.maxWidth = expectWidth;
          this.maxHeight = expectHeight;
          this.resizeType = resizeType;
        }
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


        _createClass(BlobImageResize, [{
          key: "getResizeToScale",
          value: function getResizeToScale(sw, sh) {
            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var isLandscape = sh <= sw;

            if (isLandscape) {
              dw = Math.min(this.maxWidth, sw);
              dh = Math.floor(dw / sw * sh);
            } else {
              dh = Math.min(this.maxWidth, sh);
              dw = Math.floor(dh / sh * sw);
            }

            return {
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh
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

        }, {
          key: "getResizeToCover",
          value: function getResizeToCover(sw, sh) {
            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var expectRatio = this.maxWidth / this.maxHeight;
            var contentRatio = sw / sh;

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
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh
            };
          }
          /**
           * 이미지 로드 완료
           * @protected
           */

        }, {
          key: "onImageLoaded",
          value: function onImageLoaded() {
            URL.revokeObjectURL(this.blobURL);
            var imageWidth = this.domImage.naturalWidth;
            var imageHeight = this.domImage.naturalHeight;
            var drawBound;

            if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"].COVER) {
              drawBound = this.getResizeToCover(imageWidth, imageHeight);
              this.domCanvas.width = this.maxWidth;
              this.domCanvas.height = this.maxHeight;
            } else {
              drawBound = this.getResizeToScale(imageWidth, imageHeight);
              this.domCanvas.width = drawBound.dw;
              this.domCanvas.height = drawBound.dh;
            }

            var _drawBound = drawBound,
                dx = _drawBound.dx,
                dy = _drawBound.dy,
                dw = _drawBound.dw,
                dh = _drawBound.dh;
            this.domCanvasContext.drawImage(this.domImage, 0, 0, imageWidth, imageHeight, dx, dy, dw, dh); // this.domCanvas.toBlob(this.onResized.bind(this), this.blob.type, this.quality);

            this.domCanvas.toBlob(this.onResized.bind(this), 'image/jpeg', this.quality); // type 이 jpeg 로 하지 않는 경우 quality 적용이 안되는듯
          }
          /**
           * 이미지 로드 오류
           * @protected
           */

        }, {
          key: "onImageError",
          value: function onImageError() {
            URL.revokeObjectURL(this.blobURL);
            this.promiseReject(Object.assign(Object.assign({}, this.getState()), {
              error: new Error('image load error')
            }));
          }
          /**
           * 이미지 리사이징 완료
           * @protected
           * @param {Blob} resizeBlob
           */

        }, {
          key: "onResized",
          value: function onResized(resizeBlob) {
            this.resizeBlob = resizeBlob;
            this.promiseResolve(this.getState());
          }
          /**
           * 리사이징 이미지 생성하기
           * @returns {Promise<ResizeResult>}
           */

        }, {
          key: "create",
          value: function create() {
            var _this = this;

            this.domCanvas = document.createElement('canvas');
            this.domCanvasContext = this.domCanvas.getContext('2d');
            this.domImage = new Image();
            this.domImage.onload = this.onImageLoaded.bind(this);
            this.domImage.onerror = this.onImageError.bind(this);
            this.promise = new Promise(function (resolve, reject) {
              _this.promiseResolve = resolve;
              _this.promiseReject = reject;

              try {
                _this.blobURL = URL.createObjectURL(_this.blob);
                _this.domImage.src = _this.blobURL;
              } catch (err) {
                _this.promiseReject(Object.assign(Object.assign({}, _this.getState()), {
                  error: err
                }));
              }
            });
            return this.promise;
          }
        }, {
          key: "getState",
          value: function getState() {
            var blob = this.resizeBlob || null;

            var _ref = this.domCanvas || {},
                _ref$width = _ref.width,
                width = _ref$width === void 0 ? 0 : _ref$width,
                _ref$height = _ref.height,
                height = _ref$height === void 0 ? 0 : _ref$height;

            return {
              blob: blob,
              width: blob ? width : 0,
              height: blob ? height : 0
            };
          }
        }]);

        return BlobImageResize;
      }();
      /***/

    },

    /***/
    "../packages/src/blob-image/index.ts":
    /*!*******************************************!*\
      !*** ../packages/src/blob-image/index.ts ***!
      \*******************************************/

    /*! exports provided: ResizeType, BlobImageResize */

    /***/
    function packagesSrcBlobImageIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types */
      "../packages/src/blob-image/types.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResizeType", function () {
        return _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"];
      });
      /* harmony import */


      var _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./BlobImageResize */
      "../packages/src/blob-image/BlobImageResize.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BlobImageResize", function () {
        return _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__["BlobImageResize"];
      });
      /***/

    },

    /***/
    "../packages/src/blob-image/types.ts":
    /*!*******************************************!*\
      !*** ../packages/src/blob-image/types.ts ***!
      \*******************************************/

    /*! exports provided: ResizeType */

    /***/
    function packagesSrcBlobImageTypesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizeType", function () {
        return ResizeType;
      });
      /**
       * 리사이즈 타입
       *  - SCALE: 최대 크기에 맞춤, 이미지 비율 유지.
       *  - COVER: 최대 크기에 맞춤, 이미지 넘치면 잘라냄.
       * @export
       * @enum {number}
       */


      var ResizeType;

      (function (ResizeType) {
        ResizeType[ResizeType["SCALE"] = 0] = "SCALE";
        ResizeType[ResizeType["COVER"] = 1] = "COVER";
      })(ResizeType || (ResizeType = {}));
      /***/

    },

    /***/
    "../packages/src/public-api.ts":
    /*!*************************************!*\
      !*** ../packages/src/public-api.ts ***!
      \*************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream, ResizeType, BlobImageResize */

    /***/
    function packagesSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _read_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./read-stream */
      "../packages/src/read-stream/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadEventType", function () {
        return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadEventType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function () {
        return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadResponseType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadStream", function () {
        return _read_stream__WEBPACK_IMPORTED_MODULE_0__["FileReadStream"];
      });
      /* harmony import */


      var _blob_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blob-image */
      "../packages/src/blob-image/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResizeType", function () {
        return _blob_image__WEBPACK_IMPORTED_MODULE_1__["ResizeType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BlobImageResize", function () {
        return _blob_image__WEBPACK_IMPORTED_MODULE_1__["BlobImageResize"];
      });
      /***/

    },

    /***/
    "../packages/src/read-stream/FileReadStream.ts":
    /*!*****************************************************!*\
      !*** ../packages/src/read-stream/FileReadStream.ts ***!
      \*****************************************************/

    /*! exports provided: FileReadStream */

    /***/
    function packagesSrcReadStreamFileReadStreamTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileReadStream", function () {
        return FileReadStream;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "../../node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./types */
      "../packages/src/read-stream/types.ts");
      /* eslint-disable */

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


      var FileReadStream = /*#__PURE__*/function () {
        /**
         * @param {File} file FileReader 로 읽을 파일
         * @param {FileReadConfig} [config={}] 스트림 옵션
         */
        function FileReadStream(file) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, FileReadStream);

          // 읽기 시작 여부
          this.readStarted = false; // 현재 읽기 offset

          this.readOffset = 0; // 현재 읽어야할 offset

          this.readOffsetNext = 0; // 현재 읽은량

          this.readCurrent = 0; // 현재 취소 상태인지 확인용

          this.readStateAbort = false; // 읽은 버퍼

          this.buffers = [];
          this.readFile = file;
          this.reader = new FileReader();
          this.reader.onload = this.onReaderLoaded.bind(this);
          this.reader.onerror = this.onReaderError.bind(this);
          this.subjectState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          var _config$chunkSize = config.chunkSize,
              chunkSize = _config$chunkSize === void 0 ? 1024 * 1024 * 10 : _config$chunkSize,
              _config$responseType = config.responseType,
              responseType = _config$responseType === void 0 ? _types__WEBPACK_IMPORTED_MODULE_1__["FileReadResponseType"].BLOB : _config$responseType;
          this.readChunkSize = chunkSize;
          this.responseType = responseType;
        }
        /**
         * 파일 읽기 1회 완료
         * @protected
         * @param {Event} evt
         */


        _createClass(FileReadStream, [{
          key: "onReaderLoaded",
          value: function onReaderLoaded(evt) {
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

        }, {
          key: "onReaderError",
          value: function onReaderError(evt) {
            this.resultReject(new Error('file reader onerror event'));
          }
          /**
           * 다음 구간 읽기
           * @protected
           */

        }, {
          key: "next",
          value: function next() {
            if (this.readStateAbort) {
              return;
            }

            try {
              var maxSize = this.readFile.size;

              if (maxSize <= this.readOffset) {
                this.resultResolve();
                return;
              }

              var expectNext = this.readOffset + this.readChunkSize;
              if (maxSize <= expectNext) expectNext = maxSize;
              this.readOffsetNext = expectNext;
              var sliceBlob = this.readFile.slice(this.readOffset, this.readOffsetNext);
              this.reader.readAsArrayBuffer(sliceBlob);
            } catch (err) {
              this.resultReject(err);
            }
          }
          /**
           * state 변경 시 알림
           * @protected
           */

        }, {
          key: "stateChanged",
          value: function stateChanged() {
            this.subjectState.next({
              type: _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].CHANGE,
              state: this.getState()
            });
          }
          /**
           * 완료 시 알림
           * @protected
           */

        }, {
          key: "resultResolve",
          value: function resultResolve() {
            var result = {
              type: _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].RESOLVE,
              state: this.getState()
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

        }, {
          key: "resultReject",
          value: function resultReject(reason) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _types__WEBPACK_IMPORTED_MODULE_1__["FileReadEventType"].REJECT;
            var result = {
              type: type,
              state: null,
              error: reason
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

        }, {
          key: "start",
          value: function start() {
            var _this2 = this;

            if (this.readStarted) return;
            this.readStarted = true;
            this.readPromise = new Promise(function (resolve, reject) {
              _this2.readPromiseResolve = resolve;
              _this2.readPromiseReject = reject;
            });
            this.next();
            return this.readPromise;
          }
          /**
           * 상태변경 옵저버
           * @returns {Observable<FileReadEvent>}
           */

        }, {
          key: "observeState",
          value: function observeState() {
            return this.subjectState.asObservable();
          }
          /**
           * 현재 상태
           * @returns {FileReadState}
           */

        }, {
          key: "getState",
          value: function getState() {
            var _ref2 = this.readFile || {},
                _ref2$name = _ref2.name,
                name = _ref2$name === void 0 ? null : _ref2$name,
                _ref2$type = _ref2.type,
                type = _ref2$type === void 0 ? null : _ref2$type,
                _ref2$size = _ref2.size,
                size = _ref2$size === void 0 ? 0 : _ref2$size,
                _ref2$lastModified = _ref2.lastModified,
                lastModified = _ref2$lastModified === void 0 ? Date.now() : _ref2$lastModified;

            var state = {
              fileName: name,
              fileType: type,
              fileSize: size,
              fileLastModified: lastModified,
              total: size,
              readed: this.readCurrent,
              responseType: this.responseType,
              chunkSize: this.readChunkSize
            };

            switch (this.responseType) {
              case _types__WEBPACK_IMPORTED_MODULE_1__["FileReadResponseType"].BLOB:
                state.blob = new Blob(this.buffers, {
                  type: type
                });
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

        }, {
          key: "abort",
          value: function abort() {
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

        }, {
          key: "destroy",
          value: function destroy() {
            if (this.reader) {
              this.reader.abort();
              this.reader.onload = null;
              this.reader.onerror = null;
              this.reader = null;
            }

            this.readFile = null;
          }
        }]);

        return FileReadStream;
      }();
      /***/

    },

    /***/
    "../packages/src/read-stream/index.ts":
    /*!********************************************!*\
      !*** ../packages/src/read-stream/index.ts ***!
      \********************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream */

    /***/
    function packagesSrcReadStreamIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types */
      "../packages/src/read-stream/types.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadEventType", function () {
        return _types__WEBPACK_IMPORTED_MODULE_0__["FileReadEventType"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function () {
        return _types__WEBPACK_IMPORTED_MODULE_0__["FileReadResponseType"];
      });
      /* harmony import */


      var _FileReadStream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./FileReadStream */
      "../packages/src/read-stream/FileReadStream.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FileReadStream", function () {
        return _FileReadStream__WEBPACK_IMPORTED_MODULE_1__["FileReadStream"];
      });
      /**
       * dependencies
       * - rxjs: https://rxjs-dev.firebaseapp.com
       */

      /***/

    },

    /***/
    "../packages/src/read-stream/types.ts":
    /*!********************************************!*\
      !*** ../packages/src/read-stream/types.ts ***!
      \********************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType */

    /***/
    function packagesSrcReadStreamTypesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileReadEventType", function () {
        return FileReadEventType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileReadResponseType", function () {
        return FileReadResponseType;
      });
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
      /***/

    },

    /***/
    "./src/app/modules/example/common/common.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/example/common/common.module.ts ***!
      \*********************************************************/

    /*! exports provided: ExampleCommonModule */

    /***/
    function srcAppModulesExampleCommonCommonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleCommonModule", function () {
        return ExampleCommonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var ExampleCommonModule = function ExampleCommonModule() {
        _classCallCheck(this, ExampleCommonModule);
      };

      ExampleCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], ExampleCommonModule);
      /***/
    },

    /***/
    "./src/app/pages/demo/blob-image/blob-image.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/demo/blob-image/blob-image.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDemoBlobImageBlobImageComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL2Jsb2ItaW1hZ2UvYmxvYi1pbWFnZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/demo/blob-image/blob-image.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/demo/blob-image/blob-image.component.ts ***!
      \***************************************************************/

    /*! exports provided: BlobImageComponent */

    /***/
    function srcAppPagesDemoBlobImageBlobImageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlobImageComponent", function () {
        return BlobImageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BlobImageComponent = /*#__PURE__*/function () {
        function BlobImageComponent() {
          _classCallCheck(this, BlobImageComponent);
        }

        _createClass(BlobImageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlobImageComponent;
      }();

      BlobImageComponent.ctorParameters = function () {
        return [];
      };

      BlobImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-blob-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./blob-image.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./blob-image.component.scss */
        "./src/app/pages/demo/blob-image/blob-image.component.scss"))["default"]]
      })], BlobImageComponent);
      /***/
    },

    /***/
    "./src/app/pages/demo/demo.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/demo/demo.module.ts ***!
      \*******************************************/

    /*! exports provided: PageModule */

    /***/
    function srcAppPagesDemoDemoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageModule", function () {
        return PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/pages/demo/demo.routing */
      "./src/app/pages/demo/demo.routing.ts");
      /* harmony import */


      var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ~/dev/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/common.module */
      "./src/app/modules/example/common/common.module.ts");
      /* harmony import */


      var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./read-stream/read-stream.component */
      "./src/app/pages/demo/read-stream/read-stream.component.ts");
      /* harmony import */


      var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./blob-image/blob-image.component */
      "./src/app/pages/demo/blob-image/blob-image.component.ts");

      var PageModule = function PageModule() {
        _classCallCheck(this, PageModule);
      };

      PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"], _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__["ExampleCommonModule"]],
        declarations: [_read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_6__["ReadStreamComponent"], _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__["BlobImageComponent"]]
      })], PageModule);
      /***/
    },

    /***/
    "./src/app/pages/demo/demo.routing.ts":
    /*!********************************************!*\
      !*** ./src/app/pages/demo/demo.routing.ts ***!
      \********************************************/

    /*! exports provided: RoutingModule */

    /***/
    function srcAppPagesDemoDemoRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
        return RoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./read-stream/read-stream.component */
      "./src/app/pages/demo/read-stream/read-stream.component.ts");
      /* harmony import */


      var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./blob-image/blob-image.component */
      "./src/app/pages/demo/blob-image/blob-image.component.ts");

      var routes = [{
        path: '',
        children: [{
          path: 'read-stream',
          component: _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__["ReadStreamComponent"]
        }, {
          path: 'blob-image',
          component: _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_4__["BlobImageComponent"]
        }, {
          path: '**',
          component: _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__["ReadStreamComponent"]
        }]
      }];

      var RoutingModule = function RoutingModule() {
        _classCallCheck(this, RoutingModule);
      };

      RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/demo/read-stream/read-stream.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/demo/read-stream/read-stream.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDemoReadStreamReadStreamComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".partition {\n  display: block;\n  margin: 30px 0;\n  padding: 0;\n  height: 1px;\n  border: none;\n  background-color: #eeeeee;\n}\n\n.print-stack .stack-opt {\n  display: flex;\n  align-items: center;\n}\n\n.print-stack .stack-opt .spacer {\n  flex: 1;\n}\n\n.print-stack .stack-count {\n  padding: 5px 0;\n  text-align: right;\n  font-size: 14px;\n}\n\n.print-stack .stack-list {\n  display: block;\n  margin-top: 5px;\n  height: 400px;\n  overflow: auto;\n  border: 1px solid #999999;\n}\n\n.print-stack .stack-item {\n  display: flex;\n  align-items: center;\n  margin: 3px;\n  padding: 5px;\n  font-size: 14px;\n  border: 1px solid #cccccc;\n  box-sizing: border-box;\n}\n\n.print-stack .stack-item .aside {\n  width: 90px;\n}\n\n.print-stack .stack-item .bside {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.print-stack .stack-item .label {\n  flex: 1;\n}\n\n.print-stack .stack-item .label .dt {\n  display: block;\n  font-size: 12px;\n  color: #888888;\n}\n\n.print-stack .stack-item .label .dd {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vcmVhZC1zdHJlYW0vcmVhZC1zdHJlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFDSTtFQUNFLE9BQUE7QUFDTjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVJO0VBQ0UsV0FBQTtBQUFOOztBQUVJO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQU47O0FBRUk7RUFDRSxPQUFBO0FBQU47O0FBQ007RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDUjs7QUFDTTtFQUNFLGNBQUE7QUFDUiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9wYWdlcy9kZW1vL3JlYWQtc3RyZWFtL3JlYWQtc3RyZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRpdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLnByaW50LXN0YWNrIHtcbiAgLnN0YWNrLW9wdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIH1cbiAgLnN0YWNrLWNvdW50IHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLnN0YWNrLWxpc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIH1cbiAgLnN0YWNrLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDNweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC5hc2lkZSB7XG4gICAgICB3aWR0aDogOTBweDtcbiAgICB9XG4gICAgLmJzaWRlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgICAubGFiZWwge1xuICAgICAgZmxleDogMTtcbiAgICAgIC5kdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgfVxuICAgICAgLmRkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/demo/read-stream/read-stream.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/demo/read-stream/read-stream.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ReadStreamComponent */

    /***/
    function srcAppPagesDemoReadStreamReadStreamComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadStreamComponent", function () {
        return ReadStreamComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "../../node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "../packages/src/public-api.ts");

      var ReadStreamComponent = /*#__PURE__*/function () {
        function ReadStreamComponent() {
          _classCallCheck(this, ReadStreamComponent);

          this.testChunkSize = 1024;
          this.optionChunkList = [];
          this.changeStack = [];
          this.changeStackCount = 0;
          this.changeStackDisplayMax = 50;
        }

        _createClass(ReadStreamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.optionChunkList = Array.from(Array(8)).map(function (a, b) {
              var index = b + 1;

              var _byte = Math.pow(index * index * 32, 2);

              var kb = _byte / 1024;
              var mb = kb / 1024;
              var label = mb < 1 ? "".concat(kb, "kb") : "".concat(mb.toFixed(2), "mb");
              return {
                value: _byte,
                label: label
              };
            });
            this.testChunkSize = this.optionChunkList[3].value;
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(evt) {
            var _ref3 = evt && evt.target || {},
                _ref3$files = _ref3.files,
                files = _ref3$files === void 0 ? [] : _ref3$files;

            var file = files[0];
            if (!file) return;
            this.readStart(file);
            evt.target.value = null;
          }
        }, {
          key: "onFileAbort",
          value: function onFileAbort() {
            if (this.reader) {
              this.reader.abort();
              this.reader.destroy();
              this.reader = null;
            }
          }
        }, {
          key: "readStart",
          value: function readStart(file) {
            var _this3 = this;

            this.changeStack = [];
            this.changeStackCount = 0;

            if (this.reader) {
              this.reader.destroy();
              this.reader = null;
            }

            this.reader = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadStream"](file, {
              chunkSize: this.testChunkSize
            });
            this.reader.observeState().subscribe(function (evt) {
              var type = evt.type,
                  state = evt.state;
              _this3.changeStackCount++;

              _this3.changeStack.push({
                type: type,
                state: state
              });

              if (_this3.changeStackDisplayMax < _this3.changeStack.length) {
                _this3.changeStack.shift();
              }

              switch (type) {
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadEventType"].RESOLVE:
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_2__["FileReadEventType"].REJECT:
                  _this3.reader.destroy();

                  _this3.reader = null;
                  break;
              }
            });
            this.reader.start()["catch"](function (err) {
              return console.log(err);
            });
          }
        }]);

        return ReadStreamComponent;
      }();

      ReadStreamComponent.ctorParameters = function () {
        return [];
      };

      ReadStreamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'demo-read-stream',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./read-stream.component.html */
        "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/read-stream/read-stream.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./read-stream.component.scss */
        "./src/app/pages/demo/read-stream/read-stream.component.scss"))["default"]]
      })], ReadStreamComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=dev-app-pages-demo-demo-module-es5.js.map