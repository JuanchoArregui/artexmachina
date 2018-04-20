webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"!participant\"></app-navbar>\n<app-sidebar *ngIf=\"participant\"></app-sidebar>\n\n<router-outlet></router-outlet>    \n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Router } from '@angular/router';
var AppComponent = (function () {
    function AppComponent(
        // private router: Router,
        sessionService) {
        this.sessionService = sessionService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('se activa ngOnInit');
        console.log(this);
        console.log(this.participant);
        this.participant = this.sessionService.getParticipant();
        this.participantSubscription = this.sessionService.onParticipantChanges()
            .subscribe(function (participant) { return _this.participant = participant; });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.participantSubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_global_error_handler_service__ = __webpack_require__("./src/app/shared/services/global-error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_guards_can_leave_asset_create_guard__ = __webpack_require__("./src/app/shared/guards/can-leave-asset-create.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_resolvers_asset_details_resolver_guard__ = __webpack_require__("./src/app/shared/resolvers/asset-details-resolver.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_guards_is_authenticated_guard__ = __webpack_require__("./src/app/shared/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_raspberry_service__ = __webpack_require__("./src/app/shared/services/raspberry.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rxjs_operators__ = __webpack_require__("./src/app/rxjs.operators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_asset_asset_list_asset_list_component__ = __webpack_require__("./src/app/components/asset/asset-list/asset-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_assets_service__ = __webpack_require__("./src/app/shared/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_participants_service__ = __webpack_require__("./src/app/shared/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_participant_participant_profile_participant_profile_component__ = __webpack_require__("./src/app/components/participant/participant-profile/participant-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_participant_participant_list_participant_list_component__ = __webpack_require__("./src/app/components/participant/participant-list/participant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_participant_participant_base_participant_base_component__ = __webpack_require__("./src/app/components/participant/participant-base/participant-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_asset_asset_create_asset_create_component__ = __webpack_require__("./src/app/components/asset/asset-create/asset-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_asset_asset_base_asset_base_component__ = __webpack_require__("./src/app/components/asset/asset-base/asset-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_asset_asset_item_asset_item_component__ = __webpack_require__("./src/app/components/asset/asset-item/asset-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_transaction_transaction_list_transaction_list_component__ = __webpack_require__("./src/app/components/transaction/transaction-list/transaction-list.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_asset_asset_list_asset_list_component__["a" /* AssetListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_asset_asset_item_asset_item_component__["a" /* AssetItemComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_asset_asset_create_asset_create_component__["a" /* AssetCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_asset_asset_base_asset_base_component__["a" /* AssetBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_participant_participant_profile_participant_profile_component__["a" /* ParticipantProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_participant_participant_list_participant_list_component__["a" /* ParticipantListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_participant_participant_base_participant_base_component__["a" /* ParticipantBaseComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_transaction_transaction_list_transaction_list_component__["a" /* TransactionListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* routes */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__shared_services_assets_service__["a" /* AssetsService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_participants_service__["a" /* ParticipantsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */],
            __WEBPACK_IMPORTED_MODULE_2__shared_resolvers_asset_details_resolver_guard__["a" /* AssetDetailsResolverGuard */],
            __WEBPACK_IMPORTED_MODULE_1__shared_guards_can_leave_asset_create_guard__["a" /* CanLeaveAssetCreateGuard */],
            __WEBPACK_IMPORTED_MODULE_9__shared_services_raspberry_service__["a" /* RaspberryService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_core__["w" /* ErrorHandler */],
                useClass: __WEBPACK_IMPORTED_MODULE_0__shared_services_global_error_handler_service__["a" /* GlobalErrorHandlerService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_guards_can_leave_asset_create_guard__ = __webpack_require__("./src/app/shared/guards/can-leave-asset-create.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__ = __webpack_require__("./src/app/shared/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_resolvers_asset_details_resolver_guard__ = __webpack_require__("./src/app/shared/resolvers/asset-details-resolver.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index_index_component__ = __webpack_require__("./src/app/components/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_signup_component__ = __webpack_require__("./src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_asset_asset_item_asset_item_component__ = __webpack_require__("./src/app/components/asset/asset-item/asset-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_asset_asset_list_asset_list_component__ = __webpack_require__("./src/app/components/asset/asset-list/asset-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_asset_asset_create_asset_create_component__ = __webpack_require__("./src/app/components/asset/asset-create/asset-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_asset_asset_base_asset_base_component__ = __webpack_require__("./src/app/components/asset/asset-base/asset-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_participant_participant_profile_participant_profile_component__ = __webpack_require__("./src/app/components/participant/participant-profile/participant-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_participant_participant_list_participant_list_component__ = __webpack_require__("./src/app/components/participant/participant-list/participant-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_participant_participant_base_participant_base_component__ = __webpack_require__("./src/app/components/participant/participant-base/participant-base.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_transaction_transaction_list_transaction_list_component__ = __webpack_require__("./src/app/components/transaction/transaction-list/transaction-list.component.ts");
// Import Guards:


// Import Resolvers:

// Import necessary Components:
// index

// login-signup


// Assets




// Participants



// Transactions

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_index_index_component__["a" /* IndexComponent */] },
    { path: 'participants', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]], component: __WEBPACK_IMPORTED_MODULE_11__components_participant_participant_list_participant_list_component__["a" /* ParticipantListComponent */] },
    {
        path: 'participants',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_12__components_participant_participant_base_participant_base_component__["a" /* ParticipantBaseComponent */],
        children: [
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_10__components_participant_participant_profile_participant_profile_component__["a" /* ParticipantProfileComponent */]
            }
        ]
    },
    { path: 'assets', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__components_asset_asset_list_asset_list_component__["a" /* AssetListComponent */] },
    {
        path: 'assets',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9__components_asset_asset_base_asset_base_component__["a" /* AssetBaseComponent */],
        children: [
            {
                path: 'new',
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_0__shared_guards_can_leave_asset_create_guard__["a" /* CanLeaveAssetCreateGuard */]],
                component: __WEBPACK_IMPORTED_MODULE_8__components_asset_asset_create_asset_create_component__["a" /* AssetCreateComponent */]
            },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]],
                resolve: {
                    asset: __WEBPACK_IMPORTED_MODULE_2__shared_resolvers_asset_details_resolver_guard__["a" /* AssetDetailsResolverGuard */]
                },
                component: __WEBPACK_IMPORTED_MODULE_6__components_asset_asset_item_asset_item_component__["a" /* AssetItemComponent */]
            }
        ]
    },
    { path: 'transactions', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */]], component: __WEBPACK_IMPORTED_MODULE_13__components_transaction_transaction_list_transaction_list_component__["a" /* TransactionListComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__components_signup_signup_component__["a" /* SignupComponent */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "./src/app/components/asset/asset-base/asset-base.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    Este es el \"asset-base.component\"\n  </h1>\n  \n  <a [routerLink]=\"['/assets']\">\n  <i class=\"fa fa-arrow-left\"></i>\n</a>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/asset/asset-base/asset-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AssetBaseComponent = (function () {
    function AssetBaseComponent() {
    }
    return AssetBaseComponent;
}());
AssetBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-asset-base',
        template: __webpack_require__("./src/app/components/asset/asset-base/asset-base.component.html")
    })
], AssetBaseComponent);

//# sourceMappingURL=asset-base.component.js.map

/***/ }),

/***/ "./src/app/components/asset/asset-create/asset-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/asset/asset-create/asset-create.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    Este es el \"asset-create.component\"\n  </h1>\n  \n  \n  <div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n    <form (ngSubmit)=\"onSubmitAsset(assetForm)\" #assetForm=\"ngForm\">\n      <div class=\"form-group\" [class.has-error]=\"brand.errors && brand.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-fire\"></i>\n          </span>\n          <input type=\"text\" name=\"brand\" class=\"form-control\" placeholder=\"Brand\" [(ngModel)]=\"asset.brand\" #brand=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"brand.errors && brand.touched\">\n          <ul>\n            <li *ngIf=\"brand.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"name.errors && name.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"asset.name\" #name=\"ngModel\" required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"name.errors && name.touched\">\n          <ul>\n            <li *ngIf=\"name.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"specs\" class=\"form-control\" placeholder=\"Spec\" #spec>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"addSpec(spec)\"><i class=\"fa fa-plus\"></i></button>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngFor=\"let spec of asset.specs\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-tag\"></i>\n          </span>\n          <input type=\"text\" name=\"spec\" class=\"form-control\" placeholder=\"Spec\" [value]=\"spec\" disabled>\n          <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"removeSpec(spec)\">\n              <i class=\"fa fa-minus\"></i>\n            </button>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-picture\"></i>\n          </span>\n          <input type=\"file\" name=\"name\" class=\"form-control\" #imageFile>\n        </div>\n      </div>\n\n      <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n        <label class=\"control-label\">\n          {{ apiError }}\n        </label>\n      </div>\n\n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!assetForm.valid\">Add Asset</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/asset/asset-create/asset-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__ = __webpack_require__("./src/app/shared/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_asset_model__ = __webpack_require__("./src/app/shared/model/asset.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetCreateComponent = (function () {
    function AssetCreateComponent(router, assetsService) {
        this.router = router;
        this.assetsService = assetsService;
        this.asset = new __WEBPACK_IMPORTED_MODULE_1__shared_model_asset_model__["a" /* Asset */]();
    }
    AssetCreateComponent.prototype.addSpec = function (spec) {
        if (spec.value) {
            this.asset.specs.push(spec.value);
            spec.value = '';
        }
    };
    AssetCreateComponent.prototype.removeSpec = function (spec) {
        this.asset.specs = this.asset.specs.filter(function (s) { return s !== spec; });
    };
    AssetCreateComponent.prototype.onSubmitasset = function (assetForm) {
        var _this = this;
        var imageFile = this.imageFile.nativeElement;
        if (imageFile.files && imageFile.files[0]) {
            this.asset.image = imageFile.files[0];
            this.assetsService.create(this.asset)
                .subscribe(function (asset) {
                assetForm.reset();
                _this.router.navigate(['/assets']);
            }, function (error) {
                _this.apiError = error;
            });
        }
    };
    AssetCreateComponent.prototype.canLeaveTheComponent = function () {
        if (this.assetForm.dirty) {
            return window.confirm("\n        Unsaved changes.\n        Are you sure you want to leave?\n    ");
        }
        else {
            return true;
        }
    };
    return AssetCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* ViewChild */])('imageFile'),
    __metadata("design:type", Object)
], AssetCreateComponent.prototype, "imageFile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_16" /* ViewChild */])('assetForm'),
    __metadata("design:type", Object)
], AssetCreateComponent.prototype, "assetForm", void 0);
AssetCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-asset-create',
        template: __webpack_require__("./src/app/components/asset/asset-create/asset-create.component.html"),
        styles: [__webpack_require__("./src/app/components/asset/asset-create/asset-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */]) === "function" && _b || Object])
], AssetCreateComponent);

var _a, _b;
//# sourceMappingURL=asset-create.component.js.map

/***/ }),

/***/ "./src/app/components/asset/asset-item/asset-item.component.css":
/***/ (function(module, exports) {

module.exports = ".asset-info, .asset-thumbnail {\n    display: inline-block;\n    vertical-align: top;\n    margin-right: 20px;\n}"

/***/ }),

/***/ "./src/app/components/asset/asset-item/asset-item.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n    Este es el \"asset-item.component\"\n  </h1>\n  \n  \n  <div *ngIf=\"asset\">\n  <div class=\"asset-thumbnail\">\n    <img height=\"300\" [src]=\"asset.image\" />\n  </div>\n\n  <div class=\"asset-info\">\n    <h2> {{ asset.owner }}</h2>\n    <h3> {{ asset.value }} </h3>\n\n    <div *ngIf=\"asset.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of asset.specs\"> {{ spec }} </li>\n      </ul>\n    </div>\n    <button class=\"btn btn-danger\" (click)=\"onClickDelete()\">Delete</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/asset/asset-item/asset-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__ = __webpack_require__("./src/app/shared/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_asset_model__ = __webpack_require__("./src/app/shared/model/asset.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetItemComponent = (function () {
    function AssetItemComponent(router, routes, assetsService) {
        this.router = router;
        this.routes = routes;
        this.assetsService = assetsService;
        this.asset = new __WEBPACK_IMPORTED_MODULE_2__shared_model_asset_model__["a" /* Asset */]();
    }
    AssetItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes
            .data
            .subscribe(function (data) {
            _this.asset = data['asset'];
        });
    };
    AssetItemComponent.prototype.onClickDelete = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.assetsService.delete(this.asset.id)
                .subscribe(function () {
                _this.router.navigate(['/assets']);
            });
        }
    };
    return AssetItemComponent;
}());
AssetItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-asset-item',
        template: __webpack_require__("./src/app/components/asset/asset-item/asset-item.component.html"),
        styles: [__webpack_require__("./src/app/components/asset/asset-item/asset-item.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */]) === "function" && _c || Object])
], AssetItemComponent);

var _a, _b, _c;
//# sourceMappingURL=asset-item.component.js.map

/***/ }),

/***/ "./src/app/components/asset/asset-list/asset-list.component.css":
/***/ (function(module, exports) {

module.exports = ".asset {\n    margin: 10px;\n    text-align: center;\n}\n\n.asset img {\n    height: 300px;\n}"

/***/ }),

/***/ "./src/app/components/asset/asset-list/asset-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"text-center\" >\n\n    <br>\n    <br>\n    <h1 class=\"pt-1 text-center big\"> Test 1</h1>\n    <br>\n    <h2 class=\"pt-1 text-center medium\">press buttons for toggling the leds at the rapberry pi server</h2>\n\n    \n<button (click)=\"toggleGreenLed()\" type=\"button\" class=\"mx-5 btn btn-success\">Toogle Green Led</button>\n<button (click)=\"toggleYellowLed()\" type=\"button\" class=\"mx-5 btn btn-warning\">Toogle Yellow Led</button>\n<button (click)=\"toggleRedLed()\" type=\"button\" class=\"mx-5 btn btn-danger \">Toogle Red Led</button>\n\n  \n<!-- \n\n  <a [routerLink]=\"['/assets/new']\">\n  <i class=\"fa fa-plus\"></i>\n</a>\n<div class=\"row\">\n  <div *ngFor=\"let asset of assets\" class=\"asset col-xs-12 col-sm-3\">\n    <img [src]=\"asset.image\" />\n    <h3> {{ asset.owner }} </h3>\n    <p> {{ asset.value }} </p>\n    <a [routerLink]=\"['/assets', asset.id]\"> View Details </a>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/asset/asset-list/asset-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__ = __webpack_require__("./src/app/shared/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_raspberry_service__ = __webpack_require__("./src/app/shared/services/raspberry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetListComponent = (function () {
    function AssetListComponent(assetsService, raspberryService) {
        this.assetsService = assetsService;
        this.raspberryService = raspberryService;
        this.assets = [];
    }
    AssetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetsService.list()
            .subscribe(function (assets) { return _this.assets = assets; });
    };
    AssetListComponent.prototype.toggleGreenLed = function () {
        this.raspberryService.toggleGreenLed().subscribe(function (data) { return console.log(data); });
    };
    AssetListComponent.prototype.toggleYellowLed = function () {
        this.raspberryService.toggleYellowLed().subscribe(function (data) { return console.log(data); });
    };
    AssetListComponent.prototype.toggleRedLed = function () {
        this.raspberryService.toggleRedLed().subscribe(function (data) { return console.log(data); });
    };
    return AssetListComponent;
}());
AssetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-asset-list',
        template: __webpack_require__("./src/app/components/asset/asset-list/asset-list.component.html"),
        styles: [__webpack_require__("./src/app/components/asset/asset-list/asset-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_assets_service__["a" /* AssetsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_raspberry_service__["a" /* RaspberryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_raspberry_service__["a" /* RaspberryService */]) === "function" && _b || Object])
], AssetListComponent);

var _a, _b;
//# sourceMappingURL=asset-list.component.js.map

/***/ }),

/***/ "./src/app/components/index/index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n\n\n  <div *ngIf=\"!participant\">\n    <h1 class=\"pt-1 text-center big\"> Hey there, wellcome to this useless web App!!</h1>\n    <h2 class=\"pt-1 text-center medium\">Get registered to have some fun with our online Raspberry Pi Server</h2>\n  </div>\n\n\n\n  <div *ngIf=\"participant\">\n      <h1 class=\"pt-1 text-center medium\"> Great, now you are logged in lest have some fun with our awesome API server that is deployed on a Raspberry Pi!!!!!!!!!!!!!!!!!</h1>\n      <br>\n      <h2 class=\"pt-1 text-center medium\">Start testing the side links</h2>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(sessionService) {
        this.sessionService = sessionService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participant = this.sessionService.getParticipant();
        this.participantSubscription = this.sessionService.onParticipantChanges()
            .subscribe(function (participant) { return _this.participant = participant; });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__("./src/app/components/index/index.component.html"),
        styles: [__webpack_require__("./src/app/components/index/index.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n        <form (ngSubmit)=\"onSubmitLogin(loginForm)\" #loginForm=\"ngForm\">\n          <div class=\"form-group\" [class.has-error]=\"email.errors && email.touched\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-user\"></i>\n              </span>\n              <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"participant.email\" #email=\"ngModel\" required email>\n            </div>\n            <label class=\"control-label\" *ngIf=\"email.errors && email.touched\">\n              <ul>\n                <li *ngIf=\"email.errors.required\">Required</li>\n                <li *ngIf=\"email.errors.email\">Invalid email format</li>\n              </ul>\n            </label>\n          </div>\n\n          <div class=\"form-group\" [class.has-error]=\"password.errors && password.touched\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-lock\"></i>\n              </span>\n              <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"participant.password\" #password=\"ngModel\" required>\n            </div>\n            <label class=\"control-label\" *ngIf=\"password.errors && password.touched\">\n              <ul>\n                <li *ngIf=\"password.errors.required\">Required</li>\n              </ul>\n            </label>\n          </div>\n\n          <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n            <label class=\"control-label\">\n              {{ apiError }}\n            </label>\n          </div>\n\n          <div class=\"form-actions\">\n            <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!loginForm.valid\">Login</button>\n          </div>\n        </form>\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n    <hr>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading text-center\">\n        Dont't have an account?\n        <a [routerLink]=\"['/signup']\">Sign up </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_model_participant_model__ = __webpack_require__("./src/app/shared/model/participant.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
        this.participant = new __WEBPACK_IMPORTED_MODULE_1__shared_model_participant_model__["a" /* Participant */]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onSubmitLogin = function (loginForm) {
        var _this = this;
        console.log('Este es el participante que entra en onSubmitLogin ');
        console.log(this.participant);
        this.sessionService.authenticate(this.participant).subscribe(function (participant) {
            loginForm.reset();
            _this.router.navigate(["/"]);
        }, function (error) {
            console.log('Este es el error de onSubmitLogin ');
            _this.apiError = error.message;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-brand * {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.navbar-brand img {\n    max-width: 20px;\n    width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    \n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#main-navbar-collapse\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n        <span>ArtExMachina</span>\n      </a>\n    </div>\n    \n\n    <div class=\"collapse navbar-collapse\" id=\"main-navbar-collapse\">\n      <ul class=\"nav navbar-nav\" *ngIf=\"participant\">\n        <li class=\"active\">\n          <a [routerLink]=\"['/assets']\">Bricks\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!participant\">\n          <a [routerLink]=\"['/login']\">Login <i class=\"fas fa-sign-in-alt\"></i></a>\n        </li>\n        <li *ngIf=\"!participant\">\n          <a [routerLink]=\"['/signup']\">Signup</a>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"participant\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ participant.email }}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li>\n              <a (click)=\"onClickLogout()\">Logout</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participant = this.sessionService.getParticipant();
        this.participantSubscription = this.sessionService.onParticipantChanges()
            .subscribe(function (participant) { return _this.participant = participant; });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.participantSubscription.unsubscribe();
    };
    NavbarComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.sessionService.logout()
            .subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "./src/app/components/participant/participant-base/participant-base.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/participant/participant-base/participant-base.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Este es el \"participant-base.component\"\n</h1>\n<p>\n A continuación se muestra el \"participant-PROFILE.component\"\n</p>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/participant/participant-base/participant-base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantBaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticipantBaseComponent = (function () {
    function ParticipantBaseComponent() {
    }
    ParticipantBaseComponent.prototype.ngOnInit = function () {
    };
    return ParticipantBaseComponent;
}());
ParticipantBaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-participant-base',
        template: __webpack_require__("./src/app/components/participant/participant-base/participant-base.component.html"),
        styles: [__webpack_require__("./src/app/components/participant/participant-base/participant-base.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ParticipantBaseComponent);

//# sourceMappingURL=participant-base.component.js.map

/***/ }),

/***/ "./src/app/components/participant/participant-list/participant-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/participant/participant-list/participant-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"pt-1 text-center big\"> Test 3</h1>\n      <br>\n      <h2 class=\"pt-1 text-center medium\">just send and email to:</h2>\n      <h2 class=\"pt-1 text-center medium\"><b>info@artexmachina.org</b></h2>\n      <h2 class=\"pt-1 text-center medium\">and you will listen a beep when it gets to our email server</h2>\n      \n<div >\n\n  <!-- <div *ngFor=\"let participant of participants\" class=\"row\" >\n    <div class=\"asset col-xs-12 col-sm-3\" *ngif=\"asset\">\n\n        <img [src]=\"participant.image\" />\n        <h3> {{ participant.firstName }} </h3>\n        <h3> {{ participant.lastName }} </h3>\n        <p> {{ participant.email }} </p>\n        <p> {{ participant.vatIdNumber }} </p>\n        <p> {{ participant.description }} </p>\n        <p> {{ participant.address }} </p>\n        <p> {{ participant.roll }} </p>\n\n        <a [routerLink]=\"['/participants', asset.id]\"> Edit Profile </a>\n      \n    </div> \n  </div> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/participant/participant-list/participant-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__ = __webpack_require__("./src/app/shared/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParticipantListComponent = (function () {
    function ParticipantListComponent(participantsService) {
        this.participantsService = participantsService;
        this.participants = [];
    }
    ParticipantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participantsService.list()
            .subscribe(function (participants) { return _this.participants = participants; });
    };
    return ParticipantListComponent;
}());
ParticipantListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-participant-list',
        template: __webpack_require__("./src/app/components/participant/participant-list/participant-list.component.html"),
        styles: [__webpack_require__("./src/app/components/participant/participant-list/participant-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__["a" /* ParticipantsService */]) === "function" && _a || Object])
], ParticipantListComponent);

var _a;
//# sourceMappingURL=participant-list.component.js.map

/***/ }),

/***/ "./src/app/components/participant/participant-profile/participant-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/participant/participant-profile/participant-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Este es el Participant-profile component!!!\n</h1>\n\n\n<p>\n  participant-profile works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/participant/participant-profile/participant-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticipantProfileComponent = (function () {
    function ParticipantProfileComponent() {
    }
    ParticipantProfileComponent.prototype.ngOnInit = function () {
    };
    return ParticipantProfileComponent;
}());
ParticipantProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-participant-profile',
        template: __webpack_require__("./src/app/components/participant/participant-profile/participant-profile.component.html"),
        styles: [__webpack_require__("./src/app/components/participant/participant-profile/participant-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ParticipantProfileComponent);

//# sourceMappingURL=participant-profile.component.js.map

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n    }\n    #sidebar.active {\n        margin-left: 0;\n    }\n}\n\n\n.wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n    float: left;\n}\n\n\n/* Sidebar Header */\n\n\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    height: 100vh;\n    background: rgb(73, 73, 74);\n    color: white;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n\n#sidebar.active {\n    margin-left: -250px;\n}\n\n\n/* Sidebar Header */\n\n\n#sidebar .sidebar-header {\n    padding: 25px 10px 150px;\n    border-bottom: 1px solid white;\n}\n\n\n#sidebar img.logo {\n    width: 150px;\n}\n\n\n#sidebar span.logo {\n    font-weight: bold;\n    font-size: 30px;\n    color: white;\n}\n\n\n/* Sidebar Menu */\n\n\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid white;\n}\n\n\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n\n\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n    color: white;\n}\n\n\n#sidebar ul li a:hover {\n    color: #3086E9;\n    background: #fff;\n}\n\n\n.active {\n    background: rgb(1, 58, 123);\n}\n\n\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: rgb(96, 156, 225);\n}\n\n\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    content: '\\e259';\n    display: block;\n    position: absolute;\n    right: 20px;\n    font-family: 'Glyphicons Halflings';\n    font-size: 0.6em;\n}\n\n\na[aria-expanded=\"true\"]::before {\n    content: '\\e260';\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- /#sidebar-wrapper -->\n  <div class=\"wrapper\">\n\n    <nav id=\"sidebar\">\n        <!-- Sidebar Header -->\n        <div class=\"sidebar-header\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">\n              <span class=\"logo\">Art ex Machina</span>\n            </a>\n        </div>\n    \n\n        <!-- Sidebar Links -->\n        <ul class=\"list-unstyled components\">\n            <li (click)=\"toggleClass($event)\"><a [routerLink]=\"['/']\" ><i class=\"fa fa-user\"></i> home</a></li>\n            <!-- <li (click)=\"toggleClass($event)\"><a [routerLink]=\"[/participants', participant.id']\" ><i class=\"fa fa-user\"></i> settings</a></li> -->\n            <li (click)=\"toggleClass($event)\"><a [routerLink]=\"['/assets']\" ><i class=\"fa fa-cubes\"></i> Test 1</a></li>\n            <li (click)=\"toggleClass($event)\"><a [routerLink]=\"['/transactions']\" ><i class=\"fa fa-gavel\"></i> Test 2</a></li>\n            <li (click)=\"toggleClass($event)\"><a [routerLink]=\"['/participants']\"><i class=\"fa fa-cogs\"></i> Test 3</a></li>\n            \n<!--\n            <li> Link with dropdown items \n                <a href=\"#homeSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Pages</a>\n                <ul class=\"collapse list-unstyled\" id=\"homeSubmenu\">\n                    <li (click)=\"toggleClass($event)\"><a href=\"#\"><i class=\"fa fa-cog\"></i> Settings</a></li>\n                    <li (click)=\"toggleClass($event)\"><a href=\"#\"><i class=\"fa fa-briefcase\"></i> My Wallet</a></li>\n                    <li><a href=\"#\"><i class=\"fab fa-docker\"></i> Docker</a></li>\n                    <li><a href=\"#\"><i class=\"fas fa-link\"></i> BlockChain</a></li>\n                    <li><a href=\"#\">HyperLedger</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-chart-bar\"></i> Dashboard</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-chart-line\"></i> Stats 1</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-chart-pie\"></i> Stats 2</a></li>\n                    <li><a href=\"#\"><i class=\"fa fa-cc-paypal\"></i> PayPal</a></li>\n                </ul>\n            </li>-->\n            <br>\n            <li (click)=\"onClickLogout()\">\n              <a [routerLink]=\"['/']\" >Logout</a>\n            </li>\n        </ul>\n    </nav>\n\n</div>"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        // variable to hold boolean value to "active" class
        this.isClassActiveVisible = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.participant = this.sessionService.getParticipant();
        this.participantSubscription = this.sessionService.onParticipantChanges()
            .subscribe(function (participant) { return _this.participant = participant; });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.participantSubscription.unsubscribe();
    };
    SidebarComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.sessionService.logout()
            .subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    SidebarComponent.prototype.toggleClass = function (event) {
        var elementsWithClass = document.getElementsByClassName('active');
        Object.values(elementsWithClass).forEach(function (element) { element.classList.remove('active'); });
        event.target.classList.add('active');
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n\n    <h3 class=\"mt-5 text-center\">Let's get you started</h3>\n\n    <form (ngSubmit)=\"onSubmitSignup(signupForm)\" #signupForm=\"ngForm\">\n\n      <div class=\"form-group\" [class.has-error]=\"email.errors && email.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-envelope\"></i>\n          </span>\n          <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email*\" [(ngModel)]=\"participant.email\" #email=\"ngModel\" required\n            email>\n        </div>\n        <label class=\"control-label\" *ngIf=\"email.errors && email.touched\">\n          <ul>\n            <li *ngIf=\"email.errors.required\">Required</li>\n            <li *ngIf=\"email.errors.email\">Invalid email format</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"password.errors && password.touched\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-lock\"></i>\n          </span>\n          <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password*\" [(ngModel)]=\"participant.password\" #password=\"ngModel\"\n            required>\n        </div>\n        <label class=\"control-label\" *ngIf=\"password.errors && password.touched\">\n          <ul>\n            <li *ngIf=\"password.errors.required\">Required</li>\n          </ul>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"fa fa-user\"></i>\n          </span>\n          <input type=\"text\" name=\"firstName\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"participant.firstName\" #firstName=\"ngModel\">\n        </div>\n      </div>\n\n      <div class=\"form-group\" class=\"has-error\" *ngIf=\"apiError\">\n        <label class=\"control-label\">\n          {{ apiError }}\n        </label>\n      </div>\n      \n      <div class=\"form-actions\">\n        <button type=\"submit\" class=\"btn btn-block btn-primary\" [disabled]=\"!signupForm.valid\">Sign up!</button>\n      </div>\n    </form>\n\n\n  </div>\n  <div class=\"col-xs-12 col-sm-4 col-sm-offset-4\">\n    <hr>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading text-center\">\n        All ready have an account?\n        <a [routerLink]=\"['/login']\">Sign in</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__ = __webpack_require__("./src/app/shared/services/participants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_participant_model__ = __webpack_require__("./src/app/shared/model/participant.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(router, participantsService) {
        this.router = router;
        this.participantsService = participantsService;
        this.participant = new __WEBPACK_IMPORTED_MODULE_2__shared_model_participant_model__["a" /* Participant */]();
    }
    SignupComponent.prototype.onSubmitSignup = function (signupForm) {
        var _this = this;
        this.participantsService.create(this.participant).subscribe(function (user) {
            signupForm.reset();
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.apiError = error.message;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("./src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("./src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__["a" /* ParticipantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_participants_service__["a" /* ParticipantsService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "./src/app/components/transaction/transaction-list/transaction-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/transaction/transaction-list/transaction-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"text-center\" >\n\n    <br>\n    <br>\n    <h1 class=\"pt-1 text-center big\"> Test 2</h1>\n    <br>\n    <h2 class=\"pt-1 text-center medium\">Ok, may the leds were to small and maybe you could not see them blinking</h2>\n    <br>\n    <h2 class=\"pt-1 text-center medium\">Let's try something <b>bigger!!</b></h2>\n    <br>\n    <br>\n    \n    \n<button (click)=\"toggleRele()\" type=\"button\" class=\"btn btn-primary btn-lg\">Toogle Lamp's Light</button>\n\n</div>"

/***/ }),

/***/ "./src/app/components/transaction/transaction-list/transaction-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_raspberry_service__ = __webpack_require__("./src/app/shared/services/raspberry.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionListComponent = (function () {
    function TransactionListComponent(raspberryService) {
        this.raspberryService = raspberryService;
    }
    TransactionListComponent.prototype.toggleRele = function () {
        this.raspberryService.toggleRele().subscribe(function (data) { return console.log(data); });
    };
    return TransactionListComponent;
}());
TransactionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-transaction-list',
        template: __webpack_require__("./src/app/components/transaction/transaction-list/transaction-list.component.html"),
        styles: [__webpack_require__("./src/app/components/transaction/transaction-list/transaction-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_raspberry_service__["a" /* RaspberryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_raspberry_service__["a" /* RaspberryService */]) === "function" && _a || Object])
], TransactionListComponent);

var _a;
//# sourceMappingURL=transaction-list.component.js.map

/***/ }),

/***/ "./src/app/rxjs.operators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// Statics

// Operators






//# sourceMappingURL=rxjs.operators.js.map

/***/ }),

/***/ "./src/app/shared/guards/can-leave-asset-create.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanLeaveAssetCreateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanLeaveAssetCreateGuard = (function () {
    function CanLeaveAssetCreateGuard() {
    }
    CanLeaveAssetCreateGuard.prototype.canDeactivate = function (component) {
        return component.canLeaveTheComponent();
    };
    return CanLeaveAssetCreateGuard;
}());
CanLeaveAssetCreateGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], CanLeaveAssetCreateGuard);

//# sourceMappingURL=can-leave-asset-create.guard.js.map

/***/ }),

/***/ "./src/app/shared/guards/is-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthenticatedGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsAuthenticatedGuard = (function () {
    function IsAuthenticatedGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    IsAuthenticatedGuard.prototype.canActivate = function (next, state) {
        var isAuthenticated = this.sessionService.isAuthenticated();
        if (!isAuthenticated) {
            this.router.navigate(['/login']);
        }
        return isAuthenticated;
    };
    return IsAuthenticatedGuard;
}());
IsAuthenticatedGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], IsAuthenticatedGuard);

var _a, _b;
//# sourceMappingURL=is-authenticated.guard.js.map

/***/ }),

/***/ "./src/app/shared/model/asset.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Asset; });
var Asset = (function () {
    function Asset() {
        this.specs = new Array();
    }
    Asset.prototype.asFormData = function () {
        var data = new FormData();
        data.append('owner', this.owner);
        data.append('value', this.value);
        for (var _i = 0, _a = this.specs; _i < _a.length; _i++) {
            var spec = _a[_i];
            data.append('specs', spec);
        }
        return data;
    };
    return Asset;
}());

//# sourceMappingURL=asset.model.js.map

/***/ }),

/***/ "./src/app/shared/model/participant.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Participant; });
var Participant = (function () {
    function Participant() {
    }
    // password?: string;
    // firstName: string;
    // lastName: string;
    // vatIdNumber: string;
    // description: string;
    // image: string;
    // address: Array<string> = new Array();
    // roll: string;
    Participant.prototype.asFormData = function () {
        var data = new FormData();
        // data.append('firstName', this.firstName);
        // data.append('lastName', this.lastName);
        // data.append('vatIdNumber', this.vatIdNumber);
        // data.append('description', this.description);
        // data.append('image', this.image);
        // data.append('lastName', this.lastName);
        // for (const addressline of this.address) {
        //     data.append('address', addressline);
        // }
        return data;
    };
    return Participant;
}());

//# sourceMappingURL=participant.model.js.map

/***/ }),

/***/ "./src/app/shared/resolvers/asset-details-resolver.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetDetailsResolverGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_assets_service__ = __webpack_require__("./src/app/shared/services/assets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetDetailsResolverGuard = (function () {
    function AssetDetailsResolverGuard(router, assetsService) {
        this.router = router;
        this.assetsService = assetsService;
    }
    AssetDetailsResolverGuard.prototype.resolve = function (route) {
        var _this = this;
        return this.assetsService
            .get(route.params['id'])
            .catch(function (error) {
            _this.router.navigate(['/assets']);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(error);
        });
    };
    return AssetDetailsResolverGuard;
}());
AssetDetailsResolverGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_assets_service__["a" /* AssetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_assets_service__["a" /* AssetsService */]) === "function" && _b || Object])
], AssetDetailsResolverGuard);

var _a, _b;
//# sourceMappingURL=asset-details-resolver.guard.js.map

/***/ }),

/***/ "./src/app/shared/services/assets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
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



var AssetsService = AssetsService_1 = (function (_super) {
    __extends(AssetsService, _super);
    function AssetsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    AssetsService.prototype.list = function () {
        var _this = this;
        return this.http.get(AssetsService_1.BRICKFY_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AssetsService.prototype.get = function (id) {
        var _this = this;
        return this.http.get(AssetsService_1.BRICKFY_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AssetsService.prototype.create = function (asset) {
        var _this = this;
        return this.http.post(AssetsService_1.BRICKFY_API, asset.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AssetsService.prototype.edit = function (asset) {
        var _this = this;
        return this.http.put("AssetsService.BRICKFY_API/" + asset.id, asset.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AssetsService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(AssetsService_1.BRICKFY_API + "/" + id, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    return AssetsService;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));
AssetsService.BRICKFY_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/assets";
AssetsService = AssetsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AssetsService);

var AssetsService_1, _a;
//# sourceMappingURL=assets.service.js.map

/***/ }),

/***/ "./src/app/shared/services/base-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseApiService = BaseApiService_1 = (function () {
    function BaseApiService() {
    }
    BaseApiService.prototype.handleError = function (error) {
        if (!__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
            console.error(this.constructor.name + " error at environment.production: " + error);
        }
        var errorData = error.json();
        errorData.status = error.status;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].throw(errorData);
    };
    return BaseApiService;
}());
BaseApiService.BASE_API = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].baseApi;
BaseApiService.defaultHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
BaseApiService.defaultOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: BaseApiService_1.defaultHeaders, withCredentials: true });
BaseApiService = BaseApiService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], BaseApiService);

var BaseApiService_1;
//# sourceMappingURL=base-api.service.js.map

/***/ }),

/***/ "./src/app/shared/services/global-error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__session_service__ = __webpack_require__("./src/app/shared/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalErrorHandlerService = (function () {
    function GlobalErrorHandlerService(sessionService, injector) {
        this.sessionService = sessionService;
        this.injector = injector;
    }
    GlobalErrorHandlerService.prototype.handleError = function (error) {
        var _this = this;
        if (error.status === 403) {
            this.sessionService.logout()
                .subscribe(function () {
                _this.getRouterService().navigate(['/login']);
            });
        }
        throw error;
    };
    GlobalErrorHandlerService.prototype.getRouterService = function () {
        return this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]);
    };
    return GlobalErrorHandlerService;
}());
GlobalErrorHandlerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* Injector */]) === "function" && _b || Object])
], GlobalErrorHandlerService);

var _a, _b;
//# sourceMappingURL=global-error-handler.service.js.map

/***/ }),

/***/ "./src/app/shared/services/participants.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
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



var ParticipantsService = ParticipantsService_1 = (function (_super) {
    __extends(ParticipantsService, _super);
    function ParticipantsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    ParticipantsService.prototype.create = function (participant) {
        var _this = this;
        return this.http.post(ParticipantsService_1.PARTICIPANT_API, JSON.stringify(participant), __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ParticipantsService.prototype.list = function () {
        var _this = this;
        return this.http.get(ParticipantsService_1.PARTICIPANT_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ParticipantsService.prototype.edit = function (participant) {
        var _this = this;
        return this.http.put("AssetsService.PARTICIPANT_API/" + participant.id, participant.asFormData(), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ withCredentials: true }))
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    return ParticipantsService;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));
ParticipantsService.PARTICIPANT_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/participants";
ParticipantsService = ParticipantsService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ParticipantsService);

var ParticipantsService_1, _a;
//# sourceMappingURL=participants.service.js.map

/***/ }),

/***/ "./src/app/shared/services/raspberry.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaspberryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
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



var RaspberryService = (function (_super) {
    __extends(RaspberryService, _super);
    function RaspberryService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.BRICKFY_LEDSAPI = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/raspberry";
        return _this;
    }
    RaspberryService.prototype.toggleGreenLed = function () {
        var _this = this;
        return this.http.get(this.BRICKFY_LEDSAPI + '/green', __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RaspberryService.prototype.toggleYellowLed = function () {
        var _this = this;
        return this.http.get(this.BRICKFY_LEDSAPI + '/yellow', __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RaspberryService.prototype.toggleRedLed = function () {
        var _this = this;
        return this.http.get(this.BRICKFY_LEDSAPI + '/red', __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    RaspberryService.prototype.toggleRele = function () {
        var _this = this;
        return this.http.get(this.BRICKFY_LEDSAPI + '/rele', __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    return RaspberryService;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));
RaspberryService.BRICKFY_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/assets";
RaspberryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RaspberryService);

var _a;
//# sourceMappingURL=raspberry.service.js.map

/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_api_service__ = __webpack_require__("./src/app/shared/services/base-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
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




var CURRENT_PARTICIPANT_KEY = 'currentParticipant';
var SessionService = (function (_super) {
    __extends(SessionService, _super);
    function SessionService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.SESSION_API = __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].BASE_API + "/session";
        _this.participantSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        _this.participant = JSON.parse(localStorage.getItem(CURRENT_PARTICIPANT_KEY));
        _this.notifyParticipantChanges();
        return _this;
    }
    SessionService.prototype.authenticate = function (participant) {
        var _this = this;
        return this.http.post(this.SESSION_API, JSON.stringify(participant), __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            console.log('entrando en session.service authenticate');
            console.log('imprimiendo res:');
            console.log(res);
            return _this.doAuthentication(res.json()); // participant <-->  res.json() ?????????????????????????????????????????????????
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.delete(this.SESSION_API, __WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */].defaultOptions)
            .map(function (res) {
            return _this.doLogout();
        })
            .catch(function (error) { return _this.handleError(error); });
    };
    SessionService.prototype.isAuthenticated = function () {
        return this.participant ? true : false;
    };
    SessionService.prototype.getParticipant = function () {
        return this.participant;
    };
    SessionService.prototype.onParticipantChanges = function () {
        return this.participantSubject.asObservable();
    };
    SessionService.prototype.doAuthentication = function (participant) {
        console.log('entrando en DOauthenticate');
        this.participant = participant;
        localStorage.setItem(CURRENT_PARTICIPANT_KEY, JSON.stringify(this.participant));
        this.notifyParticipantChanges();
        return this.participant;
    };
    SessionService.prototype.doLogout = function () {
        this.participant = null;
        localStorage.removeItem(CURRENT_PARTICIPANT_KEY);
        this.notifyParticipantChanges();
    };
    SessionService.prototype.notifyParticipantChanges = function () {
        this.participantSubject.next(this.participant);
    };
    return SessionService;
}(__WEBPACK_IMPORTED_MODULE_0__base_api_service__["a" /* BaseApiService */]));
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SessionService);

var _a;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseApi: 'https://www.artexmachina.org'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map