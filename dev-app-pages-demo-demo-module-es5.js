(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-app-pages-demo-demo-module"], {
    /***/
    "+9Kg":
    /*!*********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-common.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function Kg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        'LightSource': function LightSource(value) {
          if (value === 1) {
            return 'Daylight';
          } else if (value === 2) {
            return 'Fluorescent';
          } else if (value === 3) {
            return 'Tungsten (incandescent light)';
          } else if (value === 4) {
            return 'Flash';
          } else if (value === 9) {
            return 'Fine weather';
          } else if (value === 10) {
            return 'Cloudy weather';
          } else if (value === 11) {
            return 'Shade';
          } else if (value === 12) {
            return 'Daylight fluorescent (D 5700 – 7100K)';
          } else if (value === 13) {
            return 'Day white fluorescent (N 4600 – 5400K)';
          } else if (value === 14) {
            return 'Cool white fluorescent (W 3900 – 4500K)';
          } else if (value === 15) {
            return 'White fluorescent (WW 3200 – 3700K)';
          } else if (value === 17) {
            return 'Standard light A';
          } else if (value === 18) {
            return 'Standard light B';
          } else if (value === 19) {
            return 'Standard light C';
          } else if (value === 20) {
            return 'D55';
          } else if (value === 21) {
            return 'D65';
          } else if (value === 22) {
            return 'D75';
          } else if (value === 23) {
            return 'D50';
          } else if (value === 24) {
            return 'ISO studio tungsten';
          } else if (value === 255) {
            return 'Other light source';
          }

          return 'Unknown';
        }
      };
      /***/
    },

    /***/
    "2NhH":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-gps-ifd.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function NhH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        0x0000: {
          'name': 'GPSVersionID',
          'description': function description(value) {
            if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
              return 'Version 2.2';
            }

            return 'Unknown';
          }
        },
        0x0001: {
          'name': 'GPSLatitudeRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'N') {
              return 'North latitude';
            } else if (ref === 'S') {
              return 'South latitude';
            }

            return 'Unknown';
          }
        },
        0x0002: {
          'name': 'GPSLatitude',
          'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getCalculatedGpsValue"]
        },
        0x0003: {
          'name': 'GPSLongitudeRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'E') {
              return 'East longitude';
            } else if (ref === 'W') {
              return 'West longitude';
            }

            return 'Unknown';
          }
        },
        0x0004: {
          'name': 'GPSLongitude',
          'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getCalculatedGpsValue"]
        },
        0x0005: {
          'name': 'GPSAltitudeRef',
          'description': function description(value) {
            if (value === 0) {
              return 'Sea level';
            } else if (value === 1) {
              return 'Sea level reference (negative value)';
            }

            return 'Unknown';
          }
        },
        0x0006: {
          'name': 'GPSAltitude',
          'description': function description(value) {
            return value[0] / value[1] + ' m';
          }
        },
        0x0007: {
          'name': 'GPSTimeStamp',
          'description': function description(values) {
            return values.map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  numerator = _ref2[0],
                  denominator = _ref2[1];

              var num = numerator / denominator;

              if (/^\d(\.|$)/.test("".concat(num))) {
                return "0".concat(num);
              }

              return num;
            }).join(':');
          }
        },
        0x0008: 'GPSSatellites',
        0x0009: {
          'name': 'GPSStatus',
          'description': function description(value) {
            var status = value.join('');

            if (status === 'A') {
              return 'Measurement in progress';
            } else if (status === 'V') {
              return 'Measurement Interoperability';
            }

            return 'Unknown';
          }
        },
        0x000a: {
          'name': 'GPSMeasureMode',
          'description': function description(value) {
            var mode = value.join('');

            if (mode === '2') {
              return '2-dimensional measurement';
            } else if (mode === '3') {
              return '3-dimensional measurement';
            }

            return 'Unknown';
          }
        },
        0x000b: 'GPSDOP',
        0x000c: {
          'name': 'GPSSpeedRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'K') {
              return 'Kilometers per hour';
            } else if (ref === 'M') {
              return 'Miles per hour';
            } else if (ref === 'N') {
              return 'Knots';
            }

            return 'Unknown';
          }
        },
        0x000d: 'GPSSpeed',
        0x000e: {
          'name': 'GPSTrackRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'T') {
              return 'True direction';
            } else if (ref === 'M') {
              return 'Magnetic direction';
            }

            return 'Unknown';
          }
        },
        0x000f: 'GPSTrack',
        0x0010: {
          'name': 'GPSImgDirectionRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'T') {
              return 'True direction';
            } else if (ref === 'M') {
              return 'Magnetic direction';
            }

            return 'Unknown';
          }
        },
        0x0011: 'GPSImgDirection',
        0x0012: 'GPSMapDatum',
        0x0013: {
          'name': 'GPSDestLatitudeRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'N') {
              return 'North latitude';
            } else if (ref === 'S') {
              return 'South latitude';
            }

            return 'Unknown';
          }
        },
        0x0014: {
          'name': 'GPSDestLatitude',
          'description': function description(value) {
            return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
          }
        },
        0x0015: {
          'name': 'GPSDestLongitudeRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'E') {
              return 'East longitude';
            } else if (ref === 'W') {
              return 'West longitude';
            }

            return 'Unknown';
          }
        },
        0x0016: {
          'name': 'GPSDestLongitude',
          'description': function description(value) {
            return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
          }
        },
        0x0017: {
          'name': 'GPSDestBearingRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'T') {
              return 'True direction';
            } else if (ref === 'M') {
              return 'Magnetic direction';
            }

            return 'Unknown';
          }
        },
        0x0018: 'GPSDestBearing',
        0x0019: {
          'name': 'GPSDestDistanceRef',
          'description': function description(value) {
            var ref = value.join('');

            if (ref === 'K') {
              return 'Kilometers';
            } else if (ref === 'M') {
              return 'Miles';
            } else if (ref === 'N') {
              return 'Knots';
            }

            return 'Unknown';
          }
        },
        0x001a: 'GPSDestDistance',
        0x001b: {
          'name': 'GPSProcessingMethod',
          'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getEncodedString"]
        },
        0x001c: {
          'name': 'GPSAreaInformation',
          'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getEncodedString"]
        },
        0x001d: 'GPSDateStamp',
        0x001e: {
          'name': 'GPSDifferential',
          'description': function description(value) {
            if (value === 0) {
              return 'Measurement without differential correction';
            } else if (value === 1) {
              return 'Differential correction applied';
            }

            return 'Unknown';
          }
        },
        0x001f: 'GPSHPositioningError'
      };
      /***/
    },

    /***/
    "4oUU":
    /*!****************************************************!*\
      !*** ./node_modules/exifreader/src/exif-reader.js ***!
      \****************************************************/

    /*! exports provided: default, errors, load, loadView */

    /***/
    function oUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errors", function () {
        return errors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return load;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadView", function () {
        return loadView;
      });
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _dataview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dataview.js */
      "c3Na");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* harmony import */


      var _image_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image-header.js */
      "SN2q");
      /* harmony import */


      var _tags_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tags.js */
      "fJrE");
      /* harmony import */


      var _file_tags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./file-tags.js */
      "8ouu");
      /* harmony import */


      var _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./iptc-tags.js */
      "arft");
      /* harmony import */


      var _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./xmp-tags.js */
      "ySiG");
      /* harmony import */


      var _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./icc-tags.js */
      "LkWp");
      /* harmony import */


      var _png_file_tags_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./png-file-tags.js */
      "V/Uj");
      /* harmony import */


      var _thumbnail_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./thumbnail.js */
      "p64M");
      /* harmony import */


      var _errors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./errors.js */
      "iTVX");
      /**
       * ExifReader
       * http://github.com/mattiasw/exifreader
       * Copyright (C) 2011-2020  Mattias Wallander <mattias@wallander.eu>
       * This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/.
       */

      /* harmony default export */


      __webpack_exports__["default"] = {
        load: load,
        loadView: loadView,
        errors: _errors_js__WEBPACK_IMPORTED_MODULE_12__["default"]
      };
      var errors = _errors_js__WEBPACK_IMPORTED_MODULE_12__["default"];

      function load(data) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          expanded: false
        };

        if (isNodeBuffer(data)) {
          // File data read in Node can share the underlying buffer with other
          // data. Therefore it's safest to get a new one to avoid weird bugs.
          data = new Uint8Array(data).buffer;
        }

        return loadView(getDataView(data), options);
      }

      function isNodeBuffer(data) {
        try {
          return Buffer.isBuffer(data); // eslint-disable-line no-undef
        } catch (error) {
          return false;
        }
      }

      function getDataView(data) {
        try {
          return new DataView(data);
        } catch (error) {
          return new _dataview_js__WEBPACK_IMPORTED_MODULE_1__["default"](data);
        }
      }

      function loadView(dataView) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          expanded: false
        };
        var foundMetaData = false;
        var tags = {};

        var _image_header_js__WEB = _image_header_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseAppMarkers(dataView),
            fileDataOffset = _image_header_js__WEB.fileDataOffset,
            tiffHeaderOffset = _image_header_js__WEB.tiffHeaderOffset,
            iptcDataOffset = _image_header_js__WEB.iptcDataOffset,
            xmpChunks = _image_header_js__WEB.xmpChunks,
            iccChunks = _image_header_js__WEB.iccChunks,
            mpfDataOffset = _image_header_js__WEB.mpfDataOffset,
            pngHeaderOffset = _image_header_js__WEB.pngHeaderOffset;

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_FILE && hasFileData(fileDataOffset)) {
          foundMetaData = true;

          var readTags = _file_tags_js__WEBPACK_IMPORTED_MODULE_6__["default"].read(dataView, fileDataOffset);

          if (options.expanded) {
            tags.file = readTags;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
          }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF && hasExifData(tiffHeaderOffset)) {
          foundMetaData = true;

          var _readTags = _tags_js__WEBPACK_IMPORTED_MODULE_5__["default"].read(dataView, tiffHeaderOffset);

          if (_readTags.Thumbnail) {
            tags.Thumbnail = _readTags.Thumbnail;
            delete _readTags.Thumbnail;
          }

          if (options.expanded) {
            tags.exif = _readTags;
            addGpsGroup(tags);
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, _readTags);
          }

          if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && _readTags['IPTC-NAA'] && !hasIptcData(iptcDataOffset)) {
            var readIptcTags = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(_readTags['IPTC-NAA'].value, 0);

            if (options.expanded) {
              tags.iptc = readIptcTags;
            } else {
              tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readIptcTags);
            }
          }

          if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && _readTags['ApplicationNotes'] && !hasXmpData(xmpChunks)) {
            var readXmpTags = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__["default"].read(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValueFromArray"])(_readTags['ApplicationNotes'].value));

            if (options.expanded) {
              tags.xmp = readXmpTags;
            } else {
              tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readXmpTags);
            }
          }

          if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && _readTags['ICC_Profile'] && !hasIccData(iccChunks)) {
            var readIccTags = _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(_readTags['ICC_Profile'].value, [{
              offset: 0,
              length: _readTags['ICC_Profile'].value.length,
              chunkNumber: 1,
              chunksTotal: 1
            }]);

            if (options.expanded) {
              tags.icc = readIccTags;
            } else {
              tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readIccTags);
            }
          }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && hasIptcData(iptcDataOffset)) {
          foundMetaData = true;

          var _readTags2 = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(dataView, iptcDataOffset);

          if (options.expanded) {
            tags.iptc = _readTags2;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, _readTags2);
          }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && hasXmpData(xmpChunks)) {
          foundMetaData = true;

          var _readTags3 = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__["default"].read(dataView, xmpChunks);

          if (options.expanded) {
            tags.xmp = _readTags3;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, _readTags3);
          }
        }

        if ((_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP) && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && hasIccData(iccChunks)) {
          foundMetaData = true;

          var _readTags4 = _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(dataView, iccChunks);

          if (options.expanded) {
            tags.icc = _readTags4;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, _readTags4);
          }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_MPF && hasMpfData(mpfDataOffset)) {
          foundMetaData = true;

          var readMpfTags = _tags_js__WEBPACK_IMPORTED_MODULE_5__["default"].readMpf(dataView, mpfDataOffset);

          if (options.expanded) {
            tags.mpf = readMpfTags;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readMpfTags);
          }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG_FILE && hasPngFileData(pngHeaderOffset)) {
          foundMetaData = true;

          var _readTags5 = _png_file_tags_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(dataView, pngHeaderOffset);

          if (options.expanded) {
            tags.pngFile = _readTags5;
          } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, _readTags5);
          }
        }

        var thumbnail = (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP) && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_THUMBNAIL && _thumbnail_js__WEBPACK_IMPORTED_MODULE_11__["default"].get(dataView, tags.Thumbnail, tiffHeaderOffset);

        if (thumbnail) {
          foundMetaData = true;
          tags.Thumbnail = thumbnail;
        } else {
          delete tags.Thumbnail;
        }

        if (!foundMetaData) {
          throw new _errors_js__WEBPACK_IMPORTED_MODULE_12__["default"].MetadataMissingError();
        }

        return tags;
      }

      function hasFileData(fileDataOffset) {
        return fileDataOffset !== undefined;
      }

      function hasExifData(tiffHeaderOffset) {
        return tiffHeaderOffset !== undefined;
      }

      function addGpsGroup(tags) {
        if (tags.exif) {
          if (tags.exif.GPSLatitude && tags.exif.GPSLatitudeRef) {
            try {
              tags.gps = tags.gps || {};
              tags.gps.Latitude = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__["getCalculatedGpsValue"])(tags.exif.GPSLatitude.value);

              if (tags.exif.GPSLatitudeRef.value.join('') === 'S') {
                tags.gps.Latitude = -tags.gps.Latitude;
              }
            } catch (error) {// Ignore.
            }
          }

          if (tags.exif.GPSLongitude && tags.exif.GPSLongitudeRef) {
            try {
              tags.gps = tags.gps || {};
              tags.gps.Longitude = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__["getCalculatedGpsValue"])(tags.exif.GPSLongitude.value);

              if (tags.exif.GPSLongitudeRef.value.join('') === 'W') {
                tags.gps.Longitude = -tags.gps.Longitude;
              }
            } catch (error) {// Ignore.
            }
          }

          if (tags.exif.GPSAltitude && tags.exif.GPSAltitudeRef) {
            try {
              tags.gps = tags.gps || {};
              tags.gps.Altitude = tags.exif.GPSAltitude.value[0] / tags.exif.GPSAltitude.value[1];

              if (tags.exif.GPSAltitudeRef.value === 1) {
                tags.gps.Altitude = -tags.gps.Altitude;
              }
            } catch (error) {// Ignore.
            }
          }
        }
      }

      function hasIptcData(iptcDataOffset) {
        return iptcDataOffset !== undefined;
      }

      function hasXmpData(xmpChunks) {
        return Array.isArray(xmpChunks) && xmpChunks.length > 0;
      }

      function hasIccData(iccDataOffsets) {
        return Array.isArray(iccDataOffsets) && iccDataOffsets.length > 0;
      }

      function hasMpfData(mpfDataOffset) {
        return mpfDataOffset !== undefined;
      }

      function hasPngFileData(pngFileDataOffset) {
        return pngFileDataOffset !== undefined;
      }
      /***/

    },

    /***/
    "5bmk":
    /*!*************************************************!*\
      !*** ./projects/packages/src/utils/toBuffer.ts ***!
      \*************************************************/

    /*! exports provided: toBufferByBlob */

    /***/
    function bmk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toBufferByBlob", function () {
        return toBufferByBlob;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! buffer */
      "tjlA");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);

      function toBufferByBlob(blob) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var reader = new FileReader();

                    reader.onload = function () {
                      reader.onload = null;
                      reader.onerror = null;

                      try {
                        // @ts-ignore
                        var buffer = buffer__WEBPACK_IMPORTED_MODULE_1__["Buffer"].from(reader.result);
                        resolve(buffer);
                      } catch (err) {
                        reject(err);
                      }
                    };
                    /* istanbul ignore next */


                    reader.onerror = function (evt) {
                      reader.onload = null;
                      reader.onerror = null;
                      reject(evt.error);
                    };

                    try {
                      reader.readAsArrayBuffer(blob);
                    } catch (err) {
                      reject(err);
                    }
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }
      /***/

    },

    /***/
    "5uTB":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/image-header-jpeg.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function uTB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        isJpegFile: isJpegFile,
        findJpegOffsets: findJpegOffsets
      };
      var MIN_JPEG_DATA_BUFFER_LENGTH = 2;
      var JPEG_ID = 0xffd8;
      var JPEG_ID_SIZE = 2;
      var APP_ID_OFFSET = 4;
      var APP_MARKER_SIZE = 2;
      var TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.

      var IPTC_DATA_OFFSET = 18; // From start of APP13 marker.

      var XMP_DATA_OFFSET = 33; // From start of APP1 marker.

      var XMP_EXTENDED_DATA_OFFSET = 79; // From start of APP1 marker including GUID, total length, and offset.

      var APP2_ICC_DATA_OFFSET = 18; // From start of APP2 marker including marker and chunk/chunk total numbers.

      var MPF_DATA_OFFSET = 8;
      var APP2_ICC_IDENTIFIER = 'ICC_PROFILE\0';
      var ICC_CHUNK_NUMBER_OFFSET = APP_ID_OFFSET + APP2_ICC_IDENTIFIER.length;
      var ICC_TOTAL_CHUNKS_OFFSET = ICC_CHUNK_NUMBER_OFFSET + 1;
      var APP2_MPF_IDENTIFIER = 'MPF\0';
      var SOF0_MARKER = 0xffc0;
      var SOF2_MARKER = 0xffc2;
      var DHT_MARKER = 0xffc4;
      var DQT_MARKER = 0xffdb;
      var DRI_MARKER = 0xffdd;
      var SOS_MARKER = 0xffda;
      var APP0_MARKER = 0xffe0;
      var APP1_MARKER = 0xffe1;
      var APP2_MARKER = 0xffe2;
      var APP13_MARKER = 0xffed;
      var APP15_MARKER = 0xffef;
      var COMMENT_MARKER = 0xfffe;
      var APP1_EXIF_IDENTIFIER = 'Exif';
      var APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/\x00';
      var APP1_XMP_EXTENDED_IDENTIFIER = 'http://ns.adobe.com/xmp/extension/\x00';
      var APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

      function isJpegFile(dataView) {
        return dataView.byteLength >= MIN_JPEG_DATA_BUFFER_LENGTH && dataView.getUint16(0) === JPEG_ID;
      }

      function findJpegOffsets(dataView) {
        var appMarkerPosition = JPEG_ID_SIZE;
        var fieldLength;
        var sof0DataOffset;
        var sof2DataOffset;
        var tiffHeaderOffset;
        var iptcDataOffset;
        var xmpChunks;
        var iccChunks;
        var mpfDataOffset;

        while (appMarkerPosition + APP_ID_OFFSET + 5 <= dataView.byteLength) {
          if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_FILE && isSOF0Marker(dataView, appMarkerPosition)) {
            sof0DataOffset = appMarkerPosition + APP_MARKER_SIZE;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_FILE && isSOF2Marker(dataView, appMarkerPosition)) {
            sof2DataOffset = appMarkerPosition + APP_MARKER_SIZE;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && isApp1ExifMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            tiffHeaderOffset = appMarkerPosition + TIFF_HEADER_OFFSET;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isApp1XmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
              xmpChunks = [];
            }

            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getXmpChunkDetails(appMarkerPosition, fieldLength));
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isApp1ExtendedXmpMarker(dataView, appMarkerPosition)) {
            if (!xmpChunks) {
              xmpChunks = [];
            }

            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            xmpChunks.push(getExtendedXmpChunkDetails(appMarkerPosition, fieldLength));
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_IPTC && isApp13PhotoshopMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            iptcDataOffset = appMarkerPosition + IPTC_DATA_OFFSET;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && isApp2ICCMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            var iccDataOffset = appMarkerPosition + APP2_ICC_DATA_OFFSET;
            var iccDataLength = fieldLength - (APP2_ICC_DATA_OFFSET - APP_MARKER_SIZE);
            var iccChunkNumber = dataView.getUint8(appMarkerPosition + ICC_CHUNK_NUMBER_OFFSET);
            var iccChunksTotal = dataView.getUint8(appMarkerPosition + ICC_TOTAL_CHUNKS_OFFSET);

            if (!iccChunks) {
              iccChunks = [];
            }

            iccChunks.push({
              offset: iccDataOffset,
              length: iccDataLength,
              chunkNumber: iccChunkNumber,
              chunksTotal: iccChunksTotal
            });
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MPF && isApp2MPFMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
            mpfDataOffset = appMarkerPosition + MPF_DATA_OFFSET;
          } else if (isAppMarker(dataView, appMarkerPosition)) {
            fieldLength = dataView.getUint16(appMarkerPosition + APP_MARKER_SIZE);
          } else {
            break;
          }

          appMarkerPosition += APP_MARKER_SIZE + fieldLength;
        }

        return {
          hasAppMarkers: appMarkerPosition > JPEG_ID_SIZE,
          fileDataOffset: sof0DataOffset || sof2DataOffset,
          tiffHeaderOffset: tiffHeaderOffset,
          iptcDataOffset: iptcDataOffset,
          xmpChunks: xmpChunks,
          iccChunks: iccChunks,
          mpfDataOffset: mpfDataOffset
        };
      }

      function isSOF0Marker(dataView, appMarkerPosition) {
        return dataView.getUint16(appMarkerPosition) === SOF0_MARKER;
      }

      function isSOF2Marker(dataView, appMarkerPosition) {
        return dataView.getUint16(appMarkerPosition) === SOF2_MARKER;
      }

      function isApp2ICCMarker(dataView, appMarkerPosition) {
        var markerIdLength = APP2_ICC_IDENTIFIER.length;
        return dataView.getUint16(appMarkerPosition) === APP2_MARKER && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_ICC_IDENTIFIER;
      }

      function isApp2MPFMarker(dataView, appMarkerPosition) {
        var markerIdLength = APP2_MPF_IDENTIFIER.length;
        return dataView.getUint16(appMarkerPosition) === APP2_MARKER && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_MPF_IDENTIFIER;
      }

      function isApp1ExifMarker(dataView, appMarkerPosition) {
        var markerIdLength = APP1_EXIF_IDENTIFIER.length;
        return dataView.getUint16(appMarkerPosition) === APP1_MARKER && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER && dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00;
      }

      function isApp1XmpMarker(dataView, appMarkerPosition) {
        return dataView.getUint16(appMarkerPosition) === APP1_MARKER && isXmpIdentifier(dataView, appMarkerPosition);
      }

      function isXmpIdentifier(dataView, appMarkerPosition) {
        var markerIdLength = APP1_XMP_IDENTIFIER.length;
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER;
      }

      function isApp1ExtendedXmpMarker(dataView, appMarkerPosition) {
        return dataView.getUint16(appMarkerPosition) === APP1_MARKER && isExtendedXmpIdentifier(dataView, appMarkerPosition);
      }

      function isExtendedXmpIdentifier(dataView, appMarkerPosition) {
        var markerIdLength = APP1_XMP_EXTENDED_IDENTIFIER.length;
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_EXTENDED_IDENTIFIER;
      }

      function getXmpChunkDetails(appMarkerPosition, fieldLength) {
        return {
          dataOffset: appMarkerPosition + XMP_DATA_OFFSET,
          length: fieldLength - (XMP_DATA_OFFSET - APP_MARKER_SIZE)
        };
      }

      function getExtendedXmpChunkDetails(appMarkerPosition, fieldLength) {
        return {
          dataOffset: appMarkerPosition + XMP_EXTENDED_DATA_OFFSET,
          length: fieldLength - (XMP_EXTENDED_DATA_OFFSET - APP_MARKER_SIZE)
        };
      }

      function isApp13PhotoshopMarker(dataView, appMarkerPosition) {
        var markerIdLength = APP13_IPTC_IDENTIFIER.length;
        return dataView.getUint16(appMarkerPosition) === APP13_MARKER && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER && dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00;
      }

      function isAppMarker(dataView, appMarkerPosition) {
        var appMarker = dataView.getUint16(appMarkerPosition);
        return appMarker >= APP0_MARKER && appMarker <= APP15_MARKER || appMarker === COMMENT_MARKER || appMarker === SOF0_MARKER || appMarker === SOF2_MARKER || appMarker === DHT_MARKER || appMarker === DQT_MARKER || appMarker === DRI_MARKER || appMarker === SOS_MARKER;
      }
      /***/

    },

    /***/
    "5xd1":
    /*!********************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/demo.module.ts ***!
      \********************************************************/

    /*! exports provided: PageModule */

    /***/
    function xd1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageModule", function () {
        return PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dev_app_pages_demo_demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ~/dev/app/pages/demo/demo.routing */
      "8XIj");
      /* harmony import */


      var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ~/dev/app/shared/shared.module */
      "a6a7");
      /* harmony import */


      var _dev_app_modules_example_common_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ~/dev/app/modules/example/common/common.module */
      "qNk/");
      /* harmony import */


      var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./read-stream/read-stream.component */
      "ngLt");
      /* harmony import */


      var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./blob-image/blob-image.component */
      "fpJW");

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
    "8XIj":
    /*!*********************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/demo.routing.ts ***!
      \*********************************************************/

    /*! exports provided: RoutingModule */

    /***/
    function XIj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
        return RoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _read_stream_read_stream_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./read-stream/read-stream.component */
      "ngLt");
      /* harmony import */


      var _blob_image_blob_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./blob-image/blob-image.component */
      "fpJW");

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
    "8ouu":
    /*!**************************************************!*\
      !*** ./node_modules/exifreader/src/file-tags.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function ouu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types.js */
      "qEx2");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        read: read
      };

      function read(dataView, fileDataOffset) {
        var length = getLength(dataView, fileDataOffset);
        var numberOfColorComponents = getNumberOfColorComponents(dataView, fileDataOffset, length);
        return {
          'Bits Per Sample': getDataPrecision(dataView, fileDataOffset, length),
          'Image Height': getImageHeight(dataView, fileDataOffset, length),
          'Image Width': getImageWidth(dataView, fileDataOffset, length),
          'Color Components': numberOfColorComponents,
          'Subsampling': numberOfColorComponents && getSubsampling(dataView, fileDataOffset, numberOfColorComponents.value, length)
        };
      }

      function getLength(dataView, fileDataOffset) {
        return _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset);
      }

      function getDataPrecision(dataView, fileDataOffset, length) {
        var OFFSET = 2;
        var SIZE = 1;

        if (OFFSET + SIZE > length) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: '' + value
        };
      }

      function getImageHeight(dataView, fileDataOffset, length) {
        var OFFSET = 3;
        var SIZE = 2;

        if (OFFSET + SIZE > length) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: "".concat(value, "px")
        };
      }

      function getImageWidth(dataView, fileDataOffset, length) {
        var OFFSET = 5;
        var SIZE = 2;

        if (OFFSET + SIZE > length) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: "".concat(value, "px")
        };
      }

      function getNumberOfColorComponents(dataView, fileDataOffset, length) {
        var OFFSET = 7;
        var SIZE = 1;

        if (OFFSET + SIZE > length) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: '' + value
        };
      }

      function getSubsampling(dataView, fileDataOffset, numberOfColorComponents, length) {
        var OFFSET = 8;
        var SIZE = 3 * numberOfColorComponents;

        if (OFFSET + SIZE > length) {
          return undefined;
        }

        var components = [];

        for (var i = 0; i < numberOfColorComponents; i++) {
          var componentOffset = fileDataOffset + OFFSET + i * 3;
          components.push([_types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset), _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 1), _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 2)]);
        }

        return {
          value: components,
          description: components.length > 1 ? getComponentIds(components) + getSamplingType(components) : ''
        };
      }

      function getComponentIds(components) {
        var ids = {
          0x01: 'Y',
          0x02: 'Cb',
          0x03: 'Cr',
          0x04: 'I',
          0x05: 'Q'
        };
        return components.map(function (compontent) {
          return ids[compontent[0]];
        }).join('');
      }

      function getSamplingType(components) {
        var types = {
          0x11: '4:4:4 (1 1)',
          0x12: '4:4:0 (1 2)',
          0x14: '4:4:1 (1 4)',
          0x21: '4:2:2 (2 1)',
          0x22: '4:2:0 (2 2)',
          0x24: '4:2:1 (2 4)',
          0x41: '4:1:1 (4 1)',
          0x42: '4:1:0 (4 2)'
        };

        if (components.length === 0 || components[0][1] === undefined || types[components[0][1]] === undefined) {
          return '';
        }

        return types[components[0][1]];
      }
      /***/

    },

    /***/
    "BR4b":
    /*!***********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-exif-ifd.js ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function BR4b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* harmony import */


      var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tag-names-common.js */
      "+9Kg");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        0x829a: {
          'name': 'ExposureTime',
          'description': function description(value) {
            if (value[0] !== 0) {
              return "1/".concat(Math.round(value[1] / value[0]));
            }

            return "0/".concat(value[1]);
          }
        },
        0x829d: {
          'name': 'FNumber',
          'description': function description(value) {
            return "f/".concat(value[0] / value[1]);
          }
        },
        0x8822: {
          'name': 'ExposureProgram',
          'description': function description(value) {
            if (value === 0) {
              return 'Undefined';
            } else if (value === 1) {
              return 'Manual';
            } else if (value === 2) {
              return 'Normal program';
            } else if (value === 3) {
              return 'Aperture priority';
            } else if (value === 4) {
              return 'Shutter priority';
            } else if (value === 5) {
              return 'Creative program';
            } else if (value === 6) {
              return 'Action program';
            } else if (value === 7) {
              return 'Portrait mode';
            } else if (value === 8) {
              return 'Landscape mode';
            } else if (value === 9) {
              return 'Bulb';
            }

            return 'Unknown';
          }
        },
        0x8824: 'SpectralSensitivity',
        0x8827: 'ISOSpeedRatings',
        0x8828: {
          'name': 'OECF',
          'description': function description() {
            return '[Raw OECF table data]';
          }
        },
        0x882a: 'TimeZoneOffset',
        0x882b: 'SelfTimerMode',
        0x8830: {
          name: 'SensitivityType',
          description: function description(value) {
            return {
              1: 'Standard Output Sensitivity',
              2: 'Recommended Exposure Index',
              3: 'ISO Speed',
              4: 'Standard Output Sensitivity and Recommended Exposure Index',
              5: 'Standard Output Sensitivity and ISO Speed',
              6: 'Recommended Exposure Index and ISO Speed',
              7: 'Standard Output Sensitivity, Recommended Exposure Index and ISO Speed'
            }[value] || 'Unknown';
          }
        },
        0x8831: 'StandardOutputSensitivity',
        0x8832: 'RecommendedExposureIndex',
        0x8833: 'ISOSpeed',
        0x8834: 'ISOSpeedLatitudeyyy',
        0x8835: 'ISOSpeedLatitudezzz',
        0x9000: {
          'name': 'ExifVersion',
          'description': function description(value) {
            return Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
          }
        },
        0x9003: 'DateTimeOriginal',
        0x9004: 'DateTimeDigitized',
        0x9009: 'GooglePlusUploadCode',
        0x9010: 'OffsetTime',
        0x9011: 'OffsetTimeOriginal',
        0x9012: 'OffsetTimeDigitized',
        0x9101: {
          'name': 'ComponentsConfiguration',
          'description': function description(value) {
            return value.map(function (character) {
              if (character === 0x31) {
                return 'Y';
              } else if (character === 0x32) {
                return 'Cb';
              } else if (character === 0x33) {
                return 'Cr';
              } else if (character === 0x34) {
                return 'R';
              } else if (character === 0x35) {
                return 'G';
              } else if (character === 0x36) {
                return 'B';
              }
            }).join('');
          }
        },
        0x9102: 'CompressedBitsPerPixel',
        0x9201: {
          'name': 'ShutterSpeedValue',
          'description': function description(value) {
            return "1/".concat(Math.round(Math.pow(2, value[0] / value[1])));
          }
        },
        0x9202: {
          'name': 'ApertureValue',
          'description': function description(value) {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
          }
        },
        0x9203: 'BrightnessValue',
        0x9204: 'ExposureBiasValue',
        0x9205: {
          'name': 'MaxApertureValue',
          'description': function description(value) {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
          }
        },
        0x9206: {
          'name': 'SubjectDistance',
          'description': function description(value) {
            return value[0] / value[1] + ' m';
          }
        },
        0x9207: {
          'name': 'MeteringMode',
          'description': function description(value) {
            if (value === 1) {
              return 'Average';
            } else if (value === 2) {
              return 'CenterWeightedAverage';
            } else if (value === 3) {
              return 'Spot';
            } else if (value === 4) {
              return 'MultiSpot';
            } else if (value === 5) {
              return 'Pattern';
            } else if (value === 6) {
              return 'Partial';
            } else if (value === 255) {
              return 'Other';
            }

            return 'Unknown';
          }
        },
        0x9208: {
          'name': 'LightSource',
          description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__["default"]['LightSource']
        },
        0x9209: {
          'name': 'Flash',
          'description': function description(value) {
            if (value === 0x00) {
              return 'Flash did not fire';
            } else if (value === 0x01) {
              return 'Flash fired';
            } else if (value === 0x05) {
              return 'Strobe return light not detected';
            } else if (value === 0x07) {
              return 'Strobe return light detected';
            } else if (value === 0x09) {
              return 'Flash fired, compulsory flash mode';
            } else if (value === 0x0d) {
              return 'Flash fired, compulsory flash mode, return light not detected';
            } else if (value === 0x0f) {
              return 'Flash fired, compulsory flash mode, return light detected';
            } else if (value === 0x10) {
              return 'Flash did not fire, compulsory flash mode';
            } else if (value === 0x18) {
              return 'Flash did not fire, auto mode';
            } else if (value === 0x19) {
              return 'Flash fired, auto mode';
            } else if (value === 0x1d) {
              return 'Flash fired, auto mode, return light not detected';
            } else if (value === 0x1f) {
              return 'Flash fired, auto mode, return light detected';
            } else if (value === 0x20) {
              return 'No flash function';
            } else if (value === 0x41) {
              return 'Flash fired, red-eye reduction mode';
            } else if (value === 0x45) {
              return 'Flash fired, red-eye reduction mode, return light not detected';
            } else if (value === 0x47) {
              return 'Flash fired, red-eye reduction mode, return light detected';
            } else if (value === 0x49) {
              return 'Flash fired, compulsory flash mode, red-eye reduction mode';
            } else if (value === 0x4d) {
              return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected';
            } else if (value === 0x4f) {
              return 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected';
            } else if (value === 0x59) {
              return 'Flash fired, auto mode, red-eye reduction mode';
            } else if (value === 0x5d) {
              return 'Flash fired, auto mode, return light not detected, red-eye reduction mode';
            } else if (value === 0x5f) {
              return 'Flash fired, auto mode, return light detected, red-eye reduction mode';
            }

            return 'Unknown';
          }
        },
        0x920a: {
          'name': 'FocalLength',
          'description': function description(value) {
            return value[0] / value[1] + ' mm';
          }
        },
        0x9211: 'ImageNumber',
        0x9212: {
          name: 'SecurityClassification',
          description: function description(value) {
            return {
              'C': 'Confidential',
              'R': 'Restricted',
              'S': 'Secret',
              'T': 'Top Secret',
              'U': 'Unclassified'
            }[value] || 'Unknown';
          }
        },
        0x9213: 'ImageHistory',
        0x9214: {
          'name': 'SubjectArea',
          'description': function description(value) {
            if (value.length === 2) {
              return "Location; X: ".concat(value[0], ", Y: ").concat(value[1]);
            } else if (value.length === 3) {
              return "Circle; X: ".concat(value[0], ", Y: ").concat(value[1], ", diameter: ").concat(value[2]);
            } else if (value.length === 4) {
              return "Rectangle; X: ".concat(value[0], ", Y: ").concat(value[1], ", width: ").concat(value[2], ", height: ").concat(value[3]);
            }

            return 'Unknown';
          }
        },
        0x927c: {
          'name': 'MakerNote',
          'description': function description() {
            return '[Raw maker note data]';
          }
        },
        0x9286: {
          'name': 'UserComment',
          'description': _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getEncodedString"]
        },
        0x9290: 'SubSecTime',
        0x9291: 'SubSecTimeOriginal',
        0x9292: 'SubSecTimeDigitized',
        0x9400: {
          'name': 'AmbientTemperature',
          'description': function description(value) {
            return value[0] / value[1] + ' °C';
          }
        },
        0x9401: {
          'name': 'Humidity',
          'description': function description(value) {
            return value[0] / value[1] + ' %';
          }
        },
        0x9402: {
          'name': 'Pressure',
          'description': function description(value) {
            return value[0] / value[1] + ' hPa';
          }
        },
        0x9403: {
          'name': 'WaterDepth',
          'description': function description(value) {
            return value[0] / value[1] + ' m';
          }
        },
        0x9404: {
          'name': 'Acceleration',
          'description': function description(value) {
            return value[0] / value[1] + ' mGal';
          }
        },
        0x9405: {
          'name': 'CameraElevationAngle',
          'description': function description(value) {
            return value[0] / value[1] + ' °';
          }
        },
        0xa000: {
          'name': 'FlashpixVersion',
          'description': function description(value) {
            return value.map(function (charCode) {
              return String.fromCharCode(charCode);
            }).join('');
          }
        },
        0xa001: {
          'name': 'ColorSpace',
          'description': function description(value) {
            if (value === 1) {
              return 'sRGB';
            } else if (value === 0xffff) {
              return 'Uncalibrated';
            }

            return 'Unknown';
          }
        },
        0xa002: 'PixelXDimension',
        0xa003: 'PixelYDimension',
        0xa004: 'RelatedSoundFile',
        0xa005: 'Interoperability IFD Pointer',
        0xa20b: 'FlashEnergy',
        0xa20c: {
          'name': 'SpatialFrequencyResponse',
          'description': function description() {
            return '[Raw SFR table data]';
          }
        },
        0xa20e: 'FocalPlaneXResolution',
        0xa20f: 'FocalPlaneYResolution',
        0xa210: {
          'name': 'FocalPlaneResolutionUnit',
          'description': function description(value) {
            if (value === 2) {
              return 'inches';
            } else if (value === 3) {
              return 'centimeters';
            }

            return 'Unknown';
          }
        },
        0xa214: {
          'name': 'SubjectLocation',
          'description': function description(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                x = _ref4[0],
                y = _ref4[1];

            return "X: ".concat(x, ", Y: ").concat(y);
          }
        },
        0xa215: 'ExposureIndex',
        0xa217: {
          'name': 'SensingMethod',
          'description': function description(value) {
            if (value === 1) {
              return 'Undefined';
            } else if (value === 2) {
              return 'One-chip color area sensor';
            } else if (value === 3) {
              return 'Two-chip color area sensor';
            } else if (value === 4) {
              return 'Three-chip color area sensor';
            } else if (value === 5) {
              return 'Color sequential area sensor';
            } else if (value === 7) {
              return 'Trilinear sensor';
            } else if (value === 8) {
              return 'Color sequential linear sensor';
            }

            return 'Unknown';
          }
        },
        0xa300: {
          'name': 'FileSource',
          'description': function description(value) {
            if (value === 3) {
              return 'DSC';
            }

            return 'Unknown';
          }
        },
        0xa301: {
          'name': 'SceneType',
          'description': function description(value) {
            if (value === 1) {
              return 'A directly photographed image';
            }

            return 'Unknown';
          }
        },
        0xa302: {
          'name': 'CFAPattern',
          'description': function description() {
            return '[Raw CFA pattern table data]';
          }
        },
        0xa401: {
          'name': 'CustomRendered',
          'description': function description(value) {
            if (value === 0) {
              return 'Normal process';
            } else if (value === 1) {
              return 'Custom process';
            }

            return 'Unknown';
          }
        },
        0xa402: {
          'name': 'ExposureMode',
          'description': function description(value) {
            if (value === 0) {
              return 'Auto exposure';
            } else if (value === 1) {
              return 'Manual exposure';
            } else if (value === 2) {
              return 'Auto bracket';
            }

            return 'Unknown';
          }
        },
        0xa403: {
          'name': 'WhiteBalance',
          'description': function description(value) {
            if (value === 0) {
              return 'Auto white balance';
            } else if (value === 1) {
              return 'Manual white balance';
            }

            return 'Unknown';
          }
        },
        0xa404: {
          'name': 'DigitalZoomRatio',
          'description': function description(value) {
            if (value[0] === 0) {
              return 'Digital zoom was not used';
            }

            return '' + value[0] / value[1];
          }
        },
        0xa405: {
          'name': 'FocalLengthIn35mmFilm',
          'description': function description(value) {
            if (value === 0) {
              return 'Unknown';
            }

            return value;
          }
        },
        0xa406: {
          'name': 'SceneCaptureType',
          'description': function description(value) {
            if (value === 0) {
              return 'Standard';
            } else if (value === 1) {
              return 'Landscape';
            } else if (value === 2) {
              return 'Portrait';
            } else if (value === 3) {
              return 'Night scene';
            }

            return 'Unknown';
          }
        },
        0xa407: {
          'name': 'GainControl',
          'description': function description(value) {
            if (value === 0) {
              return 'None';
            } else if (value === 1) {
              return 'Low gain up';
            } else if (value === 2) {
              return 'High gain up';
            } else if (value === 3) {
              return 'Low gain down';
            } else if (value === 4) {
              return 'High gain down';
            }

            return 'Unknown';
          }
        },
        0xa408: {
          'name': 'Contrast',
          'description': function description(value) {
            if (value === 0) {
              return 'Normal';
            } else if (value === 1) {
              return 'Soft';
            } else if (value === 2) {
              return 'Hard';
            }

            return 'Unknown';
          }
        },
        0xa409: {
          'name': 'Saturation',
          'description': function description(value) {
            if (value === 0) {
              return 'Normal';
            } else if (value === 1) {
              return 'Low saturation';
            } else if (value === 2) {
              return 'High saturation';
            }

            return 'Unknown';
          }
        },
        0xa40a: {
          'name': 'Sharpness',
          'description': function description(value) {
            if (value === 0) {
              return 'Normal';
            } else if (value === 1) {
              return 'Soft';
            } else if (value === 2) {
              return 'Hard';
            }

            return 'Unknown';
          }
        },
        0xa40b: {
          'name': 'DeviceSettingDescription',
          'description': function description() {
            return '[Raw device settings table data]';
          }
        },
        0xa40c: {
          'name': 'SubjectDistanceRange',
          'description': function description(value) {
            if (value === 1) {
              return 'Macro';
            } else if (value === 2) {
              return 'Close view';
            } else if (value === 3) {
              return 'Distant view';
            }

            return 'Unknown';
          }
        },
        0xa420: 'ImageUniqueID',
        0xa430: 'CameraOwnerName',
        0xa431: 'BodySerialNumber',
        0xa432: {
          'name': 'LensSpecification',
          'description': function description(value) {
            var focalLengths = "".concat(value[0][0] / value[0][1], "-").concat(value[1][0] / value[1][1], " mm");

            if (value[3][1] === 0) {
              return "".concat(focalLengths, " f/?");
            }

            return "".concat(focalLengths, " f/").concat(1 / (value[2][1] / value[2][1] / (value[3][0] / value[3][1])));
          }
        },
        0xa433: 'LensMake',
        0xa434: 'LensModel',
        0xa435: 'LensSerialNumber',
        0xa460: {
          name: 'CompositeImage',
          description: function description(value) {
            return {
              1: 'Not a Composite Image',
              2: 'General Composite Image',
              3: 'Composite Image Captured While Shooting'
            }[value] || 'Unknown';
          }
        },
        0xa461: 'SourceImageNumberOfCompositeImage',
        0xa462: 'SourceExposureTimesOfCompositeImage',
        0xa500: 'Gamma',
        0xea1c: 'Padding',
        0xea1d: 'OffsetSchema',
        0xfde8: 'OwnerName',
        0xfde9: 'SerialNumber',
        0xfdea: 'Lens',
        0xfe4c: 'RawFile',
        0xfe4d: 'Converter',
        0xfe4e: 'WhiteBalance',
        0xfe51: 'Exposure',
        0xfe52: 'Shadows',
        0xfe53: 'Brightness',
        0xfe54: 'Contrast',
        0xfe55: 'Saturation',
        0xfe56: 'Sharpness',
        0xfe57: 'Smoothness',
        0xfe58: 'MoireFilter'
      };
      /***/
    },

    /***/
    "DC42":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/pages/demo/read-stream/read-stream.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DC42(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <mat-form-field>\n    <mat-label>chunk size</mat-label>\n    <mat-select [(ngModel)]=\"testChunk\">\n      <mat-option *ngFor=\"let chunk of optionChunks\" [value]=\"chunk.value\">{{\n        chunk.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>response type</mat-label>\n    <mat-select [(ngModel)]=\"testResponseType\">\n      <mat-option *ngFor=\"let chunk of optionResponseTypes\" [value]=\"chunk.value\">{{\n        chunk.label\n      }}</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div>\n  <input type=\"file\" (change)=\"onFileChange($event)\" />\n</div>\n\n<hr class=\"partition\" />\n\n<div class=\"print-stack\">\n  <div class=\"stack-opt\">\n    <button mat-raised-button color=\"warn\" [disabled]=\"!reader\" (click)=\"onFileAbort($event)\">\n      abort\n    </button>\n    <div class=\"spacer\"></div>\n    <div class=\"stack-count\">read count: {{ changeStackCount }}</div>\n  </div>\n  <div class=\"stack-list\">\n    <div *ngFor=\"let fileEvent of changeStack\" class=\"stack-item\">\n      <div class=\"aside\">\n        {{ fileEvent.type }}\n      </div>\n      <div *ngIf=\"fileEvent.state\" class=\"bside\">\n        <span class=\"label\">\n          <span class=\"dt\">readed</span>\n          <span class=\"dd\">{{ fileEvent.state.readed }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">total</span>\n          <span class=\"dd\">{{ fileEvent.state.total }}</span>\n        </span>\n        <span class=\"label\">\n          <span class=\"dt\">percent</span>\n          <span class=\"dd\">{{ (fileEvent.state.readed / fileEvent.state.total).toFixed(2) }}</span>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "DE70":
    /*!*************************************************************!*\
      !*** ./projects/packages/src/blob-image/BlobImageResize.ts ***!
      \*************************************************************/

    /*! exports provided: BlobImageResize */

    /***/
    function DE70(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlobImageResize", function () {
        return BlobImageResize;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var exifreader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! exifreader */
      "4oUU");
      /* harmony import */


      var _utils_toBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../utils/toBuffer */
      "5bmk");
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./types */
      "JTfz");
      /**
       * Blob 이미지 리사이즈 용
       * Blob -> Canvas&Image resize -> Blob.
       * @class BlobImageResize
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
              resizeType = _config$resizeType === void 0 ? _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].SCALE : _config$resizeType,
              expectContentType = config.expectContentType,
              fillBgColor = config.fillBgColor,
              _config$applyOrientat = config.applyOrientation,
              applyOrientation = _config$applyOrientat === void 0 ? false : _config$applyOrientat;
          this.quality = quality;
          this.maxWidth = expectWidth;
          this.maxHeight = expectHeight;
          this.resizeType = resizeType;
          this.forceContentType = expectContentType;
          this.fillBgColor = fillBgColor;
          this.applyOrientation = applyOrientation;
        }
        /**
         * 리사이징 타입 - SCALE 형
         * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤. 원본이 작은 경우 늘리지 않음.
         * @param {number} sw
         * @param {number} sh
         * @returns {DrawBound}
         */


        _createClass(BlobImageResize, [{
          key: "getResizeToScale",
          value: function getResizeToScale(sw, sh) {
            var _this$getMaxSize = this.getMaxSize(sw, sh),
                maxWidth = _this$getMaxSize.maxWidth,
                maxHeight = _this$getMaxSize.maxHeight;

            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var isLandscape = sh <= sw;

            if (isLandscape) {
              dw = Math.min(maxWidth, sw);
              dh = Math.floor(dw / sw * sh);
            } else {
              dh = Math.min(maxHeight, sh);
              dw = Math.floor(dh / sh * sw);
            }

            return {
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh,
              mw: dw,
              mh: dh
            };
          }
          /**
           * 리사이징 타입 - SCALE 형
           * 정해진 expect 사이즈를 최대 사이즈로 비율에 맞춤. 원본이 작은 경우 비율에 맞춰서 늘림.
           * @param {number} sw
           * @param {number} sh
           * @returns {DrawBound}
           */

        }, {
          key: "getResizeToScaleStretch",
          value: function getResizeToScaleStretch(sw, sh) {
            var _this$getMaxSize2 = this.getMaxSize(sw, sh),
                maxWidth = _this$getMaxSize2.maxWidth,
                maxHeight = _this$getMaxSize2.maxHeight;

            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var contentRatio = 1;
            var isLandscape = sh <= sw;

            if (isLandscape) {
              contentRatio = sw / sh;
              contentRatio = 1 < contentRatio ? contentRatio : 1;
              dw = maxWidth * contentRatio;
              dh = Math.floor(dw / sw * sh);
            } else {
              contentRatio = sh / sw;
              contentRatio = 1 < contentRatio ? contentRatio : 1;
              dh = maxHeight * contentRatio;
              dw = Math.floor(dh / sh * sw);
            }

            return {
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh,
              mw: dw,
              mh: dh
            };
          }
          /**
           * 리사이징 타입 - COVER 형
           * 정해진 expect 사이즈에 빈 여백 없이 맞춤. 원본이 작은 경우 늘리지 않으며, cover 처리가 가능한 최대 사이즈로 맞춤.
           * @param {number} sw
           * @param {number} sh
           * @returns {DrawBound}
           */

        }, {
          key: "getResizeToCover",
          value: function getResizeToCover(sw, sh) {
            var _this$getMaxSize3 = this.getMaxSize(sw, sh),
                maxWidth = _this$getMaxSize3.maxWidth,
                maxHeight = _this$getMaxSize3.maxHeight;

            var min = Math.min(sw, sh, maxWidth, maxHeight);
            var mw = Math.min(min, sw, maxWidth);
            var mh = Math.min(min, sh, maxHeight);
            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var expectRatio = mw / mh;
            var contentRatio = sw / sh;

            if (expectRatio < contentRatio) {
              dh = mh;
              dw = mh * contentRatio;
            } else {
              dw = mw;
              dh = mw / contentRatio;
            }

            dx = (mw - dw) * 0.5;
            dy = (mh - dh) * 0.5;
            return {
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh,
              mw: mw,
              mh: mh
            };
          }
          /**
           * 리사이징 타입 - COVER 형
           * 정해진 expect 사이즈에 빈 여백 없이 맞춤. 원본이 작은 경우 늘림.
           * @param {number} sw
           * @param {number} sh
           * @returns {DrawBound}
           */

        }, {
          key: "getResizeToCoverStretch",
          value: function getResizeToCoverStretch(sw, sh) {
            var _this$getMaxSize4 = this.getMaxSize(sw, sh),
                maxWidth = _this$getMaxSize4.maxWidth,
                maxHeight = _this$getMaxSize4.maxHeight;

            var dx = 0;
            var dy = 0;
            var dw = 0;
            var dh = 0;
            var expectRatio = maxWidth / maxHeight;
            var contentRatio = sw / sh;

            if (expectRatio < contentRatio) {
              dh = maxHeight;
              dw = maxHeight * contentRatio;
            } else {
              dw = maxWidth;
              dh = maxWidth / contentRatio;
            }

            dx = (maxWidth - dw) * 0.5;
            dy = (maxHeight - dh) * 0.5;
            return {
              dx: dx,
              dy: dy,
              dw: dw,
              dh: dh,
              mw: maxWidth,
              mh: maxHeight
            };
          }
          /**
           * 리사이징 타입 - Fixed 형
           * 정해진 expect 사이즈에 맞춤.
           * @param {number} sw
           * @param {number} sh
           * @returns {DrawBound}
           */

        }, {
          key: "getResizeToFixed",
          value: function getResizeToFixed(sw, sh) {
            var _this$getMaxSize5 = this.getMaxSize(sw, sh),
                maxWidth = _this$getMaxSize5.maxWidth,
                maxHeight = _this$getMaxSize5.maxHeight;

            var dw = maxWidth;
            var dh = maxHeight;
            return {
              dx: 0,
              dy: 0,
              dw: dw,
              dh: dh,
              mw: dw,
              mh: dh
            };
          }
          /**
           * 이미지 사이즈와 옵션 조합으로 리사이징 가능한 최대 넓이, 높이 반환
           * @protected
           * @param {number} sw
           * @param {number} sh
           * @returns {ParseMaxSize}
           */

        }, {
          key: "getMaxSize",
          value: function getMaxSize(sw, sh) {
            var maxWidth = this.maxWidth;
            var maxHeight = this.maxHeight;

            if (this.maxWidth <= 0 && this.maxHeight <= 0) {
              maxWidth = sw;
              maxHeight = sh;
            } else if (this.maxWidth <= 0) {
              if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].SCALE_STRETCH) {
                maxWidth = sw <= sh ? sw * (this.maxHeight / sh) : this.maxHeight;
              } else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].FIXED) {
                maxWidth = sw * (this.maxHeight / sh);
              } else {
                maxWidth = maxHeight;
              }
            } else if (this.maxHeight <= 0) {
              if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].SCALE_STRETCH) {
                maxHeight = sh <= sw ? sh * (this.maxWidth / sw) : this.maxWidth;
              } else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].FIXED) {
                maxHeight = sh * (this.maxWidth / sw);
              } else {
                maxHeight = maxWidth;
              }
            }

            return {
              maxWidth: maxWidth,
              maxHeight: maxHeight
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
            this.draw(imageWidth, imageHeight);
          }
        }, {
          key: "toBufferByBlob",
          value: function toBufferByBlob(blob) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Object(_utils_toBuffer__WEBPACK_IMPORTED_MODULE_2__["toBufferByBlob"])(blob);

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
          /**
           * 이미지 orientation 등 설정 정보에 따라 그려져야할 사이즈, 방향 등 반환
           * @protected
           * @param {number} imageWidth
           * @param {number} imageHeight
           * @returns {Promise<ParseMetadata>}
           */

        }, {
          key: "parseDrawMetadata",
          value: function parseDrawMetadata(imageWidth, imageHeight) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var sw, sh, orientation, buffer, result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      sw = imageWidth;
                      sh = imageHeight;
                      orientation = 0;

                      if (!(this.applyOrientation === true)) {
                        _context3.next = 16;
                        break;
                      }

                      _context3.prev = 4;
                      _context3.next = 7;
                      return this.toBufferByBlob(this.blob);

                    case 7:
                      buffer = _context3.sent;
                      result = exifreader__WEBPACK_IMPORTED_MODULE_1__["load"](buffer);

                      if (result.Orientation && result.Orientation.value) {
                        orientation = result.Orientation.value;
                      }

                      _context3.next = 15;
                      break;

                    case 12:
                      _context3.prev = 12;
                      _context3.t0 = _context3["catch"](4);
                      console.error(_context3.t0);

                    case 15:
                      if (4 < orientation) {
                        sw = imageHeight;
                        sh = imageWidth;
                      }

                    case 16:
                      return _context3.abrupt("return", {
                        sw: sw,
                        sh: sh,
                        orientation: orientation
                      });

                    case 17:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[4, 12]]);
            }));
          }
          /**
           * 이미지가 그려져야할 영역 정보 반환
           * @protected
           * @param {number} sw
           * @param {number} sh
           * @return {DrawBound}
           */

        }, {
          key: "parseDrawBound",
          value: function parseDrawBound(sw, sh) {
            var drawBound;

            switch (this.resizeType) {
              case _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].COVER:
                drawBound = this.getResizeToCover(sw, sh);
                break;

              case _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].COVER_STRETCH:
                drawBound = this.getResizeToCoverStretch(sw, sh);
                break;

              case _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].SCALE_STRETCH:
                drawBound = this.getResizeToScaleStretch(sw, sh);
                break;

              case _types__WEBPACK_IMPORTED_MODULE_3__["ResizeType"].SCALE:
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

        }, {
          key: "draw",
          value: function draw(imageWidth, imageHeight) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _yield$this$parseDraw, sw, sh, orientation, _this$parseDrawBound, dx, dy, dw, dh, mw, mh, tx, ty, contentType, canvas, context;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.parseDrawMetadata(imageWidth, imageHeight);

                    case 2:
                      _yield$this$parseDraw = _context4.sent;
                      sw = _yield$this$parseDraw.sw;
                      sh = _yield$this$parseDraw.sh;
                      orientation = _yield$this$parseDraw.orientation;
                      _this$parseDrawBound = this.parseDrawBound(sw, sh), dx = _this$parseDrawBound.dx, dy = _this$parseDrawBound.dy, dw = _this$parseDrawBound.dw, dh = _this$parseDrawBound.dh, mw = _this$parseDrawBound.mw, mh = _this$parseDrawBound.mh;
                      tx = dw + dx * 2;
                      ty = dh + dy * 2;
                      contentType = this.forceContentType || this.blob.type;
                      canvas = this.domCanvas;
                      context = this.domCanvasContext;
                      canvas.width = mw;
                      canvas.height = mh;

                      if (this.fillBgColor) {
                        context.fillStyle = this.fillBgColor;
                        context.fillRect(0, 0, mw, mh);
                      }

                      _context4.t0 = orientation;
                      _context4.next = _context4.t0 === 2 ? 18 : _context4.t0 === 3 ? 21 : _context4.t0 === 4 ? 24 : _context4.t0 === 5 ? 27 : _context4.t0 === 6 ? 30 : _context4.t0 === 7 ? 33 : _context4.t0 === 8 ? 37 : 40;
                      break;

                    case 18:
                      context.translate(tx, 0);
                      context.scale(-1, 1);
                      return _context4.abrupt("break", 40);

                    case 21:
                      context.translate(tx, ty);
                      context.rotate(Math.PI);
                      return _context4.abrupt("break", 40);

                    case 24:
                      context.translate(0, ty);
                      context.scale(1, -1);
                      return _context4.abrupt("break", 40);

                    case 27:
                      context.rotate(Math.PI * 0.5);
                      context.scale(1, -1);
                      return _context4.abrupt("break", 40);

                    case 30:
                      context.rotate(Math.PI * 0.5);
                      context.translate(0, -tx);
                      return _context4.abrupt("break", 40);

                    case 33:
                      context.rotate(Math.PI * 0.5);
                      context.translate(ty, -tx);
                      context.scale(-1, 1);
                      return _context4.abrupt("break", 40);

                    case 37:
                      context.rotate(Math.PI * -0.5);
                      context.translate(-ty, 0);
                      return _context4.abrupt("break", 40);

                    case 40:
                      if (4 < orientation) {
                        context.drawImage(this.domImage, 0, 0, sh, sw, dy, dx, dh, dw);
                      } else {
                        context.drawImage(this.domImage, 0, 0, sw, sh, dx, dy, dw, dh);
                      }

                      this.detectedOrientation = orientation; // 그리기 완료 (type 이 jpeg 인 경우만 quality 적용이 됨)

                      canvas.toBlob(this.onResized.bind(this), contentType, this.quality);

                    case 43:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
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

            var _ref5 = this.domCanvas || {},
                _ref5$width = _ref5.width,
                width = _ref5$width === void 0 ? 0 : _ref5$width,
                _ref5$height = _ref5.height,
                height = _ref5$height === void 0 ? 0 : _ref5$height;

            var orientation = this.detectedOrientation || 0;
            return {
              blob: blob,
              width: blob ? width : 0,
              height: blob ? height : 0,
              orientation: orientation
            };
          }
        }]);

        return BlobImageResize;
      }();
      /***/

    },

    /***/
    "GCSp":
    /*!**************************************************!*\
      !*** ./node_modules/exifreader/src/constants.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function GCSp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        USE_FILE: true,
        USE_PNG_FILE: true,
        USE_EXIF: true,
        USE_IPTC: true,
        USE_XMP: true,
        USE_ICC: true,
        USE_MPF: true,
        USE_THUMBNAIL: true,
        USE_TIFF: true,
        USE_JPEG: true,
        USE_PNG: true,
        USE_HEIC: true,
        USE_WEBP: true
      };
      /***/
    },

    /***/
    "H7XF":
    /*!*****************************************!*\
      !*** ./node_modules/base64-js/index.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function H7XF(module, exports, __webpack_require__) {
      "use strict";

      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      } // Support decoding URL-safe base64 strings, as Node.js does.
      // See: https://en.wikipedia.org/wiki/Base64#URL_applications


      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;

      function getLens(b64) {
        var len = b64.length;

        if (len % 4 > 0) {
          throw new Error('Invalid string. Length must be a multiple of 4');
        } // Trim off extra bytes after placeholder bytes are found
        // See: https://github.com/beatgammit/base64-js/issues/42


        var validLen = b64.indexOf('=');
        if (validLen === -1) validLen = len;
        var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      } // base64 is 4/3 + up to two characters of the original data


      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }

      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

        var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i;

        for (i = 0; i < len; i += 4) {
          tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
          arr[curByte++] = tmp >> 16 & 0xFF;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
          arr[curByte++] = tmp & 0xFF;
        }

        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 0xFF;
          arr[curByte++] = tmp & 0xFF;
        }

        return arr;
      }

      function tripletToBase64(num) {
        return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
      }

      function encodeChunk(uint8, start, end) {
        var tmp;
        var output = [];

        for (var i = start; i < end; i += 3) {
          tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
          output.push(tripletToBase64(tmp));
        }

        return output.join('');
      }

      function fromByteArray(uint8) {
        var tmp;
        var len = uint8.length;
        var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

        var parts = [];
        var maxChunkLength = 16383; // must be multiple of 3
        // go through the array every three bytes, we'll deal with trailing stuff later

        for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
          parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
        } // pad the end with zeros, but make sure to not forget the extra bytes


        if (extraBytes === 1) {
          tmp = uint8[len - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
        } else if (extraBytes === 2) {
          tmp = (uint8[len - 2] << 8) + uint8[len - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
        }

        return parts.join('');
      }
      /***/

    },

    /***/
    "IkN/":
    /*!***************************************************!*\
      !*** ./projects/packages/src/blob-image/index.ts ***!
      \***************************************************/

    /*! exports provided: ResizeType, BlobImageResize */

    /***/
    function IkN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types */
      "JTfz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ResizeType", function () {
        return _types__WEBPACK_IMPORTED_MODULE_0__["ResizeType"];
      });
      /* harmony import */


      var _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./BlobImageResize */
      "DE70");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BlobImageResize", function () {
        return _BlobImageResize__WEBPACK_IMPORTED_MODULE_1__["BlobImageResize"];
      });
      /***/

    },

    /***/
    "JHDE":
    /*!*********************************************************!*\
      !*** ./node_modules/exifreader/src/image-header-png.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function JHDE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        isPngFile: isPngFile,
        findPngOffsets: findPngOffsets
      };
      var PNG_ID = '\x89\x50\x4e\x47\x0d\x0a\x1a\x0a';
      var PNG_CHUNK_LENGTH_SIZE = 4;
      var PNG_CHUNK_TYPE_SIZE = 4;
      var PNG_CHUNK_LENGTH_OFFSET = 0;
      var PNG_CHUNK_TYPE_OFFSET = PNG_CHUNK_LENGTH_SIZE;
      var PNG_CHUNK_DATA_OFFSET = PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE;
      var PNG_XMP_PREFIX = 'XML:com.adobe.xmp\x00';

      function isPngFile(dataView) {
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, 0, PNG_ID.length) === PNG_ID;
      }

      function findPngOffsets(dataView) {
        var PNG_CRC_SIZE = 4;
        var offsets = {
          hasAppMarkers: false
        };
        var offset = PNG_ID.length;

        while (offset + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE <= dataView.byteLength) {
          if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_PNG_FILE && isPngImageHeaderChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.pngHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isPngXmpChunk(dataView, offset)) {
            var dataOffset = getPngXmpDataOffset(dataView, offset);

            if (dataOffset !== undefined) {
              offsets.hasAppMarkers = true;
              offsets.xmpChunks = [{
                dataOffset: dataOffset,
                length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) - (dataOffset - (offset + PNG_CHUNK_DATA_OFFSET))
              }];
            }
          }

          offset += dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE + PNG_CRC_SIZE;
        }

        return offsets;
      }

      function isPngImageHeaderChunk(dataView, offset) {
        var PNG_CHUNK_TYPE_IMAGE_HEADER = 'IHDR';
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_IMAGE_HEADER;
      }

      function isPngXmpChunk(dataView, offset) {
        var PNG_CHUNK_TYPE_INTERNATIONAL_TEXT = 'iTXt';
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_INTERNATIONAL_TEXT && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_DATA_OFFSET, PNG_XMP_PREFIX.length) === PNG_XMP_PREFIX;
      }

      function getPngXmpDataOffset(dataView, offset) {
        var COMPRESSION_FLAG_SIZE = 1;
        var COMPRESSION_METHOD_SIZE = 1;
        offset += PNG_CHUNK_DATA_OFFSET + PNG_XMP_PREFIX.length + COMPRESSION_FLAG_SIZE + COMPRESSION_METHOD_SIZE;
        var numberOfNullSeparators = 0;

        while (numberOfNullSeparators < 2 && offset < dataView.byteLength) {
          if (dataView.getUint8(offset) === 0x00) {
            numberOfNullSeparators++;
          }

          offset++;
        }

        if (numberOfNullSeparators < 2) {
          return undefined;
        }

        return offset;
      }
      /***/

    },

    /***/
    "JTfz":
    /*!***************************************************!*\
      !*** ./projects/packages/src/blob-image/types.ts ***!
      \***************************************************/

    /*! exports provided: ResizeType */

    /***/
    function JTfz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResizeType", function () {
        return ResizeType;
      });
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
      /***/

    },

    /***/
    "KJ3Q":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-mpf-ifd.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function KJ3Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        0xb000: {
          'name': 'MPFVersion',
          'description': function description(value) {
            return Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
          }
        },
        0xb001: 'NumberOfImages',
        0xb002: 'MPEntry',
        0xb003: 'ImageUIDList',
        0xb004: 'TotalFrames'
      };
      /***/
    },

    /***/
    "LkWp":
    /*!*************************************************!*\
      !*** ./node_modules/exifreader/src/icc-tags.js ***!
      \*************************************************/

    /*! exports provided: default, parseTags */

    /***/
    function LkWp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseTags", function () {
        return parseTags;
      });
      /* harmony import */


      var _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./icc-tag-names.js */
      "l3jd");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        read: read
      };
      var PROFILE_HEADER_LENGTH = 84;
      var ICC_TAG_COUNT_OFFSET = 128;
      var ICC_SIGNATURE = 'acsp';
      var TAG_TYPE_DESC = 'desc';
      var TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE = 'mluc';
      var TAG_TYPE_TEXT = 'text';
      var TAG_TYPE_SIGNATURE = 'sig ';
      var TAG_TABLE_SINGLE_TAG_DATA = 12; // ICC profile data can be longer than application segment max length of ~64k.
      // so it can be split into multiple APP2 segments. Each segment includes
      // total chunk count and chunk number.
      // Here we read all chunks into single continious array of bytes.

      function read(dataView, iccData) {
        try {
          var totalIccProfileLength = iccData.reduce(function (sum, icc) {
            return sum + icc.length;
          }, 0);
          var iccBinaryData = new Uint8Array(totalIccProfileLength);
          var offset = 0;
          var buffer = getBuffer(dataView);

          var _loop = function _loop(chunkNumber) {
            var iccDataChunk = iccData.find(function (x) {
              return x.chunkNumber === chunkNumber;
            });

            if (!iccDataChunk) {
              throw new Error("ICC chunk ".concat(chunkNumber, " not found"));
            }

            var data = buffer.slice(iccDataChunk.offset, iccDataChunk.offset + iccDataChunk.length);
            var chunkData = new Uint8Array(data);
            iccBinaryData.set(chunkData, offset);
            offset += chunkData.length;
          };

          for (var chunkNumber = 1; chunkNumber <= iccData.length; chunkNumber++) {
            _loop(chunkNumber);
          }

          return parseTags(new DataView(iccBinaryData.buffer));
        } catch (error) {
          return {};
        }
      }

      function getBuffer(dataView) {
        if (Array.isArray(dataView)) {
          return new DataView(Uint8Array.from(dataView).buffer).buffer;
        }

        return dataView.buffer;
      }

      function iccDoesNotHaveTagCount(buffer) {
        return buffer.length < ICC_TAG_COUNT_OFFSET + 4;
      }

      function hasTagsData(buffer, tagHeaderOffset) {
        return buffer.length < tagHeaderOffset + TAG_TABLE_SINGLE_TAG_DATA;
      }

      function parseTags(dataView) {
        var buffer = dataView.buffer;
        var length = dataView.getUint32();

        if (dataView.byteLength !== length) {
          throw new Error('ICC profile length not matching');
        }

        if (dataView.length < PROFILE_HEADER_LENGTH) {
          throw new Error('ICC profile too short');
        }

        var tags = {};
        var iccProfileKeys = Object.keys(_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccProfile"]);

        for (var i = 0; i < iccProfileKeys.length; i++) {
          var offset = iccProfileKeys[i];
          var profileEntry = _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccProfile"][offset];
          var value = profileEntry.value(dataView, parseInt(offset, 10));
          var description = value;

          if (profileEntry.description) {
            description = profileEntry.description(value);
          }

          tags[profileEntry.name] = {
            value: value,
            description: description
          };
        }

        var signature = sliceToString(buffer.slice(36, 40));

        if (signature !== ICC_SIGNATURE) {
          throw new Error('ICC profile: missing signature');
        }
        /* ICC data is incomplete but we have header parsed so lets return it */


        if (iccDoesNotHaveTagCount(buffer)) {
          return tags;
        }

        var tagCount = dataView.getUint32(128);
        var tagHeaderOffset = 132;

        for (var _i2 = 0; _i2 < tagCount; _i2++) {
          if (hasTagsData(buffer, tagHeaderOffset)) {
            // Tags are corrupted (offset too far), return what we parsed until now
            return tags;
          }

          var tagSignature = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, tagHeaderOffset, 4);
          var tagOffset = dataView.getUint32(tagHeaderOffset + 4);
          var tagSize = dataView.getUint32(tagHeaderOffset + 8);

          if (tagOffset > buffer.length) {
            // Tag data is invalid, lets return what we managed to parse
            return tags;
          }

          var tagType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, tagOffset, 4);

          if (tagType === TAG_TYPE_DESC) {
            var tagValueSize = dataView.getUint32(tagOffset + 8);

            if (tagValueSize > tagSize) {
              // Tag data is invalid, lets return what we managed to parse
              return tags;
            }

            var val = sliceToString(buffer.slice(tagOffset + 12, tagOffset + tagValueSize + 11));
            addTag(tags, tagSignature, val);
          } else if (tagType === TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE) {
            var numRecords = dataView.getUint32(tagOffset + 8);
            var recordSize = dataView.getUint32(tagOffset + 12);

            var _offset = tagOffset + 16;

            var _val = [];

            for (var recordNum = 0; recordNum < numRecords; recordNum++) {
              var languageCode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, _offset + 0, 2);
              var countryCode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, _offset + 2, 2);
              var textLength = dataView.getUint32(_offset + 4);
              var textOffset = dataView.getUint32(_offset + 8);
              var text = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getUnicodeStringFromDataView"])(dataView, tagOffset + textOffset, textLength);

              _val.push({
                languageCode: languageCode,
                countryCode: countryCode,
                text: text
              });

              _offset += recordSize;
            }

            if (numRecords === 1) {
              addTag(tags, tagSignature, _val[0].text);
            } else {
              var valObj = {};

              for (var valIndex = 0; valIndex < _val.length; valIndex++) {
                valObj["".concat(_val[valIndex].languageCode, "-").concat(_val[valIndex].countryCode)] = _val[valIndex].text;
              }

              addTag(tags, tagSignature, valObj);
            }
          } else if (tagType === TAG_TYPE_TEXT) {
            var _val2 = sliceToString(buffer.slice(tagOffset + 8, tagOffset + tagSize - 7));

            addTag(tags, tagSignature, _val2);
          } else if (tagType === TAG_TYPE_SIGNATURE) {
            var _val3 = sliceToString(buffer.slice(tagOffset + 8, tagOffset + 12));

            addTag(tags, tagSignature, _val3);
          }

          tagHeaderOffset = tagHeaderOffset + 12;
        }

        return tags;
      }

      function sliceToString(slice) {
        return String.fromCharCode.apply(null, new Uint8Array(slice));
      }

      function addTag(tags, tagSignature, value) {
        if (_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccTags"][tagSignature]) {
          tags[_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccTags"][tagSignature].name] = {
            value: value,
            description: value
          };
        } else {
          tags[tagSignature] = {
            value: value,
            description: value
          };
        }
      }
      /***/

    },

    /***/
    "OtSb":
    /*!*************************************************************!*\
      !*** ./projects/packages/src/read-stream/FileReadStream.ts ***!
      \*************************************************************/

    /*! exports provided: FileReadStream */

    /***/
    function OtSb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileReadStream", function () {
        return FileReadStream;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./types */
      "ZBYl");
      /**
       * 파일 스트림 읽기.
       * FileReader 사용시 한번에 못 읽는 용량 끊어서 읽기 용.
       * @class FileReadStream
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
              this.onReaderError(err);
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
            var _ref6 = this.readFile || {},
                _ref6$name = _ref6.name,
                name = _ref6$name === void 0 ? null : _ref6$name,
                _ref6$type = _ref6.type,
                type = _ref6$type === void 0 ? null : _ref6$type,
                _ref6$size = _ref6.size,
                size = _ref6$size === void 0 ? 0 : _ref6$size,
                _ref6$lastModified = _ref6.lastModified,
                lastModified = _ref6$lastModified === void 0 ? Date.now() : _ref6$lastModified;

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
    "SN2q":
    /*!*****************************************************!*\
      !*** ./node_modules/exifreader/src/image-header.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function SN2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* harmony import */


      var _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./image-header-tiff.js */
      "lFHz");
      /* harmony import */


      var _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-header-jpeg.js */
      "5uTB");
      /* harmony import */


      var _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./image-header-png.js */
      "JHDE");
      /* harmony import */


      var _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./image-header-heic.js */
      "U9oa");
      /* harmony import */


      var _image_header_webp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./image-header-webp.js */
      "rjiD");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        parseAppMarkers: parseAppMarkers
      };

      function parseAppMarkers(dataView) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_TIFF && _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__["default"].isTiffFile(dataView)) {
          return _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__["default"].findTiffOffsets();
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_JPEG && _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__["default"].isJpegFile(dataView)) {
          return _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__["default"].findJpegOffsets(dataView);
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_PNG && _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__["default"].isPngFile(dataView)) {
          return _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__["default"].findPngOffsets(dataView);
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_HEIC && _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__["default"].isHeicFile(dataView)) {
          return _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__["default"].findHeicOffsets(dataView);
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_WEBP && _image_header_webp_js__WEBPACK_IMPORTED_MODULE_5__["default"].isWebpFile(dataView)) {
          return _image_header_webp_js__WEBPACK_IMPORTED_MODULE_5__["default"].findOffsets(dataView);
        }

        throw new Error('Invalid image format');
      }
      /***/

    },

    /***/
    "U9oa":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/image-header-heic.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function U9oa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        isHeicFile: isHeicFile,
        findHeicOffsets: findHeicOffsets
      };

      function isHeicFile(dataView) {
        var HEIC_ID = 'ftyp';
        var HEIC_ID_OFFSET = 4;
        var HEIC_MAJOR_BRANDS = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1'];
        var HEIC_MAJOR_BRAND_LENGTH = 4;
        var heicMajorBrand = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, HEIC_ID_OFFSET + HEIC_ID.length, HEIC_MAJOR_BRAND_LENGTH);
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, HEIC_ID_OFFSET, HEIC_ID.length) === HEIC_ID && HEIC_MAJOR_BRANDS.indexOf(heicMajorBrand) !== -1;
      }

      function findHeicOffsets(dataView) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF || _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC) {
          var _findMetaAtom = findMetaAtom(dataView),
              metaOffset = _findMetaAtom.offset,
              metaLength = _findMetaAtom.length;

          if (metaOffset === undefined) {
            return {
              hasAppMarkers: false
            };
          }

          var metaEndOffset = Math.min(metaOffset + metaLength, dataView.byteLength);

          var _findMetaItems = findMetaItems(dataView, metaOffset, metaEndOffset),
              exifItemOffset = _findMetaItems.exifItemOffset,
              ilocOffset = _findMetaItems.ilocOffset,
              colrOffset = _findMetaItems.colrOffset;

          var exifOffset = findExifOffset(dataView, exifItemOffset, ilocOffset, metaEndOffset);
          var iccChunks = findIccChunks(dataView, colrOffset, metaEndOffset);
          return {
            hasAppMarkers: exifOffset !== undefined || iccChunks !== undefined,
            tiffHeaderOffset: exifOffset,
            iccChunks: iccChunks
          };
        }

        return {
          hasAppMarkers: false
        };
      }

      function findMetaAtom(dataView) {
        var ATOM_LENGTH_SIZE = 4;
        var ATOM_TYPE_SIZE = 4;
        var ATOM_MIN_LENGTH = 8;
        var ATOM_TYPE_OFFSET = 4;
        var offset = 0;

        while (offset + ATOM_LENGTH_SIZE + ATOM_TYPE_SIZE <= dataView.byteLength) {
          var atomLength = getAtomLength(dataView, offset);

          if (atomLength >= ATOM_MIN_LENGTH) {
            var atomType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + ATOM_TYPE_OFFSET, ATOM_TYPE_SIZE);

            if (atomType === 'meta') {
              return {
                offset: offset,
                length: atomLength
              };
            }
          }

          offset += atomLength;
        }

        return {
          offset: undefined,
          length: 0
        };
      }

      function getAtomLength(dataView, offset) {
        var ATOM_EXTENDED_SIZE_LOW_OFFSET = 12;
        var atomLength = dataView.getUint32(offset);

        if (extendsToEndOfFile(atomLength)) {
          return dataView.byteLength - offset;
        }

        if (hasExtendedSize(atomLength)) {
          if (hasEmptyHighBits(dataView, offset)) {
            // It's a bit tricky to handle 64 bit numbers in JavaScript. Let's
            // wait until there are real-world examples where it is necessary.
            return dataView.getUint32(offset + ATOM_EXTENDED_SIZE_LOW_OFFSET);
          }
        }

        return atomLength;
      }

      function extendsToEndOfFile(atomLength) {
        return atomLength === 0;
      }

      function hasExtendedSize(atomLength) {
        return atomLength === 1;
      }

      function hasEmptyHighBits(dataView, offset) {
        var ATOM_EXTENDED_SIZE_OFFSET = 8;
        return dataView.getUint32(offset + ATOM_EXTENDED_SIZE_OFFSET) === 0;
      }

      function findMetaItems(dataView, offset, metaEndOffset) {
        var STRING_SIZE = 4;
        var ITEM_INDEX_REL_OFFSET = -4;
        var offsets = {
          ilocOffset: undefined,
          exifItemOffset: undefined,
          colrOffset: undefined
        };

        while (offset + STRING_SIZE <= metaEndOffset && (!offsets.ilocOffset || !offsets.exifItemOffset || !offsets.colrOffset)) {
          var itemName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, STRING_SIZE);

          if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && itemName === 'iloc') {
            offsets.ilocOffset = offset;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && itemName === 'Exif') {
            offsets.exifItemOffset = offset + ITEM_INDEX_REL_OFFSET;
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && itemName === 'colr') {
            offsets.colrOffset = offset + ITEM_INDEX_REL_OFFSET;
          }

          offset++;
        }

        return offsets;
      }

      function findExifOffset(dataView, exifItemOffset, offset, metaEndOffset) {
        var EXIF_ITEM_OFFSET_SIZE = 2;
        var ILOC_DATA_OFFSET = 12;
        var EXIF_POINTER_OFFSET = 8;
        var EXIF_POINTER_SIZE = 4;
        var EXIF_PREFIX_LENGTH_OFFSET = 4;
        var ILOC_ITEM_SIZE = 16;

        if (!offset || !exifItemOffset || exifItemOffset + EXIF_ITEM_OFFSET_SIZE > metaEndOffset) {
          return undefined;
        }

        var exifItemIndex = dataView.getUint16(exifItemOffset);
        offset += ILOC_DATA_OFFSET;

        while (offset + ILOC_ITEM_SIZE <= metaEndOffset) {
          var itemIndex = dataView.getUint16(offset);

          if (itemIndex === exifItemIndex) {
            var exifPointer = dataView.getUint32(offset + EXIF_POINTER_OFFSET);

            if (exifPointer + EXIF_POINTER_SIZE <= dataView.byteLength) {
              var exifOffset = dataView.getUint32(exifPointer);
              var prefixLength = exifOffset + EXIF_PREFIX_LENGTH_OFFSET;
              return exifPointer + prefixLength;
            }
          }

          offset += ILOC_ITEM_SIZE;
        }

        return undefined;
      }

      function findIccChunks(dataView, offset, metaEndOffset) {
        var ITEM_TYPE_OFFSET = 8;
        var ITEM_TYPE_SIZE = 4;
        var ITEM_CONTENT_OFFSET = 12;

        if (!offset || offset + ITEM_CONTENT_OFFSET > metaEndOffset) {
          return undefined;
        }

        var colorType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + ITEM_TYPE_OFFSET, ITEM_TYPE_SIZE);

        if (colorType !== 'prof' && colorType !== 'rICC') {
          return undefined;
        }

        return [{
          offset: offset + ITEM_CONTENT_OFFSET,
          length: getAtomLength(dataView, offset) - ITEM_CONTENT_OFFSET,
          chunkNumber: 1,
          chunksTotal: 1
        }];
      }
      /***/

    },

    /***/
    "V/Uj":
    /*!******************************************************!*\
      !*** ./node_modules/exifreader/src/png-file-tags.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function VUj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types.js */
      "qEx2");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        read: read
      };

      function read(dataView, fileDataOffset) {
        return {
          'Image Width': getImageWidth(dataView, fileDataOffset),
          'Image Height': getImageHeight(dataView, fileDataOffset),
          'Bit Depth': getBitDepth(dataView, fileDataOffset),
          'Color Type': getColorType(dataView, fileDataOffset),
          'Compression': getCompression(dataView, fileDataOffset),
          'Filter': getFilter(dataView, fileDataOffset),
          'Interlace': getInterlace(dataView, fileDataOffset)
        };
      }

      function getImageWidth(dataView, fileDataOffset) {
        var OFFSET = 0;
        var SIZE = 4;

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset);

        return {
          value: value,
          description: "".concat(value, "px")
        };
      }

      function getImageHeight(dataView, fileDataOffset) {
        var OFFSET = 4;
        var SIZE = 4;

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: "".concat(value, "px")
        };
      }

      function getBitDepth(dataView, fileDataOffset) {
        var OFFSET = 8;
        var SIZE = 1;

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: "".concat(value)
        };
      }

      function getColorType(dataView, fileDataOffset) {
        var OFFSET = 9;
        var SIZE = 1;
        var COLOR_TYPES = {
          0: 'Grayscale',
          2: 'RGB',
          3: 'Palette',
          4: 'Grayscale with Alpha',
          6: 'RGB with Alpha'
        };

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: COLOR_TYPES[value] || 'Unknown'
        };
      }

      function getCompression(dataView, fileDataOffset) {
        var OFFSET = 10;
        var SIZE = 1;

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: value === 0 ? 'Deflate/Inflate' : 'Unknown'
        };
      }

      function getFilter(dataView, fileDataOffset) {
        var OFFSET = 11;
        var SIZE = 1;

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: value === 0 ? 'Adaptive' : 'Unknown'
        };
      }

      function getInterlace(dataView, fileDataOffset) {
        var OFFSET = 12;
        var SIZE = 1;
        var INTERLACE_TYPES = {
          0: 'Noninterlaced',
          1: 'Adam7 Interlace'
        };

        if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
          return undefined;
        }

        var value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);

        return {
          value: value,
          description: INTERLACE_TYPES[value] || 'Unknown'
        };
      }
      /***/

    },

    /***/
    "XIL1":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-0th-ifd.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function XIL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-common.js */
      "+9Kg");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        0x000b: 'ProcessingSoftware',
        0x00fe: {
          name: 'SubfileType',
          description: function description(value) {
            return {
              0x0: 'Full-resolution image',
              0x1: 'Reduced-resolution image',
              0x2: 'Single page of multi-page image',
              0x3: 'Single page of multi-page reduced-resolution image',
              0x4: 'Transparency mask',
              0x5: 'Transparency mask of reduced-resolution image',
              0x6: 'Transparency mask of multi-page image',
              0x7: 'Transparency mask of reduced-resolution multi-page image',
              0x10001: 'Alternate reduced-resolution image',
              0xffffffff: 'Invalid'
            }[value] || 'Unknown';
          }
        },
        0x00ff: {
          name: 'OldSubfileType',
          description: function description(value) {
            return {
              0: 'Full-resolution image',
              1: 'Reduced-resolution image',
              2: 'Single page of multi-page image'
            }[value] || 'Unknown';
          }
        },
        0x0100: 'ImageWidth',
        0x0101: 'ImageLength',
        0x0102: 'BitsPerSample',
        0x0103: 'Compression',
        0x0106: 'PhotometricInterpretation',
        0x0107: {
          name: 'Thresholding',
          description: function description(value) {
            return {
              1: 'No dithering or halftoning',
              2: 'Ordered dither or halfton',
              3: 'Randomized dither'
            }[value] || 'Unknown';
          }
        },
        0x0108: 'CellWidth',
        0x0109: 'CellLength',
        0x010a: {
          name: 'FillOrder',
          description: function description(value) {
            return {
              1: 'Normal',
              2: 'Reversed'
            }[value] || 'Unknown';
          }
        },
        0x010d: 'DocumentName',
        0x010e: 'ImageDescription',
        0x010f: 'Make',
        0x0110: 'Model',
        0x0111: 'StripOffsets',
        0x0112: {
          name: 'Orientation',
          description: function description(value) {
            if (value === 1) {
              return 'top-left';
            }

            if (value === 2) {
              return 'top-right';
            }

            if (value === 3) {
              return 'bottom-right';
            }

            if (value === 4) {
              return 'bottom-left';
            }

            if (value === 5) {
              return 'left-top';
            }

            if (value === 6) {
              return 'right-top';
            }

            if (value === 7) {
              return 'right-bottom';
            }

            if (value === 8) {
              return 'left-bottom';
            }

            return 'Undefined';
          }
        },
        0x0115: 'SamplesPerPixel',
        0x0116: 'RowsPerStrip',
        0x0117: 'StripByteCounts',
        0x0118: 'MinSampleValue',
        0x0119: 'MaxSampleValue',
        0x011a: {
          'name': 'XResolution',
          'description': function description(value) {
            return '' + Math.round(value[0] / value[1]);
          }
        },
        0x011b: {
          'name': 'YResolution',
          'description': function description(value) {
            return '' + Math.round(value[0] / value[1]);
          }
        },
        0x011c: 'PlanarConfiguration',
        0x011d: 'PageName',
        0x011e: {
          'name': 'XPosition',
          'description': function description(value) {
            return '' + Math.round(value[0] / value[1]);
          }
        },
        0x011f: {
          'name': 'YPosition',
          'description': function description(value) {
            return '' + Math.round(value[0] / value[1]);
          }
        },
        0x0122: {
          name: 'GrayResponseUnit',
          description: function description(value) {
            return {
              1: '0.1',
              2: '0.001',
              3: '0.0001',
              4: '1e-05',
              5: '1e-06'
            }[value] || 'Unknown';
          }
        },
        0x0128: {
          name: 'ResolutionUnit',
          description: function description(value) {
            if (value === 2) {
              return 'inches';
            }

            if (value === 3) {
              return 'centimeters';
            }

            return 'Unknown';
          }
        },
        0x0129: 'PageNumber',
        0x012d: 'TransferFunction',
        0x0131: 'Software',
        0x0132: 'DateTime',
        0x013b: 'Artist',
        0x013c: 'HostComputer',
        0x013d: 'Predictor',
        0x013e: {
          'name': 'WhitePoint',
          'description': function description(values) {
            return values.map(function (value) {
              return "".concat(value[0], "/").concat(value[1]);
            }).join(', ');
          }
        },
        0x013f: {
          'name': 'PrimaryChromaticities',
          'description': function description(values) {
            return values.map(function (value) {
              return "".concat(value[0], "/").concat(value[1]);
            }).join(', ');
          }
        },
        0x0141: 'HalftoneHints',
        0x0142: 'TileWidth',
        0x0143: 'TileLength',
        0x014a: 'A100DataOffset',
        0x014c: {
          name: 'InkSet',
          description: function description(value) {
            return {
              1: 'CMYK',
              2: 'Not CMYK'
            }[value] || 'Unknown';
          }
        },
        0x0151: 'TargetPrinter',
        0x0152: {
          name: 'ExtraSamples',
          description: function description(value) {
            return {
              0: 'Unspecified',
              1: 'Associated Alpha',
              2: 'Unassociated Alpha'
            }[value] || 'Unknown';
          }
        },
        0x0153: {
          name: 'SampleFormat',
          description: function description(value) {
            var formats = {
              1: 'Unsigned',
              2: 'Signed',
              3: 'Float',
              4: 'Undefined',
              5: 'Complex int',
              6: 'Complex float'
            };

            if (!Array.isArray(value)) {
              return 'Unknown';
            }

            return value.map(function (sample) {
              return formats[sample] || 'Unknown';
            }).join(', ');
          }
        },
        0x0201: 'JPEGInterchangeFormat',
        0x0202: 'JPEGInterchangeFormatLength',
        0x0211: {
          'name': 'YCbCrCoefficients',
          'description': function description(values) {
            return values.map(function (value) {
              return '' + value[0] / value[1];
            }).join('/');
          }
        },
        0x0212: 'YCbCrSubSampling',
        0x0213: {
          name: 'YCbCrPositioning',
          description: function description(value) {
            if (value === 1) {
              return 'centered';
            }

            if (value === 2) {
              return 'co-sited';
            }

            return 'undefined ' + value;
          }
        },
        0x0214: {
          'name': 'ReferenceBlackWhite',
          'description': function description(values) {
            return values.map(function (value) {
              return '' + value[0] / value[1];
            }).join(', ');
          }
        },
        0x02bc: 'ApplicationNotes',
        0x4746: 'Rating',
        0x4749: 'RatingPercent',
        0x8298: {
          name: 'Copyright',
          description: function description(value) {
            return value.join('; ');
          }
        },
        0x830e: 'PixelScale',
        0x83bb: 'IPTC-NAA',
        0x8480: 'IntergraphMatrix',
        0x8482: 'ModelTiePoint',
        0x8546: 'SEMInfo',
        0x85d8: 'ModelTransform',
        0x8649: 'PhotoshopSettings',
        0x8769: 'Exif IFD Pointer',
        0x8773: 'ICC_Profile',
        0x87af: 'GeoTiffDirectory',
        0x87b0: 'GeoTiffDoubleParams',
        0x87b1: 'GeoTiffAsciiParams',
        0x8825: 'GPS Info IFD Pointer',
        0x9c9b: 'XPTitle',
        0x9c9c: 'XPComment',
        0x9c9d: 'XPAuthor',
        0x9c9e: 'XPKeywords',
        0x9c9f: 'XPSubject',
        0xa480: 'GDALMetadata',
        0xa481: 'GDALNoData',
        0xc4a5: 'PrintIM',
        0xc613: 'DNGBackwardVersion',
        0xc614: 'UniqueCameraModel',
        0xc615: 'LocalizedCameraModel',
        0xc621: 'ColorMatrix1',
        0xc622: 'ColorMatrix2',
        0xc623: 'CameraCalibration1',
        0xc624: 'CameraCalibration2',
        0xc625: 'ReductionMatrix1',
        0xc626: 'ReductionMatrix2',
        0xc627: 'AnalogBalance',
        0xc628: 'AsShotNeutral',
        0xc629: 'AsShotWhiteXY',
        0xc62a: 'BaselineExposure',
        0xc62b: 'BaselineNoise',
        0xc62c: 'BaselineSharpness',
        0xc62e: 'LinearResponseLimit',
        0xc62f: 'CameraSerialNumber',
        0xc630: 'DNGLensInfo',
        0xc633: 'ShadowScale',
        0xc635: {
          name: 'MakerNoteSafety',
          description: function description(value) {
            return {
              0: 'Unsafe',
              1: 'Safe'
            }[value] || 'Unknown';
          }
        },
        0xc65a: {
          name: 'CalibrationIlluminant1',
          description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"]['LightSource']
        },
        0xc65b: {
          name: 'CalibrationIlluminant2',
          description: _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__["default"]['LightSource']
        },
        0xc65d: 'RawDataUniqueID',
        0xc68b: 'OriginalRawFileName',
        0xc68c: 'OriginalRawFileData',
        0xc68f: 'AsShotICCProfile',
        0xc690: 'AsShotPreProfileMatrix',
        0xc691: 'CurrentICCProfile',
        0xc692: 'CurrentPreProfileMatrix',
        0xc6bf: 'ColorimetricReference',
        0xc6c5: 'SRawType',
        0xc6d2: 'PanasonicTitle',
        0xc6d3: 'PanasonicTitle2',
        0xc6f3: 'CameraCalibrationSig',
        0xc6f4: 'ProfileCalibrationSig',
        0xc6f5: 'ProfileIFD',
        0xc6f6: 'AsShotProfileName',
        0xc6f8: 'ProfileName',
        0xc6f9: 'ProfileHueSatMapDims',
        0xc6fa: 'ProfileHueSatMapData1',
        0xc6fb: 'ProfileHueSatMapData2',
        0xc6fc: 'ProfileToneCurve',
        0xc6fd: {
          name: 'ProfileEmbedPolicy',
          description: function description(value) {
            return {
              0: 'Allow Copying',
              1: 'Embed if Used',
              2: 'Never Embed',
              3: 'No Restrictions'
            }[value] || 'Unknown';
          }
        },
        0xc6fe: 'ProfileCopyright',
        0xc714: 'ForwardMatrix1',
        0xc715: 'ForwardMatrix2',
        0xc716: 'PreviewApplicationName',
        0xc717: 'PreviewApplicationVersion',
        0xc718: 'PreviewSettingsName',
        0xc719: 'PreviewSettingsDigest',
        0xc71a: {
          name: 'PreviewColorSpace',
          description: function description(value) {
            return {
              1: 'Gray Gamma 2.2',
              2: 'sRGB',
              3: 'Adobe RGB',
              4: 'ProPhoto RGB'
            }[value] || 'Unknown';
          }
        },
        0xc71b: 'PreviewDateTime',
        0xc71c: 'RawImageDigest',
        0xc71d: 'OriginalRawFileDigest',
        0xc725: 'ProfileLookTableDims',
        0xc726: 'ProfileLookTableData',
        0xc763: 'TimeCodes',
        0xc764: 'FrameRate',
        0xc772: 'TStop',
        0xc789: 'ReelName',
        0xc791: 'OriginalDefaultFinalSize',
        0xc792: 'OriginalBestQualitySize',
        0xc793: 'OriginalDefaultCropSize',
        0xc7a1: 'CameraLabel',
        0xc7a3: {
          name: 'ProfileHueSatMapEncoding',
          description: function description(value) {
            return {
              0: 'Linear',
              1: 'sRGB'
            }[value] || 'Unknown';
          }
        },
        0xc7a4: {
          name: 'ProfileLookTableEncoding',
          description: function description(value) {
            return {
              0: 'Linear',
              1: 'sRGB'
            }[value] || 'Unknown';
          }
        },
        0xc7a5: 'BaselineExposureOffset',
        0xc7a6: {
          name: 'DefaultBlackRender',
          description: function description(value) {
            return {
              0: 'Auto',
              1: 'None'
            }[value] || 'Unknown';
          }
        },
        0xc7a7: 'NewRawImageDigest',
        0xc7a8: 'RawToPreviewGain'
      };
      /***/
    },

    /***/
    "XrKV":
    /*!***********************************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-interoperability-ifd.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function XrKV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        0x0001: 'InteroperabilityIndex',
        0x0002: {
          name: 'InteroperabilityVersion',
          description: function description(value) {
            return Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
          }
        },
        0x1000: 'RelatedImageFileFormat',
        0x1001: 'RelatedImageWidth',
        0x1002: 'RelatedImageHeight'
      };
      /***/
    },

    /***/
    "XxUS":
    /*!*****************************************************!*\
      !*** ./node_modules/exifreader/src/text-decoder.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function XxUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        get: get
      };

      function get() {
        if (typeof TextDecoder !== 'undefined') {
          return TextDecoder;
        }

        return undefined;
      }
      /***/

    },

    /***/
    "YSZb":
    /*!****************************************************!*\
      !*** ./projects/packages/src/read-stream/index.ts ***!
      \****************************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream */

    /***/
    function YSZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./types */
      "ZBYl");
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
      "OtSb");
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
    "ZBYl":
    /*!****************************************************!*\
      !*** ./projects/packages/src/read-stream/types.ts ***!
      \****************************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType */

    /***/
    function ZBYl(module, __webpack_exports__, __webpack_require__) {
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
    "arft":
    /*!**************************************************!*\
      !*** ./node_modules/exifreader/src/iptc-tags.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function arft(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./iptc-tag-names.js */
      "wGJp");
      /* harmony import */


      var _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tag-decoder.js */
      "ncjd");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var BYTES_8BIM = 0x3842494d;
      var BYTES_8BIM_SIZE = 4;
      var RESOURCE_BLOCK_HEADER_SIZE = BYTES_8BIM_SIZE + 8;
      var NAA_RESOURCE_BLOCK_TYPE = 0x0404;
      var TAG_HEADER_SIZE = 5;
      /* harmony default export */

      __webpack_exports__["default"] = {
        read: read
      };

      function read(dataView, dataOffset) {
        try {
          if (Array.isArray(dataView)) {
            return parseTags(new DataView(Uint8Array.from(dataView).buffer), {
              size: dataView.length
            }, 0);
          }

          var _getNaaResourceBlock = getNaaResourceBlock(dataView, dataOffset),
              naaBlock = _getNaaResourceBlock.naaBlock,
              newDataOffset = _getNaaResourceBlock.dataOffset;

          return parseTags(dataView, naaBlock, newDataOffset);
        } catch (error) {
          return {};
        }
      }

      function getNaaResourceBlock(dataView, dataOffset) {
        while (dataOffset + RESOURCE_BLOCK_HEADER_SIZE <= dataView.byteLength) {
          var resourceBlock = getResourceBlock(dataView, dataOffset);

          if (isNaaResourceBlock(resourceBlock)) {
            return {
              naaBlock: resourceBlock,
              dataOffset: dataOffset + RESOURCE_BLOCK_HEADER_SIZE
            };
          }

          dataOffset += RESOURCE_BLOCK_HEADER_SIZE + resourceBlock.size + getBlockPadding(resourceBlock);
        }

        throw new Error('No IPTC NAA resource block.');
      }

      function getResourceBlock(dataView, dataOffset) {
        var RESOURCE_BLOCK_SIZE_OFFSET = 10;

        if (dataView.getUint32(dataOffset, false) !== BYTES_8BIM) {
          throw new Error('Not an IPTC resource block.');
        }

        return {
          type: dataView.getUint16(dataOffset + BYTES_8BIM_SIZE),
          size: dataView.getUint16(dataOffset + RESOURCE_BLOCK_SIZE_OFFSET)
        };
      }

      function isNaaResourceBlock(resourceBlock) {
        return resourceBlock.type === NAA_RESOURCE_BLOCK_TYPE;
      }

      function getBlockPadding(resourceBlock) {
        if (resourceBlock.size % 2 !== 0) {
          return 1;
        }

        return 0;
      }

      function parseTags(dataView, naaBlock, dataOffset) {
        var tags = {};
        var encoding = undefined;
        var endOfBlockOffset = dataOffset + naaBlock['size'];

        while (dataOffset < endOfBlockOffset && dataOffset < dataView.byteLength) {
          var _readTag = readTag(dataView, dataOffset, tags, encoding),
              tag = _readTag.tag,
              tagSize = _readTag.tagSize;

          if (tag === null) {
            break;
          }

          if ('encoding' in tag) {
            encoding = tag.encoding;
          }

          if (tags[tag.name] === undefined || tag['repeatable'] === undefined) {
            tags[tag.name] = {
              id: tag.id,
              value: tag.value,
              description: tag.description
            };
          } else {
            if (!(tags[tag.name] instanceof Array)) {
              tags[tag.name] = [{
                id: tags[tag.name].id,
                value: tags[tag.name].value,
                description: tags[tag.name].description
              }];
            }

            tags[tag.name].push({
              id: tag.id,
              value: tag.value,
              description: tag.description
            });
          }

          dataOffset += TAG_HEADER_SIZE + tagSize;
        }

        return tags;
      }

      function readTag(dataView, dataOffset, tags, encoding) {
        var TAG_CODE_OFFSET = 1;
        var TAG_SIZE_OFFSET = 3;

        if (leadByteIsMissing(dataView, dataOffset)) {
          return {
            tag: null,
            tagSize: 0
          };
        }

        var tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET);
        var tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET);
        var tagValue = getTagValue(dataView, dataOffset + TAG_HEADER_SIZE, tagSize);
        var tag = {
          id: tagCode,
          name: getTagName(_iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode], tagCode, tagValue),
          value: tagValue,
          description: getTagDescription(_iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode], tagValue, tags, encoding)
        };

        if (tagIsRepeatable(tagCode)) {
          tag['repeatable'] = true;
        }

        if (tagContainsEncoding(tagCode)) {
          tag['encoding'] = _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['encoding_name'](tagValue);
        }

        return {
          tag: tag,
          tagSize: tagSize
        };
      }

      function leadByteIsMissing(dataView, dataOffset) {
        var TAG_LEAD_BYTE = 0x1c;
        return dataView.getUint8(dataOffset) !== TAG_LEAD_BYTE;
      }

      function getTagValue(dataView, offset, size) {
        var value = [];

        for (var valueIndex = 0; valueIndex < size; valueIndex++) {
          value.push(dataView.getUint8(offset + valueIndex));
        }

        return value;
      }

      function getTagName(tag, tagCode, tagValue) {
        if (!tag) {
          return "undefined-".concat(tagCode);
        }

        if (tagIsName(tag)) {
          return tag;
        }

        if (hasDynamicName(tag)) {
          return tag['name'](tagValue);
        }

        return tag['name'];
      }

      function tagIsName(tag) {
        return typeof tag === 'string';
      }

      function hasDynamicName(tag) {
        return typeof tag['name'] === 'function';
      }

      function getTagDescription(tag, tagValue, tags, encoding) {
        if (hasDescriptionProperty(tag)) {
          try {
            return tag['description'](tagValue, tags);
          } catch (error) {// Fall through to next handler.
          }
        }

        if (tagValueIsText(tag, tagValue)) {
          return _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__["default"].decode(encoding, tagValue);
        }

        return tagValue;
      }

      function tagValueIsText(tag, tagValue) {
        return tag && tagValue instanceof Array;
      }

      function hasDescriptionProperty(tag) {
        return tag && tag['description'] !== undefined;
      }

      function tagIsRepeatable(tagCode) {
        return _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode] && _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['repeatable'];
      }

      function tagContainsEncoding(tagCode) {
        return _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode] && _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["default"]['iptc'][tagCode]['encoding_name'] !== undefined;
      }
      /***/

    },

    /***/
    "av+O":
    /*!******************************************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/blob-image/blob-image.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function avO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".file-wrap {\n  padding: 30px 0;\n}\n\n.my-desc {\n  padding: 7px 10px 7px 22px;\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.45;\n}\n\n.my-desc .item {\n  padding: 3px 0;\n  list-style: outside square;\n}\n\n.fm-box-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.fm-box-wrap .fm-box {\n  flex: 1;\n  margin: 5px;\n  padding: 10px 15px;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: #f7f7f7;\n}\n\n.fm-box-wrap .fm-box .label {\n  display: block;\n  font-size: 14px;\n  color: #666666;\n}\n\n.fm-box-wrap .fm-box .box {\n  margin-top: 5px;\n  padding: 5px 0;\n}\n\n.fm-box-wrap .fm-input {\n  display: block;\n  padding: 0 10px;\n  width: 100%;\n  height: 32px;\n  font-size: 16px;\n  box-sizing: border-box;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.demo-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.demo-wrap .demo-item {\n  padding: 10px;\n  width: 50%;\n  min-width: 280px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info {\n  padding: 10px 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info .tit {\n  display: block;\n  padding-bottom: 5px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.demo-wrap .demo-item .panel-info .dl {\n  display: flex;\n  padding: 5px 0;\n  align-items: center;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dt {\n  width: 50px;\n  color: #999999;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dd {\n  color: #000000;\n}\n\n.demo-wrap .demo-item .panel-canvas {\n  position: relative;\n  padding-bottom: 100%;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  border: 1px dashed #000000;\n  background-color: #f9f9f9;\n  background-image: linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9), linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area > canvas {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Jsb2ItaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFERTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQUdKOztBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFHRjs7QUFGRTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFJSjs7QUFISTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtOOztBQUhJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFLTjs7QUFGRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7S0FBQSxxQkFBQTtVQUFBLGdCQUFBO0FBSUo7O0FBREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUhFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBS0o7O0FBSkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQU1OOztBQUxNO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFPUjs7QUFMTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFPUjs7QUFOUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBUVY7O0FBTlE7RUFDRSxjQUFBO0FBUVY7O0FBSEk7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFLTjs7QUFKTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwwTUFBQTtFQWdCQSwwQkFBQTtFQUNBLG1DQUFBO0FBVFI7O0FBVVE7RUFDRSxjQUFBO0FBUlYiLCJmaWxlIjoiYmxvYi1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlLXdyYXAge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ubXktZGVzYyB7XG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAyMnB4O1xuICBjb2xvcjogIzY2NjY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40NTtcbiAgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDNweCAwO1xuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgc3F1YXJlO1xuICB9XG59XG4uZm0tYm94LXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5mbS1ib3gge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICAgIC5sYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIH1cbiAgICAuYm94IHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIH1cbiAgfVxuICAuZm0taW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cbi5kZW1vLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5kZW1vLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLnBhbmVsLWluZm8ge1xuICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIC50aXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmRsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5kdCB7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgIH1cbiAgICAgICAgLmRkIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wYW5lbC1jYW52YXMge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLmRyYXctYXJlYSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICMwMDAwMDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgI2Q5ZDlkOSAyNSUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA3NSUsXG4gICAgICAgICAgICAjZDlkOWQ5IDc1JSxcbiAgICAgICAgICAgICNkOWQ5ZDlcbiAgICAgICAgICApLFxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgI2Q5ZDlkOSAyNSUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAyNSUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA3NSUsXG4gICAgICAgICAgICAjZDlkOWQ5IDc1JSxcbiAgICAgICAgICAgICNkOWQ5ZDlcbiAgICAgICAgICApO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAxMHB4IDEwcHg7XG4gICAgICAgID4gY2FudmFzIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "bzdV":
    /*!***************************************************!*\
      !*** ./node_modules/exifreader/src/dom-parser.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function bzdV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        get: get
      };

      function get() {
        if (typeof DOMParser !== 'undefined') {
          return DOMParser;
        }

        try {
          return eval('require')('xmldom').DOMParser; // This stops Webpack from replacing the require with a generic import and bundling the module.
        } catch (error) {
          return undefined;
        }
      }
      /***/

    },

    /***/
    "c3Na":
    /*!*************************************************!*\
      !*** ./node_modules/exifreader/src/dataview.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function c3Na(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return DataView;
      });

      var DataView = /*#__PURE__*/function () {
        function DataView(buffer) {
          _classCallCheck(this, DataView);

          if (bufferTypeIsUnsupported(buffer)) {
            throw new Error('DataView: Passed buffer type is unsupported.');
          }

          this.buffer = buffer;
          this.byteLength = this.buffer.length;
        }

        _createClass(DataView, [{
          key: "getUint8",
          value: function getUint8(offset) {
            return this.buffer.readUInt8(offset);
          }
        }, {
          key: "getUint16",
          value: function getUint16(offset, littleEndian) {
            if (littleEndian) {
              return this.buffer.readUInt16LE(offset);
            }

            return this.buffer.readUInt16BE(offset);
          }
        }, {
          key: "getUint32",
          value: function getUint32(offset, littleEndian) {
            if (littleEndian) {
              return this.buffer.readUInt32LE(offset);
            }

            return this.buffer.readUInt32BE(offset);
          }
        }, {
          key: "getInt32",
          value: function getInt32(offset, littleEndian) {
            if (littleEndian) {
              return this.buffer.readInt32LE(offset);
            }

            return this.buffer.readInt32BE(offset);
          }
        }]);

        return DataView;
      }();

      function bufferTypeIsUnsupported(buffer) {
        return typeof buffer !== 'object' || buffer.length === undefined || buffer.readUInt8 === undefined || buffer.readUInt16LE === undefined || buffer.readUInt16BE === undefined || buffer.readUInt32LE === undefined || buffer.readUInt32BE === undefined || buffer.readInt32LE === undefined || buffer.readInt32BE === undefined;
      }
      /***/

    },

    /***/
    "dyR6":
    /*!********************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names-utils.js ***!
      \********************************************************/

    /*! exports provided: getStringValue, getEncodedString, getCalculatedGpsValue */

    /***/
    function dyR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStringValue", function () {
        return getStringValue;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getEncodedString", function () {
        return getEncodedString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCalculatedGpsValue", function () {
        return getCalculatedGpsValue;
      });
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      function getStringValue(value) {
        return value.map(function (charCode) {
          return String.fromCharCode(charCode);
        }).join('');
      }

      function getEncodedString(value) {
        if (value.length >= 8) {
          var encoding = getStringValue(value.slice(0, 8));

          if (encoding === 'ASCII\x00\x00\x00') {
            return getStringValue(value.slice(8));
          } else if (encoding === 'JIS\x00\x00\x00\x00\x00') {
            return '[JIS encoded text]';
          } else if (encoding === 'UNICODE\x00') {
            return '[Unicode encoded text]';
          } else if (encoding === '\x00\x00\x00\x00\x00\x00\x00\x00') {
            return '[Undefined encoding]';
          }
        }

        return 'Undefined';
      }

      function getCalculatedGpsValue(value) {
        return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
      }
      /***/

    },

    /***/
    "fJrE":
    /*!*********************************************!*\
      !*** ./node_modules/exifreader/src/tags.js ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function fJrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _byte_order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./byte-order.js */
      "o/VU");
      /* harmony import */


      var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./types.js */
      "qEx2");
      /* harmony import */


      var _tag_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tag-names.js */
      "ljEJ");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
      var GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
      var INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';
      var getTagValueAt = {
        1: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getByteAt,
        2: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAsciiAt,
        3: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt,
        4: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt,
        5: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getRationalAt,
        7: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getUndefinedAt,
        9: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSlongAt,
        10: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSrationalAt,
        13: _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getIfdPointerAt
      };
      /* harmony default export */

      __webpack_exports__["default"] = {
        read: read,
        readMpf: readMpf
      };

      function read(dataView, tiffHeaderOffset) {
        var byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_2__["default"].getByteOrder(dataView, tiffHeaderOffset);

        var tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder);
        tags = readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder);
        tags = readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder);
        tags = readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder);
        return tags;
      }

      function read0thIfd(dataView, tiffHeaderOffset, byteOrder) {
        return readIfd(dataView, '0th', tiffHeaderOffset, get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder), byteOrder);
      }

      function get0thIfdOffset(dataView, tiffHeaderOffset, byteOrder) {
        return tiffHeaderOffset + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, tiffHeaderOffset + 4, byteOrder);
      }

      function readExifIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
        if (tags[EXIF_IFD_POINTER_KEY] !== undefined) {
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectAssign"])(tags, readIfd(dataView, 'exif', tiffHeaderOffset, tiffHeaderOffset + tags[EXIF_IFD_POINTER_KEY].value, byteOrder));
        }

        return tags;
      }

      function readGpsIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
        if (tags[GPS_INFO_IFD_POINTER_KEY] !== undefined) {
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectAssign"])(tags, readIfd(dataView, 'gps', tiffHeaderOffset, tiffHeaderOffset + tags[GPS_INFO_IFD_POINTER_KEY].value, byteOrder));
        }

        return tags;
      }

      function readInteroperabilityIfd(tags, dataView, tiffHeaderOffset, byteOrder) {
        if (tags[INTEROPERABILITY_IFD_POINTER_KEY] !== undefined) {
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectAssign"])(tags, readIfd(dataView, 'interoperability', tiffHeaderOffset, tiffHeaderOffset + tags[INTEROPERABILITY_IFD_POINTER_KEY].value, byteOrder));
        }

        return tags;
      }

      function readMpf(dataView, dataOffset) {
        var byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_2__["default"].getByteOrder(dataView, dataOffset);

        var tags = readIfd(dataView, 'mpf', dataOffset, get0thIfdOffset(dataView, dataOffset, byteOrder), byteOrder);
        return addMpfImages(dataView, dataOffset, tags, byteOrder);
      }

      function addMpfImages(dataView, dataOffset, tags, byteOrder) {
        var ENTRY_SIZE = 16;

        if (!tags['MPEntry']) {
          return tags;
        }

        var images = [];

        for (var i = 0; i < Math.ceil(tags['MPEntry'].value.length / ENTRY_SIZE); i++) {
          images[i] = {};
          var attributes = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE, _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG'), byteOrder);
          images[i]['ImageFlags'] = getImageFlags(attributes);
          images[i]['ImageFormat'] = getImageFormat(attributes);
          images[i]['ImageType'] = getImageType(attributes);
          var imageSize = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 4, _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG'), byteOrder);
          images[i]['ImageSize'] = {
            value: imageSize,
            description: '' + imageSize
          };
          var imageOffset = isFirstIndividualImage(i) ? 0 : getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 8, _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG'), byteOrder) + dataOffset;
          images[i]['ImageOffset'] = {
            value: imageOffset,
            description: '' + imageOffset
          };
          var dependentImage1EntryNumber = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 12, _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT'), byteOrder);
          images[i]['DependentImage1EntryNumber'] = {
            value: dependentImage1EntryNumber,
            description: '' + dependentImage1EntryNumber
          };
          var dependentImage2EntryNumber = getImageNumberValue(tags['MPEntry'].value, i * ENTRY_SIZE + 14, _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT'), byteOrder);
          images[i]['DependentImage2EntryNumber'] = {
            value: dependentImage2EntryNumber,
            description: '' + dependentImage2EntryNumber
          };
          images[i].image = dataView.buffer.slice(imageOffset, imageOffset + imageSize);
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["deferInit"])(images[i], 'base64', function () {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getBase64Image"])(this.image);
          });
        }

        tags['Images'] = images;
        return tags;
      }

      function getImageNumberValue(entries, offset, size, byteOrder) {
        if (byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_2__["default"].LITTLE_ENDIAN) {
          var _value = 0;

          for (var i = 0; i < size; i++) {
            _value += entries[offset + i] << 8 * i;
          }

          return _value;
        }

        var value = 0;

        for (var _i3 = 0; _i3 < size; _i3++) {
          value += entries[offset + _i3] << 8 * (size - 1 - _i3);
        }

        return value;
      }

      function getImageFlags(attributes) {
        var flags = [attributes >> 31 & 0x1, attributes >> 30 & 0x1, attributes >> 29 & 0x1];
        var flagsDescription = [];

        if (flags[0]) {
          flagsDescription.push('Dependent Parent Image');
        }

        if (flags[1]) {
          flagsDescription.push('Dependent Child Image');
        }

        if (flags[2]) {
          flagsDescription.push('Representative Image');
        }

        return {
          value: flags,
          description: flagsDescription.join(', ') || 'None'
        };
      }

      function getImageFormat(attributes) {
        var imageFormat = attributes >> 24 & 0x7;
        return {
          value: imageFormat,
          description: imageFormat === 0 ? 'JPEG' : 'Unknown'
        };
      }

      function getImageType(attributes) {
        var type = attributes & 0xffffff;
        var descriptions = {
          0x30000: 'Baseline MP Primary Image',
          0x10001: 'Large Thumbnail (VGA equivalent)',
          0x10002: 'Large Thumbnail (Full HD equivalent)',
          0x20001: 'Multi-Frame Image (Panorama)',
          0x20002: 'Multi-Frame Image (Disparity)',
          0x20003: 'Multi-Frame Image (Multi-Angle)',
          0x0: 'Undefined'
        };
        return {
          value: type,
          description: descriptions[type] || 'Unknown'
        };
      }

      function isFirstIndividualImage(i) {
        return i === 0;
      }

      function readIfd(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
        var FIELD_COUNT_SIZE = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');

        var FIELD_SIZE = 12;
        var tags = {};
        var numberOfFields = getNumberOfFields(dataView, offset, byteOrder);
        offset += FIELD_COUNT_SIZE;

        for (var fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
          if (offset + FIELD_SIZE > dataView.byteLength) {
            break;
          }

          var tag = readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder);

          if (tag !== undefined) {
            tags[tag.name] = {
              'id': tag.id,
              'value': tag.value,
              'description': tag.description
            };
          }

          offset += FIELD_SIZE;
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_THUMBNAIL && offset < dataView.byteLength - _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG')) {
          var nextIfdOffset = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset, byteOrder);

          if (nextIfdOffset !== 0) {
            tags['Thumbnail'] = readIfd(dataView, ifdType, tiffHeaderOffset, tiffHeaderOffset + nextIfdOffset, byteOrder);
          }
        }

        return tags;
      }

      function getNumberOfFields(dataView, offset, byteOrder) {
        if (offset + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT') <= dataView.byteLength) {
          return _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt(dataView, offset, byteOrder);
        }

        return 0;
      }

      function readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
        var TAG_CODE_IPTC_NAA = 0x83bb;

        var TAG_TYPE_OFFSET = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');

        var TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');

        var TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG');

        var tagCode = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt(dataView, offset, byteOrder);

        var tagType = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);

        var tagCount = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);

        var tagValue;

        if (_types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[tagType] === undefined) {
          return undefined;
        }

        if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
          tagValue = getTagValue(dataView, offset + TAG_VALUE_OFFSET, tagType, tagCount, byteOrder);
        } else {
          var tagValueOffset = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);

          if (tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount)) {
            var forceByteType = tagCode === TAG_CODE_IPTC_NAA;
            tagValue = getTagValue(dataView, tiffHeaderOffset + tagValueOffset, tagType, tagCount, byteOrder, forceByteType);
          } else {
            tagValue = '<faulty value>';
          }
        }

        if (tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['ASCII']) {
          tagValue = splitNullSeparatedAsciiString(tagValue);
          tagValue = decodeAsciiValue(tagValue);
        }

        var tagName = "undefined-".concat(tagCode);
        var tagDescription = tagValue;

        if (_tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode] !== undefined) {
          if (_tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['name'] !== undefined && _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['description'] !== undefined) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['name'];

            try {
              tagDescription = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['description'](tagValue);
            } catch (error) {
              tagDescription = getDescriptionFromTagValue(tagValue);
            }
          } else if (tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['RATIONAL'] || tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['SRATIONAL']) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode];
            tagDescription = '' + tagValue[0] / tagValue[1];
          } else {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode];
            tagDescription = getDescriptionFromTagValue(tagValue);
          }
        }

        return {
          id: tagCode,
          name: tagName,
          value: tagValue,
          description: tagDescription
        };
      }

      function tagValueFitsInOffsetSlot(tagType, tagCount) {
        return _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[tagType] * tagCount <= _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG');
      }

      function getTagValue(dataView, offset, type, count, byteOrder) {
        var forceByteType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
        var value = [];

        if (forceByteType) {
          count = count * _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[type];
          type = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['BYTE'];
        }

        for (var valueIndex = 0; valueIndex < count; valueIndex++) {
          value.push(getTagValueAt[type](dataView, offset, byteOrder));
          offset += _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[type];
        }

        if (type === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['ASCII']) {
          value = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAsciiValue(value);
        } else if (value.length === 1) {
          value = value[0];
        }

        return value;
      }

      function tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount) {
        return tiffHeaderOffset + tagValueOffset + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[tagType] * tagCount <= dataView.byteLength;
      }

      function splitNullSeparatedAsciiString(string) {
        var tagValue = [];
        var i = 0;

        for (var j = 0; j < string.length; j++) {
          if (string[j] === '\x00') {
            i++;
            continue;
          }

          if (tagValue[i] === undefined) {
            tagValue[i] = '';
          }

          tagValue[i] += string[j];
        }

        return tagValue;
      }

      function decodeAsciiValue(asciiValue) {
        try {
          return asciiValue.map(function (value) {
            return decodeURIComponent(escape(value));
          });
        } catch (error) {
          return asciiValue;
        }
      }

      function getDescriptionFromTagValue(tagValue) {
        if (tagValue instanceof Array) {
          return tagValue.join(', ');
        }

        return tagValue;
      }
      /***/

    },

    /***/
    "fpJW":
    /*!****************************************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/blob-image/blob-image.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BlobImageComponent */

    /***/
    function fpJW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlobImageComponent", function () {
        return BlobImageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_blob_image_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./blob-image.component.html */
      "yvCk");
      /* harmony import */


      var _blob_image_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./blob-image.component.scss */
      "av+O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "otmC");

      var BlobImageComponent = /*#__PURE__*/function () {
        function BlobImageComponent() {
          _classCallCheck(this, BlobImageComponent);

          this.testWidth = 200;
          this.testHeight = 0;
          this.testQuality = 0.9;
          this.testContentType = '';
          this.testFillBgColor = '';
          this.testApplyOrientation = false;
        }

        _createClass(BlobImageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.optionWidths = Array.from(Array(10)).map(function (a, b) {
              var index = b; // + 1;

              var size = 100 * index;
              return {
                value: size,
                label: size.toString()
              };
            });
            this.optionHeights = Array.from(Array(10)).map(function (a, b) {
              var index = b; // + 1;

              var size = 100 * index;
              return {
                value: size,
                label: size.toString()
              };
            });
            this.optionQualities = Array.from(Array(10)).map(function (a, b) {
              var index = b + 1;
              var size = parseFloat((0.1 * index).toFixed(1));
              return {
                value: size,
                label: size.toString()
              };
            });
            this.demoList = [{
              title: 'original',
              info: null,
              resizeType: null
            }, {
              title: 'resize - fixed',
              info: null,
              resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"].FIXED
            }, {
              title: 'resize - scale',
              info: null,
              resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"].SCALE
            }, {
              title: 'resize - scale stretch',
              info: null,
              resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"].SCALE_STRETCH
            }, {
              title: 'resize - cover',
              info: null,
              resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"].COVER
            }, {
              title: 'resize - cover stretch',
              info: null,
              resizeType: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"].COVER_STRETCH
            }];
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(evt) {
            var _ref7 = evt && evt.target || {},
                _ref7$files = _ref7.files,
                files = _ref7$files === void 0 ? [] : _ref7$files;

            var file = files[0];
            if (!file) return;
            this.resizeStart(file);
            evt.target.value = null;
          }
        }, {
          key: "resizeStart",
          value: function resizeStart(file) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var originalBlob, len, refCanvasList, i, demo, nativeElement, info;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.infos = [];
                      originalBlob = new Blob([file], {
                        type: file.type
                      });
                      len = this.demoList.length;
                      refCanvasList = this.demoCanvasRefs.toArray();
                      i = 0;

                    case 5:
                      if (!(i < len)) {
                        _context5.next = 15;
                        break;
                      }

                      demo = this.demoList[i];
                      nativeElement = refCanvasList[i].nativeElement;
                      _context5.next = 10;
                      return this.drawResizeDemo(nativeElement, originalBlob, demo.resizeType);

                    case 10:
                      info = _context5.sent;
                      demo.info = Object.assign(Object.assign({}, info), {
                        title: demo.title
                      });

                    case 12:
                      i++;
                      _context5.next = 5;
                      break;

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "drawResizeDemo",
          value: function drawResizeDemo(canvas, blob, resizeType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var expectWidth, expectHeight, expectContentType, quality, fillBgColor, applyOrientation, resizeBlob, resizeCanvas, resizeWidth, resizeHeight, resizer, resizeResult;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      expectWidth = this.testWidth;
                      expectHeight = this.testHeight;
                      expectContentType = this.testContentType || undefined;
                      quality = this.testQuality;
                      fillBgColor = this.testFillBgColor || undefined;
                      applyOrientation = this.testApplyOrientation || false;
                      resizeBlob = blob;
                      resizeWidth = 0;
                      resizeHeight = 0;

                      if (!projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ResizeType"][resizeType]) {
                        _context6.next = 23;
                        break;
                      }

                      resizer = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["BlobImageResize"](blob, {
                        expectWidth: expectWidth,
                        expectHeight: expectHeight,
                        quality: quality,
                        resizeType: resizeType,
                        expectContentType: expectContentType,
                        fillBgColor: fillBgColor,
                        applyOrientation: applyOrientation
                      });
                      _context6.next = 13;
                      return resizer.create();

                    case 13:
                      resizeResult = _context6.sent;
                      resizeBlob = resizeResult.blob;
                      resizeWidth = resizeResult.width;
                      resizeHeight = resizeResult.height;
                      _context6.next = 19;
                      return this.drawToCanvas(canvas, {
                        blob: resizeBlob,
                        width: resizeWidth,
                        height: resizeHeight
                      });

                    case 19:
                      resizeCanvas = _context6.sent;
                      console.log(resizeResult);
                      _context6.next = 27;
                      break;

                    case 23:
                      // original ...
                      resizeBlob = blob;
                      _context6.next = 26;
                      return this.drawToCanvas(canvas, {
                        blob: resizeBlob,
                        width: 0,
                        height: 0
                      });

                    case 26:
                      resizeCanvas = _context6.sent;

                    case 27:
                      return _context6.abrupt("return", Promise.resolve({
                        size: resizeBlob.size,
                        type: resizeBlob.type,
                        width: resizeCanvas.width,
                        height: resizeCanvas.height
                      }));

                    case 28:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "drawToCanvas",
          value: function drawToCanvas(canvas, draw) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", new Promise(function (resolve) {
                        var blob = draw.blob,
                            width = draw.width,
                            height = draw.height;
                        var context = canvas.getContext('2d');
                        var image = new Image();

                        image.onload = function () {
                          canvas.width = width || image.naturalWidth;
                          canvas.height = height || image.naturalHeight;
                          context.drawImage(image, 0, 0);
                          URL.revokeObjectURL(image.src);
                          resolve(canvas);
                        };

                        image.onerror = function () {
                          console.error('image load error');
                          URL.revokeObjectURL(image.src);
                          resolve(canvas);
                        };

                        image.src = URL.createObjectURL(blob);
                      }));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }]);

        return BlobImageComponent;
      }();

      BlobImageComponent.ctorParameters = function () {
        return [];
      };

      BlobImageComponent.propDecorators = {
        demoCanvasRefs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"],
          args: ['demoCanvasRefs']
        }]
      };
      BlobImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'demo-blob-image',
        template: _raw_loader_blob_image_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_blob_image_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BlobImageComponent);
      /***/
    },

    /***/
    "iTVX":
    /*!***********************************************!*\
      !*** ./node_modules/exifreader/src/errors.js ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function iTVX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /**
       * Thrown when no Exif metadata was found for the given image.
       *
       * @param {string} message The error message.
       */


      function MetadataMissingError(message) {
        this.name = 'MetadataMissingError';
        this.message = message || 'No Exif data';
        this.stack = new Error().stack;
      }

      MetadataMissingError.prototype = new Error();
      /* harmony default export */

      __webpack_exports__["default"] = {
        MetadataMissingError: MetadataMissingError
      };
      /***/
    },

    /***/
    "kVK+":
    /*!***************************************!*\
      !*** ./node_modules/ieee754/index.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function kVK(module, exports) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
      exports.read = function (buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;

        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;

        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }

        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };

      exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);

        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);

          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }

          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }

          if (value * c >= 2) {
            e++;
            c /= 2;
          }

          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }

        for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

        e = e << mLen | m;
        eLen += mLen;

        for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

        buffer[offset + i - d] |= s * 128;
      };
      /***/

    },

    /***/
    "l3jd":
    /*!******************************************************!*\
      !*** ./node_modules/exifreader/src/icc-tag-names.js ***!
      \******************************************************/

    /*! exports provided: iccTags, iccProfile */

    /***/
    function l3jd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iccTags", function () {
        return iccTags;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "iccProfile", function () {
        return iccProfile;
      });
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var iccTags = {
        'desc': {
          'name': 'ICC Description'
        },
        'cprt': {
          'name': 'ICC Copyright'
        },
        'dmdd': {
          'name': 'ICC Device Model Description'
        },
        'vued': {
          'name': 'ICC Viewing Conditions Description'
        },
        'dmnd': {
          'name': 'ICC Device Manufacturer for Display'
        },
        'tech': {
          'name': 'Technology'
        }
      };
      var iccProfile = {
        4: {
          'name': 'Preferred CMM type',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          },
          'description': function description(value) {
            return value !== null ? toCompany(value) : '';
          }
        },
        8: {
          'name': 'Profile Version',
          'value': function value(dataView, offset) {
            return dataView.getUint8(offset).toString(10) + '.' + (dataView.getUint8(offset + 1) >> 4).toString(10) + '.' + (dataView.getUint8(offset + 1) % 16).toString(10);
          }
        },
        12: {
          'name': 'Profile/Device class',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          },
          'description': function description(value) {
            switch (value.toLowerCase()) {
              case 'scnr':
                return 'Input Device profile';

              case 'mntr':
                return 'Display Device profile';

              case 'prtr':
                return 'Output Device profile';

              case 'link':
                return 'DeviceLink profile';

              case 'abst':
                return 'Abstract profile';

              case 'spac':
                return 'ColorSpace profile';

              case 'nmcl':
                return 'NamedColor profile';

              case 'cenc':
                return 'ColorEncodingSpace profile';

              case 'mid ':
                return 'MultiplexIdentification profile';

              case 'mlnk':
                return 'MultiplexLink profile';

              case 'mvis':
                return 'MultiplexVisualization profile';

              default:
                return value;
            }
          }
        },
        16: {
          'name': 'Color Space',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          }
        },
        20: {
          'name': 'Connection Space',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          }
        },
        24: {
          'name': 'ICC Profile Date',
          'value': function value(dataView, offset) {
            return parseDate(dataView, offset).toISOString();
          }
        },
        36: {
          'name': 'ICC Signature',
          'value': function value(dataView, offset) {
            return sliceToString(dataView.buffer.slice(offset, offset + 4));
          }
        },
        40: {
          'name': 'Primary Platform',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          },
          'description': function description(value) {
            return toCompany(value);
          }
        },
        48: {
          'name': 'Device Manufacturer',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          },
          'description': function description(value) {
            return toCompany(value);
          }
        },
        52: {
          'name': 'Device Model Number',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          }
        },
        64: {
          'name': 'Rendering Intent',
          'value': function value(dataView, offset) {
            return dataView.getUint32(offset);
          },
          'description': function description(value) {
            switch (value) {
              case 0:
                return 'Perceptual';

              case 1:
                return 'Relative Colorimetric';

              case 2:
                return 'Saturation';

              case 3:
                return 'Absolute Colorimetric';

              default:
                return value;
            }
          }
        },
        80: {
          'name': 'Profile Creator',
          'value': function value(dataView, offset) {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          }
        }
      };

      function parseDate(dataView, offset) {
        var year = dataView.getUint16(offset);
        var month = dataView.getUint16(offset + 2) - 1;
        var day = dataView.getUint16(offset + 4);
        var hours = dataView.getUint16(offset + 6);
        var minutes = dataView.getUint16(offset + 8);
        var seconds = dataView.getUint16(offset + 10);
        return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
      }

      function sliceToString(slice) {
        return String.fromCharCode.apply(null, new Uint8Array(slice));
      }

      function toCompany(value) {
        switch (value.toLowerCase()) {
          case 'appl':
            return 'Apple';

          case 'adbe':
            return 'Adobe';

          case 'msft':
            return 'Microsoft';

          case 'sunw':
            return 'Sun Microsystems';

          case 'sgi':
            return 'Silicon Graphics';

          case 'tgnt':
            return 'Taligent';

          default:
            return value;
        }
      }
      /***/

    },

    /***/
    "lFHz":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/image-header-tiff.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function lFHz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./byte-order.js */
      "o/VU");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        isTiffFile: isTiffFile,
        findTiffOffsets: findTiffOffsets
      };

      function isTiffFile(dataView) {
        var MIN_TIFF_DATA_BUFFER_LENGTH = 4;
        return dataView.byteLength >= MIN_TIFF_DATA_BUFFER_LENGTH && hasTiffMarker(dataView);
      }

      function hasTiffMarker(dataView) {
        var TIFF_ID = 0x2a;
        var TIFF_ID_OFFSET = 2;

        var littleEndian = dataView.getUint16(0) === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN;

        return dataView.getUint16(TIFF_ID_OFFSET, littleEndian) === TIFF_ID;
      }

      function findTiffOffsets() {
        var TIFF_FILE_HEADER_OFFSET = 0;

        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF) {
          return {
            hasAppMarkers: true,
            tiffHeaderOffset: TIFF_FILE_HEADER_OFFSET
          };
        }

        return {};
      }
      /***/

    },

    /***/
    "ljEJ":
    /*!**************************************************!*\
      !*** ./node_modules/exifreader/src/tag-names.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function ljEJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* harmony import */


      var _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tag-names-0th-ifd.js */
      "XIL1");
      /* harmony import */


      var _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tag-names-exif-ifd.js */
      "BR4b");
      /* harmony import */


      var _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tag-names-gps-ifd.js */
      "2NhH");
      /* harmony import */


      var _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tag-names-interoperability-ifd.js */
      "XrKV");
      /* harmony import */


      var _tag_names_mpf_ifd_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tag-names-mpf-ifd.js */
      "KJ3Q");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var tagNames0thExifIfds = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_2__["default"], _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = {
        '0th': tagNames0thExifIfds,
        'exif': tagNames0thExifIfds,
        'gps': _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_4__["default"],
        'interoperability': _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_5__["default"],
        'mpf': _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_MPF ? _tag_names_mpf_ifd_js__WEBPACK_IMPORTED_MODULE_6__["default"] : {}
      };
      /***/
    },

    /***/
    "ncjd":
    /*!****************************************************!*\
      !*** ./node_modules/exifreader/src/tag-decoder.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function ncjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./text-decoder.js */
      "XxUS");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var TAG_HEADER_SIZE = 5;
      /* harmony default export */

      __webpack_exports__["default"] = {
        decode: decode,
        TAG_HEADER_SIZE: TAG_HEADER_SIZE
      };

      function decode(encoding, tagValue) {
        var Decoder = _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__["default"].get();

        if (typeof Decoder !== 'undefined' && encoding !== undefined) {
          try {
            return new Decoder(encoding).decode(Uint8Array.from(tagValue));
          } catch (error) {// Pass through and fall back to ASCII decoding.
          }
        }

        var stringValue = tagValue.map(function (charCode) {
          return String.fromCharCode(charCode);
        }).join('');
        return decodeAsciiValue(stringValue);
      }

      function decodeAsciiValue(asciiValue) {
        try {
          return decodeURIComponent(escape(asciiValue));
        } catch (error) {
          return asciiValue;
        }
      }
      /***/

    },

    /***/
    "ngLt":
    /*!******************************************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/read-stream/read-stream.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ReadStreamComponent */

    /***/
    function ngLt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadStreamComponent", function () {
        return ReadStreamComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_read_stream_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./read-stream.component.html */
      "DC42");
      /* harmony import */


      var _read_stream_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./read-stream.component.scss */
      "xjty");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! projects/packages/src/public-api */
      "otmC");

      var ReadStreamComponent = /*#__PURE__*/function () {
        function ReadStreamComponent() {
          _classCallCheck(this, ReadStreamComponent);

          this.optionChunks = [];
          this.optionResponseTypes = [];
          this.testChunk = 1024;
          this.testResponseType = projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadResponseType"].BLOB;
          this.changeStack = [];
          this.changeStackCount = 0;
          this.changeStackDisplayMax = 50;
        }

        _createClass(ReadStreamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.optionResponseTypes = [{
              label: 'BLOB',
              value: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadResponseType"].BLOB
            }, {
              label: 'BUFFER',
              value: projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadResponseType"].BUFFER
            }];
            this.optionChunks = Array.from(Array(8)).map(function (a, b) {
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
            this.testChunk = this.optionChunks[1].value;
          }
        }, {
          key: "onFileChange",
          value: function onFileChange(evt) {
            var _ref8 = evt && evt.target || {},
                _ref8$files = _ref8.files,
                files = _ref8$files === void 0 ? [] : _ref8$files;

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

            this.reader = new projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadStream"](file, {
              chunkSize: this.testChunk,
              responseType: this.testResponseType
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
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadEventType"].RESOLVE:
                case projects_packages_src_public_api__WEBPACK_IMPORTED_MODULE_4__["FileReadEventType"].REJECT:
                  console.log(state);

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

      ReadStreamComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'demo-read-stream',
        template: _raw_loader_read_stream_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_read_stream_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReadStreamComponent);
      /***/
    },

    /***/
    "o/VU":
    /*!***************************************************!*\
      !*** ./node_modules/exifreader/src/byte-order.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function oVU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var LITTLE_ENDIAN = 0x4949;
      var BIG_ENDIAN = 0x4d4d;
      /* harmony default export */

      __webpack_exports__["default"] = {
        BIG_ENDIAN: BIG_ENDIAN,
        LITTLE_ENDIAN: LITTLE_ENDIAN,
        getByteOrder: getByteOrder
      };

      function getByteOrder(dataView, tiffHeaderOffset) {
        if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN) {
          return LITTLE_ENDIAN;
        } else if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
          return BIG_ENDIAN;
        }

        throw new Error('Illegal byte order value. Faulty image.');
      }
      /***/

    },

    /***/
    "otYY":
    /*!******************************************************!*\
      !*** ./node_modules/exifreader/src/xmp-tag-names.js ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function otYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        'tiff:Orientation': function tiffOrientation(value) {
          if (value === '1') {
            return 'Horizontal (normal)';
          }

          if (value === '2') {
            return 'Mirror horizontal';
          }

          if (value === '3') {
            return 'Rotate 180';
          }

          if (value === '4') {
            return 'Mirror vertical';
          }

          if (value === '5') {
            return 'Mirror horizontal and rotate 270 CW';
          }

          if (value === '6') {
            return 'Rotate 90 CW';
          }

          if (value === '7') {
            return 'Mirror horizontal and rotate 90 CW';
          }

          if (value === '8') {
            return 'Rotate 270 CW';
          }

          return value;
        },
        'exif:GPSLatitude': calculateGPSValue,
        'exif:GPSLongitude': calculateGPSValue
      };

      function calculateGPSValue(value) {
        var _value$split = value.split(','),
            _value$split2 = _slicedToArray(_value$split, 2),
            degreesString = _value$split2[0],
            minutesString = _value$split2[1];

        if (degreesString !== undefined && minutesString !== undefined) {
          var degrees = parseFloat(degreesString);
          var minutes = parseFloat(minutesString);
          var ref = minutesString.charAt(minutesString.length - 1);

          if (!Number.isNaN(degrees) && !Number.isNaN(minutes)) {
            return '' + (degrees + minutes / 60) + ref;
          }
        }

        return value;
      }
      /***/

    },

    /***/
    "otmC":
    /*!*********************************************!*\
      !*** ./projects/packages/src/public-api.ts ***!
      \*********************************************/

    /*! exports provided: FileReadEventType, FileReadResponseType, FileReadStream, ResizeType, BlobImageResize */

    /***/
    function otmC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _read_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./read-stream */
      "YSZb");
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
      "IkN/");
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
    "p64M":
    /*!**************************************************!*\
      !*** ./node_modules/exifreader/src/thumbnail.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function p64M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
      // https://exiftool.org/TagNames/EXIF.html#Compression


      var COMPRESSION_JPEG = [6, 7, 99];
      /* harmony default export */

      __webpack_exports__["default"] = {
        get: get
      };

      function get(dataView, thumbnailTags, tiffHeaderOffset) {
        if (hasJpegThumbnail(thumbnailTags)) {
          thumbnailTags.type = 'image/jpeg';
          var offset = tiffHeaderOffset + thumbnailTags.JPEGInterchangeFormat.value;
          thumbnailTags.image = dataView.buffer.slice(offset, offset + thumbnailTags.JPEGInterchangeFormatLength.value);
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["deferInit"])(thumbnailTags, 'base64', function () {
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getBase64Image"])(this.image);
          });
        } // There is a small possibility of thumbnails in TIFF format but they are
        // not stored as a self-contained image file and would be much more
        // difficult to extract.
        // https://exiftool.org/forum/index.php?topic=3273.msg14778#msg14778


        return thumbnailTags;
      }

      function hasJpegThumbnail(tags) {
        return tags && (tags.Compression === undefined || COMPRESSION_JPEG.includes(tags.Compression.value)) && tags.JPEGInterchangeFormat && tags.JPEGInterchangeFormat.value && tags.JPEGInterchangeFormatLength && tags.JPEGInterchangeFormatLength.value;
      }
      /***/

    },

    /***/
    "qEx2":
    /*!**********************************************!*\
      !*** ./node_modules/exifreader/src/types.js ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function qEx2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./byte-order.js */
      "o/VU");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      var typeSizes = {
        1: 1,
        // BYTE
        2: 1,
        // ASCII
        3: 2,
        // SHORT
        4: 4,
        // LONG
        5: 8,
        // RATIONAL
        7: 1,
        // UNDEFINED
        9: 4,
        // SLONG
        10: 8,
        // SRATIONAL
        13: 4 // IFD

      };
      var tagTypes = {
        'BYTE': 1,
        'ASCII': 2,
        'SHORT': 3,
        'LONG': 4,
        'RATIONAL': 5,
        'UNDEFINED': 7,
        'SLONG': 9,
        'SRATIONAL': 10,
        'IFD': 13
      };
      /* harmony default export */

      __webpack_exports__["default"] = {
        getAsciiValue: getAsciiValue,
        getByteAt: getByteAt,
        getAsciiAt: getAsciiAt,
        getShortAt: getShortAt,
        getLongAt: getLongAt,
        getRationalAt: getRationalAt,
        getUndefinedAt: getUndefinedAt,
        getSlongAt: getSlongAt,
        getSrationalAt: getSrationalAt,
        getIfdPointerAt: getIfdPointerAt,
        typeSizes: typeSizes,
        tagTypes: tagTypes,
        getTypeSize: getTypeSize
      };

      function getAsciiValue(charArray) {
        return charArray.map(function (charCode) {
          return String.fromCharCode(charCode);
        });
      }

      function getByteAt(dataView, offset) {
        return dataView.getUint8(offset);
      }

      function getAsciiAt(dataView, offset) {
        return dataView.getUint8(offset);
      }

      function getShortAt(dataView, offset, byteOrder) {
        return dataView.getUint16(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
      }

      function getLongAt(dataView, offset, byteOrder) {
        return dataView.getUint32(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
      }

      function getRationalAt(dataView, offset, byteOrder) {
        return [getLongAt(dataView, offset, byteOrder), getLongAt(dataView, offset + 4, byteOrder)];
      }

      function getUndefinedAt(dataView, offset) {
        return getByteAt(dataView, offset);
      }

      function getSlongAt(dataView, offset, byteOrder) {
        return dataView.getInt32(offset, byteOrder === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN);
      }

      function getSrationalAt(dataView, offset, byteOrder) {
        return [getSlongAt(dataView, offset, byteOrder), getSlongAt(dataView, offset + 4, byteOrder)];
      }

      function getIfdPointerAt(dataView, offset, byteOrder) {
        return getLongAt(dataView, offset, byteOrder);
      }

      function getTypeSize(typeName) {
        if (tagTypes[typeName] === undefined) {
          throw new Error('No such type found.');
        }

        return typeSizes[tagTypes[typeName]];
      }
      /***/

    },

    /***/
    "qNk/":
    /*!**********************************************************************!*\
      !*** ./projects/dev/src/app/modules/example/common/common.module.ts ***!
      \**********************************************************************/

    /*! exports provided: ExampleCommonModule */

    /***/
    function qNk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExampleCommonModule", function () {
        return ExampleCommonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ExampleCommonModule = function ExampleCommonModule() {
        _classCallCheck(this, ExampleCommonModule);
      };

      ExampleCommonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], ExampleCommonModule);
      /***/
    },

    /***/
    "rAM+":
    /*!**********************************************!*\
      !*** ./node_modules/exifreader/src/utils.js ***!
      \**********************************************/

    /*! exports provided: getStringFromDataView, getUnicodeStringFromDataView, getStringValueFromArray, getCharacterArray, objectAssign, deferInit, getBase64Image */

    /***/
    function rAM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStringFromDataView", function () {
        return getStringFromDataView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUnicodeStringFromDataView", function () {
        return getUnicodeStringFromDataView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStringValueFromArray", function () {
        return getStringValueFromArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCharacterArray", function () {
        return getCharacterArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "objectAssign", function () {
        return objectAssign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deferInit", function () {
        return deferInit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBase64Image", function () {
        return getBase64Image;
      });
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


      function getStringFromDataView(dataView, offset, length) {
        var chars = [];

        for (var i = 0; i < length && offset + i < dataView.byteLength; i++) {
          chars.push(dataView.getUint8(offset + i));
        }

        return getStringValueFromArray(chars);
      }

      function getUnicodeStringFromDataView(dataView, offset, length) {
        var chars = [];

        for (var i = 0; i < length && offset + i < dataView.byteLength; i += 2) {
          chars.push(dataView.getUint16(offset + i));
        }

        return getStringValueFromArray(chars);
      }

      function getStringValueFromArray(charArray) {
        return charArray.map(function (charCode) {
          return String.fromCharCode(charCode);
        }).join('');
      }

      function getCharacterArray(string) {
        return string.split('').map(function (character) {
          return character.charCodeAt(0);
        });
      }

      function objectAssign() {
        for (var i = 1; i < arguments.length; i++) {
          for (var property in arguments[i]) {
            arguments[0][property] = arguments[i][property];
          }
        }

        return arguments[0];
      }

      function deferInit(object, key, initializer) {
        var initialized = false;
        Object.defineProperty(object, key, {
          get: function get() {
            if (!initialized) {
              initialized = true;
              Object.defineProperty(object, key, {
                configurable: true,
                enumerable: true,
                value: initializer.apply(object),
                writable: true
              });
            }

            return object[key];
          },
          configurable: true,
          enumerable: true
        });
      }

      function getBase64Image(image) {
        if (typeof btoa !== 'undefined') {
          // IE11- does not implement reduce on the Uint8Array prototype.
          return btoa(Array.prototype.reduce.call(new Uint8Array(image), function (data, _byte2) {
            return data + String.fromCharCode(_byte2);
          }, ''));
        }

        if (typeof Buffer === 'undefined') {
          return undefined;
        }

        if (typeof Buffer.from !== undefined) {
          // eslint-disable-line no-undef
          return Buffer.from(image).toString('base64'); // eslint-disable-line no-undef
        }

        return new Buffer(image).toString('base64'); // eslint-disable-line no-undef
      }
      /***/

    },

    /***/
    "rjiD":
    /*!**********************************************************!*\
      !*** ./node_modules/exifreader/src/image-header-webp.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function rjiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./constants.js */
      "GCSp");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        isWebpFile: isWebpFile,
        findOffsets: findOffsets
      };

      function isWebpFile(dataView) {
        var RIFF_ID_OFFSET = 0;
        var RIFF_ID = 'RIFF';
        var WEBP_MARKER_OFFSET = 8;
        var WEBP_MARKER = 'WEBP';
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, RIFF_ID_OFFSET, RIFF_ID.length) === RIFF_ID && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, WEBP_MARKER_OFFSET, WEBP_MARKER.length) === WEBP_MARKER;
      }

      function findOffsets(dataView) {
        var SUB_CHUNK_START_OFFSET = 12;
        var CHUNK_SIZE_OFFSET = 4;
        var EXIF_IDENTIFIER = 'Exif\x00\x00';
        var CHUNK_HEADER_SIZE = 8;
        var offset = SUB_CHUNK_START_OFFSET;
        var hasAppMarkers = false;
        var tiffHeaderOffset;
        var xmpChunks;
        var iccChunks;

        while (offset + CHUNK_HEADER_SIZE < dataView.byteLength) {
          var chunkId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
          var chunkSize = dataView.getUint32(offset + CHUNK_SIZE_OFFSET, true);

          if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && chunkId === 'EXIF') {
            hasAppMarkers = true;

            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + CHUNK_HEADER_SIZE, EXIF_IDENTIFIER.length) === EXIF_IDENTIFIER) {
              tiffHeaderOffset = offset + CHUNK_HEADER_SIZE + EXIF_IDENTIFIER.length;
            } else {
              tiffHeaderOffset = offset + CHUNK_HEADER_SIZE;
            }
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && chunkId === 'XMP ') {
            hasAppMarkers = true;
            xmpChunks = [{
              dataOffset: offset + CHUNK_HEADER_SIZE,
              length: chunkSize
            }];
          } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && chunkId === 'ICCP') {
            hasAppMarkers = true;
            iccChunks = [{
              offset: offset + CHUNK_HEADER_SIZE,
              length: chunkSize,
              chunkNumber: 1,
              chunksTotal: 1
            }];
          }

          offset += CHUNK_HEADER_SIZE + (chunkSize % 2 === 0 ? chunkSize : chunkSize + 1);
        }

        return {
          hasAppMarkers: hasAppMarkers,
          tiffHeaderOffset: tiffHeaderOffset,
          xmpChunks: xmpChunks,
          iccChunks: iccChunks
        };
      }
      /***/

    },

    /***/
    "tjlA":
    /*!**************************************!*\
      !*** ./node_modules/buffer/index.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function tjlA(module, exports, __webpack_require__) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */

      /* eslint-disable no-proto */

      var base64 = __webpack_require__(
      /*! base64-js */
      "H7XF");

      var ieee754 = __webpack_require__(
      /*! ieee754 */
      "kVK+");

      var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? // eslint-disable-line dot-notation
      Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
      : null;
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 0x7fffffff;
      exports.kMaxLength = K_MAX_LENGTH;
      /**
       * If `Buffer.TYPED_ARRAY_SUPPORT`:
       *   === true    Use Uint8Array implementation (fastest)
       *   === false   Print warning and recommend using `buffer` v4.x which has an Object
       *               implementation (most compatible, even IE6)
       *
       * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
       * Opera 11.6+, iOS 4.2+.
       *
       * We report that the browser does not support typed arrays if the are not subclassable
       * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
       * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
       * for __proto__ and has a buggy typed array implementation.
       */

      Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

      if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') {
        console.error('This browser lacks typed array (Uint8Array) support which is required by ' + '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
      }

      function typedArraySupport() {
        // Can typed array instances can be augmented?
        try {
          var arr = new Uint8Array(1);
          var proto = {
            foo: function foo() {
              return 42;
            }
          };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }

      Object.defineProperty(Buffer.prototype, 'parent', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer.prototype, 'offset', {
        enumerable: true,
        get: function get() {
          if (!Buffer.isBuffer(this)) return undefined;
          return this.byteOffset;
        }
      });

      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        } // Return an augmented `Uint8Array` instance


        var buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }
      /**
       * The Buffer constructor returns instances of `Uint8Array` that have their
       * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
       * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
       * and the `Uint8Array` methods. Square bracket notation works as expected -- it
       * returns a single octet.
       *
       * The `Uint8Array` prototype remains unmodified.
       */


      function Buffer(arg, encodingOrOffset, length) {
        // Common case.
        if (typeof arg === 'number') {
          if (typeof encodingOrOffset === 'string') {
            throw new TypeError('The "string" argument must be of type string. Received type number');
          }

          return allocUnsafe(arg);
        }

        return from(arg, encodingOrOffset, length);
      }

      Buffer.poolSize = 8192; // not used by this implementation

      function from(value, encodingOrOffset, length) {
        if (typeof value === 'string') {
          return fromString(value, encodingOrOffset);
        }

        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }

        if (value == null) {
          throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
        }

        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }

        if (typeof value === 'number') {
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }

        var valueOf = value.valueOf && value.valueOf();

        if (valueOf != null && valueOf !== value) {
          return Buffer.from(valueOf, encodingOrOffset, length);
        }

        var b = fromObject(value);
        if (b) return b;

        if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') {
          return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
        }

        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' + 'or Array-like Object. Received type ' + typeof value);
      }
      /**
       * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
       * if value is a number.
       * Buffer.from(str[, encoding])
       * Buffer.from(array)
       * Buffer.from(buffer)
       * Buffer.from(arrayBuffer[, byteOffset[, length]])
       **/


      Buffer.from = function (value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      }; // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
      // https://github.com/feross/buffer/pull/148


      Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer, Uint8Array);

      function assertSize(size) {
        if (typeof size !== 'number') {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }

      function alloc(size, fill, encoding) {
        assertSize(size);

        if (size <= 0) {
          return createBuffer(size);
        }

        if (fill !== undefined) {
          // Only pay attention to encoding if it's a string. This
          // prevents accidentally sending in a number that would
          // be interpreted as a start offset.
          return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }

        return createBuffer(size);
      }
      /**
       * Creates a new filled Buffer instance.
       * alloc(size[, fill[, encoding]])
       **/


      Buffer.alloc = function (size, fill, encoding) {
        return alloc(size, fill, encoding);
      };

      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      /**
       * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
       * */


      Buffer.allocUnsafe = function (size) {
        return allocUnsafe(size);
      };
      /**
       * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
       */


      Buffer.allocUnsafeSlow = function (size) {
        return allocUnsafe(size);
      };

      function fromString(string, encoding) {
        if (typeof encoding !== 'string' || encoding === '') {
          encoding = 'utf8';
        }

        if (!Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding);
        }

        var length = byteLength(string, encoding) | 0;
        var buf = createBuffer(length);
        var actual = buf.write(string, encoding);

        if (actual !== length) {
          // Writing a hex string, for example, that contains invalid characters will
          // cause everything after the first invalid character to be ignored. (e.g.
          // 'abxxcd' will be treated as 'ab')
          buf = buf.slice(0, actual);
        }

        return buf;
      }

      function fromArrayLike(array) {
        var length = array.length < 0 ? 0 : checked(array.length) | 0;
        var buf = createBuffer(length);

        for (var i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }

        return buf;
      }

      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          var copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }

        return fromArrayLike(arrayView);
      }

      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }

        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }

        var buf;

        if (byteOffset === undefined && length === undefined) {
          buf = new Uint8Array(array);
        } else if (length === undefined) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        } // Return an augmented `Uint8Array` instance


        Object.setPrototypeOf(buf, Buffer.prototype);
        return buf;
      }

      function fromObject(obj) {
        if (Buffer.isBuffer(obj)) {
          var len = checked(obj.length) | 0;
          var buf = createBuffer(len);

          if (buf.length === 0) {
            return buf;
          }

          obj.copy(buf, 0, 0, len);
          return buf;
        }

        if (obj.length !== undefined) {
          if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }

          return fromArrayLike(obj);
        }

        if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }

      function checked(length) {
        // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
        // length is NaN (which is otherwise coerced to zero.)
        if (length >= K_MAX_LENGTH) {
          throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes');
        }

        return length | 0;
      }

      function SlowBuffer(length) {
        if (+length != length) {
          // eslint-disable-line eqeqeq
          length = 0;
        }

        return Buffer.alloc(+length);
      }

      Buffer.isBuffer = function isBuffer(b) {
        return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
      };

      Buffer.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);

        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }

        if (a === b) return 0;
        var x = a.length;
        var y = b.length;

        for (var i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };

      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return true;

          default:
            return false;
        }
      };

      Buffer.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }

        if (list.length === 0) {
          return Buffer.alloc(0);
        }

        var i;

        if (length === undefined) {
          length = 0;

          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }

        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;

        for (i = 0; i < list.length; ++i) {
          var buf = list[i];

          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(buffer, buf, pos);
            }
          } else if (!Buffer.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }

          pos += buf.length;
        }

        return buffer;
      };

      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) {
          return string.length;
        }

        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }

        if (typeof string !== 'string') {
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + 'Received type ' + typeof string);
        }

        var len = string.length;
        var mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0) return 0; // Use a for loop to avoid recursion

        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return len;

            case 'utf8':
            case 'utf-8':
              return utf8ToBytes(string).length;

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return len * 2;

            case 'hex':
              return len >>> 1;

            case 'base64':
              return base64ToBytes(string).length;

            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
              }

              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }

      Buffer.byteLength = byteLength;

      function slowToString(encoding, start, end) {
        var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
        // property of a typed array.
        // This behaves neither like String nor Uint8Array in that we set start/end
        // to their upper/lower bounds if the value passed is out of range.
        // undefined is handled specially as per ECMA-262 6th Edition,
        // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

        if (start === undefined || start < 0) {
          start = 0;
        } // Return early if start > this.length. Done here to prevent potential uint32
        // coercion fail below.


        if (start > this.length) {
          return '';
        }

        if (end === undefined || end > this.length) {
          end = this.length;
        }

        if (end <= 0) {
          return '';
        } // Force coercion to uint32. This will also coerce falsey/NaN values to 0.


        end >>>= 0;
        start >>>= 0;

        if (end <= start) {
          return '';
        }

        if (!encoding) encoding = 'utf8';

        while (true) {
          switch (encoding) {
            case 'hex':
              return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
              return utf8Slice(this, start, end);

            case 'ascii':
              return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
              return latin1Slice(this, start, end);

            case 'base64':
              return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return utf16leSlice(this, start, end);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = (encoding + '').toLowerCase();
              loweredCase = true;
          }
        }
      } // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
      // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
      // reliably in a browserify context because there could be multiple different
      // copies of the 'buffer' package in use. This method works even for Buffer
      // instances that were created from another copy of the `buffer` package.
      // See: https://github.com/feross/buffer/issues/154


      Buffer.prototype._isBuffer = true;

      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }

      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;

        if (len % 2 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 16-bits');
        }

        for (var i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }

        return this;
      };

      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;

        if (len % 4 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 32-bits');
        }

        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }

        return this;
      };

      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;

        if (len % 8 !== 0) {
          throw new RangeError('Buffer size must be a multiple of 64-bits');
        }

        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }

        return this;
      };

      Buffer.prototype.toString = function toString() {
        var length = this.length;
        if (length === 0) return '';
        if (arguments.length === 0) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };

      Buffer.prototype.toLocaleString = Buffer.prototype.toString;

      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
        if (this === b) return true;
        return Buffer.compare(this, b) === 0;
      };

      Buffer.prototype.inspect = function inspect() {
        var str = '';
        var max = exports.INSPECT_MAX_BYTES;
        str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
        if (this.length > max) str += ' ... ';
        return '<Buffer ' + str + '>';
      };

      if (customInspectSymbol) {
        Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
      }

      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer.from(target, target.offset, target.byteLength);
        }

        if (!Buffer.isBuffer(target)) {
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + 'Received type ' + typeof target);
        }

        if (start === undefined) {
          start = 0;
        }

        if (end === undefined) {
          end = target ? target.length : 0;
        }

        if (thisStart === undefined) {
          thisStart = 0;
        }

        if (thisEnd === undefined) {
          thisEnd = this.length;
        }

        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError('out of range index');
        }

        if (thisStart >= thisEnd && start >= end) {
          return 0;
        }

        if (thisStart >= thisEnd) {
          return -1;
        }

        if (start >= end) {
          return 1;
        }

        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);

        for (var i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }

        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      }; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
      // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
      //
      // Arguments:
      // - buffer - a Buffer to search
      // - val - a string, Buffer, or number
      // - byteOffset - an index into `buffer`; will be clamped to an int32
      // - encoding - an optional encoding, relevant is val is a string
      // - dir - true for indexOf, false for lastIndexOf


      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        // Empty buffer means no match
        if (buffer.length === 0) return -1; // Normalize byteOffset

        if (typeof byteOffset === 'string') {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 0x7fffffff) {
          byteOffset = 0x7fffffff;
        } else if (byteOffset < -0x80000000) {
          byteOffset = -0x80000000;
        }

        byteOffset = +byteOffset; // Coerce to Number.

        if (numberIsNaN(byteOffset)) {
          // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
          byteOffset = dir ? 0 : buffer.length - 1;
        } // Normalize byteOffset: negative offsets start from the end of the buffer


        if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

        if (byteOffset >= buffer.length) {
          if (dir) return -1;else byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir) byteOffset = 0;else return -1;
        } // Normalize val


        if (typeof val === 'string') {
          val = Buffer.from(val, encoding);
        } // Finally, search either indexOf (if dir is true) or lastIndexOf


        if (Buffer.isBuffer(val)) {
          // Special case: looking for empty string/buffer always fails
          if (val.length === 0) {
            return -1;
          }

          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === 'number') {
          val = val & 0xFF; // Search for a byte value [0-255]

          if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }

          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }

        throw new TypeError('val must be string, number or Buffer');
      }

      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;

        if (encoding !== undefined) {
          encoding = String(encoding).toLowerCase();

          if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }

            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }

        function read(buf, i) {
          if (indexSize === 1) {
            return buf[i];
          } else {
            return buf.readUInt16BE(i * indexSize);
          }
        }

        var i;

        if (dir) {
          var foundIndex = -1;

          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1) foundIndex = i;
              if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1) i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

          for (i = byteOffset; i >= 0; i--) {
            var found = true;

            for (var j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }

            if (found) return i;
          }
        }

        return -1;
      }

      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };

      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };

      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };

      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;

        if (!length) {
          length = remaining;
        } else {
          length = Number(length);

          if (length > remaining) {
            length = remaining;
          }
        }

        var strLen = string.length;

        if (length > strLen / 2) {
          length = strLen / 2;
        }

        var i;

        for (i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }

        return i;
      }

      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }

      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }

      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }

      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }

      Buffer.prototype.write = function write(string, offset, length, encoding) {
        // Buffer#write(string)
        if (offset === undefined) {
          encoding = 'utf8';
          length = this.length;
          offset = 0; // Buffer#write(string, encoding)
        } else if (length === undefined && typeof offset === 'string') {
          encoding = offset;
          length = this.length;
          offset = 0; // Buffer#write(string, offset[, length][, encoding])
        } else if (isFinite(offset)) {
          offset = offset >>> 0;

          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
          } else {
            encoding = length;
            length = undefined;
          }
        } else {
          throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        }

        var remaining = this.length - offset;
        if (length === undefined || length > remaining) length = remaining;

        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError('Attempt to write outside buffer bounds');
        }

        if (!encoding) encoding = 'utf8';
        var loweredCase = false;

        for (;;) {
          switch (encoding) {
            case 'hex':
              return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
              return utf8Write(this, string, offset, length);

            case 'ascii':
            case 'latin1':
            case 'binary':
              return asciiWrite(this, string, offset, length);

            case 'base64':
              // Warning: maxLength not taken into account in base64Write
              return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return ucs2Write(this, string, offset, length);

            default:
              if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
              encoding = ('' + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };

      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };

      function base64Slice(buf, start, end) {
        if (start === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start, end));
        }
      }

      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;

        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

          if (i + bytesPerSequence <= end) {
            var secondByte = void 0,
                thirdByte = void 0,
                fourthByte = void 0,
                tempCodePoint = void 0;

            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 0x80) {
                  codePoint = firstByte;
                }

                break;

              case 2:
                secondByte = buf[i + 1];

                if ((secondByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

                  if (tempCodePoint > 0x7F) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

                  if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                    codePoint = tempCodePoint;
                  }
                }

                break;

              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];

                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                  tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

                  if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                    codePoint = tempCodePoint;
                  }
                }

            }
          }

          if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
          } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
          }

          res.push(codePoint);
          i += bytesPerSequence;
        }

        return decodeCodePointsArray(res);
      } // Based on http://stackoverflow.com/a/22747272/680742, the browser with
      // the lowest limit is Chrome, with 0x10000 args.
      // We go 1 magnitude less, for safety


      var MAX_ARGUMENTS_LENGTH = 0x1000;

      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;

        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
        } // Decode in chunks to avoid "call stack size exceeded".


        var res = '';
        var i = 0;

        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }

        return res;
      }

      function asciiSlice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 0x7F);
        }

        return ret;
      }

      function latin1Slice(buf, start, end) {
        var ret = '';
        end = Math.min(buf.length, end);

        for (var i = start; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }

        return ret;
      }

      function hexSlice(buf, start, end) {
        var len = buf.length;
        if (!start || start < 0) start = 0;
        if (!end || end < 0 || end > len) end = len;
        var out = '';

        for (var i = start; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }

        return out;
      }

      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = ''; // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)

        for (var i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }

        return res;
      }

      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = end === undefined ? len : ~~end;

        if (start < 0) {
          start += len;
          if (start < 0) start = 0;
        } else if (start > len) {
          start = len;
        }

        if (end < 0) {
          end += len;
          if (end < 0) end = 0;
        } else if (end > len) {
          end = len;
        }

        if (end < start) end = start;
        var newBuf = this.subarray(start, end); // Return an augmented `Uint8Array` instance

        Object.setPrototypeOf(newBuf, Buffer.prototype);
        return newBuf;
      };
      /*
       * Need to make sure that buffer isn't trying to write out of bounds.
       */


      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
        if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
      }

      Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        return val;
      };

      Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          checkOffset(offset, byteLength, this.length);
        }

        var val = this[offset + --byteLength];
        var mul = 1;

        while (byteLength > 0 && (mul *= 0x100)) {
          val += this[offset + --byteLength] * mul;
        }

        return val;
      };

      Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        return this[offset];
      };

      Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };

      Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };

      Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
      };

      Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };

      Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var lo = first + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 24);
        var hi = this[++offset] + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + last * Math.pow(2, 24);
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var hi = first * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + this[++offset];
        var lo = this[++offset] * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });

      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;

        while (++i < byteLength && (mul *= 0x100)) {
          val += this[offset + i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;
        if (!noAssert) checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];

        while (i > 0 && (mul *= 0x100)) {
          val += this[offset + --i] * mul;
        }

        mul *= 0x80;
        if (val >= mul) val -= Math.pow(2, 8 * byteLength);
        return val;
      };

      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 1, this.length);
        if (!(this[offset] & 0x80)) return this[offset];
        return (0xff - this[offset] + 1) * -1;
      };

      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return val & 0x8000 ? val | 0xFFFF0000 : val;
      };

      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };

      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };

      Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var val = this[offset + 4] + this[offset + 5] * Math.pow(2, 8) + this[offset + 6] * Math.pow(2, 16) + (last << 24); // Overflow

        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * Math.pow(2, 8) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 24));
      });
      Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, 'offset');
        var first = this[offset];
        var last = this[offset + 7];

        if (first === undefined || last === undefined) {
          boundsError(offset, this.length - 8);
        }

        var val = (first << 24) + // Overflow
        this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * Math.pow(2, 24) + this[++offset] * Math.pow(2, 16) + this[++offset] * Math.pow(2, 8) + last);
      });

      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };

      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };

      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };

      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert) checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };

      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
      }

      Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var mul = 1;
        var i = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength = byteLength >>> 0;

        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }

        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          this[offset + i] = value / mul & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        var lo = Number(value & BigInt(0xffffffff));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }

      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        var lo = Number(value & BigInt(0xffffffff));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }

      Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
      });
      Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
      });

      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = value & 0xFF;

        while (++i < byteLength && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }

        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = value & 0xFF;

        while (--i >= 0 && (mul *= 0x100)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }

          this[offset + i] = (value / mul >> 0) - sub & 0xFF;
        }

        return offset + byteLength;
      };

      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
        if (value < 0) value = 0xff + value + 1;
        this[offset] = value & 0xff;
        return offset + 1;
      };

      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };

      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
        return offset + 2;
      };

      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };

      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
        if (value < 0) value = 0xffffffff + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
        return offset + 4;
      };

      Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      });
      Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
      });

      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError('Index out of range');
        if (offset < 0) throw new RangeError('Index out of range');
      }

      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
        }

        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }

      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };

      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;

        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
        }

        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }

      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };

      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      }; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
        if (!start) start = 0;
        if (!end && end !== 0) end = this.length;
        if (targetStart >= target.length) targetStart = target.length;
        if (!targetStart) targetStart = 0;
        if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

        if (end === start) return 0;
        if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

        if (targetStart < 0) {
          throw new RangeError('targetStart out of bounds');
        }

        if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
        if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

        if (end > this.length) end = this.length;

        if (target.length - targetStart < end - start) {
          end = target.length - targetStart + start;
        }

        var len = end - start;

        if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
          // Use built-in when available, missing from IE11
          this.copyWithin(targetStart, start, end);
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
        }

        return len;
      }; // Usage:
      //    buffer.fill(number[, offset[, end]])
      //    buffer.fill(buffer[, offset[, end]])
      //    buffer.fill(string[, offset[, end]][, encoding])


      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        // Handle string cases:
        if (typeof val === 'string') {
          if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
          } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
          }

          if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
          }

          if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
          }

          if (val.length === 1) {
            var code = val.charCodeAt(0);

            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') {
              // Fast path: If `val` fits into a single byte, use that numeric value.
              val = code;
            }
          }
        } else if (typeof val === 'number') {
          val = val & 255;
        } else if (typeof val === 'boolean') {
          val = Number(val);
        } // Invalid ranges are not set to a default, so can range check early.


        if (start < 0 || this.length < start || this.length < end) {
          throw new RangeError('Out of range index');
        }

        if (end <= start) {
          return this;
        }

        start = start >>> 0;
        end = end === undefined ? this.length : end >>> 0;
        if (!val) val = 0;
        var i;

        if (typeof val === 'number') {
          for (i = start; i < end; ++i) {
            this[i] = val;
          }
        } else {
          var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
          var len = bytes.length;

          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }

          for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
          }
        }

        return this;
      }; // CUSTOM ERRORS
      // =============
      // Simplified versions from Node, changed for Buffer-only usage


      var errors = {};

      function E(sym, getMessage, Base) {
        errors[sym] = /*#__PURE__*/function (_Base) {
          _inherits(NodeError, _Base);

          var _super = _createSuper(NodeError);

          function NodeError() {
            var _this4;

            _classCallCheck(this, NodeError);

            _this4 = _super.call(this);
            Object.defineProperty(_assertThisInitialized(_this4), 'message', {
              value: getMessage.apply(_assertThisInitialized(_this4), arguments),
              writable: true,
              configurable: true
            }); // Add the error code to the name to include it in the stack trace.

            _this4.name = "".concat(_this4.name, " [").concat(sym, "]"); // Access the stack to generate the error message including the error code
            // from the name.

            _this4.stack; // eslint-disable-line no-unused-expressions
            // Reset the name to the actual name.

            delete _this4.name;
            return _this4;
          }

          _createClass(NodeError, [{
            key: "toString",
            value: function toString() {
              return "".concat(this.name, " [").concat(sym, "]: ").concat(this.message);
            }
          }, {
            key: "code",
            get: function get() {
              return sym;
            },
            set: function set(value) {
              Object.defineProperty(this, 'code', {
                configurable: true,
                enumerable: true,
                value: value,
                writable: true
              });
            }
          }]);

          return NodeError;
        }(Base);
      }

      E('ERR_BUFFER_OUT_OF_BOUNDS', function (name) {
        if (name) {
          return "".concat(name, " is outside of buffer bounds");
        }

        return 'Attempt to access memory outside buffer bounds';
      }, RangeError);
      E('ERR_INVALID_ARG_TYPE', function (name, actual) {
        return "The \"".concat(name, "\" argument must be of type number. Received type ").concat(typeof actual);
      }, TypeError);
      E('ERR_OUT_OF_RANGE', function (str, range, input) {
        var msg = "The value of \"".concat(str, "\" is out of range.");
        var received = input;

        if (Number.isInteger(input) && Math.abs(input) > Math.pow(2, 32)) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === 'bigint') {
          received = String(input);

          if (input > Math.pow(BigInt(2), BigInt(32)) || input < -Math.pow(BigInt(2), BigInt(32))) {
            received = addNumericalSeparator(received);
          }

          received += 'n';
        }

        msg += " It must be ".concat(range, ". Received ").concat(received);
        return msg;
      }, RangeError);

      function addNumericalSeparator(val) {
        var res = '';
        var i = val.length;
        var start = val[0] === '-' ? 1 : 0;

        for (; i >= start + 4; i -= 3) {
          res = "_".concat(val.slice(i - 3, i)).concat(res);
        }

        return "".concat(val.slice(0, i)).concat(res);
      } // CHECK FUNCTIONS
      // ===============


      function checkBounds(buf, offset, byteLength) {
        validateNumber(offset, 'offset');

        if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
          boundsError(offset, buf.length - (byteLength + 1));
        }
      }

      function checkIntBI(value, min, max, buf, offset, byteLength) {
        if (value > max || value < min) {
          var n = typeof min === 'bigint' ? 'n' : '';
          var range;

          if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = ">= 0".concat(n, " and < 2").concat(n, " ** ").concat((byteLength + 1) * 8).concat(n);
            } else {
              range = ">= -(2".concat(n, " ** ").concat((byteLength + 1) * 8 - 1).concat(n, ") and < 2 ** ") + "".concat((byteLength + 1) * 8 - 1).concat(n);
            }
          } else {
            range = ">= ".concat(min).concat(n, " and <= ").concat(max).concat(n);
          }

          throw new errors.ERR_OUT_OF_RANGE('value', range, value);
        }

        checkBounds(buf, offset, byteLength);
      }

      function validateNumber(value, name) {
        if (typeof value !== 'number') {
          throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
        }
      }

      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
        }

        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }

        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', ">= ".concat(type ? 1 : 0, " and <= ").concat(length), value);
      } // HELPER FUNCTIONS
      // ================


      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

      function base64clean(str) {
        // Node takes equal signs as end of the Base64 encoding
        str = str.split('=')[0]; // Node strips out invalid characters like \n and \t from the string, base64-js does not

        str = str.trim().replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

        if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

        while (str.length % 4 !== 0) {
          str = str + '=';
        }

        return str;
      }

      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];

        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i); // is surrogate component

          if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
              // no lead yet
              if (codePoint > 0xDBFF) {
                // unexpected trail
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } else if (i + 1 === length) {
                // unpaired lead
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                continue;
              } // valid lead


              leadSurrogate = codePoint;
              continue;
            } // 2 leads in a row


            if (codePoint < 0xDC00) {
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              leadSurrogate = codePoint;
              continue;
            } // valid surrogate pair


            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
          } else if (leadSurrogate) {
            // valid bmp char, but last char was a lead
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          }

          leadSurrogate = null; // encode utf8

          if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
          } else {
            throw new Error('Invalid code point');
          }
        }

        return bytes;
      }

      function asciiToBytes(str) {
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          // Node's code seems to be doing this and not & 0x7F..
          byteArray.push(str.charCodeAt(i) & 0xFF);
        }

        return byteArray;
      }

      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];

        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }

        return byteArray;
      }

      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }

      function blitBuffer(src, dst, offset, length) {
        var i;

        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }

        return i;
      } // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
      // the `instanceof` check but they should be treated as of that type.
      // See: https://github.com/feross/buffer/issues/166


      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }

      function numberIsNaN(obj) {
        // For IE11 support
        return obj !== obj; // eslint-disable-line no-self-compare
      } // Create lookup table for `toString('hex')`
      // See: https://github.com/feross/buffer/issues/219


      var hexSliceLookupTable = function () {
        var alphabet = '0123456789abcdef';
        var table = new Array(256);

        for (var i = 0; i < 16; ++i) {
          var i16 = i * 16;

          for (var j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }

        return table;
      }(); // Return not function with Error if BigInt not supported


      function defineBigIntMethod(fn) {
        return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn;
      }

      function BufferBigIntNotDefined() {
        throw new Error('BigInt not supported');
      }
      /***/

    },

    /***/
    "wGJp":
    /*!*******************************************************!*\
      !*** ./node_modules/exifreader/src/iptc-tag-names.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function wGJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tag-names-utils.js */
      "dyR6");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        'iptc': {
          0x0100: {
            'name': 'Model Version',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x0105: {
            'name': 'Destination',
            'repeatable': true
          },
          0x0114: {
            'name': 'File Format',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x0116: {
            'name': 'File Format Version',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x011e: 'Service Identifier',
          0x0128: 'Envelope Number',
          0x0132: 'Product ID',
          0x013c: 'Envelope Priority',
          0x0146: {
            'name': 'Date Sent',
            'description': getCreationDate
          },
          0x0150: {
            'name': 'Time Sent',
            'description': getCreationTime
          },
          0x015a: {
            'name': 'Coded Character Set',
            'description': getEncodingName,
            'encoding_name': getEncodingName
          },
          0x0164: 'UNO',
          0x0178: {
            'name': 'ARM Identifier',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x017a: {
            'name': 'ARM Version',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x0200: {
            'name': 'Record Version',
            'description': function description(value) {
              return ((value[0] << 8) + value[1]).toString();
            }
          },
          0x0203: 'Object Type Reference',
          0x0204: 'Object Attribute Reference',
          0x0205: 'Object Name',
          0x0207: 'Edit Status',
          0x0208: {
            'name': 'Editorial Update',
            'description': function description(value) {
              if (Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value) === '01') {
                return 'Additional Language';
              }

              return 'Unknown';
            }
          },
          0x020a: 'Urgency',
          0x020c: {
            'name': 'Subject Reference',
            'repeatable': true,
            'description': function description(value) {
              var parts = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value).split(':');
              return parts[2] + (parts[3] ? '/' + parts[3] : '') + (parts[4] ? '/' + parts[4] : '');
            }
          },
          0x020f: 'Category',
          0x0214: {
            'name': 'Supplemental Category',
            'repeatable': true
          },
          0x0216: 'Fixture Identifier',
          0x0219: {
            'name': 'Keywords',
            'repeatable': true
          },
          0x021a: {
            'name': 'Content Location Code',
            'repeatable': true
          },
          0x021b: {
            'name': 'Content Location Name',
            'repeatable': true
          },
          0x021e: 'Release Date',
          0x0223: 'Release Time',
          0x0225: 'Expiration Date',
          0x0226: 'Expiration Time',
          0x0228: 'Special Instructions',
          0x022a: {
            'name': 'Action Advised',
            'description': function description(value) {
              var string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

              if (string === '01') {
                return 'Object Kill';
              } else if (string === '02') {
                return 'Object Replace';
              } else if (string === '03') {
                return 'Object Append';
              } else if (string === '04') {
                return 'Object Reference';
              }

              return 'Unknown';
            }
          },
          0x022d: {
            'name': 'Reference Service',
            'repeatable': true
          },
          0x022f: {
            'name': 'Reference Date',
            'repeatable': true
          },
          0x0232: {
            'name': 'Reference Number',
            'repeatable': true
          },
          0x0237: {
            'name': 'Date Created',
            'description': getCreationDate
          },
          0x023c: {
            'name': 'Time Created',
            'description': getCreationTime
          },
          0x023e: {
            'name': 'Digital Creation Date',
            'description': getCreationDate
          },
          0x023f: {
            'name': 'Digital Creation Time',
            'description': getCreationTime
          },
          0x0241: 'Originating Program',
          0x0246: 'Program Version',
          0x024b: {
            'name': 'Object Cycle',
            'description': function description(value) {
              var string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

              if (string === 'a') {
                return 'morning';
              } else if (string === 'p') {
                return 'evening';
              } else if (string === 'b') {
                return 'both';
              }

              return 'Unknown';
            }
          },
          0x0250: {
            'name': 'By-line',
            'repeatable': true
          },
          0x0255: {
            'name': 'By-line Title',
            'repeatable': true
          },
          0x025a: 'City',
          0x025c: 'Sub-location',
          0x025f: 'Province/State',
          0x0264: 'Country/Primary Location Code',
          0x0265: 'Country/Primary Location Name',
          0x0267: 'Original Transmission Reference',
          0x0269: 'Headline',
          0x026e: 'Credit',
          0x0273: 'Source',
          0x0274: 'Copyright Notice',
          0x0276: {
            'name': 'Contact',
            'repeatable': true
          },
          0x0278: 'Caption/Abstract',
          0x027a: {
            'name': 'Writer/Editor',
            'repeatable': true
          },
          0x027d: {
            'name': 'Rasterized Caption',
            'description': function description(value) {
              return value;
            }
          },
          0x0282: 'Image Type',
          0x0283: {
            'name': 'Image Orientation',
            'description': function description(value) {
              var string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

              if (string === 'P') {
                return 'Portrait';
              } else if (string === 'L') {
                return 'Landscape';
              } else if (string === 'S') {
                return 'Square';
              }

              return 'Unknown';
            }
          },
          0x0287: 'Language Identifier',
          0x0296: {
            'name': 'Audio Type',
            'description': function description(value) {
              var stringValue = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
              var character0 = stringValue.charAt(0);
              var character1 = stringValue.charAt(1);
              var description = '';

              if (character0 === '1') {
                description += 'Mono';
              } else if (character0 === '2') {
                description += 'Stereo';
              }

              if (character1 === 'A') {
                description += ', actuality';
              } else if (character1 === 'C') {
                description += ', question and answer session';
              } else if (character1 === 'M') {
                description += ', music, transmitted by itself';
              } else if (character1 === 'Q') {
                description += ', response to a question';
              } else if (character1 === 'R') {
                description += ', raw sound';
              } else if (character1 === 'S') {
                description += ', scener';
              } else if (character1 === 'V') {
                description += ', voicer';
              } else if (character1 === 'W') {
                description += ', wrap';
              }

              if (description !== '') {
                return description;
              }

              return stringValue;
            }
          },
          0x0297: {
            'name': 'Audio Sampling Rate',
            'description': function description(value) {
              return parseInt(Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value), 10) + ' Hz';
            }
          },
          0x0298: {
            'name': 'Audio Sampling Resolution',
            'description': function description(value) {
              var bits = parseInt(Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value), 10);
              return bits + (bits === 1 ? ' bit' : ' bits');
            }
          },
          0x0299: {
            'name': 'Audio Duration',
            'description': function description(value) {
              var duration = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

              if (duration.length >= 6) {
                return duration.substr(0, 2) + ':' + duration.substr(2, 2) + ':' + duration.substr(4, 2);
              }

              return duration;
            }
          },
          0x029a: 'Audio Outcue',
          0x02ba: 'Short Document ID',
          0x02bb: 'Unique Document ID',
          0x02bc: 'Owner ID',
          0x02c8: {
            'name': function name(value) {
              if (value.length === 2) {
                return 'ObjectData Preview File Format';
              }

              return 'Record 2 destination';
            },
            'description': function description(value) {
              if (value.length === 2) {
                var intValue = (value[0] << 8) + value[1];

                if (intValue === 0) {
                  return 'No ObjectData';
                } else if (intValue === 1) {
                  return 'IPTC-NAA Digital Newsphoto Parameter Record';
                } else if (intValue === 2) {
                  return 'IPTC7901 Recommended Message Format';
                } else if (intValue === 3) {
                  return 'Tagged Image File Format (Adobe/Aldus Image data)';
                } else if (intValue === 4) {
                  return 'Illustrator (Adobe Graphics data)';
                } else if (intValue === 5) {
                  return 'AppleSingle (Apple Computer Inc)';
                } else if (intValue === 6) {
                  return 'NAA 89-3 (ANPA 1312)';
                } else if (intValue === 7) {
                  return 'MacBinary II';
                } else if (intValue === 8) {
                  return 'IPTC Unstructured Character Oriented File Format (UCOFF)';
                } else if (intValue === 9) {
                  return 'United Press International ANPA 1312 variant';
                } else if (intValue === 10) {
                  return 'United Press International Down-Load Message';
                } else if (intValue === 11) {
                  return 'JPEG File Interchange (JFIF)';
                } else if (intValue === 12) {
                  return 'Photo-CD Image-Pac (Eastman Kodak)';
                } else if (intValue === 13) {
                  return 'Microsoft Bit Mapped Graphics File [*.BMP]';
                } else if (intValue === 14) {
                  return 'Digital Audio File [*.WAV] (Microsoft & Creative Labs)';
                } else if (intValue === 15) {
                  return 'Audio plus Moving Video [*.AVI] (Microsoft)';
                } else if (intValue === 16) {
                  return 'PC DOS/Windows Executable Files [*.COM][*.EXE]';
                } else if (intValue === 17) {
                  return 'Compressed Binary File [*.ZIP] (PKWare Inc)';
                } else if (intValue === 18) {
                  return 'Audio Interchange File Format AIFF (Apple Computer Inc)';
                } else if (intValue === 19) {
                  return 'RIFF Wave (Microsoft Corporation)';
                } else if (intValue === 20) {
                  return 'Freehand (Macromedia/Aldus)';
                } else if (intValue === 21) {
                  return 'Hypertext Markup Language "HTML" (The Internet Society)';
                } else if (intValue === 22) {
                  return 'MPEG 2 Audio Layer 2 (Musicom), ISO/IEC';
                } else if (intValue === 23) {
                  return 'MPEG 2 Audio Layer 3, ISO/IEC';
                } else if (intValue === 24) {
                  return 'Portable Document File (*.PDF) Adobe';
                } else if (intValue === 25) {
                  return 'News Industry Text Format (NITF)';
                } else if (intValue === 26) {
                  return 'Tape Archive (*.TAR)';
                } else if (intValue === 27) {
                  return 'Tidningarnas Telegrambyrå NITF version (TTNITF DTD)';
                } else if (intValue === 28) {
                  return 'Ritzaus Bureau NITF version (RBNITF DTD)';
                } else if (intValue === 29) {
                  return 'Corel Draw [*.CDR]';
                }

                return "Unknown format ".concat(intValue);
              }

              return Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
            }
          },
          0x02c9: {
            'name': 'ObjectData Preview File Format Version',
            'description': function description(value, tags) {
              // Format ID, Version ID, Version Description
              var formatVersions = {
                '00': {
                  '00': '1'
                },
                '01': {
                  '01': '1',
                  '02': '2',
                  '03': '3',
                  '04': '4'
                },
                '02': {
                  '04': '4'
                },
                '03': {
                  '01': '5.0',
                  '02': '6.0'
                },
                '04': {
                  '01': '1.40'
                },
                '05': {
                  '01': '2'
                },
                '06': {
                  '01': '1'
                },
                '11': {
                  '01': '1.02'
                },
                '20': {
                  '01': '3.1',
                  '02': '4.0',
                  '03': '5.0',
                  '04': '5.5'
                },
                '21': {
                  '02': '2.0'
                }
              };
              var stringValue = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

              if (tags['ObjectData Preview File Format']) {
                var objectDataPreviewFileFormat = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(tags['ObjectData Preview File Format'].value);

                if (formatVersions[objectDataPreviewFileFormat] && formatVersions[objectDataPreviewFileFormat][stringValue]) {
                  return formatVersions[objectDataPreviewFileFormat][stringValue];
                }
              }

              return stringValue;
            }
          },
          0x02ca: 'ObjectData Preview Data',
          0x070a: {
            'name': 'Size Mode',
            'description': function description(value) {
              return value[0].toString();
            }
          },
          0x0714: {
            'name': 'Max Subfile Size',
            'description': function description(value) {
              var n = 0;

              for (var i = 0; i < value.length; i++) {
                n = (n << 8) + value[i];
              }

              return n.toString();
            }
          },
          0x075a: {
            'name': 'ObjectData Size Announced',
            'description': function description(value) {
              var n = 0;

              for (var i = 0; i < value.length; i++) {
                n = (n << 8) + value[i];
              }

              return n.toString();
            }
          },
          0x075f: {
            'name': 'Maximum ObjectData Size',
            'description': function description(value) {
              var n = 0;

              for (var i = 0; i < value.length; i++) {
                n = (n << 8) + value[i];
              }

              return n.toString();
            }
          }
        }
      };

      function getCreationDate(value) {
        var date = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

        if (date.length >= 8) {
          return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
        }

        return date;
      }

      function getCreationTime(value) {
        var time = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
        var parsedTime = time;

        if (time.length >= 6) {
          parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);

          if (time.length === 11) {
            parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
          }
        }

        return parsedTime;
      }

      function getEncodingName(value) {
        var string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

        if (string === '\x1b%G') {
          return 'UTF-8';
        } else if (string === '\x1b%5') {
          return 'Windows-1252';
        } else if (string === '\x1b%/G') {
          return 'UTF-8 Level 1';
        } else if (string === '\x1b%/H') {
          return 'UTF-8 Level 2';
        } else if (string === '\x1b%/I') {
          return 'UTF-8 Level 3';
        } else if (string === '\x1B/A') {
          return 'ISO-8859-1';
        } else if (string === '\x1B/B') {
          return 'ISO-8859-2';
        } else if (string === '\x1B/C') {
          return 'ISO-8859-3';
        } else if (string === '\x1B/D') {
          return 'ISO-8859-4';
        } else if (string === '\x1B/@') {
          return 'ISO-8859-5';
        } else if (string === '\x1B/G') {
          return 'ISO-8859-6';
        } else if (string === '\x1B/F') {
          return 'ISO-8859-7';
        } else if (string === '\x1B/H') {
          return 'ISO-8859-8';
        }

        return 'Unknown';
      }
      /***/

    },

    /***/
    "xjty":
    /*!********************************************************************************!*\
      !*** ./projects/dev/src/app/pages/demo/read-stream/read-stream.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function xjty(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".partition {\n  display: block;\n  margin: 30px 0;\n  padding: 0;\n  height: 1px;\n  border: none;\n  background-color: #eeeeee;\n}\n\n.print-stack .stack-opt {\n  display: flex;\n  align-items: center;\n}\n\n.print-stack .stack-opt .spacer {\n  flex: 1;\n}\n\n.print-stack .stack-count {\n  padding: 5px 0;\n  text-align: right;\n  font-size: 14px;\n}\n\n.print-stack .stack-list {\n  display: block;\n  margin-top: 5px;\n  height: 400px;\n  overflow: auto;\n  border: 1px solid #999999;\n}\n\n.print-stack .stack-item {\n  display: flex;\n  align-items: center;\n  margin: 3px;\n  padding: 5px;\n  font-size: 14px;\n  border: 1px solid #cccccc;\n  box-sizing: border-box;\n}\n\n.print-stack .stack-item .aside {\n  width: 90px;\n}\n\n.print-stack .stack-item .bside {\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.print-stack .stack-item .label {\n  flex: 1;\n}\n\n.print-stack .stack-item .label .dt {\n  display: block;\n  font-size: 12px;\n  color: #888888;\n}\n\n.print-stack .stack-item .label .dd {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3JlYWQtc3RyZWFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBQ0k7RUFDRSxPQUFBO0FBQ047O0FBRUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFFSTtFQUNFLFdBQUE7QUFBTjs7QUFFSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUVJO0VBQ0UsT0FBQTtBQUFOOztBQUNNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ1I7O0FBQ007RUFDRSxjQUFBO0FBQ1IiLCJmaWxlIjoicmVhZC1zdHJlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFydGl0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMzBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xufVxuXG4ucHJpbnQtc3RhY2sge1xuICAuc3RhY2stb3B0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnNwYWNlciB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgfVxuICAuc3RhY2stY291bnQge1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc3RhY2stbGlzdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk5OTk5OTtcbiAgfVxuICAuc3RhY2staXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLmFzaWRlIHtcbiAgICAgIHdpZHRoOiA5MHB4O1xuICAgIH1cbiAgICAuYnNpZGUge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5sYWJlbCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgLmR0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM4ODg4ODg7XG4gICAgICB9XG4gICAgICAuZGQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "ySiG":
    /*!*************************************************!*\
      !*** ./node_modules/exifreader/src/xmp-tags.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ySiG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./utils.js */
      "rAM+");
      /* harmony import */


      var _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./xmp-tag-names.js */
      "otYY");
      /* harmony import */


      var _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dom-parser.js */
      "bzdV");
      /* This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

      /* harmony default export */


      __webpack_exports__["default"] = {
        read: read
      };

      function read(dataView, chunks) {
        if (typeof dataView === 'string') {
          return readTags({}, dataView);
        }

        return extractCompleteChunks(dataView, chunks).reduce(readTags, {});
      } // The first chunk is always the regular XMP document. Then there is something
      // called extended XMP. The extended XMP is also a single XMP document but it
      // can be divided into multiple chunks that need to be combined into one.


      function extractCompleteChunks(dataView, chunks) {
        if (chunks.length === 0) {
          return [];
        }

        var completeChunks = [combineChunks(dataView, chunks.slice(0, 1))];

        if (chunks.length > 1) {
          completeChunks.push(combineChunks(dataView, chunks.slice(1)));
        }

        return completeChunks;
      }

      function combineChunks(dataView, chunks) {
        var totalLength = chunks.reduce(function (size, chunk) {
          return size + chunk.length;
        }, 0);
        var combinedChunks = new Uint8Array(totalLength);
        var offset = 0;

        for (var i = 0; i < chunks.length; i++) {
          var chunk = chunks[i];
          var slice = dataView.buffer.slice(chunk.dataOffset, chunk.dataOffset + chunk.length);
          combinedChunks.set(new Uint8Array(slice), offset);
          offset += chunk.length;
        }

        return new DataView(combinedChunks.buffer);
      }

      function readTags(tags, chunkDataView) {
        try {
          var doc = getDocument(chunkDataView);
          var rdf = getRDF(doc);
          return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseXMPObject(convertToObject(rdf, true)));
        } catch (error) {
          return tags;
        }
      }

      function getDocument(chunkDataView) {
        var Parser = _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__["default"].get();

        if (!Parser) {
          console.warn('Warning: DOMParser is not available. It is needed to be able to parse XMP tags.'); // eslint-disable-line no-console

          throw new Error();
        }

        var domParser = new Parser();
        var xmlString = typeof chunkDataView === 'string' ? chunkDataView : Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(chunkDataView, 0, chunkDataView.byteLength);
        var doc = domParser.parseFromString(trimXmlSource(xmlString), 'application/xml');

        if (doc.documentElement.nodeName === 'parsererror') {
          throw new Error(doc.documentElement.textContent);
        }

        return doc;
      }

      function trimXmlSource(xmlSource) {
        return xmlSource.replace(/^.+(<\?xpacket begin)/, '$1').replace(/(<\?xpacket end=".*"\?>).+$/, '$1');
      }

      function getRDF(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          if (node.childNodes[i].tagName === 'x:xmpmeta') {
            return getRDF(node.childNodes[i]);
          }

          if (node.childNodes[i].tagName === 'rdf:RDF') {
            return node.childNodes[i];
          }
        }

        throw new Error();
      }

      function convertToObject(node) {
        var isTopNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var childNodes = getChildNodes(node);

        if (hasTextOnlyContent(childNodes)) {
          if (isTopNode) {
            return {};
          }

          return getTextValue(childNodes[0]);
        }

        return getElementsFromNodes(childNodes);
      }

      function getChildNodes(node) {
        var elements = [];

        for (var i = 0; i < node.childNodes.length; i++) {
          elements.push(node.childNodes[i]);
        }

        return elements;
      }

      function hasTextOnlyContent(nodes) {
        return nodes.length === 1 && nodes[0].nodeName === '#text';
      }

      function getTextValue(node) {
        return node.nodeValue;
      }

      function getElementsFromNodes(nodes) {
        var elements = {};
        nodes.forEach(function (node) {
          if (isElement(node)) {
            var nodeElement = getElementFromNode(node);

            if (elements[node.nodeName] !== undefined) {
              if (!Array.isArray(elements[node.nodeName])) {
                elements[node.nodeName] = [elements[node.nodeName]];
              }

              elements[node.nodeName].push(nodeElement);
            } else {
              elements[node.nodeName] = nodeElement;
            }
          }
        });
        return elements;
      }

      function isElement(node) {
        return node.nodeName && node.nodeName !== '#text';
      }

      function getElementFromNode(node) {
        return {
          attributes: getAttributes(node),
          value: convertToObject(node)
        };
      }

      function getAttributes(element) {
        var attributes = {};

        for (var i = 0; i < element.attributes.length; i++) {
          attributes[element.attributes[i].nodeName] = decodeURIComponent(escape(element.attributes[i].value));
        }

        return attributes;
      }

      function parseXMPObject(xmpObject) {
        var tags = {};

        if (typeof xmpObject === 'string') {
          return xmpObject;
        }

        for (var nodeName in xmpObject) {
          var nodes = xmpObject[nodeName];

          if (!Array.isArray(nodes)) {
            nodes = [nodes];
          }

          nodes.forEach(function (node) {
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseNodeAttributesAsTags(node.attributes));

            if (typeof node.value === 'object') {
              Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseNodeChildrenAsTags(node.value));
            }
          });
        }

        return tags;
      }

      function parseNodeAttributesAsTags(attributes) {
        var tags = {};

        for (var name in attributes) {
          if (isTagAttribute(name)) {
            tags[getLocalName(name)] = {
              value: attributes[name],
              attributes: {},
              description: getDescription(attributes[name], name)
            };
          }
        }

        return tags;
      }

      function isTagAttribute(name) {
        return name !== 'rdf:parseType' && !isNamespaceDefinition(name);
      }

      function isNamespaceDefinition(name) {
        return name.split(':')[0] === 'xmlns';
      }

      function getLocalName(name) {
        return name.split(':')[1];
      }

      function getDescription(value) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

        if (Array.isArray(value)) {
          return getDescriptionOfArray(value);
        }

        if (typeof value === 'object') {
          return getDescriptionOfObject(value);
        }

        try {
          if (name && typeof _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name] === 'function') {
            return _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name](value);
          }

          return decodeURIComponent(escape(value));
        } catch (error) {
          return value;
        }
      }

      function getDescriptionOfArray(value) {
        return value.map(function (item) {
          if (item.value !== undefined) {
            return getDescription(item.value);
          }

          return getDescription(item);
        }).join(', ');
      }

      function getDescriptionOfObject(value) {
        var descriptions = [];

        for (var key in value) {
          descriptions.push("".concat(getClearTextKey(key), ": ").concat(value[key].value));
        }

        return descriptions.join('; ');
      }

      function getClearTextKey(key) {
        if (key === 'CiAdrCity') {
          return 'CreatorCity';
        }

        if (key === 'CiAdrCtry') {
          return 'CreatorCountry';
        }

        if (key === 'CiAdrExtadr') {
          return 'CreatorAddress';
        }

        if (key === 'CiAdrPcode') {
          return 'CreatorPostalCode';
        }

        if (key === 'CiAdrRegion') {
          return 'CreatorRegion';
        }

        if (key === 'CiEmailWork') {
          return 'CreatorWorkEmail';
        }

        if (key === 'CiTelWork') {
          return 'CreatorWorkPhone';
        }

        if (key === 'CiUrlWork') {
          return 'CreatorWorkUrl';
        }

        return key;
      }

      function parseNodeChildrenAsTags(children) {
        var tags = {};

        for (var name in children) {
          if (!isNamespaceDefinition(name)) {
            tags[getLocalName(name)] = parseNodeAsTag(children[name], name);
          }
        }

        return tags;
      }

      function parseNodeAsTag(node, name) {
        if (hasNestedSimpleRdfDescription(node)) {
          return parseNodeAsSimpleRdfDescription(node, name);
        } else if (hasNestedStructureRdfDescription(node)) {
          return parseNodeAsStructureRdfDescription(node, name);
        } else if (isCompactStructure(node)) {
          return parseNodeAsCompactStructure(node, name);
        } else if (isArray(node)) {
          return parseNodeAsArray(node, name);
        }

        return parseNodeAsSimpleValue(node, name);
      }

      function hasNestedSimpleRdfDescription(node) {
        return node.attributes['rdf:parseType'] === 'Resource' && node.value['rdf:value'] !== undefined || node.value['rdf:Description'] !== undefined && node.value['rdf:Description'].value['rdf:value'] !== undefined;
      }

      function parseNodeAsSimpleRdfDescription(node, name) {
        var attributes = parseNodeAttributes(node);

        if (node.value['rdf:Description'] !== undefined) {
          node = node.value['rdf:Description'];
        }

        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));
        var value = parseRdfValue(node);
        return {
          value: value,
          attributes: attributes,
          description: getDescription(value, name)
        };
      }

      function parseNodeAttributes(node) {
        var attributes = {};

        for (var name in node.attributes) {
          if (name !== 'rdf:parseType' && name !== 'rdf:resource' && !isNamespaceDefinition(name)) {
            attributes[getLocalName(name)] = node.attributes[name];
          }
        }

        return attributes;
      }

      function parseNodeChildrenAsAttributes(node) {
        var attributes = {};

        for (var name in node.value) {
          if (name !== 'rdf:value' && !isNamespaceDefinition(name)) {
            attributes[getLocalName(name)] = node.value[name].value;
          }
        }

        return attributes;
      }

      function parseRdfValue(node) {
        return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
      }

      function hasNestedStructureRdfDescription(node) {
        return node.attributes['rdf:parseType'] === 'Resource' || node.value['rdf:Description'] !== undefined && node.value['rdf:Description'].value['rdf:value'] === undefined;
      }

      function parseNodeAsStructureRdfDescription(node, name) {
        var tag = {
          value: {},
          attributes: {}
        };

        if (node.value['rdf:Description'] !== undefined) {
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tag.value, parseNodeAttributesAsTags(node.value['rdf:Description'].attributes));
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tag.attributes, parseNodeAttributes(node));
          node = node.value['rdf:Description'];
        }

        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tag.value, parseNodeChildrenAsTags(node.value));
        tag.description = getDescription(tag.value, name);
        return tag;
      }

      function isCompactStructure(node) {
        return Object.keys(node.value).length === 0 && node.attributes['rdf:resource'] === undefined;
      }

      function parseNodeAsCompactStructure(node, name) {
        var value = parseNodeAttributesAsTags(node.attributes);
        return {
          value: value,
          attributes: {},
          description: getDescription(value, name)
        };
      }

      function isArray(node) {
        return getArrayChild(node.value) !== undefined;
      }

      function getArrayChild(value) {
        return value['rdf:Bag'] || value['rdf:Seq'] || value['rdf:Alt'];
      }

      function parseNodeAsArray(node, name) {
        var items = getArrayChild(node.value).value['rdf:li'];
        var attributes = parseNodeAttributes(node);
        var value = [];

        if (items === undefined) {
          items = [];
        } else if (!Array.isArray(items)) {
          items = [items];
        }

        items.forEach(function (item) {
          value.push(parseArrayValue(item));
        });
        return {
          value: value,
          attributes: attributes,
          description: getDescription(value, name)
        };
      }

      function parseArrayValue(item) {
        if (hasNestedSimpleRdfDescription(item)) {
          return parseNodeAsSimpleRdfDescription(item);
        }

        if (hasNestedArrayValue(item)) {
          return parseNodeChildrenAsTags(item.value);
        }

        return {
          value: item.value,
          attributes: parseNodeAttributes(item),
          description: getDescription(item.value)
        };
      }

      function hasNestedArrayValue(node) {
        return node.attributes['rdf:parseType'] === 'Resource';
      }

      function parseNodeAsSimpleValue(node, name) {
        var value = getURIValue(node) || parseXMPObject(node.value);
        return {
          value: value,
          attributes: parseNodeAttributes(node),
          description: getDescription(value, name)
        };
      }

      function getURIValue(node) {
        return node.attributes && node.attributes['rdf:resource'];
      }
      /***/

    },

    /***/
    "yvCk":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/pages/demo/blob-image/blob-image.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yvCk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n  <div class=\"fm-box-wrap\">\n    <div class=\"fm-box\">\n      <span class=\"label\">expectWidth</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testWidth\">\n          <mat-option *ngFor=\"let data of optionWidths\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">expectHeight</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testHeight\">\n          <mat-option *ngFor=\"let data of optionHeights\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">quality</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testQuality\">\n          <mat-option *ngFor=\"let data of optionQualities\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">applyOrientation</span>\n      <div class=\"box\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"testApplyOrientation\">\n          apply exif orientation\n        </mat-checkbox>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">expectContentType</span>\n      <div class=\"box\">\n        <input class=\"fm-input\" [(ngModel)]=\"testContentType\" placeholder=\"ex) image/jpeg\" />\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">fillBgColor</span>\n      <div class=\"box\">\n        <input class=\"fm-input\" [(ngModel)]=\"testFillBgColor\" placeholder=\"ex) #ff0000\" />\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"my-desc\">\n    <li class=\"item\">quality: only applies when contentType \"image/jpeg\"</li>\n    <li class=\"item\">\n      orientation: only applies when image has exif orientation\n      <a target=\"_blank\" href=\"https://github.com/recurser/exif-orientation-examples\"\n        >(github: exif orientation sample image)</a\n      >\n    </li>\n  </ul>\n</div>\n\n<div class=\"file-wrap\">\n  <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" />\n</div>\n\n<div class=\"demo-wrap\">\n  <div *ngFor=\"let demo of demoList\" class=\"demo-item\">\n    <div class=\"panel-canvas\">\n      <div class=\"draw-area\">\n        <canvas #demoCanvasRefs></canvas>\n      </div>\n    </div>\n    <div *ngIf=\"demo.info\" class=\"panel-info\">\n      <em class=\"tit\">{{ demo.info.title }}</em>\n      <dl class=\"dl\">\n        <dt class=\"dt\">size</dt>\n        <dd class=\"dd\">{{ demo.info.size }}bype / {{ (demo.info.size / 1024).toFixed(2) }}kb</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">type</dt>\n        <dd class=\"dd\">{{ demo.info.type }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">width</dt>\n        <dd class=\"dd\">{{ demo.info.width }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">height</dt>\n        <dd class=\"dd\">{{ demo.info.height }}</dd>\n      </dl>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"canvas-wrap\">\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasOriginal></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCover></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCoverNoneStretch></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasScale></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-wrap\">\n  <div *ngFor=\"let info of infos\" class=\"info-item\">\n    <em class=\"tit\">{{ info.title }}</em>\n    <dl class=\"dl\">\n      <dt class=\"dt\">size</dt>\n      <dd class=\"dd\">{{ info.size }}bype / {{ (info.size / 1024).toFixed(2) }}kb</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">type</dt>\n      <dd class=\"dd\">{{ info.type }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">width</dt>\n      <dd class=\"dd\">{{ info.width }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">height</dt>\n      <dd class=\"dd\">{{ info.height }}</dd>\n    </dl>\n  </div>\n</div> -->\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=dev-app-pages-demo-demo-module-es5.js.map