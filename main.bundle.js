webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_menuItems__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Action__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MenuService = (function () {
    function MenuService() {
        this._fullMenu = __WEBPACK_IMPORTED_MODULE_3__data_menuItems__["a" /* MENU_ITEMS */];
        this._activeMenuItem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        this._deleteEmails = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MenuService.prototype.resolve = function (route, state) {
        this._deleteEmails.next(__WEBPACK_IMPORTED_MODULE_5__model_Action__["a" /* Action */].DISABLE);
        for (var _i = 0, _a = this._fullMenu; _i < _a.length; _i++) {
            var menuItem = _a[_i];
            for (var _b = 0, _c = menuItem.subItems; _b < _c.length; _b++) {
                var subMenuItem = _c[_b];
                if (__WEBPACK_IMPORTED_MODULE_4__utils_service__["a" /* UtilsService */].sameUrl(state.url, subMenuItem)) {
                    this._activeMenuItem.next(subMenuItem);
                    return subMenuItem;
                }
            }
        }
    };
    Object.defineProperty(MenuService.prototype, "fullMenu", {
        get: function () {
            return this._fullMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuService.prototype, "activeMenuItem", {
        get: function () {
            return this._activeMenuItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuService.prototype, "deleteEmails", {
        get: function () {
            return this._deleteEmails;
        },
        enumerable: true,
        configurable: true
    });
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Contact__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MailsService = (function () {
    function MailsService(_authenticationService, _menuService, _formBuilder, _af) {
        this._authenticationService = _authenticationService;
        this._menuService = _menuService;
        this._formBuilder = _formBuilder;
        this._af = _af;
        this.COLLECTION_NAME = '/mails';
        this._mailsQP = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this._mailsQ = this._af.database.list(this.COLLECTION_NAME, {
            query: {
                orderByChild: 'ownerType',
                equalTo: this._mailsQP
            }
        }).map(function (mails) {
            mails.sort(function (first, second) { return second.time - first.time; });
            return mails;
        });
        this._unreadMailsQ = this._af.database.list(this.COLLECTION_NAME, {
            query: {
                orderByChild: 'read',
                equalTo: false
            }
        });
    }
    MailsService.prototype.resolve = function (route, state) {
        return this.getMail(route.queryParams.id).first();
    };
    MailsService.prototype.initMailForm = function (type, mail, typeAll) {
        var profile = this._authenticationService.authenticatedProfile;
        var owner = type === 'Compose' ? profile.$key : mail.owner;
        var myContact = __WEBPACK_IMPORTED_MODULE_6__model_Contact__["a" /* Contact */].initFromProfile(profile);
        var topic;
        var body;
        var receivers;
        switch (type) {
            case 'Compose':
                topic = '';
                body = '';
                receivers = [];
                break;
            case 'Forward':
                topic = "FW: " + mail.topic;
                body = "\n-----------\n" + mail.body;
                receivers = [];
                break;
            case 'Reply':
                topic = "RE: " + mail.topic;
                body = "\n-----------\n" + mail.body;
                receivers = this.prepareReceivers(mail, myContact, typeAll);
                break;
        }
        return this._formBuilder.group({
            owner: [owner],
            type: [''],
            ownerType: [''],
            favorite: [false],
            read: [true],
            sender: [myContact],
            time: [''],
            body: [body, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            topic: [topic, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            receivers: [receivers],
            receiverEmail: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]]
        });
    };
    MailsService.prototype.getMail = function (id) {
        return this._af.database.object(this.COLLECTION_NAME + "/" + id);
    };
    MailsService.prototype.searchMails = function (type) {
        this._mailsQP.next("" + this._authenticationService.authenticatedProfile.$key + type);
    };
    MailsService.prototype.getMails = function () {
        return this._mailsQ;
    };
    MailsService.prototype.updateMail = function (mail) {
        return this.getMail(mail.$key).update(mail);
    };
    MailsService.prototype.addMail = function (mail) {
        this._af.database.list(this.COLLECTION_NAME).push(mail);
    };
    MailsService.prototype.updateMenuLabels = function () {
        var inboxMenuItem;
        var trashMenuItem;
        for (var _a = 0, _b = this._menuService.fullMenu; _a < _b.length; _a++) {
            var menuItem = _b[_a];
            for (var _c = 0, _d = menuItem.subItems; _c < _d.length; _c++) {
                var subMenuItem = _d[_c];
                if (subMenuItem.type === 'INBOX') {
                    inboxMenuItem = subMenuItem;
                }
                if (subMenuItem.type === 'TRASH') {
                    trashMenuItem = subMenuItem;
                }
            }
        }
        this._unreadMailsQ.subscribe(function (mails) {
            inboxMenuItem.countLabel = mails.filter(function (mail) { return mail.type === 'INBOX'; }).length;
            trashMenuItem.countLabel = mails.filter(function (mail) { return mail.type === 'TRASH'; }).length;
        });
    };
    MailsService.prototype.generateMails = function () {
        var _this = this;
        var time = new Date().getTime();
        this.getMail('mail1').first().subscribe(function (mail) {
            var topic = mail.topic;
            for (var _i = 1; _i < 40; _i++) {
                mail.topic = topic + _i;
                mail.time = time - _i * 1000 * 60 * 60;
                _this.addMail(mail);
            }
        });
    };
    MailsService.prototype.prepareReceivers = function (mail, myContact, typeAll) {
        if (!(typeAll === 'true')) {
            return [mail.sender];
        }
        var receivers = mail.receivers.filter(function (contact) { return !myContact.isEqual(contact); });
        receivers.push(mail.sender);
        return receivers;
    };
    return MailsService;
}());
MailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__menu_service__["a" /* MenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === "function" && _d || Object])
], MailsService);

var _a, _b, _c, _d;
//# sourceMappingURL=mails.service.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsService = UtilsService_1 = (function () {
    function UtilsService() {
    }
    UtilsService.joinUrl = function (urlSuffix) {
        return "" + UtilsService_1.PARENT_ROUTE_PATH + urlSuffix;
    };
    UtilsService.sameUrl = function (url, menuItem) {
        return url === menuItem.href || url === UtilsService_1.joinUrl(menuItem.href);
    };
    UtilsService.getPageFirstItem = function (items, pageNumber, itemsPerPage) {
        return pageNumber * itemsPerPage - itemsPerPage;
    };
    UtilsService.getPageLastItem = function (items, pageNumber, itemsPerPage) {
        var itemsLength = items ? items.length : 0;
        var lastItemPage = pageNumber * itemsPerPage;
        return lastItemPage <= itemsLength ? lastItemPage : itemsLength;
    };
    return UtilsService;
}());
UtilsService.PARENT_ROUTE_PATH = '/mailbox/';
UtilsService = UtilsService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UtilsService);

var UtilsService_1;
//# sourceMappingURL=utils.service.js.map

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_first__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthenticationService = (function () {
    function AuthenticationService(_localStorageService, _formBuilder, _af, _router) {
        this._localStorageService = _localStorageService;
        this._formBuilder = _formBuilder;
        this._af = _af;
        this._router = _router;
        this.COLLECTION_NAME = '/profiles';
        this._authenticated = new __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__["ReplaySubject"](1);
        this._authenticationResult = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this._authenticateQP = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this._authenticateQ = this._af.database.list(this.COLLECTION_NAME, {
            query: {
                orderByChild: 'email',
                equalTo: this._authenticateQP
            }
        }).first();
    }
    AuthenticationService.prototype.canActivate = function (route, state) {
        this.checkAuthentication();
        return this._authenticated.asObservable();
    };
    AuthenticationService.prototype.resolve = function (route, state) {
        return this._authenticatedProfile;
    };
    AuthenticationService.prototype.initAuthenticationForm = function () {
        return this._formBuilder.group({
            email: ['ikoval@gmail.com', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            password: ['12345', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]]
        });
    };
    AuthenticationService.prototype.authenticate = function (credentials) {
        var _this = this;
        this._authenticateQ.subscribe(function (profiles) {
            if (!profiles[0]) {
                _this._authenticationResult.next('User doesn\'t exist');
            }
            else if (__WEBPACK_IMPORTED_MODULE_4_ts_md5_dist_md5__["Md5"].hashStr(credentials.password) !== profiles[0].password) {
                _this._authenticationResult.next('Invalid password');
            }
            else {
                _this._authenticatedProfile = profiles[0];
                _this._localStorageService.set('AUTHENTICATION_PROFILE', _this._authenticatedProfile.$key);
                _this._authenticationResult.next(null);
            }
        });
        this._authenticateQP.next(credentials.email);
    };
    Object.defineProperty(AuthenticationService.prototype, "authenticationResult", {
        get: function () {
            return this._authenticationResult;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "authenticatedProfile", {
        get: function () {
            return this._authenticatedProfile;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.checkAuthentication = function () {
        var _this = this;
        if (this.authenticatedProfile) {
            this._authenticated.next(true);
            return;
        }
        var authenticationProfile = this._localStorageService.get('AUTHENTICATION_PROFILE');
        if (!authenticationProfile) {
            this.failAuthentication();
            return;
        }
        this._af.database.object(this.COLLECTION_NAME + "/" + authenticationProfile).first().subscribe(function (profile) {
            if (!profile) {
                _this.failAuthentication();
                return;
            }
            _this._authenticatedProfile = profile;
            _this._authenticated.next(true);
        });
    };
    AuthenticationService.prototype.failAuthentication = function () {
        this._router.navigate(['authenticate']);
        this._authenticated.next(false);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AngularFire */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["ENABLE"] = 0] = "ENABLE";
    Action[Action["DISABLE"] = 1] = "DISABLE";
    Action[Action["SUBMIT"] = 2] = "SUBMIT";
})(Action || (Action = {}));
//# sourceMappingURL=Action.js.map

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(
        // private _mailService: MailsService,
        _authenticationService, _router) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this.submitted = false;
        this.loading = false;
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationForm = this._authenticationService.initAuthenticationForm();
        var authenticationResult = this._authenticationService.authenticationResult$$;
        var subscribe = authenticationResult.subscribe(function (result) {
            _this.loading = false;
            if (result) {
                _this.errorMessage = result;
            }
            else {
                _this.errorMessage = null;
                subscribe.unsubscribe();
                authenticationResult.complete();
                _this._router.navigate(['/mailbox']);
            }
        });
    };
    AuthenticationComponent.prototype.authenticate = function () {
        // this._mailService.generateMails();
        this.submitted = true;
        if (this.authenticationForm.valid) {
            this.loading = true;
            this._authenticationService.authenticate(this.authenticationForm.value);
        }
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-authentication',
        template: __webpack_require__(227),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationComponent);

var _a, _b;
//# sourceMappingURL=authentication.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(email, firstName, lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Contact.init = function (email, firstName, lastName) {
        return new this(email, firstName || null, lastName || null);
    };
    Contact.initFromContact = function (contact) {
        return new this(contact.email, contact.firstName, contact.lastName);
    };
    Contact.initFromProfile = function (profile) {
        return new this(profile.email, profile.firstName, profile.lastName);
    };
    Contact.prototype.isEqual = function (contact) {
        return contact.email === this.email && contact.firstName === this.firstName && contact.lastName === this.lastName;
    };
    return Contact;
}());

//# sourceMappingURL=Contact.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_utils_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailPagingPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MailPagingPipe = MailPagingPipe_1 = (function () {
    function MailPagingPipe() {
    }
    MailPagingPipe.prototype.transform = function (mails, page) {
        if (!mails) {
            return [];
        }
        var startIndex = __WEBPACK_IMPORTED_MODULE_1__service_utils_service__["a" /* UtilsService */].getPageFirstItem(mails, page, MailPagingPipe_1.MAILS_PER_PAGE);
        var endIndex = __WEBPACK_IMPORTED_MODULE_1__service_utils_service__["a" /* UtilsService */].getPageLastItem(mails, page, MailPagingPipe_1.MAILS_PER_PAGE);
        return mails.slice(startIndex, endIndex);
    };
    return MailPagingPipe;
}());
MailPagingPipe.MAILS_PER_PAGE = 10;
MailPagingPipe = MailPagingPipe_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'mailPaging'
    })
], MailPagingPipe);

var MailPagingPipe_1;
//# sourceMappingURL=mail-paging.pipe.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactsService = (function () {
    function ContactsService(_af) {
        this._af = _af;
        this._COLLECTION_NAME = '/contacts';
        this._CONTACT_QP = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._CONTACT_Q = this._af.database.list(this._COLLECTION_NAME, {
            query: {
                orderByChild: 'email',
                equalTo: this._CONTACT_QP
            }
        }).first();
    }
    ContactsService.prototype.searchContact = function (email) {
        this._CONTACT_QP.next(email);
    };
    Object.defineProperty(ContactsService.prototype, "contactSearch", {
        get: function () {
            return this._CONTACT_Q;
        },
        enumerable: true,
        configurable: true
    });
    ContactsService.prototype.getContact = function (id) {
        return this._af.database.object(this._COLLECTION_NAME + "/" + id);
    };
    return ContactsService;
}());
ContactsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === "function" && _a || Object])
], ContactsService);

var _a;
//# sourceMappingURL=contacts.service.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-contacts',
        template: __webpack_require__(230),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailboxComponent = (function () {
    function MailboxComponent() {
    }
    return MailboxComponent;
}());
MailboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mailbox',
        template: __webpack_require__(231),
        styles: [__webpack_require__(212)]
    })
], MailboxComponent);

//# sourceMappingURL=mailbox.component.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_service_utils_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_contacts_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_model_Contact__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_zip__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_zip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_zip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_last__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_last__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MailComposeComponent = (function () {
    function MailComposeComponent(_activatedRoute, _contactsService, _mailService, _menuService, _router) {
        this._activatedRoute = _activatedRoute;
        this._contactsService = _contactsService;
        this._mailService = _mailService;
        this._menuService = _menuService;
        this._router = _router;
    }
    MailComposeComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].zip(this._activatedRoute.data, this._activatedRoute.queryParams).subscribe(function (result) {
            _this.type = result[0].type;
            _this.mailForm = _this._mailService.initMailForm(_this.type, result[0].mail, result[1].all);
        });
        this._menuService.activeMenuItem.subscribe(function (activeMenuItem) {
            _this._previousActiveMenuItem = activeMenuItem;
        });
    };
    MailComposeComponent.prototype.evaluateEmail = function () {
        var _this = this;
        var receiverEmail = this.mailForm.controls.receiverEmail;
        if (receiverEmail.invalid) {
            this.errorMessage = 'Invalid email address';
            return;
        }
        var contact;
        this.errorMessage = '';
        var email = receiverEmail.value.trim();
        this._contactsService.contactSearch.subscribe(function (contacts) {
            if (contacts.length === 0) {
                contact = __WEBPACK_IMPORTED_MODULE_7__common_model_Contact__["a" /* Contact */].init(email);
            }
            else {
                contact = __WEBPACK_IMPORTED_MODULE_7__common_model_Contact__["a" /* Contact */].initFromContact(contacts[0]);
            }
            var contactPresent = false;
            var receivers = _this.mailForm.controls.receivers.value;
            for (var _i = 0, receivers_1 = receivers; _i < receivers_1.length; _i++) {
                var receiver = receivers_1[_i];
                if (contact.isEqual(receiver)) {
                    contactPresent = true;
                    break;
                }
            }
            if (!contactPresent) {
                receivers.push(contact);
            }
            receiverEmail.setValue('');
        });
        this._contactsService.searchContact(email);
    };
    MailComposeComponent.prototype.removeReceiver = function (contact) {
        var receivers = this.mailForm.controls.receivers.value;
        receivers.splice(receivers.indexOf(contact, 0), 1);
    };
    MailComposeComponent.prototype.sendMail = function (type) {
        var formControls = this.mailForm.controls;
        if (formControls.receivers.value.length === 0) {
            this.errorMessage = 'Empty receivers';
            return;
        }
        if (formControls.topic.invalid) {
            this.errorMessage = 'Subject min length is 3 symbols';
            return;
        }
        if (formControls.body.invalid) {
            this.errorMessage = 'Body min length is 3 symbols';
            return;
        }
        this.mailForm.removeControl('receiverEmail');
        formControls.time.setValue(new Date().getTime());
        formControls.type.setValue(type);
        formControls.ownerType.setValue("" + formControls.owner.value + type);
        this._mailService.addMail(this.mailForm.value);
        this._router.navigate([__WEBPACK_IMPORTED_MODULE_5_app_common_service_utils_service__["a" /* UtilsService */].joinUrl(this._previousActiveMenuItem.href)]);
    };
    return MailComposeComponent;
}());
MailComposeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mail-compose',
        template: __webpack_require__(232),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__common_service_contacts_service__["a" /* ContactsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_service_contacts_service__["a" /* ContactsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_service_mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_service_mails_service__["a" /* MailsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__["a" /* MenuService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], MailComposeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mail-compose.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_pipes_mail_paging_pipe__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_utils_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_model_Action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_data_mailFilterItems__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMapTo__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounce__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounce__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MailListComponent = (function () {
    function MailListComponent(_activatedRoute, _mailService, _menuService) {
        this._activatedRoute = _activatedRoute;
        this._mailService = _mailService;
        this._menuService = _menuService;
        this.mailFilterItems = __WEBPACK_IMPORTED_MODULE_7__common_data_mailFilterItems__["a" /* MAIL_FILTER_ITEMS */];
        this.loading = true;
        this.filterField = 'All';
        this.page = 1;
        this._selectedMails = [];
    }
    MailListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data
            .do(function (data) {
            _this.activeMenuItem = data.activeMenuItem;
        })
            .switchMapTo(this._mailService.getMails())
            .subscribe(function (mails) {
            _this.loading = false;
            _this._originalMails = mails;
            _this.mails = mails;
        });
        this._mailService.searchMails(this.activeMenuItem.type);
        this._menuService.deleteEmailsAction$$.subscribe(function (action) {
            if (__WEBPACK_IMPORTED_MODULE_5__common_model_Action__["a" /* Action */].SUBMIT === action) {
                _this.moveSelectedMailsToTrash();
                _this._menuService.deleteEmailsAction$$.next(__WEBPACK_IMPORTED_MODULE_5__common_model_Action__["a" /* Action */].DISABLE);
            }
        });
    };
    MailListComponent.prototype.initLoading = function (value) {
        this.loading = value;
    };
    MailListComponent.prototype.manipulateSelectedMail = function (mail) {
        var index = this._selectedMails.indexOf(mail);
        if (index !== -1) {
            this._selectedMails.splice(index, 1);
            if (this._selectedMails.length === 0) {
                this._menuService.deleteEmailsAction$$.next(__WEBPACK_IMPORTED_MODULE_5__common_model_Action__["a" /* Action */].DISABLE);
            }
        }
        else {
            this._selectedMails.push(mail);
            this._menuService.deleteEmailsAction$$.next(__WEBPACK_IMPORTED_MODULE_5__common_model_Action__["a" /* Action */].ENABLE);
        }
    };
    MailListComponent.prototype.filterMails = function (filterField) {
        switch (filterField) {
            case 'Read':
                this.mails = this._originalMails.filter(function (mail) { return mail.read; });
                break;
            case 'Unread':
                this.mails = this._originalMails.filter(function (mail) { return !mail.read; });
                break;
            case 'Starred':
                this.mails = this._originalMails.filter(function (mail) { return mail.favorite; });
                break;
            case 'All':
                this.mails = this._originalMails;
                break;
        }
        this.page = 1;
        this.filterField = filterField;
    };
    MailListComponent.prototype.changePage = function (direction) {
        var newPage = this.page + direction;
        var pagesAvailable = this.mails.length / __WEBPACK_IMPORTED_MODULE_3_app_common_pipes_mail_paging_pipe__["a" /* MailPagingPipe */].MAILS_PER_PAGE;
        if (newPage > 0 && (newPage <= pagesAvailable || (this.page < pagesAvailable && pagesAvailable < newPage))) {
            this.page = newPage;
        }
    };
    MailListComponent.prototype.getFirstItemPage = function () {
        return __WEBPACK_IMPORTED_MODULE_4__common_service_utils_service__["a" /* UtilsService */].getPageFirstItem(this.mails, this.page, __WEBPACK_IMPORTED_MODULE_3_app_common_pipes_mail_paging_pipe__["a" /* MailPagingPipe */].MAILS_PER_PAGE) + 1;
    };
    MailListComponent.prototype.getLastItemPage = function () {
        var mailsLength = this.mails ? this.mails.length : 0;
        var lastItemPage = this.page * __WEBPACK_IMPORTED_MODULE_3_app_common_pipes_mail_paging_pipe__["a" /* MailPagingPipe */].MAILS_PER_PAGE;
        return lastItemPage <= mailsLength ? lastItemPage : mailsLength;
    };
    MailListComponent.prototype.moveSelectedMailsToTrash = function () {
        this.loading = true;
        for (var _i = 0, _a = this._selectedMails; _i < _a.length; _i++) {
            var mail = _a[_i];
            mail.type = 'TRASH';
            mail.ownerType = "" + mail.owner + mail.type;
            this._mailService.updateMail(mail);
        }
        this._selectedMails = [];
        this.page = 1;
        this.loading = false;
    };
    return MailListComponent;
}());
MailListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mail-list',
        template: __webpack_require__(234),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]) === "function" && _c || Object])
], MailListComponent);

var _a, _b, _c;
//# sourceMappingURL=mail-list.component.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_utils_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MailViewComponent = (function () {
    function MailViewComponent(_activatedRoute, _mailService, _menuService, _router) {
        this._activatedRoute = _activatedRoute;
        this._mailService = _mailService;
        this._menuService = _menuService;
        this._router = _router;
    }
    MailViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data.subscribe(function (data) {
            _this.mail = data.mail;
        });
        this._menuService.activeMenuItem.subscribe(function (activeMenuItem) {
            _this._previousActiveMenuItem = activeMenuItem;
        });
    };
    MailViewComponent.prototype.favorite = function () {
        this.mail.favorite = !this.mail.favorite;
        this._mailService.updateMail(this.mail);
    };
    MailViewComponent.prototype.moveToTrash = function () {
        this.mail.type = 'TRASH';
        this.mail.ownerType = "" + this.mail.owner + this.mail.type;
        this._mailService.updateMail(this.mail);
        this._router.navigate([__WEBPACK_IMPORTED_MODULE_3__common_service_utils_service__["a" /* UtilsService */].joinUrl(this._previousActiveMenuItem.href)]);
    };
    return MailViewComponent;
}());
MailViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mail-view',
        template: __webpack_require__(235),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_service_menu_service__["a" /* MenuService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MailViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mail-view.component.js.map

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_mails_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MailsComponent = (function () {
    function MailsComponent(_mailService) {
        this._mailService = _mailService;
    }
    MailsComponent.prototype.ngOnInit = function () {
        this._mailService.updateMenuLabels();
    };
    return MailsComponent;
}());
MailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mails',
        template: __webpack_require__(236),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service_mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service_mails_service__["a" /* MailsService */]) === "function" && _a || Object])
], MailsComponent);

var _a;
//# sourceMappingURL=mails.component.js.map

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 122;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_mailbox_app_module__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(143);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_mailbox_app_module__["a" /* MailboxAppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = (function () {
    function InputComponent() {
    }
    InputComponent.prototype.isInvalidValue = function () {
        return (!this.input.pristine || this.submitted) && this.input.invalid;
    };
    InputComponent.prototype.isEditing = function () {
        return this.input.dirty && this.input.value.length > 0;
    };
    return InputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormControl */]) === "function" && _a || Object)
], InputComponent.prototype, "input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "submitted", void 0);
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'authentication-input',
        template: __webpack_require__(228),
        styles: [__webpack_require__(209)]
    })
], InputComponent);

var _a;
//# sourceMappingURL=input.component.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAIL_FILTER_ITEMS; });
var MAIL_FILTER_ITEMS = ['All', 'Read', 'Unread', 'Starred'];
//# sourceMappingURL=mailFilterItems.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        type: 'MAIL',
        name: 'Mails',
        href: 'mails',
        icon: 'fa fa-envelope',
        subItems: [
            {
                type: 'INBOX',
                name: 'Inbox',
                href: 'mails/inbox',
                icon: 'fa fa-inbox',
                countLabel: 0
            },
            {
                type: 'SENT',
                name: 'Sent',
                href: 'mails/sent',
                icon: 'fa fa-send-o',
                countLabel: 0
            },
            {
                type: 'DRAFT',
                name: 'Drafts',
                href: 'mails/drafts',
                icon: 'fa fa-edit',
                countLabel: 0
            },
            {
                type: 'TRASH',
                name: 'Trash',
                href: 'mails/trash',
                icon: 'fa fa-trash-o',
                countLabel: 0
            }
        ]
    },
    {
        type: 'CONTACTS',
        name: 'Contacts',
        href: 'contacts',
        icon: 'fa fa-address-book',
        subItems: [
            {
                type: 'ALL',
                name: 'All',
                href: 'contacts/all',
            },
            {
                type: 'GROUP_1',
                name: 'Group 1',
                href: 'contacts/group1',
            },
            {
                type: 'GROUP_2',
                name: 'Group 2',
                href: 'contacts/group2',
            }
        ]
    }
];
//# sourceMappingURL=menuItems.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mail; });
var Mail = (function () {
    function Mail(owner, ownerType, type, favorite, read, sender, receivers, topic, body, time, $key) {
        this.owner = owner;
        this.ownerType = ownerType;
        this.type = type;
        this.favorite = favorite;
        this.read = read;
        this.sender = sender;
        this.receivers = receivers;
        this.topic = topic;
        this.body = body;
        this.time = time;
        this.$key = $key;
    }
    return Mail;
}());

//# sourceMappingURL=Mail.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_utils_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveMenuPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ActiveMenuPipe = (function () {
    function ActiveMenuPipe() {
    }
    ActiveMenuPipe.prototype.transform = function (value) {
        return __WEBPACK_IMPORTED_MODULE_1__service_utils_service__["a" /* UtilsService */].joinUrl(value);
    };
    return ActiveMenuPipe;
}());
ActiveMenuPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'activeMenu'
    })
], ActiveMenuPipe);

//# sourceMappingURL=active-menu.pipe.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactPipe = (function () {
    function ContactPipe() {
    }
    ContactPipe.prototype.transform = function (contact) {
        if (!contact.firstName && !contact.lastName) {
            return contact.email;
        }
        else {
            return contact.firstName + " " + contact.lastName;
        }
    };
    return ContactPipe;
}());
ContactPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'contact'
    })
], ContactPipe);

//# sourceMappingURL=contact.pipe.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailDatePipe = (function () {
    function MailDatePipe() {
        this.SECONDS_MS = 1000;
        this.MINUTES_MS = 60 * this.SECONDS_MS;
        this.HOUR_MS = 60 * this.MINUTES_MS;
        this.DAY_MS = 24 * this.HOUR_MS;
        this.YESTERDAY = 'Yesterday';
        this.MONTHES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
    MailDatePipe.prototype.transform = function (time) {
        var date = new Date();
        date.setTime(time);
        var currentDate = new Date();
        var today = currentDate.getHours() * this.HOUR_MS + currentDate.getMinutes() * this.MINUTES_MS + currentDate.getSeconds() * this.SECONDS_MS;
        if (time > currentDate.getTime() - today) {
            var hours = date.getHours() < 10 ? "0" + date.getHours() : String(date.getHours());
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : String(date.getMinutes());
            return hours + ":" + minutes;
        }
        var yesterday = today + this.DAY_MS;
        if (time > currentDate.getTime() - yesterday) {
            return this.YESTERDAY;
        }
        return date.getDate() + " " + this.MONTHES[date.getMonth()];
    };
    return MailDatePipe;
}());
MailDatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'mailDate'
    })
], MailDatePipe);

//# sourceMappingURL=mail-date.pipe.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxAppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailboxAppComponent = (function () {
    function MailboxAppComponent() {
    }
    return MailboxAppComponent;
}());
MailboxAppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(210)]
    })
], MailboxAppComponent);

//# sourceMappingURL=mailbox-app.component.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mailbox_app_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mailbox_profile_profile_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mailbox_menu_menu_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailbox_menu_menu_item_menu_item_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mailbox_menu_menu_actions_menu_actions_component__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mailbox_mailbox_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_service_authentication_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__authentication_input_input_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__mailbox_mails_mails_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__mailbox_contacts_contacts_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mailbox_mails_mail_list_mail_list_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_pipes_active_menu_pipe__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_service_utils_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_service_menu_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__mailbox_mails_mail_list_mail_list_item_mail_list_item_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_service_contacts_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__common_pipes_contact_pipe__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__common_pipes_mail_date_pipe__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__mailbox_mails_mail_view_mail_view_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__mailbox_mails_mail_compose_mail_compose_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__common_pipes_mail_paging_pipe__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular_2_local_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailboxAppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var MailboxAppModule = (function () {
    function MailboxAppModule() {
    }
    return MailboxAppModule;
}());
MailboxAppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__mailbox_app_component__["a" /* MailboxAppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mailbox_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mailbox_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mailbox_menu_menu_item_menu_item_component__["a" /* MenuItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mailbox_menu_menu_actions_menu_actions_component__["a" /* MenuActionsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__authentication_authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_15__authentication_input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_13__mailbox_mailbox_component__["a" /* MailboxComponent */],
            __WEBPACK_IMPORTED_MODULE_16__mailbox_mails_mails_component__["a" /* MailsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__mailbox_contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__common_pipes_active_menu_pipe__["a" /* ActiveMenuPipe */],
            __WEBPACK_IMPORTED_MODULE_23__mailbox_mails_mail_list_mail_list_item_mail_list_item_component__["a" /* MailListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_25__common_pipes_contact_pipe__["a" /* ContactPipe */],
            __WEBPACK_IMPORTED_MODULE_26__common_pipes_mail_date_pipe__["a" /* MailDatePipe */],
            __WEBPACK_IMPORTED_MODULE_27__mailbox_mails_mail_view_mail_view_component__["a" /* MailViewComponent */],
            __WEBPACK_IMPORTED_MODULE_28__mailbox_mails_mail_compose_mail_compose_component__["a" /* MailComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_29__common_pipes_mail_paging_pipe__["a" /* MailPagingPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_30_angular_2_local_storage__["LocalStorageModule"].withConfig({ prefix: 'mailbox', storageType: 'localStorage' })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__common_service_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_20__common_service_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_21__common_service_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_22__common_service_mails_service__["a" /* MailsService */],
            __WEBPACK_IMPORTED_MODULE_24__common_service_contacts_service__["a" /* ContactsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__mailbox_app_component__["a" /* MailboxAppComponent */]]
    })
], MailboxAppModule);

//# sourceMappingURL=mailbox-app.module.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_model_Mail__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MailListItemComponent = (function () {
    function MailListItemComponent(_mailService, _router) {
        this._mailService = _mailService;
        this._router = _router;
        this.loading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checkedMail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checked = false;
    }
    MailListItemComponent.prototype.favorite = function () {
        var _this = this;
        this.loading.emit(true);
        this.mail.favorite = !this.mail.favorite;
        this._mailService.updateMail(this.mail).then(function () { return _this.loading.emit(false); });
    };
    MailListItemComponent.prototype.openMail = function () {
        if (!this.mail.read) {
            this.mail.read = true;
            this._mailService.updateMail(this.mail);
            this._mailService.updateMenuLabels();
        }
        this._router.navigate(['mailbox/mails/view'], { queryParams: { id: this.mail.$key } });
    };
    MailListItemComponent.prototype.chooseMail = function () {
        this.checked = !this.checked;
        this.checkedMail.emit(this.mail);
    };
    return MailListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__common_model_Mail__["a" /* Mail */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_model_Mail__["a" /* Mail */]) === "function" && _a || Object)
], MailListItemComponent.prototype, "mail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MailListItemComponent.prototype, "odd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], MailListItemComponent.prototype, "loading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _c || Object)
], MailListItemComponent.prototype, "checkedMail", void 0);
MailListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-mail-list-item',
        template: __webpack_require__(233),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_service_mails_service__["a" /* MailsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], MailListItemComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=mail-list-item.component.js.map

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_model_Action__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_service_menu_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuActionsComponent = (function () {
    function MenuActionsComponent(router, _menuService) {
        this.router = router;
        this._menuService = _menuService;
        this.deleteEmailsEnabled = false;
    }
    MenuActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._menuService.deleteEmailsAction$$.subscribe(function (action) {
            switch (action) {
                case __WEBPACK_IMPORTED_MODULE_2_app_common_model_Action__["a" /* Action */].ENABLE:
                    _this.deleteEmailsEnabled = true;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2_app_common_model_Action__["a" /* Action */].DISABLE:
                    _this.deleteEmailsEnabled = false;
                    break;
            }
        });
    };
    MenuActionsComponent.prototype.deleteEmails = function () {
        if (this.deleteEmailsEnabled) {
            this._menuService.deleteEmailsAction$$.next(__WEBPACK_IMPORTED_MODULE_2_app_common_model_Action__["a" /* Action */].SUBMIT);
        }
    };
    return MenuActionsComponent;
}());
MenuActionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-menu-actions',
        template: __webpack_require__(237),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__common_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_service_menu_service__["a" /* MenuService */]) === "function" && _b || Object])
], MenuActionsComponent);

var _a, _b;
//# sourceMappingURL=menu-actions.component.js.map

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuItemComponent = (function () {
    function MenuItemComponent(router) {
        this.router = router;
    }
    return MenuItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MenuItemComponent.prototype, "menuItem", void 0);
MenuItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-menu-item',
        template: __webpack_require__(238),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MenuItemComponent);

var _a;
//# sourceMappingURL=menu-item.component.js.map

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_service_menu_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = (function () {
    function MenuComponent(_menuService) {
        this._menuService = _menuService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menuItems = this._menuService.fullMenu;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-menu',
        template: __webpack_require__(239),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__common_service_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__common_service_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data.subscribe(function (data) {
            _this.profile = data.profile;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mailbox-profile',
        template: __webpack_require__(240),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mailbox_mailbox_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mailbox_mails_mails_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mailbox_contacts_contacts_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mailbox_mails_mail_view_mail_view_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_service_mails_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mailbox_mails_mail_compose_mail_compose_component__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });










var routes = [
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    },
    {
        path: 'authentication',
        component: __WEBPACK_IMPORTED_MODULE_0__authentication_authentication_component__["a" /* AuthenticationComponent */]
    },
    {
        path: 'mailbox',
        component: __WEBPACK_IMPORTED_MODULE_1__mailbox_mailbox_component__["a" /* MailboxComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__["a" /* AuthenticationService */]],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_2__common_service_authentication_service__["a" /* AuthenticationService */]
        },
        children: [
            {
                path: '',
                redirectTo: 'mails',
                pathMatch: 'full'
            },
            {
                path: 'mails',
                component: __WEBPACK_IMPORTED_MODULE_3__mailbox_mails_mails_component__["a" /* MailsComponent */],
                children: [
                    {
                        path: '',
                        redirectTo: 'inbox',
                        pathMatch: 'full'
                    },
                    {
                        path: 'view',
                        component: __WEBPACK_IMPORTED_MODULE_7__mailbox_mails_mail_view_mail_view_component__["a" /* MailViewComponent */],
                        resolve: {
                            mail: __WEBPACK_IMPORTED_MODULE_8__common_service_mails_service__["a" /* MailsService */]
                        }
                    },
                    {
                        path: 'compose',
                        component: __WEBPACK_IMPORTED_MODULE_9__mailbox_mails_mail_compose_mail_compose_component__["a" /* MailComposeComponent */],
                        data: {
                            type: 'Compose'
                        }
                    },
                    {
                        path: 'forward',
                        component: __WEBPACK_IMPORTED_MODULE_9__mailbox_mails_mail_compose_mail_compose_component__["a" /* MailComposeComponent */],
                        resolve: {
                            mail: __WEBPACK_IMPORTED_MODULE_8__common_service_mails_service__["a" /* MailsService */]
                        },
                        data: {
                            type: 'Forward'
                        }
                    },
                    {
                        path: 'reply',
                        component: __WEBPACK_IMPORTED_MODULE_9__mailbox_mails_mail_compose_mail_compose_component__["a" /* MailComposeComponent */],
                        resolve: {
                            mail: __WEBPACK_IMPORTED_MODULE_8__common_service_mails_service__["a" /* MailsService */]
                        },
                        data: {
                            type: 'Reply'
                        }
                    },
                    {
                        path: 'inbox',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    },
                    {
                        path: 'sent',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    },
                    {
                        path: 'drafts',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    },
                    {
                        path: 'trash',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    },
                    {
                        path: '**',
                        redirectTo: 'inbox'
                    }
                ]
            },
            {
                path: 'contacts',
                component: __WEBPACK_IMPORTED_MODULE_4__mailbox_contacts_contacts_component__["a" /* ContactsComponent */],
                children: [
                    {
                        path: '',
                        redirectTo: 'all',
                        pathMatch: 'full'
                    },
                    {
                        path: 'all',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    },
                    {
                        path: ':group',
                        component: __WEBPACK_IMPORTED_MODULE_5__mailbox_mails_mail_list_mail_list_component__["a" /* MailListComponent */],
                        resolve: {
                            activeMenuItem: __WEBPACK_IMPORTED_MODULE_6__common_service_menu_service__["a" /* MenuService */]
                        }
                    }
                ]
            },
            {
                path: '**',
                redirectTo: 'mails'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'authentication'
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),
/* 143 */
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
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: 'AIzaSyBqT1uJjj6DP7_bvXbXoslj3bo_3-LiGsg',
    authDomain: 'mailbox-a3e4b.firebaseapp.com',
    databaseURL: 'https://mailbox-a3e4b.firebaseio.com',
    storageBucket: 'mailbox-a3e4b.appspot.com',
    messagingSenderId: '86824714245'
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".form {\r\n  background: rgba(19, 35, 47, 0.9);\r\n  padding: 40px;\r\n  max-width: 600px;\r\n  margin: 40px auto;\r\n  border-radius: 4px;\r\n  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  color: #c62828;\r\n}\r\n\r\n.progress {\r\n  height: 53px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.progress-bar {\r\n  width: 100%;\r\n  color: #ffffff;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.button {\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: .1em;\r\n  background: #3F51B5;\r\n  color: #ffffff;\r\n  -webkit-transition: all 0.5s ease;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n.button:hover, .button:focus {\r\n  background: #283593;\r\n}\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".validation-failed {\r\n  outline: 0;\r\n  border-color: #c62828;\r\n}\r\n\r\n.field-wrap {\r\n  position: relative;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nlabel {\r\n  position: absolute;\r\n  -webkit-transform: translateY(6px);\r\n  transform: translateY(6px);\r\n  left: 13px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  -webkit-transition: all 0.25s ease;\r\n  transition: all 0.25s ease;\r\n  -webkit-backface-visibility: hidden;\r\n  pointer-events: none;\r\n  font-size: 22px;\r\n}\r\nlabel .req {\r\n  margin: 2px;\r\n  color: #3F51B5;\r\n}\r\n\r\nlabel.active {\r\n  -webkit-transform: translateY(50px);\r\n  transform: translateY(50px);\r\n  left: 2px;\r\n  font-size: 14px;\r\n}\r\nlabel.active .req {\r\n  opacity: 0;\r\n}\r\n\r\nlabel.highlight {\r\n  color: #ffffff;\r\n}\r\n\r\ninput {\r\n  font-size: 22px;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5px 10px;\r\n  background: none;\r\n  background-image: none;\r\n  border: 1px solid #a0b3b0;\r\n  color: #ffffff;\r\n  border-radius: 0;\r\n  -webkit-transition: border-color .25s ease, box-shadow .25s ease;\r\n  transition: border-color .25s ease, box-shadow .25s ease;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".bootstrap-tagsinput {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  padding: 4px 6px;\r\n  margin-bottom: 10px;\r\n  color: #555;\r\n  vertical-align: middle;\r\n  max-width: 100%;\r\n  line-height: 22px;\r\n  cursor: text;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n.bootstrap-tagsinput input {\r\n  border: none;\r\n  box-shadow: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n  width: auto !important;\r\n  max-width: inherit;\r\n}\r\n.bootstrap-tagsinput input:focus {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n.bootstrap-tagsinput .tag {\r\n  margin-right: 2px;\r\n  color: white;\r\n}\r\n.bootstrap-tagsinput .tag [data-role=\"remove\"] {\r\n  margin-left: 8px;\r\n  cursor: pointer;\r\n}\r\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:after {\r\n  content: \"x\";\r\n  padding: 0px 2px;\r\n}\r\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover {\r\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);\r\n}\r\n.bootstrap-tagsinput .tag [data-role=\"remove\"]:hover:active {\r\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\r\n}\r\n\r\ntextarea {\r\n  height: 300px;\r\n}\r\n\r\n.receiver {\r\n  width: 100px !important;\r\n  -webkit-box-flex: 100;\r\n      -ms-flex-positive: 100;\r\n          flex-grow: 100;\r\n}\r\n\r\n.validation-message {\r\n  float: right;\r\n  color: #c62828;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".unread {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n\r\n.star, .name-col, .subj-col {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".progress {\r\n  height: 43px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.progress-bar {\r\n  width: 100%;\r\n  color: #ffffff;\r\n  padding: 10px 0;\r\n  font-size: 16px;\r\n}\r\n\r\n.dropdown-menu > li, .pager > li {\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".icon-accent {\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".profile-info .profile-details h3 span {\r\n  font-family: 'Roboto', Arial, Helvetica, sans-serif;\r\n  font-weight: 400;\r\n  color: #757575;\r\n  font-size: 19px;\r\n  line-height: 23px;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <h1>Mailbox</h1>\n\n  <form [formGroup]=\"authenticationForm\">\n    <authentication-input [input]=\"authenticationForm.get('email')\" [submitted]=\"submitted\">Email</authentication-input>\n    <authentication-input [input]=\"authenticationForm.get('password')\" [type]=\"'password'\" [submitted]=\"submitted\">Password</authentication-input>\n\n    <button class=\"button button-block\" (click)=\"authenticate()\" *ngIf=\"!loading; else loadingIndicator\">Log In</button>\n  </form>\n\n  <h2 *ngIf=\"errorMessage\">{{errorMessage}}</h2>\n</div>\n\n<ng-template #loadingIndicator>\n  <div class=\"progress\">\n    <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\">Log In</div>\n  </div>\n</ng-template>\n"

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<div class=\"field-wrap\">\n  <label [ngClass]=\"{'active highlight': isEditing()}\">\n    <ng-content></ng-content><span class=\"req\">*</span>\n  </label>\n  <input [type]=\"type || 'text'\" [formControl]=\"input\" [ngClass]=\"{'validation-failed': isInvalidValue()}\"/>\n</div>\n"

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 231 */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class='page-topbar '>\r\n    <div class='logo-area'>\r\n      <h1>Mailbox</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"page-container row-fluid container-fluid\">\r\n    <div class=\"page-sidebar pagescroll\">\r\n      <div class=\"page-sidebar-wrapper\" id=\"main-menu-wrapper\">\r\n        <mailbox-profile></mailbox-profile>\r\n        <mailbox-menu></mailbox-menu>\r\n      </div>\r\n    </div>\r\n    <section id=\"main-content\" class=\" \">\r\n      <section class=\"wrapper main-wrapper row\" style=''>\r\n        <div class=\"col-lg-12\">\r\n          <section class=\"box nobox \">\r\n            <div class=\"content-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"mail_content\">\r\n                    <router-outlet></router-outlet>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </section>\r\n    </section>\r\n  </div>\r\n</div>\r\n"

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3 class=\"mail_head\">{{type}}</h3>\n  </div>\n\n  <form [formGroup]=\"mailForm\">\n    <div class=\"col-xs-12 mail_view_title\">\n      <div class=\"pull-right\">\n        <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Send\" (click)=\"sendMail('SENT')\">\n          <i class=\"fa fa-paper-plane-o icon-xs\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Save and close\" (click)=\"sendMail('DRAFT')\">\n          <i class=\"fa fa-floppy-o icon-xs\"></i>\n        </button>\n        <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Delete\" (click)=\"sendMail('TRASH')\">\n          <i class=\"fa fa-trash-o icon-xs\"></i>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"form-group mail_cc_bcc\">\n      <label class=\"form-label\">To:</label>\n      <span class=\"desc\">type email and press enter, e.g. \"apalmer2q@oracle.com\"</span>\n      <span class=\"validation-message\">{{errorMessage}}</span>\n    </div>\n\n    <div class=\"controls\">\n      <div class=\"bootstrap-tagsinput\">\n        <span class=\"tag label label-primary\" *ngFor=\"let receiver of mailForm.controls.receivers.value\">\n          {{receiver | contact}}<span data-role=\"remove\" (click)=\"removeReceiver(receiver)\"></span>\n        </span>\n        <input class=\"receiver\" type=\"text\" [formControl]=\"mailForm.controls.receiverEmail\" (keyup.enter)=\"evaluateEmail()\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Subject:</label>\n      <div class=\"controls\">\n        <input type=\"text\" class=\"form-control\" [formControl]=\"mailForm.controls.topic\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"form-label\">Message:</label>\n      <textarea class=\"form-control\" [formControl]=\"mailForm.controls.body\"></textarea>\n    </div>\n  </form>\n</div>\n"

/***/ }),
/* 233 */
/***/ (function(module, exports) {

module.exports = "<li [ngClass]=\"{odd: !odd}\">\n  <div class=\"row\">\n    <span class=\"checkbox-col\">\n      <input class=\"iCheck\" [checked]=\"checked\" type=\"checkbox\" (click)=\"chooseMail()\" *ngIf=\"mail.type !== 'TRASH'\">\n    </span>\n    <span class=\"star-col\">\n      <span class=\"star\">\n        <i class='fa fa-star-o icon-xs icon-accent' [ngClass]=\"{'fa-star-o': !mail.favorite, 'fa-star': mail.favorite}\" (click)=\"favorite()\"></i>\n      </span>\n    </span>\n    <span class=\"name-col open-view\"\n          [ngClass]=\"{unread: !mail.read}\"\n          (click)=\"openMail()\">\n      <span *ngIf=\"mail.type !== 'SENT' && mail.type !== 'DRAFT'; else overrideSender\">{{mail.sender | contact}}</span>\n    </span>\n    <span class=\"subj-col open-view\"><span class=\"msgtext\" (click)=\"openMail()\">{{mail.topic}}</span></span>\n    <span class=\"date-col open-view\"><span class=\"msg_time\">{{mail.time | mailDate}}</span></span>\n  </div>\n</li>\n\n<ng-template #overrideSender>me</ng-template>\n"

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3 class=\"mail_head\">{{activeMenuItem$$.name}} <sup *ngIf=\"activeMenuItem$$.countLabel\">({{activeMenuItem$$.countLabel}})</sup></h3>\n  </div>\n\n  <div class=\"col-xs-12\">\n    <div class=\"pull-left\">\n      <div class=\"btn-group mail_more_btn\">\n        <button type=\"button\" class=\"btn btn-default\">{{filterField}}</button>\n        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n          <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\" role=\"menu\">\n          <li *ngFor=\"let filterItem of mailFilterItems\"><a (click)=\"filterMails(filterItem)\">{{filterItem}}</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <nav class='pull-right'>\n      <ul class=\"pager mail_nav\">\n        <li><a (click)=\"changePage(-1)\"><i class='fa fa-arrow-left icon-xs icon-accent icon-secondary'></i></a></li>\n        <li><a (click)=\"changePage(1)\"><i class='fa fa-arrow-right icon-xs icon-accent icon-secondary'></i></a></li>\n      </ul>\n    </nav>\n    <span class='pull-right mail_count_nav text-muted'>\n      <strong>{{getFirstItemPage()}}</strong> to <strong>{{getLastItemPage()}}</strong> of {{mails?.length}}\n    </span>\n  </div>\n\n  <div class=\"mail_list col-xs-12\">\n    <div class=\"progress\" *ngIf=\"loading\">\n      <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\">Loading...</div>\n    </div>\n    <ul>\n      <mailbox-mail-list-item *ngFor=\"let mail of mails | mailPaging:page; odd as odd\"\n                              [mail]=\"mail\"\n                              [odd]=\"odd\"\n                              (loading)=\"initLoading($event)\"\n                              (checkedMail)=\"manipulateSelectedMail($event)\">\n      </mailbox-mail-list-item>\n    </ul>\n  </div>\n</div>\n"

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3 class=\"mail_head\">View</h3>\n  </div>\n\n  <div class=\"col-xs-12 mail_view_title\">\n    <div class=\"pull-left\">\n      <h3 class=\"\">{{mail.topic}}</h3>\n    </div>\n\n    <div class=\"pull-right\">\n      <i class='fa fa-star-o icon-xs icon-accent' [ngClass]=\"{'fa-star-o': !mail.favorite, 'fa-star': mail.favorite}\" (click)=\"favorite()\"></i>\n      <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Reply\"\n              [routerLink]=\"['/mailbox/mails/reply']\"\n              [queryParams]=\"{id: this.mail.$key, all: false}\">\n        <i class=\"fa fa-reply icon-xs\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Reply All\"\n              [routerLink]=\"['/mailbox/mails/reply']\"\n              [queryParams]=\"{id: this.mail.$key, all: true}\">\n        <i class=\"fa fa-reply-all icon-xs\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Forward\"\n              [routerLink]=\"['/mailbox/mails/forward']\"\n              [queryParams]=\"{id: this.mail.$key}\">\n        <i class=\"fa fa-mail-forward icon-xs\"></i>\n      </button>\n      <button type=\"button\" class=\"btn btn-default btn-icon\" title=\"Trash\"\n              (click)=\"moveToTrash()\" *ngIf=\"(mail.type !== 'TRASH')\">\n        <i class=\"fa fa-trash-o icon-xs\"></i>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 mail_view_info\">\n    <div class=\"pull-left\">\n      <div><span><strong>From: </strong></span>{{mail.sender | contact}}</div>\n      <div>\n        <strong>To: </strong>\n        <span *ngFor=\"let receiver of mail.receivers; last as last\">{{receiver | contact}}<span *ngIf=\"!last\">,</span> </span>\n      </div>\n    </div>\n    <div class=\"pull-right\">\n      <span class=\"msg_ts text-muted\">{{mail.time | date:'dd MMM yyyy, HH:mm'}}</span>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 mail_view\">{{mail.body}}</div>\n</div>\n"

/***/ }),
/* 236 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = "<li class='menusection'></li>\n<div *ngIf=\"router.isActive('mails' | activeMenu)\">\n  <a class=\"btn btn-primary btn-block\" [routerLink]=\"['/mailbox/mails/compose']\">Compose</a>\n  <a class=\"btn btn-primary btn-block\" (click)=\"deleteEmailsAction$$()\" [attr.disabled]=\"deleteEmailsEnabled ? null : 'true'\">Delete</a>\n</div>\n<div *ngIf=\"router.isActive('contacts' | activeMenu)\">\n  <a class=\"btn btn-primary btn-block\" disabled=\"true\">Add contact</a>\n  <a class=\"btn btn-primary btn-block\" disabled=\"true\">Add group</a>\n  <a class=\"btn btn-primary btn-block\" disabled=\"true\">Delete</a>\n</div>\n"

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<li routerLinkActive=\"open\">\n  <a [routerLink]=\"[menuItem.href]\">\n    <i [ngClass]=\"menuItem.icon\"></i>\n    <span class=\"title\">{{menuItem.name}}</span>\n  </a>\n  <ul class=\"sub-menu\" *ngIf=\"router.isActive(menuItem.href | activeMenu)\">\n    <li *ngFor=\"let subItem of menuItem.subItems\">\n      <a [routerLink]=\"[subItem.href]\" routerLinkActive=\"active\">\n        <i [ngClass]=\"subItem.icon\" *ngIf=\"subItem.icon\"></i>\n        {{subItem.name}}\n        <span *ngIf=\"subItem.countLabel\" class=\"label label-accent\">{{subItem.countLabel}}</span>\n      </a>\n    </li>\n  </ul>\n</li>\n"

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = "<ul class='wraplist'>\n  <li class='menusection'></li>\n  <mailbox-menu-item *ngFor=\"let menuItem of menuItems\" [menuItem]=\"menuItem\"></mailbox-menu-item>\n  <li class='menusection'></li>\n  <mailbox-menu-actions></mailbox-menu-actions>\n</ul>\n"

/***/ }),
/* 240 */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-info row\">\n  <div class=\"profile-image col-xs-4\">\n    <a href=\"ui-profile.html\">\n      <img src=\"{{profile.photo}}\" class=\"img-responsive img-circle\">\n    </a>\n  </div>\n  <div class=\"profile-details col-xs-8\">\n    <h3>\n      <span>{{profile.firstName}} {{profile.lastName}}</span>\n      <span class=\"profile-status online\"></span>\n    </h3>\n    <p class=\"profile-title\">{{profile.jobPosition}}</p>\n  </div>\n</div>\n"

/***/ }),
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ })
],[284]);
//# sourceMappingURL=main.bundle.js.map