webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".activity-desc h5 {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".ele-strip ul li {\r\n  font-size: 1em;\r\n  color: #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.selected {\r\n  font-weight: bold;\r\n  color: cornflowerblue !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{hotel.name}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"hotel.additionalImage\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{hotel.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{hotel.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\" (click)=\"newSelectedHotel.emit(hotel)\">\n  <div class=\"activity-desc\">\n    <h5>{{hotel.name}}</h5>\n    <p>{{hotel.address}}</p>\n    <h6>{{hotel.telephone}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li><img [src]='hotel.imagePreview' alt=\"\"/></li>\n      <li><img [src]='hotel.additionalImagePreview' alt=\"\"/></li>\n    </ul>\n    <span>{{hotel.rating}} *</span>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{city.name}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{city.airTemperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{city.waterTemperature}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<div class=\"element\">\n  <div class=\"element-left\">\n    <div class=\"element-bg-img\">\n      <img [src]=\"selectedHotel.image\" alt=\"\" class=\"img-responsive\">\n    </div>\n    <div class=\"element-left-bottom\">\n      <div class=\"ele-strip\">\n        <ul>\n          <li [ngClass]=\"{selected: isSelectedRaiting(null)}\" (click)=\"setSelectedRating(null)\">All</li>\n          <li [ngClass]=\"{selected: isSelectedRaiting(rating)}\" *ngFor=\"let rating of [4, 5]\" (click)=\"setSelectedRating(rating)\">{{rating}} *</li>\n        </ul>\n      </div>\n      <div class=\"village\">\n        <h3>Righteous indignation & like</h3>\n        <span class=\"line\"> </span>\n        <div class=\"activity_box\">\n          <div class=\"scrollbar\" id=\"style-2\">\n            <widget-item *ngFor=\"let hotel of (hotels | hotelFilter:selectedRating)\"\n                         (newSelectedHotel)=\"setSelectedHotel($event)\" [hotel]=\"hotel\"></widget-item>\n            <div class=\"clear\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"element-right\">\n    <widget-weather [city]=\"selectedHotel.city\"></widget-weather>\n    <widget-details [hotel]=\"selectedHotel\"></widget-details>\n  </div>\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    imagePath: 'homework2/assets/images/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 66;


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_widget_widget_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(48);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_widget_widget_module__["a" /* WidgetModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(48);
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HotelFilterPipe = (function () {
    function HotelFilterPipe() {
    }
    HotelFilterPipe.prototype.transform = function (hotels, selectedRating) {
        return !selectedRating ? hotels : hotels.filter(function (hotel) { return hotel.rating === selectedRating; });
    };
    return HotelFilterPipe;
}());
HotelFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'hotelFilter'
    })
], HotelFilterPipe);

//# sourceMappingURL=hotel-filter.pipe.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return WidgetDetailsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], WidgetDetailsComponent.prototype, "hotel", void 0);
WidgetDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'widget-details',
        template: __webpack_require__(137),
        styles: [__webpack_require__(132)]
    })
], WidgetDetailsComponent);

//# sourceMappingURL=widget-details.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
        this.newSelectedHotel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    return WidgetItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], WidgetItemComponent.prototype, "hotel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]) === "function" && _a || Object)
], WidgetItemComponent.prototype, "newSelectedHotel", void 0);
WidgetItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'widget-item',
        template: __webpack_require__(138),
        styles: [__webpack_require__(133)]
    })
], WidgetItemComponent);

var _a;
//# sourceMappingURL=widget-item.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
    return WidgetWeatherComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Object)
], WidgetWeatherComponent.prototype, "city", void 0);
WidgetWeatherComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'widget-weather',
        template: __webpack_require__(139),
        styles: [__webpack_require__(134)]
    })
], WidgetWeatherComponent);

//# sourceMappingURL=widget-weather.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_data_hotels__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        this.setSelectedHotel(!rating ? this.hotels[0] : this.hotels.filter(function (hotel) { return hotel.rating === _this._selectedRating; })[0]);
    };
    Object.defineProperty(WidgetComponent.prototype, "selectedRating", {
        get: function () {
            return this._selectedRating;
        },
        enumerable: true,
        configurable: true
    });
    WidgetComponent.prototype.isSelectedRaiting = function (value) {
        return value === this._selectedRating;
    };
    return WidgetComponent;
}());
WidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'widget',
        template: __webpack_require__(140),
        styles: [__webpack_require__(135)]
    })
], WidgetComponent);

//# sourceMappingURL=widget.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__widget_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_weather_widget_weather_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_details_widget_details_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__widget_item_widget_item_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_pipes_hotel_filter_pipe__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WidgetModule = (function () {
    function WidgetModule() {
    }
    return WidgetModule;
}());
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
    })
], WidgetModule);

//# sourceMappingURL=widget.module.js.map

/***/ })

},[167]);
//# sourceMappingURL=main.bundle.js.map