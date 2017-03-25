webpackJsonp([1,4],{

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    imagePath: 'homework2/assets/images/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 243;


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_widget_widget_module__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(224);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_widget_widget_module__["a" /* WidgetModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(224);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hotels; });

var hotels = [
    {
        name: 'Tiffany Roma Suite',
        rating: 3,
        address: 'Via Antonio Salandra 6, Via Veneto',
        telephone: '+375291112345',
        following: 300,
        followers: 500,
        image: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + '46.jpg',
        imagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'r46074236.jpg',
        additionalImage: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'b1.jpg',
        additionalImagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'res.jpg',
        city: {
            name: 'Rome',
            airTemperature: 25,
            waterTemperature: 20
        }
    },
    {
        name: 'Stardust Rome',
        rating: 4,
        address: 'Via Ostia 28, Vatican City - Prati',
        telephone: '+375299984538',
        following: 311,
        followers: 595,
        image: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + '61694.jpg',
        imagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'r61694.jpg',
        additionalImage: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + '7384495.jpg',
        additionalImagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'res7384495.jpg',
        city: {
            name: 'Bologna',
            airTemperature: 26,
            waterTemperature: 18
        }
    },
    {
        name: 'Santamaria Inn',
        rating: 5,
        address: 'Via Rattazzi 2C, Central Station',
        telephone: '+375294582298',
        following: 405,
        followers: 984,
        image: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + '61321.jpg',
        imagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'r61321.jpg',
        additionalImage: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + '21140.jpg',
        additionalImagePreview: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].imagePath + 'res21140.jpg',
        city: {
            name: 'Parma',
            airTemperature: 23,
            waterTemperature: 15
        }
    }
];
//# sourceMappingURL=hotels.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotelFilterPipe = (function () {
    function HotelFilterPipe() {
    }
    HotelFilterPipe.prototype.transform = function (hotels, selectedRating) {
        return !selectedRating ? hotels : hotels.filter(function (hotel) { return hotel.rating === selectedRating; });
    };
    HotelFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Pipe */])({
            name: 'hotelFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], HotelFilterPipe);
    return HotelFilterPipe;
}());
//# sourceMappingURL=hotel-filter.pipe.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetDetailsComponent = (function () {
    function WidgetDetailsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], WidgetDetailsComponent.prototype, "hotel", void 0);
    WidgetDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'widget-details',
            template: __webpack_require__(407),
            styles: [__webpack_require__(402)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetDetailsComponent);
    return WidgetDetailsComponent;
}());
//# sourceMappingURL=widget-details.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetItemComponent = (function () {
    function WidgetItemComponent() {
        this.newSelectedHotel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], WidgetItemComponent.prototype, "hotel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], WidgetItemComponent.prototype, "newSelectedHotel", void 0);
    WidgetItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'widget-item',
            template: __webpack_require__(408),
            styles: [__webpack_require__(403)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetItemComponent);
    return WidgetItemComponent;
    var _a;
}());
//# sourceMappingURL=widget-item.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetWeatherComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WidgetWeatherComponent = (function () {
    function WidgetWeatherComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], WidgetWeatherComponent.prototype, "city", void 0);
    WidgetWeatherComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'widget-weather',
            template: __webpack_require__(409),
            styles: [__webpack_require__(404)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetWeatherComponent);
    return WidgetWeatherComponent;
}());
//# sourceMappingURL=widget-weather.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_data_hotels__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = (function () {
    function WidgetComponent() {
        this.hotels = __WEBPACK_IMPORTED_MODULE_1__common_data_hotels__["a" /* hotels */];
        this._selectedHotel = this.hotels[0];
        this._selectedRating = null;
    }
    WidgetComponent.prototype.setSelectedHotel = function (hotel) {
        this._selectedHotel = hotel;
    };
    Object.defineProperty(WidgetComponent.prototype, "selectedHotel", {
        get: function () {
            return this._selectedHotel;
        },
        enumerable: true,
        configurable: true
    });
    WidgetComponent.prototype.setSelectedRating = function (rating) {
        var _this = this;
        this._selectedRating = rating;
        this._selectedHotel = !rating ? this.hotels[0] : this.hotels.filter(function (hotel) { return hotel.rating === _this._selectedRating; })[0];
    };
    Object.defineProperty(WidgetComponent.prototype, "selectedRating", {
        get: function () {
            return this._selectedRating;
        },
        enumerable: true,
        configurable: true
    });
    WidgetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'widget',
            template: __webpack_require__(410),
            styles: [__webpack_require__(405)]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetComponent);
    return WidgetComponent;
}());
//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_weather_widget_weather_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_details_widget_details_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_item_widget_item_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_pipes_hotel_filter_pipe__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WidgetModule = (function () {
    function WidgetModule() {
    }
    WidgetModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__widget_component__["a" /* WidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_3__widget_weather_widget_weather_component__["a" /* WidgetWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_4__widget_details_widget_details_component__["a" /* WidgetDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__widget_item_widget_item_component__["a" /* WidgetItemComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_pipes_hotel_filter_pipe__["a" /* HotelFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__widget_component__["a" /* WidgetComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], WidgetModule);
    return WidgetModule;
}());
//# sourceMappingURL=widget.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, ".activity-desc h5 {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, ".ele-strip ul li {\r\n  font-size: 1em;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{hotel.name}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"hotel.additionalImage\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{hotel.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{hotel.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\" (click)=\"newSelectedHotel.emit(hotel)\">\n  <div class=\"activity-desc\">\n    <h5>{{hotel.name}}</h5>\n    <p>{{hotel.address}}</p>\n    <h6>{{hotel.telephone}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li><img [src]='hotel.imagePreview' alt=\"\"/></li>\n      <li><img [src]='hotel.additionalImagePreview' alt=\"\"/></li>\n    </ul>\n    <span>{{hotel.rating}} *</span>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{city.name}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{city.airTemperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{city.waterTemperature}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<div class=\"element\">\n  <div class=\"element-left\">\n    <div class=\"element-bg-img\">\n      <img [src]=\"selectedHotel.image\" alt=\"\" class=\"img-responsive\">\n    </div>\n    <div class=\"element-left-bottom\">\n      <div class=\"ele-strip\">\n        <ul>\n          <li (click)=\"setSelectedRating(null)\">All</li>\n          <li *ngFor=\"let rating of [4, 5]\" (click)=\"setSelectedRating(rating)\">{{rating}} *</li>\n        </ul>\n      </div>\n      <div class=\"village\">\n        <h3>Righteous indignation & like</h3>\n        <span class=\"line\"> </span>\n        <div class=\"activity_box\">\n          <div class=\"scrollbar\" id=\"style-2\">\n            <widget-item *ngFor=\"let hotel of (hotels | hotelFilter:selectedRating)\"\n                         (newSelectedHotel)=\"setSelectedHotel($event)\" [hotel]=\"hotel\"></widget-item>\n            <div class=\"clear\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"element-right\">\n    <widget-weather [city]=\"selectedHotel.city\"></widget-weather>\n    <widget-details [hotel]=\"selectedHotel\"></widget-details>\n  </div>\n</div>\n"

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(244);


/***/ })

},[423]);
//# sourceMappingURL=main.bundle.js.map