webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navBar {\n  font-family: \"Roboto\", sans-serif;\n  border-radius: 5px;\n  margin-left: 2%;\n  margin-bottom: 2%;\n  width: 96%;\n  background: rgba(7, 26, 33, 0.7);\n  text-transform: uppercase;\n}\n.categorize {\n  display: inline-block;\n  padding-right: 2%;\n  padding-left: 2%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n}\n\na {\n  text-decoration: none !important;\n  color: white !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"navBar\">\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/']\">\n        Top EEIS\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/about']\">\n        Social network\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/']\">\n        Osint\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/about']\">\n        Humint\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/']\">\n        Sigint\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/about']\">\n        Geoint\n      </a>\n    </div>\n    |\n    <div class=\"categorize\">\n      <a [routerLink]=\"['/itemsList']\">\n        Cyber\n      </a>\n    </div>\n  </div>\n</nav>\n\n<main style=\"height: 100%; min-height: 100vh\">\n  <router-outlet></router-outlet>\n</main>\n\n\n<footer>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_modal__ = __webpack_require__("../../../../angular2-modal/bundle/angular2-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/bundle/angular2-modal-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__entity_entity_component__ = __webpack_require__("../../../../../src/app/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__itemsList_itemsList_component__ = __webpack_require__("../../../../../src/app/itemsList/itemsList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reporter_reporter_component__ = __webpack_require__("../../../../../src/app/reporter/reporter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reporter2_reporter2_component__ = __webpack_require__("../../../../../src/app/reporter2/reporter2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__custom_modal__ = __webpack_require__("../../../../../src/app/custom.modal.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__entity_entity_component__["a" /* EntityComponent */], __WEBPACK_IMPORTED_MODULE_12__reporter_reporter_component__["a" /* ReporterComponent */], __WEBPACK_IMPORTED_MODULE_13__reporter2_reporter2_component__["a" /* Reporter2Component */], __WEBPACK_IMPORTED_MODULE_11__itemsList_itemsList_component__["a" /* ItemsListComponent */], __WEBPACK_IMPORTED_MODULE_14__custom_modal__["a" /* CustomModal */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* rootRouterConfig */], { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_6_angular2_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_angular2_modal_plugins_bootstrap__["a" /* BootstrapModalModule */],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__custom_modal__["a" /* CustomModal */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reporter_reporter_component__ = __webpack_require__("../../../../../src/app/reporter/reporter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reporter2_reporter2_component__ = __webpack_require__("../../../../../src/app/reporter2/reporter2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_entity_component__ = __webpack_require__("../../../../../src/app/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__itemsList_itemsList_component__ = __webpack_require__("../../../../../src/app/itemsList/itemsList.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootRouterConfig; });





var rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'reporter', component: __WEBPACK_IMPORTED_MODULE_1__reporter_reporter_component__["a" /* ReporterComponent */] },
    { path: 'reporter2', component: __WEBPACK_IMPORTED_MODULE_2__reporter2_reporter2_component__["a" /* Reporter2Component */] },
    { path: 'entity', component: __WEBPACK_IMPORTED_MODULE_3__entity_entity_component__["a" /* EntityComponent */] },
    { path: 'itemsList', component: __WEBPACK_IMPORTED_MODULE_4__itemsList_itemsList_component__["a" /* ItemsListComponent */] }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/custom.modal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__("../../../../angular2-modal/bundle/angular2-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/bundle/angular2-modal-bootstrap.es5.js");
/* unused harmony export CustomModalContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomModal; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomModalContext = (function (_super) {
    __extends(CustomModalContext, _super);
    function CustomModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomModalContext;
}(__WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
var CustomModal = (function () {
    function CustomModal(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    CustomModal.prototype.beforeDismiss = function () {
        return true;
    };
    return CustomModal;
}());
CustomModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'modal-content',
        styles: [
            "\n        .custom-modal-container {\n            padding: 15px;\n            background-image: url('/assets/background.jpg');\n        }\n        .custom-modal-header {\n            color: #fff;\n            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);\n            margin-top: -15px;\n            margin-bottom: 40px;\n        }\n    ",
        ],
        //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
        // Remove when solved.
        /* tslint:disable */ template: "\n        <div class=\"container-fluid custom-modal-container\">\n            <div class=\"row custom-modal-header\">\n                <div class=\"col-sm-12\">\n                    <h1>{{context.title}}</h1>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <img style=\"max-width: 100%;\" src=\"/assets/{{context.image}}\" />\n                    <p style=\"font-size: 1.2em\">{{context.content}}</p>\n                </div>\n            </div>\n        </div>",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["f" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_modal__["f" /* DialogRef */]) === "function" && _a || Object])
], CustomModal);

var _a;
//# sourceMappingURL=custom.modal.js.map

/***/ }),

/***/ "../../../../../src/app/entity/entity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  border-radius: 5px;\n\n  width: 60%;\n  height:41px;\n  padding-left:10px;\n  transition: width 0.4s ease-in-out;\n}\n\ninput[type=text]:focus {\n  width: 70%;\n  background-color: white;\n}\n\ntd {\n   padding-right: 2%;\n}\n\n.conclusionArea {\n  width: 100%;\n  height: 150px;\n  resize: none;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 20px;\n  opacity: 0.9;\n  border-radius: 5px;\n}\n\n.generateBtn {\n  border-radius: 5px;\n  opacity: 0.3;\n  width: 139px;\n  height: 39px;\n  border-color: white;\n}\n\ntd {\n  padding-right: 2%;\n}\n\n.searchIcon {\n  font-size: 33px;\n}\n\n.mainTable {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  width: 96%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n}\n\n.details {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  font-size: 90%;\n}\n\n.table {\n  height: 100%;\n  display: table;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  width: 50%;\n}\n\n.table > div {\n  display: table-row;\n}\n\n.table > div > span {\n  display: table-cell;\n  vertical-align: middle;\n  \n}\n\n.table > div > span:first-child {\n  color: #8db6de;\n  text-transform: uppercase;\n}\n\n.table > div > span:last-child {\n  padding-left: 2%;\n}\n\n.card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  background: rgba(19, 16, 35, .8);\n}\n\n.img {\n  margin-right: 2%;\n}\n\n.info {\n  font-family: \"Roboto\", sans-serif;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.name {\n  color: #8db6de;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 125%;\n  padding-top: 2%;\n  padding-bottom: 1%;\n}\n\n.row-1, .row-2, .row2-1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: 1%;\n}\n\n.col-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: .3%;\n}\n\n.firstSubTitle {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 2%;\n  margin-bottom: 4%;\n  padding-left: 3%;\n  display: block;\n}\n\n.video-box {\n  margin-left: .3%;\n  background: rgba(19, 19, 37, .95);\n  overflow: hidden;\n  border-radius: .2vw;\n  width: 100%;\n  margin-bottom: .3%;\n  border: 1px rgba(255,255,255,.3) solid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entity/entity.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mainTable\">\n  <div class=\"row-1\">\n    <div class=\"card\">\n      <div class=\"img\">\n        <img src=\"assets/entity-6.png\">\n      </div>\n      <div class=\"info\">\n        <div class=\"name\">\n          <span>Nasir Muhammad 'Awad al-Ghidan al-Harbi (Abu Bilal al-Harbi)</span>\n        </div>\n        <div class=\"details\">\n          <div class=\"table\">\n            <div>\n              <span>Gender</span>\n              <span>Male</span>\n            </div>\n            <div>\n              <span>Born</span>\n              <span>July 20th/September 5th, 1974</span>\n            </div>\n            <div>\n              <span>Profession</span>\n              <span>The governor of the Islamic State’s branch in Yemen</span>\n            </div>\n            <div>\n              <span>Group Affiliation</span>\n              <span>Islamic State</span>\n            </div>\n          </div>\n          <div class=\"table\">\n            <div>\n              <span>Last Location</span>\n              <span>Yemen</span>\n            </div>\n            <div>\n              <span>Last Report Date</span>\n              <span>July 17th, 2016</span>\n            </div>\n            <div>\n              <span>Risk Classification</span>\n              <span>High</span>\n            </div>\n            <div>\n              <span>Country Of Operation</span>\n              <span>Yemen</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"video-box\" style=\"margin: 0; border: none;\">\n      <div class=\"firstSubTitle\">\n        past month activity\n      </div>\n      <div>\n        <img src=\"assets/entity-4.png\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row-2\">\n    <div class=\"col-1\">\n      <div class=\"video-box\" style=\"margin-left: 0;\">\n        <div class=\"firstSubTitle\">\n          link analysis\n        </div>\n        <div>\n          <img src=\"assets/entity-3.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2\">\n      <div class=\"row2-1\">\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle\">\n            top intel news\n          </div>\n          <div>\n            <img src=\"assets/entity-5.png\">\n          </div>\n        </div>\n        <div class=\"video-box\" style=\"width: 200%;\">\n          <div class=\"firstSubTitle\">\n            who against who\n          </div>\n          <div>\n            <img src=\"assets/entity-7.png\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row2-2\">\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle\">\n            activity geolocations\n          </div>\n          <div>\n            <img src=\"assets/entity-2.png\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-3\">\n    <div class=\"video-box\">\n      <div class=\"firstSubTitle\">\n        information box\n      </div>\n      <div>\n        <img src=\"assets/entity-1.png\">\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/entity/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EntityComponent = (function () {
    function EntityComponent() {
    }
    return EntityComponent;
}());
EntityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'entity',
        styles: [__webpack_require__("../../../../../src/app/entity/entity.component.css")],
        template: __webpack_require__("../../../../../src/app/entity/entity.component.html")
    })
], EntityComponent);

//# sourceMappingURL=entity.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  border-radius: 5px;\n\n  width: 100%;\n  height: 41px;\n  transition: width 0.4s ease-in-out;\n  background: rgba(0,0,0,.3);\n  border: none;\n  outline: none;\n  color: white;\n  padding-left: 20px;\n  font-size: 120%;\n  line-height: 120%;\n  font-family: \"Roboto\", sans-serif;;\n}\n\ninput[type=text]::-webkit-input-placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]:-ms-input-placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]::placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]:focus {\n  width: 100%;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  cursor: pointer;\n  display: block;\n  margin: 0 auto;\n}\n\n.divInRow {\n  display: inline-block;\n}\n\ntd {\n  padding-right: 2%;\n}\n\n.searchIcon {\n  font-size: 33px;\n}\n\n.mainTable {\n  border-spacing: 26px;\n  border-collapse: separate;\n  margin: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\nvideo {\n  width: 100%;\n}\n\n.firstSubTitle {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 2%;\n  margin-bottom: 4%;\n  padding-left: 3%;\n  display: block;\n}\n\n.col-1 {\n  width: 40%;\n  margin-right: .5%;\n}\n\n.col-2 {\n  width: 59%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.row-1 {\n  width: 100%;\n  margin-left: .5%;\n}\n\n.row-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.video-box {\n  margin-left: 1%;\n  background: rgba(7, 26, 33, 0.7);\n  border-radius: .2vw;\n  width: 100%;\n  margin-bottom: 1%;\n  border: 1px rgba(255,255,255,.3) solid;\n  position: relative;\n}\n\n.tooltip:before {\n  content: '';\n  display: block;\n  padding: 4px 20px;\n  border: 1px rgba(255,255,255,.3) solid;\n  border-radius: 5px;\n  color: white;\n  background: rgba(20, 39, 55, .95);\n  opacity: 0;\n  transition: all .3s ease-in-out;\n  direction: rtl;\n  text-align: right;\n  position: absolute;\n  width: 90%;\n  right: 50%;\n  -webkit-transform: translate(50%);\n          transform: translate(50%);\n  top: -40px;\n}\n\n.tooltip:hover:before {\n  opacity: 1;\n}\n\n.yemen:before {\n  content: '\\627\\644\\627\\633\\62A\\642\\631\\627\\631   \\627\\644\\64A\\645\\646\\64A';\n}\n\n.america:before {\n  content: '\\627\\644\\645\\634\\627\\631\\643\\629   \\627\\644\\623\\645\\631\\64A\\643\\64A\\629   \\641\\64A   \\627\\644\\634\\631\\642   \\627\\644\\623\\648\\633\\637\\202C\\202C';\n}\n\n.terror:before {\n  content: '\\627\\644\\625\\631\\647\\627\\628   \\641\\64A   \\627\\644\\62E\\644\\64A\\62C';\n}\n\n.saudi:before {\n  content: '\\627\\644\\645\\645\\644\\643\\629   \\627\\644\\639\\631\\628\\64A\\629   \\627\\644\\633\\639\\648\\62F\\64A\\629\\202C\\202C';\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTable\">\n  <div class=\"col-1\">\n    <div class=\"video-box\">\n      <div>\n        <a [routerLink]=\"['/reporter']\" class=\"firstSubTitle tooltip terror\">\n          Terror in the gulf\n        </a>\n      </div>\n      <div>\n        <video loop autoplay>\n          <source src=\"assets/movie.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n    <div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          Economic Growth factors & Oil\n        </div>\n        <div>\n          <img src=\"assets/2.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-2\">\n    <div class=\"row-1\">\n      <div class=\"grid-item\">\n        <input (keyup.enter)=\"moveRoute();\" #item name=\"search\" placeholder=\"Search..\" type=\"text\" style=\"\">\n      </div>\n    </div>\n    <div class=\"row-2\">\n      <div class=\"col2-1\">\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle tooltip america\">\n            trump and american involvement\n          </div>\n          <div>\n            <img src=\"assets/3.png\">\n          </div>\n        </div>\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle tooltip saudi\">\n            appointments in saudi arabia\n          </div>\n          <div>\n            <img src=\"assets/5.png\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col2-2\">\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle tooltip yemen\">\n            stability in yemen\n          </div>\n          <div>\n            <img src=\"assets/4.png\">\n          </div>\n        </div>\n        <div class=\"video-box\">\n          <div class=\"firstSubTitle\">\n            future challenges & state of mind\n          </div>\n          <div>\n            <img src=\"assets/6.png\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
        this.router = router;
        this.name = 'dani';
    }
    HomeComponent.prototype.moveRoute = function () {
        this.router.navigate(["/itemsList"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'home',
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/itemsList/itemsList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "input[type=text] {\n  border-radius: 5px;\n\n  width: 100%;\n  height: 41px;\n  transition: width 0.4s ease-in-out;\n  background: rgba(0, 0, 0, .3);\n  border: none;\n  outline: none;\n  color: white;\n  padding-left: 20px;\n  font-size: 120%;\n  line-height: 120%;\n  font-family: \"Roboto\", sans-serif;\n}\n\ninput[type=text]::-webkit-input-placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]:-ms-input-placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]::placeholder {\n  color: white;\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n}\n\ninput[type=text]:focus {\n  width: 100%;\n}\n\n.summarize {\n  font-family: \"Roboto\", sans-serif;\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  color: white;\n  font-size: 115%;\n  background: rgba(63, 71, 136, .5);\n  border: 2px rgba(255, 255, 255, .2) solid;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-transform: uppercase;\n  margin-left: 1%;\n  border-radius: .5vw;\n  transition: all .3s ease-in-out;\n}\n\n.summarize:hover {\n  background: rgba(63, 71, 136, .8);\n  font-size: 120%;\n}\n.searchIcon {\n  font-size: 33px;\n}\n\n.mainTable {\n  border-spacing: 26px;\n  border-collapse: separate;\n  display: block;\n  margin: auto;\n  width: 84%;\n}\n\n.headline {\n  font-size: 18px;\n  font-family: 'Roboto', sans-serif;\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n}\n\n.listitem {\n  font-size: 18px;\n  font-family: 'Roboto', sans-serif;\n  color: rgb(249, 253, 253);\n  text-transform: none;\n}\n\n.item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 2%;\n  transition: all .3s ease-in-out;\n  margin-right: 2%;\n  border-top: 1px rgba(255, 255, 255, .2) solid;\n  border-bottom: 1px rgba(255, 255, 255, .2) solid;\n}\n\n.item span:first-child {\n  color: #8db6de;\n}\n\n.item span + span {\n  margin-left: 5%;\n}\n\n.itemTitle {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(253, 254, 254);\n  text-transform: uppercase;\n}\n\n.itemText {\n  font-size: 14px;\n  font-family: \"Roboto\";\n  color: rgb(255, 255, 255);\n}\n\n.selectedItemClass {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.info-box {\n  width: 96%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 1%;\n  margin-top: 1%;\n  font-family: 'Roboto', sans-serif;\n}\n\n.table {\n  height: 100%;\n  margin-left: 1%;\n  display: table;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n\n.table > div {\n  display: table-row;\n  height: 15%;\n}\n\n.table > div > span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.table > div > span:first-child {\n  color: #8db6de;\n  text-transform: uppercase;\n}\n\n.table > div > span:last-child {\n  padding-left: 2%;\n}\n\n.summary-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 240px;\n  border-top: 1px solid rgba(255, 255, 255, .3);\n  border-bottom: 1px solid rgba(255, 255, 255, .3);\n  padding-bottom: 1%;\n  margin-bottom: 1%;\n}\n\n.summary-container > div:first-child {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.summary-container img {\n  max-width: 100%;\n  max-height: 100%;\n  height: auto;\n  display: block;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/itemsList/itemsList.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display: flex; justify-content: space-between; width: 96%; margin: 0 auto\">\n  <div _ngcontent-c1=\"\" style=\"width:100%;\">\n    <form (keyup.enter)=\"sayMyName\">\n      <input _ngcontent-c1=\"\" name=\"search\" placeholder=\"Search..\" type=\"text\" style=\"\" value=\"Yemen Terror\">\n    </form>\n  </div>\n  <div [routerLink]=\"['/reporter2']\" class=\"summarize\">\n    summarize\n  </div>\n</div>\n<div class=\"info-box\">\n  <div style=\"width: 15%\">\n    <div class=\"headline\">\n      <div>\n        <div style=\"display:flex;justify-content:space-between\">\n          <div>Sources</div>\n          <div style=\"text-decoration: underline; text-transform: lowercase\" (click)=\"filter()\">Filter</div>\n        </div>\n        <div class=\"listitem\" *ngFor=\"let value of sources\" style=\"margin-bottom: 2%\">\n          <input style=\"margin-right: 3%\" type=\"checkbox\" [(checked)]=\"value.isChecked\" /> {{value.name}}\n        </div>\n      </div>\n      <div style=\"margin-top: 8%\">\n        Related orgs.\n        <div class=\"listitem\" *ngFor=\"let value of relatedOrgs\" style=\"margin-bottom: 2%\">\n          <input style=\"margin-right: 3%\" type=\"checkbox\" [(checked)]=\"value.isChecked\" /> {{value.name}}\n        </div>\n      </div>\n      <div style=\"margin-top: 8%\">\n        time of content\n        <div class=\"listitem\" *ngFor=\"let value of timeOfContent\" style=\"margin-bottom: 2%\">\n          <input style=\"margin-right: 3%\" type=\"checkbox\" [(checked)]=\"value.isChecked\" /> {{value.name}}\n        </div>\n      </div>\n      <div style=\"margin-top: 8%\">\n        related entity\n        <div class=\"listitem\" *ngFor=\"let value of relatedEntity\" style=\"margin-bottom: 2%\">\n          <input style=\"margin-right: 3%\" type=\"checkbox\" [(checked)]=\"value.isChecked\" /> {{value.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 25% \">\n    <div *ngFor=\"let value of getItemList(); let i = index\" [ngClass]=\"i === selectedItem ? 'selectedItemClass item' : 'item'\"\n      (click)=\"changeSelected(i)\">\n      <span>{{getDate(value)}}</span><span>\n          {{value.Title}}\n        </span>\n    </div>\n  </div>\n  <div style=\"width: 60% \">\n    <div class=\"itemTitle\">\n      {{getSelectedItem().Title}}\n    </div>\n    <div class=\"summary-container\">\n      <div><img src=\"assets/{{getSelectedItem().Picture}}\" /></div>\n      <div class=\"table\">\n        <div>\n          <span>Publish Time:</span><span>{{getSelectedItem()['Publish Time']}}</span>\n        </div>\n        <div>\n          <span>Source:</span><span>{{getSelectedItem().Source}}</span>\n        </div>\n        <div>\n          <span>EEI:</span><span>{{getSelectedItem().EEI}}</span>\n        </div>\n        <div>\n          <span>Person:</span><span>{{getSelectedItem().Person}}</span>\n        </div>\n        <div>\n          <span>Location:</span><span>{{getSelectedItem().Location}}</span>\n        </div>\n        <div>\n          <span>Organization:</span><span>{{getSelectedItem().Organization}}</span>\n        </div>\n        <div>\n          <span>Keyphrases:</span><span>{{getSelectedItem().KeyPhrases}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"itemText\">\n      {{getSelectedItem().Text}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/itemsList/itemsList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsListComponent = (function () {
    function ItemsListComponent() {
        this.getDate = function (Object) { return Object; };
        this.filtered = false;
        this.sources = [
            { isChecked: false, name: 'Osint' },
            { isChecked: false, name: 'Social Networks' },
            { isChecked: false, name: 'Academic Research' },
            { isChecked: false, name: 'Sigint' },
            { isChecked: false, name: 'Cyber' },
            { isChecked: false, name: 'Visint' },
            { isChecked: false, name: 'Humint' },
        ];
        this.relatedOrgs = [
            { isChecked: false, name: 'IS/ISIS' },
            { isChecked: false, name: 'Al-Qeda/AQAP' },
            { isChecked: false, name: 'Jahabat al nusra' },
            { isChecked: false, name: 'Houthis' },
            { isChecked: false, name: 'Southern Movement' },
        ];
        this.timeOfContent = [
            { isChecked: false, name: 'Last 24 hours' },
            { isChecked: false, name: 'Last week' },
            { isChecked: false, name: 'Last month' },
            { isChecked: false, name: 'Last year' },
        ];
        this.relatedEntity = [
            { isChecked: false, name: 'Abu Bilal Al-Harbi ' },
            { isChecked: false, name: 'Abu Bakr al-Baghdadi' },
            { isChecked: false, name: 'Nasir al-Wuhayshi' },
            { isChecked: false, name: 'Qasim al-Raymi' },
        ];
        this.getDate = function (val) {
            var d = new Date(val['Publish Time']);
            return d.toLocaleDateString();
        };
        this.selectedItem = 0;
        this.itemList = [
            {
                Title: 'In pictures: ISIS training snipers for attacks in Yemen',
                Brief: 'ISIS is training sniper units in a military camp set up in Yemen’s Al Bayda province',
                Text: 'The Islamic State (ISIS) is training sniper units in a military camp set up in Yemen’s Al Bayda province. Pictures show nine graduates of a sniper training programm in Qifah area, equipped with sniper rifles and ghillie suits.\n\nAl Bayda, though mostly controlled by Houthis and Yemen’s Sana’a based Popular Committee, has recently seen an increase of Al Qaeda and ISIS led aussaults against the Yemenite forces. Images of previous attacks indicate that especially ISIS uses a widespread underground network for it’s operations in the region.\n\nWhile the Houthis together with the Yemenite military face off against the Saudi led coalition along Yemen’s north-western border to Saudi Arabia, an reportedly lost the Republican Palace in Yemen’s southern province Taiz to the coalition, the perpetual attacks in the Al Bayda Governorate in central Yemen also threaten the south-eastern borders of the Popular Committee’s territory.',
                'Publish Time': '2017-06-05T00:06',
                Source: 'al-Masdar News',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: [''],
                Location: ['Yemen'],
                Organization: ['Islamic State', 'ISIS'],
                KeyPhrases: ['Saudi Arabia'],
                Picture: ['yemen terror english 5.jpg'],
            },
            {
                Title: 'AQAP leader calls for ‘simple’ attacks in the West',
                Brief: 'Qasim al-Raymi, the emir of AQAP, wants jihadists in the West to carry out “easy and simple” attacks. His message was delivered in a short video that was released online by AQAP’s propaganda arm.',
                Text: 'Qasim al Raymi, the emir of Al Qaeda in the Arabian Peninsula (AQAP), wants jihadists in the West to carry out “easy and simple” attacks. His message was delivered in a short video (just over 5 minutes long) that was released online yesterday by AQAP’s propaganda arm, Al Malahem Media.\n\nRaymi addresses the “patient” jihadists “living in the Western countries” and he argues they should be viewed as part of a cohesive, global cause.\n\n“My Mujahid brother, we do not view you as an individual – even though it is referred to as Individual Jihad,” Raymi says. “We rather view you as a group, a brigade, or even an army in itself.”\n\nRaymi says he and others “wish” they “had an army” in the West to carry out operations, but jihadists who act on their own “are that army.”\n\n“And it is important to view yourself from this angle, that you are part of this Ummah [community of worldwide Muslims], a part of this body,” Raymi says. “If any part of the body is not well, then the whole body shares the sleeplessness and fever with it.”\n\nThe AQAP chief continues: “We are a single united body, and today this body is in pain in many places. And you are situated in a place where you can harm our enemy. And so it is upon you to carry out that role.”\n\nRaymi emphasizes that the actions of individual jihadists are connected to the wars being fought by their ideological brethren overseas. He notes that their enemies “continuously carry out thousands of operations on a daily basis” and invites Muslims in the West to see themselves as members of the same families struck abroad. “We are a single united body,” Raymi says. “An American Muslims is the same as a Yemeni Muslim, and a Yemeni Muslim is the same as an Australian Muslim. We do not believe in nationalism; we believe in Islam.”\n\nIn this context, Raymi mentions a series of wars and clashes that he considers to be a part of the same broader struggle, including the Israeli-Palestinian conflict, as well as the wars in Afghanistan, the Arabian Peninsula, Iraq, and Syria. Raymi then asks: “If every operation against the Muslims were to be retaliated by a single Muslim living in the West and result[ed] in the killing of many Americans, then what do you think will happen (as a result)?” The goal is to make “the enemy think twice about his actions,” Raymi says.\n\nAQAP forced to praise operations conducted by Islamic State supporters\n\nAQAP was an early innovator when it comes to inspiring individual jihadists to strike on their own without formal training abroad. Other ideologues had espoused the concept previously, but Anwar al Awlaki, an AQAP leader, was the chief advocate of such operations at the time of his death in a US drone strike in Sept. 2011. Awlaki and his comrades founded the English-language Inspire magazine, which is largely devoted to encouraging “lone mujahid” to lash out in the West.\n\nAs the Islamic State rose to prominence beginning in 2014, however, AQAP was eclipsed as the main instigator of “lone mujahid” attacks. Many of the small-scale terror plots carried out in recent years have involved supporters of Abu Bakr al Baghdadi’s caliphate, or were claimed by the Islamic State as the work of its “soldiers.” In some cases, ties to the Islamic State organization are nebulous, or non-existent, but counterterrorism officials have found connections (even if only online) or evidence of inspiration in many cases.\n\nTherefore, Raymi’s speech could be viewed as part of AQAP’s attempt to reclaim the narrative when it comes to inspiring “lone mujahid” attacks. His talk is branded as an “Inspire” production. Still, the Islamic State’s success in amplifying AQAP’s original concept looms large.\n\nIndeed, the only example of an individual jihadist cited by Raymi is Omar Mateen, who repeatedly swore allegiance to Baghdadi during his night of terror in June 2016. Mateen was reportedly exposed to Anwar al Awlaki’s teachings online. But like a number of other individual plotters who were first drawn to AQAP’s messaging, Mateen became infatuated with the idea of striking in the name of the so-called caliphate.\n\nRaymi ignores Mateen’s oath of fealty to Baghdadi, as AQAP has rejected the Islamic State’s caliphate declaration.\n\n\n\n“If you sacrifice and expect reward from Allah, then you can do great things,” Raymi says. The AQAP emir continues: “Our brother, Omar Mateen — May Allah accept him and elevate his status high — when he executed his blessed operation…how many smiles do you think he drew on the faces of the widows, orphans and Mujahideen all over? Today, the Muslim Ummah only hears of tragedy after tragedy facing it. Yet it is you who (can) draw a smile in their face. And if making a Muslim smile is a charity, then what about drawing a smile upon thousands and millions of Muslims?” Raymi points to his own smile while making this point. (See the screen shot above.)\n\nRaymi uses the example set by Mateen to draw lessons for his listeners: “Don’t complicate matters, take it easy and simple, the same as our brother Omar Mateen did, he took an AK-47 [sic] and headed towards their gatherings and attacked them.”\n\n“If such operations were to continue whenever there is a tragedy upon Muslims, we will be transferring the tragedy back to them, and it will be an eye for an eye,” Raymi argues.\n\nAQAP has previously praised Omar Mateen’s shooting rampage. The group released an “Inspire Guide” explaining the supposed benefits of the massacre from the jihadists’ perspective. But AQAP also argued that Mateen’s choice of target – a LGBT nightclub in Orlando – confused matters by drawing attention away from the jihadists’ cause.\n\n“The executor [Mateen] specifically chose a homosexual nightclub, and even though the killing of such people is the most binding duty and closer to human nature, [it is better] to avoid targeting areas where minorities are found,” AQAP’s propagandists wrote last year in their “Inspire Guide” for the Orlando attack. AQAP worried that the target took away from the “essence of the operation.” AQAP’s guide continued: “The Western media focused on the testimony by Mateen’s father who said that his son hates homosexuals and the terrorist ideas had no place in his motives. The media reiterated this, saying that Omar saw some homosexuals kissing each other and that such a scene offended him. The media tried to portray the operation motives to be against a particular group of people in order to turn the American public away from the real motives of the operation.”\n\nAQAP also argued that Mateen erred by targeting a nightclub where “most of the individuals present…were Latino.” It “is better to avoid targeting places and crowds where minorities are generally found in America” and jihadists should instead target “areas where the Anglo-Saxon community is generally concentrated,” because this “class of the American community is the majority and it is the one that is in the American leadership.”\n\nThis critique of Mateen’s mass murder – that he should have chosen a target that didn’t muddy the jihadist motivation – is entirely missing from Raymi’s speech.\n\nAQAP has, at times, encouraged followers to carry out more targeted slayings. For instance, the 15th issue of Inspire, released in the Spring of 2016, was dedicated to “Professional Assassinations.” The cover story advocated “precision in choosing the target from the beginning to the time of execution,” and the group also published a list of “economic personalities” whose murder would garner much attention. AQAP was behind the targeted strike on Charlie Hebdo’s offices in Paris in Jan. 2015. Inspire had previously listed Charlie Hebdo’s employees as legitimate targets, because they had supposedly offended Islam.\n\nTo be sure, AQAP has promoted less precise attacks throughout its history, including first advocating the use of trucks and other vehicles in indiscriminate killings. And the “Professional Assassinations” edition of Inspire also contained an article encouraging the use of knives in attacks inside the US (“O Knife Revolution, Head Towards America”), just as they have been employed against Jews in Israel.\n\nBut AQAP has also been encouraging followers to pursue more complex operations, such as using magnetic car bombs against high-profile individuals. AQAP may very well continue to provide innovative terrorist ideas along these lines, but it is telling that Raymi avoids all of this, telling would-be followers not to “complicate matters, take it easy and simple.”\n\nIn addition to the June 2016 Orlando massacre, AQAP has praised other attacks that were inspired, or claimed by the Islamic State.\n\nFor example, in Inspire and the Inspire Guides, AQAP has lauded: the truck attack on Bastille Day in Nice, France last year; the Sept. 2016 stabbings at a mall in Minnesota; and the vehicular assault near the British parliament in March.\n\nIn another Inspire Guide, Raymi’s men decried the arrests of women who were allegedly preparing to carry out a jihadist operation in France on behalf Baghdadi’s self-declared caliphate. AQAP advised “brothers in the west not to allow our Muslim sisters to participate in any lone jihad operation” – a recommendation some in the Islamic State’s network are likely to ignore. AQAP has also endorsed the bombings in New Jersey and New York last September. The bombings were carried out by a jihadist who cited Osama bin Laden, Awlaki and the Islamic State’s spokesman in his notebook. It was that same spokesman, Abu Muhammad al Adnani, who helped the Islamic State amplify AQAP’s “lone mujahid” concept by stressing the necessity of striking in the name of the so-called caliphate.\n\nTherefore, AQAP has been forced to praise terrorist anti-Western attacks carried out in the name of their rivals in the Islamic State. This cannot sit well with Raymi and the al Qaeda loyalists around him.\n\nRaymi’s video is a rare, direct appeal by the AQAP leader to jihadists in the West. He clearly seeks to move AQAP back into the fore of the “lone mujahid” effort.\n\n“If you are true to Allah and seek his assistance, then he will never neglect you,” Raymi tells his audience. “You will be greatly rewarded for [alleviating] the distrust of your Mujahideen brothers everywhere and be an example of brotherhood and the spirit of unity.”',
                'Publish Time': '2017-05-08T10:21',
                Source: 'Long War Journal',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Abu Bakr al-Baghdadi', 'Abu Muhammad al-Adnani', 'Ayman al-Zawahiri', 'Anwar al-Awlaki'],
                Location: ['Yemen'],
                Organization: ['AQAP', 'Islamic State'],
                KeyPhrases: ['Inspire Magazine'],
                Picture: ['yemen terror english 4.jpg'],
            },
            {
                Title: 'From "caliph" to fugitive: IS leader Baghdadi\'s new life on the run',
                Brief: 'al-Baghdadi "has become nervous and very careful in his movements; his circle of trust has become even smaller."',
                Text: 'Islamic State leader Abu Bakr al-Baghdadi is on the brink of losing the two main centres of his \'caliphate\' but even though he is on the run, it may take years to capture or kill him, officials and experts said.\n\nIslamic State fighters are close to defeat in the twin capitals of the group\'s territory, Mosul in Iraq and Raqqa in Syria, and officials say Baghdadi is steering clear of both, hiding in thousands of square miles of desert between the two.\n\n"In the end, he will either be killed or captured, he will not be able to remain underground forever," said Lahur Talabany, the head of counter-terrorism at the Kurdistan Regional Government, the Kurdish autonomous region in northern Iraq. "But this is a few years away still," he told Reuters.\n\nOne of Baghdadi\'s main concerns is to ensure those around him do not betray him for the $25 million reward offered by the United States to bring him "to justice", said Hisham al-Hashimi, who advises Middle East governments on Islamic State affairs.\n\n"With no land to rule openly, he can no longer claim the title caliph," Hashimi said. "He is a man on the run and the number of his supporters is shrinking as they lose territory."\n\nIraqi forces have retaken much of Mosul, the northern Iraqi city the hardline group seized in June 2014 and from which Baghdadi declared himself "caliph" or leader of all Muslims shortly afterwards. Raqqa, his capital in Syria, is nearly surrounded by a coalition of Syrian Kurdish and Arab groups.\n\nThe last public video footage of him shows him dressed in black clerical robes declaring his caliphate from the pulpit of Mosul\'s medieval Grand al-Nuri mosque back in 2014.\n\nBorn Ibrahim al-Samarrai, Baghdadi is a 46-year-old Iraqi who broke away from al-Qaeda in 2013, two years after the capture and killing of the group\'s leader Osama bin Laden.\n\nHe grew up in a religious family, studied Islamic Theology in Baghdad and joined the Salaafi jihadist insurgency in 2003, the year of the US-led invasion of Iraq. He was caught by the Americans who released him about a year later as they considered him then as a civilian rather than a military target.\n\nBOUNTY\n\nHe is shy and reserved, Hashimi said, and has recently stuck to the sparsely populated Iraq-Syria border where drones and strangers are easy to spot.\n\nThe U.S. Department of State\'s Counter-Terrorism Rewards Program had put the same $25 million bounty on Bin Laden and Iraqi former president Saddam Hussein and the reward is still available for Bin Laden\'s successor, Ayman al-Zawahiri.\n\nNeither Saddam nor Bin Laden were voluntarily betrayed, but the bounties complicated their movements and communications.\n\n"The reward creates worry and tension, it restricts his movements and limit the number of his guards," said Fadhel Abu Ragheef, a Baghdad-based expert on extremist groups. "He doesn\'t stay more than 72 hours in any one place."\n\nBaghdadi "has become nervous and very careful in his movements", said Talabany, whose services are directly involved in countering Islamic State plots. "His circle of trust has become even smaller."\n\nHis last recorded speech was issued in early November, two weeks after the start of the Mosul battle, when he urged his followers to fight the "unbelievers" and "make their blood flow as rivers".\n\nU.S. and Iraqi officials believe he has left operational commanders behind with diehard followers to fight the battles of Mosul and Raqqa, to focus on his own survival.\n\nIt is not possible to confirm his whereabouts.\n\nBaghdadi does not use phones and has a handful of approved couriers to communicate with his two main aides, Iyad al-Obaidi, his defence minister, and Ayad al-Jumaili, in charge of security. There was no confirmation of an April 1 Iraqi state TV report that Jumaili had been killed.\n\nBaghdadi moves in ordinary cars, or the kind of pick-up trucks used by farmers, between hideouts on both sides of the Iraqi-Syrian border, with just a driver and two bodyguards, said Hashimi.\n\nThe region is well known to his men as the hotbed of the Sunni insurgency against U.S. forces that invaded Iraq and later the Shi\'ite-led governments that took over the country.\n\nAt the height of its power two years ago, Islamic State ruled over millions of people in territory running from northern Syria through towns and villages along the Tigris and Euphrates river valleys to the outskirts of the Iraqi capital Baghdad.\n\nIt persecuted non-Sunnis and even Sunnis who did not agree with its extreme version of Islamic law, with public executions and whippings for violating strict controls on appearance, behaviour and movement.\n\nBut the group has been retreating since in the face of a multitude of local, regional and international forces, driven into action by the scores of deadly attacks around the world that it has claimed or inspired.\n\nA few hundred thousand people now live in the areas under the group\'s control, in and around Raqqa and Deir al-Zor, in Syria\'s east, and in a few pockets south and west of Mosul. Hashimi said Islamic State was moving some fighters out of Raqqa before it was encircled to regroup in Deir al-Zor.\n\nMosul, with pre-war population of 2 million, was at least four times the size of any other the group has held. Up to 200,000 people are still trapped in the Old City, Islamic State\'s besieged enclave in Mosul, lacking supplies and being used as human shields to obstruct the progress of Iraqi forces by a U.S-led international coalition.\n\nThe Syrian Democratic Forces, made of Kurdish and Arab groups supported by the U.S.-led coalition, began to attack Raqqa last week, after a months-long campaign to cut it off.\n\nThe militants are also fighting Russian and Iranian-backed forces in Syria loyal to President Bashar al-Assad, and mainly Sunni Muslim Syrian rebels backed by Turkey.\n\nThe last official report about Baghdadi was from the Iraqi military on Feb. 13. Iraqi F-16s carried out a strike on a house where he was thought to be meeting other commanders, in western Iraq, near the Syrian border, it said.\n\nOverall, Islamic State has 8,000 fighters left, of which 2,000 are foreigners from other Arab states, Europe, Russia and central Asia, said Abu Ragheef.\n\n"A small number compared to the tens of thousands arrayed against them in both countries, but a force to be reckoned with, made up of die-hards with nothing to lose, hiding in the middle of civilians and making extensive use of booby traps, mines and explosives," he said.\n\nThe U.S. government has a joint task force to track down Baghdadi which includes special operations forces, the CIA and other U.S. intelligence agencies as well as spy satellites of the National Geospatial Intelligence Agency.\n\nIt will take more than that to erase his influence, Talabany said. "He is still considered the leader of ISIL and many continue to fight for him; that hasn\'t changed drastically," he said, using one of Islamic State\'s acronyms.\n\nEven if killed or captured, he added, "his legacy and that of ISIL will endure unless radical extremism is tackled."',
                'Publish Time': '2017-06-14T10:21',
                Source: 'Reuters',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Abu Bakr al-Baghdadi', 'Osama bin Laden', 'Ayman al-Zawahiri', 'Saddam Hussein', 'Iyad al-Obaidi', 'Ayad al-Jumaili'],
                Location: ['Iraq', 'Syria'],
                Organization: ['Kurdistan Regional Government', 'al-Qaeda', 'Islamic State', 'U.S government', 'CIA', 'ISIL'],
                KeyPhrases: [''],
                Picture: ['yemen terror english 3.jpg'],
            },
            {
                Title: "Al Qaeda's second in command killed in Yemen strike; successor named",
                Brief: "Al Qaeda's second in command, Nasir al-Wuhayshi, has been killed in a drone strike in Yemen, dealing a heavy setback to the leadership of the international terrorist group.",
                Text: "Al Qaeda's second in command, Nasir al-Wuhayshi, has been killed in a drone strike in Yemen, dealing a heavy setback to the leadership of the international terrorist group.\n\nAl-Wuhayshi was the top leader of al Qaeda in the Arabian Peninsula, or AQAP, one of the most dangerous and dynamic branches of the jihadist network.\nHis death is \"the biggest blow against al Qaeda since the death of (Osama) bin Laden,\" said CNN terrorism analyst Paul Cruickshank.\nAl-Wuhayshi was al Qaeda's \"leading light\" and was one day expected to take over from its current global chief, Ayman al-Zawahiri, said Cruickshank.\nTwo Yemeni security officials told CNN on Monday that al-Wuhayshi was killed Friday in a suspected U.S. drone strike in Yemen's Hadhramaut region.\nOn Tuesday, AQAP released a video statement announcing that its leader and two aides had died. The speaker said that al-Wuhayshi would be succeeded by the group's military chief, Qasm al-Rimi, also known as Abu Hureira al-Sanaani.\n\n'Leadership matters'\nThe U.S. government confirmed al-Wuhayshi's fate Tuesday, calling his death \"a major blow to (al Qaeda's) most dangerous affiliate and to al Qaeda more broadly.\"\nAl-Wuhayshi \"was responsible for the deaths of innocent Yemenis and Westerners, including Americans,\" U.S. National Security Council spokesman Ned Price said.\n\nReport: Head of al Qaeda in Yemen killed 01:49\n\"While AQAP, al Qaeda and their affiliates will remain persistent in their efforts to threaten the United States, our partners and our interests, (al-Wuhayshi's) death removes from the battlefield an experienced terrorist leader and brings us closer to degrading and ultimately defeating those groups.\"\nAl-Wuhayshi, known as al Qaeda's crown prince, was a charismatic figure who was adored by many of the terrorist group's jihadist fighters.\nIn a video that surfaced in April of last year, al-Wuhayshi appeared brazenly out in the open, greeting followers in Yemen, the impoverished nation that the organization uses as a base.\nIn a speech to the group, he makes it clear that he's going after the United States, saying: \"We must eliminate the cross. ... The bearer of the cross is America!\"\nThe video showed what looked like the largest and most dangerous gathering of al Qaeda in years.\n\nSuccessor seen as 'brains of the operation'\nOriginally from Yemen, al-Wuhayshi assumed command of AQAP in 2009. He'd escaped a Yemeni prison in 2006 and had previously worked as a personal secretary for Osama bin Laden.\nHis successor is also seen as a formidable leader.\n\"Qasm al-Rimi was considered the brains of the operation,\" Cruickshank said. \"For more than a decade, he's really been at the helm of the military side of things for AQAP but also planning their large international operations.\"\nThe leadership change is expected to bring \"a degree of continuity,\" he said, noting that al-Wuhayshi and al-Rimi were believed to have worked very closely together.\n\nAQAP benefiting from Yemen chaos\nAl-Wuhayshi's death comes at a time when AQAP appears to have been thriving amid the recent turmoil in Yemen.\n\nThe group has been \"expanding the territory they control, taking advantage of political chaos,\" Cruickshank said.\nAQAP has been feeding off anger among Sunni tribes in Yemen over the advances made by the predominantly Shiite Houthi rebels who overthrew the Yemeni government earlier this year.\nAdding to the violence and destruction, a Saudi-led coalition has been bombing the Houthis and their allies in an effort to restore the deposed government.\nAQAP has exploited the unrest to seize more turf, including the port city of Al Mukalla, where it freed hundreds of inmates from a prison in April.\nThe Yemeni security officials told CNN that the drone strike that killed al-Wuhayshi took place in southern Al Mukalla.\n\n'This is a long, difficult struggle'\nYemen's descent into chaos prompted the United States to pull out its Special Operations forces based in the country in March, raising fears that its counterterrorism efforts against AQAP would be hobbled.\nBut al-Wuhayshi's death and an airstrike in April that killed a senior AQAP leader show that Yemen is no haven for the terrorist group.\nU.S. Sen. Angus King, an independent from Maine, told CNN on Monday that the terrorist leader's death would hurt al Qaeda, but he stressed that the jihadist network still poses a threat.\n\"This is a long, difficult struggle that we're engaged in, and it's going to require all kinds of tools,\" he said.\nNews of al-Wuhayshi's death emerged days after U.S. planes carried out a strike inside Libya, purportedly killing a key terror figure in North Africa.\nThe target was Mokhtar Belmokhtar, a veteran Islamist fighter who is blind in one eye and affiliated with al Qaeda in North Africa, a U.S. official told CNN.\nThe Libyan government said Belmokhtar was killed in the weekend strike, something that U.S. officials have not confirmed.\nSenior AQAP leader Nasr Ibn Ali al-Ansi killed",
                'Publish Time': '2015-06-16T17:53',
                Source: 'CNN',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Nasir al-Wihayshi', 'Osama bin Laden', 'Ayman al-Zawahiri', 'Qasim al-Raymi', 'Mokhtar Belmokhtar'],
                Location: ['Yemen'],
                Organization: ['U.S National Security Council', 'AQAP', 'al-Qaeda', 'al-Qaeda in North Africa'],
                KeyPhrases: ['Shiite Houthi'],
                Picture: ['yemen terror english 2.jpg'],
            },
            {
                Title: "This Man Is The Leader In ISIS's Recruiting War Against Al-Qaeda In Yemen",
                Brief: 'BuzzFeed News has identified the leader of ISIS in Yemen, which is proving itself bloodier and more violent than AQAP.',
                Text: 'The first body dangled over the side of the bridge, facing back toward town in a bloody shirt and cutoff blue shorts. A mile inland, along a narrow canal that ran through the heart of al-Mukalla, a port city in eastern Yemen, a second body hung down off another bridge, mirroring the first. Both men had been executed earlier in the day by al-Qaeda in the Arabian Peninsula in a beachfront show trial, and then roped to wooden beams and left to hang in the sun. The pair, al-Qaeda announced through loudspeakers that canvassed the city, were spies, spotters for the U.S. drone program.\n\nMore than three months into a brutal, eight-sided war that has ripped Yemen apart and sparked a humanitarian disaster of dengue fever and disease, al-Qaeda is under attack from all sides, losing leaders to drone strikes and recruits to ISIS.\n\nThe day before the executions, on June 17, a U.S. drone killed Nasir al-Wihayshi, AQAP\'s top commander. Barely a week later, news started to filter out of Yemen\'s tribal regions that another commander had defected to ISIS, taking several of his men with him.\n\nAQAP has been dodging U.S. drones for years, but the challenge from ISIS on its jihadi right is new and is being spearheaded by a man who goes by the name of Abu Bilal al-Harbi, who BuzzFeed News has identified as the top ISIS commander in Yemen.\n\nAlthough he is not well known, BuzzFeed News has confirmed with multiple sources familiar with the recruiting tactics of ISIS in Yemen that al-Harbi is accepting the oath of allegiance in Yemen on behalf of Abu Bakr al-Baghdadi, the ISIS caliph in Iraq. A Saudi national, whose real name appears to be Nasser al-Ghaydani, al-Harbi has a reputation in jihadi circles as a scholar of Islamic law. He is also a talented recruiter, and is making inroads in Yemen\'s tribal crescent that stretches from Marib and al-Bayda into Shabwa, an area that AQAP once considered privileged territory.\n\nISIS has only existed in Yemen since November 2014, when al-Baghdadi announced the creation of a local "state," but already it has proved itself bloodier and more violent than AQAP, which U.S. officials routinely describe as the most dangerous terrorist threat to the U.S.\n\nAQAP has "rules of engagement," noted Aaron Zelin, a research fellow at the Washington Institute for Near East Policy. The Islamic State doesn\'t, Zelin said. It "has no limit on targets."\n\nISIS made this point most forcefully with its initial attack in Yemen earlier this year, a coordinated suicide bombing of two mosques that killed more than 130 people in March. Video footage from outside the mosque showed one of the bombers, who had hid the explosives in a cast around his leg, receiving help from a worshipper as he hobbled toward the mosque. Minutes later the screen went blank as the bombs exploded.\n\nAl-Qaeda distanced itself from the attack, and has generally shied away from attacking mosques in Yemen, which have historically allowed Sunnis and Shiites to pray alongside one another. But as old wars bleed into new ones that produce ever more radical generations of fighters, this brutal, uncompromising approach seems to be at the heart of ISIS\'s appeal in Yemen. "If you were born after 1990 all you\'ve seen is war," said Farea al-Muslimi, a Yemeni scholar at the Carnegie Middle East Center in Beirut. "People have lost hope in peace and that helps groups like ISIS."\n\nThe Saudi air war, which started in March, has only hastened the country\'s decline. Last week the United Nations designated Yemen a "Level 3" humanitarian emergency, its most severe warning, putting the country in the same category as Iraq, Syria, and South Sudan. The months of violence, on top of years of simmering wars, has drastically altered the daily environment in Yemen. Attacks that once outraged now blend together in a steady stream of nearly indistinguishable horror. And this is the world in which ISIS thrives, out-recruiting al-Qaeda with the promise of fewer limits and more gruesome attacks.\n\nIn April, when al-Qaeda took over the eastern Yemeni port city of al-Mukalla, it looted banks and seized military equipment before turning much of the daily running of the city over to a council of local elders. Similarly, it has taken a conventional battlefield approach to confronting the Huthis, the Zaydi-Shi\'a group that controls much of what is left of Yemen\'s official bureaucracy. ISIS has felt no such restraint, using suicide bombers and car bombs to hit at soft Huthi targets like mosques and hospitals in the hopes of further igniting an Iraqi-style sectarian war. The latest attack, on June 29, killed 28 people, including several women who were attending a funeral.\n\n"AQAP, like Yemen, is at a crossroads," said Adam Baron, a visiting fellow at the European Council of Foreign Relations, who has extensive experience in the country. The challenge from ISIS may force AQAP to abandon the slow-moving, support-building project it has undertaken in recent years in favor of more frequent attacks. In the battle for the heart of the jihadi movement, as the apocalyptic wars in Iraq and Syria have shown, the most violent group usually wins.',
                'Publish Time': '2015-07-06T22:06',
                Source: 'BuzzFeed News',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Nasir al-Wihayshi', 'Abu Bakr al-Baghdadi', 'Abu Bilal al-Harbi'],
                Location: ['Yemen'],
                Organization: ['ISIS', 'AQAP', 'al-Qaeda'],
                KeyPhrases: [''],
                Picture: ['yemen terror english 1.jpg'],
            },
            {
                Title: 'In pictures: ISIS training snipers for attacks in Yemen',
                Brief: 'ISIS is training sniper units in a military camp set up in Yemen’s Al Bayda province',
                Text: 'The Islamic State (ISIS) is training sniper units in a military camp set up in Yemen’s Al Bayda province. Pictures show nine graduates of a sniper training programm in Qifah area, equipped with sniper rifles and ghillie suits.\n\nAl Bayda, though mostly controlled by Houthis and Yemen’s Sana’a based Popular Committee, has recently seen an increase of Al Qaeda and ISIS led aussaults against the Yemenite forces. Images of previous attacks indicate that especially ISIS uses a widespread underground network for it’s operations in the region.\n\nWhile the Houthis together with the Yemenite military face off against the Saudi led coalition along Yemen’s north-western border to Saudi Arabia, an reportedly lost the Republican Palace in Yemen’s southern province Taiz to the coalition, the perpetual attacks in the Al Bayda Governorate in central Yemen also threaten the south-eastern borders of the Popular Committee’s territory.',
                'Publish Time': '2017-06-05T00:06',
                Source: 'al-Masdar News',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: [''],
                Location: ['Yemen'],
                Organization: ['Islamic State', 'ISIS'],
                KeyPhrases: ['Saudi Arabia'],
                Picture: ['yemen terror english 5.jpg'],
            },
            {
                Title: 'AQAP leader calls for ‘simple’ attacks in the West',
                Brief: 'Qasim al-Raymi, the emir of AQAP, wants jihadists in the West to carry out “easy and simple” attacks. His message was delivered in a short video that was released online by AQAP’s propaganda arm.',
                Text: 'Qasim al Raymi, the emir of Al Qaeda in the Arabian Peninsula (AQAP), wants jihadists in the West to carry out “easy and simple” attacks. His message was delivered in a short video (just over 5 minutes long) that was released online yesterday by AQAP’s propaganda arm, Al Malahem Media.\n\nRaymi addresses the “patient” jihadists “living in the Western countries” and he argues they should be viewed as part of a cohesive, global cause.\n\n“My Mujahid brother, we do not view you as an individual – even though it is referred to as Individual Jihad,” Raymi says. “We rather view you as a group, a brigade, or even an army in itself.”\n\nRaymi says he and others “wish” they “had an army” in the West to carry out operations, but jihadists who act on their own “are that army.”\n\n“And it is important to view yourself from this angle, that you are part of this Ummah [community of worldwide Muslims], a part of this body,” Raymi says. “If any part of the body is not well, then the whole body shares the sleeplessness and fever with it.”\n\nThe AQAP chief continues: “We are a single united body, and today this body is in pain in many places. And you are situated in a place where you can harm our enemy. And so it is upon you to carry out that role.”\n\nRaymi emphasizes that the actions of individual jihadists are connected to the wars being fought by their ideological brethren overseas. He notes that their enemies “continuously carry out thousands of operations on a daily basis” and invites Muslims in the West to see themselves as members of the same families struck abroad. “We are a single united body,” Raymi says. “An American Muslims is the same as a Yemeni Muslim, and a Yemeni Muslim is the same as an Australian Muslim. We do not believe in nationalism; we believe in Islam.”\n\nIn this context, Raymi mentions a series of wars and clashes that he considers to be a part of the same broader struggle, including the Israeli-Palestinian conflict, as well as the wars in Afghanistan, the Arabian Peninsula, Iraq, and Syria. Raymi then asks: “If every operation against the Muslims were to be retaliated by a single Muslim living in the West and result[ed] in the killing of many Americans, then what do you think will happen (as a result)?” The goal is to make “the enemy think twice about his actions,” Raymi says.\n\nAQAP forced to praise operations conducted by Islamic State supporters\n\nAQAP was an early innovator when it comes to inspiring individual jihadists to strike on their own without formal training abroad. Other ideologues had espoused the concept previously, but Anwar al Awlaki, an AQAP leader, was the chief advocate of such operations at the time of his death in a US drone strike in Sept. 2011. Awlaki and his comrades founded the English-language Inspire magazine, which is largely devoted to encouraging “lone mujahid” to lash out in the West.\n\nAs the Islamic State rose to prominence beginning in 2014, however, AQAP was eclipsed as the main instigator of “lone mujahid” attacks. Many of the small-scale terror plots carried out in recent years have involved supporters of Abu Bakr al Baghdadi’s caliphate, or were claimed by the Islamic State as the work of its “soldiers.” In some cases, ties to the Islamic State organization are nebulous, or non-existent, but counterterrorism officials have found connections (even if only online) or evidence of inspiration in many cases.\n\nTherefore, Raymi’s speech could be viewed as part of AQAP’s attempt to reclaim the narrative when it comes to inspiring “lone mujahid” attacks. His talk is branded as an “Inspire” production. Still, the Islamic State’s success in amplifying AQAP’s original concept looms large.\n\nIndeed, the only example of an individual jihadist cited by Raymi is Omar Mateen, who repeatedly swore allegiance to Baghdadi during his night of terror in June 2016. Mateen was reportedly exposed to Anwar al Awlaki’s teachings online. But like a number of other individual plotters who were first drawn to AQAP’s messaging, Mateen became infatuated with the idea of striking in the name of the so-called caliphate.\n\nRaymi ignores Mateen’s oath of fealty to Baghdadi, as AQAP has rejected the Islamic State’s caliphate declaration.\n\n\n\n“If you sacrifice and expect reward from Allah, then you can do great things,” Raymi says. The AQAP emir continues: “Our brother, Omar Mateen — May Allah accept him and elevate his status high — when he executed his blessed operation…how many smiles do you think he drew on the faces of the widows, orphans and Mujahideen all over? Today, the Muslim Ummah only hears of tragedy after tragedy facing it. Yet it is you who (can) draw a smile in their face. And if making a Muslim smile is a charity, then what about drawing a smile upon thousands and millions of Muslims?” Raymi points to his own smile while making this point. (See the screen shot above.)\n\nRaymi uses the example set by Mateen to draw lessons for his listeners: “Don’t complicate matters, take it easy and simple, the same as our brother Omar Mateen did, he took an AK-47 [sic] and headed towards their gatherings and attacked them.”\n\n“If such operations were to continue whenever there is a tragedy upon Muslims, we will be transferring the tragedy back to them, and it will be an eye for an eye,” Raymi argues.\n\nAQAP has previously praised Omar Mateen’s shooting rampage. The group released an “Inspire Guide” explaining the supposed benefits of the massacre from the jihadists’ perspective. But AQAP also argued that Mateen’s choice of target – a LGBT nightclub in Orlando – confused matters by drawing attention away from the jihadists’ cause.\n\n“The executor [Mateen] specifically chose a homosexual nightclub, and even though the killing of such people is the most binding duty and closer to human nature, [it is better] to avoid targeting areas where minorities are found,” AQAP’s propagandists wrote last year in their “Inspire Guide” for the Orlando attack. AQAP worried that the target took away from the “essence of the operation.” AQAP’s guide continued: “The Western media focused on the testimony by Mateen’s father who said that his son hates homosexuals and the terrorist ideas had no place in his motives. The media reiterated this, saying that Omar saw some homosexuals kissing each other and that such a scene offended him. The media tried to portray the operation motives to be against a particular group of people in order to turn the American public away from the real motives of the operation.”\n\nAQAP also argued that Mateen erred by targeting a nightclub where “most of the individuals present…were Latino.” It “is better to avoid targeting places and crowds where minorities are generally found in America” and jihadists should instead target “areas where the Anglo-Saxon community is generally concentrated,” because this “class of the American community is the majority and it is the one that is in the American leadership.”\n\nThis critique of Mateen’s mass murder – that he should have chosen a target that didn’t muddy the jihadist motivation – is entirely missing from Raymi’s speech.\n\nAQAP has, at times, encouraged followers to carry out more targeted slayings. For instance, the 15th issue of Inspire, released in the Spring of 2016, was dedicated to “Professional Assassinations.” The cover story advocated “precision in choosing the target from the beginning to the time of execution,” and the group also published a list of “economic personalities” whose murder would garner much attention. AQAP was behind the targeted strike on Charlie Hebdo’s offices in Paris in Jan. 2015. Inspire had previously listed Charlie Hebdo’s employees as legitimate targets, because they had supposedly offended Islam.\n\nTo be sure, AQAP has promoted less precise attacks throughout its history, including first advocating the use of trucks and other vehicles in indiscriminate killings. And the “Professional Assassinations” edition of Inspire also contained an article encouraging the use of knives in attacks inside the US (“O Knife Revolution, Head Towards America”), just as they have been employed against Jews in Israel.\n\nBut AQAP has also been encouraging followers to pursue more complex operations, such as using magnetic car bombs against high-profile individuals. AQAP may very well continue to provide innovative terrorist ideas along these lines, but it is telling that Raymi avoids all of this, telling would-be followers not to “complicate matters, take it easy and simple.”\n\nIn addition to the June 2016 Orlando massacre, AQAP has praised other attacks that were inspired, or claimed by the Islamic State.\n\nFor example, in Inspire and the Inspire Guides, AQAP has lauded: the truck attack on Bastille Day in Nice, France last year; the Sept. 2016 stabbings at a mall in Minnesota; and the vehicular assault near the British parliament in March.\n\nIn another Inspire Guide, Raymi’s men decried the arrests of women who were allegedly preparing to carry out a jihadist operation in France on behalf Baghdadi’s self-declared caliphate. AQAP advised “brothers in the west not to allow our Muslim sisters to participate in any lone jihad operation” – a recommendation some in the Islamic State’s network are likely to ignore. AQAP has also endorsed the bombings in New Jersey and New York last September. The bombings were carried out by a jihadist who cited Osama bin Laden, Awlaki and the Islamic State’s spokesman in his notebook. It was that same spokesman, Abu Muhammad al Adnani, who helped the Islamic State amplify AQAP’s “lone mujahid” concept by stressing the necessity of striking in the name of the so-called caliphate.\n\nTherefore, AQAP has been forced to praise terrorist anti-Western attacks carried out in the name of their rivals in the Islamic State. This cannot sit well with Raymi and the al Qaeda loyalists around him.\n\nRaymi’s video is a rare, direct appeal by the AQAP leader to jihadists in the West. He clearly seeks to move AQAP back into the fore of the “lone mujahid” effort.\n\n“If you are true to Allah and seek his assistance, then he will never neglect you,” Raymi tells his audience. “You will be greatly rewarded for [alleviating] the distrust of your Mujahideen brothers everywhere and be an example of brotherhood and the spirit of unity.”',
                'Publish Time': '2017-05-08T10:21',
                Source: 'Long War Journal',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Abu Bakr al-Baghdadi', 'Abu Muhammad al-Adnani', 'Ayman al-Zawahiri', 'Anwar al-Awlaki'],
                Location: ['Yemen'],
                Organization: ['AQAP', 'Islamic State'],
                KeyPhrases: ['Inspire Magazine'],
                Picture: ['yemen terror english 4.jpg'],
            },
            {
                Title: 'From "caliph" to fugitive: IS leader Baghdadi\'s new life on the run',
                Brief: 'al-Baghdadi "has become nervous and very careful in his movements; his circle of trust has become even smaller."',
                Text: 'Islamic State leader Abu Bakr al-Baghdadi is on the brink of losing the two main centres of his \'caliphate\' but even though he is on the run, it may take years to capture or kill him, officials and experts said.\n\nIslamic State fighters are close to defeat in the twin capitals of the group\'s territory, Mosul in Iraq and Raqqa in Syria, and officials say Baghdadi is steering clear of both, hiding in thousands of square miles of desert between the two.\n\n"In the end, he will either be killed or captured, he will not be able to remain underground forever," said Lahur Talabany, the head of counter-terrorism at the Kurdistan Regional Government, the Kurdish autonomous region in northern Iraq. "But this is a few years away still," he told Reuters.\n\nOne of Baghdadi\'s main concerns is to ensure those around him do not betray him for the $25 million reward offered by the United States to bring him "to justice", said Hisham al-Hashimi, who advises Middle East governments on Islamic State affairs.\n\n"With no land to rule openly, he can no longer claim the title caliph," Hashimi said. "He is a man on the run and the number of his supporters is shrinking as they lose territory."\n\nIraqi forces have retaken much of Mosul, the northern Iraqi city the hardline group seized in June 2014 and from which Baghdadi declared himself "caliph" or leader of all Muslims shortly afterwards. Raqqa, his capital in Syria, is nearly surrounded by a coalition of Syrian Kurdish and Arab groups.\n\nThe last public video footage of him shows him dressed in black clerical robes declaring his caliphate from the pulpit of Mosul\'s medieval Grand al-Nuri mosque back in 2014.\n\nBorn Ibrahim al-Samarrai, Baghdadi is a 46-year-old Iraqi who broke away from al-Qaeda in 2013, two years after the capture and killing of the group\'s leader Osama bin Laden.\n\nHe grew up in a religious family, studied Islamic Theology in Baghdad and joined the Salaafi jihadist insurgency in 2003, the year of the US-led invasion of Iraq. He was caught by the Americans who released him about a year later as they considered him then as a civilian rather than a military target.\n\nBOUNTY\n\nHe is shy and reserved, Hashimi said, and has recently stuck to the sparsely populated Iraq-Syria border where drones and strangers are easy to spot.\n\nThe U.S. Department of State\'s Counter-Terrorism Rewards Program had put the same $25 million bounty on Bin Laden and Iraqi former president Saddam Hussein and the reward is still available for Bin Laden\'s successor, Ayman al-Zawahiri.\n\nNeither Saddam nor Bin Laden were voluntarily betrayed, but the bounties complicated their movements and communications.\n\n"The reward creates worry and tension, it restricts his movements and limit the number of his guards," said Fadhel Abu Ragheef, a Baghdad-based expert on extremist groups. "He doesn\'t stay more than 72 hours in any one place."\n\nBaghdadi "has become nervous and very careful in his movements", said Talabany, whose services are directly involved in countering Islamic State plots. "His circle of trust has become even smaller."\n\nHis last recorded speech was issued in early November, two weeks after the start of the Mosul battle, when he urged his followers to fight the "unbelievers" and "make their blood flow as rivers".\n\nU.S. and Iraqi officials believe he has left operational commanders behind with diehard followers to fight the battles of Mosul and Raqqa, to focus on his own survival.\n\nIt is not possible to confirm his whereabouts.\n\nBaghdadi does not use phones and has a handful of approved couriers to communicate with his two main aides, Iyad al-Obaidi, his defence minister, and Ayad al-Jumaili, in charge of security. There was no confirmation of an April 1 Iraqi state TV report that Jumaili had been killed.\n\nBaghdadi moves in ordinary cars, or the kind of pick-up trucks used by farmers, between hideouts on both sides of the Iraqi-Syrian border, with just a driver and two bodyguards, said Hashimi.\n\nThe region is well known to his men as the hotbed of the Sunni insurgency against U.S. forces that invaded Iraq and later the Shi\'ite-led governments that took over the country.\n\nAt the height of its power two years ago, Islamic State ruled over millions of people in territory running from northern Syria through towns and villages along the Tigris and Euphrates river valleys to the outskirts of the Iraqi capital Baghdad.\n\nIt persecuted non-Sunnis and even Sunnis who did not agree with its extreme version of Islamic law, with public executions and whippings for violating strict controls on appearance, behaviour and movement.\n\nBut the group has been retreating since in the face of a multitude of local, regional and international forces, driven into action by the scores of deadly attacks around the world that it has claimed or inspired.\n\nA few hundred thousand people now live in the areas under the group\'s control, in and around Raqqa and Deir al-Zor, in Syria\'s east, and in a few pockets south and west of Mosul. Hashimi said Islamic State was moving some fighters out of Raqqa before it was encircled to regroup in Deir al-Zor.\n\nMosul, with pre-war population of 2 million, was at least four times the size of any other the group has held. Up to 200,000 people are still trapped in the Old City, Islamic State\'s besieged enclave in Mosul, lacking supplies and being used as human shields to obstruct the progress of Iraqi forces by a U.S-led international coalition.\n\nThe Syrian Democratic Forces, made of Kurdish and Arab groups supported by the U.S.-led coalition, began to attack Raqqa last week, after a months-long campaign to cut it off.\n\nThe militants are also fighting Russian and Iranian-backed forces in Syria loyal to President Bashar al-Assad, and mainly Sunni Muslim Syrian rebels backed by Turkey.\n\nThe last official report about Baghdadi was from the Iraqi military on Feb. 13. Iraqi F-16s carried out a strike on a house where he was thought to be meeting other commanders, in western Iraq, near the Syrian border, it said.\n\nOverall, Islamic State has 8,000 fighters left, of which 2,000 are foreigners from other Arab states, Europe, Russia and central Asia, said Abu Ragheef.\n\n"A small number compared to the tens of thousands arrayed against them in both countries, but a force to be reckoned with, made up of die-hards with nothing to lose, hiding in the middle of civilians and making extensive use of booby traps, mines and explosives," he said.\n\nThe U.S. government has a joint task force to track down Baghdadi which includes special operations forces, the CIA and other U.S. intelligence agencies as well as spy satellites of the National Geospatial Intelligence Agency.\n\nIt will take more than that to erase his influence, Talabany said. "He is still considered the leader of ISIL and many continue to fight for him; that hasn\'t changed drastically," he said, using one of Islamic State\'s acronyms.\n\nEven if killed or captured, he added, "his legacy and that of ISIL will endure unless radical extremism is tackled."',
                'Publish Time': '2017-06-14T10:21',
                Source: 'Reuters',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Abu Bakr al-Baghdadi', 'Osama bin Laden', 'Ayman al-Zawahiri', 'Saddam Hussein', 'Iyad al-Obaidi', 'Ayad al-Jumaili'],
                Location: ['Iraq', 'Syria'],
                Organization: ['Kurdistan Regional Government', 'al-Qaeda', 'Islamic State', 'U.S government', 'CIA', 'ISIL'],
                KeyPhrases: [''],
                Picture: ['yemen terror english 3.jpg'],
            },
            {
                Title: "Al Qaeda's second in command killed in Yemen strike; successor named",
                Brief: "Al Qaeda's second in command, Nasir al-Wuhayshi, has been killed in a drone strike in Yemen, dealing a heavy setback to the leadership of the international terrorist group.",
                Text: "Al Qaeda's second in command, Nasir al-Wuhayshi, has been killed in a drone strike in Yemen, dealing a heavy setback to the leadership of the international terrorist group.\n\nAl-Wuhayshi was the top leader of al Qaeda in the Arabian Peninsula, or AQAP, one of the most dangerous and dynamic branches of the jihadist network.\nHis death is \"the biggest blow against al Qaeda since the death of (Osama) bin Laden,\" said CNN terrorism analyst Paul Cruickshank.\nAl-Wuhayshi was al Qaeda's \"leading light\" and was one day expected to take over from its current global chief, Ayman al-Zawahiri, said Cruickshank.\nTwo Yemeni security officials told CNN on Monday that al-Wuhayshi was killed Friday in a suspected U.S. drone strike in Yemen's Hadhramaut region.\nOn Tuesday, AQAP released a video statement announcing that its leader and two aides had died. The speaker said that al-Wuhayshi would be succeeded by the group's military chief, Qasm al-Rimi, also known as Abu Hureira al-Sanaani.\n\n'Leadership matters'\nThe U.S. government confirmed al-Wuhayshi's fate Tuesday, calling his death \"a major blow to (al Qaeda's) most dangerous affiliate and to al Qaeda more broadly.\"\nAl-Wuhayshi \"was responsible for the deaths of innocent Yemenis and Westerners, including Americans,\" U.S. National Security Council spokesman Ned Price said.\n\nReport: Head of al Qaeda in Yemen killed 01:49\n\"While AQAP, al Qaeda and their affiliates will remain persistent in their efforts to threaten the United States, our partners and our interests, (al-Wuhayshi's) death removes from the battlefield an experienced terrorist leader and brings us closer to degrading and ultimately defeating those groups.\"\nAl-Wuhayshi, known as al Qaeda's crown prince, was a charismatic figure who was adored by many of the terrorist group's jihadist fighters.\nIn a video that surfaced in April of last year, al-Wuhayshi appeared brazenly out in the open, greeting followers in Yemen, the impoverished nation that the organization uses as a base.\nIn a speech to the group, he makes it clear that he's going after the United States, saying: \"We must eliminate the cross. ... The bearer of the cross is America!\"\nThe video showed what looked like the largest and most dangerous gathering of al Qaeda in years.\n\nSuccessor seen as 'brains of the operation'\nOriginally from Yemen, al-Wuhayshi assumed command of AQAP in 2009. He'd escaped a Yemeni prison in 2006 and had previously worked as a personal secretary for Osama bin Laden.\nHis successor is also seen as a formidable leader.\n\"Qasm al-Rimi was considered the brains of the operation,\" Cruickshank said. \"For more than a decade, he's really been at the helm of the military side of things for AQAP but also planning their large international operations.\"\nThe leadership change is expected to bring \"a degree of continuity,\" he said, noting that al-Wuhayshi and al-Rimi were believed to have worked very closely together.\n\nAQAP benefiting from Yemen chaos\nAl-Wuhayshi's death comes at a time when AQAP appears to have been thriving amid the recent turmoil in Yemen.\n\nThe group has been \"expanding the territory they control, taking advantage of political chaos,\" Cruickshank said.\nAQAP has been feeding off anger among Sunni tribes in Yemen over the advances made by the predominantly Shiite Houthi rebels who overthrew the Yemeni government earlier this year.\nAdding to the violence and destruction, a Saudi-led coalition has been bombing the Houthis and their allies in an effort to restore the deposed government.\nAQAP has exploited the unrest to seize more turf, including the port city of Al Mukalla, where it freed hundreds of inmates from a prison in April.\nThe Yemeni security officials told CNN that the drone strike that killed al-Wuhayshi took place in southern Al Mukalla.\n\n'This is a long, difficult struggle'\nYemen's descent into chaos prompted the United States to pull out its Special Operations forces based in the country in March, raising fears that its counterterrorism efforts against AQAP would be hobbled.\nBut al-Wuhayshi's death and an airstrike in April that killed a senior AQAP leader show that Yemen is no haven for the terrorist group.\nU.S. Sen. Angus King, an independent from Maine, told CNN on Monday that the terrorist leader's death would hurt al Qaeda, but he stressed that the jihadist network still poses a threat.\n\"This is a long, difficult struggle that we're engaged in, and it's going to require all kinds of tools,\" he said.\nNews of al-Wuhayshi's death emerged days after U.S. planes carried out a strike inside Libya, purportedly killing a key terror figure in North Africa.\nThe target was Mokhtar Belmokhtar, a veteran Islamist fighter who is blind in one eye and affiliated with al Qaeda in North Africa, a U.S. official told CNN.\nThe Libyan government said Belmokhtar was killed in the weekend strike, something that U.S. officials have not confirmed.\nSenior AQAP leader Nasr Ibn Ali al-Ansi killed",
                'Publish Time': '2015-06-16T17:53',
                Source: 'CNN',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Nasir al-Wihayshi', 'Osama bin Laden', 'Ayman al-Zawahiri', 'Qasim al-Raymi', 'Mokhtar Belmokhtar'],
                Location: ['Yemen'],
                Organization: ['U.S National Security Council', 'AQAP', 'al-Qaeda', 'al-Qaeda in North Africa'],
                KeyPhrases: ['Shiite Houthi'],
                Picture: ['yemen terror english 2.jpg'],
            },
            {
                Title: "This Man Is The Leader In ISIS's Recruiting War Against Al-Qaeda In Yemen",
                Brief: 'BuzzFeed News has identified the leader of ISIS in Yemen, which is proving itself bloodier and more violent than AQAP.',
                Text: 'The first body dangled over the side of the bridge, facing back toward town in a bloody shirt and cutoff blue shorts. A mile inland, along a narrow canal that ran through the heart of al-Mukalla, a port city in eastern Yemen, a second body hung down off another bridge, mirroring the first. Both men had been executed earlier in the day by al-Qaeda in the Arabian Peninsula in a beachfront show trial, and then roped to wooden beams and left to hang in the sun. The pair, al-Qaeda announced through loudspeakers that canvassed the city, were spies, spotters for the U.S. drone program.\n\nMore than three months into a brutal, eight-sided war that has ripped Yemen apart and sparked a humanitarian disaster of dengue fever and disease, al-Qaeda is under attack from all sides, losing leaders to drone strikes and recruits to ISIS.\n\nThe day before the executions, on June 17, a U.S. drone killed Nasir al-Wihayshi, AQAP\'s top commander. Barely a week later, news started to filter out of Yemen\'s tribal regions that another commander had defected to ISIS, taking several of his men with him.\n\nAQAP has been dodging U.S. drones for years, but the challenge from ISIS on its jihadi right is new and is being spearheaded by a man who goes by the name of Abu Bilal al-Harbi, who BuzzFeed News has identified as the top ISIS commander in Yemen.\n\nAlthough he is not well known, BuzzFeed News has confirmed with multiple sources familiar with the recruiting tactics of ISIS in Yemen that al-Harbi is accepting the oath of allegiance in Yemen on behalf of Abu Bakr al-Baghdadi, the ISIS caliph in Iraq. A Saudi national, whose real name appears to be Nasser al-Ghaydani, al-Harbi has a reputation in jihadi circles as a scholar of Islamic law. He is also a talented recruiter, and is making inroads in Yemen\'s tribal crescent that stretches from Marib and al-Bayda into Shabwa, an area that AQAP once considered privileged territory.\n\nISIS has only existed in Yemen since November 2014, when al-Baghdadi announced the creation of a local "state," but already it has proved itself bloodier and more violent than AQAP, which U.S. officials routinely describe as the most dangerous terrorist threat to the U.S.\n\nAQAP has "rules of engagement," noted Aaron Zelin, a research fellow at the Washington Institute for Near East Policy. The Islamic State doesn\'t, Zelin said. It "has no limit on targets."\n\nISIS made this point most forcefully with its initial attack in Yemen earlier this year, a coordinated suicide bombing of two mosques that killed more than 130 people in March. Video footage from outside the mosque showed one of the bombers, who had hid the explosives in a cast around his leg, receiving help from a worshipper as he hobbled toward the mosque. Minutes later the screen went blank as the bombs exploded.\n\nAl-Qaeda distanced itself from the attack, and has generally shied away from attacking mosques in Yemen, which have historically allowed Sunnis and Shiites to pray alongside one another. But as old wars bleed into new ones that produce ever more radical generations of fighters, this brutal, uncompromising approach seems to be at the heart of ISIS\'s appeal in Yemen. "If you were born after 1990 all you\'ve seen is war," said Farea al-Muslimi, a Yemeni scholar at the Carnegie Middle East Center in Beirut. "People have lost hope in peace and that helps groups like ISIS."\n\nThe Saudi air war, which started in March, has only hastened the country\'s decline. Last week the United Nations designated Yemen a "Level 3" humanitarian emergency, its most severe warning, putting the country in the same category as Iraq, Syria, and South Sudan. The months of violence, on top of years of simmering wars, has drastically altered the daily environment in Yemen. Attacks that once outraged now blend together in a steady stream of nearly indistinguishable horror. And this is the world in which ISIS thrives, out-recruiting al-Qaeda with the promise of fewer limits and more gruesome attacks.\n\nIn April, when al-Qaeda took over the eastern Yemeni port city of al-Mukalla, it looted banks and seized military equipment before turning much of the daily running of the city over to a council of local elders. Similarly, it has taken a conventional battlefield approach to confronting the Huthis, the Zaydi-Shi\'a group that controls much of what is left of Yemen\'s official bureaucracy. ISIS has felt no such restraint, using suicide bombers and car bombs to hit at soft Huthi targets like mosques and hospitals in the hopes of further igniting an Iraqi-style sectarian war. The latest attack, on June 29, killed 28 people, including several women who were attending a funeral.\n\n"AQAP, like Yemen, is at a crossroads," said Adam Baron, a visiting fellow at the European Council of Foreign Relations, who has extensive experience in the country. The challenge from ISIS may force AQAP to abandon the slow-moving, support-building project it has undertaken in recent years in favor of more frequent attacks. In the battle for the heart of the jihadi movement, as the apocalyptic wars in Iraq and Syria have shown, the most violent group usually wins.',
                'Publish Time': '2015-07-06T22:06',
                Source: 'BuzzFeed News',
                EEI: ['Terror in the Gulf', 'Yemen Stability', 'Yemen Terror'],
                Person: ['Nasir al-Wihayshi', 'Abu Bakr al-Baghdadi', 'Abu Bilal al-Harbi'],
                Location: ['Yemen'],
                Organization: ['ISIS', 'AQAP', 'al-Qaeda'],
                KeyPhrases: [''],
                Picture: ['yemen terror english 1.jpg'],
            },
            {
                Title: 'اليمن: الحوثيون يطلقون صاروخا على سفينة إماراتية',
                Brief: 'اليمن: الحوثيون يطلقون صاروخا على سفينة إماراتية',
                Text: 'اطلق الحوثيون في الليلة الفاصلة لأمس الأربعاء واليوم الخميس 15 جوان 2017، صاروخا على سفينة إماراتية قبالة ساحل اليمن مما أسفر عن إصابة أحد أفراد الطاقم.\n\nوجاء في بيان لوكالة الأنباء السعودية نقلا "تعرضت سفينة إماراتية لدى خروجها من ميناء المخا اليمني لهجوم بصاروخ موجه نفذته الميليشيات الحوثية، دون أن يسفر عن أضرار في السفينة... ونتج عن ذلك إصابة شخص واحد من الطاقم"\nويجدر الذكر أن ميناء المخا المطل على البحر الأحمر قريب من مضيق باب المندب الذي تمر عبره معظم شحنات النفط بالعالم.',
                'Publish Time': '2017-07-01T13:36',
                Source: 'NESSMA',
                EEI: ["Yemen's stability"],
                Person: [''],
                Location: ['اليمن'],
                Organization: [''],
                KeyPhrases: ['الازمة في اليمن', 'الحوثيون', 'الامارات', 'السعودية'],
                Picture: ['yemens stability 7 arabic.jpg'],
            },
            {
                Title: 'اليابان تعلن عن منحة لدعم الاحتياجات الغذائية في اليمن',
                Brief: 'تمنح اليابان 5 ملايين دولار من أجل تقديم مساعدات غذائية لليمن',
                Text: 'اعلنت السفارة اليابانية في اليمن عن تقديم حكومة بلادها خمسة ملايين دولار لمواجهة الاحتياجات الغذائية في اليمن .\n\nوقال بيان صحفي للسفارة اليمنية ان الحكومة اليابانية تبادلت مذكرات مع برنامج الأغذية العالمي في 30 يونيو 2017، وقررت اليابان فيها تقديم منحة بقيمة 5 ملايين دولار من أجل تقديم مساعدات غذائية لليمن.ويمثل ذلك منحة إضافية، فقـد سبق أن قدمت اليابان13 مليون دولار هذا العام للبرنامج، ووفق البيان الذي وصل الى براقش نت بلغت قيمة مساهمات اليابان الإجمالية لاستجابة الاحتياجات الإنسانية في اليمن 61.75مليون دولار في عام 2017والتي مكنت منظمات الأمم المتحدة واللجنة الدولية للصليب الأحمر والمنظمات اليابانية غير الحكومية من تنفيذ العديد من البرامج العاجلة .　\nوأضاف البيان ان اليابان قدمت مساهمات مطّرِدة لدعم الشعب اليمني خلال عقود عديدة. ووصلت قيمة المساهمات الإجمالية منذ عام 2012 إلى 272.76 مليون دولار، بما في ذلك هذه المنحة الجديدة.',
                'Publish Time': '2017-07-01T13:36',
                Source: 'براقش نت',
                EEI: ["Yemen's stability"],
                Person: [''],
                Location: ['اليمن', 'اليابان'],
                Organization: [
                    'السفارة اليابانية في اليمن',
                    'الحكومة اليبانية',
                    'منظمات الأمم المتحدة',
                    'اللجنة الدولية للصليب الأحمر',
                    'المنظمات اليابانية غير الحكومية',
                ],
                KeyPhrases: ['الازمة في اليمن'],
                Picture: ['yemens stability 6 arabic.jpg'],
            },
            {
                Title: 'كوربن: طالبنا بمنع بيع الأسلحة للسعودية بسبب اليمن',
                Brief: 'كوربن: طالبنا بمنع بيع الأسلحة للسعودية بسبب اليمن',
                Text: 'طالب زعيم حزب العمال البريطاني المعارض جيرمي كوربن بمنع توريد السلاح البريطاني إلى الدول التي ترتكب انتهاكات في اليمن، ودعا إلى فتح تحقيق دولي بشأن تقارير منظمات حقوقية ومؤسسات إعلامية عن سجون سرية إماراتية هناك؛ يجري فيها تعذيب معتقلين ومخطوفين.\nوأوضح كوربن في حديث للجزيرة أن الدول التي تنتهك حقوق الإنسان أو تقتل مدنيين يجب ألا تستمر في الحصول على أسلحة بريطانية.\nوقال إن حزبه طالب بتعليق بيع الأسلحة للمملكة العربية السعودية، مشيرا إلى أن حزبه ندد مرارا باستخدام هذه الأسلحة من قبل السعودية في حرب اليمن.\nوتعليقا على الأزمة الخليجية، قال كوربن إنه يجب إنهاء أي نوع من الحصار على قطر، واصفا مطالب دول الحصار بإغلاق شبكة الجزيرة الإعلامية بأنه أمر خاطئ تماما.\nوبخصوص التعذيب في اليمن، كان نواب بارزون في الكونغرس الأميركي قد وجهوا قبل أسبوع رسالة إلى وزير الدفاع جيمس ماتيس، تطالبه بإجراء تحقيق فوري في التقارير التي نشرتها منظمات دولية عن وجود سجون سرية لتعذيب المعتقلين في اليمن، تشرف عليها دولة الإمارات ويشارك فيها محققون عسكريون أميركيون.\nوكانت كل من وكالة أسوشيتد برس ومنظمة هيومن رايتس ووتش قد نشرت تقارير عن وجود شبكة سجون سرية تديرها الإمارات في اليمن، يخضع فيها المعتقلون لصنوف مختلفة من التعذيب.\nوأوضحت الوكالة أن تحقيقا أجرته وثّق حوادث اختفاء مئات الأشخاص في هذه السجون السرية بعد اعتقالهم تعسفيا، مؤكدة أن هذه السجون كانت تشهد حالات تعذيب وحشية.\nكما طالبت منظمة العفو الدولية بإجراء تحقيق دولي وعاجل في دور الإمارات في تأسيس شبكات تعذيب باليمن.',
                'Publish Time': '2017-07-01',
                Source: 'الجزيرة',
                EEI: ["Yemen's stability", 'Saudi Arabia', "The Gulf's Economy"],
                Person: ['جيرمي كوربن'],
                Location: ['بريطانيا'],
                Organization: ['منظمة العفو الدولية', 'حزب العمال البريطاني'],
                KeyPhrases: ['اليمن', 'السعودية', 'الامارات', 'توريد السلاح', 'الازمة في اليمن', 'قطر'],
                Picture: ['yemens stability 5 arabic.jpg'],
            },
            {
                Title: 'حكومة صنعاء تصف تقرير الخارجية الأمريكية بالتدخل السافر',
                Brief: 'عبرت وزارة الخارجية في حكومة الإنقاذ المشكلة في صنعاء من جماعة "أنصارالله" [الحوثيين] وحزب المؤتمر الشعبي العام، عن استنكارها ورفضها محاولات التدخل في الشؤون الداخلية من الإدارة الأمريكية أو أي من وكالاتها أو منظماتها.',
                Text: 'رحبت السعودية والبحرين، السبت، بتصريحات الرئيس الأمريكي، دونالد ترامب، التي طالب فيها قطر بوقف تمويل الإرهاب على حد تعبيره.\nوكانت دولة الإمارات قد أشادت الجمعة بـ"زعامة ترامب في تحدي دعم قطر المثير للقلق للتطرف".\nلكن الدول الثلاث لم تعلق على تصريحات منفصلة لوزير الخارجية الأمريكي، ريكس تيلرسون، حثهم فيها على تخفيف الحصار الذي يفرضونه على قطر، والذي وصفه بالعائق أمام الحملة العسكرية التي تقودها واشنطن ضد تنظيم الدولة الإسلامية، والمؤثر سلبا على الشعب القطري.\nوجاءت تصريحات ترامب بالتزامن مع انضمام واشنطن إلى جهود دولية مكثفة، ترمي لرأب الصدع العميق بين حلفائها الخليجيين، الذي تفاقم ليصل إلى أسوأ أزمة دبلوماسية تشهدها المنطقة .\nواتهم ترامب دولة قطر، الجمعة، بأنها ممول للإرهاب على "مستوى عال"، في الوقت الذي حذرت وزارة الدفاع الأمريكية "البنتاغون" ووزير الخارجية الأمريكي، ريكس تيلرسون، من الآثار العسكرية والتجارية والإنسانية للحصار، الذي فرضته عدة دول عربية وغيرها على قطر.\nوبعد قطع علاقاتها مع قطر الاثنين الماضي، أعلنت السعودية أنها ملتزمة بـ"تحرك حاسم وسريع لقطع كافة مصادر تمويل الإرهاب"، وذلك في بيان بثته وكالة الأنباء السعودية الرسمية منسوبا إلى مصدر رسمي.\nوتنفي قطر الاتهامات لها بدعمها الإرهاب، لكن جيرانها الخليجيين رأوا في تصريحات ترامب تعزيزا لموقفهم، وللعقوبات التي فرضوها على الدوحة الاثنين الماضي.\nوقال يوسف العتيبة، سفير الإمارات لدى الولايات المتحدة: "الخطوة التالية هي أن تقر قطر بهذه المخاوف، وتلتزم بإعادة التفكير في سياساتها الإقليمية".\nوأضاف في تصريحات لوكالة الأنباء الرسمية الإماراتية: "هذا يمثل الأساس الضروري لأي نقاش".وأشار بيان آخر لوكالة الأنباء السعودية لدعوة تيلرسون قطر لوقف دعمها للإرهاب، لكنه لم يشر إلى تصريحاته بأن الأزمة تضر بالشعب القطري وتعرقل الاتفاقات الاقتصادية، وتضر بمحاربة الولايات المتحدة تنظيم الدولة الإسلامية.\nوقالت السعودية إن تحركها جاء تبعا لنتائج القمة الأمريكية العربية الإسلامية، التي عقدت في الرياض الشهر الماضي، حيث ألقى الرئيس ترامب خطابا حول محاربة "الارهاب".\nوأكدت دولة البحرين "ضرورة التزام قطر بتصحيح سياساتها، للانخراط بطريقة شفافة في جهود مكافحة الإرهاب"، وذلك حسبما جاء في وكالة الأنباء الرسمية البحرينية.\nوقال ترامب إنه ساعد على التخطيط لهذا التحرك ضد قطر، رغم أن مسؤولا رفيع المستوى بالإدارة الأمريكية قال لوكالة رويترز للأنباء في وقت سابق من الأسبوع الجاري، إن واشنطن لم تتلق أي معلومات من السعودية أو الإمارات، خلال زيارة ترامب، بأنهما ستقطعان علاقاتهما الدبلوماسية مع قطر.\nوأمهلت الدول الخليجية الثلاث مواطني قطر على أراضيها مهلة أسبوعين للمغادرة، وحظرت الطائرات القطرية من التحليق في أجوائها، كما أغلقت السعودية حدودها البرية الوحيدة أمام قطر التي تمثل شبه جزيرة.\nووصل وزير الخارجية القطري، محمد بن عبد الرحمن آل ثاني، إلى موسكو السبت بعد أن أجرى محادثات في ألمانيا الجمعة، وذلك ضمن جولة أوربية يبدو أنها تهدف لحشد الدعم للدوحة.\nفي غضون ذلك استضافت تركيا وزير الخارجية البحريني لإجراء محادثات حول الأزمة.',
                'Publish Time': '2017-06-29T00:54',
                Source: 'Sputnik عربي',
                EEI: ['American Involvement', "Yemen's Stability"],
                Person: ['ريكس تيلرسون'],
                Location: ['اليمن'],
                Organization: ['وزارة الخارجية الأمريكية', 'الادارة الامريكية'],
                KeyPhrases: ['الحوثيون', 'الصراع في اليمن'],
                Picture: ['american involvement arabic 8.jpg'],
            },
            {
                Title: 'ما مصير الحرب في اليمن.. بعد نجاح “عاصفة الحزم” في إنجاز أهم وأبرز أهدافها الغير معلنة؟!',
                Brief: 'ثمة احتمال يقول أن محمد بن سلمان ربط مصير الحرب في اليمن بمصير وصوله إلى الحكم وتثبيت عرشه إلى أن تتم مبايعته ملكاً للبلاد ويأمن كل المخاطر، ما يعني بنظر نخبة المراقبون أنه لايزال هناك متسع من الوقت أمام الحرب في اليمن ، وسيكون من الصعب على محمد بن سلمان التخلي عن حرب اليمن بسهولة ، لضمان استثمارها في مواجهة أي تقلبات مباغتة قد تنحرف بمسار توليه الحكم في أي لحظة من اللحظات..!',
                Text: 'خوض “عاصفة الحزم” حرباً مفتوحة مع اليمن بقيادة محمد بن سلمان مثلت بالنسبة لمستقبله الحافل نقطة مفصلية ، دشن بها حضوره الدولي ، وفتحت الأبواب واسعة أمام تطلعه نحو منصة التتويج وحلمه بأن يكون الملك الثامن للمملكة بلا منازع او منافس ، ليبدأ الأمير الشاب بقطف أولى ثمار حربه في اليمن التي فشلت في تحقيق أي من أهدافها المعلنة ، غير أنه استطاع بأريحية تامة استخدامها في إخماد أصوات الجميع ، ورص الصفوف خلفه ليحقق أغراضه ويبدوا الحاكم الفعلي للمملكة.كان لابد من خلط الأوراق وإرباك المنطقة بالأزمات ، بل وتعنيف المشهد سياسياً وعسكرياً لخلق حالة تأزم شديدة تحيط بالمجتمع السعودي وتجرُّه نحو تأثيرات مفتعله من شأنها انتاج مجموعة عوامل شديدة التأثير يتم استهلاكها كشواهد مفزعة تمس السلم الأهلي للبلاد ، كما يسهل تحويرها إلى تبريرات وازنة تتيح تسريع خطوات تغيير النظام الأساسي السعودي ، وبدون تلك الفوضى والاختلالات لا يمكن ضمان انتقال الحكم الملكي إلى عائلة سلمان بشكل مريح ، فليس من حق “سلمان” وهو الملك السابع للملكة تنفيذ انقلاب على مستوى من الخطورة ، قبل إنجاز ترتيبات حاسمة مع الإدارة الأمريكية من جهة، والمؤسسة الدينية المتمثلة بهيئة كبار العلماء من جهة ثانية، ومنظومة الأسرة الحاكمة من جهة أخرى ، واسترضاءها قبيل تنصيب محمد بن سلمان ولياً للعهد ليصبح وريثاً للعرش بعد والده سلمان .الآن صار محمد بن سلمان ولياً للعهد كأمر مفروض وحق أصيل يعد تجاوزه هو الأمر الأصعب.! وبات بديهياً أن يتنازل الملك سلمان عن الحكم لصالح نجله محمد ويبقى الجدل منحصر في التوقيت فقط ، هذا ما يخطط له الملك سلمان ليطمئن على مشروعه المتمثل بتثبيت عرش نجله وهو لا يزال على قيد الحياة ، ما يعني أنها المرة الأولى في تاريخ المملكة السعودية التي ينجح ملك من أبناء المؤسس عبدالعزيز في افتعال سلسلة من الأزمات والإرهاصات الواسعة التي مهدت لتنصيب ابنه ولياً للعهد ، فيما جرب الملوك “سعود ، والفيصل ، وفهد ، وعبدالله” فعل ذلك وفشلوا.! باعتبار أن حصر السلطة في فرع واحد من أبناء الملك وليس في العائلة المالكة أمر يستحيل تحقيقه في حال تعيش المملكة ظروفاً طبيعية ، بوصفه تحول يغير تاريخ حكم آل سعود ويجعل الخاسرون من نمط التغييرات يتكاثرون إلى قدر يصعب التكهن بما سوف تكون عليه ردود الفعل والمقاومة من البنية القديمة داخل أسرة آل سعود.! ما استدعى اللعب على “مدارات التأثير” ، والاندفاعة الشديدة في شكل ومستوى التدخل العسكري في حروب دول المنطقة ، والارتكاز على حرب اليمن كمحور أساس لإعادة انتاج الحكم بالطريقة السلمانية .! حرب اليمن التي أطلقها محمد بن سلمان عقب ثلاثة اشهر من تولي والده عرش المملكة، وضعت تحت يده أضخم ميزانية تسليح تاريخية على الإطلاق ، وحققت رغبته في إغراء الرئيس الأمريكي دونالد ترامب الذي التقاه في 14 آذار الماضي بصفقات تسليح مفتوحة جعلت منه رجل أمريكا الأول في السعودية بدلاً عن محمد بن نايف الذي كانت تعول عليه أمريكا لحكم البلاد ، وبعد زيارة ترامب للرياض الذي عاد بعدها إلى بلاده مبشراً بغنيمة باهضة الثمن لقاء صفقة سميت بـ”صفقة القرن” ، فضمن الأمير موافقة حاسمة من الإدارة الأمريكية في توليه العرش .ومنذ وقت مبكر اشتغلت آلة دعائية فتاكة  بصحبة المؤسسة الدينية المتمثلة في هيئة كبار العلماء داست على وتر الخطر الإيراني المجوسي الذي بدأ خطره يدك الحد الجنوبي للمملكة ، وانسجمت المؤسسة الدينية في مسايرتها بحماسة منقطعة النظير ، وبذلك يكون الأمير قد حصل على الموافقة الثانية التي تربطه بمنصة التتويج ، وتبقى تقديم ضمانات شكلية وترضيات داخل منظومة الأسرة الحاكمة أتت لاحقاً بتعديل المادة الخامسة من النظام الأساسي السعودي.من بوابة الحرب في اليمن وعلى جثث اليمنيين وصل “بن سلمان” إلى العرش ، ولم يترنح طويلاً فقد أطاح بمحمد بن نايف آخر العقبات في طريق الوصول ، بينما الحرب التي دمرت اليمن وأتت على كل شيئ لم يكن الهدف الحقيقي منها اسقاط انقلاب صنعاء المزعوم ، بل لإنجاز انقلاب أبيض في الرياض أسدل الستار على الأمير مقرن بن عبدالعزيز ومن بعده الأمير محمد بن نايف الذي انتظر دوره إلى أن عزله سلمان بذات الطريقة وفي توقيت ليس ببعيد ، دون الاتعاظ بسيناريو عمه ، كما لو أن اللعبة قد انتهت .ثمة احتمال يقول أن محمد بن سلمان ربط مصير الحرب في اليمن بمصير وصوله إلى الحكم وتثبيت عرشه إلى أن تتم مبايعته ملكاً للبلاد ويأمن كل المخاطر، ما يعني بنظر نخبة المراقبون أنه لايزال هناك متسع من الوقت أمام الحرب في اليمن ، وسيكون من الصعب على محمد بن سلمان التخلي عن حرب اليمن بسهولة ، لضمان استثمارها في مواجهة أي تقلبات مباغتة قد تنحرف بمسار توليه الحكم في أي لحظة من اللحظات..!',
                'Publish Time': '2017-06-28',
                Source: 'رأي اليوم',
                EEI: ["The Gulf's Future", "Yemen's Stability"],
                Person: ['محمد بن سلمان', 'محمد بن نايف'],
                Location: ['اليمن'],
                Organization: ['المملكة السعودية'],
                KeyPhrases: ['عاصفة الحزم', 'السعودية', 'الحرب في اليمن', 'زيارة ترامب', 'ايران'],
                Picture: ['the gulf future arabic 10.jpg'],
            },
            {
                Title: 'ما هي أبرز تصريحات ولي عهد السعودية الجديد عن اليمن؟',
                Brief: 'محمد بن سليمان: "لا شك بأن الحرب في اليمن لم تكن خياراً بالنسبة للسعودية، وشكلت المليشيات خطراً على الملاحة الدولية وعلى كل جيران اليمن."\n',
                Text: 'رأى الأمير محمد بن سلمان أن تدخل المملكة العربية السعودية في اليمن لم يكن خياراً، مشيداً بإنجازات التحالف العربي في دعم الشريعة باليمن، ومؤكداً على أن القوات المسلحة السعودية بإمكانها "اجتثاث" مليشيات الحوثيين خلال "أيام قليلة" ولكن المملكة لن تقوم بذلك حفاظاً على أرواح المدنيين في اليمن وتجنباً لخسائر في صفوف القوات السعودية.\nوقال الأمير في مقابلة مع قناة "الإخبارية" السعودية الرسمية، مطلع مايو/ أيار الماضي: "لا شك بأن الحرب التي قامت (في اليمن) لم تكن خياراً بالنسبة للسعودية، لأنه كان أمراً لابد أن نقوم به، وإلا كان السيناريو الآخر أسوأ بكثير. أولاً، انقلاب على الشرعية من قبل مليشيات مصنفة بأنها إرهابية. ثانياً، شكلت هذه المليشيات خطراً على الملاحة الدولية وعلى كل جيران اليمن. ثالثاً، بدأ النشاط الإرهابي في الطرف الآخر من اليمن (الجنوب) ينشط بشكل قوي جداً استغلالاً لعمل هذه المليشيات. ولو انتظرنا قليلاً كان الوضع ليصبح أكثر تعقيداً ولكان الخطر أصبح داخل الأراضي السعودية وداخل أراضي دول المنطقة وفي المعابر الدولية الرئيسية، ولم يكن ذلك بالنسبة لنا خياراً."\nوأكد الأمير السعودي على أن السعودية تستطيع "اجتثاث" مليشيات عبد الملك الحوثي ومليشيات الرئيس اليمني السابق، علي عبدالله صالح، "في أيام قليلة"، قائلاً: "نستطيع أن نجتث الحوثي وصالح في أيام قليلة. نستطيع أن نحشد القوات البرية السعودية فقط لوحدها، وفقط في أيام قليلة نجتث كل المناطق والـ15 في المائة الباقية تحت سيطرة الحوثي وعلي عبدالله صالح. ولكن هذا سيكون نتيجته ضحايا في صفوف قواتنا بالآلاف، سنفتح عزاءاً في كل مدينة سعودية، وستكون النتيجة الثانية ضحايا مدنية يمنية بشكل عال جداً وخسائر كبيرة."',
                'Publish Time': '2017-06-21T12:18',
                Source: 'CNN عربي',
                EEI: "The Gulf's Future",
                Person: ['محمد بن سلمان', 'عبد الملك الحوثي', 'علي عبدالله صالح'],
                Location: ['السعودية', 'اليمن'],
                Organization: ['التحالف العربي'],
                KeyPhrases: ['مليشيات الحوثيين', 'القوات السعودية', 'الارهاب'],
                Picture: ["the gulf's future arabic 6.jpg"],
            },
            {
                Title: 'اليمن : هجومين كبيرين لجماعة الحوثي على القوات السعودية بنجران وجازان اول عيد الفطر',
                Brief: 'القوات السعودية صدت محاولة هجوم نفذتها جماعة الحوثي',
                Text: 'قالت قناة العربية ان القوات السعودية وبمساندة طيران التحالف صدت محاولة\nهجوم نفذتها جماعة الحوثي وصالح ، صباح الأحد، في أول أيام عيد الفطر قبال منطقتي\nجازان ونجران.\n\n\n\nوافادت أن الهجومين المتزامنين اللذين حاولت الميليشيات تنفيذهما، بدآ\nبإطلاق قذائف كاتيوشا نحو مراكز رقابية سعودية في قرية القرن بمنطقة جازان، وكذلك\nمركز الشرفة في منطقة نجران ، لتتيح مساحة آمنة لعناصرهما الأمامية بالتقدم\nوالتسلل عبر الحدود السعودية.\n\n\n\nلكن سرعان ما أبطلت القوات السعودية تلك المحاولة، وذلك باستهداف العناصر\nالحوثية المتمركزة في الخطوط الخلفية عبر المدفعيات التي استهدفتهم على مسافة وصلت\n25 كم، فيما استهدفت باقي العناصر الذين حاولوا التسلل إلى الحدود السعودية\nبالأسلحة المباشرة والثقيلة.\n\n\n\nوساند طيران التحالف تلك العملية العسكرية من خلال تدميره لعدد من المركبات\nالعسكرية المتحركة، التي كانت تقل عناصر حوثية إلى الحدود السعودية .وأفادت مصادر\nعسكرية بمقتل قيادي وعشرات الحوثيين، مع تدمير آليات ومركبات عسكرية كانت تقل\nالميليشيات الحوثية للمواجهة العسكرية.',
                'Publish Time': '2017-06-25',
                Source: 'اخبار الساعة',
                EEI: "Yemen's Stability",
                Person: [''],
                Location: ['السعودية', 'اليمن', 'منطقتي جازان ونجران'],
                Organization: ['جماعة الحوثي وصالح', 'القوات السعودية'],
                KeyPhrases: ['عيد الفطر', 'الحوثيون', 'التحالف', 'الأسلحة المباشرة والثقيلة'],
                Picture: ["yemen's stability 1.jpg"],
            },
        ];
    }
    ItemsListComponent.prototype.filter = function () {
        this.filtered = true;
    };
    ItemsListComponent.prototype.getItemList = function () {
        return this.filtered ? this.itemList.slice(0, 5) : this.itemList;
    };
    ItemsListComponent.prototype.getSelectedItem = function () {
        return this.itemList[this.selectedItem];
    };
    ItemsListComponent.prototype.changeSelected = function (i) {
        this.selectedItem = i;
    };
    return ItemsListComponent;
}());
ItemsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'itemsList',
        styles: [__webpack_require__("../../../../../src/app/itemsList/itemsList.component.css")],
        template: __webpack_require__("../../../../../src/app/itemsList/itemsList.component.html"),
    }),
    __metadata("design:paramtypes", [])
], ItemsListComponent);

//# sourceMappingURL=itemsList.component.js.map

/***/ }),

/***/ "../../../../../src/app/reporter/reporter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  border-radius: 5px;\n\n  width: 300%;\n  height:41px;\n  transition: width 0.4s ease-in-out;\n}\n\ninput[type=text]:focus {\n  width: 350%;\n  background-color: white;\n}\n\ntd {\n   padding-right: 2%;\n}\n\n.conclusionArea {\n  width: 100%;\n  height: 150px;\n  resize: none;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 20px;\n  opacity: 0.9;\n  border-radius: 5px;\n}\n\n.generateBtn {\n  border-radius: 5px;\n  width: 139px;\n  height: 39px;\n  float: right;\n  padding-top: 1%;\n  padding-bottom: 2%;\n}\n\ntd {\n  padding-right: 2%;\n}\n\n.searchIcon {\n  font-size: 33px;\n}\n\n.mainTable {\n  border-spacing: 26px;\n  border-collapse: separate;\n  display: block;\n  margin: auto;\n  width: 96%;\n}\n\n\n.divInRow {\n  display: inline-block;\n}\n\n.middleDiv {\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  line-height: 0.5;\n  left: 33.834px;\n  top: 116.996px;\n  width: 233px;\n  height: 18px;\n  z-index: 24;\n  text-decoration:none;\n}\n\n\n.footer {\n  width: 100%;\n}\n\n.container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.col-1 {\n  width: 45%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.video-box {\n  margin-left: 1%;\n  background: rgba(7, 26, 33, 0.7);\n  overflow: hidden;\n  border-radius: .2vw;\n  width: 100%;\n  margin-bottom: 1%;\n  border: 1px rgba(255,255,255,.3) solid;\n}\n\n.text {\n  background: rgba(7, 26, 33, 0.7);\n  border-radius: .2vw;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%;\n  margin-bottom: .5%;\n  padding: 3%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 1%;\n}\n\n\n.firstSubTitle {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 2%;\n  margin-bottom: 4%;\n  padding-left: 3%;\n  display: block;\n}\n\n.summarize {\n  font-family: \"Roboto\", sans-serif;\n  float: right;\n  color: white;\n  font-size: 115%;\n  background: rgba(63, 71, 136, .5);\n  border: 2px rgba(255,255,255,.2) solid;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-transform: uppercase;\n  margin-left: 1%;\n  border-radius: .5vw;\n  transition: all .3s ease-in-out;\n  padding: 10px 20px;\n  margin-bottom: 2%;\n}\n\n.summarize:hover {\n  background: rgba(63, 71, 136, .8);\n  font-size: 120%;\n}\n\n.col-3 {\n  margin-left: .5%;\n  width: 25%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporter/reporter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTable\">\n  <div style=\"padding-bottom: 1%\">\n    <div class=\"divInRow\">\n      <span class=\"title\">Terror in the gulf</span>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"col-1\">\n      <div class=\"text\">\n        Saudi security forces on Friday (June 23rd) prevented an imminent attack on the Grand Mosque in Mecca, the country's Interior Ministry said on state-run TV.    A suspect in the planned attack on the mosque blew himself up in a nearby neighborhood when security forces surrounded a home where the man was hiding, according to the ministry.    The suspect refused to comply with demands to surrender, opened fire on security forces and then killed himself, officials said.    The explosion caused the partial collapse of the building in which the suspect was hiding. Six expatriates were injured and taken to a hospital...\n      </div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          Power Map\n        </div>\n        <div>\n          <video loop autoplay>\n            <source src=\"assets/movie.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\n          </video>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2\">\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          who against who\n        </div>\n        <div>\n          <img src=\"assets/2.1.png\">\n        </div>\n      </div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          key personas\n        </div>\n        <div>\n          <a [routerLink]=\"['/entity']\"><img src=\"assets/2.3.png\"></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          armament in the past 2 years of terror groups\n        </div>\n        <div>\n          <img src=\"assets/2.1.2.png\">\n        </div>\n      </div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          social network sentiment\n        </div>\n        <div>\n          <img src=\"assets/2.4.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div style =\"padding-top: 2%; padding-bottom: 1%;\">\n      <span class=\"title\">ANALYST EVELUATION</span>\n    </div>\n    <div>\n      <textarea class=\"conclusionArea\"></textarea>\n    </div>\n    <div class=\"summarize\">\n      generate report\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reporter/reporter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import {MdButtonModule, MdCheckboxModule} from '@angular/material';
var ReporterComponent = (function () {
    function ReporterComponent() {
    }
    return ReporterComponent;
}());
ReporterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'reporter',
        styles: [__webpack_require__("../../../../../src/app/reporter/reporter.component.css")],
        template: __webpack_require__("../../../../../src/app/reporter/reporter.component.html")
    })
], ReporterComponent);

//# sourceMappingURL=reporter.component.js.map

/***/ }),

/***/ "../../../../../src/app/reporter2/reporter2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text] {\n  border-radius: 5px;\n\n  width: 300%;\n  height: 41px;\n  transition: width 0.4s ease-in-out;\n}\n\ninput[type=text]:focus {\n  width: 350%;\n  background-color: white;\n}\n\ntd {\n  padding-right: 2%;\n}\n\n.title2 {\n  font-size: 130%;\n  text-transform: uppercase;\n  margin-bottom: 2%;\n  margin-top: 1s%;\n}\n\n.conclusionArea {\n  width: 100%;\n  height: 150px;\n  resize: none;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 20px;\n  opacity: 0.9;\n  border-radius: 5px;\n}\n\n.generateBtn {\n  border-radius: 5px;\n  width: 139px;\n  height: 39px;\n  float: right;\n  padding-top: 1%;\n  padding-bottom: 2%;\n}\n\ntd {\n  padding-right: 2%;\n}\n\n.searchIcon {\n  font-size: 33px;\n}\n\n.mainTable {\n  border-spacing: 26px;\n  border-collapse: separate;\n  display: block;\n  margin: auto;\n  width: 96%;\n}\n\n.divInRow {\n  display: inline-block;\n}\n\n.middleDiv {\n  padding-left: 1%;\n  padding-right: 1%;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n}\n\n.title {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  line-height: 0.5;\n  left: 33.834px;\n  top: 116.996px;\n  width: 233px;\n  height: 18px;\n  z-index: 24;\n  text-decoration: none;\n}\n\n.footer {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.footer > div {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.footer > div + div {\n  margin-left: .5%;\n}\n\n.containerExact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.col-1 {\n  width: 60%;\n  margin-right: .5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n\n.video-box {\n  background: rgba(7, 26, 33, 0.7);\n  overflow: hidden;\n  border-radius: .2vw;\n  width: 100%;\n  margin-bottom: .5%;\n}\n\n.text {\n  background: rgba(7, 26, 33, 0.7);\n  border-radius: .2vw;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%;\n  margin-bottom: .5%;\n  padding: 3%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.firstSubTitle {\n  font-size: 24px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-transform: uppercase;\n  text-decoration: none;\n  margin-top: 2%;\n  margin-bottom: 4%;\n  padding-left: 3%;\n  display: block;\n}\n\n.summarize {\n  font-family: \"Roboto\", sans-serif;\n  width: 20%;\n  color: white;\n  font-size: 115%;\n  background: rgba(63, 71, 136, .5);\n  border: 2px rgba(255, 255, 255, .2) solid;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-transform: uppercase;\n  border-radius: .5vw;\n  transition: all .3s ease-in-out;\n  padding: 10px 20px;\n  margin: 0 auto;\n}\n\n.summarize:hover {\n  background: rgba(63, 71, 136, .8);\n  font-size: 120%;\n}\n\n.right {\n  float: right;\n}\n\n.menuitems {\n  font-size: 16px;\n  font-family: \"Roboto\";\n  color: rgb(249, 253, 253);\n  text-decoration: underline;\n  text-transform: uppercase;\n  margin-right: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporter2/reporter2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTable\">\n  <div style=\"padding-bottom: 1%\">\n    <div style=\"display:flex;justify-content: space-between; flex-wrap: wrap; flex-shrink: 1\" class=\"divInRow\">\n      <div class=\"title\">Terror in Yemen</div>\n      <div style=\"flex-wrap: wrap !important; flex-shrink: 0; width: 20%\">\n        <span class=\"menuitems\" (click)=\"openHumint()\">HUMINT</span>\n        <span class=\"menuitems\" (click)=\"openOsint()\">OSINT</span>\n        <span class=\"menuitems\" (click)=\"openSigint()\">SIGINT</span>\n        <span class=\"menuitems\" (click)=\"openGeoint()\">GEOINT</span>\n        <span class=\"menuitems\" (click)=\"openCyber()\">CYBER</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"containerExact\">\n    <div class=\"col-1\">\n      <div class=\"text\">\n        <div class=\"title2\">Analyst Assessments</div>\n        Additional searches shows other indications regarding the failure of Yemen, which should not only be seen as an internal\n        threat upon its stability, but also as a threat to the security of the world's largest oil producer, Saudi Arabia.\n        And a threat to Saudi Arabia is not only a serious threat to the Arabian Peninsula and the entire Middle East, but\n        also to the world’s economy. It is, therefore, essential that the US and its allies in the Gulf formulate a plan\n        that can appease both Yemenite and revolutionary elites alike in Yemen's first steps towards democracy, given the\n        understanding that promoting national dialogue is the way to achieve long-term stability and security.\n      </div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          Attack and support zone\n        </div>\n        <div>\n          <img class=\"right\" src=\"assets/4-1.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-2\">\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          Isis activity in yemen\n        </div>\n        <div>\n          <img src=\"assets/4-2.png\">\n        </div>\n      </div>\n      <div class=\"video-box\">\n        <div class=\"firstSubTitle\">\n          key personas\n        </div>\n        <div>\n          <a [routerLink]=\"['/entity']\"><img src=\"assets/4-3.png\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <div>\n      <div style=\"padding-top: 2%; padding-bottom: 1%;\">\n        <span class=\"title\">ANALYST EVELUATION</span>\n      </div>\n      <div>\n        <textarea class=\"conclusionArea\"></textarea>\n      </div>\n    </div>\n    <div>\n      <div style=\"padding-top: 2%; padding-bottom: 1%;\">\n        <span class=\"title\">RECOMMENDATION</span>\n      </div>\n      <div>\n        <textarea class=\"conclusionArea\"></textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"summarize\">\n    generate report\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/reporter2/reporter2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_modal__ = __webpack_require__("../../../../angular2-modal/bundle/angular2-modal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__ = __webpack_require__("../../../../angular2-modal/plugins/bootstrap/bundle/angular2-modal-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_modal__ = __webpack_require__("../../../../../src/app/custom.modal.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reporter2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Reporter2Component = (function () {
    function Reporter2Component(modal, compiler, injector) {
        this.modal = modal;
        this.compiler = compiler;
        this.injector = injector;
    }
    Reporter2Component.prototype.openHumint = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({
            isBlocking: false,
            title: 'HUMINT',
            image: 'humint.png',
            content: '09/09/16 – CIA Humint reports indicate that Islamic state and al-Qaeda in the Arabian Peninsula (AQAP) are working together in Yemen in order to maximise their efficiency in counteracting counterterrorism, as opposed to the way al-Qaeda branches and IS do in their remainder territories.\
',
        }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    Reporter2Component.prototype.openOsint = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({
            isBlocking: false,
            title: 'OSINT',
            image: 'socialnetworks.png',
            content: '',
        }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    Reporter2Component.prototype.openSigint = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({
            isBlocking: false,
            title: 'SIGINT',
            image: 'sigint.png',
            content: '24/06/17 – The Saudi Intelligence units of the Interior Ministry intercepted a phone call between two men, who are associated with ISIS, in which they had planned to commit a double suicide attack on the Grand Mosque in Mecca, at the peak of the Hajj.',
        }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    Reporter2Component.prototype.openGeoint = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({
            isBlocking: false,
            title: 'GEOINT',
            image: 'geoint.png',
            content: '24/06/17 – The Visint Corps of the NCA captured successfully the Islamic State’s leader in Yemen, Abu Bilal al-Harby:',
        }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    Reporter2Component.prototype.openCyber = function () {
        this.modal.open(__WEBPACK_IMPORTED_MODULE_3__custom_modal__["a" /* CustomModal */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_modal__["n" /* overlayConfigFactory */])({
            isBlocking: false,
            title: 'CYBER',
            image: 'cyber.png',
            content: '09/05/16 – At the end of April 2015, the US Government announced the first attack conducted by the Cyber Command against online activities conducted by members of the ISIS. The war against the Islamic State also has cyberspace as a battlefield, for this reason, the US Cyber Command plans to run hacking operations and uses cyber weapons to destroy computer systems used by the ISIL, to destroy it functions (e.g. propaganda, economic support to militants) and to track its cyber hubs.\
At the recent meeting held in Hanover, Germany, the US President Barack Obama discussed with other leaders about the cyber strategy to contrast the Islamic State online.\
In March, Senior Pentagon officials confirmed the US Army’s first use of information warfare operations against the Islamic State as part of the campaign conducted to take back the Iraqi city of Mosul.\
The US military is using cyber tools to contrast the ISIS troops in the area, interfering members’ operation and communication.\
Skill shortage\
Security experts believe that the IS could speed up the growth of its cyber capabilities by paying cyber mercenaries or recruiting young hackers.\
Earlier 2016, intelligence experts reported that members of the IS were willing to pay Indian hackers to hack into government websites and gain access to sensitive documents. The members of the ISIS aim to create a database of potential Indian candidates from social media, who will hack government websites will receive up to $10,000 for every successful security breach.\
“There are various underground communities online where hackers interact regularly. Our investigation reveals that for the past six months, lucrative offers for stealing government data came pouring in and hackers were offered a huge sum. Such amount has never been offered to any Indian hacker before. We found that the offers were being made to spread ISIS reach in the country,” said the cyber-crime expert Kislay Choudhary.\
The hack of Government systems could allow terrorists to gather intelligence on their targets; the intelligence is aware that the Dash is focusing its recruiting activity on the Indian hacking community; many hackers are based out of various parts of South India, including Kashmir, Maharashtra, and Rajasthan.\
',
        }, __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["b" /* BSModalContext */]));
    };
    return Reporter2Component;
}());
Reporter2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'reporter2',
        styles: [__webpack_require__("../../../../../src/app/reporter2/reporter2.component.css")],
        template: __webpack_require__("../../../../../src/app/reporter2/reporter2.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_modal_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Compiler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Compiler */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Injector */]) === "function" && _c || Object])
], Reporter2Component);

var _a, _b, _c;
//# sourceMappingURL=reporter2.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map