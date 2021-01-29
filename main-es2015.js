(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/1bl":
/*!**************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-list/menu-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-list {\n  margin-top: 10px;\n}\n\n.menu-list .menu-item {\n  border-bottom: 1px solid #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21lbnUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQ0FBQTtBQUdGIiwiZmlsZSI6Im1lbnUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tZW51LWxpc3QgLm1lbnUtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuIl19 */");

/***/ }),

/***/ "/3Yl":
/*!**************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/service/token.ts ***!
  \**************************************************************/
/*! exports provided: LAYOUT_SERVICE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SERVICE_TOKEN", function() { return LAYOUT_SERVICE_TOKEN; });
const LAYOUT_SERVICE_TOKEN = "LAYOUT_SERVICE_TOKEN";


/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./projects/dev/src/main.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/jood-file-reader/jood-file-reader/projects/dev/src/main.ts */"dNSM");


/***/ }),

/***/ "49Bg":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/modules/layout/aside/menu-group/menu-group.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"menu-group\">\n  <li *ngFor=\"let menu of menus\">\n    <menu-item [menu]=\"menu\"></menu-item>\n  </li>\n</ul>\n");

/***/ }),

/***/ "8G6t":
/*!**************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/layout.module.ts ***!
  \**************************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/shared/shared.module */ "a6a7");
/* harmony import */ var _dev_app_modules_layout_aside_aside_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/modules/layout/aside/aside.module */ "xOKg");
/* harmony import */ var _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.component */ "R/od");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "/3Yl");
/* harmony import */ var _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/layout.service */ "8su8");








let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _dev_app_modules_layout_aside_aside_module__WEBPACK_IMPORTED_MODULE_4__["AsideModule"]],
        declarations: [_dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]],
        providers: [{ provide: _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_6__["LAYOUT_SERVICE_TOKEN"], useClass: _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_7__["LayoutService"] }],
    })
], LayoutModule);



/***/ }),

/***/ "8csV":
/*!*************************************************!*\
  !*** ./projects/dev/src/app/app.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "8su8":
/*!***********************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/service/layout.service.ts ***!
  \***********************************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let LayoutService = class LayoutService {
    constructor() {
        this.appTitle = "APP";
    }
    getPublishList() {
        return [];
    }
    getMenuList() {
        return [
            {
                label: "foo",
            },
        ];
    }
};
LayoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], LayoutService);



/***/ }),

/***/ "CEvm":
/*!****************************************************************!*\
  !*** ./projects/dev/src/app/service/example-layout.service.ts ***!
  \****************************************************************/
/*! exports provided: ExampleLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLayoutService", function() { return ExampleLayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ExampleLayoutService = class ExampleLayoutService {
    constructor() {
        this.appTitle = '@jood/file-reader';
    }
    getPublishList() {
        return [
            {
                label: 'Github',
                icon: 'code',
                url: 'https://github.com/molgga/jood-file-reader',
            },
            {
                label: 'NPM',
                icon: 'move_to_inbox',
                url: 'https://www.npmjs.com/package/@jood/file-reader',
            },
            {
                label: 'Docs',
                icon: 'library_books',
                url: 'https://molgga.github.io/jood-file-reader/documents',
            },
        ];
    }
    getMenuList() {
        return [
            {
                label: 'Demo',
                children: [
                    {
                        href: '/demo/read-stream',
                        label: 'FileReadStream',
                    },
                    {
                        href: '/demo/blob-image',
                        label: 'BlobImageResize',
                    },
                ],
            },
        ];
    }
};
ExampleLayoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ExampleLayoutService);



/***/ }),

/***/ "CbKr":
/*!************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/aside.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".foot-desc {\n  padding: 20px;\n}\n.foot-desc .desc-box {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  color: #888888;\n}\n.foot-desc .desc-box .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  font-size: 28px;\n}\n.foot-desc .desc-box .desc {\n  margin-left: 8px;\n}\n.foot-desc .desc-box .link {\n  color: #3f51b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2FzaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0FBR047QUFESTtFQUNFLGNBQUE7QUFHTiIsImZpbGUiOiJhc2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290LWRlc2Mge1xuICBwYWRkaW5nOiAyMHB4O1xuICAuZGVzYy1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4ODg4ODg7XG4gICAgLmljb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICAuZGVzYyB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICAubGluayB7XG4gICAgICBjb2xvcjogIzNmNTFiNTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "EXWr":
/*!**************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-item/menu-item.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-item {\n  position: relative;\n  display: block;\n  width: 100%;\n  border-radius: 0;\n  font-weight: 400;\n  font-size: 13px;\n  color: #797979;\n  padding-right: 8px;\n}\n\n.menu-item.activate {\n  color: #546e7a;\n}\n\n.menu-item.activate:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  bottom: 0;\n  width: 6px;\n  height: 2px;\n  margin-top: -2px;\n  background-color: #546e7a;\n}\n\n.menu-item.activate:after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 0;\n  bottom: 10px;\n  width: 2px;\n  background-color: #546e7a;\n}\n\n.menu-item::ng-deep > .mat-button-wrapper {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n}\n\n.menu-item .menu-expand .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: #546e7a;\n}\n\n.menu-item.is-opened .menu-expand {\n  transform: rotate(-180deg) scale(0.8);\n}\n\n.menu-item.is-opened .menu-expand .mat-icon {\n  color: #aaaaaa;\n}\n\n.menu-item.is-opened ~ .panel-expand {\n  height: auto;\n}\n\n.menu-label {\n  flex: 1 1 auto;\n  margin-right: 10px;\n  line-height: 1.6;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  white-space: normal;\n  word-break: break-word;\n}\n\n.menu-expand {\n  display: inline-flex;\n  color: #666666;\n  transition: transform 200ms;\n}\n\n.panel-expand {\n  height: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21lbnUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UscUNBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFOQTtFQUNFLFlBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFVRjs7QUFSQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0FBV0Y7O0FBVEE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFZRiIsImZpbGUiOiJtZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1lbnUtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNzk3OTc5O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4ubWVudS1pdGVtLmFjdGl2YXRlIHtcbiAgY29sb3I6ICM1NDZlN2E7XG59XG4ubWVudS1pdGVtLmFjdGl2YXRlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmU3YTtcbn1cbi5tZW51LWl0ZW0uYWN0aXZhdGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmU3YTtcbn1cblxuLm1lbnUtaXRlbTo6bmctZGVlcCA+IC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51LWl0ZW0gLm1lbnUtZXhwYW5kIC5tYXQtaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM1NDZlN2E7XG59XG4ubWVudS1pdGVtLmlzLW9wZW5lZCAubWVudS1leHBhbmQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKSBzY2FsZSgwLjgpO1xufVxuLm1lbnUtaXRlbS5pcy1vcGVuZWQgLm1lbnUtZXhwYW5kIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiAjYWFhYWFhO1xufVxuLm1lbnUtaXRlbS5pcy1vcGVuZWQgfiAucGFuZWwtZXhwYW5kIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm1lbnUtbGFiZWwge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuLm1lbnUtZXhwYW5kIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XG59XG4ucGFuZWwtZXhwYW5kIHtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */");

/***/ }),

/***/ "F0g5":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/modules/layout/aside/menu-item/menu-item.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"hasChildren; then tmplChildren; else tmplNoneChildren\">\n</ng-container>\n\n<ng-template #tmplChildren>\n  <button\n    mat-button\n    class=\"menu-item\"\n    [class.is-opened]=\"isOpened\"\n    (click)=\"handleToggleExpand()\"\n  >\n    <span class=\"menu-label\">{{ label }}</span>\n    <span class=\"menu-expand\">\n      <mat-icon>expand_more</mat-icon>\n    </span>\n  </button>\n  <div class=\"panel-expand\">\n    <menu-group [menus]=\"children\"></menu-group>\n  </div>\n</ng-template>\n\n<ng-template #tmplNoneChildren>\n  <a\n    mat-button\n    class=\"menu-item\"\n    [routerLink]=\"href\"\n    [queryParams]=\"queryParams\"\n    routerLinkActive=\"activate\"\n    [routerLinkActiveOptions]=\"{ exact: activateExactly }\"\n  >\n    <span class=\"menu-label\">{{ label }}</span>\n  </a>\n</ng-template>\n");

/***/ }),

/***/ "KTY8":
/*!**********************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/aside.component.ts ***!
  \**********************************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_aside_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./aside.component.html */ "NzYO");
/* harmony import */ var _aside_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside.component.scss */ "CbKr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AsideComponent = class AsideComponent {
    constructor() { }
    ngOnInit() { }
};
AsideComponent.ctorParameters = () => [];
AsideComponent.propDecorators = {
    menuList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AsideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "layout-aside",
        template: _raw_loader_aside_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aside_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AsideComponent);



/***/ }),

/***/ "NzYO":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/modules/layout/aside/aside.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"menu-list\">\n  <menu-list [menuList]=\"menuList\"></menu-list>\n  <div class=\"foot-desc\">\n    <div class=\"desc-box\">\n      <i class=\"icon material-icons\">tag_faces</i>\n      <p class=\"desc\">\n        It is being used by\n        <br />\n        <a class=\"link\" href=\"https://jood-lab.web.app/\" target=\"_blank\"> jood-lab.web.app </a>\n      </p>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "R/od":
/*!*****************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/layout.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./layout.component.html */ "jcwn");
/* harmony import */ var _layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component.scss */ "VLnm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "/3Yl");
/* harmony import */ var _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/layout.service */ "8su8");







let LayoutComponent = class LayoutComponent {
    constructor(layoutService, changeDetectorRef, mediaMatcher) {
        this.layoutService = layoutService;
        this.changeDetectorRef = changeDetectorRef;
        this.mediaMatcher = mediaMatcher;
        this.menuList = [];
        this.publishList = [];
        this._handleMediaQuery = () => changeDetectorRef.detectChanges();
        this.mobileMediaQuery = mediaMatcher.matchMedia("(max-width: 600px)");
        this.mobileMediaQuery.addListener(this._handleMediaQuery);
        this.menuList = this.layoutService.getMenuList();
        this.publishList = this.layoutService.getPublishList();
    }
    get appTitle() {
        return this.layoutService.appTitle;
    }
    get isMobile() {
        return this.mobileMediaQuery.matches;
    }
    get fixedInViewport() {
        return true; // !this.isMobile;
    }
    get fixedTopGap() {
        return this.isMobile ? 56 : 64;
    }
    get initOpened() {
        return !this.isMobile;
    }
    get drawerMode() {
        return this.isMobile ? "over" : "side";
    }
    onOpenToPublish(publish) {
        const { url } = publish;
        if (url)
            window.open(url);
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.mobileMediaQuery.removeListener(this._handleMediaQuery);
    }
};
LayoutComponent.ctorParameters = () => [
    { type: _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_6__["LayoutService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SERVICE_TOKEN"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["MediaMatcher"] }
];
LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-layout",
        template: _raw_loader_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LayoutComponent);



/***/ }),

/***/ "VLnm":
/*!*******************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/layout.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.ly-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.ly-header .head-bar {\n  flex: 1;\n}\n\n.ly-header .app-title {\n  margin-left: 8px;\n  font-size: 18px;\n}\n\n.ly-container {\n  flex: 1;\n}\n\n.ly-side {\n  width: 200px;\n  background-color: #ffffff;\n}\n\n.ly-content {\n  position: relative;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLE9BQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0UsT0FBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBS0YiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG59XG4ubHktaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC5oZWFkLWJhciB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuYXBwLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLmx5LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG4ubHktc2lkZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5seS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "VY+I":
/*!********************************************!*\
  !*** ./projects/dev/src/app/app.module.ts ***!
  \********************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "bNf3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "fNkV");








let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "a6a7":
/*!******************************************************!*\
  !*** ./projects/dev/src/app/shared/shared.module.ts ***!
  \******************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "f60M");







let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        ],
        declarations: [],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "bHB+":
/*!**************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-group/menu-group.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupComponent", function() { return MenuGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_group_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-group.component.html */ "49Bg");
/* harmony import */ var _menu_group_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-group.component.scss */ "oqyq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MenuGroupComponent = class MenuGroupComponent {
    constructor() {
        this.menus = [];
    }
    ngOnInit() { }
};
MenuGroupComponent.ctorParameters = () => [];
MenuGroupComponent.propDecorators = {
    menus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MenuGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "menu-group",
        template: _raw_loader_menu_group_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_group_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuGroupComponent);



/***/ }),

/***/ "bNf3":
/*!****************************************************!*\
  !*** ./projects/dev/src/app/app-routing.module.ts ***!
  \****************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dev_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.module */ "8G6t");
/* harmony import */ var _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.component */ "R/od");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "/3Yl");
/* harmony import */ var _dev_app_service_example_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/dev/app/service/example-layout.service */ "CEvm");







const routes = [
    {
        path: "",
        component: _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: "demo",
                loadChildren: () => __webpack_require__.e(/*! import() | dev-app-pages-demo-demo-module */ "dev-app-pages-demo-demo-module").then(__webpack_require__.bind(null, /*! ~/dev/app/pages/demo/demo.module */ "5xd1")).then((m) => m.PageModule),
            },
            {
                path: "**",
                loadChildren: () => __webpack_require__.e(/*! import() | dev-app-pages-demo-demo-module */ "dev-app-pages-demo-demo-module").then(__webpack_require__.bind(null, /*! ~/dev/app/pages/demo/demo.module */ "5xd1")).then((m) => m.PageModule),
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dev_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        providers: [
            { provide: _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SERVICE_TOKEN"], useClass: _dev_app_service_example_layout_service__WEBPACK_IMPORTED_MODULE_6__["ExampleLayoutService"] },
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "dNSM":
/*!**********************************!*\
  !*** ./projects/dev/src/main.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "VY+I");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "eNeZ");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "dlEd":
/*!*******************************************************************!*\
  !*** ./projects/dev/$$_lazy_route_resource lazy namespace object ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "dlEd";

/***/ }),

/***/ "eNeZ":
/*!******************************************************!*\
  !*** ./projects/dev/src/environments/environment.ts ***!
  \******************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "f60M":
/*!********************************************************!*\
  !*** ./projects/dev/src/app/shared/material.module.ts ***!
  \********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");




















let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollingModule"],
        ],
        declarations: [],
        providers: [],
    })
], MaterialModule);



/***/ }),

/***/ "fGxc":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/app.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "fNkV":
/*!***********************************************!*\
  !*** ./projects/dev/src/app/app.component.ts ***!
  \***********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "fGxc");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "8csV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "g8c2":
/*!************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-list/menu-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-list.component.html */ "sNLx");
/* harmony import */ var _menu_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-list.component.scss */ "/1bl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MenuListComponent = class MenuListComponent {
    constructor() {
        this.menuList = [];
    }
    ngOnInit() { }
};
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    menuList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MenuListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "menu-list",
        template: _raw_loader_menu_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuListComponent);



/***/ }),

/***/ "jcwn":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/modules/layout/layout.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"ly-header\">\n  <button mat-icon-button (click)=\"drawer.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"head-bar\">\n    <h1 class=\"app-title\">{{ appTitle }}</h1>\n  </div>\n  <button\n    *ngFor=\"let publish of publishList\"\n    mat-icon-button\n    [matTooltip]=\"publish.label\"\n    (click)=\"onOpenToPublish(publish)\"\n  >\n    <mat-icon>{{ publish.icon }}</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"ly-container\">\n  <mat-sidenav\n    class=\"ly-side\"\n    #drawer\n    [opened]=\"initOpened\"\n    [mode]=\"drawerMode\"\n    [fixedInViewport]=\"fixedInViewport\"\n    [fixedTopGap]=\"fixedTopGap\"\n  >\n    <layout-aside class=\"ly-navi\" [menuList]=\"menuList\"></layout-aside>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"ly-content\">\n    <div class=\"ly-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "oqyq":
/*!****************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-group/menu-group.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-group::ng-deep .menu-item {\n  padding-left: 24px;\n}\n\n.menu-group::ng-deep .menu-group .menu-item {\n  padding-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21lbnUtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7QUFHRiIsImZpbGUiOiJtZW51LWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51LWdyb3VwOjpuZy1kZWVwIC5tZW51LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4ubWVudS1ncm91cDo6bmctZGVlcCAubWVudS1ncm91cCAubWVudS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuIl19 */");

/***/ }),

/***/ "sNLx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/dev/src/app/modules/layout/aside/menu-list/menu-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"menu-list\">\n  <menu-item\n    *ngFor=\"let menu of menuList\"\n    class=\"menu-item\"\n    [menu]=\"menu\"\n  ></menu-item>\n</nav>\n");

/***/ }),

/***/ "uDlh":
/*!************************************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/menu-item/menu-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_menu_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./menu-item.component.html */ "F0g5");
/* harmony import */ var _menu_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-item.component.scss */ "EXWr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MenuItemComponent = class MenuItemComponent {
    constructor() { }
    handleToggleExpand() {
        this.toggleOpened();
    }
    toggleOpened() {
        this.menu.isOpened = !this.menu.isOpened;
    }
    get isOpened() {
        return !this.menu.isOpened;
    }
    get label() {
        return this.menu.label;
    }
    get href() {
        return this.menu.href;
    }
    get queryParams() {
        return this.menu.queryParams || null;
    }
    get children() {
        return this.menu.children;
    }
    get hasChildren() {
        return !!(this.children && this.children.length);
    }
    get activateExactly() {
        // return { exact: this.href === "" };
        return this.href === "/";
    }
    ngOnInit() { }
};
MenuItemComponent.ctorParameters = () => [];
MenuItemComponent.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
MenuItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "menu-item",
        template: _raw_loader_menu_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MenuItemComponent);



/***/ }),

/***/ "xOKg":
/*!*******************************************************************!*\
  !*** ./projects/dev/src/app/modules/layout/aside/aside.module.ts ***!
  \*******************************************************************/
/*! exports provided: AsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideModule", function() { return AsideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/dev/app/shared/shared.module */ "a6a7");
/* harmony import */ var _aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.component */ "KTY8");
/* harmony import */ var _menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-group/menu-group.component */ "bHB+");
/* harmony import */ var _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-list/menu-list.component */ "g8c2");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "uDlh");







let AsideModule = class AsideModule {
};
AsideModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
        declarations: [
            _aside_component__WEBPACK_IMPORTED_MODULE_3__["AsideComponent"],
            _menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_4__["MenuGroupComponent"],
            _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_5__["MenuListComponent"],
            _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_6__["MenuItemComponent"],
        ],
        exports: [_aside_component__WEBPACK_IMPORTED_MODULE_3__["AsideComponent"]],
    })
], AsideModule);



/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map