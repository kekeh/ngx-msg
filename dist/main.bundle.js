webpackJsonp([1,4],{

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 130;


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(142);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNgxMsgApp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyNgxMsgApp = (function () {
    function MyNgxMsgApp() {
        console.log('constructor: MyNgxMsgApp');
    }
    return MyNgxMsgApp;
}());
MyNgxMsgApp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'ngx-msg-app',
        template: __webpack_require__(299),
        styles: [__webpack_require__(295)],
    }),
    __metadata("design:paramtypes", [])
], MyNgxMsgApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_ngx_msg__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_msg__ = __webpack_require__(118);
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
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyNgxMsgApp */], __WEBPACK_IMPORTED_MODULE_5__sample_ngx_msg__["a" /* SampleNgxMsg */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_msg__["NgxMsgModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyNgxMsgApp */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_ngx_msg__ = __webpack_require__(141);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sample_ngx_msg__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_msg__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleNgxMsg; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleNgxMsg = (function () {
    function SampleNgxMsg(msgService, configService) {
        this.msgService = msgService;
        this.configService = configService;
        this.options = {
            position: __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].TopRight
        };
        this.radioBtnSelection = 1;
        configService.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].TopRight;
        configService.visibleTime = 4000;
        configService.closeOnClick = true;
    }
    SampleNgxMsg.prototype.ngOnInit = function () {
    };
    SampleNgxMsg.prototype.successMsg = function () {
        this.msgService.message({ level: __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgLevel"].Succeed, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' });
    };
    SampleNgxMsg.prototype.infoMsg = function () {
        this.msgService.message({ level: __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgLevel"].Info, text: 'Duis non ullamcorper dui. Nulla ullamcorper ultricies urna ut accumsan. Fusce scelerisque orci non imperdiet sodales. Praesent id elit vitae neque lacinia euismod sed id odio.' });
    };
    SampleNgxMsg.prototype.warningMsg = function () {
        this.msgService.message({ level: __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgLevel"].Warning, text: 'Phasellus tempor mi ac placerat euismod. ' });
    };
    SampleNgxMsg.prototype.errorMsg = function () {
        this.msgService.message({ level: __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgLevel"].Error, text: 'Sed et urna non dui auctor tincidunt. Morbi et ligula ut eros tristique euismod at ut tellus.', visibleTime: 5000 });
    };
    SampleNgxMsg.prototype.onRadioBtnClicked = function (value) {
        var copy = this.getCopyOfOptions();
        if (value === 1) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].TopRight;
        }
        else if (value === 2) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].TopLeft;
        }
        else if (value === 3) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].BottomRight;
        }
        else if (value === 4) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].BottomLeft;
        }
        else if (value === 5) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].TopFull;
        }
        else if (value === 6) {
            copy.position = __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgPosition"].BottomFull;
        }
        this.options = copy;
        this.radioBtnSelection = value;
    };
    SampleNgxMsg.prototype.getCopyOfOptions = function () {
        return JSON.parse(JSON.stringify(this.options));
    };
    return SampleNgxMsg;
}());
SampleNgxMsg = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'sample-ngx-msg',
        template: __webpack_require__(300),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgConfigService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_msg__["NgxMsgConfigService"]) === "function" && _b || Object])
], SampleNgxMsg);

var _a, _b;
//# sourceMappingURL=sample-ngx-msg.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(75)();
// imports


// module
exports.push([module.i, ".pagecontent {\n  margin: 10px 300px;\n}\n\n.maintitle {\n  background-color: #EEE;\n  height: 180px;\n  border-bottom: 1px solid #CCC;\n  background: linear-gradient(to right, rgba(44, 83, 158, 1) 0%, rgba(44, 83, 158, 1) 100%);\n  text-align: center;\n}\n\n.maintitle div:first-child {\n  display: inline-block;\n  color: #FFF;\n  font-size: 46px;\n  font-weight: bold;\n  margin-top: 48px;\n}\n\n.maintitle div:last-child {\n  color: #FFF;\n  font-size: 18px;\n}\n\n.tabcontainer {\n  display: table;\n  width: 100%;\n  border-spacing: 2px;\n}\n\n.tab {\n  display: table-cell;\n  border-radius: 4px;\n  width: 33.33333%;\n  padding: 8px 0;\n  text-align: center;\n}\n\n.activetab {\n  background-color: #2C539E;\n  color: #FFF;\n}\n\n.inactivetab {\n  color: #2C539E;\n}\n\n.inactivetab:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.pagetext {\n  margin: 20px 0;\n}\n\nhr {\n  margin: 6px 0;\n  border: none;\n  height: 1px;\n  background-image: linear-gradient(to right, #DDD, #555, #DDD);\n}\n\n@media screen and (max-width: 1200px) {\n  .pagecontent {\n    margin: 10px 40px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

module.exports = "<div class=\"maintitle\">\n    <div>ngx-msg</div>\n    <div>Angular notification component</div>\n</div>\n<div class=\"pagecontent\">\n    <div>\n      <sample-ngx-msg>loading...</sample-ngx-msg>\n    </div>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

module.exports = "<style>\n  .radio-btn {\n    margin-right: 4px;\n    cursor: pointer;\n  }\n  .radio-btn-label {\n    font-size: 16px;\n  }\n  .button-success,\n  .button-info,\n  .button-warning,\n  .button-error {\n    padding: 2px 6px;\n    cursor: pointer;\n    border: 1px solid #AAA;\n    border-radius: 3px;\n    font-size: 14px;\n  }\n\n  .button-success:hover,\n  .button-info:hover,\n  .button-warning:hover,\n  .button-error:hover {\n    background-color: #78FA89;\n    color: #000;\n  }\n\n  .button-success {\n    background-color: #CFEAC4;\n    color: #2C763E;\n  }\n\n  .button-info {\n    background-color: #CFE3ED;\n    color: #3A87AD;\n  }\n\n  .button-warning {\n    background-color: #FFFFCC;\n    color: #8E6621;\n  }\n\n  .button-error {\n    background-color: #F2DEDE;\n    color: #A94444;\n  }\n</style>\n\n<ngx-msg [options]=\"options\"></ngx-msg>\n\n<div class=\"maintext\">Angular notification component</div>\n<ul>\n  <li>Source code of the component is <a href=\"https://github.com/kekeh/ngx-msg\" target=\"_blank\">here</a></li>\n</ul>\n\n<hr/>\n\n<div>\n  <p class=\"radio-btn-container\">\n    <input class=\"radio-btn\" type=\"radio\" value=\"1\" [checked]=\"radioBtnSelection === 1\" (change)=\"onRadioBtnClicked(1)\"><label class=\"radio-btn-label\">Top right</label><br/>\n    <input class=\"radio-btn\"  type=\"radio\" value=\"2\" [checked]=\"radioBtnSelection === 2\" (change)=\"onRadioBtnClicked(2)\"><label class=\"radio-btn-label\">Top left</label><br/>\n\n    <input class=\"radio-btn\"  type=\"radio\" value=\"3\" [checked]=\"radioBtnSelection === 3\" (change)=\"onRadioBtnClicked(3)\"><label class=\"radio-btn-label\">Bottom right</label><br/>\n    <input class=\"radio-btn\"  type=\"radio\" value=\"4\" [checked]=\"radioBtnSelection === 4\" (change)=\"onRadioBtnClicked(4)\"><label class=\"radio-btn-label\">Bottom left</label><br/>\n\n    <input class=\"radio-btn\"  type=\"radio\" value=\"5\" [checked]=\"radioBtnSelection === 5\" (change)=\"onRadioBtnClicked(5)\"><label class=\"radio-btn-label\">Top full</label><br/>\n    <input class=\"radio-btn\"  type=\"radio\" value=\"6\" [checked]=\"radioBtnSelection === 6\" (change)=\"onRadioBtnClicked(6)\"><label class=\"radio-btn-label\">Bottom full</label><br/>\n  </p>\n\n\n  <button class=\"button-success\" type=\"button\" (click)=\"successMsg()\">Success message</button>\n  <button class=\"button-info\" type=\"button\" (click)=\"infoMsg()\">Info message</button>\n  <button class=\"button-warning\" type=\"button\" (click)=\"warningMsg()\">Warning message</button>\n  <button class=\"button-error\" type=\"button\" (click)=\"errorMsg()\">Error message</button>\n</div>\n\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ })

},[325]);
//# sourceMappingURL=main.bundle.js.map