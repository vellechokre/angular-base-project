webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./product/modules/Patient/patient.module": [
		"../../../../../src/app/product/modules/Patient/patient.module.ts",
		"patient.module"
	],
	"./product/modules/record-visit/record-visit.module": [
		"../../../../../src/app/product/modules/record-visit/record-visit.module.ts",
		"record-visit.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper\" [ngClass]=\"{'layout-compact':layoutCompact}\" (click)=\"onLayoutClick()\">\r\n    <div #layoutContainer class=\"layout-container\" \r\n            [ngClass]=\"{'menu-layout-static': !isOverlay(),\r\n            'menu-layout-overlay': isOverlay(),\r\n            'layout-menu-overlay-active': overlayMenuActive,\r\n            'menu-layout-horizontal': isHorizontal(),\r\n            'menu-layout-slim': isSlim(),\r\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\r\n            'layout-menu-static-active': staticMenuMobileActive}\">\r\n        <app-topbar [isUserAuthorized]=\"isUserAuthorized\"></app-topbar>\r\n\r\n        <div *ngIf=\"isUserAuthorized\" class=\"layout-menu layout-menu-custom\" [ngClass]=\"{'layout-menu-dark':darkMenu}\" (click)=\"onMenuClick($event)\">\r\n            <div #layoutMenuScroller class=\"nano\">\r\n                <div class=\"nano-content menu-scroll-content\">\r\n                    <app-inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"></app-inline-profile>\r\n                    <app-menu [reset]=\"resetMenu\"></app-menu>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"layout-main layout-main-custom\"\r\n            [ngClass]=\"{'layout-custom': !isUserAuthorized}\">\r\n            <router-outlet></router-outlet>\r\n            \r\n            <!-- <app-footer *ngIf=\"isUserAuthorised\"></app-footer> -->\r\n        </div>\r\n        \r\n        <app-rightpanel></app-rightpanel>\r\n        \r\n        <div class=\"layout-mask\"></div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_Auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth/Auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var AppComponent = (function () {
    function AppComponent(renderer, authService, cd, router) {
        var _this = this;
        this.renderer = renderer;
        this.authService = authService;
        this.cd = cd;
        this.router = router;
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        //Sanchit Mirg: 13-10-2019 Default was inline, changed it to top
        this.profileMode = 'top';
        this.isUserAuthorized = false;
        this.authService.isAuthorized.subscribe(function (isUserAuthorized) {
            _this.isUserAuthorized = isUserAuthorized;
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = this.layoutMenuScrollerViewChild && this.layoutMenuScrollerViewChild.nativeElement;
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    AppComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    AppComponent.prototype.onMenuClick = function ($event) {
        var _this = this;
        this.menuClick = true;
        this.resetMenu = false;
        if (!this.isHorizontal()) {
            setTimeout(function () {
                jQuery(_this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    };
    AppComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    AppComponent.prototype.onLogoutClick = function (event) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    AppComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    AppComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AppComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    AppComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    AppComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    AppComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('layoutContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppComponent.prototype, "layourContainerViewChild", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('layoutMenuScroller'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], AppComponent.prototype, "layoutMenuScrollerViewChild", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_Auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_Auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_components_menu_app_menu_component__ = __webpack_require__("../../../../../src/app/core/components/menu/app.menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_components_topbar_app_topbar_component__ = __webpack_require__("../../../../../src/app/core/components/topbar/app.topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_components_footer_app_footer_component__ = __webpack_require__("../../../../../src/app/core/components/footer/app.footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_components_rightpanel_app_rightpanel_component__ = __webpack_require__("../../../../../src/app/core/components/rightpanel/app.rightpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_components_profile_app_profile_component__ = __webpack_require__("../../../../../src/app/core/components/profile/app.profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_view_dashboarddemo_component__ = __webpack_require__("../../../../../src/app/demo/view/dashboarddemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demo_view_sampledemo_component__ = __webpack_require__("../../../../../src/app/demo/view/sampledemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demo_view_formsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/formsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demo_view_datademo_component__ = __webpack_require__("../../../../../src/app/demo/view/datademo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demo_view_panelsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/panelsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demo_view_overlaysdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/overlaysdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demo_view_menusdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/menusdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demo_view_messagesdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/messagesdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demo_view_miscdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/miscdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demo_view_emptydemo_component__ = __webpack_require__("../../../../../src/app/demo/view/emptydemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demo_view_chartsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/chartsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demo_view_filedemo_component__ = __webpack_require__("../../../../../src/app/demo/view/filedemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_view_utilsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/utilsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_view_documentation_component__ = __webpack_require__("../../../../../src/app/demo/view/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__demo_service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__demo_service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__demo_service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__demo_service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__core_services_auth_Auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth/Auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__core_services_auth_AuthGuard_service__ = __webpack_require__("../../../../../src/app/core/services/auth/AuthGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__core_components_login_login_component__ = __webpack_require__("../../../../../src/app/core/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__product_components_quick_add_patient_quick_add_patient_component__ = __webpack_require__("../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__product_components_schedule_appointment_schedule_appointment_component__ = __webpack_require__("../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__product_services_patient_service__ = __webpack_require__("../../../../../src/app/product/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__core_http_request_interceptor_service__ = __webpack_require__("../../../../../src/app/core/http/request-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__product_components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/product/components/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__product_services_get_clinic_service__ = __webpack_require__("../../../../../src/app/product/services/get-clinic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__product_services_get_branches_service__ = __webpack_require__("../../../../../src/app/product/services/get-branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__product_services_authenticate_service__ = __webpack_require__("../../../../../src/app/product/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__product_services_countries_service__ = __webpack_require__("../../../../../src/app/product/services/countries.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__product_services_states_service__ = __webpack_require__("../../../../../src/app/product/services/states.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__product_services_cities_service__ = __webpack_require__("../../../../../src/app/product/services/cities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__product_services_appointment_service__ = __webpack_require__("../../../../../src/app/product/services/appointment.service.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["BreadcrumbModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CarouselModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ColorPickerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CheckboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ChipsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["CodeHighlighterModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ContextMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataGridModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataScrollerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DragDropModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["DropdownModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["EditorModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["FieldsetModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GalleriaModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GMapModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputSwitchModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["InputTextareaModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["LightboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ListboxModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MegaMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MenubarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["MultiSelectModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OrderListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OrganizationChartModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["OverlayPanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PaginatorModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PasswordModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PickListModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ProgressBarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["RadioButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ScheduleModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SelectButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SlideMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SliderModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SpinnerModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["SplitButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["StepsModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TerminalModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TieredMenuModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ToggleButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ToolbarModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TooltipModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TreeModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["TreeTableModule"],
            __WEBPACK_IMPORTED_MODULE_38__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__core_components_menu_app_menu_component__["a" /* AppMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__core_components_menu_app_menu_component__["b" /* AppSubMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__core_components_topbar_app_topbar_component__["a" /* AppTopbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__core_components_footer_app_footer_component__["a" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__core_components_rightpanel_app_rightpanel_component__["a" /* AppRightpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_14__core_components_profile_app_profile_component__["a" /* AppInlineProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__demo_view_dashboarddemo_component__["a" /* DashboardDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_16__demo_view_sampledemo_component__["a" /* SampleDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__demo_view_formsdemo_component__["a" /* FormsDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_18__demo_view_datademo_component__["a" /* DataDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_19__demo_view_panelsdemo_component__["a" /* PanelsDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__demo_view_overlaysdemo_component__["a" /* OverlaysDemoComponent */], __WEBPACK_IMPORTED_MODULE_21__demo_view_menusdemo_component__["a" /* MenusDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_22__demo_view_messagesdemo_component__["a" /* MessagesDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__demo_view_miscdemo_component__["a" /* MiscDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_25__demo_view_chartsdemo_component__["a" /* ChartsDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_24__demo_view_emptydemo_component__["a" /* EmptyDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_26__demo_view_filedemo_component__["a" /* FileDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_27__demo_view_utilsdemo_component__["a" /* UtilsDemoComponent */],
            __WEBPACK_IMPORTED_MODULE_28__demo_view_documentation_component__["a" /* DocumentationComponent */],
            __WEBPACK_IMPORTED_MODULE_37__core_components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_39__product_components_quick_add_patient_quick_add_patient_component__["a" /* QuickAddPatientComponent */],
            __WEBPACK_IMPORTED_MODULE_40__product_components_schedule_appointment_schedule_appointment_component__["a" /* ScheduleAppointmentComponent */],
            __WEBPACK_IMPORTED_MODULE_43__product_components_calendar_calendar_component__["a" /* CalendarComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
            __WEBPACK_IMPORTED_MODULE_29__demo_service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_30__demo_service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_31__demo_service_eventservice__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_32__demo_service_nodeservice__["a" /* NodeService */],
            { provide: __WEBPACK_IMPORTED_MODULE_33__core_http_core_api_service__["b" /* BASE_URL */], useValue: __WEBPACK_IMPORTED_MODULE_34__environments_environment__["a" /* environment */].baseUrl },
            __WEBPACK_IMPORTED_MODULE_35__core_services_auth_Auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_36__core_services_auth_AuthGuard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_50__product_services_appointment_service__["a" /* AppointmentService */],
            __WEBPACK_IMPORTED_MODULE_41__product_services_patient_service__["a" /* PatientService */],
            __WEBPACK_IMPORTED_MODULE_44__product_services_get_clinic_service__["a" /* GetClinic */],
            __WEBPACK_IMPORTED_MODULE_45__product_services_get_branches_service__["a" /* GetBranches */],
            __WEBPACK_IMPORTED_MODULE_46__product_services_authenticate_service__["a" /* AuthenticateService */],
            __WEBPACK_IMPORTED_MODULE_47__product_services_countries_service__["a" /* CountriesService */],
            __WEBPACK_IMPORTED_MODULE_48__product_services_states_service__["a" /* StatesService */],
            __WEBPACK_IMPORTED_MODULE_49__product_services_cities_service__["a" /* CitiesService */],
            { provide: __WEBPACK_IMPORTED_MODULE_38__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_42__core_http_request_interceptor_service__["a" /* RequestInterceptor */], multi: true }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_view_dashboarddemo_component__ = __webpack_require__("../../../../../src/app/demo/view/dashboarddemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_view_sampledemo_component__ = __webpack_require__("../../../../../src/app/demo/view/sampledemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_view_formsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/formsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_view_datademo_component__ = __webpack_require__("../../../../../src/app/demo/view/datademo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_view_panelsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/panelsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_view_overlaysdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/overlaysdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_view_menusdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/menusdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_view_messagesdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/messagesdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_view_miscdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/miscdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_view_emptydemo_component__ = __webpack_require__("../../../../../src/app/demo/view/emptydemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_view_chartsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/chartsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_view_filedemo_component__ = __webpack_require__("../../../../../src/app/demo/view/filedemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_view_utilsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/utilsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_view_documentation_component__ = __webpack_require__("../../../../../src/app/demo/view/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_services_auth_AuthGuard_service__ = __webpack_require__("../../../../../src/app/core/services/auth/AuthGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_components_login_login_component__ = __webpack_require__("../../../../../src/app/core/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__product_components_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/product/components/calendar/calendar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_17__core_components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__demo_view_dashboarddemo_component__["a" /* DashboardDemoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__core_services_auth_AuthGuard_service__["a" /* AuthGuardService */]] },
    { path: 'sample', component: __WEBPACK_IMPORTED_MODULE_3__demo_view_sampledemo_component__["a" /* SampleDemoComponent */] },
    { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_4__demo_view_formsdemo_component__["a" /* FormsDemoComponent */] },
    { path: 'data', component: __WEBPACK_IMPORTED_MODULE_5__demo_view_datademo_component__["a" /* DataDemoComponent */] },
    { path: 'panels', component: __WEBPACK_IMPORTED_MODULE_6__demo_view_panelsdemo_component__["a" /* PanelsDemoComponent */] },
    { path: 'overlays', component: __WEBPACK_IMPORTED_MODULE_7__demo_view_overlaysdemo_component__["a" /* OverlaysDemoComponent */] },
    { path: 'menus', component: __WEBPACK_IMPORTED_MODULE_8__demo_view_menusdemo_component__["a" /* MenusDemoComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_9__demo_view_messagesdemo_component__["a" /* MessagesDemoComponent */] },
    { path: 'misc', component: __WEBPACK_IMPORTED_MODULE_10__demo_view_miscdemo_component__["a" /* MiscDemoComponent */] },
    { path: 'empty', component: __WEBPACK_IMPORTED_MODULE_11__demo_view_emptydemo_component__["a" /* EmptyDemoComponent */] },
    { path: 'charts', component: __WEBPACK_IMPORTED_MODULE_12__demo_view_chartsdemo_component__["a" /* ChartsDemoComponent */] },
    { path: 'file', component: __WEBPACK_IMPORTED_MODULE_13__demo_view_filedemo_component__["a" /* FileDemoComponent */] },
    { path: 'utils', component: __WEBPACK_IMPORTED_MODULE_14__demo_view_utilsdemo_component__["a" /* UtilsDemoComponent */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_15__demo_view_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'calendar', component: __WEBPACK_IMPORTED_MODULE_18__product_components_calendar_calendar_component__["a" /* CalendarComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__core_services_auth_AuthGuard_service__["a" /* AuthGuardService */]] },
    { path: 'patient', loadChildren: './product/modules/Patient/patient.module#PatientModule', canActivate: [__WEBPACK_IMPORTED_MODULE_16__core_services_auth_AuthGuard_service__["a" /* AuthGuardService */]] },
    { path: 'record-visit', loadChildren: './product/modules/record-visit/record-visit.module#RecordVisitModule', canActivate: [__WEBPACK_IMPORTED_MODULE_16__core_services_auth_AuthGuard_service__["a" /* AuthGuardService */]] },
    { path: '', pathMatch: 'full', redirectTo: '/calendar' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/footer/app.footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: "\n        <div class=\"footer\">\n            <div class=\"card clearfix\">\n                <span class=\"footer-text-left\">PrimeNG ULTIMA for Angular</span>\n                <span class=\"footer-text-right\"><span class=\"ui-icon ui-icon-copyright\"></span>  <span>All Rights Reserved</span></span>\n            </div>\n        </div>\n    "
    })
], AppFooterComponent);

//# sourceMappingURL=app.footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-body\">\r\n    <div class=\"card login-panel ui-fluid\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12\">\r\n                <p-autoComplete placeholder=\"Select Clinic\" [forceSelection]=\"true\" [(ngModel)]=\"selectedClinic\" field=\"name\" [suggestions]=\"filteredClinics\" (completeMethod)=\"onFilterClinic($event)\"\r\n                    [dropdown]=\"true\" [minLength]=\"1\" (onSelect)=\"onClinicSelection($value)\"></p-autoComplete>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <p-autoComplete placeholder=\"Select Branch\" [forceSelection]=\"true\" [(ngModel)]=\"selectedBranch\" field=\"name\" [suggestions]=\"filteredBranches\" (completeMethod)=\"onFilterBranch($event)\"\r\n                    [dropdown]=\"true\" [minLength]=\"1\" (onSelect)=\"onBranchSelection($value)\"></p-autoComplete>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <span class=\"md-inputfield\">\r\n                    <input id=\"username\" name=\"userName\" [(ngModel)]=\"userName\" type=\"text\" autocomplete=\"off\" class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\">\r\n                    <label for=\"username\">Username</label>\r\n                </span>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <span class=\"md-inputfield\">\r\n                    <input id=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" autocomplete=\"off\"\r\n                        class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\">\r\n                    <label for=\"password\">Password</label>\r\n                </span>\r\n            </div>\r\n            <div class=\"ui-g-12\">\r\n                <button type=\"button\" (click) = \"login()\"\r\n                    class=\"secondary ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left\">\r\n                    <span class=\"ui-button-text ui-c\">Sign In</span>\r\n                </button>\r\n                <!-- <button type=\"button\"\r\n                    class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left\">\r\n                    <span class=\"ui-button-text ui-c\">Forgot Password</span>\r\n                </button> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_services_get_clinic_service__ = __webpack_require__("../../../../../src/app/product/services/get-clinic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_services_get_branches_service__ = __webpack_require__("../../../../../src/app/product/services/get-branches.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_services_authenticate_service__ = __webpack_require__("../../../../../src/app/product/services/authenticate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_Auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth/Auth.service.ts");
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
    function LoginComponent(getClinic, getBranches, authenticateService, router, authService) {
        this.getClinic = getClinic;
        this.getBranches = getBranches;
        this.authenticateService = authenticateService;
        this.router = router;
        this.authService = authService;
        this.clinics = [];
        this.filteredClinics = [];
        this.branches = [];
        this.filteredBranches = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClinic.get()
            .subscribe(function (response) {
            if (response)
                _this.clinics = response.data;
            _this.filteredClinics = _this.clinics.slice();
        });
    };
    LoginComponent.prototype.onFilterClinic = function (event) {
        this.filteredClinics = [];
        for (var i = 0; i < this.clinics.length; i++) {
            var clinic = this.clinics[i];
            if (clinic.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredClinics.push(clinic);
            }
        }
    };
    LoginComponent.prototype.onClinicSelection = function (value) {
        this.getBranchesByClinicId(this.selectedClinic.code);
    };
    LoginComponent.prototype.getBranchesByClinicId = function (code) {
        var _this = this;
        this.getBranches.get(null, code)
            .subscribe(function (response) {
            if (response)
                _this.branches = response.data;
            _this.filteredBranches = _this.branches.slice();
        });
    };
    LoginComponent.prototype.onBranchSelection = function (value) {
    };
    LoginComponent.prototype.onFilterBranch = function (event) {
        this.filteredBranches = [];
        for (var i = 0; i < this.branches.length; i++) {
            var branch = this.branches[i];
            if (branch.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
                this.filteredBranches.push(branch);
            }
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var requestBody = { username: this.userName, password: this.password, clinic: this.selectedClinic, branchs: [this.selectedBranch] };
        this.authenticateService.create(requestBody).
            subscribe(function (response) {
            if (response && response.token)
                localStorage.setItem('token', response.token);
            _this.router.navigate(['/calendar']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/core/components/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_services_get_clinic_service__["a" /* GetClinic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_services_get_clinic_service__["a" /* GetClinic */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__product_services_get_branches_service__["a" /* GetBranches */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__product_services_get_branches_service__["a" /* GetBranches */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__product_services_authenticate_service__["a" /* AuthenticateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_services_authenticate_service__["a" /* AuthenticateService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_Auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_Auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/menu/app.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppSubMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppMenuComponent = (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            // {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            { label: 'Calendar', icon: 'calendar_today', routerLink: ['/calendar'] },
            { label: 'Patient', icon: 'person', routerLink: ['/patient'] },
            { label: 'Record Visit', icon: 'list', routerLink: ['/record-visit'] },
        ];
    };
    return AppMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppMenuComponent.prototype, "reset", void 0);
AppMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: "\n        <ul app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu clearfix\" [reset]=\"reset\" visible=\"true\"></ul>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], AppMenuComponent);

var AppSubMenuComponent = (function () {
    function AppSubMenuComponent(app) {
        this.app = app;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppSubMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["MenuItem"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["MenuItem"]) === "function" && _b || Object)
], AppSubMenuComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppSubMenuComponent.prototype, "root", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppSubMenuComponent.prototype, "visible", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AppSubMenuComponent.prototype, "reset", null);
AppSubMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        /* tslint:disable:component-selector */
        selector: '[app-submenu]',
        /* tslint:enable:component-selector */
        template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                    [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\"\n                    [@children]=\"(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?\n                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('children', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    height: '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('visibleAnimated => hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('hiddenAnimated => visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]) === "function" && _c || Object])
], AppSubMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=app.menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/profile/app.profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInlineProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppInlineProfileComponent = (function () {
    function AppInlineProfileComponent() {
    }
    AppInlineProfileComponent.prototype.onClick = function (event) {
        this.active = !this.active;
        event.preventDefault();
    };
    return AppInlineProfileComponent;
}());
AppInlineProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inline-profile',
        template: "\n        <div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\n            <a href=\"#\" (click)=\"onClick($event)\">\n                <img class=\"profile-image\" src=\"assets/layout/images/avatar.png\" />\n                <span class=\"profile-name\">Jane Williams</span>\n                <i class=\"material-icons\">keyboard_arrow_down</i>\n            </a>\n        </div>\n\n        <ul class=\"ultima-menu profile-menu\" [@menu]=\"active ? 'visible' : 'hidden'\">\n            <li role=\"menuitem\">\n                <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">person</i>\n                    <span>Profile</span>\n                </a>\n            </li>\n            <li role=\"menuitem\">\n                <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">security</i>\n                    <span>Privacy</span>\n                </a>\n            </li>\n            <li role=\"menuitem\">\n                <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">settings_application</i>\n                    <span>Settings</span>\n                </a>\n            </li>\n            <li role=\"menuitem\">\n                <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">power_settings_new</i>\n                    <span>Logout</span>\n                </a>\n            </li>\n        </ul>\n    ",
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('menu', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '*'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
            ])
        ]
    })
], AppInlineProfileComponent);

//# sourceMappingURL=app.profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/rightpanel/app.rightpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-rightpanel\" [ngClass]=\"{'layout-rightpanel-active': app.rightPanelActive}\" (click)=\"app.onRightPanelClick()\">\r\n    <div #rightPanelMenuScroller class=\"nano\">\r\n        <p-tabView [styleClass]=\"'tab-view-custom'\">\r\n            <p-tabPanel header=\"Quick Add Patient\">\r\n               <app-quick-add-patient></app-quick-add-patient>\r\n            </p-tabPanel>\r\n            <p-tabPanel header=\"Book Appointment\">\r\n                <app-schedule-appointment></app-schedule-appointment>\r\n            </p-tabPanel>\r\n        </p-tabView>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/components/rightpanel/app.rightpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRightpanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightpanelComponent = (function () {
    function AppRightpanelComponent(app) {
        this.app = app;
    }
    AppRightpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.rightPanelMenuScroller = this.rightPanelMenuScrollerViewChild.nativeElement;
        setTimeout(function () {
            jQuery(_this.rightPanelMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    AppRightpanelComponent.prototype.ngOnDestroy = function () {
        jQuery(this.rightPanelMenuScroller).nanoScroller({ flash: true });
    };
    return AppRightpanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rightPanelMenuScroller'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], AppRightpanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
AppRightpanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-rightpanel',
        template: __webpack_require__("../../../../../src/app/core/components/rightpanel/app.rightpanel.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _b || Object])
], AppRightpanelComponent);

var _a, _b;
//# sourceMappingURL=app.rightpanel.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/topbar/app.topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppTopbarComponent = (function () {
    function AppTopbarComponent(app) {
        this.app = app;
        this.isUserAuthorized = false;
    }
    return AppTopbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppTopbarComponent.prototype, "isUserAuthorized", void 0);
AppTopbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topbar',
        template: "\n        <div class=\"topbar topbar-custom clearfix\">\n            <div class=\"topbar-left topbar-custom-left\">\n                <div class=\"logo\"></div>\n            </div>\n            {{isUserAuthorised}}\n            <div *ngIf=\"isUserAuthorized\" class=\"topbar-right topbar-custom-right\">\n                <a id=\"menu-button\" href=\"#\" (click)=\"app.onMenuButtonClick($event)\">\n                    <i></i>\n                </a>\n\n                <a id=\"rightpanel-menu-button\" href=\"#\" (click)=\"app.onRightPanelButtonClick($event)\">\n                    <i class=\"material-icons\">more_vert</i>\n                </a>\n\n                <a id=\"topbar-menu-button\" href=\"#\" (click)=\"app.onTopbarMenuButtonClick($event)\">\n                    <i class=\"material-icons\">menu</i>\n                </a>\n\n                <a id=\"rightpanel-menu-button\" href=\"#\" (click)=\"app.onLogoutClick($event)\">\n                <i class=\"material-icons\">power_settings_new</i>\n                </a>\n\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], AppTopbarComponent);

var _a;
//# sourceMappingURL=app.topbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/core/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/app/core/http/core/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
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



var BASE_URL = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["InjectionToken"]('BASE_URL');
var ApiService = (function (_super) {
    __extends(ApiService, _super);
    /**
     * Creates an instance of ApiService.
     *
     * @param {Http} http
     * @param {Injector} injector
     *
     * @memberOf ApiService
     */
    function ApiService(httpClient, injector) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        _this.injector = injector;
        /**
         * Base url
         *
         * @type {string}
         * @memberOf ApiService
         */
        _this.baseUrl = '';
        _this.urlPath = _this.getUrl();
        return _this;
        // this.addInterceptor();
    }
    /**
     * Gets the url on which http request has to be made
     *
     * @returns {string}
     *
     * @memberOf ApiService
     */
    ApiService.prototype.getUrl = function () {
        this.baseUrl = this.injector.get(BASE_URL);
        return this.baseUrl + this.urlPath;
    };
    /**
     * Executes http GET method and returns an observable which returns the collection of data on subscription.
     *
     * @param {IQueryParams} [queryParams]
     * @param {BaseServiceGetOpt} [options]
     * @returns
     *
     * @memberOf ApiService
     */
    ApiService.prototype.get = function (queryParams, subpath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this._get(queryParams, subpath).subscribe(function (response) {
                //const finalResult: any = this.handleFullResponse(response, this.dataModel.ListGet || this.dataModel.Get, options);
                observer.next(response);
            }, function (err) {
                observer.error(err);
            }, function () {
                observer.complete();
            });
        });
    };
    /**
     * Executes http POST method and returns an observable which returns the response on subscription.
     *
     * @param {*} item
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf ApiService
     */
    ApiService.prototype.create = function (item, queryParams, subpath) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this._post(item, queryParams, subpath).subscribe(function (response) {
                observer.next(response);
            }, function (err) {
                observer.error(err);
            }, function () {
                observer.complete();
            });
        });
    };
    return ApiService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));

ApiService.SUCCESS_STATUS = 'success';
ApiService.FAIL_STATUS = 'fail';
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/core/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseService = (function () {
    function BaseService(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Takes a key value object and creates an HttpParams object
     *
     * @param {Object} paramObject
     * @returns {HttpParams}
     * @memberof BaseService
     */
    BaseService.prototype.buildHttpParams = function (paramObject) {
        paramObject = this.buildQueryParams(paramObject);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        for (var key in paramObject) {
            if (paramObject.hasOwnProperty(key) && paramObject[key]) {
                params = params.set(key, paramObject[key].toString());
            }
        }
        return params;
    };
    /**
     * Prepares request options and calls http request method to GET a collection of data
     *
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf BaseService
     */
    BaseService.prototype._get = function (queryParams, subpath) {
        subpath = subpath || '';
        var url = this.getUrl() + subpath;
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.get(url, options);
    };
    /**
     * Prepares request options and calls http request method to GET one entity
     * @param {number} id
     * @param {IQueryParams} [queryParams]
     * @returns
     *
     * @memberOf BaseService
     */
    BaseService.prototype._getById = function (id, queryParams) {
        var url = this.getUrl() + '/' + id;
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.get(url, options);
    };
    /**
     * Prepares request options and calls http request method to UPDATE the data for an entity
     *
     * @param {TPost} postModel
     * @param {IQueryParams} queryParams
     * @returns
     *
     * @memberOf BaseService
     */
    BaseService.prototype._put = function (postModel, queryParams) {
        var url = this.getUrl();
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.put(url, postModel, options);
    };
    /**
     * Prepares request options and calls http request method to POST the data
     *
     * @param {TPost} postModel
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberOf BaseService
     */
    BaseService.prototype._post = function (postModel, queryParams, subpath) {
        subpath = subpath || '';
        var url = this.getUrl() + subpath;
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.post(url, postModel, options);
    };
    /**
     *
     * @param {TPost} postModel
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberof BaseService
     */
    BaseService.prototype._patch = function (postModel, queryParams) {
        var url = this.getUrl();
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.patch(url, postModel, options);
    };
    /**
     * Makes a delete request.
     *
     * @param {IQueryParams} [queryParams]
     * @returns
     * @memberof BaseServiceOld
     */
    BaseService.prototype._delete = function (id, queryParams) {
        var url = this.getUrl() + '/' + id;
        var options = this.getHttpOptions(queryParams);
        return this.httpClient.delete(url, options);
    };
    /**
     * Returns query params object by appending default query params with query params passed by function
     *
     * @param {any} queryParams
     * @returns
     * @memberof BaseService
     */
    BaseService.prototype.buildQueryParams = function (queryParams) {
        return queryParams = Object.assign({}, this.getDefaultQueryParams(), queryParams);
    };
    BaseService.prototype.getDefaultQueryParams = function () {
        return {};
    };
    BaseService.prototype.getDefaultHeaders = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
    };
    BaseService.prototype.getHttpOptions = function (queryParams) {
        return {
            params: this.buildHttpParams(queryParams),
            headers: this.getDefaultHeaders()
        };
    };
    return BaseService;
}());
BaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BaseService);

var _a;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/http/request-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RequestInterceptor = (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        var accessToken = localStorage.getItem('token');
        var authToken = "Bearer " + localStorage.getItem('token');
        if (!accessToken) {
            return next.handle(req.clone({
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                    'x_branch_id': '1'
                })
            }));
        }
        else {
            var authReq = req.clone({
                headers: req.headers.set('Authorization', authToken)
            });
            var finalRequest = authReq.clone({
                headers: authReq.headers.set('x_branch_id', '1')
            });
            return next.handle(finalRequest);
        }
    };
    return RequestInterceptor;
}());
RequestInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], RequestInterceptor);

//# sourceMappingURL=request-interceptor.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth/Auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["JwtHelper"]();
        this.isAuthorized = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        if (!token)
            return false;
        // Check whether the token is expired and return true or false
        var isUserAuthorized = !this.jwtHelper.isTokenExpired(token);
        this.isAuthorized.next(isUserAuthorized);
        return isUserAuthorized;
    };
    AuthService.prototype.loginSuccesful = function () {
        this.router.navigate(['']);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=Auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth/AuthGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth/Auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        } /* else {
          this.router.navigate([''])
        } */
        // this.router.navigate([''])
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=AuthGuard.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo/service/carservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/demo/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsMedium = function () {
        return this.http.get('assets/demo/data/cars-medium.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('assets/demo/data/cars-large.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return CarService;
}());
CarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CarService);

var _a;
//# sourceMappingURL=carservice.js.map

/***/ }),

/***/ "../../../../../src/app/demo/service/countryservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return CountryService;
}());
CountryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CountryService);

var _a;
//# sourceMappingURL=countryservice.js.map

/***/ }),

/***/ "../../../../../src/app/demo/service/eventservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return EventService;
}());
EventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], EventService);

var _a;
//# sourceMappingURL=eventservice.js.map

/***/ }),

/***/ "../../../../../src/app/demo/service/nodeservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFiles = function () {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    return NodeService;
}());
NodeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], NodeService);

var _a;
//# sourceMappingURL=nodeservice.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/chartsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Linear Chart</h1>\r\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Pie Chart</h1>\r\n            <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Polar Area Chart</h1>\r\n            <p-chart type=\"polarArea\" [data]=\"polarData\"></p-chart>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Bar Chart</h1>\r\n            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Doughnut Chart</h1>\r\n            <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1 class=\"centerText\">Radar Chart</h1>\r\n            <p-chart type=\"radar\" [data]=\"radarData\"></p-chart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/chartsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsDemoComponent = (function () {
    function ChartsDemoComponent() {
    }
    ChartsDemoComponent.prototype.ngOnInit = function () {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#03A9F4'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFC107'
                }
            ]
        };
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#03A9F4',
                    borderColor: '#03A9F4',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFC107',
                    borderColor: '#FFC107',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FFC107',
                        '#03A9F4',
                        '#4CAF50'
                    ],
                    hoverBackgroundColor: [
                        '#FFE082',
                        '#81D4FA',
                        '#A5D6A7'
                    ]
                }
            ]
        };
        this.polarData = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        '#FFC107',
                        '#03A9F4',
                        '#4CAF50',
                        '#E91E63',
                        '#9C27B0'
                    ],
                    label: 'My dataset'
                }],
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ]
        };
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    };
    return ChartsDemoComponent;
}());
ChartsDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/chartsdemo.component.html")
    })
], ChartsDemoComponent);

//# sourceMappingURL=chartsdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g dashboard\">\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"card overview\">\r\n            <div class=\"overview-content clearfix\">\r\n                <span class=\"overview-title\">Sales</span>\r\n                <span class=\"overview-badge\">+%90</span>\r\n                <span class=\"overview-detail\">$22,650 / week</span>\r\n            </div>\r\n            <div class=\"overview-footer\">\r\n                <img src=\"assets/layout/images/dashboard/sales.svg\" style=\"width: 100%\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"card overview\">\r\n            <div class=\"overview-content clearfix\">\r\n                <span class=\"overview-title\">Views</span>\r\n                <span class=\"overview-badge\">+%60</span>\r\n                <span class=\"overview-detail\">6,520 / day</span>\r\n            </div>\r\n            <div class=\"overview-footer\">\r\n                <img src=\"assets/layout/images/dashboard/views.svg\" style=\"width: 100%\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"card overview\">\r\n            <div class=\"overview-content clearfix\">\r\n                <span class=\"overview-title\">Users</span>\r\n                <span class=\"overview-badge\">+%45</span>\r\n                <span class=\"overview-detail\">5,200 / day</span>\r\n            </div>\r\n            <div class=\"overview-footer\">\r\n                <img src=\"assets/layout/images/dashboard/progress.svg\" style=\"width: 100%\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <div class=\"ui-g card colorbox colorbox-1\">\r\n            <div class=\"ui-g-4\">\r\n                <i class=\"material-icons\">check_circle</i>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <span class=\"colorbox-name\">Tasks</span>\r\n                <span class=\"colorbox-count\">50</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <div class=\"ui-g card colorbox colorbox-2\">\r\n            <div class=\"ui-g-4\">\r\n                <i class=\"material-icons\">shopping_card</i>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <span class=\"colorbox-name\">Purchases</span>\r\n                <span class=\"colorbox-count\">1200</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <div class=\"ui-g card colorbox colorbox-3\">\r\n            <div class=\"ui-g-4\">\r\n                <i class=\"material-icons\">report</i>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <span class=\"colorbox-name\">Issues</span>\r\n                <span class=\"colorbox-count\">22</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\r\n        <div class=\"ui-g card colorbox colorbox-4\">\r\n            <div class=\"ui-g-4\">\r\n                <i class=\"material-icons\">email</i>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <span class=\"colorbox-name\">Messages</span>\r\n                <span class=\"colorbox-count\">10</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 task-list\">\r\n        <p-panel header=\"Tasks\">\r\n            <ul>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Sales Reports</span>\r\n                    <i class=\"material-icons\">&#xE8C9;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Pay Invoices</span>\r\n                    <i class=\"material-icons\">&#xE8A1;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Dinner with Tony</span>\r\n                    <i class=\"material-icons\">&#xE561;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Client Meeting</span>\r\n                    <i class=\"material-icons\">&#xE7FB;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">New Theme</span>\r\n                    <i class=\"material-icons\">&#xE3AE;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Flight Ticket</span>\r\n                    <i class=\"material-icons\">&#xE01B;</i>\r\n                </li>\r\n                <li>\r\n                    <p-checkbox binary=\"true\"></p-checkbox>\r\n                    <span class=\"task-name\">Generate Charts</span>\r\n                    <i class=\"material-icons\">&#xE6C4;</i>\r\n                </li>\r\n            </ul>\r\n        </p-panel>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 ui-fluid contact-form\">\r\n        <p-panel header=\"Contact Us\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12\">\r\n                    <p-dropdown [options]=\"cities\" [autoWidth]=\"false\" [(ngModel)]=\"selectedCity\"></p-dropdown>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input id=\"name\" type=\"text\" pInputText />\r\n                        <label for=\"name\">Name</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input id=\"age\" type=\"text\" pInputText />\r\n                        <label for=\"age\">Age</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input id=\"message\" type=\"text\" pInputText />\r\n                        <label for=\"message\">Message</label>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <button type=\"button\" label=\"Send\" icon=\"ui-icon-send\" pButton></button>\r\n        </p-panel>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-lg-4 contacts\">\r\n        <p-panel header=\"Contacts\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <img src=\"assets/layout/images/avatar1.png\" width=\"45\">\r\n                        <span class=\"name\">Joshua Williams</span>\r\n                        <span class=\"email\">joshua@pf-ultima.com</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <img src=\"assets/layout/images/avatar2.png\" width=\"45\">\r\n                        <span class=\"name\">Emily Clark</span>\r\n                        <span class=\"email\">emily@pf-ultima.com</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <img src=\"assets/layout/images/avatar3.png\" width=\"45\">\r\n                        <span class=\"name\">Susan Johnson</span>\r\n                        <span class=\"email\">susan@pf-ultima.com</span>\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <img src=\"assets/layout/images/avatar4.png\" width=\"45\">\r\n                        <span class=\"name\">Kelly Stark</span>\r\n                        <span class=\"email\">kelly@pf-ultima.com</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </p-panel>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"card timeline ui-fluid\">\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">just now</span>\r\n                    <i class=\"material-icons\" style=\"color:#009688\">&#xE1BC;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\" style=\"color:#009688\">Katherine May</span>\r\n                    <span class=\"event-text\">Lorem ipsun dolor amet</span>\r\n                    <div class=\"event-content\">\r\n                        <img src=\"assets/layout/images/dashboard/md.png\">\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">12h ago</span>\r\n                    <i class=\"material-icons\" style=\"color:#E91E63\">&#xE885;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\" style=\"color:#E91E63\">Brandon Santos</span>\r\n                    <span class=\"event-text\">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">15h ago</span>\r\n                    <i class=\"material-icons\" style=\"color:#9c27b0\">&#xE0C9;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\" style=\"color:#9c27b0\">Stephan Ward</span>\r\n                    <span class=\"event-text\">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">2d ago</span>\r\n                    <i class=\"material-icons\" style=\"color:#ff9800\">&#xE0C8;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\" style=\"color:#ff9800\">Jason Smith</span>\r\n                    <span class=\"event-text\">Laudantium, repudiandae, similique!</span>\r\n                    <div class=\"event-content\">\r\n                        <img src=\"assets/layout/images/dashboard/map.png\">\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">1w ago</span>\r\n                    <i class=\"material-icons\" style=\"color:#607d8b\">&#xE91B;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\">Kevin Cox</span>\r\n                    <span class=\"event-text\">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-3\">\r\n                    <span class=\"event-time\">2w ago</span>\r\n                    <i class=\"material-icons\" style=\"color:#FFC107\">&#xE23A;</i>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <span class=\"event-owner\" style=\"color:#FFC107\">Walter White</span>\r\n                    <span class=\"event-text\">I am the one who knocks!</span>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-12\">\r\n                    <button type=\"button\" label=\"Refresh\" icon=\"ui-icon-refresh\" pButton></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <div class=\"card\">\r\n            <p-dataTable [value]=\"cars\" [style]=\"{'margin-bottom':'20px'}\">\r\n                <p-header>Recent Sales</p-header>\r\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\r\n                <p-column field=\"year\" header=\"Year\"></p-column>\r\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\r\n                <p-column field=\"color\" header=\"Color\"></p-column>\r\n            </p-dataTable>\r\n            \r\n            <p-panel header=\"Sales Graph\">\r\n                <p-chart type=\"line\" [data]=\"chartData\" responsive=\"true\"></p-chart>\r\n            </p-panel>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <p-panel header=\"Calendar\" [style]=\"{'height':'100%'}\">\r\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\"></p-schedule>\r\n        </p-panel>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <p-panel header=\"Activity\" [style]=\"{'height':'100%'}\">\r\n            <div class=\"activity-header\">\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-6\">\r\n                        <span style=\"font-weight:bold\">Last Activity</span>\r\n                        <p>Updated 1 minute ago</p>\r\n                    </div>\r\n                    <div class=\"ui-g-6\" style=\"text-align:right\">\r\n                        <button type=\"button\" label=\"Update\" icon=\"ui-icon-update\" pButton></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ul class=\"activity-list\">\r\n                <li>\r\n                    <div class=\"count\">$900</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Income</div>\r\n                        <div class=\"ui-g-6\">95%</div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"count\" style=\"background-color:#ffc107\">$250</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Tax</div>\r\n                        <div class=\"ui-g-6\">24%</div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"count\" style=\"background-color:#673AB7\">$125</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Invoices</div>\r\n                        <div class=\"ui-g-6\">55%</div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"count\" style=\"background-color:#00bcd4\">$250</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Expenses</div>\r\n                        <div class=\"ui-g-6\">15%</div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"count\" style=\"background-color:#607D8B\">$350</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Bonus</div>\r\n                        <div class=\"ui-g-6\">5%</div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div class=\"count\" style=\"background-color:#FF5722\">$500</div>\r\n                    <div class=\"ui-g\">\r\n                        <div class=\"ui-g-6\">Revenue</div>\r\n                        <div class=\"ui-g-6\">25%</div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </p-panel>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/dashboarddemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDemoComponent = (function () {
    function DashboardDemoComponent(carService, eventService) {
        this.carService = carService;
        this.eventService = eventService;
    }
    DashboardDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };
    };
    return DashboardDemoComponent;
}());
DashboardDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_eventservice__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_eventservice__["a" /* EventService */]) === "function" && _b || Object])
], DashboardDemoComponent);

var _a, _b;
//# sourceMappingURL=dashboarddemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/datademo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>DataTable</h1>\r\n            <p-dataTable [value]=\"cars1\" selectionMode=\"single\" [(selection)]=\"selectedCar\" \r\n                [paginator]=\"true\" [rows]=\"10\" [responsive]=\"true\">\r\n                <p-header>List of Cars</p-header>\r\n                <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n            </p-dataTable>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <!-- Left Side -->\r\n        <div class=\"card card-w-title\">\r\n            <h1>DataGrid</h1>\r\n            <p-dataGrid [value]=\"cars2\" [paginator]=\"true\" [rows]=\"9\">\r\n                <p-header>\r\n                    Grid of Cars\r\n                </p-header>\r\n                <ng-template let-car pTemplate=\"item\">\r\n                    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-4\">\r\n                        <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\r\n                            <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\r\n                        </p-panel>\r\n                    </div>\r\n                </ng-template>\r\n            </p-dataGrid>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-8\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>PickList</h1>\r\n            <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\"\r\n                [sourceStyle]=\"{'height':'250px'}\" [targetStyle]=\"{'height':'250px'}\">\r\n                <ng-template let-car pTemplate=\"item\">\r\n                    <div class=\"ui-helper-clearfix\">\r\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\"/>\r\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-pickList>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-md-4\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>OrderList</h1>\r\n            <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\r\n                <ng-template let-car pTemplate=\"item\">\r\n                    <div class=\"ui-helper-clearfix\">\r\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\r\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-orderList>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Organization Chart</h1>\r\n            <p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode1\"></p-organizationChart>\r\n        </div>\r\n    </div>\r\n                            \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>TreeTable</h1>\r\n            <p-treeTable [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedNode\">\r\n                <p-header>Basic</p-header>\r\n                <p-column field=\"name\" header=\"Name\"></p-column>\r\n                <p-column field=\"size\" header=\"Size\"></p-column>\r\n                <p-column field=\"type\" header=\"Type\"></p-column>\r\n            </p-treeTable>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>DataList - Paginator</h1>\r\n            <p-dataList [value]=\"cars3\" [paginator]=\"true\" [rows]=\"5\" styleClass=\"cars-datalist\">\r\n                <p-header>\r\n                    List of Cars\r\n                </p-header>\r\n                <ng-template let-car pTemplate=\"item\">\r\n                    <div style=\"border-bottom: 1px solid #bdbdbd\" class=\"clearfix car-item\">\r\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" width=\"48\" style=\"display:inline-block;margin:24px;vertical-align:middle\"/>\r\n                        <div class=\"car-details\" style=\"display:inline-block;vertical-align:middle\">\r\n                            <p>{{car.brand}}</p>\r\n                            <p style=\"color:#757575\">{{car.year}} - {{car.color}}</p>\r\n                        </div>\r\n                        <button type=\"button\" pButton icon=\"ui-icon-search\" style=\"margin:24px 24px 0 0;float:right\"></button>\r\n                    </div>\r\n                </ng-template>\r\n            </p-dataList>\r\n        </div>\r\n    </div>\r\n        \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Carousel</h1>\r\n            <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\r\n                <ng-template let-car pTemplate=\"item\">\r\n                    <div class=\"ui-g\" style=\"text-align:center\">\r\n                        <div class=\"ui-g-12\" style=\"text-align:Center\">\r\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\r\n                        </div>\r\n                        <div class=\"ui-g-6\">Vin: </div>\r\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\r\n                        \r\n                        <div class=\"ui-g-6\">Year: </div>\r\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\r\n                        \r\n                        <div class=\"ui-g-6\">Brand: </div>\r\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\r\n                        \r\n                        <div class=\"ui-g-6\">Color: </div>\r\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-carousel>\r\n        </div>\r\n    </div>\r\n        \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Tree</h1>\r\n            <p-tree [value]=\"files2\"></p-tree>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Schedule</h1>\r\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\" [header]=\"scheduleHeader\"></p-schedule>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/datademo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataDemoComponent = (function () {
    function DataDemoComponent(carService, eventService, nodeService) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
    }
    DataDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files2 = files; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.scheduleHeader = { left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay' };
        this.data = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    return DataDemoComponent;
}());
DataDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/datademo.component.html"),
        styles: ["\n        .cars-datalist ul {\n            margin: 0;\n            padding: 0;\n        }\n\n        @media (max-width:640px) {\n            .cars-datalist .text-column {\n                text-align: center;\n            }\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__service_eventservice__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_eventservice__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */]) === "function" && _c || Object])
], DataDemoComponent);

var _a, _b, _c;
//# sourceMappingURL=datademo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card docs\"> \r\n            \r\n            <h1>Getting Started</h1>\r\n            <p>Ultima is a true native application template for Angular and is distributed as a CLI project. If you don't have CLI installed already run the following commands to set it up. In case\r\n            you have an application that do not use CLI, skip the <a href=\"#noncli\">Integration with an Existing Non CLI Application</a> part.</p>\r\n<pre>\r\nnpm install -g @angular/cli\r\n</pre>\r\n\r\n            <p>Once CLI is ready in your system, extract the contents of the ultima zip file distribution, cd to the directory, \r\n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\r\n<pre>\r\ncd ultima\r\nnpm install\r\nng serve\r\n</pre>\r\n\r\n            <p>That's it, you may now start with the development of your application.</p>\r\n\r\n            <h1>Important CLI Commands</h1>\r\n            <p>Following commands are derived from CLI.</p>\r\n<pre>\r\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\r\n\r\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\r\n\r\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\r\n\r\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\r\n\r\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\r\n\r\nRun 'ng help' for more options.\r\n</pre>            \r\n                                    \r\n            <h1>Structure</h1>\r\n            <p>Ultima consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout, \r\n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder. \r\n            </p>\r\n\r\n            <h1>Template</h1>\r\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, profile, menu and footer. Here is the code for\r\n                the main template. The component class app.component.ts implements the logic such as opening menus, layout modes and so on.\r\n            </p>\r\n<pre>\r\n&lt;div class=\"layout-wrapper\" [ngClass]=\"&#123;'layout-compact':layoutCompact&#125;\" (click)=\"onLayoutClick()\"&gt;\r\n\r\n    &lt;div #layoutContainer class=\"layout-container\" \r\n            [ngClass]=\"&#123;'menu-layout-static': !isOverlay(),\r\n            'menu-layout-overlay': isOverlay(),\r\n            'layout-menu-overlay-active': overlayMenuActive,\r\n            'menu-layout-horizontal': isHorizontal(),\r\n            'menu-layout-slim': isSlim(),\r\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\r\n            'layout-menu-static-active': staticMenuMobileActive&#125;\"&gt;\r\n\r\n        &lt;app-topbar&gt;&lt;/app-topbar&gt;\r\n\r\n        &lt;div class=\"layout-menu\" [ngClass]=\"&#123;'layout-menu-dark':darkMenu&#125;\" (click)=\"onMenuClick($event)\"&gt;\r\n            &lt;div #layoutMenuScroller class=\"nano\"&gt;\r\n                &lt;div class=\"nano-content menu-scroll-content\"&gt;\r\n                    &lt;inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"&gt;&lt;/inline-profile&gt;\r\n                    &lt;app-menu [reset]=\"resetMenu\"&gt;&lt;/app-menu&gt;\r\n                &lt;/div&gt;\r\n            &lt;/div&gt;\r\n        &lt;/div&gt;\r\n        \r\n        &lt;div class=\"layout-main\"&gt;\r\n            &lt;router-outlet&gt;&lt;/router-outlet&gt;\r\n            \r\n            &lt;app-footer&gt;&lt;/app-footer&gt;\r\n        &lt;/div&gt;\r\n        \r\n        &lt;app-rightpanel&gt;&lt;/app-rightpanel&gt;\r\n        \r\n        &lt;div class=\"layout-mask\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n\r\n&lt;/div&gt;\r\n</pre>\r\n\r\n            <h1>Menu</h1>\r\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems, \r\n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application. The helper\r\n            app-submenu component is also available in the same file.</p>\r\n<pre>\r\nimport &#123;Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate&#125; from '@angular/core';\r\nimport &#123;Location&#125; from '@angular/common';\r\nimport &#123;Router&#125; from '@angular/router';\r\nimport &#123;MenuItem&#125; from 'primeng/primeng';\r\nimport &#123;AppComponent&#125; from './app.component';\r\n\r\n@Component(&#123;\r\n    selector: 'app-menu',\r\n    template: `\r\n        &lt;ul app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu  clearfix\" [reset]=\"reset\"&gt;&lt;/ul&gt;\r\n    `\r\n&#125;)\r\nexport class AppMenuComponent implements OnInit &#123;\r\n\r\n    @Input() reset: boolean;\r\n\r\n    model: MenuItem[];\r\n\r\n    constructor(public app:AppComponent) &#123;&#125;\r\n    \r\n    ngOnInit() &#123;\r\n        this.model = [\r\n            &#123;label: 'Dashboard', icon: 'dashboard', routerLink: ['/']&#125;,\r\n            &#123;\r\n                label: 'Components', icon: 'list',\r\n                items: [\r\n                    &#123;label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']&#125;,\r\n                    &#123;label: 'Forms', icon: 'input', routerLink: ['/forms']&#125;,\r\n                    &#123;label: 'Data', icon: 'grid_on', routerLink: ['/data']&#125;,\r\n                    &#123;label: 'Panels', icon: 'content_paste', routerLink: ['/panels']&#125;,\r\n                    &#123;label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']&#125;,\r\n                    &#123;label: 'Menus', icon: 'menu', routerLink: ['/menus']&#125;,\r\n                    &#123;label: 'Messages', icon: 'message', routerLink: ['/messages']&#125;,\r\n                    &#123;label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']&#125;,\r\n                    &#123;label: 'File', icon: 'attach_file', routerLink: ['/file']&#125;,\r\n                    &#123;label: 'Misc', icon: 'toys', routerLink: ['/misc']&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Template Pages', icon: 'get_app',\r\n                items: [\r\n                    &#123;label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']&#125;,\r\n                    &#123;label: 'Landing Page', icon: 'flight_land', url: 'landing.html'&#125;,\r\n                    &#123;label: 'Login Page', icon: 'verified_user', url: 'login.html'&#125;,\r\n                    &#123;label: 'Error Page', icon: 'error', url: 'error.html'&#125;,\r\n                    &#123;label: '404 Page', icon: 'error_outline', url: '404.html'&#125;,\r\n                    &#123;label: 'Access Denied Page', icon: 'security', url: 'access.html'&#125;\r\n                ]\r\n            &#125;,\r\n            &#123;\r\n                label: 'Menu Hierarchy', icon: 'menu',\r\n                items: [\r\n                    &#123;\r\n                        label: 'Submenu 1', icon: 'subject',\r\n                        items: [\r\n                            &#123;\r\n                                label: 'Submenu 1.1', icon: 'subject',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 1.1.1', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 1.1.2', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 1.1.3', icon: 'subject'&#125;,\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Submenu 1.2', icon: 'subject',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 1.2.1', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 1.2.2', icon: 'subject'&#125;\r\n                                ]\r\n                            &#125;,\r\n                        ]\r\n                    &#125;,\r\n                    &#123;\r\n                        label: 'Submenu 2', icon: 'subject',\r\n                        items: [\r\n                            &#123;\r\n                                label: 'Submenu 2.1', icon: 'subject',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 2.1.1', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 2.1.2', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 2.1.3', icon: 'subject'&#125;,\r\n                                ]\r\n                            &#125;,\r\n                            &#123;\r\n                                label: 'Submenu 2.2', icon: 'subject',\r\n                                items: [\r\n                                    &#123;label: 'Submenu 2.2.1', icon: 'subject'&#125;,\r\n                                    &#123;label: 'Submenu 2.2.2', icon: 'subject'&#125;\r\n                                ]\r\n                            &#125;,\r\n                        ]\r\n                    &#125;\r\n                ]\r\n            &#125;,\r\n            &#123;label: 'Utils', icon: 'build', routerLink: ['/utils']&#125;,\r\n            &#123;label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']&#125;\r\n        ];\r\n    &#125;\r\n&#125;\r\n</pre>\r\n\r\n            \r\n            <h1>Integration with an Existing CLI Project</h1>\r\n            <p>To setup Ultima in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name \r\n                and replace the contents of app.component.ts, app.component.html with their counterparts in Ultima under <i>src/app</i> folder.</p>\r\n            \r\n            <p>Dependencies of Ultima are listed below and needs to be added to package.json</p>\r\n<pre>\r\n\"primeng\": \"^4.1.0\",             //required: PrimeNG components\r\n\"jquery\": \"^3.1.1\",              //optional: schedule and nanoscroller\r\n\"chart.js\": \"^2.4.0\",            //optional: chart \r\n\"fullcalendar\": \"^3.1.0\",        //optional: schedule\r\n\"moment\": \"^2.17.1\",             //optional: chart and schedule\r\n\"quill\": \"^1.1.8\",               //optional: editor\r\n</pre>\r\n                        \r\n            <p>Add PrimeNG CSS at styles section in angular-cli.json</p>\r\n\r\n<pre>\r\n\"styles\": [\r\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\r\n    \"../node_modules/fullcalendar/dist/fullcalendar.min.css\",   //optional: schedule\r\n    \"../node_modules/quill/dist/quill.snow.css\",                //optional: editor\r\n    \"../node_modules/nanoscroller/bin/css/nanoscroller.css\",    //optional: nanoscroller\r\n    \"styles.scss\"                                               //your styles and overrides\r\n],\r\n</pre>\r\n\r\n            <p>Add the following scripts to your angular-cli.json</p>\r\n<pre>\r\n\"scripts\": [\r\n    \"../node_modules/jquery/dist/jquery.js\",                                //optional: schedule and nanoscroller\r\n    \"../node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js\",  //optional: nanoscroller\r\n    \"assets/layout/js/ripple.js\",                                           //optional: ripple effect\r\n    \"../node_modules/moment/moment.js\",                                     //optional: schedule and charts\r\n    \"../node_modules/chart.js/dist/Chart.js\",                               //optional: charts\r\n    \"../node_modules/fullcalendar/dist/fullcalendar.js\",                    //optional: schedule\r\n    \"../node_modules/quill/dist/quill.js\"                                   //optional: editor\r\n],\r\n</pre>\r\n\r\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\r\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\r\n\r\n            <h1 id=\"noncli\">Integration with an Existing Non-CLI Project</h1>\r\n            <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>\r\n            <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>\r\n            <p>Finally copy the contents of app.component.html to your application's main component template such as <i>app/application.html</i> along\r\n            with the sub components which are app.menu.component.ts, app.profile.components.ts, app.topbar.component.ts and app.footer.component.ts.</p>\r\n                        \r\n            <h1>Size</h1>\r\n            <p>Ultima uses EM units for scalability and comes in two built-in sizes, default is closer to the material design specification with bigger fonts and paddings whereas the alternative compact size\r\n            shrinks the dimensions of the UI elements. To activate the compact mode add \"layout-compact\" style class to the .layout-wrapper element in application.html\r\n            which is the enclosing div of whole content.</p>\r\n            \r\n            <h1>Theme</h1>    \r\n            <p>Ultima provides 12 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your page that are located inside resources/theme folder.</p>\r\n            \r\n            <ul>\r\n                <li>theme-blue</li>\r\n                <li>theme-blue-grey</li>\r\n                <li>theme-brown</li>\r\n                <li>theme-cyan</li>\r\n                <li>theme-dark-blue</li>\r\n                <li>theme-dark-green</li>\r\n                <li>theme-green</li>\r\n                <li>theme-grey</li>\r\n                <li>theme-indigo</li>\r\n                <li>theme-purple-amber</li>\r\n                <li>theme-purple-cyan</li>\r\n                <li>theme-teal</li>\r\n            </ul>\r\n            \r\n            <p>A custom theme can be developed by the following steps.</p>\r\n            <ul>\r\n                <li>Choose a custom theme name such as theme-myown.</li>\r\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\r\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\r\n                <li>Build the scss to generate css</li>\r\n                <li>Include the generated theme.css to your page.</li>\r\n            </ul>\r\n            \r\n            <p>Here are the variables required to create a theme, you may need to change the last line according to the \r\n                relative path of the sass folder in your application.</p>\r\n                \r\n<pre>\r\n$primaryColor: #009688;\r\n$primaryDarkColor: #00695C;\r\n$primaryLightColor: #80CBC4;\r\n$accentColor: #CDDC39;\r\n$accentDarkColor: #9E9D24;\r\n$accentLightColor: #E6EE9C;\r\n$accentTextColor: #212121;\r\n\r\n@import '../sass/theme/_theme';\r\n</pre> \r\n                \r\n            <p> An example sass command to compile the css would be;</p>\r\n                \r\n<pre>\r\nsass src/assets/theme-myown/theme.scss src/assets/theme-myown/theme.css\r\n</pre> \r\n\r\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\r\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\r\n<pre>\r\nsass -w resources/ --sourcemap=none\r\n</pre>\r\n\r\n            <p>Same can also be applied to layout itself;</p>\r\n            <ul>\r\n                <li>Choose a layout name such as layout-myown.</li>\r\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\r\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\r\n                <li>Build the scss to generate css</li>\r\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\r\n            </ul>\r\n            \r\n            <p>Here are the variables required to create a layout, you may need to change the last line according to the \r\n                relative path of the sass folder in your application.</p>\r\n            \r\n<pre>\r\n$primaryColor: #3F51B5;\r\n$primaryDarkColor: #283593;\r\n$primaryLightColor: #9fa8da;\r\n$accentColor: #E91E63;\r\n$accentDarkColor: #ad1457;\r\n$accentLightColor: #f48fb1;\r\n$accentTextColor: #ffffff;\r\n$darkMenuBgColor: #424242;\r\n$darkMenuHoverColor: #676767;\r\n$darkMenuRouterLinkActiveColor: #9fa8da;\r\n$lightMenuRouterLinkActiveColor: #3F51B5;\r\n$horizontalLightMenuRouterLinkActiveColor: #9fa8da;\r\n\r\n@import '../../sass/layout/_layout';\r\n</pre> \r\n\r\n            <p>Check out the video tutorial that follows the steps above to create the dark-blue theme and layout. It is based on PrimeFaces version but generation part\r\n                applies to PrimeNG as well.</p>\r\n            \r\n            <div class=\"video-container\">\r\n                <iframe src=\"https://www.youtube.com/embed/XmU7QYFYuPk\" frameborder=\"0\"></iframe>\r\n            </div>\r\n            \r\n            <p>For both cases, several .scss files such as _layout.scss, _theme.scss or _variables.scss has to be present relative to your scss files, these are available inside the resources/sass folder in the distribution.</p>\r\n            <p>In case you'd like to customize the structure not just the colors, the _variables.scss is where the structural variables (e.g. font size, paddings) for the layout are defined.</p>\r\n<pre>\r\n$textColor: #212121;\r\n$textSecondaryColor: #757575;\r\n$fontSize: 16px;\r\n$lineHeight: 1.5em;\r\n$borderRadius: 3px;\r\n$headerFontSize: 1em;\r\n$headerPadding: .625em 1em;\r\n$contentFontSize: 1em;\r\n$contentPadding: .625em 1em;\r\n$inputHeaderFontSize: 1em;\r\n$inputHeaderPadding: .625em 1em;\r\n$inputFontSize: 1em;\r\n$buttonFontSize: 1em;\r\n$inputOptionFontSize: 1em;\r\n$inputOptionPadding: .625em .875em;\r\n$hoverBgColor: #e8e8e8;\r\n$hoverTextColor: #000000;\r\n$dividerColor: #bdbdbd;\r\n$dividerLightColor: #cacaca;\r\n$grayBgColor: #757575;\r\n$iconFontSize: 1.5em;\r\n$invalidInputLabelColor: #e62a10;\r\n$invalidInputBorderColor: #e62a10;\r\n\r\n/* Compact */\r\n$c-fontSize: 14px;\r\n$c-lineHeight: 18px;\r\n</pre>        \r\n\r\n            <h1>Menu Item Badges</h1>\r\n            <p>Badges are numerical indicators associated with a link.\r\n               The badge property is the value of the badge and badgeStyleClass is style class of the badge.</p>\r\n<pre>\r\nlabel: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'red-badge'\r\n</pre>  \r\n            <p>Default badge uses the accent color of ultima layout and there are three more alternative colors.</p>\r\n            <ul>\r\n                <li>red-badge</li>\r\n                <li>purple-badge</li>\r\n                <li>teal-badge</li>\r\n            </ul>\r\n                                    \r\n            <h1>Menu Modes</h1>\r\n            <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in application.html is used to define which mode to use by adding specific classes. List\r\n            below indicates the style classes for each mode. In addition menu</p>\r\n            <ul>\r\n                <li>Static: \"layout-wrapper menu-layout-static\"</li>\r\n                <li>Overlay: \"layout-wrapper menu-layout-overlay\"</li>\r\n                <li>Slim: \"layout-wrapper menu-layout-static menu-layout-slim\"</li>\r\n                <li>Horizontal: \"layout-wrapper menu-layout-static menu-layout-horizontal\"</li>\r\n            </ul>\r\n            \r\n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\r\n<pre>\r\n&lt;div class=\"layout-wrapper layout-compact\"&gt;\r\n    &lt;div class=\"layout-container menu-layout-static menu-layout-horizonal\"&gt;\r\n</pre>            \r\n\r\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\r\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>          \r\n\r\n            <h1>Dark Menu</h1>\r\n            <p>Default color scheme of menu is light and alternative dark mode can be activated by adding layout-menu-dark style class to the menu container that \r\n                is an element having .layout-menu as its class.</p>\r\n<pre>\r\n&lt;div class=\"layout-menu layout-menu-dark\"&gt;\r\n</pre>\r\n            \r\n            <h1>Profile Modes</h1>\r\n            <p>There are two possible locations for the user profile menu, first version is inline located inside the main menu and second option is the topbar menu. For inline mode,\r\n            profile content should be placed above the menu and for inline mode content goes in topbar-items list. The sample demo application provides examples for\r\n            both cases.</p>\r\n            \r\n            <h1>Utilities</h1>\r\n            <p>Ultima provides various helper features such as material iconset compatible with PrimeNG components and helper classes. Visit <a [routerLink]=\"['/utils']\">utils</a> page for details.</p>\r\n                    \r\n            <h1>Grid CSS</h1>\r\n            <p>Ultima uses PrimeNG Grid CSS (ui-g-*) throughout the samples, we strongly suggest using Grid CSS as your layout framework as it is well tested and supported by PrimeNG. Grid CSS is\r\n            available inside primeng.css.</p> \r\n            \r\n            <h1>Customizing Styles</h1>\r\n            <p>It is suggested to write your customizations in styles.scss file or another file instead of adding them to the\r\n                scss files under sass folders to avoid maintenance issues after an update.</p>\r\n            \r\n            <h1>Migration Guide</h1>\r\n            <p>For seamless updates and easier maintenance, we suggest keeping your CSS customizations in a separate sass file so that your changes\r\n            are not overriden with an update.</p>\r\n\r\n            <p>4.2.0 to 4.3.0</p>\r\n            <ul>\r\n                <li>Update theme css files.</li>\r\n            </ul>\r\n\r\n            <p>4.1.1 to 4.2.0</p>\r\n            <ul>\r\n                <li>Update app.*.ts and app.*.html files under app folder.</li>\r\n                <li>Update theme css and layout css files.</li>\r\n            </ul>\r\n\r\n            <p>4.0.1 to 4.1.0</p>\r\n            <ul>\r\n                <li>Update layout css files.</li>\r\n                <li>Update theme css files.</li>\r\n                <li>Update AppSubmenu component in app.menu.component.ts.</li>\r\n            </ul>\r\n            \r\n            <p>4.0.0 to 4.0.1</p>\r\n            <ul>\r\n                <li>Update layout css files.</li>\r\n            </ul>\r\n            \r\n            <p>2.1 to 4.0.0</p>\r\n            <ul>\r\n                <li>Includes version updates to PrimeNG 4 and Angular 4.</li>\r\n                <li>Update theme css files.</li>\r\n            </ul>\r\n            \r\n            <p>2.0.5 to 2.1.0</p>\r\n            <ul>\r\n                <li>Project is updated to CLI RC2, Angular 4-RC3 and PrimeNG 4-RC1.</li>\r\n                <li>Add <i class=\"inline-code\">import &#123;trigger,state,style,transition,animate&#125; from '@angular/animations';</i> to app.menu.components.ts and remove these imports from 'angular/core'.</li>\r\n                <li>Add <i class=\"inline-code\">import &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';</i> to app.module.ts and import the module to your application.</li>\r\n                <li>Update theme css files, there are no changes to the layout.</li>\r\n            </ul>\r\n            \r\n            <p>2.0.4 to 2.0.5</p>\r\n            <ul>\r\n                <li>No change required, missing .angular-cli.json file in 2.0.4 is added.</li>\r\n            </ul>\r\n            \r\n            <p>2.0.3 to 2.0.4</p>\r\n            <ul>\r\n                <li>No change required, only CLI version is updated to RC</li>\r\n            </ul>\r\n            \r\n            <p>2.0.2 to 2.0.3</p>\r\n            <ul>\r\n                <li>Update AppSubmenu component in app.menu.component.ts by replacing the itemClick method implementation.</li>\r\n                <li>Update layout css files, there are no changes on themes.</li>\r\n                <li>Update app.component.ts by changing onTopbarMenuButtonClick method implementation to add <i>event.preventDefault()</i> at the end.</li>\r\n                <li>Remove [ngClass]=\"&#123;'menu-button-rotate': app.rotateMenuButton&#125;\" from menu-button in app.topbar.component.ts.</li>\r\n            </ul> \r\n                       \r\n            <p>2.0.1 to 2.0.2</p>\r\n            <ul>\r\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\r\n                <li>Update layout css files, there are no changes on themes.</li>\r\n                <li>Update app.component.ts.</li>\r\n                <li>Add pInputText to search input at app.topbar.component.ts</li>\r\n            </ul> \r\n            \r\n            <p>2.0.0 to 2.0.1</p>\r\n            <ul>\r\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\r\n                <li>Update layout css and theme css files.</li>\r\n                <li>Update app.component.ts.</li>\r\n            </ul> \r\n            \r\n            <p>1.1.0 to 2.0.0</p>\r\n            <ul>\r\n                <li>Update PrimeNG to at least 2.0.</li>\r\n                <li>Replace app.component.ts and app.component.html</li>\r\n                <li>Remove layout.js</li>\r\n                <li>Update the scripts and styles section at angular-cli.json</li>\r\n                <li>Define menu using PrimeNG MenuModel</li>\r\n            </ul> \r\n\r\n            <p>1.0.3 to 1.1.0</p>\r\n            <ul>\r\n                <li>Update css files of layout and theme.</li>\r\n            </ul> \r\n            \r\n            <p>1.0.2 to 1.0.3</p>\r\n            <ul>\r\n                <li>Update css files of layout and theme.</li>\r\n            </ul> \r\n            \r\n            <p>1.0.1 to 1.0.2</p>\r\n            <ul>\r\n                <li>Update layout.js</li>\r\n            </ul> \r\n            \r\n            <p>1.0.0 to 1.0.1</p>\r\n            <ul>\r\n                <li>Update layout.js</li>\r\n            </ul>                 \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocumentationComponent = (function () {
    function DocumentationComponent() {
    }
    return DocumentationComponent;
}());
DocumentationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/documentation.component.html"),
        styles: ["\n        .docs h1 {\n            margin-top: 30px;\n        }\n\n        .docs pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .inline-code {\n            background-color: #0C2238;\n            color: #dddddd;\n            font-style: normal;\n            font-size: 13px;\n            padding: 0 .5em;\n        }\n\n        .video-container {\n            position: relative;\n            width: 100%;\n            height: 0;\n            padding-bottom: 56.25%;\n        }\n\n        .video-container iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }"
        ]
    })
], DocumentationComponent);

//# sourceMappingURL=documentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/emptydemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card\">\r\n            <h1>Empty Page</h1>\r\n            <p>Use this page to start from scratch and place your custom content.</p>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/emptydemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmptyDemoComponent = (function () {
    function EmptyDemoComponent() {
    }
    return EmptyDemoComponent;
}());
EmptyDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/emptydemo.component.html")
    })
], EmptyDemoComponent);

//# sourceMappingURL=emptydemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/filedemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"card\">\r\n                <h1>Upload</h1>\r\n                <p-growl [value]=\"msgs\"></p-growl>\r\n                    \r\n                <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \r\n                        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"> \r\n                        <ng-template pTemplate=\"content\">\r\n                            <ul *ngIf=\"uploadedFiles.length\">\r\n                                <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\r\n                            </ul>\r\n                        </ng-template>    \r\n                </p-fileUpload>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/filedemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileDemoComponent = (function () {
    function FileDemoComponent() {
        this.uploadedFiles = [];
    }
    FileDemoComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    return FileDemoComponent;
}());
FileDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/filedemo.component.html")
    })
], FileDemoComponent);

//# sourceMappingURL=filedemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/formsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Left Side -->\r\n        <div class=\"card card-w-title\">\r\n            <h1>InputText</h1>\r\n            <div class=\"ui-g form-group\">\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input type=\"text\" pInputText>\r\n                        <label>Name</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input type=\"text\" pInputText>\r\n                        <label>Email</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input type=\"text\" pInputText>\r\n                        <label>Phone</label>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" disabled=\"disabled\">\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <span class=\"md-inputfield\">\r\n                        <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\r\n                        <div class=\"ui-message ui-messages-error ui-corner-all\">\r\n                            This field is required\r\n                        </div>\r\n                    </span>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-4\">\r\n                    <input type=\"text\" pInputText>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>TextArea</h1>\r\n            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"Your Message\" autoResize=\"autoResize\"></textarea>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>AutoComplete</h1>            \r\n            <div class=\"ui-g form-group\">\r\n                <div class=\"ui-g-12\">\r\n                    <label for=\"acSimple\">Simple</label>\r\n                </div>\r\n                <div class=\"ui-g-12\" style=\"margin-bottom:10px\">\r\n                    <p-autoComplete id=\"acSimple\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [size]=\"30\"\r\n                        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-12\">\r\n                    <label for=\"acAdvanced\">Advanced</label>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <p-autoComplete id=\"acAdvanced\" [(ngModel)]=\"selectedBrands\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\r\n                        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleACDropdownClick()\" multiple=\"true\">\r\n                        <ng-template let-brand pTemplate=\"item\">\r\n                            <div class=\"ui-helper-clearfix\">\r\n                                <img src=\"assets/demo/images/car/{{brand}}.gif\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\r\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </p-autoComplete>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>MultiSelect</h1>\r\n            <p-multiSelect [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\r\n        </div>\r\n\r\n        <div class=\"card card-w-title\">\r\n            <h1>Calendar</h1>\r\n            <p-calendar [inline]=\"true\"></p-calendar> \r\n            \r\n            <div class=\"ui-g form-group-m\" style=\"margin-top:20px\">\r\n                <div class=\"ui-g-12\">\r\n                    <p-calendar id=\"popup\" placeholder=\"Popup\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <p-calendar id=\"datetime\" dateFormat=\"mm/dd/yy\" showTime=\"true\" placeholder=\"DateTime\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <p-calendar id=\"time\" showTime=\"true\" [timeOnly]=\"true\" placeholder=\"Time\"></p-calendar>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <p-calendar id=\"showIcon\" [showIcon]=\"true\" placeholder=\"Button\"></p-calendar>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Chips</h1>\r\n            <p-chips></p-chips>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Right Side -->\r\n        <div class=\"card card-w-title\">\r\n            <h1>Checkboxes</h1>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>RadioButtons</h1>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>InputSwitch</h1>\r\n            <p-inputSwitch [(ngModel)]=\"switchChecked\"></p-inputSwitch>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Dropdown</h1>\r\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Password</h1>\r\n            <input pPassword type=\"password\"/>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Spinner</h1>\r\n            <p-spinner></p-spinner>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Slider</h1>\r\n            <p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"></p-slider>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Listbox</h1>\r\n            <p-listbox [options]=\"citiesListbox\" [(ngModel)]=\"selectedCity2\" filter=\"true\"></p-listbox>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Rating</h1>\r\n            <p-rating [(ngModel)]=\"ratingValue\"></p-rating>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>ColorPicker</h1>\r\n            <p-colorPicker [(ngModel)]=\"color\" inline=\"true\"></p-colorPicker>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Input Groups</h1>\r\n            \r\n            <div class=\"ui-g form-group\">\r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\r\n                        <span class=\"md-inputfield\">\r\n                            <input type=\"text\" pInputText> \r\n                            <label>Username</label>        \r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">credit_card</i></span>  \r\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">card_travel</i></span>   \r\n                        <span class=\"md-inputfield\">\r\n                            <input type=\"text\" pInputText> \r\n                            <label>Price</label>        \r\n                        </span>\r\n                        <span class=\"ui-inputgroup-addon\">$</span>  \r\n                        <span class=\"ui-inputgroup-addon\">.00</span>      \r\n                    </div>\r\n                </div>\r\n                            \r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"md-inputfield\">\r\n                            <input type=\"text\" pInputText> \r\n                            <label>Keyword</label>        \r\n                        </span>\r\n                        <button pButton type=\"button\" icon=\"ui-icon-search\"></button>      \r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"ui-g-12 ui-md-6\">\r\n                    <div class=\"ui-inputgroup\">\r\n                        <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\r\n                        <span class=\"md-inputfield\">\r\n                            <input type=\"text\" pInputText> \r\n                            <label>Confirm</label>        \r\n                        </span>         \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n            \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Editor</h1>\r\n            <p-editor [style]=\"{'height':'320px'}\"></p-editor>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-g-nopad\">\r\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\r\n            <div class=\"card card-w-title\">\r\n                <h1>Buttons</h1>\r\n                \r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12\">ToggleButton</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">SelectButton</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">Button</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <button type=\"button\" label=\"Bookmark\" pButton></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">Left Icon</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\"></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">Right Icon</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\" iconPos=\"right\"></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">Icon Only</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <button type=\"button\" icon=\"ui-icon-add\" pButton></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12\">Link</div>\r\n                    <div class=\"ui-g-12\"><a href=\"http://www.primefaces.org\" target=\"_blank\">Homepage</a></div>\r\n                    \r\n                    <div class=\"ui-g-12\">SplitButton</div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\r\n            <div class=\"card card-w-title\">\r\n                <h1>Colored Buttons</h1>\r\n                <p>Raised and Flat buttons with various color alternatives.</p>\r\n                <div class=\"ui-g\">\r\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">\r\n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\"></button>\r\n                                                \r\n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Blue-Grey Button\" style=\"margin-bottom:10px\" class=\"blue-grey-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Cyan Button\" style=\"margin-bottom:10px\" class=\"cyan-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Amber Button\" style=\"margin-bottom:10px\" class=\"amber-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Teal Button\" style=\"margin-bottom:10px\" class=\"teal-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Deep-Orange Button\" style=\"margin-bottom:10px\" class=\"deep-orange-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Indigo Button\" style=\"margin-bottom:10px\" class=\"indigo-btn\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn\"></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">                                \r\n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\" styleClass=\"flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\" styleClass=\"flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Blue-Grey Button\" style=\"margin-bottom:10px\" class=\"blue-grey-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Cyan Button\" style=\"margin-bottom:10px\" class=\"cyan-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Amber Button\" style=\"margin-bottom:10px\" class=\"amber-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Teal Button\" style=\"margin-bottom:10px\" class=\"teal-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Deep-Orange Button\" style=\"margin-bottom:10px\" class=\"deep-orange-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Indigo Button\" style=\"margin-bottom:10px\" class=\"indigo-btn flat\"></button>\r\n                        \r\n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn flat\"></button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/formsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsDemoComponent = (function () {
    function FormsDemoComponent(countryService) {
        this.countryService = countryService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
    }
    FormsDemoComponent.prototype.ngOnInit = function () {
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.citiesListbox = this.cities.slice(1);
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
    };
    FormsDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    FormsDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    FormsDemoComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    FormsDemoComponent.prototype.handleACDropdownClick = function () {
        var _this = this;
        this.filteredBrands = [];
        // mimic remote call
        setTimeout(function () {
            _this.filteredBrands = _this.brands;
        }, 100);
    };
    return FormsDemoComponent;
}());
FormsDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/formsdemo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */]) === "function" && _a || Object])
], FormsDemoComponent);

var _a;
//# sourceMappingURL=formsdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/menusdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Breadcrumb</h1>\r\n            <p-breadcrumb [model]=\"breadcrumbItems\"></p-breadcrumb>\r\n        </div>\r\n        \r\n        <div class=\"card card-w-title\">\r\n            <h1>Steps</h1>\r\n            <p-steps [model]=\"stepsItems\"></p-steps>\r\n        </div>\r\n                \r\n        <div class=\"card card-w-title\">\r\n            <h1>MenuBar</h1>\r\n            <p-menubar [model]=\"tieredItems\"></p-menubar>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Left Colum -->\r\n        <div class=\"card card-w-title\">\r\n            <h1>Plain Menu</h1>\r\n            <p-menu #menu [model]=\"items\"></p-menu>\r\n            \r\n            <p-menu #menu popup=\"popup\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\r\n            <button type=\"button\" pButton icon=\"ui-icon-open-in-new\" label=\"Show\" (click)=\"menu.toggle($event)\" style=\"margin-top:20px;width:auto\"></button>\r\n        </div>\r\n                \r\n        <div class=\"card card-w-title\">\r\n            <h1>TieredMenu</h1>\r\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'250px','margin-bottom':'20px'}\"></p-tieredMenu>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Right Colum -->\r\n        <div class=\"card card-w-title\">\r\n            <h1 style=\"margin-top:40px\">ContextMenu</h1>\r\n            Right click!\r\n            \r\n            <p-contextMenu [global]=\"true\" [model]=\"tieredItems\" [style]=\"{'width':'12.5em'}\"></p-contextMenu>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>SlideMenu</h1>\r\n            <p-slideMenu [model]=\"items\" [style]=\"{'width':'260px'}\" [menuWidth]=\"260\"></p-slideMenu>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>PanelMenu</h1>\r\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-g-6\">\r\n        <div class=\"card\">\r\n            <h1>TabMenu</h1>\r\n            <p-tabMenu [model]=\"tabMenuItems\"></p-tabMenu>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-g-6\">\r\n        <div class=\"card\">\r\n            <h1>MegaMenu - Horizontal</h1>\r\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\r\n            \r\n            <h1>MegaMenu - Vertical</h1>\r\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/menusdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenusDemoComponent = (function () {
    function MenusDemoComponent() {
    }
    MenusDemoComponent.prototype.ngOnInit = function () {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Categories' });
        this.breadcrumbItems.push({ label: 'Sports' });
        this.breadcrumbItems.push({ label: 'Football' });
        this.breadcrumbItems.push({ label: 'Countries' });
        this.breadcrumbItems.push({ label: 'Spain' });
        this.breadcrumbItems.push({ label: 'F.C. Barcelona' });
        this.breadcrumbItems.push({ label: 'Squad' });
        this.breadcrumbItems.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
        this.tabMenuItems = [
            { label: 'Stats', icon: 'ui-icon-insert-chart' },
            { label: 'Calendar', icon: 'ui-icon-date-range' },
            { label: 'Documentation', icon: 'ui-icon-book' },
            { label: 'Support', icon: 'ui-icon-help-outline' },
            { label: 'Social', icon: 'ui-icon-public' }
        ];
        this.tieredItems = [
            {
                label: 'File',
                icon: 'ui-icon-folder',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-refresh',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'ui-icon-power-settings-new'
            }
        ];
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.megaMenuItems = [
            {
                label: 'TV', icon: 'ui-icon-tv',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'ui-icon-alarm',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'ui-icon-stars',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'ui-icon-phone-android',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ]
                ]
            }
        ];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-phone-android',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];
    };
    return MenusDemoComponent;
}());
MenusDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/menusdemo.component.html"),
        styles: ["\n        .ui-steps-item {\n            width: 25%\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], MenusDemoComponent);

//# sourceMappingURL=menusdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/messagesdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card\">\r\n            <h1>Messages and Growl</h1>\r\n            <p-messages [value]=\"msgs\"></p-messages>\r\n            <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\r\n            \r\n            <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" style=\"width:100px\"></button>\r\n            <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" style=\"width:100px\" class=\"green-btn\"></button>\r\n            <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"deep-orange-button\" style=\"width:100px\" class=\"amber-btn\"></button>\r\n            <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"red-button\" style=\"width:100px\" class=\"red-btn\"></button>\r\n            <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\" class=\"indigo-button\" style=\"width:100px\" class=\"purple-btn\"></button>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>Invalid Field</h1>\r\n            <span class=\"md-inputfield\">\r\n                <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\r\n                <div class=\"ui-message ui-messages-error ui-corner-all\">\r\n                    This field is required\r\n                </div>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/messagesdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesDemoComponent = (function () {
    function MessagesDemoComponent() {
        this.msgs = [];
    }
    MessagesDemoComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemoComponent.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemoComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemoComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemoComponent.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    return MessagesDemoComponent;
}());
MessagesDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/messagesdemo.component.html")
    })
], MessagesDemoComponent);

//# sourceMappingURL=messagesdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/miscdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <div class=\"card\">\r\n            <h1>ProgressBar</h1>\r\n            <p-progressBar [value]=\"value\"></p-progressBar>\r\n        </div>\r\n        <div class=\"card\">\r\n            <h1>Terminal</h1>\r\n            <p-terminal welcomeMessage=\"Welcome to Ultima\" prompt=\"primeng $\"></p-terminal>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <div class=\"card\">\r\n            <h1>Galleria</h1>\r\n            <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/miscdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__ = __webpack_require__("../../../../primeng/components/terminal/terminalservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MiscDemoComponent = (function () {
    function MiscDemoComponent(terminalService) {
        var _this = this;
        this.terminalService = terminalService;
        this.value = 0;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
    }
    MiscDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                clearInterval(_this.interval);
                _this.interval = null;
            }
        }, 2000);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    MiscDemoComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    return MiscDemoComponent;
}());
MiscDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/miscdemo.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"]) === "function" && _a || Object])
], MiscDemoComponent);

var _a;
//# sourceMappingURL=miscdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/overlaysdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Left Side -->\r\n        <div class=\"card\">\r\n            <h1>Overlay Panel</h1>\r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-6\">\r\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\"></button>\r\n                    <p-overlayPanel #op1>\r\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\r\n                    </p-overlayPanel>\r\n                </div>\r\n                <div class=\"ui-g-6\">\r\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\"></button>\r\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\r\n                        <p-dataTable [value]=\"cars\" [style]=\"{'width':'500px'}\">\r\n                            <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\r\n                            <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\r\n                            <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\r\n                            <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\r\n                        </p-dataTable>\r\n                    </p-overlayPanel>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>Dialog</h1>\r\n            <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" width=\"400\">\r\n                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n                   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n                   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n                   kind and benevolent to those who give respect,\r\n                   but given to ruthless violence whenever anything stands against the good of the family.</p>\r\n                <p-footer>\r\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\r\n                        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\r\n                    </div>\r\n                </p-footer>\r\n            </p-dialog>\r\n\r\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>Confirm Dialog</h1>\r\n            <p-confirmDialog header=\"Confirmation\" icon=\"fa ui-icon-warning\" width=\"425\"></p-confirmDialog>\r\n\r\n            <button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\r\n        </div>\r\n        \r\n        <div class=\"card\">\r\n            <h1>Tooltip</h1>\r\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\">\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12 ui-lg-6\">\r\n        <!-- Right Side -->\r\n        <div class=\"card\">\r\n            <h1>LightBox</h1>\r\n            <p-lightbox [images]=\"images\"></p-lightbox>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/overlaysdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlaysDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverlaysDemoComponent = (function () {
    function OverlaysDemoComponent(carService, confirmationService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
    }
    OverlaysDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars.splice(0, 5); });
        this.images = [];
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Nature 1' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Nature 2' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Nature 3' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Nature 4' });
    };
    OverlaysDemoComponent.prototype.confirm = function () {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    };
    return OverlaysDemoComponent;
}());
OverlaysDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/overlaysdemo.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _b || Object])
], OverlaysDemoComponent);

var _a, _b;
//# sourceMappingURL=overlaysdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/panelsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>AccordionPanel</h1>\r\n            <p-accordion>\r\n                <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\r\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Godfather II\">\r\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n                </p-accordionTab>\r\n                <p-accordionTab header=\"Godfather III\">\r\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n                </p-accordionTab>\r\n            </p-accordion>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Panel</h1>\r\n            <p-panel header=\"Godfather I\" [toggleable]=\"true\">\r\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n            </p-panel>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>TabView</h1>\r\n            <p-tabView>\r\n                <p-tabPanel header=\"Godfather I\" leftIcon=\"ui-icon-check\">\r\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"Godfather II\" leftIcon=\"ui-icon-edit\">\r\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n                </p-tabPanel>\r\n                <p-tabPanel header=\"Godfather III\" leftIcon=\"ui-icon-refresh\">\r\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n                </p-tabPanel>\r\n            </p-tabView>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Fieldset</h1>\r\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\r\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n                kind and benevolent to those who give respect, \r\n                but given to ruthless violence whenever anything stands against the good of the family.\r\n            </p-fieldset>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card card-w-title\">\r\n            <h1>Toolbar</h1>\r\n            <p-toolbar>\r\n                <div class=\"ui-toolbar-group-left\">\r\n                    <button pButton type=\"button\" label=\"New\" icon=\"ui-icon-plus\" class=\"green-btn\"></button>\r\n                    <button pButton type=\"button\" label=\"Update\" icon=\"ui-icon-update\" class=\"orange-btn\"></button>\r\n                        \r\n                    <i class=\"material-icons\" style=\"vertical-align:middle\">dehaze</i>\r\n                    \r\n                    <button pButton type=\"button\" icon=\"ui-icon-save\" class=\"green-btn\"></button>\r\n                    <button pButton type=\"button\" icon=\"ui-icon-delete\" class=\"orange-btn\"></button>\r\n                    <button pButton type=\"button\" icon=\"ui-icon-print\" class=\"pink-btn\"></button>\r\n                </div>\r\n                \r\n                <div class=\"ui-toolbar-group-right\">\r\n                    <p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\"></p-splitButton>\r\n                </div>\r\n           </p-toolbar>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/panelsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelsDemoComponent = (function () {
    function PanelsDemoComponent() {
    }
    PanelsDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Angular.io', icon: 'ui-icon-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'ui-icon-brush', routerLink: ['/theming'] }
        ];
    };
    return PanelsDemoComponent;
}());
PanelsDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/panelsdemo.component.html")
    })
], PanelsDemoComponent);

//# sourceMappingURL=panelsdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/sampledemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-fluid\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"card card-w-title\">\r\n                <h1>Form Elements</h1>\r\n                <div class=\"ui-g form-group\">\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"input\">Input</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <span class=\"md-inputfield\">\r\n                            <input id=\"input\" type=\"text\" pInputText/>\r\n                            <label>Username</label>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"textarea\">Textarea</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"calendar\">Calendar</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-calendar id=\"calendar\"></p-calendar>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"autocomplete\">AutoComplete</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\"\r\n                            placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"dropdown\">Dropdown</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-dropdown id=\"dropdown\" [options]=\"cities1\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"password\">Password</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <input id=\"password\" pPassword type=\"password\"/>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"mask\">Mask</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-inputMask mask=\"99/99/9999\" slotChar=\"dd/mm/yyyy\" placeholder=\"Date\"></p-inputMask>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"spinner\">Spinner</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-spinner></p-spinner>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        Checkbox\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        RadioButton\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <div class=\"ui-g\">\r\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"slider\">Slider</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-slider></p-slider>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        Button\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <button pButton type=\"button\" label=\"Edit\" icon=\"ui-icon-edit\"></button>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        SplitButton\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"multiselect\">MultiSelect</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-multiSelect id=\"multiselect\" [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        ToggleButton\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        SelectButton\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        <label for=\"listbox\">Listbox</label>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <p-listbox [options]=\"cities2\" [(ngModel)]=\"selectedCity2\"></p-listbox>\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-2\">\r\n                        Dialog\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-4\">\r\n                        <button type=\"button\" label=\"Login\" icon=\"ui-icon-open-in-new\" (click)=\"dialogVisible=true\" pButton></button>\r\n                    </div>\r\n                </div>\r\n\r\n                <p-dialog header=\"Login\" [resizable]=\"false\" responsive=\"true\" [(visible)]=\"dialogVisible\">\r\n                    <div class=\"ui-g form-group\" style=\"margin-bottom: 16px;\">\r\n                        <div class=\"ui-g-12\">\r\n                            <span class=\"md-inputfield\">\r\n                                <input type=\"text\" pInputText>\r\n                                <label>Name</label>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"ui-g-12\">\r\n                            <span class=\"md-inputfield\">\r\n                                <input type=\"password\" pInputText>\r\n                                <label>Password</label>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <p-footer>\r\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                            <button type=\"button\" label=\"Login\" icon=\"ui-icon-person\" (click)=\"dialogVisible=false\" pButton></button>\r\n                        </div>\r\n                    </p-footer>\r\n                </p-dialog>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>DataTable</h1>\r\n                <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\">\r\n                    <p-header>DataTable</p-header>\r\n                    <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\r\n                    <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\r\n                    <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\r\n                    <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12 ui-lg-6\">\r\n            <!-- Left Side -->\r\n            <div class=\"card card-w-title\">\r\n                <h1>DataGrid</h1>\r\n                <p-dataGrid [value]=\"carsLarge\" [paginator]=\"true\" [rows]=\"20\">\r\n                    <p-header>\r\n                        List of Cars\r\n                    </p-header>\r\n                    <ng-template let-car pTemplate=\"item\">\r\n                        <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\r\n                            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\r\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\r\n                                <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\r\n                            </p-panel>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-dataGrid>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Tree</h1>\r\n                <p-tree [value]=\"filesTree\"></p-tree>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Menu</h1>\r\n                <p-menu [model]=\"menuItems\"></p-menu>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>PanelMenu</h1>\r\n                <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Heading 1</h1>\r\n                \r\n                <h2>Heading 2</h2>\r\n                \r\n                <h3>Heading 3</h3>\r\n                \r\n                <h4>Heading 4</h4>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-6\">\r\n            <!-- Right Side -->\r\n            <div class=\"card card-w-title\">\r\n                <h1>PickList</h1>\r\n                <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\">\r\n                    <ng-template let-car pTemplate=\"item\">\r\n                        <span>{{car.brand}}</span>\r\n                    </ng-template>\r\n                </p-pickList>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>OrderList</h1>\r\n                <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\r\n                    <ng-template let-car pTemplate=\"item\">\r\n                        <div class=\"ui-helper-clearfix\">\r\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\r\n                            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-orderList>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Accordion Panel</h1>\r\n                <p-accordion>\r\n                    <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\r\n                        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n                    </p-accordionTab>\r\n                    <p-accordionTab header=\"Godfather II\">\r\n                        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\r\n                    </p-accordionTab>\r\n                    <p-accordionTab header=\"Godfather III\">\r\n                        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\r\n                    </p-accordionTab>\r\n                </p-accordion>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Panel</h1>\r\n                <p-panel header=\"Godfather I\" [toggleable]=\"true\">\r\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \r\n                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \r\n                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \r\n                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\r\n                </p-panel>\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>ProgressBar - Static Display</h1>\r\n                <p-progressBar [value]=\"50\"></p-progressBar>\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"ui-g-12\">\r\n            <div class=\"card card-w-title\">\r\n                <h1>Carousel</h1>\r\n                <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\r\n                    <ng-template let-car pTemplate=\"item\">\r\n                        <div class=\"ui-g\" style=\"text-align:center\">\r\n                            <div class=\"ui-g-12\" style=\"text-align:Center\">\r\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\r\n                            </div>\r\n                            <div class=\"ui-g-6\">Vin: </div>\r\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\r\n                            \r\n                            <div class=\"ui-g-6\">Year: </div>\r\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\r\n                            \r\n                            <div class=\"ui-g-6\">Brand: </div>\r\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\r\n                            \r\n                            <div class=\"ui-g-6\">Color: </div>\r\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\r\n                        </div>\r\n                    </ng-template>\r\n                </p-carousel>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/sampledemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SampleDemoComponent = (function () {
    function SampleDemoComponent(carService, countryService, nodeService) {
        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.checkboxValues = [];
        this.selectedMultiSelectCars = [];
    }
    SampleDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.carService.getCarsLarge().then(function (cars) { return _this.carsLarge = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree = files; });
        this.carService.getCarsSmall().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.cities2 = this.cities1.slice(1, 6);
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.menuItems = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    };
    SampleDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    SampleDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    return SampleDemoComponent;
}());
SampleDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/sampledemo.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_countryservice__["a" /* CountryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_countryservice__["a" /* CountryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__["a" /* NodeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__["a" /* NodeService */]) === "function" && _c || Object])
], SampleDemoComponent);

var _a, _b, _c;
//# sourceMappingURL=sampledemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/view/utilsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"card\">\r\n            <h1>Card</h1>\r\n            <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the\r\n            card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>\r\n<pre>\r\n&lt;div class=\"card\"&gt;\r\n    Content here\r\n&lt;/div&gt;\r\n\r\n&lt;div class=\"card card-w-title\"&gt;\r\n    &lt;h1&gt;Card with Title&lt;h1&gt;\r\n    Content here\r\n&lt;/div&gt;\r\n</pre>  \r\n            \r\n            <div class=\"card\">\r\n                Content\r\n            </div>\r\n            \r\n            <div class=\"card card-w-title\">\r\n                <h1>Card with Title</h1>\r\n                Content\r\n            </div>\r\n            \r\n            <h1>Input Animations</h1>\r\n            <p>Label of an input can be animated on focus by wrapping both the input and label in an element with md-inputfield style class.</p>\r\n            <br />\r\n            \r\n            <span class=\"md-inputfield\">\r\n                <input type=\"text\" pInputText>\r\n                <label>Name</label>\r\n            </span>\r\n\r\n<pre>\r\n&lt;span class=\"md-inputfield\"&gt;\r\n    &lt;input type=\"text\" pInputText&gt;\r\n    &lt;label>Name&lt;/label&gt;\r\n&lt;/span>\r\n</pre>      \r\n            \r\n            <h1>Shadows</h1>\r\n            <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>\r\n            \r\n            <div class=\"ui-g\">\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box ui-shadow-1\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box ui-shadow-2\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box ui-shadow-3\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box ui-shadow-4\"></div>\r\n                </div>\r\n                <div class=\"ui-g-12 ui-md-2\">\r\n                    <div class=\"shadow-box ui-shadow-5\"></div>\r\n                </div>\r\n            </div>\r\n<pre>\r\n&lt;div class=\"ui-g\"&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box ui-shadow-1\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box ui-shadow-2\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box ui-shadow-3\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box ui-shadow-4\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\r\n        &lt;div class=\"shadow-box ui-shadow-5\"&gt;&lt;/div&gt;\r\n    &lt;/div&gt;\r\n&lt;/div&gt;\r\n</pre>  \r\n            \r\n            <h1>Icons</h1>\r\n            <p><a href=\"https://design.google.com/icons/\">All material icons</a> have been ported \r\n                using <i>ui-icon-</i> convention. To use an icon within a component\r\n                such as button below, define it using the icon attribute prefixed by <i>ui-icon-</i>.</p>\r\n                \r\n                <div style=\"text-align:center;margin-bottom:16px;\">\r\n                    <button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"></button>\r\n                </div>\r\n                \r\n<pre>\r\n&lt;button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"&gt;&lt;/button&gt;\r\n</pre>  \r\n                \r\n                <div class=\"ui-g icon-grid\">\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-3d-rotation\"></i>3d-rotation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ac-unit\"></i>ac-unit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarm\"></i>access-alarm</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarms\"></i>access-alarms</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-time\"></i>access-time</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessibility\"></i>accessibility</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessible\"></i>accessible</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance\"></i>account-balance</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance-wallet\"></i>account-balance-wallet</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-box\"></i>account-box</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-circle\"></i>account-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add\"></i>add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-a-photo\"></i>add-a-photo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alarm\"></i>add-alarm</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alert\"></i>add-alert</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-box\"></i>add-box</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle\"></i>add-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle-outline\"></i>add-circle-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-location\"></i>add-location</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-shopping-cart\"></i>add-shopping-cart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-photos\"></i>add-to-photos</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-queue\"></i>add-to-queue</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-adjust\"></i>adjust</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat\"></i>airline-seat-flat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat-angled\"></i>airline-seat-flat-angled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-individual-suite\"></i>airline-seat-individual-suite</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-extra\"></i>airline-seat-legroom-extra</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-normal\"></i>airline-seat-legroom-normal</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-reduced\"></i>airline-seat-legroom-reduced</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-extra\"></i>airline-seat-recline-extra</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-normal\"></i>airline-seat-recline-normal</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-active\"></i>airplanemode-active</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-inactive\"></i>airplanemode-inactive</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplay\"></i>airplay</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airport-shuttle\"></i>airport-shuttle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm\"></i>alarm</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-add\"></i>alarm-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-off\"></i>alarm-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-on\"></i>alarm-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-album\"></i>album</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-inclusive\"></i>all-inclusive</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-out\"></i>all-out</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-android\"></i>android</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-announcement\"></i>announcement</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-apps\"></i>apps</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-archive\"></i>archive</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-back\"></i>arrow-back</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-downward\"></i>arrow-downward</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down\"></i>arrow-drop-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down-circle\"></i>arrow-drop-down-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-up\"></i>arrow-drop-up</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-forward\"></i>arrow-forward</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-upward\"></i>arrow-upward</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-art-track\"></i>art-track</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-aspect-ratio\"></i>aspect-ratio</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assessment\"></i>assessment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment\"></i>assignment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-ind\"></i>assignment-ind</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-late\"></i>assignment-late</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-return\"></i>assignment-return</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-returned\"></i>assignment-returned</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-turned-in\"></i>assignment-turned-in</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant\"></i>assistant</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant-photo\"></i>assistant-photo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-file\"></i>attach-file</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-money\"></i>attach-money</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attachment\"></i>attachment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-audiotrack\"></i>audiotrack</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-autorenew\"></i>autorenew</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-av-timer\"></i>av-timer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backspace\"></i>backspace</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backup\"></i>backup</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-alert\"></i>battery-alert</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-charging-full\"></i>battery-charging-full</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-full\"></i>battery-full</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-std\"></i>battery-std</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-unknown\"></i>battery-unknown</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beach-access\"></i>beach-access</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beenhere\"></i>beenhere</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-block\"></i>block</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth\"></i>bluetooth</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-audio\"></i>bluetooth-audio</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-connected\"></i>bluetooth-connected</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-disabled\"></i>bluetooth-disabled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-searching\"></i>bluetooth-searching</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-circular\"></i>blur-circular</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-linear\"></i>blur-linear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-off\"></i>blur-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-on\"></i>blur-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-book\"></i>book</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark\"></i>bookmark</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark-border\"></i>bookmark-border</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-all\"></i>border-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-bottom\"></i>border-bottom</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-clear\"></i>border-clear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-color\"></i>border-color</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-horizontal\"></i>border-horizontal</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-inner\"></i>border-inner</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-left\"></i>border-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-outer\"></i>border-outer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-right\"></i>border-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-style\"></i>border-style</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-top\"></i>border-top</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-vertical\"></i>border-vertical</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-branding-watermark\"></i>branding-watermark</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-1\"></i>brightness-1</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-2\"></i>brightness-2</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-3\"></i>brightness-3</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-4\"></i>brightness-4</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-5\"></i>brightness-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-6\"></i>brightness-6</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-7\"></i>brightness-7</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-auto\"></i>brightness-auto</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-high\"></i>brightness-high</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-low\"></i>brightness-low</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-medium\"></i>brightness-medium</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-broken-image\"></i>broken-image</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brush\"></i>brush</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bubble-chart\"></i>bubble-chart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bug-report\"></i>bug-report</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-build\"></i>build</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-burst-mode\"></i>burst-mode</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business\"></i>business</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business-center\"></i>business-center</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cached\"></i>cached</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cake\"></i>cake</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call\"></i>call</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-end\"></i>call-end</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-made\"></i>call-made</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-merge\"></i>call-merge</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed\"></i>call-missed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed-outgoing\"></i>call-missed-outgoing</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-received\"></i>call-received</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-split\"></i>call-split</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-to-action\"></i>call-to-action</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera\"></i>camera</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-alt\"></i>camera-alt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-enhance\"></i>camera-enhance</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-front\"></i>camera-front</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-rear\"></i>camera-rear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-roll\"></i>camera-roll</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cancel\"></i>cancel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-giftcard\"></i>card-giftcard</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-membership\"></i>card-membership</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-travel\"></i>card-travel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-casino\"></i>casino</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast\"></i>cast</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast-connected\"></i>cast-connected</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-strong\"></i>center-focus-strong</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-weak\"></i>center-focus-weak</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-change-history\"></i>change-history</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat\"></i>chat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble\"></i>chat-bubble</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble-outline\"></i>chat-bubble-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check\"></i>check</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box\"></i>check-box</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box-outline-blank\"></i>check-box-outline-blank</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-circle\"></i>check-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-left\"></i>chevron-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-right\"></i>chevron-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-care\"></i>child-care</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-friendly\"></i>child-friendly</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chrome-reader-mode\"></i>chrome-reader-mode</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-class\"></i>class</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear\"></i>clear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear-all\"></i>clear-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-close\"></i>close</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-closed-caption\"></i>closed-caption</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud\"></i>cloud</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-circle\"></i>cloud-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-done\"></i>cloud-done</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-download\"></i>cloud-download</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-off\"></i>cloud-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-queue\"></i>cloud-queue</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-upload\"></i>cloud-upload</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-code\"></i>code</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections\"></i>collections</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections-bookmark\"></i>collections-bookmark</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-color-lens\"></i>color-lens</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-colorize\"></i>colorize</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-comment\"></i>comment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare\"></i>compare</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare-arrows\"></i>compare-arrows</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-computer\"></i>computer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-confirmation-number\"></i>confirmation-number</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-mail\"></i>contact-mail</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-phone\"></i>contact-phone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contacts\"></i>contacts</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-copy\"></i>content-copy</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-cut\"></i>content-cut</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-paste\"></i>content-paste</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point\"></i>control-point</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point-duplicate\"></i>control-point-duplicate</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-copyright\"></i>copyright</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create\"></i>create</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create-new-folder\"></i>create-new-folder</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-credit-card\"></i>credit-card</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop\"></i>crop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-16-9\"></i>crop-16-9</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-3-2\"></i>crop-3-2</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-5-4\"></i>crop-5-4</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-7-5\"></i>crop-7-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-din\"></i>crop-din</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-free\"></i>crop-free</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-landscape\"></i>crop-landscape</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-original\"></i>crop-original</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-portrait\"></i>crop-portrait</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-rotate\"></i>crop-rotate</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-square\"></i>crop-square</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dashboard\"></i>dashboard</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-data-usage\"></i>data-usage</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-date-range\"></i>date-range</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dehaze\"></i>dehaze</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete\"></i>delete</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-forever\"></i>delete-forever</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-sweep\"></i>delete-sweep</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-description\"></i>description</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-mac\"></i>desktop-mac</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-windows\"></i>desktop-windows</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-details\"></i>details</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-board\"></i>developer-board</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-mode\"></i>developer-mode</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-device-hub\"></i>device-hub</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices\"></i>devices</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices-other\"></i>devices-other</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialer-sip\"></i>dialer-sip</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialpad\"></i>dialpad</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions\"></i>directions</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bike\"></i>directions-bike</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-boat\"></i>directions-boat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bus\"></i>directions-bus</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-car\"></i>directions-car</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-railway\"></i>directions-railway</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-run\"></i>directions-run</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-subway\"></i>directions-subway</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-transit\"></i>directions-transit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-walk\"></i>directions-walk</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-disc-full\"></i>disc-full</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dns\"></i>dns</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb\"></i>do-not-disturb</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-alt\"></i>do-not-disturb-alt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-off\"></i>do-not-disturb-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-on\"></i>do-not-disturb-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dock\"></i>dock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-domain\"></i>domain</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done\"></i>done</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done-all\"></i>done-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-large\"></i>donut-large</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-small\"></i>donut-small</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drafts\"></i>drafts</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drag-handle\"></i>drag-handle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drive-eta\"></i>drive-eta</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dvr\"></i>dvr</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit\"></i>edit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit-location\"></i>edit-location</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-eject\"></i>eject</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-email\"></i>email</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-enhanced-encryption\"></i>enhanced-encryption</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-equalizer\"></i>equalizer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error\"></i>error</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error-outline\"></i>error-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-euro-symbol\"></i>euro-symbol</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ev-station\"></i>ev-station</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event\"></i>event</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-available\"></i>event-available</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-busy\"></i>event-busy</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-note\"></i>event-note</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-seat\"></i>event-seat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exit-to-app\"></i>exit-to-app</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-less\"></i>expand-less</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-more\"></i>expand-more</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explicit\"></i>explicit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explore\"></i>explore</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure\"></i>exposure</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-1\"></i>exposure-neg-1</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-2\"></i>exposure-neg-2</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-1\"></i>exposure-plus-1</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-2\"></i>exposure-plus-2</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-zero\"></i>exposure-zero</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-extension\"></i>extension</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-face\"></i>face</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-forward\"></i>fast-forward</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-rewind\"></i>fast-rewind</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite\"></i>favorite</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite-border\"></i>favorite-border</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-play-list\"></i>featured-play-list</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-video\"></i>featured-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-feedback\"></i>feedback</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-dvr\"></i>fiber-dvr</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-manual-record\"></i>fiber-manual-record</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-new\"></i>fiber-new</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-pin\"></i>fiber-pin</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-smart-record\"></i>fiber-smart-record</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-download\"></i>file-download</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-upload\"></i>file-upload</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter\"></i>filter</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-1\"></i>filter-1</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-2\"></i>filter-2</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-3\"></i>filter-3</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-4\"></i>filter-4</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-5\"></i>filter-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-6\"></i>filter-6</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-7\"></i>filter-7</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-8\"></i>filter-8</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9\"></i>filter-9</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9-plus\"></i>filter-9-plus</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-b-and-w\"></i>filter-b-and-w</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-center-focus\"></i>filter-center-focus</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-drama\"></i>filter-drama</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-frames\"></i>filter-frames</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-hdr\"></i>filter-hdr</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-list\"></i>filter-list</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-none\"></i>filter-none</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-tilt-shift\"></i>filter-tilt-shift</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-vintage\"></i>filter-vintage</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-in-page\"></i>find-in-page</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-replace\"></i>find-replace</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fingerprint\"></i>fingerprint</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-first-page\"></i>first-page</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fitness-center\"></i>fitness-center</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flag\"></i>flag</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flare\"></i>flare</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-auto\"></i>flash-auto</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-off\"></i>flash-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-on\"></i>flash-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight\"></i>flight</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-land\"></i>flight-land</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-takeoff\"></i>flight-takeoff</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip\"></i>flip</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-back\"></i>flip-to-back</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-front\"></i>flip-to-front</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder\"></i>folder</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-open\"></i>folder-open</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-shared\"></i>folder-shared</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-special\"></i>folder-special</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-font-download\"></i>font-download</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-center\"></i>format-align-center</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-justify\"></i>format-align-justify</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-left\"></i>format-align-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-right\"></i>format-align-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-bold\"></i>format-bold</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-clear\"></i>format-clear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-fill\"></i>format-color-fill</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-reset\"></i>format-color-reset</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-text\"></i>format-color-text</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-decrease\"></i>format-indent-decrease</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-increase\"></i>format-indent-increase</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-italic\"></i>format-italic</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-line-spacing\"></i>format-line-spacing</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-bulleted\"></i>format-list-bulleted</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-numbered\"></i>format-list-numbered</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-paint\"></i>format-paint</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-quote\"></i>format-quote</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-shapes\"></i>format-shapes</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-size\"></i>format-size</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-strikethrough\"></i>format-strikethrough</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-l-to-r\"></i>format-textdirection-l-to-r</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-r-to-l\"></i>format-textdirection-r-to-l</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-underlined\"></i>format-underlined</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forum\"></i>forum</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward\"></i>forward</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-10\"></i>forward-10</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-30\"></i>forward-30</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-5\"></i>forward-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-free-breakfast\"></i>free-breakfast</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen\"></i>fullscreen</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen-exit\"></i>fullscreen-exit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-functions\"></i>functions</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-g-translate\"></i>g-translate</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gamepad\"></i>gamepad</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-games\"></i>games</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gavel\"></i>gavel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gesture\"></i>gesture</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-get-app\"></i>get-app</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gif\"></i>gif</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-golf-course\"></i>golf-course</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-fixed\"></i>gps-fixed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-not-fixed\"></i>gps-not-fixed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-off\"></i>gps-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grade\"></i>grade</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gradient\"></i>gradient</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grain\"></i>grain</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-graphic-eq\"></i>graphic-eq</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-off\"></i>grid-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-on\"></i>grid-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group\"></i>group</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-add\"></i>group-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-work\"></i>group-work</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hd\"></i>hd</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-off\"></i>hdr-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-on\"></i>hdr-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-strong\"></i>hdr-strong</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-weak\"></i>hdr-weak</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset\"></i>headset</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset-mic\"></i>headset-mic</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-healing\"></i>healing</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hearing\"></i>hearing</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help\"></i>help</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help-outline\"></i>help-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-high-quality\"></i>high-quality</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight\"></i>highlight</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight-off\"></i>highlight-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-history\"></i>history</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-home\"></i>home</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hot-tub\"></i>hot-tub</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hotel\"></i>hotel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-empty\"></i>hourglass-empty</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-full\"></i>hourglass-full</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-http\"></i>http</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-https\"></i>https</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image\"></i>image</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image-aspect-ratio\"></i>image-aspect-ratio</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-contacts\"></i>import-contacts</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-export\"></i>import-export</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-important-devices\"></i>important-devices</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-inbox\"></i>inbox</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-indeterminate-check-box\"></i>indeterminate-check-box</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info\"></i>info</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info-outline\"></i>info-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-input\"></i>input</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-chart\"></i>insert-chart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-comment\"></i>insert-comment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-drive-file\"></i>insert-drive-file</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-emoticon\"></i>insert-emoticon</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-invitation\"></i>insert-invitation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-link\"></i>insert-link</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-photo\"></i>insert-photo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors\"></i>invert-colors</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors-off\"></i>invert-colors-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-iso\"></i>iso</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard\"></i>keyboard</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-down\"></i>keyboard-arrow-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-left\"></i>keyboard-arrow-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-right\"></i>keyboard-arrow-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-up\"></i>keyboard-arrow-up</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-backspace\"></i>keyboard-backspace</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-capslock\"></i>keyboard-capslock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-hide\"></i>keyboard-hide</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-return\"></i>keyboard-return</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-tab\"></i>keyboard-tab</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-voice\"></i>keyboard-voice</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-kitchen\"></i>kitchen</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label\"></i>label</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label-outline\"></i>label-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-landscape\"></i>landscape</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-language\"></i>language</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop\"></i>laptop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-chromebook\"></i>laptop-chromebook</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-mac\"></i>laptop-mac</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-windows\"></i>laptop-windows</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-last-page\"></i>last-page</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-launch\"></i>launch</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers\"></i>layers</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers-clear\"></i>layers-clear</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-add\"></i>leak-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-remove\"></i>leak-remove</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lens\"></i>lens</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-add\"></i>library-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-books\"></i>library-books</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-music\"></i>library-music</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lightbulb-outline\"></i>lightbulb-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-style\"></i>line-style</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-weight\"></i>line-weight</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linear-scale\"></i>linear-scale</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-link\"></i>link</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linked-camera\"></i>linked-camera</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-list\"></i>list</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-help\"></i>live-help</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-tv\"></i>live-tv</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-activity\"></i>local-activity</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-airport\"></i>local-airport</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-atm\"></i>local-atm</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-bar\"></i>local-bar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-cafe\"></i>local-cafe</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-car-wash\"></i>local-car-wash</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-convenience-store\"></i>local-convenience-store</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-dining\"></i>local-dining</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-drink\"></i>local-drink</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-florist\"></i>local-florist</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-gas-station\"></i>local-gas-station</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-grocery-store\"></i>local-grocery-store</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hospital\"></i>local-hospital</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hotel\"></i>local-hotel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-laundry-service\"></i>local-laundry-service</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-library\"></i>local-library</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-mall\"></i>local-mall</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-movies\"></i>local-movies</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-offer\"></i>local-offer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-parking\"></i>local-parking</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pharmacy\"></i>local-pharmacy</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-phone\"></i>local-phone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pizza\"></i>local-pizza</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-play\"></i>local-play</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-post-office\"></i>local-post-office</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-printshop\"></i>local-printshop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-see\"></i>local-see</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-shipping\"></i>local-shipping</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-taxi\"></i>local-taxi</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-city\"></i>location-city</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-disabled\"></i>location-disabled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-off\"></i>location-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-on\"></i>location-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-searching\"></i>location-searching</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock\"></i>lock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-open\"></i>lock-open</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-outline\"></i>lock-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks\"></i>looks</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-3\"></i>looks-3</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-4\"></i>looks-4</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-5\"></i>looks-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-6\"></i>looks-6</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-one\"></i>looks-one</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-two\"></i>looks-two</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loop\"></i>loop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loupe\"></i>loupe</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-low-priority\"></i>low-priority</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loyalty\"></i>loyalty</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail\"></i>mail</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail-outline\"></i>mail-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-map\"></i>map</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread\"></i>markunread</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread-mailbox\"></i>markunread-mailbox</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-memory\"></i>memory</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-menu\"></i>menu</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-merge-type\"></i>merge-type</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-message\"></i>message</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic\"></i>mic</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-none\"></i>mic-none</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-off\"></i>mic-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mms\"></i>mms</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-comment\"></i>mode-comment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-edit\"></i>mode-edit</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monetization-on\"></i>monetization-on</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-money-off\"></i>money-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monochrome-photos\"></i>monochrome-photos</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood\"></i>mood</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood-bad\"></i>mood-bad</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more\"></i>more</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-horiz\"></i>more-horiz</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-vert\"></i>more-vert</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-motorcycle\"></i>motorcycle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mouse\"></i>mouse</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-move-to-inbox\"></i>move-to-inbox</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie\"></i>movie</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-creation\"></i>movie-creation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-filter\"></i>movie-filter</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-multiline-chart\"></i>multiline-chart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-note\"></i>music-note</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-video\"></i>music-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-my-location\"></i>my-location</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature\"></i>nature</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature-people\"></i>nature-people</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-before\"></i>navigate-before</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-next\"></i>navigate-next</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigation\"></i>navigation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-near-me\"></i>near-me</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-cell\"></i>network-cell</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-check\"></i>network-check</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-locked\"></i>network-locked</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-wifi\"></i>network-wifi</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-new-releases\"></i>new-releases</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-next-week\"></i>next-week</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nfc\"></i>nfc</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-encryption\"></i>no-encryption</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-sim\"></i>no-sim</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-not-interested\"></i>not-interested</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note\"></i>note</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note-add\"></i>note-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications\"></i>notifications</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-active\"></i>notifications-active</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-none\"></i>notifications-none</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-off\"></i>notifications-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-paused\"></i>notifications-paused</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-offline-pin\"></i>offline-pin</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ondemand-video\"></i>ondemand-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-opacity\"></i>opacity</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-browser\"></i>open-in-browser</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-new\"></i>open-in-new</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-with\"></i>open-with</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pages\"></i>pages</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pageview\"></i>pageview</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-palette\"></i>palette</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pan-tool\"></i>pan-tool</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama\"></i>panorama</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-fish-eye\"></i>panorama-fish-eye</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-horizontal\"></i>panorama-horizontal</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-vertical\"></i>panorama-vertical</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-wide-angle\"></i>panorama-wide-angle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-party-mode\"></i>party-mode</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause\"></i>pause</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-filled\"></i>pause-circle-filled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-outline\"></i>pause-circle-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-payment\"></i>payment</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people\"></i>people</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people-outline\"></i>people-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-camera-mic\"></i>perm-camera-mic</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-contact-calendar\"></i>perm-contact-calendar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-data-setting\"></i>perm-data-setting</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-device-information\"></i>perm-device-information</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-identity\"></i>perm-identity</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-media\"></i>perm-media</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-phone-msg\"></i>perm-phone-msg</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-scan-wifi\"></i>perm-scan-wifi</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person\"></i>person</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-add\"></i>person-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-outline\"></i>person-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin\"></i>person-pin</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin-circle\"></i>person-pin-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-personal-video\"></i>personal-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pets\"></i>pets</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone\"></i>phone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-android\"></i>phone-android</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-bluetooth-speaker\"></i>phone-bluetooth-speaker</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-forwarded\"></i>phone-forwarded</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-in-talk\"></i>phone-in-talk</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-iphone\"></i>phone-iphone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-locked\"></i>phone-locked</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-missed\"></i>phone-missed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-paused\"></i>phone-paused</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink\"></i>phonelink</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-erase\"></i>phonelink-erase</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-lock\"></i>phonelink-lock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-off\"></i>phonelink-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-ring\"></i>phonelink-ring</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-setup\"></i>phonelink-setup</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo\"></i>photo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-album\"></i>photo-album</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-camera\"></i>photo-camera</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-filter\"></i>photo-filter</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-library\"></i>photo-library</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-actual\"></i>photo-size-select-actual</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-large\"></i>photo-size-select-large</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-small\"></i>photo-size-select-small</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-as-pdf\"></i>picture-as-pdf</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture\"></i>picture-in-picture</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture-alt\"></i>picture-in-picture-alt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart\"></i>pie-chart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart-outlined\"></i>pie-chart-outlined</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pin-drop\"></i>pin-drop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-place\"></i>place</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-arrow\"></i>play-arrow</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-filled\"></i>play-circle-filled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-outline\"></i>play-circle-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-for-work\"></i>play-for-work</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add\"></i>playlist-add</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add-check\"></i>playlist-add-check</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-play\"></i>playlist-play</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-plus-one\"></i>plus-one</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-poll\"></i>poll</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-polymer\"></i>polymer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pool\"></i>pool</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portable-wifi-off\"></i>portable-wifi-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portrait\"></i>portrait</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power\"></i>power</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-input\"></i>power-input</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-settings-new\"></i>power-settings-new</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pregnant-woman\"></i>pregnant-woman</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-present-to-all\"></i>present-to-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-print\"></i>print</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-priority-high\"></i>priority-high</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-public\"></i>public</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-publish\"></i>publish</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-query-builder\"></i>query-builder</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-question-answer\"></i>question-answer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue\"></i>queue</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-music\"></i>queue-music</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-play-next\"></i>queue-play-next</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio\"></i>radio</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-checked\"></i>radio-button-checked</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-unchecked\"></i>radio-button-unchecked</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rate-review\"></i>rate-review</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-receipt\"></i>receipt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-recent-actors\"></i>recent-actors</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-record-voice-over\"></i>record-voice-over</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redeem\"></i>redeem</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redo\"></i>redo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-refresh\"></i>refresh</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove\"></i>remove</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle\"></i>remove-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle-outline\"></i>remove-circle-outline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-from-queue\"></i>remove-from-queue</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-red-eye\"></i>remove-red-eye</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-shopping-cart\"></i>remove-shopping-cart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reorder\"></i>reorder</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat\"></i>repeat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat-one\"></i>repeat-one</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay\"></i>replay</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-10\"></i>replay-10</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-30\"></i>replay-30</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-5\"></i>replay-5</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply\"></i>reply</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply-all\"></i>reply-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report\"></i>report</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report-problem\"></i>report-problem</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant\"></i>restaurant</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant-menu\"></i>restaurant-menu</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore\"></i>restore</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore-page\"></i>restore-page</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ring-volume\"></i>ring-volume</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room\"></i>room</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room-service\"></i>room-service</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-90-degrees-ccw\"></i>rotate-90-degrees-ccw</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-left\"></i>rotate-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-right\"></i>rotate-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rounded-corner\"></i>rounded-corner</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-router\"></i>router</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rowing\"></i>rowing</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rss-feed\"></i>rss-feed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rv-hookup\"></i>rv-hookup</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-satellite\"></i>satellite</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-save\"></i>save</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-scanner\"></i>scanner</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-schedule\"></i>schedule</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-school\"></i>school</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-landscape\"></i>screen-lock-landscape</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-portrait\"></i>screen-lock-portrait</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-rotation\"></i>screen-lock-rotation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-rotation\"></i>screen-rotation</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-share\"></i>screen-share</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-card\"></i>sd-card</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-storage\"></i>sd-storage</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-search\"></i>search</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-security\"></i>security</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-select-all\"></i>select-all</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-send\"></i>send</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-dissatisfied\"></i>sentiment-dissatisfied</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-neutral\"></i>sentiment-neutral</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-satisfied\"></i>sentiment-satisfied</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-dissatisfied\"></i>sentiment-very-dissatisfied</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-satisfied\"></i>sentiment-very-satisfied</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings\"></i>settings</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-applications\"></i>settings-applications</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-backup-restore\"></i>settings-backup-restore</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-bluetooth\"></i>settings-bluetooth</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-brightness\"></i>settings-brightness</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-cell\"></i>settings-cell</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-ethernet\"></i>settings-ethernet</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-antenna\"></i>settings-input-antenna</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-component\"></i>settings-input-component</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-composite\"></i>settings-input-composite</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-hdmi\"></i>settings-input-hdmi</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-svideo\"></i>settings-input-svideo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-overscan\"></i>settings-overscan</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-phone\"></i>settings-phone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-power\"></i>settings-power</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-remote\"></i>settings-remote</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-system-daydream\"></i>settings-system-daydream</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-voice\"></i>settings-voice</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-share\"></i>share</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop\"></i>shop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop-two\"></i>shop-two</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-basket\"></i>shopping-basket</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-cart\"></i>shopping-cart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-short-text\"></i>short-text</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-show-chart\"></i>show-chart</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shuffle\"></i>shuffle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-4-bar\"></i>signal-cellular-4-bar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-connected-no-internet-4-bar\"></i>signal-cellular-connected-no-internet-4-bar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-no-sim\"></i>signal-cellular-no-sim</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-null\"></i>signal-cellular-null</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-off\"></i>signal-cellular-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar\"></i>signal-wifi-4-bar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar-lock\"></i>signal-wifi-4-bar-lock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-off\"></i>signal-wifi-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card\"></i>sim-card</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card-alert\"></i>sim-card-alert</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-next\"></i>skip-next</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-previous\"></i>skip-previous</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slideshow\"></i>slideshow</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slow-motion-video\"></i>slow-motion-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smartphone\"></i>smartphone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoke-free\"></i>smoke-free</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoking-rooms\"></i>smoking-rooms</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms\"></i>sms</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms-failed\"></i>sms-failed</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-snooze\"></i>snooze</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort\"></i>sort</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort-by-alpha\"></i>sort-by-alpha</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spa\"></i>spa</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-space-bar\"></i>space-bar</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker\"></i>speaker</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-group\"></i>speaker-group</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes\"></i>speaker-notes</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes-off\"></i>speaker-notes-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-phone\"></i>speaker-phone</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spellcheck\"></i>spellcheck</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star\"></i>star</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-border\"></i>star-border</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-half\"></i>star-half</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stars\"></i>stars</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-landscape\"></i>stay-current-landscape</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-portrait\"></i>stay-current-portrait</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-landscape\"></i>stay-primary-landscape</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-portrait\"></i>stay-primary-portrait</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop\"></i>stop</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop-screen-share\"></i>stop-screen-share</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-storage\"></i>storage</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store\"></i>store</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store-mall-directory\"></i>store-mall-directory</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-straighten\"></i>straighten</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-streetview\"></i>streetview</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-strikethrough-s\"></i>strikethrough-s</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-style\"></i>style</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-left\"></i>subdirectory-arrow-left</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-right\"></i>subdirectory-arrow-right</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subject\"></i>subject</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subscriptions\"></i>subscriptions</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subtitles\"></i>subtitles</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subway\"></i>subway</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-supervisor-account\"></i>supervisor-account</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-surround-sound\"></i>surround-sound</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-calls\"></i>swap-calls</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-horiz\"></i>swap-horiz</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vert\"></i>swap-vert</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vertical-circle\"></i>swap-vertical-circle</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-camera\"></i>switch-camera</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-video\"></i>switch-video</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync\"></i>sync</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-disabled\"></i>sync-disabled</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-problem\"></i>sync-problem</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update\"></i>system-update</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update-alt\"></i>system-update-alt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab\"></i>tab</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab-unselected\"></i>tab-unselected</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet\"></i>tablet</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-android\"></i>tablet-android</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-mac\"></i>tablet-mac</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tag-faces\"></i>tag-faces</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tap-and-play\"></i>tap-and-play</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-terrain\"></i>terrain</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-fields\"></i>text-fields</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-format\"></i>text-format</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-textsms\"></i>textsms</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-texture\"></i>texture</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-theaters\"></i>theaters</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-down\"></i>thumb-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-up\"></i>thumb-up</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumbs-up-down\"></i>thumbs-up-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-time-to-leave\"></i>time-to-leave</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timelapse\"></i>timelapse</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timeline\"></i>timeline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer\"></i>timer</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-10\"></i>timer-10</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-3\"></i>timer-3</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-off\"></i>timer-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-title\"></i>title</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toc\"></i>toc</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-today\"></i>today</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toll\"></i>toll</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tonality\"></i>tonality</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-touch-app\"></i>touch-app</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toys\"></i>toys</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-track-changes\"></i>track-changes</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-traffic\"></i>traffic</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-train\"></i>train</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tram\"></i>tram</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transfer-within-a-station\"></i>transfer-within-a-station</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transform\"></i>transform</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-translate\"></i>translate</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-down\"></i>trending-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-flat\"></i>trending-flat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-up\"></i>trending-up</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tune\"></i>tune</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in\"></i>turned-in</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in-not\"></i>turned-in-not</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tv\"></i>tv</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unarchive\"></i>unarchive</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-undo\"></i>undo</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-less\"></i>unfold-less</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-more\"></i>unfold-more</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-update\"></i>update</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-usb\"></i>usb</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-verified-user\"></i>verified-user</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-bottom\"></i>vertical-align-bottom</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-center\"></i>vertical-align-center</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-top\"></i>vertical-align-top</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vibration\"></i>vibration</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-call\"></i>video-call</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-label\"></i>video-label</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-library\"></i>video-library</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam\"></i>videocam</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam-off\"></i>videocam-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videogame-asset\"></i>videogame-asset</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-agenda\"></i>view-agenda</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-array\"></i>view-array</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-carousel\"></i>view-carousel</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-column\"></i>view-column</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-comfy\"></i>view-comfy</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-compact\"></i>view-compact</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-day\"></i>view-day</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-headline\"></i>view-headline</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-list\"></i>view-list</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-module\"></i>view-module</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-quilt\"></i>view-quilt</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-stream\"></i>view-stream</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-week\"></i>view-week</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vignette\"></i>vignette</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility\"></i>visibility</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility-off\"></i>visibility-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voice-chat\"></i>voice-chat</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voicemail\"></i>voicemail</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-down\"></i>volume-down</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-mute\"></i>volume-mute</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-off\"></i>volume-off</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-up\"></i>volume-up</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-key\"></i>vpn-key</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-lock\"></i>vpn-lock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wallpaper\"></i>wallpaper</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-warning\"></i>warning</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch\"></i>watch</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch-later\"></i>watch-later</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-auto\"></i>wb-auto</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-cloudy\"></i>wb-cloudy</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-incandescent\"></i>wb-incandescent</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-iridescent\"></i>wb-iridescent</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-sunny\"></i>wb-sunny</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wc\"></i>wc</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web\"></i>web</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web-asset\"></i>web-asset</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-weekend\"></i>weekend</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-whatshot\"></i>whatshot</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-widgets\"></i>widgets</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi\"></i>wifi</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-lock\"></i>wifi-lock</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-tethering\"></i>wifi-tethering</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-work\"></i>work</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wrap-text\"></i>wrap-text</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-youtube-searched-for\"></i>youtube-searched-for</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-in\"></i>zoom-in</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out\"></i>zoom-out</div>\r\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out-map\"></i>zoom-out-map</div>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/utilsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtilsDemoComponent = (function () {
    function UtilsDemoComponent() {
    }
    return UtilsDemoComponent;
}());
UtilsDemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/demo/view/utilsdemo.component.html"),
        styles: ["\n        .icon-grid div.ui-g-12 {\n            color: #757575;\n            text-align: center;\n            padding: 16px;\n            font-size: 12px;\n        }\n\n        .icon-grid i {\n            display: block;\n            margin: 0 auto;\n            font-size: 24px;\n        }\n\n        pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .shadow-box {\n            background-color: #607D8B;\n            width: 100px;\n            height: 100px;\n        }\n    "],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], UtilsDemoComponent);

//# sourceMappingURL=utilsdemo.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-schedule [events]=\"events\" [header]=\"headerConfig\" defaultDate=\"{{defaultDate}}\"\r\n    [eventLimit]=\"4\" [editable]=\"true\"\r\n    (onEventClick)=\"onClick($event)\" (onEventMouseover)=\"handleMouseOver($event,op)\">\r\n</p-schedule>\r\n\r\n<p-overlayPanel appendTo=\"body\" #op>\r\n    <label>{{popOverTitle}}</label>\r\n</p-overlayPanel>"

/***/ }),

/***/ "../../../../../src/app/product/components/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__ = __webpack_require__("../../../../../src/app/product/services/appointment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarComponent = (function () {
    function CalendarComponent(appointmentService) {
        this.appointmentService = appointmentService;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.defaultDate = this.formatDate(new Date());
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'agendaDay,agendaWeek,month'
        };
        this.getAppointments();
    };
    CalendarComponent.prototype.formatDate = function (date) {
        var d = date, month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    };
    CalendarComponent.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentService.get({}, '/fetchAll').subscribe(function (result) {
            _this.events = result;
        });
    };
    CalendarComponent.prototype.handleMouseOver = function (e, op) {
        this.popOverTitle = e.calEvent.title;
        op.show(e, e.jsEvent.target);
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/product/components/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/calendar/calendar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_appointment_service__["a" /* AppointmentService */]) === "function" && _a || Object])
], CalendarComponent);

var _a;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.html":
/***/ (function(module, exports) {

module.exports = "<form #quickAddPatient=\"ngForm\">\r\n    <div class=\"ui-g input-field-top-padding\">\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12  ui-fluid inputfield\">\r\n        <span class=\"md-inputfield\">\r\n           <input id=\"pFName\" type=\"text\" pInputText name=\"pfirstname\"  #firstname=\"ngModel\" tooltipEvent=\"focus\" pTooltip=\"{{firstname.hasError('required')? 'Required field':''}}\" [(ngModel)]=\"patient.firstname\" required/>\r\n           <label for=\"pFName\">First Name*</label>\r\n       </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <span class=\"md-inputfield\">\r\n           <input id=\"pLName\" type=\"text\" pInputText name=\"plastname\" #lastname=\"ngModel\" tooltipEvent=\"focus\" pTooltip=\"{{lastname.hasError('required')? 'Required field':''}}\" [(ngModel)]=\"patient.lastname\" required/>\r\n           <label for=\"pLName\">Last Name*</label>\r\n       </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <p-calendar #dob id=\"stDate\" name=\"dob\" [appendTo]=\"'body'\" [(ngModel)]=\"patient.dob\" dateFormat=\"dd.mm.yy\" readonlyInput=\"true\" [placeholder]=\"'Birth Date'\"\r\n          monthNavigator=\"true\" yearNavigator=\"true\" [yearRange]=\"'1950:2050'\"></p-calendar>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <span class=\"md-inputfield\">\r\n           <input id=\"email\" type=\"text\" pInputText  name=\"email\" [(ngModel)]=\"patient.emailId\"/>\r\n           <label for=\"email\">Email</label>\r\n       </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <span class=\"md-inputfield\">\r\n           <input id=\"number\" type=\"text\" pInputText name=\"phone\" [(ngModel)]=\"patient.number\" pattern=\"[0-9]*\" minlength=\"10\" maxlength=\"10\" #mobile=\"ngModel\" tooltipEvent=\"focus\" pTooltip=\"{{mobile.hasError('pattern')? 'Only Numbers' :'Only 10 digits'}}\" required/>\r\n           <label for=\"number\">Phone Number*</label>\r\n       </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <p-dropdown [options]=\"genders\" name=\"gender\" [(ngModel)]=\"patient.gender\" [autoWidth]=\"false\"></p-dropdown>\r\n      </div>\r\n      \r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <span class=\"md-inputfield\">\r\n           <input id=\"address\" type=\"text\" pInputText name=\"address\" [(ngModel)]=\"address.street\" />\r\n           <label for=\"address\">Address</label>\r\n       </span>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <p-checkbox name=\"welcome message\" binary=\"true\" [(ngModel)]=\"patient.sendWelcomeMessage\" label=\"Send Welcome Message\" inputId=\"welcome\"></p-checkbox>\r\n      </div>\r\n      <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n        <p-checkbox name=\"send_address\" binary=\"true\" [(ngModel)]=\"patient.sendAddress\" label=\"Send Address\" inputId=\"address\"></p-checkbox>\r\n      </div>\r\n    </div>\r\n    <div style=\"padding-top:2em; float:right\">\r\n        <!-- (click)=\"savePatient()\" -->\r\n      <button type=\"button\" [disabled]=\"!quickAddPatient.form.valid\" pButton icon=\"fa-check\"  (click)=\"savePatient()\" label=\"Save\"></button>\r\n      <!-- (click)=\"onDialogClose()\" -->\r\n      <button type=\"button\" pButton icon=\"fa-close\"  (click)=\"cancel()\" label=\"Cancel\"></button>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickAddPatientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_patient__ = __webpack_require__("../../../../../src/app/product/modals/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_address__ = __webpack_require__("../../../../../src/app/product/modals/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_appointment__ = __webpack_require__("../../../../../src/app/product/modals/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_patientdata__ = __webpack_require__("../../../../../src/app/product/modals/patientdata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_patient_service__ = __webpack_require__("../../../../../src/app/product/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuickAddPatientComponent = (function () {
    function QuickAddPatientComponent(patientService, router) {
        this.patientService = patientService;
        this.router = router;
        this.patient = new __WEBPACK_IMPORTED_MODULE_1__modals_patient__["a" /* PatientDetail */]();
        this.address = new __WEBPACK_IMPORTED_MODULE_2__modals_address__["a" /* Address */]();
        this.patientData = new __WEBPACK_IMPORTED_MODULE_4__modals_patientdata__["a" /* PatientData */]();
        this.appointmentDetails = new __WEBPACK_IMPORTED_MODULE_3__modals_appointment__["a" /* AppointmentDetails */]();
        this.genders = [
            { value: '', label: 'Gender' },
            { value: 'm', label: 'Male' },
            { value: 'f', label: 'Female' },
            { value: 'o', label: 'Others' }
        ];
    }
    QuickAddPatientComponent.prototype.ngOnInit = function () {
        this.patient = new __WEBPACK_IMPORTED_MODULE_1__modals_patient__["a" /* PatientDetail */]();
    };
    QuickAddPatientComponent.prototype.savePatient = function () {
        var _this = this;
        this.patientData.patientDetail = this.patient;
        this.patientData.addressDetail = this.address;
        this.patientService.create(this.patientData, null, '/save')
            .subscribe(function (response) {
            _this.patient = new __WEBPACK_IMPORTED_MODULE_1__modals_patient__["a" /* PatientDetail */]();
            _this.address = new __WEBPACK_IMPORTED_MODULE_2__modals_address__["a" /* Address */]();
            _this.cancel();
        });
    };
    QuickAddPatientComponent.prototype.cancel = function () {
        this.router.navigate(['/patient']);
    };
    return QuickAddPatientComponent;
}());
QuickAddPatientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-quick-add-patient',
        template: __webpack_require__("../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/quick-add-patient/quick-add-patient.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_patient_service__["a" /* PatientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["Router"]) === "function" && _b || Object])
], QuickAddPatientComponent);

var _a, _b;
//# sourceMappingURL=quick-add-patient.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.html":
/***/ (function(module, exports) {

module.exports = "<form #schedule=\"ngForm\">\r\n    <div class=\"ui-g input-field-top-padding\">\r\n        <i class=\"topbar-icon material-icons searchicon\">search</i>\r\n        <div class=\"searchicon\" style=\"margin-bottom:10px\">\r\n            <p-autoComplete id=\"patientSearch\" name=\"patientSearch\" [suggestions]=\"filteredPatients\" [(ngModel)]=\"appointment.patient\"\r\n                (completeMethod)=\"filterPatients($event)\" field=\"firstname\" (onSelect)=\"onPatientSelect($event)\"\r\n                [dropdown]=\"true\" [size]=\"30\" placeholder=\"Patient*\" [minLength]=\"1\" required>\r\n                <ng-template let-patient pTemplate=\"item\">\r\n                    <div class=\"ui-helper-clearfix\">\r\n                        <div>{{patient.firstname}} {{patient.lastname}}</div>\r\n                        <div style=\"margin:10px 10px 0 0\">{{patient.number}}</div>\r\n                    </div>\r\n                </ng-template>\r\n            </p-autoComplete>\r\n        </div>\r\n\r\n        <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n            <p-calendar [appendTo]=\"'body'\" #appointmentdate id=\"aDate\" name=\"aDate\" dateFormat=\"dd.mm.yy\"\r\n                readonlyInput=\"true\" [placeholder]=\"'Appointment Date'\" [(ngModel)]=\"date\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n            <p-calendar #startTime id=\"startTime\" name=\"startTime\" [(ngModel)]=\"appointment.appointmentStartDate\"\r\n                [showTime]=\"true\" [timeOnly]=\"true\" readonlyInput=\"true\" [placeholder]=\"'Start Time'\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n            <p-calendar #endTime id=\"endTime\" name=\"endTime\" [showTime]=\"true\"\r\n                [(ngModel)]=\"appointment.appointmentEndDate\" [timeOnly]=\"true\" dateFormat=\"dd.mm.yyyy\"\r\n                readonlyInput=\"true\" [placeholder]=\"'End Time'\"></p-calendar>\r\n        </div>\r\n\r\n\r\n        <!-- <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n            <p-autoComplete [suggestions]=\"filteredConsultants\" name=\"consultant\" placeholder=\"Consultant\" field=\"name\"\r\n                (completeMethod)=\"filterConsultants($event)\" [(ngModel)]=\"appointment.consultant\" [dropdown]=\"true\">\r\n\r\n            </p-autoComplete>\r\n        </div> -->\r\n\r\n        <div class=\"ui-g-12 ui-lg-12 ui-md-12 ui-fluid inputfield\">\r\n            <span class=\"md-inputfield\">\r\n                <input id=\"notes\" type=\"text\" pInputText name=\"notes\" [(ngModel)]=\"appointment.note\" />\r\n                <label for=\"notes\">Notes</label>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!--<p-footer>-->\r\n    <div style=\"padding-top:2em; float:right\">\r\n        <button type=\"button\" [disabled]=\"!schedule.form.valid\" pButton icon=\"fa-check\" (click)=\"saveAppointment()\" label=\"Save\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"Cancel\" (click)=\"display=false\"></button>\r\n    </div>\r\n\r\n    <!--</p-footer>-->\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleAppointmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_patient__ = __webpack_require__("../../../../../src/app/product/modals/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_appointment__ = __webpack_require__("../../../../../src/app/product/modals/appointment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_patient_service__ = __webpack_require__("../../../../../src/app/product/services/patient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_appointment_service__ = __webpack_require__("../../../../../src/app/product/services/appointment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScheduleAppointmentComponent = (function () {
    function ScheduleAppointmentComponent(router, patientService, appointmentService) {
        this.router = router;
        this.patientService = patientService;
        this.appointmentService = appointmentService;
        this.display = false;
        this.filteredPatients = [];
        this.patients = [];
        this.filteredConsultants = [];
        this.consultants = [];
        this.patient = new __WEBPACK_IMPORTED_MODULE_1__modals_patient__["a" /* PatientDetail */]();
        this.appointment = new __WEBPACK_IMPORTED_MODULE_2__modals_appointment__["a" /* AppointmentDetails */]();
        this.loading = false;
    }
    ScheduleAppointmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.get()
            .subscribe(function (response) {
            if (response)
                _this.patients = response['_embedded']['patients'];
        });
    };
    ScheduleAppointmentComponent.prototype.filterPatients = function (event) {
        this.filteredPatients = [];
        for (var i = 0; i < this.patients.length; i++) {
            var patient = this.patients[i];
            if (patient.firstname && patient.firstname.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredPatients.push(patient);
            }
        }
    };
    ScheduleAppointmentComponent.prototype.onHide = function () {
        this.display = false;
        this.router.navigate(['/']);
    };
    ScheduleAppointmentComponent.prototype.filterConsultants = function (event) {
        /* this.filteredConsultants = [];
        for (let i = 0; i < this.consultants.length; i++) {
          let consultant = this.consultants[i];
          if (consultant.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredConsultants.push(consultant);
          }
        } */
    };
    ScheduleAppointmentComponent.prototype.onPatientSelect = function (event) {
        this.patient = event;
    };
    ScheduleAppointmentComponent.prototype.saveAppointment = function () {
        var _this = this;
        this.appointmentService.create(this.appointment, null, '/save').subscribe(function (response) {
            if (response) {
                _this.appointment = new __WEBPACK_IMPORTED_MODULE_2__modals_appointment__["a" /* AppointmentDetails */]();
                _this.router.navigate(['/patient']);
                _this.display = false;
            }
            ;
        });
    };
    ScheduleAppointmentComponent.prototype.onDialogClose = function () {
    };
    return ScheduleAppointmentComponent;
}());
ScheduleAppointmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-schedule-appointment',
        template: __webpack_require__("../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/components/schedule-appointment/schedule-appointment.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_patient_service__["a" /* PatientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_patient_service__["a" /* PatientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_appointment_service__["a" /* AppointmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_appointment_service__["a" /* AppointmentService */]) === "function" && _c || Object])
], ScheduleAppointmentComponent);

var _a, _b, _c;
//# sourceMappingURL=schedule-appointment.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/modals/address.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__ = __webpack_require__("../../../../../src/app/product/modals/baseobjectwithidandbranchid.ts");
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

var Address = (function (_super) {
    __extends(Address, _super);
    function Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Address;
}(__WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__["a" /* BaseObjectWithIdAndBranchId */]));

//# sourceMappingURL=address.js.map

/***/ }),

/***/ "../../../../../src/app/product/modals/appointment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__ = __webpack_require__("../../../../../src/app/product/modals/baseobjectwithidandbranchid.ts");
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

var AppointmentDetails = (function (_super) {
    __extends(AppointmentDetails, _super);
    function AppointmentDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.appointmentStartDate = new Date();
        _this.appointmentEndDate = new Date();
        return _this;
    }
    return AppointmentDetails;
}(__WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__["a" /* BaseObjectWithIdAndBranchId */]));

//# sourceMappingURL=appointment.js.map

/***/ }),

/***/ "../../../../../src/app/product/modals/baseobjectwithidandbranchid.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseObjectWithIdAndBranchId; });
var BaseObjectWithIdAndBranchId = (function () {
    function BaseObjectWithIdAndBranchId() {
        this.branchId = 1;
    }
    return BaseObjectWithIdAndBranchId;
}());

//# sourceMappingURL=baseobjectwithidandbranchid.js.map

/***/ }),

/***/ "../../../../../src/app/product/modals/patient.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__ = __webpack_require__("../../../../../src/app/product/modals/baseobjectwithidandbranchid.ts");
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

var PatientDetail = (function (_super) {
    __extends(PatientDetail, _super);
    function PatientDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PatientDetail;
}(__WEBPACK_IMPORTED_MODULE_0__baseobjectwithidandbranchid__["a" /* BaseObjectWithIdAndBranchId */]));

//# sourceMappingURL=patient.js.map

/***/ }),

/***/ "../../../../../src/app/product/modals/patientdata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__patient__ = __webpack_require__("../../../../../src/app/product/modals/patient.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__address__ = __webpack_require__("../../../../../src/app/product/modals/address.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appointment__ = __webpack_require__("../../../../../src/app/product/modals/appointment.ts");



var PatientData = (function () {
    function PatientData() {
        this.patientDetail = new __WEBPACK_IMPORTED_MODULE_0__patient__["a" /* PatientDetail */]();
        this.addressDetail = new __WEBPACK_IMPORTED_MODULE_1__address__["a" /* Address */]();
        this.appointmentDetail = new __WEBPACK_IMPORTED_MODULE_2__appointment__["a" /* AppointmentDetails */]();
    }
    return PatientData;
}());

//# sourceMappingURL=patientdata.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/appointment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var AppointmentService = (function (_super) {
    __extends(AppointmentService, _super);
    function AppointmentService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'appointments';
        return _this;
    }
    return AppointmentService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
AppointmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], AppointmentService);

var _a, _b;
//# sourceMappingURL=appointment.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/authenticate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var AuthenticateService = (function (_super) {
    __extends(AuthenticateService, _super);
    function AuthenticateService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'authenticate';
        return _this;
    }
    return AuthenticateService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
AuthenticateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], AuthenticateService);

var _a, _b;
//# sourceMappingURL=authenticate.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/cities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CitiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var CitiesService = (function (_super) {
    __extends(CitiesService, _super);
    function CitiesService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'cities';
        return _this;
    }
    return CitiesService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
CitiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], CitiesService);

var _a, _b;
//# sourceMappingURL=cities.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/countries.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var CountriesService = (function (_super) {
    __extends(CountriesService, _super);
    function CountriesService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'countries';
        return _this;
    }
    return CountriesService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
CountriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], CountriesService);

var _a, _b;
//# sourceMappingURL=countries.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/get-branches.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetBranches; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var GetBranches = (function (_super) {
    __extends(GetBranches, _super);
    function GetBranches(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'admin/fetch-branches/';
        return _this;
    }
    return GetBranches;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
GetBranches = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], GetBranches);

var _a, _b;
//# sourceMappingURL=get-branches.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/get-clinic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetClinic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var GetClinic = (function (_super) {
    __extends(GetClinic, _super);
    function GetClinic(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'admin/fetch-clinics';
        return _this;
    }
    return GetClinic;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
GetClinic = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], GetClinic);

var _a, _b;
//# sourceMappingURL=get-clinic.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/patient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var PatientService = (function (_super) {
    __extends(PatientService, _super);
    function PatientService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'patients';
        return _this;
    }
    return PatientService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
PatientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], PatientService);

var _a, _b;
//# sourceMappingURL=patient.service.js.map

/***/ }),

/***/ "../../../../../src/app/product/services/states.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__ = __webpack_require__("../../../../../src/app/core/http/core/api.service.ts");
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




var StatesService = (function (_super) {
    __extends(StatesService, _super);
    function StatesService(http, Injector) {
        var _this = _super.call(this, http, Injector) || this;
        _this.http = http;
        _this.urlPath = 'states';
        return _this;
    }
    return StatesService;
}(__WEBPACK_IMPORTED_MODULE_3__core_http_core_api_service__["a" /* ApiService */]));
StatesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _b || Object])
], StatesService);

var _a, _b;
//# sourceMappingURL=states.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    baseUrl: 'https://18.219.190.56:9001/'
    //  baseUrl: 'https://localhost:9001/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map