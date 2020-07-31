(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!*******************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/aside.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/aside.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"menu-list\">\n  <menu-list [menuList]=\"menuList\"></menu-list>\n</nav>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-group/menu-group.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-group/menu-group.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"menu-group\">\n  <li *ngFor=\"let menu of menus\">\n    <menu-item [menu]=\"menu\"></menu-item>\n  </li>\n</ul>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-item/menu-item.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-item/menu-item.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"hasChildren; then tmplChildren; else tmplNoneChildren\">\n</ng-container>\n\n<ng-template #tmplChildren>\n  <button\n    mat-button\n    class=\"menu-item\"\n    [class.is-opened]=\"isOpened\"\n    (click)=\"handleToggleExpand()\"\n  >\n    <span class=\"menu-label\">{{ label }}</span>\n    <span class=\"menu-expand\">\n      <mat-icon>expand_more</mat-icon>\n    </span>\n  </button>\n  <div class=\"panel-expand\">\n    <menu-group [menus]=\"children\"></menu-group>\n  </div>\n</ng-template>\n\n<ng-template #tmplNoneChildren>\n  <a\n    mat-button\n    class=\"menu-item\"\n    [routerLink]=\"href\"\n    [queryParams]=\"queryParams\"\n    routerLinkActive=\"activate\"\n    [routerLinkActiveOptions]=\"{ exact: activateExactly }\"\n  >\n    <span class=\"menu-label\">{{ label }}</span>\n  </a>\n</ng-template>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-list/menu-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-list/menu-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"menu-list\">\n  <menu-item\n    *ngFor=\"let menu of menuList\"\n    class=\"menu-item\"\n    [menu]=\"menu\"\n  ></menu-item>\n</nav>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout.component.html":
/*!*************************************************************************************************************************************!*\
  !*** /home/travis/build/molgga/jood-file-reader/node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" class=\"ly-header\">\n  <button mat-icon-button (click)=\"drawer.toggle()\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <div class=\"head-bar\">\n    <h1 class=\"app-title\">{{ appTitle }}</h1>\n  </div>\n  <button\n    *ngFor=\"let publish of publishList\"\n    mat-icon-button\n    [matTooltip]=\"publish.label\"\n    (click)=\"onOpenToPublish(publish)\"\n  >\n    <mat-icon>{{ publish.icon }}</mat-icon>\n  </button>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"ly-container\">\n  <mat-sidenav\n    class=\"ly-side\"\n    #drawer\n    [opened]=\"initOpened\"\n    [mode]=\"drawerMode\"\n    [fixedInViewport]=\"fixedInViewport\"\n    [fixedTopGap]=\"fixedTopGap\"\n  >\n    <layout-aside class=\"ly-navi\" [menuList]=\"menuList\"></layout-aside>\n  </mat-sidenav>\n  <mat-sidenav-content class=\"ly-content\">\n    <div class=\"ly-body\">\n      <router-outlet></router-outlet>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dev_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.component */ "./src/app/modules/layout/layout.component.ts");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "./src/app/modules/layout/service/token.ts");
/* harmony import */ var _dev_app_service_example_layout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/dev/app/service/example-layout.service */ "./src/app/service/example-layout.service.ts");







const routes = [
    {
        path: "",
        component: _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: "demo",
                loadChildren: () => __webpack_require__.e(/*! import() | dev-app-pages-demo-demo-module */ "dev-app-pages-demo-demo-module").then(__webpack_require__.bind(null, /*! ~/dev/app/pages/demo/demo.module */ "./src/app/pages/demo/demo.module.ts")).then((m) => m.PageModule),
            },
            {
                path: "**",
                loadChildren: () => __webpack_require__.e(/*! import() | dev-app-pages-demo-demo-module */ "dev-app-pages-demo-demo-module").then(__webpack_require__.bind(null, /*! ~/dev/app/pages/demo/demo.module */ "./src/app/pages/demo/demo.module.ts")).then((m) => m.PageModule),
            },
        ],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_dev_app_modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        providers: [
            { provide: _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SERVICE_TOKEN"], useClass: _dev_app_service_example_layout_service__WEBPACK_IMPORTED_MODULE_6__["ExampleLayoutService"] },
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: flex;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL2Rldi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");








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

/***/ "./src/app/modules/layout/aside/aside.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/layout/aside/aside.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9tb2R1bGVzL2xheW91dC9hc2lkZS9hc2lkZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/layout/aside/aside.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/layout/aside/aside.component.ts ***!
  \*********************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AsideComponent = class AsideComponent {
    constructor() { }
    ngOnInit() { }
};
AsideComponent.ctorParameters = () => [];
AsideComponent.propDecorators = {
    menuList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
AsideComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "layout-aside",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aside.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/aside.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./aside.component.scss */ "./src/app/modules/layout/aside/aside.component.scss")).default]
    })
], AsideComponent);



/***/ }),

/***/ "./src/app/modules/layout/aside/aside.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/layout/aside/aside.module.ts ***!
  \******************************************************/
/*! exports provided: AsideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideModule", function() { return AsideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/dev/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _aside_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside.component */ "./src/app/modules/layout/aside/aside.component.ts");
/* harmony import */ var _menu_group_menu_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-group/menu-group.component */ "./src/app/modules/layout/aside/menu-group/menu-group.component.ts");
/* harmony import */ var _menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-list/menu-list.component */ "./src/app/modules/layout/aside/menu-list/menu-list.component.ts");
/* harmony import */ var _menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-item/menu-item.component */ "./src/app/modules/layout/aside/menu-item/menu-item.component.ts");







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



/***/ }),

/***/ "./src/app/modules/layout/aside/menu-group/menu-group.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-group/menu-group.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-group::ng-deep .menu-item {\n  padding-left: 24px;\n}\n\n.menu-group::ng-deep .menu-group .menu-item {\n  padding-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvbGF5b3V0L2FzaWRlL21lbnUtZ3JvdXAvbWVudS1ncm91cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGIiwiZmlsZSI6InByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvbGF5b3V0L2FzaWRlL21lbnUtZ3JvdXAvbWVudS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudS1ncm91cDo6bmctZGVlcCAubWVudS1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLm1lbnUtZ3JvdXA6Om5nLWRlZXAgLm1lbnUtZ3JvdXAgLm1lbnUtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/layout/aside/menu-group/menu-group.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-group/menu-group.component.ts ***!
  \*************************************************************************/
/*! exports provided: MenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupComponent", function() { return MenuGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuGroupComponent = class MenuGroupComponent {
    constructor() {
        this.menus = [];
    }
    ngOnInit() { }
};
MenuGroupComponent.ctorParameters = () => [];
MenuGroupComponent.propDecorators = {
    menus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MenuGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "menu-group",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-group.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-group/menu-group.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-group.component.scss */ "./src/app/modules/layout/aside/menu-group/menu-group.component.scss")).default]
    })
], MenuGroupComponent);



/***/ }),

/***/ "./src/app/modules/layout/aside/menu-item/menu-item.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-item/menu-item.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-item {\n  position: relative;\n  display: block;\n  width: 100%;\n  border-radius: 0;\n  font-weight: 400;\n  font-size: 13px;\n  color: #797979;\n  padding-right: 8px;\n}\n\n.menu-item.activate {\n  color: #546e7a;\n}\n\n.menu-item.activate:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 4px;\n  bottom: 0;\n  width: 6px;\n  height: 2px;\n  margin-top: -2px;\n  background-color: #546e7a;\n}\n\n.menu-item.activate:after {\n  content: \"\";\n  position: absolute;\n  top: 10px;\n  right: 0;\n  bottom: 10px;\n  width: 2px;\n  background-color: #546e7a;\n}\n\n.menu-item::ng-deep > .mat-button-wrapper {\n  display: flex;\n  width: 100%;\n  text-align: left;\n  align-items: center;\n}\n\n.menu-item .menu-expand .mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  color: #546e7a;\n}\n\n.menu-item.is-opened .menu-expand {\n  transform: rotate(-180deg) scale(0.8);\n}\n\n.menu-item.is-opened .menu-expand .mat-icon {\n  color: #aaaaaa;\n}\n\n.menu-item.is-opened ~ .panel-expand {\n  height: auto;\n}\n\n.menu-label {\n  flex: 1 1 auto;\n  margin-right: 10px;\n  line-height: 1.6;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  white-space: normal;\n  word-break: break-word;\n}\n\n.menu-expand {\n  display: inline-flex;\n  color: #666666;\n  transition: transform 200ms;\n}\n\n.panel-expand {\n  height: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvbGF5b3V0L2FzaWRlL21lbnUtaXRlbS9tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLHFDQUFBO0FBT0Y7O0FBTEE7RUFDRSxjQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBVUY7O0FBUkE7RUFDRSxvQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQVdGOztBQVRBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBWUYiLCJmaWxlIjoicHJvamVjdHMvZGV2L3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvYXNpZGUvbWVudS1pdGVtL21lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWVudS1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM3OTc5Nzk7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5tZW51LWl0ZW0uYWN0aXZhdGUge1xuICBjb2xvcjogIzU0NmU3YTtcbn1cbi5tZW51LWl0ZW0uYWN0aXZhdGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2ZTdhO1xufVxuLm1lbnUtaXRlbS5hY3RpdmF0ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2ZTdhO1xufVxuXG4ubWVudS1pdGVtOjpuZy1kZWVwID4gLm1hdC1idXR0b24td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUtaXRlbSAubWVudS1leHBhbmQgLm1hdC1pY29uIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzU0NmU3YTtcbn1cbi5tZW51LWl0ZW0uaXMtb3BlbmVkIC5tZW51LWV4cGFuZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpIHNjYWxlKDAuOCk7XG59XG4ubWVudS1pdGVtLmlzLW9wZW5lZCAubWVudS1leHBhbmQgLm1hdC1pY29uIHtcbiAgY29sb3I6ICNhYWFhYWE7XG59XG4ubWVudS1pdGVtLmlzLW9wZW5lZCB+IC5wYW5lbC1leHBhbmQge1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWVudS1sYWJlbCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG4ubWVudS1leHBhbmQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcbn1cbi5wYW5lbC1leHBhbmQge1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/layout/aside/menu-item/menu-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-item/menu-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemComponent", function() { return MenuItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MenuItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "menu-item",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-item.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-item/menu-item.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-item.component.scss */ "./src/app/modules/layout/aside/menu-item/menu-item.component.scss")).default]
    })
], MenuItemComponent);



/***/ }),

/***/ "./src/app/modules/layout/aside/menu-list/menu-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-list/menu-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n.menu-list {\n  margin-top: 10px;\n}\n\n.menu-list .menu-item {\n  border-bottom: 1px solid #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvbGF5b3V0L2FzaWRlL21lbnUtbGlzdC9tZW51LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0NBQUE7QUFHRiIsImZpbGUiOiJwcm9qZWN0cy9kZXYvc3JjL2FwcC9tb2R1bGVzL2xheW91dC9hc2lkZS9tZW51LWxpc3QvbWVudS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZW51LWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1lbnUtbGlzdCAubWVudS1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/layout/aside/menu-list/menu-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/layout/aside/menu-list/menu-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MenuListComponent = class MenuListComponent {
    constructor() {
        this.menuList = [];
    }
    ngOnInit() { }
};
MenuListComponent.ctorParameters = () => [];
MenuListComponent.propDecorators = {
    menuList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
MenuListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "menu-list",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/aside/menu-list/menu-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-list.component.scss */ "./src/app/modules/layout/aside/menu-list/menu-list.component.scss")).default]
    })
], MenuListComponent);



/***/ }),

/***/ "./src/app/modules/layout/layout.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/layout/layout.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.ly-header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.ly-header .head-bar {\n  flex: 1;\n}\n\n.ly-header .app-title {\n  margin-left: 8px;\n  font-size: 18px;\n}\n\n.ly-container {\n  flex: 1;\n}\n\n.ly-side {\n  width: 200px;\n  background-color: #ffffff;\n}\n\n.ly-content {\n  position: relative;\n  padding: 20px;\n  box-sizing: border-box;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2Rldi9zcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLE9BQUE7QUFHSjs7QUFERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0UsT0FBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBS0YiLCJmaWxlIjoicHJvamVjdHMvZGV2L3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG59XG4ubHktaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIC5oZWFkLWJhciB7XG4gICAgZmxleDogMTtcbiAgfVxuICAuYXBwLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuLmx5LWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG59XG4ubHktc2lkZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5seS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/layout/layout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/layout/layout.component.ts ***!
  \****************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "./src/app/modules/layout/service/token.ts");
/* harmony import */ var _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/layout.service */ "./src/app/modules/layout/service/layout.service.ts");





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
    { type: _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_3__["LAYOUT_SERVICE_TOKEN"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }
];
LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-layout",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout.component.scss */ "./src/app/modules/layout/layout.component.scss")).default]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/modules/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dev_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/dev/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dev_app_modules_layout_aside_aside_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/dev/app/modules/layout/aside/aside.module */ "./src/app/modules/layout/aside/aside.module.ts");
/* harmony import */ var _dev_app_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ~/dev/app/modules/layout/layout.component */ "./src/app/modules/layout/layout.component.ts");
/* harmony import */ var _dev_app_modules_layout_service_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/token */ "./src/app/modules/layout/service/token.ts");
/* harmony import */ var _dev_app_modules_layout_service_layout_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ~/dev/app/modules/layout/service/layout.service */ "./src/app/modules/layout/service/layout.service.ts");








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

/***/ "./src/app/modules/layout/service/layout.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/layout/service/layout.service.ts ***!
  \**********************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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

/***/ "./src/app/modules/layout/service/token.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/layout/service/token.ts ***!
  \*************************************************/
/*! exports provided: LAYOUT_SERVICE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SERVICE_TOKEN", function() { return LAYOUT_SERVICE_TOKEN; });
const LAYOUT_SERVICE_TOKEN = "LAYOUT_SERVICE_TOKEN";


/***/ }),

/***/ "./src/app/service/example-layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/example-layout.service.ts ***!
  \***************************************************/
/*! exports provided: ExampleLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleLayoutService", function() { return ExampleLayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


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

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");




















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

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");







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

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/molgga/jood-file-reader/projects/dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map