(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-logo {\r\n  height: 80px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n.app-search-insert {\r\n  display: flex;\r\n  flex-direction: column;\r\n }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-logo\"><a routerLink=\"/\"><img src=\"../assets/img/logo.png\" alt=\"Toweco\"></a></div>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'toweco-test';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service */ "./src/app/service.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                _stars_stars_component__WEBPACK_IMPORTED_MODULE_8__["StarsComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service__WEBPACK_IMPORTED_MODULE_10__["Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">{{category.name}}</div>\r\n<div class=\"conpanies\">\r\n  <div *ngFor=\"let company of companyList\" class=\"company-card\" routerLink=\"/company\" [queryParams]=\"{id: company.id}\">\r\n    <img class=\"company-card__logo\" src=\"\" alt=\"\">\r\n    <div class=\"company-card__text\">\r\n      <div class=\"label\">{{company.name}}</div>\r\n      <div class=\"rate\">{{company.rate}}</div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(routeAct, service) {
        var _this = this;
        this.routeAct = routeAct;
        this.service = service;
        this.data = [];
        this.category = {};
        this.routeAct.queryParams.subscribe(function (params) {
            _this.categoryId = params.id;
            service.getCategory().subscribe(function (cat) {
                _this.data = cat['categories'];
                _this.getCategory(_this.data);
            });
            _this.companyList = service.getCompanies(params.id);
        });
    }
    CategoryComponent.prototype.getCategory = function (data) {
        var _this = this;
        data.forEach(function (element) {
            if (element.id == _this.categoryId) {
                _this.category = element;
            }
        });
    };
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n.info {\r\n  margin: 15px 0;\r\n}\r\n.write-review {\r\n  margin: 15px 0;\r\n  padding: 5px 10px;\r\n  border: 2px solid #fff;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  box-shadow: none;\r\n  transition: 0.5s;\r\n}\r\n.write-review:hover {\r\n  background-color: #60b0ff\r\n}\r\n.reviews {\r\n\r\n}\r\n.review {\r\n  margin-top: 10px;\r\n  border-bottom: 3px solid white;\r\n}\r\n.review__author {\r\n  width: 100%;\r\n  font-weight: bold;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 5px;\r\n}\r\n.review__author .stars{\r\n  \r\n}"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"label\">{{company.name}}</div>\r\n<div class=\"info\">{{company.category}}</div>\r\n<app-stars [rate] = \"rate\"></app-stars>\r\n<button class=\"write-review\" routerLink = \"/\" [queryParams] = \"{id: company.id}\">Оставить отзыв</button>\r\n<div class=\"reviews\">\r\n  <div>Отзывы ({{reviewList.length}})</div>\r\n  <div class=\"review\" *ngFor=\"let review of reviewList\">\r\n    <div class=\"review__author\">\r\n      <span>{{review.author}}</span> \r\n      <span class=\"stars\">\r\n        <app-stars [review]=\"true\" [rate] = \"review.rating\"></app-stars>\r\n      </span> </div>\r\n    <div class=\"review__text\">{{review.Text}}</div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(routeAct, service) {
        var _this = this;
        this.routeAct = routeAct;
        this.service = service;
        this.company = {
            id: 0,
            name: 'none',
            category: 'none'
        };
        this.rate = 0;
        this.reviewList = [];
        this.routeAct.queryParams.subscribe(function (params) {
            service.getCategory().subscribe(function (data) {
                console.log(data);
                data["companies"].forEach(function (elem) {
                    if (elem.id == params.id) {
                        _this.company = elem;
                    }
                });
                data["review"].forEach(function (elem) {
                    if (elem.company == params.id) {
                        _this.reviewList.push(elem);
                    }
                });
                _this.rate = _this.getRate();
            });
        });
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent.prototype.getRate = function () {
        var numerator = 0;
        this.reviewList.forEach(function (rev) {
            numerator += (5 - rev.rating) * rev.relevance;
        });
        console.log(numerator);
        return 5 - (numerator / this.reviewList.length);
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (options, value) {
        if (value == undefined || value == "")
            return options;
        var result = [];
        var i = 0;
        if (options != undefined) {
            while (options[i] != undefined) {
                if (options[i].name.toLowerCase().indexOf(value) > -1) {
                    result.push(options[i]);
                }
                i++;
            }
        }
        return result;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");



var appRoutes = [
    { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"] },
    { path: 'company', component: _company_company_component__WEBPACK_IMPORTED_MODULE_1__["CompanyComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"] }
];


/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 90%;\r\n}\r\n.search-input, .review-input {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  padding: 5px 10px;\r\n  border: 2px solid #fff;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  box-shadow: none;\r\n}\r\n.company-card {\r\n  width: 100%;\r\n  height: 100px;\r\n  max-width: 300px;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  border: 4px solid white;\r\n  border-radius: 5px;\r\n  margin-top: 10px;\r\n}\r\n.company-card__logo {\r\n  height: 50px;\r\n}\r\n.company-card__text {\r\n\r\n}\r\n.company-card__close {\r\n  height: 30px;\r\n}\r\n.send-review {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  margin: 15px 0;\r\n  padding: 5px 10px;\r\n  border: 2px solid #fff;\r\n  border-radius: 5px;\r\n  background-color: #fff;\r\n  box-shadow: none;\r\n  transition: 0.5s;\r\n}\r\n.send-review:hover {\r\n  background-color: #60b0ff\r\n}\r\n.review-input {\r\n  resize: none;\r\n}\r\n.search-result {\r\n  display: flex;\r\n    flex-direction: column;\r\n    background-color: white;\r\n    z-index: 10;\r\n    width: 90%;\r\n    max-width: 300px;\r\n    padding: 0px 12px;\r\n    position: absolute;\r\n    top: 114px;\r\n    border-radius: 5px 5px 5px 5px;\r\n    height: 0px;\r\n    transition: 0.5s;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n.search-result_close .search-result__elem {\r\n  display: none;\r\n}\r\n.search-result_open {\r\n  height: 170px;\r\n}\r\n.search-result__elem {\r\n  margin: 5px 0;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<input class=\"search-input\" placeholder=\"Search\" #searchInput type=\"text\" (keyup)=\"search(searchInput.value)\" (focusin)=\"showList = true\" >\r\n<div class=\"search-result\" [ngClass]=\"showList ? 'search-result_open' : 'search-result_close'\">\r\n  <div class=\"search-result__elem\" *ngFor=\"let elem of searchArray | filter : searchInput.value\" \r\n      [ngClass]=\"elem.type == 'category' ? 'category': 'company'\" \r\n      [routerLink] = \"(elem.type == 'category') ? '/category' : '/'\" \r\n      [queryParams] = \"{id: elem.id}\"\r\n      (click) = \"showList = false\">\r\n    {{elem.name}}\r\n  </div>\r\n</div>\r\n<div *ngIf=\"companyChoosen\" class=\"company-card\" routerLink=\"/company\" [queryParams] = \"{id: company.id}\">\r\n  <img class=\"company-card__logo\" [src]=\"'../../assets/img/logoC' + company.id + '.png'\">\r\n  <div class=\"company-card__text\">\r\n    <div class=\"category\">{{company.category}}</div>\r\n    <div class=\"name\">{{company.name}}</div>\r\n  </div>\r\n  <img src=\"../../assets/img/cross.png\" alt=\"close\" class=\"company-card__close\" (click) = \"clear()\">\r\n</div>\r\n<app-stars [allowed]=\"companyChoosen\"></app-stars>\r\n<textarea [disabled]=\"!companyChoosen\" class=\"review-input\" #reviewText name=\"review\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\r\n<button [disabled]=\"!companyChoosen\" class=\"send-review\" (click)=\"sendReview(reviewText.value)\">Отправить отзыв</button>\r\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/app/service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(routeAct, service) {
        var _this = this;
        this.routeAct = routeAct;
        this.service = service;
        this.companyChoosen = false;
        this.company = {
            id: 2,
            name: "Name",
            category: "Category"
        };
        this.companies = [];
        this.categories = [];
        this.searchArray = [];
        this.searchResult = [];
        service.getCategory().subscribe(function (data) {
            _this.companies = data['companies'];
            _this.categories = data['categories'];
            _this.makeSearchArray();
        });
        routeAct.queryParams.subscribe(function (params) {
            _this.selectObj({ type: "company", id: params.id });
            _this.company['id'] = params.id;
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.selectObj = function (obj) {
        var _this = this;
        this.clear();
        if (obj['type'] == 'company' && obj['id'] != undefined) {
            this.companyChoosen = true;
            this.service.getCategory().subscribe(function (data) {
                data['companies'].forEach(function (elem) {
                    if (elem.id == obj['id']) {
                        _this.company = elem;
                    }
                });
                data['categories'].forEach(function (elem) {
                    if (elem.id == _this.company.category) {
                        _this.company.category = elem.name;
                    }
                });
            });
        }
    };
    SearchComponent.prototype.makeSearchArray = function () {
        var _this = this;
        this.companies.forEach(function (elem) {
            _this.searchArray.push({ type: 'company', name: elem.name, id: elem.id });
        });
        this.categories.forEach(function (elem) {
            _this.searchArray.push({ type: 'category', name: elem.name, id: elem.id });
        });
    };
    SearchComponent.prototype.clear = function () {
        this.companyChoosen = false;
    };
    SearchComponent.prototype.search = function (str) {
        this.searchResult = this.companies;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            host: { class: 'app-search-insert' },
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service__WEBPACK_IMPORTED_MODULE_2__["Service"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/service.ts":
/*!****************************!*\
  !*** ./src/app/service.ts ***!
  \****************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
    }
    Service.prototype.getCompany = function (id) {
        this.http.get("assets/json-powered/db.json").subscribe(function (data) {
            data['companies'].forEach(function (element) {
                if (element.id == id) {
                }
            });
        });
        return;
    };
    Service.prototype.getReviews = function (id) {
        var reviews = [];
        this.http.get("assets/json-powered/db.json").subscribe(function (data) {
            data['companies'].forEach(function (element) {
                if (element.company == id) {
                    reviews.push(element);
                }
            });
            return reviews;
        });
    };
    Service.prototype.getCompanies = function (category) {
        var companies = [];
        this.http.get("assets/json-powered/db.json").subscribe(function (data) {
            data['companies'].forEach(function (element) {
                if (element.category == category) {
                    companies.push(element);
                }
            });
            return companies;
        });
    };
    Service.prototype.getCategory = function () {
        // let categories:object[] = [];
        return this.http.get("assets/json-powered/db.json");
    };
    Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/*!*******************************************!*\
  !*** ./src/app/stars/stars.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 10px 0;\r\n}\r\n.half-star {\r\n  height: 30px;\r\n}\r\n.half-star-container:nth-child(even) img{\r\n  -webkit-transform: rotateY(180deg);\r\n          transform: rotateY(180deg);\r\n}\r\n.half-star:hover {\r\n  background-image: url('starf.png')\r\n}\r\n.small {\r\n  -webkit-transform: scale(0.5);\r\n          transform: scale(0.5);\r\n  margin-right: -35px;\r\n}"

/***/ }),

/***/ "./src/app/stars/stars.component.html":
/*!********************************************!*\
  !*** ./src/app/stars/stars.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"star-container\" [style.opacity]=\"allowed ? '1' : '0.5'\" [ngClass]=\"review ? 'small': ''\">\r\n  <div class=\"stars-img\">\r\n    <span class=\"half-star-container\" *ngFor=\"let value of rateGrade; let i = index\">\r\n      <img class=\"half-star\" [src]=\"rate >= value ? '../../assets/img/starf.png' : '../../assets/img/stare.png'\"\r\n       (mouseover)=\"changeRate(value)\"\r\n       (click)=\"lockRate(value)\">\r\n    </span>\r\n    \r\n  </div>\r\n  <span class=\"fill-star\" *ngFor=\"let value of rateGrade\" (mouseover) = \"fillStarBar(value)\"></span>\r\n</div>"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rateGrade = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
        this.rate = 0;
        this.allowed = false;
        this.review = false;
        this.allowChanging = this.allowed;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.changeRate = function (value) {
        if (this.allowed) {
            this.rate = value;
        }
    };
    StarsComponent.prototype.lockRate = function (value) {
        if (this.allowChanging) {
            this.rate = value;
            this.allowed = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarsComponent.prototype, "rate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarsComponent.prototype, "allowed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], StarsComponent.prototype, "review", void 0);
    StarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! ./stars.component.html */ "./src/app/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\practice\toweco-test\Toweco-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map