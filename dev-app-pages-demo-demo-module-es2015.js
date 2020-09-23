(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dev-app-pages-demo-demo-module"],{

/***/ "../../node_modules/exifreader/src/byte-order.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/byte-order.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const LITTLE_ENDIAN = 0x4949;
const BIG_ENDIAN = 0x4d4d;

/* harmony default export */ __webpack_exports__["default"] = ({
    BIG_ENDIAN,
    LITTLE_ENDIAN,
    getByteOrder
});

function getByteOrder(dataView, tiffHeaderOffset) {
    if (dataView.getUint16(tiffHeaderOffset) === LITTLE_ENDIAN) {
        return LITTLE_ENDIAN;
    } else if (dataView.getUint16(tiffHeaderOffset) === BIG_ENDIAN) {
        return BIG_ENDIAN;
    }
    throw new Error('Illegal byte order value. Faulty image.');
}


/***/ }),

/***/ "../../node_modules/exifreader/src/constants.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/constants.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    USE_FILE: true,
    USE_PNG_FILE: true,
    USE_EXIF: true,
    USE_IPTC: true,
    USE_XMP: true,
    USE_ICC: true,
    USE_THUMBNAIL: true,
    USE_TIFF: true,
    USE_JPEG: true,
    USE_PNG: true,
    USE_HEIC: true,
    USE_WEBP: true
});


/***/ }),

/***/ "../../node_modules/exifreader/src/dataview.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/dataview.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataView; });
class DataView {
    constructor(buffer) {
        if (bufferTypeIsUnsupported(buffer)) {
            throw new Error('DataView: Passed buffer type is unsupported.');
        }

        this.buffer = buffer;
        this.byteLength = this.buffer.length;
    }

    getUint8(offset) {
        return this.buffer.readUInt8(offset);
    }

    getUint16(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt16LE(offset);
        }
        return this.buffer.readUInt16BE(offset);
    }

    getUint32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readUInt32LE(offset);
        }
        return this.buffer.readUInt32BE(offset);
    }

    getInt32(offset, littleEndian) {
        if (littleEndian) {
            return this.buffer.readInt32LE(offset);
        }
        return this.buffer.readInt32BE(offset);
    }
}

function bufferTypeIsUnsupported(buffer) {
    return typeof buffer !== 'object'
        || buffer.length === undefined
        || buffer.readUInt8 === undefined
        || buffer.readUInt16LE === undefined
        || buffer.readUInt16BE === undefined
        || buffer.readUInt32LE === undefined
        || buffer.readUInt32BE === undefined
        || buffer.readInt32LE === undefined
        || buffer.readInt32BE === undefined;
}


/***/ }),

/***/ "../../node_modules/exifreader/src/dom-parser.js":
/*!********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/dom-parser.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    get
});

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


/***/ }),

/***/ "../../node_modules/exifreader/src/errors.js":
/*!****************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/errors.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

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
    this.stack = (new Error()).stack;
}

MetadataMissingError.prototype = new Error;

/* harmony default export */ __webpack_exports__["default"] = ({
    MetadataMissingError,
});


/***/ }),

/***/ "../../node_modules/exifreader/src/exif-reader.js":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/exif-reader.js ***!
  \*********************************************************************************************/
/*! exports provided: default, errors, load, loadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errors", function() { return errors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadView", function() { return loadView; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _dataview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataview.js */ "../../node_modules/exifreader/src/dataview.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-names-utils.js */ "../../node_modules/exifreader/src/tag-names-utils.js");
/* harmony import */ var _image_header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-header.js */ "../../node_modules/exifreader/src/image-header.js");
/* harmony import */ var _tags_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags.js */ "../../node_modules/exifreader/src/tags.js");
/* harmony import */ var _file_tags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-tags.js */ "../../node_modules/exifreader/src/file-tags.js");
/* harmony import */ var _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iptc-tags.js */ "../../node_modules/exifreader/src/iptc-tags.js");
/* harmony import */ var _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./xmp-tags.js */ "../../node_modules/exifreader/src/xmp-tags.js");
/* harmony import */ var _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icc-tags.js */ "../../node_modules/exifreader/src/icc-tags.js");
/* harmony import */ var _png_file_tags_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./png-file-tags.js */ "../../node_modules/exifreader/src/png-file-tags.js");
/* harmony import */ var _thumbnail_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thumbnail.js */ "../../node_modules/exifreader/src/thumbnail.js");
/* harmony import */ var _errors_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./errors.js */ "../../node_modules/exifreader/src/errors.js");
/**
 * ExifReader
 * http://github.com/mattiasw/exifreader
 * Copyright (C) 2011-2020  Mattias Wallander <mattias@wallander.eu>
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
















/* harmony default export */ __webpack_exports__["default"] = ({
    load,
    loadView,
    errors: _errors_js__WEBPACK_IMPORTED_MODULE_12__["default"],
});

const errors = _errors_js__WEBPACK_IMPORTED_MODULE_12__["default"];

function load(data, options = {expanded: false}) {
    if (isNodeBuffer(data)) {
        // File data read in Node can share the underlying buffer with other
        // data. Therefore it's safest to get a new one to avoid weird bugs.
        data = (new Uint8Array(data)).buffer;
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

function loadView(dataView, options = {expanded: false}) {
    let foundMetaData = false;
    let tags = {};

    const {fileDataOffset, tiffHeaderOffset, iptcDataOffset, xmpChunks, iccChunks, pngHeaderOffset} = _image_header_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseAppMarkers(dataView);

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_FILE && hasFileData(fileDataOffset)) {
        foundMetaData = true;
        const readTags = _file_tags_js__WEBPACK_IMPORTED_MODULE_6__["default"].read(dataView, fileDataOffset);
        if (options.expanded) {
            tags.file = readTags;
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF && hasExifData(tiffHeaderOffset)) {
        foundMetaData = true;
        const readTags = _tags_js__WEBPACK_IMPORTED_MODULE_5__["default"].read(dataView, tiffHeaderOffset);
        if (readTags.Thumbnail) {
            tags.Thumbnail = readTags.Thumbnail;
            delete readTags.Thumbnail;
        }

        if (options.expanded) {
            tags.exif = readTags;
            addGpsGroup(tags);
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && readTags['IPTC-NAA'] && !hasIptcData(iptcDataOffset)) {
            const readIptcTags = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(readTags['IPTC-NAA'].value, 0);
            if (options.expanded) {
                tags.iptc = readIptcTags;
            } else {
                tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readIptcTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && readTags['ApplicationNotes'] && !hasXmpData(xmpChunks)) {
            const readXmpTags = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__["default"].read(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValueFromArray"])(readTags['ApplicationNotes'].value));
            if (options.expanded) {
                tags.xmp = readXmpTags;
            } else {
                tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readXmpTags);
            }
        }

        if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_TIFF && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && readTags['ICC_Profile'] && !hasIccData(iccChunks)) {
            const readIccTags = _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(
                readTags['ICC_Profile'].value,
                [{
                    offset: 0,
                    length: readTags['ICC_Profile'].value.length,
                    chunkNumber: 1,
                    chunksTotal: 1
                }]
            );
            if (options.expanded) {
                tags.icc = readIccTags;
            } else {
                tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readIccTags);
            }
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_IPTC && hasIptcData(iptcDataOffset)) {
        foundMetaData = true;
        const readTags = _iptc_tags_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(dataView, iptcDataOffset);
        if (options.expanded) {
            tags.iptc = readTags;
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_XMP && hasXmpData(xmpChunks)) {
        foundMetaData = true;
        const readTags = _xmp_tags_js__WEBPACK_IMPORTED_MODULE_8__["default"].read(dataView, xmpChunks);
        if (options.expanded) {
            tags.xmp = readTags;
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }
    }

    if ((_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP) && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_ICC && hasIccData(iccChunks)) {
        foundMetaData = true;
        const readTags = _icc_tags_js__WEBPACK_IMPORTED_MODULE_9__["default"].read(dataView, iccChunks);
        if (options.expanded) {
            tags.icc = readTags;
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_PNG_FILE && hasPngFileData(pngHeaderOffset)) {
        foundMetaData = true;
        const readTags = _png_file_tags_js__WEBPACK_IMPORTED_MODULE_10__["default"].read(dataView, pngHeaderOffset);
        if (options.expanded) {
            tags.pngFile = readTags;
        } else {
            tags = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, tags, readTags);
        }
    }

    const thumbnail = (_constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_JPEG || _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_WEBP)
        && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_EXIF
        && _constants_js__WEBPACK_IMPORTED_MODULE_2__["default"].USE_THUMBNAIL
        && _thumbnail_js__WEBPACK_IMPORTED_MODULE_11__["default"].get(dataView, tags.Thumbnail, tiffHeaderOffset);
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
            tags.gps = tags.gps || {};
            tags.gps.Latitude = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__["getCalculatedGpsValue"])(tags.exif.GPSLatitude.value);
            if (tags.exif.GPSLatitudeRef.value.join('') === 'S') {
                tags.gps.Latitude = -tags.gps.Latitude;
            }
        }

        if (tags.exif.GPSLongitude && tags.exif.GPSLongitudeRef) {
            tags.gps = tags.gps || {};
            tags.gps.Longitude = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_3__["getCalculatedGpsValue"])(tags.exif.GPSLongitude.value);
            if (tags.exif.GPSLongitudeRef.value.join('') === 'W') {
                tags.gps.Longitude = -tags.gps.Longitude;
            }
        }

        if (tags.exif.GPSAltitude && tags.exif.GPSAltitudeRef) {
            tags.gps = tags.gps || {};
            tags.gps.Altitude = tags.exif.GPSAltitude.value[0] / tags.exif.GPSAltitude.value[1];
            if (tags.exif.GPSAltitudeRef.value === 1) {
                tags.gps.Altitude = -tags.gps.Altitude;
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

function hasPngFileData(pngFileDataOffset) {
    return pngFileDataOffset !== undefined;
}


/***/ }),

/***/ "../../node_modules/exifreader/src/file-tags.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/file-tags.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "../../node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, fileDataOffset) {
    const length = getLength(dataView, fileDataOffset);
    const numberOfColorComponents = getNumberOfColorComponents(dataView, fileDataOffset, length);
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
    const OFFSET = 2;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getImageHeight(dataView, fileDataOffset, length) {
    const OFFSET = 3;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getImageWidth(dataView, fileDataOffset, length) {
    const OFFSET = 5;
    const SIZE = 2;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getShortAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getNumberOfColorComponents(dataView, fileDataOffset, length) {
    const OFFSET = 7;
    const SIZE = 1;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: '' + value
    };
}

function getSubsampling(dataView, fileDataOffset, numberOfColorComponents, length) {
    const OFFSET = 8;
    const SIZE = 3 * numberOfColorComponents;

    if (OFFSET + SIZE > length) {
        return undefined;
    }

    const components = [];

    for (let i = 0; i < numberOfColorComponents; i++) {
        const componentOffset = fileDataOffset + OFFSET + i * 3;
        components.push([
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset),
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 1),
            _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, componentOffset + 2)
        ]);
    }

    return {
        value: components,
        description: components.length > 1 ? getComponentIds(components) + getSamplingType(components) : ''
    };
}

function getComponentIds(components) {
    const ids = {
        0x01: 'Y',
        0x02: 'Cb',
        0x03: 'Cr',
        0x04: 'I',
        0x05: 'Q',
    };

    return components.map((compontent) => ids[compontent[0]]).join('');
}

function getSamplingType(components) {
    const types = {
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


/***/ }),

/***/ "../../node_modules/exifreader/src/icc-tag-names.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/icc-tag-names.js ***!
  \***********************************************************************************************/
/*! exports provided: iccTags, iccProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iccTags", function() { return iccTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iccProfile", function() { return iccProfile; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const iccTags = {
    'desc': {
        'name': 'ICC Description',
    },
    'cprt': {
        'name': 'ICC Copyright',
    },
    'dmdd': {
        'name': 'ICC Device Model Description',
    },
    'vued': {
        'name': 'ICC Viewing Conditions Description',
    },
    'dmnd': {
        'name': 'ICC Device Manufacturer for Display',
    },
    'tech': {
        'name': 'Technology',
    },
};

const iccProfile = {
    4: {
        'name': 'Preferred CMM type',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4),
        'description': (value) => value !== null ? toCompany(value) : '',
    },
    8: {
        'name': 'Profile Version',
        'value': (dataView, offset) => {
            return (dataView.getUint8(offset)).toString(10) + '.'
            + (dataView.getUint8(offset + 1) >> 4).toString(10) + '.'
            + (dataView.getUint8(offset + 1) % 16).toString(10);
        }
    },
    12: {
        'name': 'Profile/Device class',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4),
        'description': (value) => {
            switch (value.toLowerCase()) {
                case 'scnr': return 'Input Device profile';
                case 'mntr': return 'Display Device profile';
                case 'prtr': return 'Output Device profile';
                case 'link': return 'DeviceLink profile';
                case 'abst': return 'Abstract profile';
                case 'spac': return 'ColorSpace profile';
                case 'nmcl': return 'NamedColor profile';
                case 'cenc': return 'ColorEncodingSpace profile';
                case 'mid ': return 'MultiplexIdentification profile';
                case 'mlnk': return 'MultiplexLink profile';
                case 'mvis': return 'MultiplexVisualization profile';
                default: return value;
            }
        }
    },
    16: {
        'name': 'Color Space',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4)
    },
    20: {
        'name': 'Connection Space',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4)
    },
    24: {
        'name': 'ICC Profile Date',
        'value': (dataView, offset) => parseDate(dataView, offset).toISOString()
    },
    36: {
        'name': 'ICC Signature',
        'value': (dataView, offset) => sliceToString(dataView.buffer.slice(offset, offset + 4))
    },
    40: {
        'name': 'Primary Platform',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    48: {
        'name': 'Device Manufacturer',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4),
        'description': (value) => toCompany(value)
    },
    52: {
        'name': 'Device Model Number',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4)
    },
    64: {
        'name': 'Rendering Intent',
        'value': (dataView, offset) => dataView.getUint32(offset),
        'description': (value) => {
            switch (value) {
                case 0: return 'Perceptual';
                case 1: return 'Relative Colorimetric';
                case 2: return 'Saturation';
                case 3: return 'Absolute Colorimetric';
                default: return value;
            }
        }
    },

    80: {
        'name': 'Profile Creator',
        'value': (dataView, offset) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4)
    },
};

function parseDate(dataView, offset) {
    const year = dataView.getUint16(offset);
    const month = dataView.getUint16(offset + 2) - 1;
    const day = dataView.getUint16(offset + 4);
    const hours = dataView.getUint16(offset + 6);
    const minutes = dataView.getUint16(offset + 8);
    const seconds = dataView.getUint16(offset + 10);
    return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
}

function sliceToString(slice) {
    return String.fromCharCode.apply(null, new Uint8Array(slice));
}

function toCompany(value) {
    switch (value.toLowerCase()) {
        case 'appl': return 'Apple';
        case 'adbe': return 'Adobe';
        case 'msft': return 'Microsoft';
        case 'sunw': return 'Sun Microsystems';
        case 'sgi': return 'Silicon Graphics';
        case 'tgnt': return 'Taligent';
        default: return value;
    }
}


/***/ }),

/***/ "../../node_modules/exifreader/src/icc-tags.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/icc-tags.js ***!
  \******************************************************************************************/
/*! exports provided: default, parseTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTags", function() { return parseTags; });
/* harmony import */ var _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icc-tag-names.js */ "../../node_modules/exifreader/src/icc-tag-names.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

const PROFILE_HEADER_LENGTH = 84;
const ICC_TAG_COUNT_OFFSET = 128;
const ICC_SIGNATURE = 'acsp';
const TAG_TYPE_DESC = 'desc';
const TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE = 'mluc';
const TAG_TYPE_TEXT = 'text';
const TAG_TYPE_SIGNATURE = 'sig ';
const TAG_TABLE_SINGLE_TAG_DATA = 12;

// ICC profile data can be longer than application segment max length of ~64k.
// so it can be split into multiple APP2 segments. Each segment includes
// total chunk count and chunk number.
// Here we read all chunks into single continious array of bytes.
function read(dataView, iccData) {
    try {
        const totalIccProfileLength = iccData.reduce((sum, icc) => sum + icc.length, 0);

        const iccBinaryData = new Uint8Array(totalIccProfileLength);
        let offset = 0;
        const buffer = getBuffer(dataView);

        for (let chunkNumber = 1; chunkNumber <= iccData.length; chunkNumber++) {
            const iccDataChunk = iccData.find((x) => x.chunkNumber === chunkNumber);
            if (!iccDataChunk) {
                throw new Error(`ICC chunk ${chunkNumber} not found`);
            }

            const data = buffer.slice(iccDataChunk.offset, iccDataChunk.offset + iccDataChunk.length);
            const chunkData = new Uint8Array(data);

            iccBinaryData.set(chunkData, offset);
            offset += chunkData.length;
        }

        return parseTags(new DataView(iccBinaryData.buffer));
    } catch (error) {
        return {};
    }
}

function getBuffer(dataView) {
    if (Array.isArray(dataView)) {
        return (new DataView(Uint8Array.from(dataView).buffer)).buffer;
    }
    return dataView.buffer;
}

function iccDoesNotHaveTagCount(buffer) {
    return buffer.length < (ICC_TAG_COUNT_OFFSET + 4);
}

function hasTagsData(buffer, tagHeaderOffset) {
    return buffer.length < tagHeaderOffset + TAG_TABLE_SINGLE_TAG_DATA;
}

function parseTags(dataView) {
    const buffer = dataView.buffer;

    const length = dataView.getUint32();
    if (dataView.byteLength !== length) {
        throw new Error('ICC profile length not matching');
    }

    if (dataView.length < PROFILE_HEADER_LENGTH) {
        throw new Error('ICC profile too short');
    }

    const tags = {};

    const iccProfileKeys = Object.keys(_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccProfile"]);
    for (let i = 0; i < iccProfileKeys.length; i++) {
        const offset = iccProfileKeys[i];
        const profileEntry = _icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccProfile"][offset];
        const value = profileEntry.value(dataView, parseInt(offset, 10));
        let description = value;
        if (profileEntry.description) {
            description = profileEntry.description(value);
        }

        tags[profileEntry.name] = {
            value,
            description
        };
    }

    const signature = sliceToString(buffer.slice(36, 40));
    if (signature !== ICC_SIGNATURE) {
        throw new Error('ICC profile: missing signature');
    }

    /* ICC data is incomplete but we have header parsed so lets return it */
    if (iccDoesNotHaveTagCount(buffer)) {
        return tags;
    }

    const tagCount = dataView.getUint32(128);
    let tagHeaderOffset = 132;

    for (let i = 0; i < tagCount; i++) {
        if (hasTagsData(buffer, tagHeaderOffset)) {
            // Tags are corrupted (offset too far), return what we parsed until now
            return tags;
        }
        const tagSignature = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, tagHeaderOffset, 4);
        const tagOffset = dataView.getUint32(tagHeaderOffset + 4);
        const tagSize = dataView.getUint32(tagHeaderOffset + 8);

        if (tagOffset > buffer.length) {
            // Tag data is invalid, lets return what we managed to parse
            return tags;
        }
        const tagType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, tagOffset, 4);

        if (tagType === TAG_TYPE_DESC) {
            const tagValueSize = dataView.getUint32(tagOffset + 8);
            if (tagValueSize > tagSize) {
                // Tag data is invalid, lets return what we managed to parse
                return tags;
            }

            const val = sliceToString(buffer.slice(tagOffset + 12, tagOffset + tagValueSize + 11));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_MULTI_LOCALIZED_UNICODE_TYPE) {
            const numRecords = dataView.getUint32(tagOffset + 8);
            const recordSize = dataView.getUint32(tagOffset + 12);
            let offset = tagOffset + 16;
            const val = [];
            for (let recordNum = 0; recordNum < numRecords; recordNum++) {
                const languageCode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, offset + 0, 2);
                const countryCode = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getStringFromDataView"])(dataView, offset + 2, 2);
                const textLength = dataView.getUint32(offset + 4);
                const textOffset = dataView.getUint32(offset + 8);

                const text = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getUnicodeStringFromDataView"])(dataView, tagOffset + textOffset, textLength);
                val.push({languageCode, countryCode, text});
                offset += recordSize;
            }
            if (numRecords === 1) {
                addTag(tags, tagSignature, val[0].text);
            } else {
                const valObj = {};
                for (let valIndex = 0; valIndex < val.length; valIndex++) {
                    valObj[`${val[valIndex].languageCode}-${val[valIndex].countryCode}`] = val[valIndex].text;
                }
                addTag(tags, tagSignature, valObj);
            }
        } else if (tagType === TAG_TYPE_TEXT) {
            const val = sliceToString(buffer.slice(tagOffset + 8, tagOffset + tagSize - 7));
            addTag(tags, tagSignature, val);
        } else if (tagType === TAG_TYPE_SIGNATURE) {
            const val = sliceToString(buffer.slice(tagOffset + 8, tagOffset + 12));
            addTag(tags, tagSignature, val);
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
        tags[_icc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__["iccTags"][tagSignature].name] = {value, description: value};
    } else {
        tags[tagSignature] = {value, description: value};
    }
}


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header-heic.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header-heic.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isHeicFile,
    findHeicOffsets
});

function isHeicFile(dataView) {
    const HEIC_ID = 'ftyp';
    const HEIC_ID_OFFSET = 4;
    const HEIC_MAJOR_BRANDS = ['heic', 'heix', 'hevc', 'hevx', 'heim', 'heis', 'hevm', 'hevs', 'mif1'];
    const HEIC_MAJOR_BRAND_LENGTH = 4;

    const heicMajorBrand = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, HEIC_ID_OFFSET + HEIC_ID.length, HEIC_MAJOR_BRAND_LENGTH);

    return (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, HEIC_ID_OFFSET, HEIC_ID.length) === HEIC_ID)
        && (HEIC_MAJOR_BRANDS.indexOf(heicMajorBrand) !== -1);
}

function findHeicOffsets(dataView) {
    if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF || _constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC) {
        const {offset: metaOffset, length: metaLength} = findMetaAtom(dataView);
        if (metaOffset === undefined) {
            return {hasAppMarkers: false};
        }

        const metaEndOffset = Math.min(metaOffset + metaLength, dataView.byteLength);
        const {exifItemOffset, ilocOffset, colrOffset} = findMetaItems(dataView, metaOffset, metaEndOffset);

        const exifOffset = findExifOffset(dataView, exifItemOffset, ilocOffset, metaEndOffset);
        const iccChunks = findIccChunks(dataView, colrOffset, metaEndOffset);
        return {
            hasAppMarkers: (exifOffset !== undefined) || (iccChunks !== undefined),
            tiffHeaderOffset: exifOffset,
            iccChunks
        };
    }

    return {hasAppMarkers: false};
}

function findMetaAtom(dataView) {
    const ATOM_LENGTH_SIZE = 4;
    const ATOM_TYPE_SIZE = 4;
    const ATOM_MIN_LENGTH = 8;
    const ATOM_TYPE_OFFSET = 4;

    let offset = 0;

    while (offset + ATOM_LENGTH_SIZE + ATOM_TYPE_SIZE <= dataView.byteLength) {
        const atomLength = getAtomLength(dataView, offset);
        if (atomLength >= ATOM_MIN_LENGTH) {
            const atomType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + ATOM_TYPE_OFFSET, ATOM_TYPE_SIZE);
            if (atomType === 'meta') {
                return {
                    offset,
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
    const ATOM_EXTENDED_SIZE_LOW_OFFSET = 12;

    const atomLength = dataView.getUint32(offset);
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
    const ATOM_EXTENDED_SIZE_OFFSET = 8;
    return dataView.getUint32(offset + ATOM_EXTENDED_SIZE_OFFSET) === 0;
}

function findMetaItems(dataView, offset, metaEndOffset) {
    const STRING_SIZE = 4;
    const ITEM_INDEX_REL_OFFSET = -4;
    const offsets = {
        ilocOffset: undefined,
        exifItemOffset: undefined,
        colrOffset: undefined
    };

    while ((offset + STRING_SIZE <= metaEndOffset)
        && (!offsets.ilocOffset || !offsets.exifItemOffset || !offsets.colrOffset)) {
        const itemName = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, STRING_SIZE);
        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && (itemName === 'iloc')) {
            offsets.ilocOffset = offset;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && (itemName === 'Exif')) {
            offsets.exifItemOffset = offset + ITEM_INDEX_REL_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && (itemName === 'colr')) {
            offsets.colrOffset = offset + ITEM_INDEX_REL_OFFSET;
        }

        offset++;
    }

    return offsets;
}

function findExifOffset(dataView, exifItemOffset, offset, metaEndOffset) {
    const EXIF_ITEM_OFFSET_SIZE = 2;
    const ILOC_DATA_OFFSET = 12;
    const EXIF_POINTER_OFFSET = 8;
    const EXIF_POINTER_SIZE = 4;
    const EXIF_PREFIX_LENGTH_OFFSET = 4;
    const ILOC_ITEM_SIZE = 16;

    if (!offset || !exifItemOffset || (exifItemOffset + EXIF_ITEM_OFFSET_SIZE > metaEndOffset)) {
        return undefined;
    }

    const exifItemIndex = dataView.getUint16(exifItemOffset);
    offset += ILOC_DATA_OFFSET;

    while (offset + ILOC_ITEM_SIZE <= metaEndOffset) {
        const itemIndex = dataView.getUint16(offset);
        if (itemIndex === exifItemIndex) {
            const exifPointer = dataView.getUint32(offset + EXIF_POINTER_OFFSET);
            if (exifPointer + EXIF_POINTER_SIZE <= dataView.byteLength) {
                const exifOffset = dataView.getUint32(exifPointer);
                const prefixLength = exifOffset + EXIF_PREFIX_LENGTH_OFFSET;
                return exifPointer + prefixLength;
            }
        }
        offset += ILOC_ITEM_SIZE;
    }

    return undefined;
}

function findIccChunks(dataView, offset, metaEndOffset) {
    const ITEM_TYPE_OFFSET = 8;
    const ITEM_TYPE_SIZE = 4;
    const ITEM_CONTENT_OFFSET = 12;

    if (!offset || (offset + ITEM_CONTENT_OFFSET > metaEndOffset)) {
        return undefined;
    }

    const colorType = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + ITEM_TYPE_OFFSET, ITEM_TYPE_SIZE);
    if ((colorType !== 'prof') && (colorType !== 'rICC')) {
        return undefined;
    }

    return [{
        offset: offset + ITEM_CONTENT_OFFSET,
        length: getAtomLength(dataView, offset) - ITEM_CONTENT_OFFSET,
        chunkNumber: 1,
        chunksTotal: 1
    }];
}


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header-jpeg.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header-jpeg.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isJpegFile,
    findJpegOffsets
});

const MIN_JPEG_DATA_BUFFER_LENGTH = 2;
const JPEG_ID = 0xffd8;
const JPEG_ID_SIZE = 2;
const APP_ID_OFFSET = 4;
const APP_MARKER_SIZE = 2;
const TIFF_HEADER_OFFSET = 10; // From start of APP1 marker.
const IPTC_DATA_OFFSET = 18; // From start of APP13 marker.
const XMP_DATA_OFFSET = 33; // From start of APP1 marker.
const XMP_EXTENDED_DATA_OFFSET = 79; // From start of APP1 marker including GUID, total length, and offset.
const APP2_ICC_DATA_OFFSET = 18; // From start of APP2 marker including marker and chunk/chunk total numbers.

const APP2_ICC_IDENTIFIER = 'ICC_PROFILE\0';
const ICC_CHUNK_NUMBER_OFFSET = APP_ID_OFFSET + APP2_ICC_IDENTIFIER.length;
const ICC_TOTAL_CHUNKS_OFFSET = ICC_CHUNK_NUMBER_OFFSET + 1;

const SOF0_MARKER = 0xffc0;
const SOF2_MARKER = 0xffc2;
const DHT_MARKER = 0xffc4;
const DQT_MARKER = 0xffdb;
const DRI_MARKER = 0xffdd;
const SOS_MARKER = 0xffda;

const APP0_MARKER = 0xffe0;
const APP1_MARKER = 0xffe1;
const APP2_MARKER = 0xffe2;
const APP13_MARKER = 0xffed;
const APP15_MARKER = 0xffef;
const COMMENT_MARKER = 0xfffe;

const APP1_EXIF_IDENTIFIER = 'Exif';
const APP1_XMP_IDENTIFIER = 'http://ns.adobe.com/xap/1.0/\x00';
const APP1_XMP_EXTENDED_IDENTIFIER = 'http://ns.adobe.com/xmp/extension/\x00';
const APP13_IPTC_IDENTIFIER = 'Photoshop 3.0';

function isJpegFile(dataView) {
    return (dataView.byteLength >= MIN_JPEG_DATA_BUFFER_LENGTH) && (dataView.getUint16(0) === JPEG_ID);
}

function findJpegOffsets(dataView) {
    let appMarkerPosition = JPEG_ID_SIZE;
    let fieldLength;
    let sof0DataOffset;
    let sof2DataOffset;
    let tiffHeaderOffset;
    let iptcDataOffset;
    let xmpChunks;
    let iccChunks;

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
            const iccDataOffset = appMarkerPosition + APP2_ICC_DATA_OFFSET;
            const iccDataLength = fieldLength - (APP2_ICC_DATA_OFFSET - APP_MARKER_SIZE);

            const iccChunkNumber = dataView.getUint8(appMarkerPosition + ICC_CHUNK_NUMBER_OFFSET);
            const iccChunksTotal = dataView.getUint8(appMarkerPosition + ICC_TOTAL_CHUNKS_OFFSET);
            if (!iccChunks) {
                iccChunks = [];
            }
            iccChunks.push({offset: iccDataOffset, length: iccDataLength, chunkNumber: iccChunkNumber, chunksTotal: iccChunksTotal});
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
        tiffHeaderOffset,
        iptcDataOffset,
        xmpChunks,
        iccChunks
    };
}

function isSOF0Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF0_MARKER);
}

function isSOF2Marker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === SOF2_MARKER);
}

function isApp2ICCMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP2_ICC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP2_MARKER)
        && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP2_ICC_IDENTIFIER);
}

function isApp1ExifMarker(dataView, appMarkerPosition) {
    const markerIdLength = APP1_EXIF_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_EXIF_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isApp1XmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isXmpIdentifier(dataView, appMarkerPosition);
}

function isXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_IDENTIFIER.length;
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP1_XMP_IDENTIFIER;
}

function isApp1ExtendedXmpMarker(dataView, appMarkerPosition) {
    return (dataView.getUint16(appMarkerPosition) === APP1_MARKER)
        && isExtendedXmpIdentifier(dataView, appMarkerPosition);
}

function isExtendedXmpIdentifier(dataView, appMarkerPosition) {
    const markerIdLength = APP1_XMP_EXTENDED_IDENTIFIER.length;
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
    const markerIdLength = APP13_IPTC_IDENTIFIER.length;

    return (dataView.getUint16(appMarkerPosition) === APP13_MARKER)
        && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, appMarkerPosition + APP_ID_OFFSET, markerIdLength) === APP13_IPTC_IDENTIFIER)
        && (dataView.getUint8(appMarkerPosition + APP_ID_OFFSET + markerIdLength) === 0x00);
}

function isAppMarker(dataView, appMarkerPosition) {
    const appMarker = dataView.getUint16(appMarkerPosition);
    return ((appMarker >= APP0_MARKER) && (appMarker <= APP15_MARKER))
        || (appMarker === COMMENT_MARKER)
        || (appMarker === SOF0_MARKER)
        || (appMarker === SOF2_MARKER)
        || (appMarker === DHT_MARKER)
        || (appMarker === DQT_MARKER)
        || (appMarker === DRI_MARKER)
        || (appMarker === SOS_MARKER);
}


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header-png.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header-png.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isPngFile,
    findPngOffsets
});

const PNG_ID = '\x89\x50\x4e\x47\x0d\x0a\x1a\x0a';
const PNG_CHUNK_LENGTH_SIZE = 4;
const PNG_CHUNK_TYPE_SIZE = 4;
const PNG_CHUNK_LENGTH_OFFSET = 0;
const PNG_CHUNK_TYPE_OFFSET = PNG_CHUNK_LENGTH_SIZE;
const PNG_CHUNK_DATA_OFFSET = PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE;
const PNG_XMP_PREFIX = 'XML:com.adobe.xmp\x00';

function isPngFile(dataView) {
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, 0, PNG_ID.length) === PNG_ID;
}

function findPngOffsets(dataView) {
    const PNG_CRC_SIZE = 4;

    const offsets = {
        hasAppMarkers: false
    };

    let offset = PNG_ID.length;

    while (offset + PNG_CHUNK_LENGTH_SIZE + PNG_CHUNK_TYPE_SIZE <= dataView.byteLength) {
        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_PNG_FILE && isPngImageHeaderChunk(dataView, offset)) {
            offsets.hasAppMarkers = true;
            offsets.pngHeaderOffset = offset + PNG_CHUNK_DATA_OFFSET;
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && isPngXmpChunk(dataView, offset)) {
            const dataOffset = getPngXmpDataOffset(dataView, offset);
            if (dataOffset !== undefined) {
                offsets.hasAppMarkers = true;
                offsets.xmpChunks = [{
                    dataOffset,
                    length: dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET) - (dataOffset - (offset + PNG_CHUNK_DATA_OFFSET))
                }];
            }
        }

        offset += dataView.getUint32(offset + PNG_CHUNK_LENGTH_OFFSET)
            + PNG_CHUNK_LENGTH_SIZE
            + PNG_CHUNK_TYPE_SIZE
            + PNG_CRC_SIZE;
    }

    return offsets;
}

function isPngImageHeaderChunk(dataView, offset) {
    const PNG_CHUNK_TYPE_IMAGE_HEADER = 'IHDR';
    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_IMAGE_HEADER;
}

function isPngXmpChunk(dataView, offset) {
    const PNG_CHUNK_TYPE_INTERNATIONAL_TEXT = 'iTXt';
    return (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_TYPE_OFFSET, PNG_CHUNK_TYPE_SIZE) === PNG_CHUNK_TYPE_INTERNATIONAL_TEXT)
        && (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + PNG_CHUNK_DATA_OFFSET, PNG_XMP_PREFIX.length) === PNG_XMP_PREFIX);
}

function getPngXmpDataOffset(dataView, offset) {
    const COMPRESSION_FLAG_SIZE = 1;
    const COMPRESSION_METHOD_SIZE = 1;

    offset += PNG_CHUNK_DATA_OFFSET + PNG_XMP_PREFIX.length + COMPRESSION_FLAG_SIZE + COMPRESSION_METHOD_SIZE;

    let numberOfNullSeparators = 0;
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


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header-tiff.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header-tiff.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "../../node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isTiffFile,
    findTiffOffsets
});

function isTiffFile(dataView) {
    const MIN_TIFF_DATA_BUFFER_LENGTH = 4;

    return (dataView.byteLength >= MIN_TIFF_DATA_BUFFER_LENGTH) && hasTiffMarker(dataView);
}

function hasTiffMarker(dataView) {
    const TIFF_ID = 0x2a;
    const TIFF_ID_OFFSET = 2;

    const littleEndian = dataView.getUint16(0) === _byte_order_js__WEBPACK_IMPORTED_MODULE_0__["default"].LITTLE_ENDIAN;
    return dataView.getUint16(TIFF_ID_OFFSET, littleEndian) === TIFF_ID;
}

function findTiffOffsets() {
    const TIFF_FILE_HEADER_OFFSET = 0;

    if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF) {
        return {
            hasAppMarkers: true,
            tiffHeaderOffset: TIFF_FILE_HEADER_OFFSET
        };
    }
    return {};
}


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header-webp.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header-webp.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    isWebpFile,
    findOffsets
});

function isWebpFile(dataView) {
    const RIFF_ID_OFFSET = 0;
    const RIFF_ID = 'RIFF';
    const WEBP_MARKER_OFFSET = 8;
    const WEBP_MARKER = 'WEBP';

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, RIFF_ID_OFFSET, RIFF_ID.length) === RIFF_ID
        && Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, WEBP_MARKER_OFFSET, WEBP_MARKER.length) === WEBP_MARKER;
}

function findOffsets(dataView) {
    const SUB_CHUNK_START_OFFSET = 12;
    const CHUNK_SIZE_OFFSET = 4;
    const EXIF_IDENTIFIER = 'Exif\x00\x00';
    const CHUNK_HEADER_SIZE = 8;

    let offset = SUB_CHUNK_START_OFFSET;
    let hasAppMarkers = false;
    let tiffHeaderOffset;
    let xmpChunks;
    let iccChunks;

    while (offset + CHUNK_HEADER_SIZE < dataView.byteLength) {
        const chunkId = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset, 4);
        const chunkSize = dataView.getUint32(offset + CHUNK_SIZE_OFFSET, true);

        if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_EXIF && (chunkId === 'EXIF')) {
            hasAppMarkers = true;
            if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(dataView, offset + CHUNK_HEADER_SIZE, EXIF_IDENTIFIER.length) === EXIF_IDENTIFIER) {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE + EXIF_IDENTIFIER.length;
            } else {
                tiffHeaderOffset = offset + CHUNK_HEADER_SIZE;
            }
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_XMP && (chunkId === 'XMP ')) {
            hasAppMarkers = true;
            xmpChunks = [{
                dataOffset: offset + CHUNK_HEADER_SIZE,
                length: chunkSize
            }];
        } else if (_constants_js__WEBPACK_IMPORTED_MODULE_1__["default"].USE_ICC && (chunkId === 'ICCP')) {
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
        hasAppMarkers,
        tiffHeaderOffset,
        xmpChunks,
        iccChunks
    };
}


/***/ }),

/***/ "../../node_modules/exifreader/src/image-header.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/image-header.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* harmony import */ var _image_header_tiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-header-tiff.js */ "../../node_modules/exifreader/src/image-header-tiff.js");
/* harmony import */ var _image_header_jpeg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-header-jpeg.js */ "../../node_modules/exifreader/src/image-header-jpeg.js");
/* harmony import */ var _image_header_png_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-header-png.js */ "../../node_modules/exifreader/src/image-header-png.js");
/* harmony import */ var _image_header_heic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image-header-heic.js */ "../../node_modules/exifreader/src/image-header-heic.js");
/* harmony import */ var _image_header_webp_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-header-webp.js */ "../../node_modules/exifreader/src/image-header-webp.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */








/* harmony default export */ __webpack_exports__["default"] = ({
    parseAppMarkers
});

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


/***/ }),

/***/ "../../node_modules/exifreader/src/iptc-tag-names.js":
/*!************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/iptc-tag-names.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "../../node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    'iptc': {
        0x0100: {
            'name': 'Model Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0105: {
            'name': 'Destination',
            'repeatable': true
        },
        0x0114: {
            'name': 'File Format',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0116: {
            'name': 'File Format Version',
            'description': (value) => {
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
            'encoding_name': getEncodingName,
        },
        0x0164: 'UNO',
        0x0178: {
            'name': 'ARM Identifier',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x017a: {
            'name': 'ARM Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0200: {
            'name': 'Record Version',
            'description': (value) => {
                return ((value[0] << 8) + value[1]).toString();
            }
        },
        0x0203: 'Object Type Reference',
        0x0204: 'Object Attribute Reference',
        0x0205: 'Object Name',
        0x0207: 'Edit Status',
        0x0208: {
            'name': 'Editorial Update',
            'description': (value) => {
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
            'description': (value) => {
                const parts = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value).split(':');
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
            'description': (value) => {
                const string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
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
            'description': (value) => {
                const string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
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
            'description': (value) => value
        },
        0x0282: 'Image Type',
        0x0283: {
            'name': 'Image Orientation',
            'description': (value) => {
                const string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
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
            'description': (value) => {
                const stringValue = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
                const character0 = stringValue.charAt(0);
                const character1 = stringValue.charAt(1);
                let description = '';

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
            'description': (value) => parseInt(Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value), 10) + ' Hz'
        },
        0x0298: {
            'name': 'Audio Sampling Resolution',
            'description': (value) => {
                const bits = parseInt(Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value), 10);
                return bits + (bits === 1 ? ' bit' : ' bits');
            }
        },
        0x0299: {
            'name': 'Audio Duration',
            'description': (value) => {
                const duration = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
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
            'name': (value) => {
                if (value.length === 2) {
                    return 'ObjectData Preview File Format';
                }
                return 'Record 2 destination';
            },
            'description': (value) => {
                if (value.length === 2) {
                    const intValue = (value[0] << 8) + value[1];
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
                    return `Unknown format ${intValue}`;
                }
                return Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
            }
        },
        0x02c9: {
            'name': 'ObjectData Preview File Format Version',
            'description': (value, tags) => {
                // Format ID, Version ID, Version Description
                const formatVersions = {
                    '00': {'00': '1'},
                    '01': {'01': '1', '02': '2', '03': '3', '04': '4'},
                    '02': {'04': '4'},
                    '03': {'01': '5.0', '02': '6.0'},
                    '04': {'01': '1.40'},
                    '05': {'01': '2'},
                    '06': {'01': '1'},
                    '11': {'01': '1.02'},
                    '20': {'01': '3.1', '02': '4.0', '03': '5.0', '04': '5.5'},
                    '21': {'02': '2.0'}
                };
                const stringValue = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

                if (tags['ObjectData Preview File Format']) {
                    const objectDataPreviewFileFormat = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(tags['ObjectData Preview File Format'].value);
                    if (formatVersions[objectDataPreviewFileFormat]
                        && formatVersions[objectDataPreviewFileFormat][stringValue]) {
                        return formatVersions[objectDataPreviewFileFormat][stringValue];
                    }
                }

                return stringValue;
            }
        },
        0x02ca: 'ObjectData Preview Data',
        0x070a: {
            'name': 'Size Mode',
            'description': (value) => {
                return (value[0]).toString();
            }
        },
        0x0714: {
            'name': 'Max Subfile Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075a: {
            'name': 'ObjectData Size Announced',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        },
        0x075f: {
            'name': 'Maximum ObjectData Size',
            'description': (value) => {
                let n = 0;
                for (let i = 0; i < value.length; i++) {
                    n = (n << 8) + value[i];
                }
                return n.toString();
            }
        }
    }
});

function getCreationDate(value) {
    const date = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);

    if (date.length >= 8) {
        return date.substr(0, 4) + '-' + date.substr(4, 2) + '-' + date.substr(6, 2);
    }

    return date;
}

function getCreationTime(value) {
    const time = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
    let parsedTime = time;

    if (time.length >= 6) {
        parsedTime = time.substr(0, 2) + ':' + time.substr(2, 2) + ':' + time.substr(4, 2);
        if (time.length === 11) {
            parsedTime += time.substr(6, 1) + time.substr(7, 2) + ':' + time.substr(9, 2);
        }
    }

    return parsedTime;
}

function getEncodingName(value) {
    const string = Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value);
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


/***/ }),

/***/ "../../node_modules/exifreader/src/iptc-tags.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/iptc-tags.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iptc_tag_names_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iptc-tag-names.js */ "../../node_modules/exifreader/src/iptc-tag-names.js");
/* harmony import */ var _tag_decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-decoder.js */ "../../node_modules/exifreader/src/tag-decoder.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




const BYTES_8BIM = 0x3842494d;
const BYTES_8BIM_SIZE = 4;
const RESOURCE_BLOCK_HEADER_SIZE = BYTES_8BIM_SIZE + 8;
const NAA_RESOURCE_BLOCK_TYPE = 0x0404;
const TAG_HEADER_SIZE = 5;

/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, dataOffset) {
    try {
        if (Array.isArray(dataView)) {
            return parseTags(new DataView(Uint8Array.from(dataView).buffer), {size: dataView.length}, 0);
        }
        const {naaBlock, dataOffset: newDataOffset} = getNaaResourceBlock(dataView, dataOffset);
        return parseTags(dataView, naaBlock, newDataOffset);
    } catch (error) {
        return {};
    }
}

function getNaaResourceBlock(dataView, dataOffset) {
    while (dataOffset + RESOURCE_BLOCK_HEADER_SIZE <= dataView.byteLength) {
        const resourceBlock = getResourceBlock(dataView, dataOffset);
        if (isNaaResourceBlock(resourceBlock)) {
            return {naaBlock: resourceBlock, dataOffset: dataOffset + RESOURCE_BLOCK_HEADER_SIZE};
        }
        dataOffset += RESOURCE_BLOCK_HEADER_SIZE + resourceBlock.size + getBlockPadding(resourceBlock);
    }
    throw new Error('No IPTC NAA resource block.');
}

function getResourceBlock(dataView, dataOffset) {
    const RESOURCE_BLOCK_SIZE_OFFSET = 10;

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
    const tags = {};
    let encoding = undefined;

    const endOfBlockOffset = dataOffset + naaBlock['size'];

    while ((dataOffset < endOfBlockOffset) && (dataOffset < dataView.byteLength)) {
        const {tag, tagSize} = readTag(dataView, dataOffset, tags, encoding);

        if (tag === null) {
            break;
        }

        if ('encoding' in tag) {
            encoding = tag.encoding;
        }

        if ((tags[tag.name] === undefined) || (tag['repeatable'] === undefined)) {
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
    const TAG_CODE_OFFSET = 1;
    const TAG_SIZE_OFFSET = 3;

    if (leadByteIsMissing(dataView, dataOffset)) {
        return {tag: null, tagSize: 0};
    }

    const tagCode = dataView.getUint16(dataOffset + TAG_CODE_OFFSET);
    const tagSize = dataView.getUint16(dataOffset + TAG_SIZE_OFFSET);
    const tagValue = getTagValue(dataView, dataOffset + TAG_HEADER_SIZE, tagSize);

    const tag = {
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

    return {tag, tagSize};
}

function leadByteIsMissing(dataView, dataOffset) {
    const TAG_LEAD_BYTE = 0x1c;
    return dataView.getUint8(dataOffset) !== TAG_LEAD_BYTE;
}

function getTagValue(dataView, offset, size) {
    const value = [];

    for (let valueIndex = 0; valueIndex < size; valueIndex++) {
        value.push(dataView.getUint8(offset + valueIndex));
    }

    return value;
}

function getTagName(tag, tagCode, tagValue) {
    if (!tag) {
        return `undefined-${tagCode}`;
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
    return typeof (tag['name']) === 'function';
}

function getTagDescription(tag, tagValue, tags, encoding) {
    if (hasDescriptionProperty(tag)) {
        try {
            return tag['description'](tagValue, tags);
        } catch (error) {
            // Fall through to next handler.
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


/***/ }),

/***/ "../../node_modules/exifreader/src/png-file-tags.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/png-file-tags.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "../../node_modules/exifreader/src/types.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

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
    const OFFSET = 0;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset);
    return {
        value,
        description: `${value}px`
    };
}

function getImageHeight(dataView, fileDataOffset) {
    const OFFSET = 4;
    const SIZE = 4;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLongAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}px`
    };
}

function getBitDepth(dataView, fileDataOffset) {
    const OFFSET = 8;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: `${value}`
    };
}

function getColorType(dataView, fileDataOffset) {
    const OFFSET = 9;
    const SIZE = 1;
    const COLOR_TYPES = {
        0: 'Grayscale',
        2: 'RGB',
        3: 'Palette',
        4: 'Grayscale with Alpha',
        6: 'RGB with Alpha'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: COLOR_TYPES[value] || 'Unknown'
    };
}

function getCompression(dataView, fileDataOffset) {
    const OFFSET = 10;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Deflate/Inflate' : 'Unknown'
    };
}

function getFilter(dataView, fileDataOffset) {
    const OFFSET = 11;
    const SIZE = 1;

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: value === 0 ? 'Adaptive' : 'Unknown'
    };
}

function getInterlace(dataView, fileDataOffset) {
    const OFFSET = 12;
    const SIZE = 1;
    const INTERLACE_TYPES = {
        0: 'Noninterlaced',
        1: 'Adam7 Interlace'
    };

    if (fileDataOffset + OFFSET + SIZE > dataView.byteLength) {
        return undefined;
    }

    const value = _types_js__WEBPACK_IMPORTED_MODULE_0__["default"].getByteAt(dataView, fileDataOffset + OFFSET);
    return {
        value,
        description: INTERLACE_TYPES[value] || 'Unknown'
    };
}


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-decoder.js":
/*!*********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-decoder.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-decoder.js */ "../../node_modules/exifreader/src/text-decoder.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const TAG_HEADER_SIZE = 5;

/* harmony default export */ __webpack_exports__["default"] = ({
    decode,
    TAG_HEADER_SIZE
});

function decode(encoding, tagValue) {
    const Decoder = _text_decoder_js__WEBPACK_IMPORTED_MODULE_0__["default"].get();
    if ((typeof Decoder !== 'undefined') && (encoding !== undefined)) {
        try {
            return new Decoder(encoding).decode(Uint8Array.from(tagValue));
        } catch (error) {
            // Pass through and fall back to ASCII decoding.
        }
    }

    const stringValue = tagValue.map((charCode) => String.fromCharCode(charCode)).join('');
    return decodeAsciiValue(stringValue);
}

function decodeAsciiValue(asciiValue) {
    try {
        return decodeURIComponent(escape(asciiValue));
    } catch (error) {
        return asciiValue;
    }
}


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-0th-ifd.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-0th-ifd.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-common.js */ "../../node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x000b: 'ProcessingSoftware',
    0x00fe: {
        name: 'SubfileType',
        description: (value) => ({
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
        })[value] || 'Unknown'
    },
    0x00ff: {
        name: 'OldSubfileType',
        description: (value) => ({
            0: 'Full-resolution image',
            1: 'Reduced-resolution image',
            2: 'Single page of multi-page image'
        })[value] || 'Unknown'
    },
    0x0100: 'ImageWidth',
    0x0101: 'ImageLength',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0107: {
        name: 'Thresholding',
        description: (value) => ({
            1: 'No dithering or halftoning',
            2: 'Ordered dither or halfton',
            3: 'Randomized dither'
        })[value] || 'Unknown'
    },
    0x0108: 'CellWidth',
    0x0109: 'CellLength',
    0x010a: {
        name: 'FillOrder',
        description: (value) => ({
            1: 'Normal',
            2: 'Reversed'
        })[value] || 'Unknown'
    },
    0x010d: 'DocumentName',
    0x010e: 'ImageDescription',
    0x010f: 'Make',
    0x0110: 'Model',
    0x0111: 'StripOffsets',
    0x0112: {
        name: 'Orientation',
        description: (value) => {
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
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011b: {
        'name': 'YResolution',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011c: 'PlanarConfiguration',
    0x011d: 'PageName',
    0x011e: {
        'name': 'XPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x011f: {
        'name': 'YPosition',
        'description': (value) => {
            return '' + Math.round(value[0] / value[1]);
        }
    },
    0x0122: {
        name: 'GrayResponseUnit',
        description: (value) => ({
            1: '0.1',
            2: '0.001',
            3: '0.0001',
            4: '1e-05',
            5: '1e-06'
        })[value] || 'Unknown'
    },
    0x0128: {
        name: 'ResolutionUnit',
        description: (value) => {
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
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x013f: {
        'name': 'PrimaryChromaticities',
        'description': (values) => {
            return values.map((value) => `${value[0]}/${value[1]}`).join(', ');
        }
    },
    0x0141: 'HalftoneHints',
    0x0142: 'TileWidth',
    0x0143: 'TileLength',
    0x014a: 'A100DataOffset',
    0x014c: {
        name: 'InkSet',
        description: (value) => ({
            1: 'CMYK',
            2: 'Not CMYK'
        })[value] || 'Unknown'
    },
    0x0151: 'TargetPrinter',
    0x0152: {
        name: 'ExtraSamples',
        description: (value) => ({
            0: 'Unspecified',
            1: 'Associated Alpha',
            2: 'Unassociated Alpha',
        })[value] || 'Unknown'
    },
    0x0153: {
        name: 'SampleFormat',
        description: (value) => {
            const formats = {
                1: 'Unsigned',
                2: 'Signed',
                3: 'Float',
                4: 'Undefined',
                5: 'Complex int',
                6: 'Complex float',
            };
            if (!Array.isArray(value)) {
                return 'Unknown';
            }
            return value.map((sample) => formats[sample] || 'Unknown').join(', ');
        }
    },
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x0211: {
        'name': 'YCbCrCoefficients',
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join('/');
        }
    },
    0x0212: 'YCbCrSubSampling',
    0x0213: {
        name: 'YCbCrPositioning',
        description: (value) => {
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
        'description': (values) => {
            return values.map((value) => '' + value[0] / value[1]).join(', ');
        }
    },
    0x02bc: 'ApplicationNotes',
    0x4746: 'Rating',
    0x4749: 'RatingPercent',
    0x8298: {
        name: 'Copyright',
        description: (value) => value.join('; ')
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
        description: (value) => ({
            0: 'Unsafe',
            1: 'Safe'
        })[value] || 'Unknown'
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
        description: (value) => ({
            0: 'Allow Copying',
            1: 'Embed if Used',
            2: 'Never Embed',
            3: 'No Restrictions'
        })[value] || 'Unknown'
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
        description: (value) => ({
            1: 'Gray Gamma 2.2',
            2: 'sRGB',
            3: 'Adobe RGB',
            4: 'ProPhoto RGB'
        })[value] || 'Unknown'
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
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a4: {
        name: 'ProfileLookTableEncoding',
        description: (value) => ({
            0: 'Linear',
            1: 'sRGB'
        })[value] || 'Unknown'
    },
    0xc7a5: 'BaselineExposureOffset',
    0xc7a6: {
        name: 'DefaultBlackRender',
        description: (value) => ({
            0: 'Auto',
            1: 'None'
        })[value] || 'Unknown'
    },
    0xc7a7: 'NewRawImageDigest',
    0xc7a8: 'RawToPreviewGain'
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-common.js":
/*!**************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-common.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    'LightSource': (value) => {
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
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-exif-ifd.js":
/*!****************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-exif-ifd.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "../../node_modules/exifreader/src/tag-names-utils.js");
/* harmony import */ var _tag_names_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-names-common.js */ "../../node_modules/exifreader/src/tag-names-common.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */




/* harmony default export */ __webpack_exports__["default"] = ({
    0x829a: {
        'name': 'ExposureTime',
        'description': (value) => {
            if (value[0] !== 0) {
                return `1/${Math.round(value[1] / value[0])}`;
            }
            return `0/${value[1]}`;
        }
    },
    0x829d: {
        'name': 'FNumber',
        'description': (value) => `f/${value[0] / value[1]}`
    },
    0x8822: {
        'name': 'ExposureProgram',
        'description': (value) => {
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
        'description': () => '[Raw OECF table data]'
    },
    0x882a: 'TimeZoneOffset',
    0x882b: 'SelfTimerMode',
    0x8830: {
        name: 'SensitivityType',
        description: (value) => ({
            1: 'Standard Output Sensitivity',
            2: 'Recommended Exposure Index',
            3: 'ISO Speed',
            4: 'Standard Output Sensitivity and Recommended Exposure Index',
            5: 'Standard Output Sensitivity and ISO Speed',
            6: 'Recommended Exposure Index and ISO Speed',
            7: 'Standard Output Sensitivity, Recommended Exposure Index and ISO Speed'
        })[value] || 'Unknown'
    },
    0x8831: 'StandardOutputSensitivity',
    0x8832: 'RecommendedExposureIndex',
    0x8833: 'ISOSpeed',
    0x8834: 'ISOSpeedLatitudeyyy',
    0x8835: 'ISOSpeedLatitudezzz',
    0x9000: {
        'name': 'ExifVersion',
        'description': (value) => Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value)
    },
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9009: 'GooglePlusUploadCode',
    0x9010: 'OffsetTime',
    0x9011: 'OffsetTimeOriginal',
    0x9012: 'OffsetTimeDigitized',
    0x9101: {
        'name': 'ComponentsConfiguration',
        'description': (value) => {
            return value.map((character) => {
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
        'description': (value) => {
            return `1/${Math.round(Math.pow(2, value[0] / value[1]))}`;
        }
    },
    0x9202: {
        'name': 'ApertureValue',
        'description': (value) => {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
        }
    },
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBiasValue',
    0x9205: {
        'name': 'MaxApertureValue',
        'description': (value) => {
            return Math.pow(Math.sqrt(2), value[0] / value[1]).toFixed(2);
        }
    },
    0x9206: {
        'name': 'SubjectDistance',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9207: {
        'name': 'MeteringMode',
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => (value[0] / value[1]) + ' mm'
    },
    0x9211: 'ImageNumber',
    0x9212: {
        name: 'SecurityClassification',
        description: (value) => ({
            'C': 'Confidential',
            'R': 'Restricted',
            'S': 'Secret',
            'T': 'Top Secret',
            'U': 'Unclassified'
        })[value] || 'Unknown'
    },
    0x9213: 'ImageHistory',
    0x9214: {
        'name': 'SubjectArea',
        'description': (value) => {
            if (value.length === 2) {
                return `Location; X: ${value[0]}, Y: ${value[1]}`;
            } else if (value.length === 3) {
                return `Circle; X: ${value[0]}, Y: ${value[1]}, diameter: ${value[2]}`;
            } else if (value.length === 4) {
                return `Rectangle; X: ${value[0]}, Y: ${value[1]}, width: ${value[2]}, height: ${value[3]}`;
            }
            return 'Unknown';
        }
    },
    0x927c: {
        'name': 'MakerNote',
        'description': () => '[Raw maker note data]'
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
        'description': (value) => (value[0] / value[1]) + ' °C'
    },
    0x9401: {
        'name': 'Humidity',
        'description': (value) => (value[0] / value[1]) + ' %'
    },
    0x9402: {
        'name': 'Pressure',
        'description': (value) => (value[0] / value[1]) + ' hPa'
    },
    0x9403: {
        'name': 'WaterDepth',
        'description': (value) => (value[0] / value[1]) + ' m'
    },
    0x9404: {
        'name': 'Acceleration',
        'description': (value) => (value[0] / value[1]) + ' mGal'
    },
    0x9405: {
        'name': 'CameraElevationAngle',
        'description': (value) => (value[0] / value[1]) + ' °'
    },
    0xa000: {
        'name': 'FlashpixVersion',
        'description': (value) => value.map((charCode) => String.fromCharCode(charCode)).join('')
    },
    0xa001: {
        'name': 'ColorSpace',
        'description': (value) => {
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
        'description': () => '[Raw SFR table data]'
    },
    0xa20e: 'FocalPlaneXResolution',
    0xa20f: 'FocalPlaneYResolution',
    0xa210: {
        'name': 'FocalPlaneResolutionUnit',
        'description': (value) => {
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
        'description': ([x, y]) => `X: ${x}, Y: ${y}`
    },
    0xa215: 'ExposureIndex',
    0xa217: {
        'name': 'SensingMethod',
        'description': (value) => {
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
        'description': (value) => {
            if (value === 3) {
                return 'DSC';
            }
            return 'Unknown';
        }
    },
    0xa301: {
        'name': 'SceneType',
        'description': (value) => {
            if (value === 1) {
                return 'A directly photographed image';
            }
            return 'Unknown';
        }
    },
    0xa302: {
        'name': 'CFAPattern',
        'description': () => '[Raw CFA pattern table data]'
    },
    0xa401: {
        'name': 'CustomRendered',
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => {
            if (value[0] === 0) {
                return 'Digital zoom was not used';
            }
            return '' + (value[0] / value[1]);
        }
    },
    0xa405: {
        'name': 'FocalLengthIn35mmFilm',
        'description': (value) => {
            if (value === 0) {
                return 'Unknown';
            }
            return value;
        }
    },
    0xa406: {
        'name': 'SceneCaptureType',
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => {
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
        'description': (value) => {
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
        'description': () => '[Raw device settings table data]'
    },
    0xa40c: {
        'name': 'SubjectDistanceRange',
        'description': (value) => {
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
        'description': (value) => {
            const focalLengths = `${value[0][0] / value[0][1]}-${value[1][0] / value[1][1]} mm`;
            if (value[3][1] === 0) {
                return `${focalLengths} f/?`;
            }
            return `${focalLengths} f/${1 / ((value[2][1] / value[2][1]) / (value[3][0] / value[3][1]))}`;
        }
    },
    0xa433: 'LensMake',
    0xa434: 'LensModel',
    0xa435: 'LensSerialNumber',
    0xa460: {
        name: 'CompositeImage',
        description: (value) => ({
            1: 'Not a Composite Image',
            2: 'General Composite Image',
            3: 'Composite Image Captured While Shooting',
        })[value] || 'Unknown'
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
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-gps-ifd.js":
/*!***************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-gps-ifd.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "../../node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x0000: {
        'name': 'GPSVersionID',
        'description': (value) => {
            if (value[0] === 2 && value[1] === 2 && value[2] === 0 && value[3] === 0) {
                return 'Version 2.2';
            }
            return 'Unknown';
        }
    },
    0x0001: {
        'name': 'GPSLatitudeRef',
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
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
        'description': (value) => {
            return (value[0] / value[1]) + ' m';
        }
    },
    0x0007: {
        'name': 'GPSTimeStamp',
        'description': (values) => {
            return values.map(([numerator, denominator]) => {
                const num = numerator / denominator;
                if (/^\d(\.|$)/.test(`${num}`)) {
                    return `0${num}`;
                }
                return num;
            }).join(':');
        }
    },
    0x0008: 'GPSSatellites',
    0x0009: {
        'name': 'GPSStatus',
        'description': (value) => {
            const status = value.join('');
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
        'description': (value) => {
            const mode = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0015: {
        'name': 'GPSDestLongitudeRef',
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
        }
    },
    0x0017: {
        'name': 'GPSDestBearingRef',
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            const ref = value.join('');
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
        'description': (value) => {
            if (value === 0) {
                return 'Measurement without differential correction';
            } else if (value === 1) {
                return 'Differential correction applied';
            }
            return 'Unknown';
        }
    },
    0x001f: 'GPSHPositioningError'
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-interoperability-ifd.js":
/*!****************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-interoperability-ifd.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag-names-utils.js */ "../../node_modules/exifreader/src/tag-names-utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



/* harmony default export */ __webpack_exports__["default"] = ({
    0x0001: 'InteroperabilityIndex',
    0x0002: {
        name: 'InteroperabilityVersion',
        description: (value) => Object(_tag_names_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringValue"])(value)
    },
    0x1000: 'RelatedImageFileFormat',
    0x1001: 'RelatedImageWidth',
    0x1002: 'RelatedImageHeight'
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names-utils.js":
/*!*************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names-utils.js ***!
  \*************************************************************************************************/
/*! exports provided: getStringValue, getEncodedString, getCalculatedGpsValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringValue", function() { return getStringValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEncodedString", function() { return getEncodedString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalculatedGpsValue", function() { return getCalculatedGpsValue; });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringValue(value) {
    return value.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getEncodedString(value) {
    if (value.length >= 8) {
        const encoding = getStringValue(value.slice(0, 8));

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
    return (value[0][0] / value[0][1]) + (value[1][0] / value[1][1]) / 60 + (value[2][0] / value[2][1]) / 3600;
}


/***/ }),

/***/ "../../node_modules/exifreader/src/tag-names.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tag-names.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-names-0th-ifd.js */ "../../node_modules/exifreader/src/tag-names-0th-ifd.js");
/* harmony import */ var _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag-names-exif-ifd.js */ "../../node_modules/exifreader/src/tag-names-exif-ifd.js");
/* harmony import */ var _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag-names-gps-ifd.js */ "../../node_modules/exifreader/src/tag-names-gps-ifd.js");
/* harmony import */ var _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-names-interoperability-ifd.js */ "../../node_modules/exifreader/src/tag-names-interoperability-ifd.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */







const tagNames0thExifIfds = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])({}, _tag_names_0th_ifd_js__WEBPACK_IMPORTED_MODULE_1__["default"], _tag_names_exif_ifd_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = ({
    '0th': tagNames0thExifIfds,
    'exif': tagNames0thExifIfds,
    'gps': _tag_names_gps_ifd_js__WEBPACK_IMPORTED_MODULE_3__["default"],
    'interoperability': _tag_names_interoperability_ifd_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});


/***/ }),

/***/ "../../node_modules/exifreader/src/tags.js":
/*!**************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/tags.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ "../../node_modules/exifreader/src/constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./byte-order.js */ "../../node_modules/exifreader/src/byte-order.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "../../node_modules/exifreader/src/types.js");
/* harmony import */ var _tag_names_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tag-names.js */ "../../node_modules/exifreader/src/tag-names.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */







const EXIF_IFD_POINTER_KEY = 'Exif IFD Pointer';
const GPS_INFO_IFD_POINTER_KEY = 'GPS Info IFD Pointer';
const INTEROPERABILITY_IFD_POINTER_KEY = 'Interoperability IFD Pointer';

const getTagValueAt = {
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

/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, tiffHeaderOffset) {
    const byteOrder = _byte_order_js__WEBPACK_IMPORTED_MODULE_2__["default"].getByteOrder(dataView, tiffHeaderOffset);
    let tags = read0thIfd(dataView, tiffHeaderOffset, byteOrder);
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

function readIfd(dataView, ifdType, tiffHeaderOffset, offset, byteOrder) {
    const FIELD_COUNT_SIZE = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');
    const FIELD_SIZE = 12;

    const tags = {};
    const numberOfFields = getNumberOfFields(dataView, offset, byteOrder);

    offset += FIELD_COUNT_SIZE;
    for (let fieldIndex = 0; fieldIndex < numberOfFields; fieldIndex++) {
        if (offset + FIELD_SIZE > dataView.byteLength) {
            break;
        }

        const tag = readTag(dataView, ifdType, tiffHeaderOffset, offset, byteOrder);
        if (tag !== undefined) {
            tags[tag.name] = {
                'id': tag.id,
                'value': tag.value,
                'description': tag.description
            };
        }

        offset += FIELD_SIZE;
    }

    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__["default"].USE_THUMBNAIL && (offset < dataView.byteLength - _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG'))) {
        const nextIfdOffset = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset, byteOrder);
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
    const TAG_CODE_IPTC_NAA = 0x83bb;
    const TAG_TYPE_OFFSET = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');
    const TAG_COUNT_OFFSET = TAG_TYPE_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('SHORT');
    const TAG_VALUE_OFFSET = TAG_COUNT_OFFSET + _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getTypeSize('LONG');

    const tagCode = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt(dataView, offset, byteOrder);
    const tagType = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getShortAt(dataView, offset + TAG_TYPE_OFFSET, byteOrder);
    const tagCount = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset + TAG_COUNT_OFFSET, byteOrder);
    let tagValue;

    if (_types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[tagType] === undefined) {
        return undefined;
    }

    if (tagValueFitsInOffsetSlot(tagType, tagCount)) {
        tagValue = getTagValue(dataView, offset + TAG_VALUE_OFFSET, tagType, tagCount, byteOrder);
    } else {
        const tagValueOffset = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLongAt(dataView, offset + TAG_VALUE_OFFSET, byteOrder);
        if (tagValueFitsInDataView(dataView, tiffHeaderOffset, tagValueOffset, tagType, tagCount)) {
            const forceByteType = tagCode === TAG_CODE_IPTC_NAA;
            tagValue = getTagValue(dataView, tiffHeaderOffset + tagValueOffset, tagType, tagCount, byteOrder, forceByteType);
        } else {
            tagValue = '<faulty value>';
        }
    }

    if (tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['ASCII']) {
        tagValue = splitNullSeparatedAsciiString(tagValue);
        tagValue = decodeAsciiValue(tagValue);
    }

    let tagName = `undefined-${tagCode}`;
    let tagDescription = tagValue;

    if (_tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode] !== undefined) {
        if ((_tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['name'] !== undefined) && (_tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['description'] !== undefined)) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['name'];
            try {
                tagDescription = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode]['description'](tagValue);
            } catch (error) {
                tagDescription = getDescriptionFromTagValue(tagValue);
            }
        } else if ((tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['RATIONAL']) || (tagType === _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['SRATIONAL'])) {
            tagName = _tag_names_js__WEBPACK_IMPORTED_MODULE_4__["default"][ifdType][tagCode];
            tagDescription = '' + (tagValue[0] / tagValue[1]);
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

function getTagValue(dataView, offset, type, count, byteOrder, forceByteType = false) {
    let value = [];

    if (forceByteType) {
        count = count * _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].typeSizes[type];
        type = _types_js__WEBPACK_IMPORTED_MODULE_3__["default"].tagTypes['BYTE'];
    }
    for (let valueIndex = 0; valueIndex < count; valueIndex++) {
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
    const tagValue = [];
    let i = 0;

    for (let j = 0; j < string.length; j++) {
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
        return asciiValue.map((value) => decodeURIComponent(escape(value)));
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


/***/ }),

/***/ "../../node_modules/exifreader/src/text-decoder.js":
/*!**********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/text-decoder.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    get
});

function get() {
    if (typeof TextDecoder !== 'undefined') {
        return TextDecoder;
    }

    return undefined;
}


/***/ }),

/***/ "../../node_modules/exifreader/src/thumbnail.js":
/*!*******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/thumbnail.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



// https://exiftool.org/TagNames/EXIF.html#Compression
const COMPRESSION_JPEG = [6, 7, 99];

/* harmony default export */ __webpack_exports__["default"] = ({
    get,
});

function get(dataView, thumbnailTags, tiffHeaderOffset) {
    if (hasJpegThumbnail(thumbnailTags)) {
        thumbnailTags.type = 'image/jpeg';
        const offset = tiffHeaderOffset + thumbnailTags.JPEGInterchangeFormat.value;
        thumbnailTags.image = dataView.buffer.slice(offset, offset + thumbnailTags.JPEGInterchangeFormatLength.value);
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["deferInit"])(thumbnailTags, 'base64', function () {
            return getBase64Image(this.image);
        });
    }

    // There is a small possibility of thumbnails in TIFF format but they are
    // not stored as a self-contained image file and would be much more
    // difficult to extract.
    // https://exiftool.org/forum/index.php?topic=3273.msg14778#msg14778

    return thumbnailTags;
}

function hasJpegThumbnail(tags) {
    return tags && ((tags.Compression === undefined) || (COMPRESSION_JPEG.includes(tags.Compression.value)))
        && tags.JPEGInterchangeFormat && tags.JPEGInterchangeFormat.value
        && tags.JPEGInterchangeFormatLength && tags.JPEGInterchangeFormatLength.value;
}

function getBase64Image(image) {
    if (typeof btoa !== 'undefined') {
        // IE11- does not implement reduce on the Uint8Array prototype.
        return btoa(Array.prototype.reduce.call(new Uint8Array(image), (data, byte) => data + String.fromCharCode(byte), ''));
    }
    if (typeof Buffer === 'undefined') {
        return undefined;
    }
    if (typeof Buffer.from !== undefined) { // eslint-disable-line no-undef
        return Buffer.from(image).toString('base64'); // eslint-disable-line no-undef
    }
    return (new Buffer(image)).toString('base64'); // eslint-disable-line no-undef
}


/***/ }),

/***/ "../../node_modules/exifreader/src/types.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/types.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _byte_order_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-order.js */ "../../node_modules/exifreader/src/byte-order.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */



const typeSizes = {
    1: 1, // BYTE
    2: 1, // ASCII
    3: 2, // SHORT
    4: 4, // LONG
    5: 8, // RATIONAL
    7: 1, // UNDEFINED
    9: 4, // SLONG
    10: 8, // SRATIONAL
    13: 4 // IFD
};

const tagTypes = {
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

/* harmony default export */ __webpack_exports__["default"] = ({
    getAsciiValue,
    getByteAt,
    getAsciiAt,
    getShortAt,
    getLongAt,
    getRationalAt,
    getUndefinedAt,
    getSlongAt,
    getSrationalAt,
    getIfdPointerAt,
    typeSizes,
    tagTypes,
    getTypeSize
});

function getAsciiValue(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode));
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


/***/ }),

/***/ "../../node_modules/exifreader/src/utils.js":
/*!***************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/utils.js ***!
  \***************************************************************************************/
/*! exports provided: getStringFromDataView, getUnicodeStringFromDataView, getStringValueFromArray, getCharacterArray, objectAssign, deferInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringFromDataView", function() { return getStringFromDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnicodeStringFromDataView", function() { return getUnicodeStringFromDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringValueFromArray", function() { return getStringValueFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterArray", function() { return getCharacterArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectAssign", function() { return objectAssign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deferInit", function() { return deferInit; });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

function getStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i++) {
        chars.push(dataView.getUint8(offset + i));
    }
    return getStringValueFromArray(chars);
}

function getUnicodeStringFromDataView(dataView, offset, length) {
    const chars = [];
    for (let i = 0; i < length && offset + i < dataView.byteLength; i += 2) {
        chars.push(dataView.getUint16(offset + i));
    }
    return getStringValueFromArray(chars);
}

function getStringValueFromArray(charArray) {
    return charArray.map((charCode) => String.fromCharCode(charCode)).join('');
}

function getCharacterArray(string) {
    return string.split('').map((character) => character.charCodeAt(0));
}

function objectAssign() {
    for (let i = 1; i < arguments.length; i++) {
        for (const property in arguments[i]) {
            arguments[0][property] = arguments[i][property];
        }
    }

    return arguments[0];
}

function deferInit(object, key, initializer) {
    let initialized = false;
    Object.defineProperty(object, key, {
        get() {
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


/***/ }),

/***/ "../../node_modules/exifreader/src/xmp-tag-names.js":
/*!***********************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/xmp-tag-names.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/* harmony default export */ __webpack_exports__["default"] = ({
    'tiff:Orientation'(value) {
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
});

function calculateGPSValue(value) {
    const [degreesString, minutesString] = value.split(',');
    if ((degreesString !== undefined) && (minutesString !== undefined)) {
        const degrees = parseFloat(degreesString);
        const minutes = parseFloat(minutesString);
        const ref = minutesString.charAt(minutesString.length - 1);
        if ((!Number.isNaN(degrees)) && (!Number.isNaN(minutes))) {
            return '' + (degrees + minutes / 60) + ref;
        }
    }
    return value;
}


/***/ }),

/***/ "../../node_modules/exifreader/src/xmp-tags.js":
/*!******************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/exifreader/src/xmp-tags.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "../../node_modules/exifreader/src/utils.js");
/* harmony import */ var _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmp-tag-names.js */ "../../node_modules/exifreader/src/xmp-tag-names.js");
/* harmony import */ var _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-parser.js */ "../../node_modules/exifreader/src/dom-parser.js");
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */





/* harmony default export */ __webpack_exports__["default"] = ({
    read
});

function read(dataView, chunks) {
    if (typeof dataView === 'string') {
        return readTags({}, dataView);
    }
    return extractCompleteChunks(dataView, chunks).reduce(readTags, {});
}

// The first chunk is always the regular XMP document. Then there is something
// called extended XMP. The extended XMP is also a single XMP document but it
// can be divided into multiple chunks that need to be combined into one.
function extractCompleteChunks(dataView, chunks) {
    if (chunks.length === 0) {
        return [];
    }

    const completeChunks = [combineChunks(dataView, chunks.slice(0, 1))];
    if (chunks.length > 1) {
        completeChunks.push(combineChunks(dataView, chunks.slice(1)));
    }

    return completeChunks;
}

function combineChunks(dataView, chunks) {
    const totalLength = chunks.reduce((size, chunk) => size + chunk.length, 0);
    const combinedChunks = new Uint8Array(totalLength);
    let offset = 0;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const slice = dataView.buffer.slice(chunk.dataOffset, chunk.dataOffset + chunk.length);
        combinedChunks.set(new Uint8Array(slice), offset);
        offset += chunk.length;
    }

    return new DataView(combinedChunks.buffer);
}

function readTags(tags, chunkDataView) {
    try {
        const doc = getDocument(chunkDataView);
        const rdf = getRDF(doc);

        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseXMPObject(convertToObject(rdf, true)));
    } catch (error) {
        return tags;
    }
}

function getDocument(chunkDataView) {
    const Parser = _dom_parser_js__WEBPACK_IMPORTED_MODULE_2__["default"].get();
    if (!Parser) {
        console.warn('Warning: DOMParser is not available. It is needed to be able to parse XMP tags.'); // eslint-disable-line no-console
        throw new Error();
    }

    const domParser = new Parser();
    const xmlString = typeof chunkDataView === 'string' ? chunkDataView : Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStringFromDataView"])(chunkDataView, 0, chunkDataView.byteLength);
    const doc = domParser.parseFromString(trimXmlSource(xmlString), 'application/xml');

    if (doc.documentElement.nodeName === 'parsererror') {
        throw new Error(doc.documentElement.textContent);
    }

    return doc;
}

function trimXmlSource(xmlSource) {
    return xmlSource.replace(/^.+(<\?xpacket begin)/, '$1').replace(/(<\?xpacket end=".*"\?>).+$/, '$1');
}

function getRDF(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].tagName === 'x:xmpmeta') {
            return getRDF(node.childNodes[i]);
        }
        if (node.childNodes[i].tagName === 'rdf:RDF') {
            return node.childNodes[i];
        }
    }

    throw new Error();
}

function convertToObject(node, isTopNode = false) {
    const childNodes = getChildNodes(node);

    if (hasTextOnlyContent(childNodes)) {
        if (isTopNode) {
            return {};
        }
        return getTextValue(childNodes[0]);
    }

    return getElementsFromNodes(childNodes);
}

function getChildNodes(node) {
    const elements = [];

    for (let i = 0; i < node.childNodes.length; i++) {
        elements.push(node.childNodes[i]);
    }

    return elements;
}

function hasTextOnlyContent(nodes) {
    return (nodes.length === 1) && (nodes[0].nodeName === '#text');
}

function getTextValue(node) {
    return node.nodeValue;
}

function getElementsFromNodes(nodes) {
    const elements = {};

    nodes.forEach((node) => {
        if (isElement(node)) {
            const nodeElement = getElementFromNode(node);

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
    return (node.nodeName) && (node.nodeName !== '#text');
}

function getElementFromNode(node) {
    return {
        attributes: getAttributes(node),
        value: convertToObject(node)
    };
}

function getAttributes(element) {
    const attributes = {};

    for (let i = 0; i < element.attributes.length; i++) {
        attributes[element.attributes[i].nodeName] = decodeURIComponent(escape(element.attributes[i].value));
    }

    return attributes;
}

function parseXMPObject(xmpObject) {
    const tags = {};

    if (typeof xmpObject === 'string') {
        return xmpObject;
    }

    for (const nodeName in xmpObject) {
        let nodes = xmpObject[nodeName];

        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }

        nodes.forEach((node) => {
            Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseNodeAttributesAsTags(node.attributes));
            if (typeof node.value === 'object') {
                Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(tags, parseNodeChildrenAsTags(node.value));
            }
        });
    }

    return tags;
}

function parseNodeAttributesAsTags(attributes) {
    const tags = {};

    for (const name in attributes) {
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
    return (name !== 'rdf:parseType') && (!isNamespaceDefinition(name));
}

function isNamespaceDefinition(name) {
    return name.split(':')[0] === 'xmlns';
}

function getLocalName(name) {
    return name.split(':')[1];
}

function getDescription(value, name = undefined) {
    if (Array.isArray(value)) {
        return getDescriptionOfArray(value);
    }
    if (typeof value === 'object') {
        return getDescriptionOfObject(value);
    }

    try {
        if ((name) && (typeof _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name] === 'function')) {
            return _xmp_tag_names_js__WEBPACK_IMPORTED_MODULE_1__["default"][name](value);
        }
        return decodeURIComponent(escape(value));
    } catch (error) {
        return value;
    }
}

function getDescriptionOfArray(value) {
    return value.map((item) => {
        if (item.value !== undefined) {
            return getDescription(item.value);
        }
        return getDescription(item);
    }).join(', ');
}

function getDescriptionOfObject(value) {
    const descriptions = [];

    for (const key in value) {
        descriptions.push(`${getClearTextKey(key)}: ${value[key].value}`);
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
    const tags = {};

    for (const name in children) {
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
    return ((node.attributes['rdf:parseType'] === 'Resource') && (node.value['rdf:value'] !== undefined))
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] !== undefined));
}

function parseNodeAsSimpleRdfDescription(node, name) {
    const attributes = parseNodeAttributes(node);

    if (node.value['rdf:Description'] !== undefined) {
        node = node.value['rdf:Description'];
    }

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["objectAssign"])(attributes, parseNodeAttributes(node), parseNodeChildrenAsAttributes(node));

    const value = parseRdfValue(node);

    return {
        value,
        attributes,
        description: getDescription(value, name)
    };
}

function parseNodeAttributes(node) {
    const attributes = {};

    for (const name in node.attributes) {
        if ((name !== 'rdf:parseType') && (name !== 'rdf:resource') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.attributes[name];
        }
    }

    return attributes;
}

function parseNodeChildrenAsAttributes(node) {
    const attributes = {};

    for (const name in node.value) {
        if ((name !== 'rdf:value') && (!isNamespaceDefinition(name))) {
            attributes[getLocalName(name)] = node.value[name].value;
        }
    }

    return attributes;
}

function parseRdfValue(node) {
    return getURIValue(node.value['rdf:value']) || node.value['rdf:value'].value;
}

function hasNestedStructureRdfDescription(node) {
    return (node.attributes['rdf:parseType'] === 'Resource')
        || ((node.value['rdf:Description'] !== undefined) && (node.value['rdf:Description'].value['rdf:value'] === undefined));
}

function parseNodeAsStructureRdfDescription(node, name) {
    const tag = {
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
    return (Object.keys(node.value).length === 0)
        && (node.attributes['rdf:resource'] === undefined);
}

function parseNodeAsCompactStructure(node, name) {
    const value = parseNodeAttributesAsTags(node.attributes);

    return {
        value,
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
    let items = getArrayChild(node.value).value['rdf:li'];
    const attributes = parseNodeAttributes(node);
    const value = [];

    if (items === undefined) {
        items = [];
    } else if (!Array.isArray(items)) {
        items = [items];
    }

    items.forEach((item) => {
        value.push(parseArrayValue(item));
    });

    return {
        value,
        attributes,
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
    const value = getURIValue(node) || parseXMPObject(node.value);

    return {
        value,
        attributes: parseNodeAttributes(node),
        description: getDescription(value, name)
    };
}

function getURIValue(node) {
    return node.attributes && node.attributes['rdf:resource'];
}


/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/pages/demo/blob-image/blob-image.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div class=\"fm-box-wrap\">\n    <div class=\"fm-box\">\n      <span class=\"label\">expectWidth</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testWidth\">\n          <mat-option *ngFor=\"let data of optionWidths\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">expectHeight</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testHeight\">\n          <mat-option *ngFor=\"let data of optionHeights\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">quality</span>\n      <div class=\"box\">\n        <mat-select [(ngModel)]=\"testQuality\">\n          <mat-option *ngFor=\"let data of optionQualities\" [value]=\"data.value\">{{\n            data.label\n          }}</mat-option>\n        </mat-select>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">applyOrientation</span>\n      <div class=\"box\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"testApplyOrientation\">\n          apply exif orientation\n        </mat-checkbox>\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">expectContentType</span>\n      <div class=\"box\">\n        <input class=\"fm-input\" [(ngModel)]=\"testContentType\" placeholder=\"ex) image/jpeg\" />\n      </div>\n    </div>\n    <div class=\"fm-box\">\n      <span class=\"label\">fillBgColor</span>\n      <div class=\"box\">\n        <input class=\"fm-input\" [(ngModel)]=\"testFillBgColor\" placeholder=\"ex) #ff0000\" />\n      </div>\n    </div>\n  </div>\n\n  <ul class=\"my-desc\">\n    <li class=\"item\">quality: only applies when contentType \"image/jpeg\"</li>\n    <li class=\"item\">\n      orientation: only applies when image has exif orientation\n      <a target=\"_blank\" href=\"https://github.com/recurser/exif-orientation-examples\"\n        >(github: exif orientation sample image)</a\n      >\n    </li>\n  </ul>\n</div>\n\n<div class=\"file-wrap\">\n  <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" />\n</div>\n\n<div class=\"demo-wrap\">\n  <div *ngFor=\"let demo of demoList\" class=\"demo-item\">\n    <div class=\"panel-canvas\">\n      <div class=\"draw-area\">\n        <canvas #demoCanvasRefs></canvas>\n      </div>\n    </div>\n    <div *ngIf=\"demo.info\" class=\"panel-info\">\n      <em class=\"tit\">{{ demo.info.title }}</em>\n      <dl class=\"dl\">\n        <dt class=\"dt\">size</dt>\n        <dd class=\"dd\">{{ demo.info.size }}bype / {{ (demo.info.size / 1024).toFixed(2) }}kb</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">type</dt>\n        <dd class=\"dd\">{{ demo.info.type }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">width</dt>\n        <dd class=\"dd\">{{ demo.info.width }}</dd>\n      </dl>\n      <dl class=\"dl\">\n        <dt class=\"dt\">height</dt>\n        <dd class=\"dd\">{{ demo.info.height }}</dd>\n      </dl>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"canvas-wrap\">\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasOriginal></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCover></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasCoverNoneStretch></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"canvas-item\">\n    <div class=\"display-area\">\n      <div class=\"draw-area\">\n        <canvas #canvasScale></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"info-wrap\">\n  <div *ngFor=\"let info of infos\" class=\"info-item\">\n    <em class=\"tit\">{{ info.title }}</em>\n    <dl class=\"dl\">\n      <dt class=\"dt\">size</dt>\n      <dd class=\"dd\">{{ info.size }}bype / {{ (info.size / 1024).toFixed(2) }}kb</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">type</dt>\n      <dd class=\"dd\">{{ info.type }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">width</dt>\n      <dd class=\"dd\">{{ info.width }}</dd>\n    </dl>\n    <dl class=\"dl\">\n      <dt class=\"dt\">height</dt>\n      <dd class=\"dd\">{{ info.height }}</dd>\n    </dl>\n  </div>\n</div> -->\n");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var exifreader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exifreader */ "../../node_modules/exifreader/src/exif-reader.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../packages/src/blob-image/types.ts");



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
        const { expectWidth = 2000, expectHeight = 2000, quality = 0.9, resizeType = _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE, expectContentType, fillBgColor, applyOrientation = false, } = config;
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
    getResizeToScale(sw, sh) {
        const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
        const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
        const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
        const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
        const { maxWidth, maxHeight } = this.getMaxSize(sw, sh);
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
     * 이미지 사이즈와 옵션 조합으로 리사이징 가능한 최대 넓이, 높이 반환
     * @protected
     * @param {number} sw
     * @param {number} sh
     * @returns {ParseMaxSize}
     */
    getMaxSize(sw, sh) {
        let maxWidth = this.maxWidth;
        let maxHeight = this.maxHeight;
        if (this.maxWidth <= 0 && this.maxHeight <= 0) {
            maxWidth = sw;
            maxHeight = sh;
        }
        else if (this.maxWidth <= 0) {
            if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE_STRETCH) {
                maxWidth = sw <= sh ? sw * (this.maxHeight / sh) : this.maxHeight;
            }
            else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].FIXED) {
                maxWidth = sw * (this.maxHeight / sh);
            }
            else {
                maxWidth = maxHeight;
            }
        }
        else if (this.maxHeight <= 0) {
            if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE_STRETCH) {
                maxHeight = sh <= sw ? sh * (this.maxWidth / sw) : this.maxWidth;
            }
            else if (this.resizeType === _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].FIXED) {
                maxHeight = sh * (this.maxWidth / sw);
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
     * 이미지 로드 완료
     * @protected
     */
    onImageLoaded() {
        URL.revokeObjectURL(this.blobURL);
        const imageWidth = this.domImage.naturalWidth;
        const imageHeight = this.domImage.naturalHeight;
        this.draw(imageWidth, imageHeight);
    }
    /**
     * 이미지 orientation 등 설정 정보에 따라 그려져야할 사이즈, 방향 등 반환
     * @protected
     * @param {number} imageWidth
     * @param {number} imageHeight
     * @returns {Promise<ParseMetadata>}
     */
    parseDrawMetadata(imageWidth, imageHeight) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sw = imageWidth;
            let sh = imageHeight;
            let orientation = 0;
            if (this.applyOrientation === true) {
                try {
                    const buffer = yield this.blob.arrayBuffer();
                    const result = exifreader__WEBPACK_IMPORTED_MODULE_1__["load"](buffer);
                    if (result.Orientation && result.Orientation.value) {
                        orientation = result.Orientation.value;
                    }
                }
                catch (err) { }
                if (4 < orientation) {
                    sw = imageHeight;
                    sh = imageWidth;
                }
            }
            return { sw, sh, orientation };
        });
    }
    /**
     * 이미지가 그려져야할 영역 정보 반환
     * @protected
     * @param {number} sw
     * @param {number} sh
     * @return {DrawBound}
     */
    parseDrawBound(sw, sh) {
        let drawBound;
        switch (this.resizeType) {
            case _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].COVER:
                drawBound = this.getResizeToCover(sw, sh);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].COVER_STRETCH:
                drawBound = this.getResizeToCoverStretch(sw, sh);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE_STRETCH:
                drawBound = this.getResizeToScaleStretch(sw, sh);
                break;
            case _types__WEBPACK_IMPORTED_MODULE_2__["ResizeType"].SCALE:
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
    draw(imageWidth, imageHeight) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { sw, sh, orientation } = yield this.parseDrawMetadata(imageWidth, imageHeight);
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
            }
            else {
                context.drawImage(this.domImage, 0, 0, sw, sh, dx, dy, dw, dh);
            }
            this.detectedOrientation = orientation;
            // 그리기 완료 (type 이 jpeg 인 경우만 quality 적용이 됨)
            canvas.toBlob(this.onResized.bind(this), contentType, this.quality);
        });
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
        const orientation = this.detectedOrientation || 0;
        return {
            blob: blob,
            width: blob ? width : 0,
            height: blob ? height : 0,
            orientation,
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
/* harmony default export */ __webpack_exports__["default"] = (".file-wrap {\n  padding: 30px 0;\n}\n\n.my-desc {\n  padding: 7px 10px 7px 22px;\n  color: #666666;\n  font-size: 14px;\n  line-height: 1.45;\n}\n\n.my-desc .item {\n  padding: 3px 0;\n  list-style: outside square;\n}\n\n.fm-box-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.fm-box-wrap .fm-box {\n  flex: 1;\n  margin: 5px;\n  padding: 10px 15px;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n  box-sizing: border-box;\n  background-color: #f7f7f7;\n}\n\n.fm-box-wrap .fm-box .label {\n  display: block;\n  font-size: 14px;\n  color: #666666;\n}\n\n.fm-box-wrap .fm-box .box {\n  margin-top: 5px;\n  padding: 5px 0;\n}\n\n.fm-box-wrap .fm-input {\n  display: block;\n  padding: 0 10px;\n  width: 100%;\n  height: 32px;\n  font-size: 16px;\n  box-sizing: border-box;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background: none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.demo-wrap {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.demo-wrap .demo-item {\n  padding: 10px;\n  width: 50%;\n  min-width: 280px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info {\n  padding: 10px 10px;\n  font-size: 14px;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-info .tit {\n  display: block;\n  padding-bottom: 5px;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: bold;\n}\n\n.demo-wrap .demo-item .panel-info .dl {\n  display: flex;\n  padding: 5px 0;\n  align-items: center;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dt {\n  width: 50px;\n  color: #999999;\n}\n\n.demo-wrap .demo-item .panel-info .dl .dd {\n  color: #000000;\n}\n\n.demo-wrap .demo-item .panel-canvas {\n  position: relative;\n  padding-bottom: 100%;\n  box-sizing: border-box;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  border: 1px dashed #000000;\n  background-color: #f9f9f9;\n  background-image: linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9), linear-gradient(45deg, #d9d9d9 25%, transparent 25%, transparent 75%, #d9d9d9 75%, #d9d9d9);\n  background-size: 20px 20px;\n  background-position: 0 0, 10px 10px;\n}\n\n.demo-wrap .demo-item .panel-canvas .draw-area > canvas {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vYmxvYi1pbWFnZS9ibG9iLWltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBREU7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBRkU7RUFDRSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBSUo7O0FBSEk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLTjs7QUFISTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBS047O0FBRkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtBQUlKOztBQURBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFJRjs7QUFIRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUtKOztBQUpJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFNTjs7QUFMTTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBT1I7O0FBTE07RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBT1I7O0FBTlE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVFWOztBQU5RO0VBQ0UsY0FBQTtBQVFWOztBQUhJO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBS047O0FBSk07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsME1BQUE7RUFnQkEsMEJBQUE7RUFDQSxtQ0FBQTtBQVRSOztBQVVRO0VBQ0UsY0FBQTtBQVJWIiwiZmlsZSI6InByb2plY3RzL2Rldi9zcmMvYXBwL3BhZ2VzL2RlbW8vYmxvYi1pbWFnZS9ibG9iLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGUtd3JhcCB7XG4gIHBhZGRpbmc6IDMwcHggMDtcbn1cbi5teS1kZXNjIHtcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDIycHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xuICAuaXRlbSB7XG4gICAgcGFkZGluZzogM3B4IDA7XG4gICAgbGlzdC1zdHlsZTogb3V0c2lkZSBzcXVhcmU7XG4gIH1cbn1cbi5mbS1ib3gtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmZtLWJveCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgLmxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgfVxuICAgIC5ib3gge1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuICB9XG4gIC5mbS1pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuLmRlbW8td3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLmRlbW8taXRlbSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMjgwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAucGFuZWwtaW5mbyB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLnRpdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICAuZGwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmR0IHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgfVxuICAgICAgICAuZGQge1xuICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBhbmVsLWNhbnZhcyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAuZHJhdy1hcmVhIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgIzAwMDAwMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICAjZDlkOWQ5IDI1JSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDI1JSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JSxcbiAgICAgICAgICAgICNkOWQ5ZDkgNzUlLFxuICAgICAgICAgICAgI2Q5ZDlkOVxuICAgICAgICAgICksXG4gICAgICAgICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICAjZDlkOWQ5IDI1JSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDI1JSxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50IDc1JSxcbiAgICAgICAgICAgICNkOWQ5ZDkgNzUlLFxuICAgICAgICAgICAgI2Q5ZDlkOVxuICAgICAgICAgICk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDEwcHggMTBweDtcbiAgICAgICAgPiBjYW52YXMge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

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
        this.testWidth = 200;
        this.testHeight = 0;
        this.testQuality = 0.9;
        this.testContentType = '';
        this.testFillBgColor = '';
        this.testApplyOrientation = false;
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
            const applyOrientation = this.testApplyOrientation || false;
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
                    applyOrientation,
                });
                const resizeResult = yield resizer.create();
                resizeBlob = resizeResult.blob;
                resizeWidth = resizeResult.width;
                resizeHeight = resizeResult.height;
                resizeCanvas = yield this.drawToCanvas(canvas, {
                    blob: resizeBlob,
                    width: resizeWidth,
                    height: resizeHeight,
                });
                console.log(resizeResult);
            }
            else {
                // original ...
                resizeBlob = blob;
                resizeCanvas = yield this.drawToCanvas(canvas, {
                    blob: resizeBlob,
                    width: 0,
                    height: 0,
                });
            }
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