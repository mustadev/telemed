function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/doctor/profile/profile.component */
    "./src/app/pages/doctor/profile/profile.component.ts");
    /* harmony import */


    var _pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/doctor/login/login.component */
    "./src/app/pages/doctor/login/login.component.ts");
    /* harmony import */


    var _pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/doctor/signup/signup.component */
    "./src/app/pages/doctor/signup/signup.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/doctor/doctor-dash-board/doctor-dash-board.component */
    "./src/app/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/doctor/doctor-profile-settings/doctor-profile-settings.component */
    "./src/app/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/doctor/doctor-change-password/doctor-change-password.component */
    "./src/app/pages/doctor/doctor-change-password/doctor-change-password.component.ts");
    /* harmony import */


    var _pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/doctor/clinic-settings/clinic-settings.component */
    "./src/app/pages/doctor/clinic-settings/clinic-settings.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/doctor/doctor-appointments/doctor-appointments.component */
    "./src/app/pages/doctor/doctor-appointments/doctor-appointments.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/doctor/doctor-reviews/doctor-reviews.component */
    "./src/app/pages/doctor/doctor-reviews/doctor-reviews.component.ts");
    /* harmony import */


    var _pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/patient/login/login.component */
    "./src/app/pages/patient/login/login.component.ts");
    /* harmony import */


    var _pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/patient/signup/signup.component */
    "./src/app/pages/patient/signup/signup.component.ts");
    /* harmony import */


    var _pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/patient/profile/profile.component */
    "./src/app/pages/patient/profile/profile.component.ts");
    /* harmony import */


    var _pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/patient/patient-appointments/patient-appointments.component */
    "./src/app/pages/patient/patient-appointments/patient-appointments.component.ts");
    /* harmony import */


    var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/patient/change-password/change-password.component */
    "./src/app/pages/patient/change-password/change-password.component.ts");
    /* harmony import */


    var _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/booking/booking.component */
    "./src/app/pages/booking/booking.component.ts");
    /* harmony import */


    var _pages_doctor_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/doctor/video-chat/video-chat.component */
    "./src/app/pages/doctor/video-chat/video-chat.component.ts");
    /* harmony import */


    var _pages_patient_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/patient/video-chat/video-chat.component */
    "./src/app/pages/patient/video-chat/video-chat.component.ts"); // @ts-ignore
    // @ts-ignore
    // const routes: Routes = [
    //   { path:  '', pathMatch: 'full', redirectTo: 'home' },
    //   { path: 'home', component: HomeComponent },
    //   { path: 'contact' , component: ContactComponent },
    //   { path: 'about' , component: AboutComponent },
    //   { path: 'doctor/profile/:id' , component: DoctorProfileComponent},
    //   { path: 'doctor/login' , component: DoctorLoginComponent },
    //   { path: 'doctor/signup' , component: DoctorSingupComponent },
    //   { path: 'doctor/dashboard' , component: DoctorDashBoardComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'doctor/profile-settings' , component: DoctorProfileSettingsComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'doctor/clinic-settings' , component: ClinicSettingsComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'doctor/appointments' , component: DoctorAppointmentsComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'doctor/reviews' , component: DoctorReviewsComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'doctor/change-password', component: DoctorChangePasswordComponent, canActivate: [DoctorAuthGuard]},
    //   { path: 'patient/profile' , component: PatientProfileComponent, canActivate:[PatientAuthGuard]},
    //   { path: 'patient/login' , component: PatientLoginComponent },
    //   { path: 'patient/signup' , component: PatientSingupComponent },
    //   { path: 'search' , component: SearchComponent },
    //   { path: 'booking/:id' , component: BookingComponent, canActivate: [PatientAuthGuard]},
    //   { path: 'patient/appointments' , component: PatientAppointmentsComponent, canActivate: [PatientAuthGuard]},
    //   { path: 'patient/change-password' , component: ChangePasswordComponent, canActivate: [PatientAuthGuard]},
    //   { path: '**', redirectTo: 'home' } //this must be the last
    // ];


    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    }, {
      path: 'home',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'contact',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]
    }, {
      path: 'about',
      component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'doctor/profile/:id',
      component: _pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
      path: 'doctor/login',
      component: _pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'doctor/signup',
      component: _pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
    }, {
      path: 'doctor/dashboard',
      component: _pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_8__["DoctorDashBoardComponent"]
    }, {
      path: 'doctor/profile-settings',
      component: _pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_9__["DoctorProfileSettingsComponent"]
    }, {
      path: 'doctor/clinic-settings',
      component: _pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_11__["ClinicSettingsComponent"]
    }, {
      path: 'doctor/appointments',
      component: _pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_12__["DoctorAppointmentsComponent"]
    }, {
      path: 'doctor/reviews',
      component: _pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_13__["DoctorReviewsComponent"]
    }, {
      path: 'doctor/change-password',
      component: _pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_10__["DoctorChangePasswordComponent"]
    }, {
      path: 'doctor/chat/video/:id',
      component: _pages_doctor_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_21__["VideoChatComponent"]
    }, {
      path: 'patient/profile',
      component: _pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"]
    }, {
      path: 'patient/login',
      component: _pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    }, {
      path: 'patient/signup',
      component: _pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'patient/chat/video/:id',
      component: _pages_patient_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_22__["VideoChatComponent"]
    }, {
      path: 'search',
      component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_18__["SearchComponent"]
    }, {
      path: 'booking/:id',
      component: _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_20__["BookingComponent"]
    }, {
      path: 'patient/appointments',
      component: _pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_17__["PatientAppointmentsComponent"]
    }, {
      path: 'patient/change-password',
      component: _pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_19__["ChangePasswordComponent"]
    }, {
      path: '**',
      redirectTo: 'home'
    } //this must be the last
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(tokenStorageService) {
        _classCallCheck(this, AppComponent);

        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = !!this.tokenStorageService.getToken();

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser(); //console.log(user.roles);
            //this.roles = user.roles;
            //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.username = user.username;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut();
          window.location.reload();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/patient/patient.component */
    "./src/app/components/patient/patient.component.ts");
    /* harmony import */


    var _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/doctor/doctor.component */
    "./src/app/components/doctor/doctor.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/search/search.component */
    "./src/app/pages/search/search.component.ts");
    /* harmony import */


    var _components_review_review_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/review/review.component */
    "./src/app/components/review/review.component.ts");
    /* harmony import */


    var _pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/doctor/signup/signup.component */
    "./src/app/pages/doctor/signup/signup.component.ts");
    /* harmony import */


    var _pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/doctor/login/login.component */
    "./src/app/pages/doctor/login/login.component.ts");
    /* harmony import */


    var _pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/doctor/profile/profile.component */
    "./src/app/pages/doctor/profile/profile.component.ts");
    /* harmony import */


    var _pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/patient/signup/signup.component */
    "./src/app/pages/patient/signup/signup.component.ts");
    /* harmony import */


    var _pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/patient/login/login.component */
    "./src/app/pages/patient/login/login.component.ts");
    /* harmony import */


    var _pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/patient/profile/profile.component */
    "./src/app/pages/patient/profile/profile.component.ts");
    /* harmony import */


    var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/auth-interceptor.service */
    "./src/app/services/auth-interceptor.service.ts");
    /* harmony import */


    var _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/doctor-auth.guard */
    "./src/app/services/doctor-auth.guard.ts");
    /* harmony import */


    var _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/patient-auth-guard */
    "./src/app/services/patient-auth-guard.ts");
    /* harmony import */


    var _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./services/admin-auth.guard */
    "./src/app/services/admin-auth.guard.ts");
    /* harmony import */


    var _pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/admin/admin-profile/admin-profile.component */
    "./src/app/pages/admin/admin-profile/admin-profile.component.ts");
    /* harmony import */


    var _pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/admin/admin-login/admin-login.component */
    "./src/app/pages/admin/admin-login/admin-login.component.ts");
    /* harmony import */


    var _pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/patient/change-password/change-password.component */
    "./src/app/pages/patient/change-password/change-password.component.ts");
    /* harmony import */


    var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/reviews/reviews.component */
    "./src/app/components/reviews/reviews.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/doctor/doctor-dash-board/doctor-dash-board.component */
    "./src/app/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/doctor/doctor-profile-settings/doctor-profile-settings.component */
    "./src/app/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts");
    /* harmony import */


    var _pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/patient/patient-appointments/patient-appointments.component */
    "./src/app/pages/patient/patient-appointments/patient-appointments.component.ts");
    /* harmony import */


    var _pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/patient/patient-appointment/patient-appointment.component */
    "./src/app/pages/patient/patient-appointment/patient-appointment.component.ts");
    /* harmony import */


    var _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./pages/booking/booking.component */
    "./src/app/pages/booking/booking.component.ts");
    /* harmony import */


    var _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/clinic/clinic.component */
    "./src/app/components/clinic/clinic.component.ts");
    /* harmony import */


    var _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/doctor-over-view/doctor-over-view.component */
    "./src/app/components/doctor-over-view/doctor-over-view.component.ts");
    /* harmony import */


    var _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/review-form/review-form.component */
    "./src/app/components/review-form/review-form.component.ts");
    /* harmony import */


    var _pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/doctor/clinic-settings/clinic-settings.component */
    "./src/app/pages/doctor/clinic-settings/clinic-settings.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/doctor/doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/patient/patient-side-bar/patient-side-bar.component */
    "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/doctor/doctor-appointments/doctor-appointments.component */
    "./src/app/pages/doctor/doctor-appointments/doctor-appointments.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./pages/doctor/doctor-appointment/doctor-appointment.component */
    "./src/app/pages/doctor/doctor-appointment/doctor-appointment.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./pages/doctor/doctor-change-password/doctor-change-password.component */
    "./src/app/pages/doctor/doctor-change-password/doctor-change-password.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pages/doctor/doctor-reviews/doctor-reviews.component */
    "./src/app/pages/doctor/doctor-reviews/doctor-reviews.component.ts");
    /* harmony import */


    var _pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./pages/doctor/doctor-review/doctor-review.component */
    "./src/app/pages/doctor/doctor-review/doctor-review.component.ts");
    /* harmony import */


    var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/search-box/search-box.component */
    "./src/app/components/search-box/search-box.component.ts");
    /* harmony import */


    var _pages_doctor_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./pages/doctor/video-chat/video-chat.component */
    "./src/app/pages/doctor/video-chat/video-chat.component.ts");
    /* harmony import */


    var _pages_patient_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pages/patient/video-chat/video-chat.component */
    "./src/app/pages/patient/video-chat/video-chat.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"]
      }, _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_26__["DoctorAuthGuard"], _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_27__["PatientAuthGuard"], _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AdminAuthGuard"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownGlobalConfig"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({}) // add google map support
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_11__["DoctorComponent"], _pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_43__["DoctorSideBarComponent"], _pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_45__["DoctorAppointmentsComponent"], _pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_46__["DoctorAppointmentComponent"], _pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_47__["DoctorChangePasswordComponent"], _pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_48__["DoctorReviewsComponent"], _pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_49__["DoctorReviewComponent"], _pages_doctor_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_51__["VideoChatComponent"], _pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_33__["DoctorDashBoardComponent"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_38__["RatingStarComponent"], _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_39__["ClinicComponent"], _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_40__["DoctorOverViewComponent"], _pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_34__["DoctorProfileSettingsComponent"], _pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_42__["ClinicSettingsComponent"], // Patient Components
        _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_10__["PatientComponent"], _pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignupComponent"], _pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_35__["PatientAppointmentsComponent"], _pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_36__["PatientAppointmentComponent"], _pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"], _pages_patient_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_52__["VideoChatComponent"], _pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_44__["PatientSideBarComponent"], // Admin Components
        _pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_29__["AdminProfileComponent"], _pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_30__["AdminLoginComponent"], // generale Components
        _pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__["ChangePasswordComponent"], _components_review_review_component__WEBPACK_IMPORTED_MODULE_18__["ReviewComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_32__["ReviewsComponent"], _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_37__["BookingComponent"], _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_41__["ReviewFormComponent"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_50__["SearchBoxComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _pages_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"], _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_11__["DoctorComponent"], _pages_doctor_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_43__["DoctorSideBarComponent"], _pages_doctor_doctor_appointments_doctor_appointments_component__WEBPACK_IMPORTED_MODULE_45__["DoctorAppointmentsComponent"], _pages_doctor_doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_46__["DoctorAppointmentComponent"], _pages_doctor_doctor_change_password_doctor_change_password_component__WEBPACK_IMPORTED_MODULE_47__["DoctorChangePasswordComponent"], _pages_doctor_doctor_reviews_doctor_reviews_component__WEBPACK_IMPORTED_MODULE_48__["DoctorReviewsComponent"], _pages_doctor_doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_49__["DoctorReviewComponent"], _pages_doctor_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_51__["VideoChatComponent"], _pages_doctor_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], _pages_doctor_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _pages_doctor_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], _pages_patient_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _pages_doctor_doctor_dash_board_doctor_dash_board_component__WEBPACK_IMPORTED_MODULE_33__["DoctorDashBoardComponent"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_38__["RatingStarComponent"], _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_39__["ClinicComponent"], _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_40__["DoctorOverViewComponent"], _pages_doctor_doctor_profile_settings_doctor_profile_settings_component__WEBPACK_IMPORTED_MODULE_34__["DoctorProfileSettingsComponent"], _pages_doctor_clinic_settings_clinic_settings_component__WEBPACK_IMPORTED_MODULE_42__["ClinicSettingsComponent"], // Patient Components
          _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_10__["PatientComponent"], _pages_patient_signup_signup_component__WEBPACK_IMPORTED_MODULE_22__["SignupComponent"], _pages_patient_patient_appointments_patient_appointments_component__WEBPACK_IMPORTED_MODULE_35__["PatientAppointmentsComponent"], _pages_patient_patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_36__["PatientAppointmentComponent"], _pages_patient_profile_profile_component__WEBPACK_IMPORTED_MODULE_24__["ProfileComponent"], _pages_patient_video_chat_video_chat_component__WEBPACK_IMPORTED_MODULE_52__["VideoChatComponent"], _pages_patient_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_44__["PatientSideBarComponent"], // Admin Components
          _pages_admin_admin_profile_admin_profile_component__WEBPACK_IMPORTED_MODULE_29__["AdminProfileComponent"], _pages_admin_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_30__["AdminLoginComponent"], // generale Components
          _pages_patient_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_31__["ChangePasswordComponent"], _components_review_review_component__WEBPACK_IMPORTED_MODULE_18__["ReviewComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_32__["ReviewsComponent"], _pages_booking_booking_component__WEBPACK_IMPORTED_MODULE_37__["BookingComponent"], _components_review_form_review_form_component__WEBPACK_IMPORTED_MODULE_41__["ReviewFormComponent"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_50__["SearchBoxComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({}) // add google map support
          ],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_25__["AuthInterceptor"],
            multi: true
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"]
          }, _services_doctor_auth_guard__WEBPACK_IMPORTED_MODULE_26__["DoctorAuthGuard"], _services_patient_auth_guard__WEBPACK_IMPORTED_MODULE_27__["PatientAuthGuard"], _services_admin_auth_guard__WEBPACK_IMPORTED_MODULE_28__["AdminAuthGuard"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownGlobalConfig"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/clinic/clinic.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/clinic/clinic.component.ts ***!
    \*******************************************************/

  /*! exports provided: ClinicComponent */

  /***/
  function srcAppComponentsClinicClinicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicComponent", function () {
      return ClinicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    function ClinicComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicPhoto_r334 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", clinicPhoto_r334.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clinicPhoto_r334.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ClinicComponent =
    /*#__PURE__*/
    function () {
      function ClinicComponent(doctorService) {
        _classCallCheck(this, ClinicComponent);

        this.doctorService = doctorService;
      }

      _createClass(ClinicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("Clinic: ", JSON.stringify(this.clinic));
          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(function (photos) {
            photos.filter(function (photo) {
              console.log("photo ", photo);
              return photo === null;
            });
            _this.clinicPhotos = photos.map(function (photo) {
              return {
                "id": photo.id,
                "image": 'data:image/jpeg;base64,' + photo.image.data
              };
            });
          });
        }
      }]);

      return ClinicComponent;
    }();

    ClinicComponent.ɵfac = function ClinicComponent_Factory(t) {
      return new (t || ClinicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    ClinicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClinicComponent,
      selectors: [["app-clinic"]],
      inputs: {
        clinic: "clinic",
        doctor: "doctor"
      },
      decls: 25,
      vars: 13,
      consts: [[1, "row"], [1, "col-md-10"], [1, "clinic-content"], [1, "clinic-name"], [1, "doc-speciality"], [1, "clinic-details", "mb-0"], [1, "clinic-direction"], [1, "fas", "fa-map-marker-alt"], [4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "consult-price"], ["aria-data", "hidden", 1, "fa", "fa-money"], [1, "col-md-12", "mt-5"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", "markerDraggable"], ["data-fancybox", "gallery2", 3, "href"], ["alt", "Feature Image", 3, "src"]],
      template: function ClinicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ClinicComponent_li_12_Template, 3, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Clinic Location ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "agm-map", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "agm-marker", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clinic == null ? null : ctx.clinic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.clinic.address, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, ctx.clinic == null ? null : ctx.clinic.consultPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.clinic.location.latitude)("longitude", ctx.clinic.location.longitude)("zoom", ctx.clinic.location.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.clinic.location.latitude)("longitude", ctx.clinic.location.longitude)("markerDraggable", false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["agm-map[_ngcontent-%COMP%] {\n    height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGluaWMvY2xpbmljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGluaWMvY2xpbmljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clinic',
          templateUrl: './clinic.component.html',
          styleUrls: ['./clinic.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        clinic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/doctor-over-view/doctor-over-view.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/doctor-over-view/doctor-over-view.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DoctorOverViewComponent */

  /***/
  function srcAppComponentsDoctorOverViewDoctorOverViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorOverViewComponent", function () {
      return DoctorOverViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorOverViewComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r337 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", service_r337, " ");
      }
    }

    function DoctorOverViewComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var speciality_r338 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", speciality_r338, " ");
      }
    }

    var DoctorOverViewComponent =
    /*#__PURE__*/
    function () {
      function DoctorOverViewComponent() {
        _classCallCheck(this, DoctorOverViewComponent);
      }

      _createClass(DoctorOverViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorOverViewComponent;
    }();

    DoctorOverViewComponent.ɵfac = function DoctorOverViewComponent_Factory(t) {
      return new (t || DoctorOverViewComponent)();
    };

    DoctorOverViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorOverViewComponent,
      selectors: [["app-over-view"]],
      inputs: {
        doctor: "doctor",
        clinic: "clinic"
      },
      decls: 17,
      vars: 3,
      consts: [[1, "row"], [1, "col-md-12", "col-lg-9"], [1, "widget", "about-widget"], [1, "widget-title"], [1, "service-list"], [1, "clearfix"], [4, "ngFor", "ngForOf"]],
      template: function DoctorOverViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DoctorOverViewComponent_li_11_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Specializations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorOverViewComponent_li_16_Template, 2, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.aboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.specialities);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yLW92ZXItdmlldy9kb2N0b3Itb3Zlci12aWV3LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorOverViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-over-view',
          templateUrl: './doctor-over-view.component.html',
          styleUrls: ['./doctor-over-view.component.css']
        }]
      }], function () {
        return [];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clinic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/doctor/doctor.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/doctor/doctor.component.ts ***!
    \*******************************************************/

  /*! exports provided: DoctorComponent */

  /***/
  function srcAppComponentsDoctorDoctorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorComponent", function () {
      return DoctorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function DoctorComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
      }

      if (rf & 2) {
        var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r265.retrievedAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function DoctorComponent_li_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r269 = ctx.$implicit;

        var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx_r267.doctor == null ? null : ctx_r267.doctor.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r269, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorComponent_span_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicService_r270 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", clinicService_r270, " ");
      }
    }

    var DoctorComponent =
    /*#__PURE__*/
    function () {
      function DoctorComponent(doctorService) {
        _classCallCheck(this, DoctorComponent);

        this.doctorService = doctorService;
        this.showDefaultAvatar = false;
      }

      _createClass(DoctorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //Get Doctor Avatar
          this.doctorService.getAvatar(this.doctor.id).subscribe(function (res) {
            var _a, _b, _c, _d;

            _this2.retrieveResonse = res;
            _this2.base64Data = (_b = (_a = _this2.retrieveResonse) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data;
            _this2.retrievedAvatar = 'data:image/jpeg;base64,' + _this2.base64Data;
            console.log(res); //console.log("base64", this.base64Data);

            console.log("retrievedAvatar: ", _this2.retrievedAvatar);

            if (((_d = (_c = res) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.data) === undefined) {
              _this2.showDefaultAvatar = true;
              console.log("show default");
            }
          }); //Get Doctor Clinic

          this.doctorService.getClinic(this.doctor.id).subscribe(function (res) {
            _this2.clinic = res;
          }); //Get Clinic Photos

          this.doctorService.getClinicPhotos(this.doctor.id).subscribe(function (res) {
            //Convert image to base64 and return it;
            _this2.clinicPhotos = res.map(function (photo) {
              return 'data:image/jpeg;base64,' + photo.image.data;
            });
          });
        }
      }]);

      return DoctorComponent;
    }();

    DoctorComponent.ɵfac = function DoctorComponent_Factory(t) {
      return new (t || DoctorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    DoctorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorComponent,
      selectors: [["app-doctor"]],
      inputs: {
        doctor: "doctor"
      },
      decls: 52,
      vars: 32,
      consts: [[1, "card", "m-2"], [1, "card-body"], [1, "row"], [1, "col-md-8", "col-sm-12"], [1, "row", "text-md-left", "text-center"], [1, "col-md-4", "col-sm-12"], [3, "routerLink"], ["class", "img-fluid w-100", "alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/default-doctor.png", "class", "doc-img img-fluid w-100", "alt", "Doctor Image", 4, "ngIf"], [1, "col-md-8", "col-sm-12", "text-md-left", "text-center"], [1, "doc-name"], [1, "doc-speciality", "text-dark"], [1, "text_primary"], [1, "rating"], [3, "currentRate"], [1, "d-inline-block", "h5"], [1, "clinic-details"], [1, "doc-location"], [1, "fas", "fa-map-marker-alt"], [1, "clinic-gallery"], [4, "ngFor", "ngForOf"], [1, "clinic-services"], ["class", "service border", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-12", "text-md-left", "text-center"], [1, "clini-infos", "p-2"], [1, "fa", "fa-comment"], [1, "fa", "fa-map-marker-alt"], [1, "fa", "fa-money-bill-alt"], [1, "text-center"], [1, "view_pro_btn", "border", 3, "routerLink"], [1, "app_btn", 3, "routerLink"], ["alt", "Doctor Image", 1, "img-fluid", "w-100", 3, "src"], ["src", "assets/img/default-doctor.png", "alt", "Doctor Image", 1, "doc-img", "img-fluid", "w-100"], ["data-fancybox", "gallery", 3, "routerLink"], ["alt", "Feature", 3, "src"], [1, "service", "border"]],
      template: function DoctorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoctorComponent_img_7_Template, 1, 1, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DoctorComponent_img_8_Template, 1, 0, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-rating-star", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DoctorComponent_li_30_Template, 3, 2, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DoctorComponent_span_32_Template, 2, 1, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Voir Doctor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "BOOK APPOINTMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 20, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 22, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx.doctor == null ? null : ctx.doctor.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.doctor == null ? null : ctx.doctor.averageRating, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 24, ctx.clinic == null ? null : ctx.clinic.country), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 26, ctx.clinic == null ? null : ctx.clinic.city), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.doctor == null ? null : ctx.doctor.reviews == null ? null : ctx.doctor.reviews.length, " Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.clinic == null ? null : ctx.clinic.country) + " " + (ctx.clinic == null ? null : ctx.clinic.city), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 28, ctx.clinic == null ? null : ctx.clinic.minPrice), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 30, ctx.clinic == null ? null : ctx.clinic.maxPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/booking/", ctx.doctor == null ? null : ctx.doctor.id, "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_4__["RatingStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]],
      styles: [".doc-img[_ngcontent-%COMP%] {\n    max-width: 200px;\n    max-height: 200px;\n}\n\n.doc-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgb(22, 22, 22);\n    padding: 1rem 0;\n}\n\n.service[_ngcontent-%COMP%] {\n    padding:5px;\n    margin: 2px;\n    border-radius: 5px;\n    color:grey;\n    font-size: small;\n}\n\n.app_btn[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    margin: 10px;\n    background-color: #7353D2;\n    border-radius: 10px;\n    text-align: center;\n    color: aliceblue;\n    text-transform: uppercase;\n    box-shadow: 0px 2px 4px -1px rgba(171,158,171,0.77);\n}\n\n.view_pro_btn[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    margin: 10px;\n    border-color: #7353D2 !important;\n    border-width: 2px !important;\n    border-radius: 10px;\n    text-transform: uppercase;\n    color: #7353D2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb2N0b3IvZG9jdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9jdG9yL2RvY3Rvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvYy1pbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG59XG5cbi5kb2MtbmFtZSA+IGEge1xuICAgIGNvbG9yOiByZ2IoMjIsIDIyLCAyMik7XG4gICAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4uc2VydmljZSB7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOmdyZXk7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuXG4uYXBwX2J0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczNTNEMjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDE3MSwxNTgsMTcxLDAuNzcpO1xufVxuXG4udmlld19wcm9fYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICM3MzUzRDIgIWltcG9ydGFudDtcbiAgICBib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzczNTNEMjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor',
          templateUrl: './doctor.component.html',
          styleUrls: ['./doctor.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/patient/patient.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/patient/patient.component.ts ***!
    \*********************************************************/

  /*! exports provided: PatientComponent */

  /***/
  function srcAppComponentsPatientPatientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientComponent", function () {
      return PatientComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientComponent =
    /*#__PURE__*/
    function () {
      function PatientComponent() {
        _classCallCheck(this, PatientComponent);
      }

      _createClass(PatientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientComponent;
    }();

    PatientComponent.ɵfac = function PatientComponent_Factory(t) {
      return new (t || PatientComponent)();
    };

    PatientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientComponent,
      selectors: [["app-patient"]],
      decls: 2,
      vars: 0,
      template: function PatientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "patient works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudC9wYXRpZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient',
          templateUrl: './patient.component.html',
          styleUrls: ['./patient.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/rating-star/rating-star.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/rating-star/rating-star.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RatingStarComponent */

  /***/
  function srcAppComponentsRatingStarRatingStarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingStarComponent", function () {
      return RatingStarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function RatingStarComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2605");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2605 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fill_r332 = ctx.fill;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r332 === 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r332, "%");
      }
    }

    var RatingStarComponent =
    /*#__PURE__*/
    function () {
      // maxItem : any[];
      function RatingStarComponent() {
        _classCallCheck(this, RatingStarComponent);

        // @Input() max: number;
        this.currentRateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = true;
        this.max = 5;
      }

      _createClass(RatingStarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RatingStarComponent;
    }();

    RatingStarComponent.ɵfac = function RatingStarComponent_Factory(t) {
      return new (t || RatingStarComponent)();
    };

    RatingStarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RatingStarComponent,
      selectors: [["app-rating-star"]],
      inputs: {
        currentRate: "currentRate",
        readonly: "readonly",
        max: "max"
      },
      outputs: {
        currentRateChange: "currentRateChange"
      },
      decls: 3,
      vars: 4,
      consts: [["t", ""], [3, "rate", "starTemplate", "readonly", "max", "rateChange"], [1, "star"], [1, "half"]],
      template: function RatingStarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingStarComponent_ng_template_0_Template, 4, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-rating", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function RatingStarComponent_Template_ngb_rating_rateChange_2_listener($event) {
            return ctx.currentRate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate)("starTemplate", _r330)("readonly", true)("max", ctx.max);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"]],
      styles: [".star[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    font-size: 2rem;\n    color: #d3d3d3;\n  }\n  .full[_ngcontent-%COMP%] {\n    color: #FF5358;\n  }\n  .half[_ngcontent-%COMP%] {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: #FF5358;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYXRpbmctc3Rhci9yYXRpbmctc3Rhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmF0aW5nLXN0YXIvcmF0aW5nLXN0YXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogI2QzZDNkMztcbiAgfVxuICAuZnVsbCB7XG4gICAgY29sb3I6ICNGRjUzNTg7XG4gIH1cbiAgLmhhbGYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI0ZGNTM1ODtcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingStarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rating-star',
          templateUrl: './rating-star.component.html',
          styleUrls: ['./rating-star.component.css']
        }]
      }], function () {
        return [];
      }, {
        currentRateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        currentRate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/review-form/review-form.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/review-form/review-form.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ReviewFormComponent */

  /***/
  function srcAppComponentsReviewFormReviewFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewFormComponent", function () {
      return ReviewFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Review */
    "./src/app/models/Review.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function ReviewFormComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u2605");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2605 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fill_r341 = ctx.fill;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full", fill_r341 === 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", fill_r341, "%");
      }
    }

    var ReviewFormComponent =
    /*#__PURE__*/
    function () {
      function ReviewFormComponent(authService) {
        _classCallCheck(this, ReviewFormComponent);

        this.authService = authService;
        this.addReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReviewFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this3.authorId = res.id;
            console.log("::::::::: authorId: ", _this3.authorId);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log("authorId befor submit: ", this.authorId);
          console.log("rating ", this.rating);

          if (!this.rating) {
            console.log("Warring rate has no value");
            return;
          }

          var review = new src_app_models_Review__WEBPACK_IMPORTED_MODULE_1__["Review"](this.content, [], this.rating, this.authorId);
          console.log("review : ", JSON.stringify(review));
          this.addReview.emit(review);
          this.content = "";
          this.rating = 0;
        }
      }]);

      return ReviewFormComponent;
    }();

    ReviewFormComponent.ɵfac = function ReviewFormComponent_Factory(t) {
      return new (t || ReviewFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ReviewFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewFormComponent,
      selectors: [["app-review-form"]],
      outputs: {
        addReview: "addReview"
      },
      decls: 21,
      vars: 5,
      consts: [[3, "ngSubmit"], [1, "form-group"], ["t", ""], [3, "rate", "starTemplate", "readonly", "max", "rateChange"], ["id", "review_desc", "maxlength", "500", "name", "content", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "d-flex", "justify-content-between", "mt-3"], [1, "text-muted"], ["id", "chars"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn_primary"], [1, "star"], [1, "half"]],
      template: function ReviewFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ReviewFormComponent_Template_form_ngSubmit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewFormComponent_ng_template_5_Template, 4, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-rating", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewFormComponent_Template_ngb_rating_rateChange_7_listener($event) {
            return ctx.rating = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReviewFormComponent_Template_textarea_ngModelChange_11_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " characters remaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.rating)("starTemplate", _r339)("readonly", false)("max", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbRating"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".star[_ngcontent-%COMP%] {\n    position: relative;\n    display: inline-block;\n    font-size: 2rem;\n    color: #d3d3d3;\n  }\n  .full[_ngcontent-%COMP%] {\n    color: red;\n  }\n  .half[_ngcontent-%COMP%] {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXctZm9ybS9yZXZpZXctZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy1mb3JtL3Jldmlldy1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICNkM2QzZDM7XG4gIH1cbiAgLmZ1bGwge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgLmhhbGYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogcmVkO1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review-form',
          templateUrl: './review-form.component.html',
          styleUrls: ['./review-form.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        addReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/review/review.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/review/review.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReviewComponent */

  /***/
  function srcAppComponentsReviewReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewComponent", function () {
      return ReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Like__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Like */
    "./src/app/models/Like.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function ReviewComponent_img_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
      }

      if (rf & 2) {
        var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r297.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ReviewComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
      }
    }

    function ReviewComponent_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r299.author.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r299.author.lastname), "");
      }
    }

    function ReviewComponent_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r300.author.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r300.author.lastname), "");
      }
    }

    function ReviewComponent_a_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_a_24_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r303);

          var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r302.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ReviewComponent =
    /*#__PURE__*/
    function () {
      //@Output() toggleLike:EventEmitter<Like> = new EventEmitter();
      function ReviewComponent(patientService, reviewService, autheService) {
        _classCallCheck(this, ReviewComponent);

        this.patientService = patientService;
        this.reviewService = reviewService;
        this.autheService = autheService;
        this.deleteReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //TODO get author
          this.patientService.getById(this.review.patientId).subscribe(function (res) {
            _this4.author = res;
          });
          this.patientService.getAvatar(this.review.patientId).subscribe(function (res) {
            var _a, _b;

            _this4.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = res) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            console.log("Avatar: ", _this4.avatar);
          });
          this.autheService.getCurrentUser().subscribe(function (res) {
            _this4.currentUserId = res.id;
            _this4.like = new src_app_models_Like__WEBPACK_IMPORTED_MODULE_1__["Like"](_this4.currentUserId);

            _this4.setLiked(_this4.like);
          });
        }
      }, {
        key: "setLiked",
        value: function setLiked(like) {
          this.isLiked = this.review.likes.includes(like);
          console.log("isLiked: " + this.isLiked);
        }
      }, {
        key: "getLiked",
        value: function getLiked() {
          return this.review.likes.includes(this.like);
        }
      }, {
        key: "toggleLike",
        value: function toggleLike() {
          var _this5 = this;

          if (!this.isLiked) {
            console.log("liking");
            this.reviewService.likeReview(this.review.id, this.like).subscribe(function (res) {
              console.log("liking: ", JSON.stringify(res));

              _this5.review.likes.push(_this5.like);

              _this5.isLiked = true;
            });
          }

          if (this.isLiked) {
            console.log("unliking");
            this.reviewService.unlikeReview(this.review.id, this.like).subscribe(function (res) {
              console.log("unliking: ", JSON.stringify(res));
              var likes = _this5.review.likes;
              console.log("befor delete ", JSON.stringify(likes));
              var index = likes.indexOf(_this5.like, 0);

              if (index > -1) {
                likes.splice(index, 1);
              }

              console.log("after delete ", JSON.stringify(likes));
              _this5.review.likes = likes;
              _this5.isLiked = false;
            });
          }
        }
      }, {
        key: "onEdit",
        value: function onEdit() {
          this.editReview.emit(this.review);
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          this.deleteReview.emit(this.review);
        }
      }, {
        key: "setClass",
        value: function setClass() {
          return {
            "liked": this.isLiked,
            "fa": true,
            "fa-thumbs-up": true
          };
        }
      }]);

      return ReviewComponent;
    }();

    ReviewComponent.ɵfac = function ReviewComponent_Factory(t) {
      return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewComponent,
      selectors: [["app-review"]],
      inputs: {
        review: "review"
      },
      outputs: {
        deleteReview: "deleteReview",
        editReview: "editReview"
      },
      decls: 25,
      vars: 10,
      consts: [[1, "row"], [1, "col-md-2", "d-none", "d-md-block", "border"], [1, "row", "text-center"], [1, "col-12"], ["alt", "Patient Image", 3, "src", 4, "ngIf"], ["class", "col img-fluid rounded-circle", "src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 4, "ngIf"], ["class", "h4", 4, "ngIf"], [1, "col", "border"], [1, "col-lg-12", "text-right"], [3, "currentRate", "readonly"], [1, "col-lg-12"], [1, "col-6", "d-block", "d-md-none", "text-left"], [1, "col-md-12", "col-6", "text-right"], [1, "like-btn", "p-1", "m-1", 3, "click"], [3, "ngClass"], ["class", "trash-btn p-1 m-1", 3, "click", 4, "ngIf"], ["alt", "Patient Image", 3, "src"], ["src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 1, "col", "img-fluid", "rounded-circle"], [1, "h4"], [1, "trash-btn", "p-1", "m-1", 3, "click"], [1, "fa", "fa-trash"]],
      template: function ReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewComponent_img_5_Template, 1, 1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReviewComponent_img_6_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReviewComponent_span_8_Template, 4, 6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-rating-star", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ReviewComponent_span_19_Template, 4, 6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_a_click_21_listener() {
            return ctx.toggleLike();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ReviewComponent_a_24_Template, 2, 0, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx.review == null ? null : ctx.review.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.setClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.review == null ? null : ctx.review.likes == null ? null : ctx.review.likes.length, ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.author && ctx.currentUserId && ctx.author.id == ctx.currentUserId);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_6__["RatingStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: [".liked[_ngcontent-%COMP%] {\n    color:red;\n}\n\n.trash-btn[_ngcontent-%COMP%]:hover {\n    background-color: red;\n}\n\n.edit-btn[_ngcontent-%COMP%]:hover {\n    background-color:#0DB9F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlldy9yZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWtlZCB7XG4gICAgY29sb3I6cmVkO1xufVxuXG4udHJhc2gtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5lZGl0LWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMERCOUYyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review',
          templateUrl: './review.component.html',
          styleUrls: ['./review.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, {
        review: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        deleteReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editReview: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/reviews/reviews.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/reviews/reviews.component.ts ***!
    \*********************************************************/

  /*! exports provided: ReviewsComponent */

  /***/
  function srcAppComponentsReviewsReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function () {
      return ReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../review/review.component */
    "./src/app/components/review/review.component.ts");
    /* harmony import */


    var _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../review-form/review-form.component */
    "./src/app/components/review-form/review-form.component.ts");

    function ReviewsComponent_app_review_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-review", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteReview", function ReviewsComponent_app_review_2_Template_app_review_deleteReview_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r321);

          var ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r320.deleteReview($event);
        })("editReview", function ReviewsComponent_app_review_2_Template_app_review_editReview_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r321);

          var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r322.editReview($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var review_r319 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r319);
      }
    }

    function ReviewsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Write a review for ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-review-form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addReview", function ReviewsComponent_div_3_Template_app_review_form_addReview_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324);

          var ctx_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r323.addReview($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r318.doctor == null ? null : ctx_r318.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r318.doctor == null ? null : ctx_r318.doctor.lastname), "");
      }
    }

    var ReviewsComponent =
    /*#__PURE__*/
    function () {
      function ReviewsComponent(reviewService) {
        _classCallCheck(this, ReviewsComponent);

        this.reviewService = reviewService;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.refreshReviews();
        }
      }, {
        key: "addReview",
        value: function addReview(review) {
          var _this6 = this;

          console.log('review : ' + JSON.stringify(review));
          this.reviewService.addReview(this.doctor.id, review).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));

            _this6.refreshReviews();
          });
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(review) {
          var _this7 = this;

          this.reviewService.deleteReview(this.doctor.id, review.id).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res)); // const index = this.reviews.indexOf(review, 0);
            //     if (index > -1) {
            //        this.reviews.splice(index, 1);
            //     }

            _this7.refreshReviews();
          });
        }
      }, {
        key: "editReview",
        value: function editReview(review) {
          var _this8 = this;

          this.reviewService.updateReview(this.doctor.id, review).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));

            _this8.refreshReviews();
          });
        }
      }, {
        key: "refreshReviews",
        value: function refreshReviews() {
          var _this9 = this;

          var _a;

          console.log("doctor: ", JSON.stringify(this.doctor));
          this.refresh.emit("refresh");
          this.reviewService.getReviews((_a = this.doctor) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (res) {
            console.log("doctor reviews : ", JSON.stringify(res));
            _this9.reviews = res;
          });
        }
      }]);

      return ReviewsComponent;
    }();

    ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) {
      return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]));
    };

    ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewsComponent,
      selectors: [["app-reviews"]],
      inputs: {
        doctor: "doctor",
        isPatient: "isPatient"
      },
      outputs: {
        refresh: "refresh"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "comments-list"], [3, "review", "deleteReview", "editReview", 4, "ngFor", "ngForOf"], ["class", "write-review", 4, "ngIf"], [3, "review", "deleteReview", "editReview"], [1, "write-review"], [3, "addReview"]],
      template: function ReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReviewsComponent_app_review_2_Template, 1, 1, "app-review", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReviewsComponent_div_3_Template, 8, 6, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPatient);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _review_review_component__WEBPACK_IMPORTED_MODULE_3__["ReviewComponent"], _review_form_review_form_component__WEBPACK_IMPORTED_MODULE_4__["ReviewFormComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reviews',
          templateUrl: './reviews.component.html',
          styleUrls: ['./reviews.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]
        }];
      }, {
        doctor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isPatient: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        refresh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/search-box/search-box.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/search-box/search-box.component.ts ***!
    \***************************************************************/

  /*! exports provided: SearchBoxComponent */

  /***/
  function srcAppComponentsSearchBoxSearchBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function () {
      return SearchBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchBoxComponent =
    /*#__PURE__*/
    function () {
      function SearchBoxComponent(router) {
        _classCallCheck(this, SearchBoxComponent);

        this.router = router;
      }

      _createClass(SearchBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(city, query) {
          console.log("city: " + city, "query : " + query);
          this.router.navigate(["search"], {
            queryParams: {
              "city": city,
              "query": query
            }
          });
        }
      }]);

      return SearchBoxComponent;
    }();

    SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) {
      return new (t || SearchBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchBoxComponent,
      selectors: [["app-search-box"]],
      decls: 20,
      vars: 0,
      consts: [[1, "search-box", "p-lg-2", "m-lg-2"], [1, "row", "p-2"], [1, "col-lg-2", "col-xs-12"], [1, "form-group", "search-location"], ["type", "text", "placeholder", "Search City", 1, "form-control"], ["city", ""], [1, "form-text"], [1, "col-lg-8", "col-xs-12"], [1, "form-group", "search-info"], ["type", "text", "placeholder", "Search Doctors, Clinics, Hospitals, Diseases Etc", 1, "form-control"], ["query", ""], ["type", "submit", 1, "btn", "btn_primary", "w-100", 3, "click"], [1, "fa", "fa-search"]],
      template: function SearchBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Based on your City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ex : Dental or Sugar Check up etc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBoxComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r370);

            var _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.search(_r368.value, _r369.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-box',
          templateUrl: './search-box.component.html',
          styleUrls: ['./search-box.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_nav_10_li_8_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_nav_10_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_nav_10_li_8_a_1_Template, 2, 0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r293.isLoggedIn);
      }
    }

    function FooterComponent_nav_10_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_nav_10_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Patient Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_nav_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Patients");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search for Doctors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_nav_10_li_8_Template, 2, 1, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_nav_10_li_9_Template, 3, 0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FooterComponent_nav_10_li_10_Template, 3, 0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r289.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r289.isLoggedIn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r289.showPatientMenu);
      }
    }

    function FooterComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DOCTOR = "DOCTOR";
    var PATIENT = "PATIENT";
    var ADMIN = "ADMIN";

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(authService, tokenStorageService) {
        _classCallCheck(this, FooterComponent);

        this.authService = authService;
        this.tokenStorageService = tokenStorageService;
        this.isLoggedIn = false; //showAdminBoard = false;
        //showModeratorBoard = false;

        this.showDoctorMenu = false;
        this.showPatientMenu = false;
        this.showAdminMenu = false;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.isLoggedIn = !!this.tokenStorageService.getToken();
          this.authService.getLoggedInUser.subscribe(function (user) {
            return _this10.updateFooter(user);
          });

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            var userType = this.tokenStorageService.getUserType();
            this.roles = user.roles; //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.showDoctorMenu = userType == DOCTOR;
            this.showPatientMenu = userType == PATIENT;
            this.showAdminMenu = userType == ADMIN;
            console.log("userType " + userType);
            console.log("showDoctorMenu: " + this.showDoctorMenu);
            this.username = user.username;
          }
        }
      }, {
        key: "updateFooter",
        value: function updateFooter(user) {
          console.log("LoggerInUser " + user);
          this.isLoggedIn = true;
          this.loggedInUser = user;
          console.log("logged in user : " + this.loggedInUser);
          this.showDoctorMenu = user.userType == DOCTOR;
          console.log("showDoctorMenu");
          console.log(this.showDoctorMenu);
          this.showPatientMenu = user.userType == PATIENT;
          console.log("this.showPatientMenu");
          console.log(this.showPatientMenu);
          this.showAdminMenu = user.userType == ADMIN;
          console.log("this.showAdminMenu");
          console.log(this.showAdminMenu);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 33,
      vars: 4,
      consts: [[1, "footer", "p-3"], [1, "row"], [1, "col-lg-5", "col-xs-12"], [1, "d-flex", "justify-content-center", "align-items-center", "flex-column"], [1, "col-lg-5", "col-xs-12", "d-flex", "justify-content-around", "text-center"], [4, "ngIf"], ["class", "btn_link", 4, "ngIf"], [1, "btn_link"], ["routerLink", "/search", 1, "text-dark"], [1, "d-flex", "flex-row", "justify-content-center"], [1, "icon", "p-2", "m-2"], [1, "fa", "fa-rss", "rss"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "p-2", "m-2"], ["class", "text-dark", "routerLink", "/patient/login", 4, "ngIf"], ["routerLink", "/patient/login", 1, "text-dark"], ["routerLink", "/patient/signup", 1, "text-dark"], ["routerLink", "/patient/profile", 1, "text-dark"], ["routerLink", "/doctor/login", 1, "text-dark"], ["routerLink", "/doctor/signup", 1, "text-dark"], ["routerLink", "/doctor/appointments", 1, "text-dark"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TeleMed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A place where patients and doctors meet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FooterComponent_nav_10_Template, 11, 3, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FooterComponent_li_16_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FooterComponent_li_17_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FooterComponent_li_18_Template, 3, 0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " @ 2020 TeleMed. All Right Reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDoctorMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDoctorMenu);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["footer[_ngcontent-%COMP%] {\n    background: rgb(144,120,217);\nbackground: linear-gradient(0deg, rgba(144,120,217,1) 0%, rgba(255,83,88,1) 88%);\n}\n\n.icon[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n\n.btn_link[_ngcontent-%COMP%]{\n    padding: 5px;\n    margin: 0 1px;\n    color:rgb(53, 48, 48);\n    border-radius: 50px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.btn_link[_ngcontent-%COMP%]:hover {\n    background-color:rgb(253, 155, 159);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDRCQUE0QjtBQUNoQyxnRkFBZ0Y7QUFDaEY7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDE0NCwxMjAsMjE3KTtcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0NCwxMjAsMjE3LDEpIDAlLCByZ2JhKDI1NSw4Myw4OCwxKSA4OCUpO1xufVxuXG4uaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuX2xpbmt7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbjogMCAxcHg7XG4gICAgY29sb3I6cmdiKDUzLCA0OCwgNDgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bl9saW5rOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTMsIDE1NSwgMTU5KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/patient/signup"];
    };

    var _c1 = function _c1() {
      return ["/patient/login"];
    };

    function HeaderComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_a_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276);

          var ctx_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r275.isMenuCollapsed = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276);

          var ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r277.isMenuCollapsed = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r271.isMenuCollapsed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
      }
    }

    function HeaderComponent_div_6_li_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_6_li_9_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r280);

          var ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r279.isMenuCollapsed = true;
          return ctx_r279.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return ["/patient/appointments"];
    };

    var _c3 = function _c3() {
      return ["/search"];
    };

    function HeaderComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_6_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r282);

          var ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r281.isMenuCollapsed = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Appointements");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_6_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r282);

          var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r283.isMenuCollapsed = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_div_6_li_9_Template, 3, 0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r272.isMenuCollapsed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r272.isLoggedIn);
      }
    }

    function HeaderComponent_div_7_li_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_li_6_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r286);

          var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          ctx_r285.isMenuCollapsed = true;
          return ctx_r285.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c4 = function _c4() {
      return ["doctor/appointments"];
    };

    function HeaderComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r288);

          var ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r287.isMenuCollapsed = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_7_li_6_Template, 3, 0, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r273.isMenuCollapsed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r273.isLoggedIn);
      }
    }

    function HeaderComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
      }

      if (rf & 2) {
        var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r274.isMenuCollapsed);
      }
    }

    var DOCTOR = "DOCTOR";
    var PATIENT = "PATIENT";
    var ADMIN = "ADMIN";

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(tokenStorageService, authService, router) {
        _classCallCheck(this, HeaderComponent);

        this.tokenStorageService = tokenStorageService;
        this.authService = authService;
        this.router = router; //keep track of collapse state

        this.isMenuCollapsed = true;
        this.isLoggedIn = false; //showAdminBoard = false;
        //showModeratorBoard = false;

        this.showDoctorMenu = false;
        this.showPatientMenu = false;
        this.showAdminMenu = false;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.isLoggedIn = !!this.tokenStorageService.getToken();
          this.authService.getLoggedInUser.subscribe(function (user) {
            return _this11.updateHeader(user);
          });

          if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            var userType = this.tokenStorageService.getUserType();
            this.roles = user.roles; //this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.showDoctorMenu = userType == DOCTOR;
            this.showPatientMenu = userType == PATIENT;
            this.showAdminMenu = userType == ADMIN;
            console.log("userType " + userType);
            console.log("showDoctorMenu: " + this.showDoctorMenu);
            this.username = user.username;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut(); //window.location.reload();

          this.router.navigate(["home"]).then(function () {
            window.location.reload();
          });
        }
      }, {
        key: "updateHeader",
        value: function updateHeader(user) {
          console.log("LoggerInUser ", user);
          this.isLoggedIn = true;
          this.loggedInUser = user;
          console.log("logged in user : " + this.loggedInUser);
          this.showDoctorMenu = user.userType == DOCTOR;
          console.log("showDoctorMenu");
          console.log(this.showDoctorMenu);
          this.showPatientMenu = user.userType == PATIENT;
          console.log("this.showPatientMenu");
          console.log(this.showPatientMenu);
          this.showAdminMenu = user.userType == ADMIN;
          console.log("this.showAdminMenu");
          console.log(this.showAdminMenu);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 9,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-sm"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", "primary-bg", 3, "click"], ["class", "collapse navbar-collapse", 3, "ngbCollapse", 4, "ngIf"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "text-center", "w-100"], [1, "flex-fill"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "text_primary", 3, "routerLink", "click"], ["routerLinkActive", "active", 1, "nav-item", "btn_primary"], [1, "nav-link", 3, "routerLink", "click"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", "text_grey", 3, "routerLink", "click"], ["class", "nav-item btn_primary", "routerLinkActive", "active", 4, "ngIf"], ["href", "#", 1, "nav-link", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TeleMed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.isMenuCollapsed = !ctx.isMenuCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u2630 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 9, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 10, 6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 7, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_8_Template, 1, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPatientMenu && !ctx.showDoctorMenu && !ctx.showAdminMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPatientMenu && !ctx.showDoctorMenu && !ctx.showAdminMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPatientMenu && ctx.showDoctorMenu && !ctx.showAdminMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showPatientMenu && !ctx.showDoctorMenu && ctx.showAdminMenu);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: white;\n    color:black;\n    padding: 1rem;\n    margin-bottom: 10px;\n    box-shadow: 0px 2px 4px -1px rgba(171,158,171,0.77);\n}\n\n.navbar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    color: inherit;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    margin: 0 5px  ;\n    border-radius: 25px;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n    box-shadow: 0px 2px 4px -1px rgba(171,158,171,0.77);\n}\n\n[_ngcontent-%COMP%]:root {\n    --main-bg-color: red;\n}\n\n.active[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    color:black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMTcxLDE1OCwxNzEsMC43Nyk7XG59XG5cbi5uYXZiYXIgKiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5uYXYtaXRlbSB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbjogMCA1cHggIDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgxNzEsMTU4LDE3MSwwLjc3KTtcbn1cblxuOnJvb3Qge1xuICAgIC0tbWFpbi1iZy1jb2xvcjogcmVkO1xufVxuLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/Appointment.ts":
  /*!***************************************!*\
    !*** ./src/app/models/Appointment.ts ***!
    \***************************************/

  /*! exports provided: Appointment */

  /***/
  function srcAppModelsAppointmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Appointment", function () {
      return Appointment;
    });

    var Appointment = function Appointment() {
      _classCallCheck(this, Appointment);
    };
    /***/

  },

  /***/
  "./src/app/models/CallState.ts":
  /*!*************************************!*\
    !*** ./src/app/models/CallState.ts ***!
    \*************************************/

  /*! exports provided: CallState */

  /***/
  function srcAppModelsCallStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CallState", function () {
      return CallState;
    });

    var CallState;

    (function (CallState) {
      CallState[CallState["Ongoing"] = 0] = "Ongoing";
      CallState[CallState["Denied"] = 1] = "Denied";
      CallState[CallState["Ended"] = 2] = "Ended";
      CallState[CallState["Ringing"] = 3] = "Ringing";
      CallState[CallState["Canceled"] = 4] = "Canceled";
      CallState[CallState["Idle"] = 5] = "Idle";
    })(CallState || (CallState = {}));
    /***/

  },

  /***/
  "./src/app/models/Clinic.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Clinic.ts ***!
    \**********************************/

  /*! exports provided: Clinic */

  /***/
  function srcAppModelsClinicTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Clinic", function () {
      return Clinic;
    });
    /* harmony import */


    var _ClinicLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ClinicLocation */
    "./src/app/models/ClinicLocation.ts");

    var Clinic =
    /*#__PURE__*/
    function () {
      function Clinic() {
        _classCallCheck(this, Clinic);
      }

      _createClass(Clinic, null, [{
        key: "empty",
        value: function empty() {
          return {
            name: "",
            description: "",
            services: [],
            specialities: [],
            city: "",
            country: "",
            address: "",
            minPrice: 0,
            maxPrice: 0,
            consultPrice: 0,
            location: new _ClinicLocation__WEBPACK_IMPORTED_MODULE_0__["ClinicLocation"](0, 0, 2)
          };
        }
      }]);

      return Clinic;
    }();
    /***/

  },

  /***/
  "./src/app/models/ClinicLocation.ts":
  /*!******************************************!*\
    !*** ./src/app/models/ClinicLocation.ts ***!
    \******************************************/

  /*! exports provided: ClinicLocation */

  /***/
  function srcAppModelsClinicLocationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicLocation", function () {
      return ClinicLocation;
    });

    var ClinicLocation = function ClinicLocation(latitude, longitude, zoom) {
      _classCallCheck(this, ClinicLocation);

      this.latitude = latitude;
      this.longitude = longitude;
      this.zoom = zoom;
    };
    /***/

  },

  /***/
  "./src/app/models/Contact.ts":
  /*!***********************************!*\
    !*** ./src/app/models/Contact.ts ***!
    \***********************************/

  /*! exports provided: Contact */

  /***/
  function srcAppModelsContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });

    var Contact = function Contact() {
      _classCallCheck(this, Contact);
    };
    /***/

  },

  /***/
  "./src/app/models/Like.ts":
  /*!********************************!*\
    !*** ./src/app/models/Like.ts ***!
    \********************************/

  /*! exports provided: Like */

  /***/
  function srcAppModelsLikeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Like", function () {
      return Like;
    });

    var Like = function Like(authorId) {
      _classCallCheck(this, Like);

      this.authorId = authorId;
    };
    /***/

  },

  /***/
  "./src/app/models/Password.ts":
  /*!************************************!*\
    !*** ./src/app/models/Password.ts ***!
    \************************************/

  /*! exports provided: Password */

  /***/
  function srcAppModelsPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Password", function () {
      return Password;
    });

    var Password = function Password(oldPassword, newPassword) {
      _classCallCheck(this, Password);

      this.oldPassword = oldPassword;
      this.newPassword = newPassword;
    };
    /***/

  },

  /***/
  "./src/app/models/Review.ts":
  /*!**********************************!*\
    !*** ./src/app/models/Review.ts ***!
    \**********************************/

  /*! exports provided: Review */

  /***/
  function srcAppModelsReviewTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Review", function () {
      return Review;
    });

    var Review = function Review(content, likes, rating, authorId) {
      _classCallCheck(this, Review);

      this.content = content;
      this.likes = likes;
      this.rating = rating;
      this.patientId = authorId;
    };
    /***/

  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 7,
      vars: 0,
      consts: [[1, "content"], [1, "container"], [1, "row", "d-flex", "justify-content-center"], [1, "col-8"], [1, "about"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AirDoc est une application marocaine fond\xE9e en 2020 qui propose un service de gestion en ligne des consultations pour les professionnels de sant\xE9 et un service de prise de rendez-vous en ligne pour les patients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%] {\n    height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcbiAgICBoZWlnaHQ6IDUwdmg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin/admin-login/admin-login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/admin/admin-login/admin-login.component.ts ***!
    \******************************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppPagesAdminAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AdminLoginComponent_form_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r306.errorMessage, " ");
      }
    }

    function AdminLoginComponent_form_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AdminLoginComponent_form_14_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLoginComponent_form_14_div_15_div_1_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminLoginComponent_form_14_div_15_div_2_Template, 2, 0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r309.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r309.errors.minlength);
      }
    }

    function AdminLoginComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AdminLoginComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314);

          var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r305.form.valid && ctx_r313.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminLoginComponent_form_14_div_3_Template, 2, 1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_form_14_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314);

          var ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r315.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLoginComponent_form_14_div_9_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19, 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminLoginComponent_form_14_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314);

          var ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r316.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdminLoginComponent_form_14_div_15_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r305.submitted && ctx_r304.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r304.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r305.submitted && _r307.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r304.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r305.submitted && _r309.invalid);
      }
    }

    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, AdminLoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "admin/profile";
      }

      _createClass(AdminLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this12.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this12.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          this.authService.adminLogin(this.form).subscribe(function (user) {
            _this13.tokenStorage.saveToken(user.accessToken);

            _this13.tokenStorage.saveUser(user);

            _this13.tokenStorage.saveUserType(user.userType);

            _this13.isLoginFailed = false;
            _this13.isLoggedIn = true;
            _this13.roles = _this13.tokenStorage.getUser().roles;

            _this13.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this13.tokenStorage.getUser());
            console.log('return to ' + _this13.retUrl);

            if (_this13.retUrl != null) {
              _this13.router.navigate([_this13.retUrl]);
            } else {
              _this13.router.navigate(['admin/profile']);
            }
          }, function (err) {
            _this13.errorMessage = err.error.message;
            _this13.isLoginFailed = true;
          });
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) {
      return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLoginComponent,
      selectors: [["app-admin-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "AirDoc Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", "login-btn"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function AdminLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminLoginComponent_form_14_Template, 21, 5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-login',
          templateUrl: './admin-login.component.html',
          styleUrls: ['./admin-login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin/admin-profile/admin-profile.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/admin/admin-profile/admin-profile.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AdminProfileComponent */

  /***/
  function srcAppPagesAdminAdminProfileAdminProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminProfileComponent", function () {
      return AdminProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminProfileComponent =
    /*#__PURE__*/
    function () {
      function AdminProfileComponent() {
        _classCallCheck(this, AdminProfileComponent);
      }

      _createClass(AdminProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminProfileComponent;
    }();

    AdminProfileComponent.ɵfac = function AdminProfileComponent_Factory(t) {
      return new (t || AdminProfileComponent)();
    };

    AdminProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminProfileComponent,
      selectors: [["app-admin-profile"]],
      decls: 2,
      vars: 0,
      template: function AdminProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-profile works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXByb2ZpbGUvYWRtaW4tcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-profile',
          templateUrl: './admin-profile.component.html',
          styleUrls: ['./admin-profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/booking/booking.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/booking/booking.component.ts ***!
    \****************************************************/

  /*! exports provided: BookingComponent */

  /***/
  function srcAppPagesBookingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingComponent", function () {
      return BookingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Appointment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Appointment */
    "./src/app/models/Appointment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BookingComponent_div_17_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r228.doctorAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r228.doctorAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function BookingComponent_div_17_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function BookingComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookingComponent_div_17_a_1_Template, 2, 2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BookingComponent_div_17_a_2_Template, 2, 0, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r226.doctorAvatar.length > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r226.doctorAvatar.length < 100);
      }
    }

    function BookingComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r227.successMessage, " ");
      }
    }

    var BookingComponent =
    /*#__PURE__*/
    function () {
      function BookingComponent(route, //private location:Location,
      router, authService, doctorService, patientService, appointmentService) {
        _classCallCheck(this, BookingComponent);

        this.route = route;
        this.router = router;
        this.authService = authService;
        this.doctorService = doctorService;
        this.patientService = patientService;
        this.appointmentService = appointmentService;
        this.appointment = new src_app_models_Appointment__WEBPACK_IMPORTED_MODULE_1__["Appointment"](); // appointmentDate:string;

        this.successMessage = "";
      }

      _createClass(BookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.route.params.subscribe(function (params) {
            params['id'];

            _this14.doctorService.getById(params['id']).subscribe(function (res) {
              _this14.doctor = res;
              _this14.appointment.doctorId = _this14.doctor.id;
              console.log("Doctor: " + _this14.doctor.id);
            });

            _this14.doctorService.getAvatar(params['id']).subscribe(function (avatar) {
              var _a, _b;

              _this14.doctorAvatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
          this.authService.getCurrentUser().subscribe(function (user) {
            _this14.patientService.getById(user.id).subscribe(function (res) {
              _this14.patient = res;
              _this14.appointment.patientId = _this14.patient.id;
              console.log("Patient: " + _this14.patient.id);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this15 = this;

          // console.log("date : ", this.appointmentDate);
          // console.log(JSON.stringify(this.appointment));
          // const bookingDate = new Date(Date.now());
          var bookingDate = new Date(); //TODO cela devrait être fait à back-end

          this.appointment.state = "PENDING"; // this.appointment.appointmentDate = appDate.toISOString();

          this.appointment.bookingDate = bookingDate.toISOString();
          console.log("iso date booking", bookingDate.toISOString());
          console.log("appoin", JSON.stringify(this.appointment));
          this.appointmentService.add(this.appointment).subscribe(function (res) {
            console.log("appointment added", JSON.stringify(res)); // this.appointmentDate = "";

            _this15.appointment.description = "";
            _this15.successMessage = "Appointments Sent";
            setTimeout(function () {
              _this15.successMessage = '';
            }, 3000);
          }); //this.location.back();
          //this.router.navigate(["home"]);
        }
      }]);

      return BookingComponent;
    }();

    BookingComponent.ɵfac = function BookingComponent_Factory(t) {
      return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]));
    };

    BookingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookingComponent,
      selectors: [["app-booking"]],
      decls: 36,
      vars: 12,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mb-2"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], ["class", "col-12", 4, "ngIf"], [1, "text_secondary", 3, "routerLink"], [3, "currentRate", "readonly"], [1, "card", "mb-3"], [1, "col-md-12"], [1, "form-group"], [1, "control-label"], ["rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 1, "btn", "btn_primary", 3, "click"], ["class", "alert alert-success p-2", 4, "ngIf"], ["data-fancybox", "gallery", 3, "href", 4, "ngIf"], ["data-fancybox", "gallery", "href", "assets/img/default-patient.jpeg", 4, "ngIf"], ["data-fancybox", "gallery", 3, "href"], ["alt", "Doctor Image", 1, "img-fluid", "img-thumbnail", "doctor-img", 3, "src"], ["data-fancybox", "gallery", "href", "assets/img/default-patient.jpeg"], ["src", "assets/img/default-doctor.png", "alt", "Doctor Image", 1, "img-fluid", "img-thumbnail", "doctor-img"], [1, "alert", "alert-success", "p-2"]],
      template: function BookingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Booking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BookingComponent_div_17_Template, 3, 2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-rating-star", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BookingComponent_Template_textarea_ngModelChange_32_listener($event) {
            return ctx.appointment.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BookingComponent_Template_input_click_34_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BookingComponent_div_35_Template, 4, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 10, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx.doctor == null ? null : ctx.doctor.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appointment.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_8__["RatingStarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]],
      styles: [".doctor-img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3Rvci1pbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-booking',
          templateUrl: './booking.component.html',
          styleUrls: ['./booking.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
        }, {
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _models_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../models/Contact */
    "./src/app/models/Contact.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/contact.service */
    "./src/app/services/contact.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactComponent_div_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_12_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors.required);
      }
    }

    function ContactComponent_div_16_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_16_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email must be a valid email address.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_16_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContactComponent_div_16_div_2_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.email);
      }
    }

    function ContactComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Message is required.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ContactComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContactComponent_div_22_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors.required);
      }
    }

    function ContactComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Success!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.successMessage, " ");
      }
    }

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent(contactService, router) {
        _classCallCheck(this, ContactComponent);

        this.contactService = contactService;
        this.router = router;
        this.contact = new _models_Contact__WEBPACK_IMPORTED_MODULE_0__["Contact"]();
        this.submitted = false;
        this.successMessage = '';
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this16 = this;

          this.submitted = true;
          console.log("submiting contact Contact ", JSON.stringify(this.contact));
          this.contactService.addContact(this.contact).subscribe(function (res) {
            console.log("submiting contact Contact ", JSON.stringify(res));
            _this16.successMessage = "Message Sent";
            setTimeout(function () {
              _this16.successMessage = '';
            }, 3000);
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 27,
      vars: 9,
      consts: [[1, "cmspage", "mtb-40"], [1, "container"], [1, "page-desc"], [1, "row", "justify-content-center"], [1, "col-md-8"], [3, "ngSubmit"], ["addContact", "ngForm"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "placeholder", "Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "error", 4, "ngIf"], ["type", "text", "name", "email", "id", "email", "placeholder", "E-Mail", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "name", "phone", "id", "phone", "placeholder", "Phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "message", "id", "message", "rows", "5", "placeholder", "Message", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["message", "ngModel"], [1, "btn", "btn-success", 3, "disabled"], ["class", "alert alert-success", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "alert", "alert-success"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            ctx.onSubmit();
            return _r0.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.contact.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ContactComponent_div_12_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.contact.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ContactComponent_div_16_Template, 3, 2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.contact.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "textarea", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_20_listener($event) {
            return ctx.contact.message = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ContactComponent_div_22_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ContactComponent_div_26_Template, 4, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.invalid && (_r3.dirty || _r3.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contact.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.invalid && (_r5.dirty || _r5.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r0.form.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"]],
      styles: [".ng-valid[required][_ngcontent-%COMP%], .ng-valid.required[_ngcontent-%COMP%] {border: 1px solid #42A948;}\n\n.error[_ngcontent-%COMP%] {color:#ff0000;}\n\n.success[_ngcontent-%COMP%] { color:green; }\n\n.contact-message[_ngcontent-%COMP%] { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTs7QUFFYix5Q0FBeUMseUJBQXlCLENBQUM7O0FBQ25FLFFBQVEsYUFBYSxDQUFDOztBQUN0QixXQUFXLFdBQVcsRUFBRTs7QUFDeEIsbUJBQW1CLGtCQUFrQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKnZhbGlkYXRpb24qL1xuXG4ubmctdmFsaWRbcmVxdWlyZWRdLCAubmctdmFsaWQucmVxdWlyZWQge2JvcmRlcjogMXB4IHNvbGlkICM0MkE5NDg7fVxuLmVycm9yIHtjb2xvcjojZmYwMDAwO31cbi5zdWNjZXNzIHsgY29sb3I6Z3JlZW47IH1cbi5jb250YWN0LW1lc3NhZ2UgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [{
          type: _services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/clinic-settings/clinic-settings.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/doctor/clinic-settings/clinic-settings.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ClinicSettingsComponent */

  /***/
  function srcAppPagesDoctorClinicSettingsClinicSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClinicSettingsComponent", function () {
      return ClinicSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Clinic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Clinic */
    "./src/app/models/Clinic.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function ClinicSettingsComponent_div_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r113.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r113.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r113.uploadProgress, "% ");
      }
    }

    function ClinicSettingsComponent_div_64_Template(rf, ctx) {
      if (rf & 1) {
        var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicSettingsComponent_div_64_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119);

          var clinicPhoto_r117 = ctx.$implicit;

          var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r118.deleteClinicPhoto(clinicPhoto_r117 == null ? null : clinicPhoto_r117.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicPhoto_r117 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", clinicPhoto_r117 == null ? null : clinicPhoto_r117.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ClinicSettingsComponent_div_79_Template(rf, ctx) {
      if (rf & 1) {
        var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clinic Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "agm-map", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("zoomChange", function ClinicSettingsComponent_div_79_Template_agm_map_zoomChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r120.zoomChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "agm-marker", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragEnd", function ClinicSettingsComponent_div_79_Template_agm_marker_dragEnd_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121);

          var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r122.dragEnd($event.coords.lat, $event.coords.lng);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r115.clinic.location.latitude)("longitude", ctx_r115.clinic.location.longitude)("zoom", ctx_r115.clinic.location.zoom);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx_r115.clinic.location.latitude)("longitude", ctx_r115.clinic.location.longitude)("markerDraggable", true);
      }
    }

    function ClinicSettingsComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Success!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r116.successMessage, " ");
      }
    }

    var ClinicSettingsComponent =
    /*#__PURE__*/
    function () {
      function ClinicSettingsComponent(authService, doctorService) {
        _classCallCheck(this, ClinicSettingsComponent);

        this.authService = authService;
        this.doctorService = doctorService;
        this.successMessage = '';
      }

      _createClass(ClinicSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this17.doctorService.getAvatar(res.id).subscribe(function (avatar) {
              var _a, _b;

              _this17.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this17.doctorService.getById(res.id).subscribe(function (doctor) {
              _this17.doctor = doctor;
            });

            _this17.doctorService.getClinic(res.id).subscribe(function (clinic) {
              _this17.clinic = clinic;
              console.log("Clinic : : ", JSON.stringify(_this17.clinic));

              if (!!!_this17.clinic) {
                console.log("empty Clinic: ", JSON.stringify(_this17.clinic));
                _this17.clinic = src_app_models_Clinic__WEBPACK_IMPORTED_MODULE_1__["Clinic"].empty();
              }

              _this17.services = _this17.clinic.services.join(', ');
              _this17.specialities = _this17.clinic.specialities.join(', ');
            });

            _this17.doctorService.getClinicPhotos(res.id).subscribe(function (photos) {
              photos = photos.filter(function (photo) {
                console.log("photo ", photo);
                return photo !== null;
              });
              _this17.clinicPhotos = photos.map(function (photo) {
                return {
                  "id": photo.id,
                  "image": 'data:image/jpeg;base64,' + photo.image.data
                };
              });
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this18 = this;

          console.log("services: ", this.services.split(','));
          console.log("services: ", this.specialities.split(','));
          this.clinic.services = this.services.split(',');
          this.clinic.specialities = this.specialities.split(',');
          console.log("clinic new name: ", JSON.stringify(this.clinic));
          this.doctorService.updateClinic(this.doctor.id, this.clinic).subscribe(function (clinic) {
            _this18.clinic = clinic;
            console.log("clinic: ", JSON.stringify(_this18.clinic));
            _this18.successMessage = "Change Saved";
            setTimeout(function () {
              _this18.successMessage = '';
            }, 3000);
          });
        }
      }, {
        key: "deleteClinicPhoto",
        value: function deleteClinicPhoto(photoId) {
          var _this19 = this;

          console.log("Photo ID: ", photoId);
          this.doctorService.deleteClinicPhoto(this.doctor.id, photoId).subscribe(function (res) {
            console.log("photo Deleted", JSON.stringify(res));

            _this19.doctorService.getClinicPhotos(_this19.doctor.id).subscribe(function (photos) {
              console.log(JSON.stringify(photos)); // photos = photos.filter((photo, index, photos) => {
              //   console.log("photo ", photo);
              //   if(photo === null){
              //     console.log("photo is null");
              //     photos = photos.slice(index, 1);
              //   };
              // });

              photos = photos.filter(function (photo) {
                console.log("photo ", photo);

                if (photo === null) {
                  console.log("photo is null");
                  return false;
                }

                ;
                return true;
              });
              console.log("photos after filter: ", JSON.stringify(photos));
              _this19.clinicPhotos = photos.map(function (photo) {
                console.log("photo : ", JSON.stringify(photo));
                return {
                  "id": photo.id,
                  "image": 'data:image/jpeg;base64,' + photo.image.data
                };
              });
            });
          });
        }
      }, {
        key: "uploadClinicPhoto",
        value: function uploadClinicPhoto(event) {
          var _this20 = this;

          this.currentSelectedPhoto = event.target.files.item(0);
          this.doctorService.uploadClinicPhoto(this.doctor.id, this.currentSelectedPhoto).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) {
              _this20.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              _this20.doctorService.getClinicPhotos(_this20.doctor.id).subscribe(function (photos) {
                _this20.clinicPhotos = photos.map(function (photo) {
                  return {
                    "id": photo.id,
                    "image": 'data:image/jpeg;base64,' + photo.image.data
                  };
                });
                _this20.uploadProgress = 0;
                _this20.currentSelectedPhoto = undefined;
              });
            }
          }, function (err) {
            _this20.uploadProgress = 0;
            _this20.uploadErrorMessage = 'Could not upload the Photo!';
            _this20.currentSelectedPhoto = undefined;
          });
        }
      }, {
        key: "dragEnd",
        value: function dragEnd(latitude, longitude) {
          console.log("latitude: ", latitude, "longitude: ", longitude);
          this.clinic.location.latitude = latitude;
          this.clinic.location.longitude = longitude;
        }
      }, {
        key: "zoomChange",
        value: function zoomChange(zoom) {
          console.log("zoom: ", zoom);
          this.clinic.location.zoom = zoom;
        }
      }]);

      return ClinicSettingsComponent;
    }();

    ClinicSettingsComponent.ɵfac = function ClinicSettingsComponent_Factory(t) {
      return new (t || ClinicSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]));
    };

    ClinicSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClinicSettingsComponent,
      selectors: [["app-clinic-settings"]],
      decls: 84,
      vars: 24,
      consts: [[1, "container-fluid", "mb-3", "m-2"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "form-row"], [1, "col-md-6"], [1, "form-group"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-md-12"], ["rows", "5", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "col-md-4"], ["type", "number", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["class", "progress", 4, "ngIf"], [1, "text-center"], [1, "add-photo-btn"], [1, "fa", "fa-upload"], ["type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [1, "upload-wrap"], ["class", "upload-images border", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-5"], ["class", "col-md-12", 4, "ngIf"], [1, "m-3"], ["type", "submit", 1, "btn", "btn_secondary", 3, "click"], ["class", "alert alert-success", 4, "ngIf"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], [1, "upload-images", "border"], ["alt", "Upload Image", 3, "src"], [1, "btn", "btn-icon", "btn-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash"], [3, "latitude", "longitude", "zoom", "zoomChange"], [3, "latitude", "longitude", "markerDraggable", "dragEnd"], [1, "alert", "alert-success"]],
      template: function ClinicSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-doctor-side-bar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Clinic Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clinic Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.clinic.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Clinic Full Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.clinic.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.clinic.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.clinic.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_textarea_ngModelChange_34_listener($event) {
            return ctx.clinic.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Min Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.clinic.minPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Max Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_44_listener($event) {
            return ctx.clinic.maxPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Consulte Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.clinic.consultPrice = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Clinic Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ClinicSettingsComponent_div_54_Template, 3, 5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Upload Photo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ClinicSettingsComponent_Template_input_change_60_listener($event) {
            return ctx.uploadClinicPhoto($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Allowed JPG, GIF or PNG. Max size of 2MB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ClinicSettingsComponent_div_64_Template, 4, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_69_listener($event) {
            return ctx.services = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Note : Type , to enter to multiple Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Specialisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClinicSettingsComponent_Template_input_ngModelChange_76_listener($event) {
            return ctx.specialities = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Note : Type , to enter to multiple Specializations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, ClinicSettingsComponent_div_79_Template, 6, 6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicSettingsComponent_Template_button_click_81_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Save Changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ClinicSettingsComponent_div_83_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clinic == null ? null : ctx.clinic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.address)("ngModel", ctx.clinic == null ? null : ctx.clinic.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.country)("ngModel", ctx.clinic == null ? null : ctx.clinic.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.city)("ngModel", ctx.clinic == null ? null : ctx.clinic.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.description)("ngModel", ctx.clinic == null ? null : ctx.clinic.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.minPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.minPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.maxPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.maxPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.clinic == null ? null : ctx.clinic.consultPrice)("ngModel", ctx.clinic == null ? null : ctx.clinic.consultPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentSelectedPhoto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.services)("ngModel", ctx.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.specialities)("ngModel", ctx.specialities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clinic == null ? null : ctx.clinic.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmMarker"]],
      styles: ["agm-map[_ngcontent-%COMP%] { \n    height: 400px;  \n}\n\n.add-photo-btn[_ngcontent-%COMP%] {\n    background-color: #FF5358;\n    border-radius: 50px;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 13px;\n    font-weight: 600;\n    margin: 0 auto;\n    padding: 10px 15px;\n    position: relative;\n    transition: .3s;\n    text-align: center;\n    width: 220px;\n}\n\n.add-photo-btn[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\n    bottom: 0;\n    cursor: pointer;\n    filter: alpha(opacity=0);\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 220px;\n}\n\n.upload-wrap[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.upload-images[_ngcontent-%COMP%] {\n    position: relative;\n}\n\n.upload-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    height: 80px;\n    width: auto;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n    align-items: center;\n    text-align: center;\n    position: absolute;\n    padding: 0;\n    font-size: 10px;\n    width: 20px;\n    height: 20px;\n    display: inline-flex;\n    right: 3px;\n    top: 3px;\n    justify-content: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2NsaW5pYy1zZXR0aW5ncy9jbGluaWMtc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWEsRUFBRSx1QkFBdUI7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsT0FBTztJQUNQLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLFlBQVk7QUFDaEI7O0FBRUE7SUFHSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFHSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBR1osb0JBQW9CO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N0b3IvY2xpbmljLXNldHRpbmdzL2NsaW5pYy1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7IFxuICAgIGhlaWdodDogNDAwcHg7IC8qIGhlaWdodCBpcyByZXF1aXJlZCAqLyBcbn1cblxuLmFkZC1waG90by1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjUzNTg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAyMjBweDtcbn1cblxuLmFkZC1waG90by1idG4gaW5wdXQudXBsb2FkIHtcbiAgICBib3R0b206IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMjIwcHg7XG59XG5cbi51cGxvYWQtd3JhcCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi51cGxvYWQtaW1hZ2VzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udXBsb2FkLWltYWdlcyBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5idG4taWNvbiB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICByaWdodDogM3B4O1xuICAgIHRvcDogM3B4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clinic-settings',
          templateUrl: './clinic-settings.component.html',
          styleUrls: ['./clinic-settings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-appointment/doctor-appointment.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-appointment/doctor-appointment.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: DoctorAppointmentComponent */

  /***/
  function srcAppPagesDoctorDoctorAppointmentDoctorAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAppointmentComponent", function () {
      return DoctorAppointmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DoctorAppointmentComponent_div_2_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
      }

      if (rf & 2) {
        var ctx_r349 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r349.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorAppointmentComponent_div_2_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
      }
    }

    function DoctorAppointmentComponent_div_2_h6_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r351.patient.email, "");
      }
    }

    function DoctorAppointmentComponent_div_2_h6_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r352.patient.phone, "");
      }
    }

    function DoctorAppointmentComponent_div_2_h6_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Appointement : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r353.appointment.appointmentDate, "short", "locale"), "");
      }
    }

    function DoctorAppointmentComponent_div_2_h6_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Booking Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, ctx_r354.appointment.bookingDate, "short", "locale"), "");
      }
    }

    function DoctorAppointmentComponent_div_2_div_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorAppointmentComponent_div_2_div_23_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r362);

          var ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r361.appointment.appointmentDate = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r355.appointment.appointmentDate);
      }
    }

    function DoctorAppointmentComponent_div_2_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Appointement ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/chat/video/", ctx_r356.patient.id, "");
      }
    }

    function DoctorAppointmentComponent_div_2_a_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorAppointmentComponent_div_2_a_27_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364);

          var ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r363.acceptAppointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Accept ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorAppointmentComponent_div_2_a_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorAppointmentComponent_div_2_a_28_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r366);

          var ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r365.cancelAppointment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorAppointmentComponent_div_2_a_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r359.appointment.state, " ");
      }
    }

    function DoctorAppointmentComponent_div_2_a_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r360.appointment.state, " ");
      }
    }

    function DoctorAppointmentComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorAppointmentComponent_div_2_img_3_Template, 1, 1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DoctorAppointmentComponent_div_2_img_4_Template, 1, 0, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DoctorAppointmentComponent_div_2_h6_16_Template, 3, 1, "h6", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DoctorAppointmentComponent_div_2_h6_17_Template, 3, 1, "h6", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 0606060606");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DoctorAppointmentComponent_div_2_h6_21_Template, 4, 5, "h6", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DoctorAppointmentComponent_div_2_h6_22_Template, 4, 5, "h6", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DoctorAppointmentComponent_div_2_div_23_Template, 2, 1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DoctorAppointmentComponent_div_2_a_26_Template, 3, 1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DoctorAppointmentComponent_div_2_a_27_Template, 3, 0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DoctorAppointmentComponent_div_2_a_28_Template, 3, 0, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DoctorAppointmentComponent_div_2_a_29_Template, 3, 1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DoctorAppointmentComponent_div_2_a_30_Template, 3, 1, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/patient/profile/", ctx_r348.patient.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r348.avatar == null ? null : ctx_r348.avatar.length) > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r348.avatar == null ? null : ctx_r348.avatar.length) < 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/patient/profile/", ctx_r348.patient.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, ctx_r348.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 19, ctx_r348.patient.lastname), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r348.appointment.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.patient == null ? null : ctx_r348.patient.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.patient == null ? null : ctx_r348.patient.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.appointmentDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.bookingDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "PENDING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "ACCEPTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "PENDING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "PENDING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "ACCEPTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r348.appointment.state == "CANCELED");
      }
    }

    var DoctorAppointmentComponent =
    /*#__PURE__*/
    function () {
      function DoctorAppointmentComponent(appointmentService, patientService) {
        _classCallCheck(this, DoctorAppointmentComponent);

        this.appointmentService = appointmentService;
        this.patientService = patientService;
      }

      _createClass(DoctorAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          // if (this.appointment.appointmentDate){
          //   this.appointmentDate = new Date(this.appointment.appointmentDate);
          // }
          // if(this.appointment.bookingDate){
          //   this.bookingDate = new Date(this.appointment.bookingDate);
          // }
          this.patientService.getById(this.appointment.patientId).subscribe(function (res) {
            _this21.patient = res;
          });
          this.patientService.getAvatar(this.appointment.patientId).subscribe(function (avatar) {
            var _a, _b;

            _this21.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
          });
        }
      }, {
        key: "acceptAppointment",
        value: function acceptAppointment() {
          var _this22 = this;

          console.log("appointement date", this.appointment.appointmentDate);

          if (!this.appointment.appointmentDate) {
            return;
          } // this.appointment.appointmentDate = this.appointmentDate.toISOString();


          this.appointment.appointmentDate = new Date(this.appointment.appointmentDate).toISOString(); //fix zone problem

          this.appointment.state = "ACCEPTED";
          this.appointmentService.update(this.appointment).subscribe(function (res) {
            _this22.appointment = res;
          });
        }
      }, {
        key: "cancelAppointment",
        value: function cancelAppointment() {
          var _this23 = this;

          this.appointment.state = "CANCELED";
          this.appointmentService.update(this.appointment).subscribe(function (res) {
            _this23.appointment = res;
          });
        }
      }, {
        key: "viewAppoitment",
        value: function viewAppoitment() {// navigate to appoitment page;
        }
      }]);

      return DoctorAppointmentComponent;
    }();

    DoctorAppointmentComponent.ɵfac = function DoctorAppointmentComponent_Factory(t) {
      return new (t || DoctorAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]));
    };

    DoctorAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorAppointmentComponent,
      selectors: [["app-doctor-appointment"]],
      inputs: {
        appointment: "appointment"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "card"], [1, "card-body"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-3", "col-sm-12"], [3, "routerLink"], ["class", "img-fluid rounded patient-img", "alt", "Patient Image", 3, "src", 4, "ngIf"], ["src", "assets/img/default-patient.jpeg", "class", "img-fluid img-thumbnail rounded patient-img", "alt", "Patient Image", 4, "ngIf"], [1, "", 3, "routerLink"], [1, "col-md-9", "col-sm-12"], [1, "d-flex", "flex-column", "w-100", "h-100"], [1, "flex-fill"], [1, "h5"], [1, "d-flex", "flex-column", "justify-conter-start", "align-items-start"], [4, "ngIf"], ["class", "mb-0", 4, "ngIf"], [1, "mb-0"], [1, "fa", "fa-phone"], ["class", "form-group p-0 m-1 align-self-end", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-end"], ["class", "btn btn-sm bg-success text-left m-1", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm bg-success flex-shrink-0 m-1", 3, "click", 4, "ngIf"], ["class", "btn btn-sm bg-danger  m-1", 3, "click", 4, "ngIf"], ["class", "btn btn-sm bg-info  m-1", 4, "ngIf"], ["class", "btn btn-sm  bg-danger  m-1", 4, "ngIf"], ["alt", "Patient Image", 1, "img-fluid", "rounded", "patient-img", 3, "src"], ["src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 1, "img-fluid", "img-thumbnail", "rounded", "patient-img"], [1, "fa", "fa-envelope"], ["aria-hidden", "true", 1, "fa", "fa-clock-o"], [1, "form-group", "p-0", "m-1", "align-self-end"], ["type", "datetime-local", "name", "appointmentDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "bg-success", "text-left", "m-1", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-video-camera"], [1, "btn", "btn-sm", "bg-success", "flex-shrink-0", "m-1", 3, "click"], [1, "fa", "fa-check"], [1, "btn", "btn-sm", "bg-danger", "m-1", 3, "click"], [1, "fa", "fa-times"], [1, "btn", "btn-sm", "bg-info", "m-1"], [1, "btn", "btn-sm", "bg-danger", "m-1"]],
      template: function DoctorAppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorAppointmentComponent_div_2_Template, 31, 21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".booking-doc-img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n}\n\n.patient-img[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2RvY3Rvci1hcHBvaW50bWVudC9kb2N0b3ItYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N0b3IvZG9jdG9yLWFwcG9pbnRtZW50L2RvY3Rvci1hcHBvaW50bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctZG9jLWltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG59XG5cbi5wYXRpZW50LWltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-appointment',
          templateUrl: './doctor-appointment.component.html',
          styleUrls: ['./doctor-appointment.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }];
      }, {
        appointment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-appointments/doctor-appointments.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-appointments/doctor-appointments.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DoctorAppointmentsComponent */

  /***/
  function srcAppPagesDoctorDoctorAppointmentsDoctorAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAppointmentsComponent", function () {
      return DoctorAppointmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../doctor-appointment/doctor-appointment.component */
    "./src/app/pages/doctor/doctor-appointment/doctor-appointment.component.ts");

    function DoctorAppointmentsComponent_app_doctor_appointment_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-appointment", 17);
      }

      if (rf & 2) {
        var appointment_r125 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointment", appointment_r125);
      }
    }

    function DoctorAppointmentsComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DoctorAppointmentsComponent =
    /*#__PURE__*/
    function () {
      function DoctorAppointmentsComponent(autService, doctorService, appotmentService) {
        _classCallCheck(this, DoctorAppointmentsComponent);

        this.autService = autService;
        this.doctorService = doctorService;
        this.appotmentService = appotmentService;
      }

      _createClass(DoctorAppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.autService.getCurrentUser().subscribe(function (user) {
            _this24.doctorService.getById(user.id).subscribe(function (doctor) {
              _this24.doctor = doctor;
            });

            _this24.doctorService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this24.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this24.appotmentService.getAllDoctorAppoitments(user.id).subscribe(function (apps) {
              _this24.appointments = apps;
            });
          });
        }
      }]);

      return DoctorAppointmentsComponent;
    }();

    DoctorAppointmentsComponent.ɵfac = function DoctorAppointmentsComponent_Factory(t) {
      return new (t || DoctorAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]));
    };

    DoctorAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorAppointmentsComponent,
      selectors: [["app-doctor-appointments"]],
      decls: 21,
      vars: 3,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "container-fluid", "mb-2"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [3, "appointment", 4, "ngFor", "ngForOf"], ["class", "list-group-item", 4, "ngIf"], [3, "appointment"], [1, "list-group-item"]],
      template: function DoctorAppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-doctor-side-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DoctorAppointmentsComponent_app_doctor_appointment_19_Template, 1, 1, "app-doctor-appointment", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DoctorAppointmentsComponent_div_20_Template, 3, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.appointments == null ? null : ctx.appointments.length) === 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _doctor_appointment_doctor_appointment_component__WEBPACK_IMPORTED_MODULE_7__["DoctorAppointmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItYXBwb2ludG1lbnRzL2RvY3Rvci1hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-appointments',
          templateUrl: './doctor-appointments.component.html',
          styleUrls: ['./doctor-appointments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-change-password/doctor-change-password.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-change-password/doctor-change-password.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DoctorChangePasswordComponent */

  /***/
  function srcAppPagesDoctorDoctorChangePasswordDoctorChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorChangePasswordComponent", function () {
      return DoctorChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Password */
    "./src/app/models/Password.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorChangePasswordComponent_div_27_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_27_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_27_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_27_div_1_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_27_div_2_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_27_div_3_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r94.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_32_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_32_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_32_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_32_div_1_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_32_div_2_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_32_div_3_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r96.errors.required && !ctx_r97.successMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r96.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r96.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_37_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorChangePasswordComponent_div_37_div_1_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DoctorChangePasswordComponent_div_37_div_2_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DoctorChangePasswordComponent_div_37_div_3_Template, 2, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r98.errors.required && !ctx_r99.successMessage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r98.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r98.errors.maxlength);
      }
    }

    function DoctorChangePasswordComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " new Password and Confirm Password must match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DoctorChangePasswordComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r101.errorMessage, " ");
      }
    }

    function DoctorChangePasswordComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r102.successMessage, " ");
      }
    }

    var DoctorChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function DoctorChangePasswordComponent(doctorSerive, authService) {
        _classCallCheck(this, DoctorChangePasswordComponent);

        this.doctorSerive = doctorSerive;
        this.authService = authService;
        this.isPasswordFailed = false;
        this.isPasswordSuccess = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.passwordMatch = true;
        this.form = {};
      }

      _createClass(DoctorChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this25.doctorSerive.getById(user.id).subscribe(function (doc) {
              _this25.doctor = doc;
            });

            _this25.doctorSerive.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this25.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this26 = this;

          if (this.form.newPassword !== this.form.confirmPassword) {
            this.passwordMatch = false;
            console.log("password does not match");
            return;
          }

          var password = new src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__["Password"](this.form.oldPassword, this.form.newPassword);
          this.doctorSerive.updatePassword(this.doctor.id, password).subscribe(function (message) {
            console.log("password success: ", JSON.stringify(message));
            _this26.isPasswordFailed = false;
            _this26.isPasswordSuccess = true;
            _this26.successMessage = message.message;
            setTimeout(function () {
              return _this26.successMessage = '';
            }, 2000);
          }, function (err) {
            _this26.isPasswordFailed = true;
            console.log("password failed: ", JSON.stringify(err));
            _this26.errorMessage = err.error.message;
          });
        }
      }]);

      return DoctorChangePasswordComponent;
    }();

    DoctorChangePasswordComponent.ɵfac = function DoctorChangePasswordComponent_Factory(t) {
      return new (t || DoctorChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    DoctorChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorChangePasswordComponent,
      selectors: [["app-doctor-change-password"]],
      decls: 44,
      vars: 10,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12", "col-lg-6"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "password", "name", "oldPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["oldPassword", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "name", "newPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn_primary"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function DoctorChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-doctor-side-bar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DoctorChangePasswordComponent_Template_form_ngSubmit_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112);

            var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return _r93.form.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.form.oldPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DoctorChangePasswordComponent_div_27_Template, 4, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.form.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DoctorChangePasswordComponent_div_32_Template, 4, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorChangePasswordComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DoctorChangePasswordComponent_div_37_Template, 4, 3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DoctorChangePasswordComponent_div_38_Template, 2, 0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DoctorChangePasswordComponent_div_39_Template, 4, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DoctorChangePasswordComponent_div_40_Template, 5, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          var _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.oldPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r93.submitted && _r94.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r93.submitted && _r96.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r93.submitted && _r98.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r93.submitted && ctx.isPasswordFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r93.submitted && ctx.successMessage);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItY2hhbmdlLXBhc3N3b3JkL2RvY3Rvci1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-change-password',
          templateUrl: './doctor-change-password.component.html',
          styleUrls: ['./doctor-change-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-dash-board/doctor-dash-board.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DoctorDashBoardComponent */

  /***/
  function srcAppPagesDoctorDoctorDashBoardDoctorDashBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorDashBoardComponent", function () {
      return DoctorDashBoardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoctorDashBoardComponent =
    /*#__PURE__*/
    function () {
      function DoctorDashBoardComponent() {
        _classCallCheck(this, DoctorDashBoardComponent);
      }

      _createClass(DoctorDashBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorDashBoardComponent;
    }();

    DoctorDashBoardComponent.ɵfac = function DoctorDashBoardComponent_Factory(t) {
      return new (t || DoctorDashBoardComponent)();
    };

    DoctorDashBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorDashBoardComponent,
      selectors: [["app-doctor-dash-board"]],
      decls: 2,
      vars: 0,
      template: function DoctorDashBoardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "doctor-dash-board works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItZGFzaC1ib2FyZC9kb2N0b3ItZGFzaC1ib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorDashBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-dash-board',
          templateUrl: './doctor-dash-board.component.html',
          styleUrls: ['./doctor-dash-board.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-profile-settings/doctor-profile-settings.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DoctorProfileSettingsComponent */

  /***/
  function srcAppPagesDoctorDoctorProfileSettingsDoctorProfileSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorProfileSettingsComponent", function () {
      return DoctorProfileSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function DoctorProfileSettingsComponent_div_1_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
      }

      if (rf & 2) {
        var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r83.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorProfileSettingsComponent_div_1_img_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function DoctorProfileSettingsComponent_div_1_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r85.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r85.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r85.uploadProgress, "% ");
      }
    }

    function DoctorProfileSettingsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-doctor-side-bar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Basic Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DoctorProfileSettingsComponent_div_1_img_13_Template, 1, 1, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DoctorProfileSettingsComponent_div_1_img_14_Template, 1, 0, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Upload Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DoctorProfileSettingsComponent_div_1_Template_input_change_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r86.uploadAvatar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "small", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Allowed JPG, GIF or PNG. Max size of 2MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DoctorProfileSettingsComponent_div_1_div_27_Template, 3, 5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Username ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "First Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_1_Template_input_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.doctor.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Last Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_1_Template_input_ngModelChange_55_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r89.doctor.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Speciality");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_1_Template_input_ngModelChange_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r90.doctor.speciality = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "About Me");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Biography");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DoctorProfileSettingsComponent_div_1_Template_textarea_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.doctor.aboutMe = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorProfileSettingsComponent_div_1_Template_button_click_70_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87);

          var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r92.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Save Changes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx_r82.avatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.avatar.length > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.avatar.length < 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.currentSelectedAvatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.firstname)("ngModel", ctx_r82.doctor.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.lastname)("ngModel", ctx_r82.doctor.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.speciality)("ngModel", ctx_r82.doctor.speciality);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r82.doctor.aboutMe)("ngModel", ctx_r82.doctor.aboutMe);
      }
    }

    var DoctorProfileSettingsComponent =
    /*#__PURE__*/
    function () {
      function DoctorProfileSettingsComponent(doctorService, authService) {
        _classCallCheck(this, DoctorProfileSettingsComponent);

        this.doctorService = doctorService;
        this.authService = authService;
      }

      _createClass(DoctorProfileSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.authService.getCurrentUser().subscribe(function (res) {
            _this27.doctorService.getById(res.id).subscribe(function (doc) {
              _this27.doctor = doc;
            });

            _this27.doctorService.getAvatar(res.id).subscribe(function (avatar) {
              var _a, _b;

              _this27.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this28 = this;

          console.log("clinic new name: ", JSON.stringify(this.doctor));
          this.doctorService.updateDoctor(this.doctor).subscribe(function (doc) {
            _this28.doctor = doc;
            window.location.reload();
          });
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(event) {
          var _this29 = this;

          this.currentSelectedAvatar = event.target.files.item(0);
          this.doctorService.uploadAvatar(this.doctor.id, this.currentSelectedAvatar).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this29.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this29.doctorService.getAvatar(_this29.doctor.id).subscribe(function (avatar) {
                _this29.avatar = 'data:image/jpeg;base64,' + avatar.image.data;
                _this29.uploadProgress = 0;
                _this29.currentSelectedAvatar = undefined;
              });
            }
          }, function (err) {
            _this29.uploadProgress = 0;
            _this29.uploadErrorMessage = 'Could not upload the Photo!';
            _this29.currentSelectedAvatar = undefined;
          });
        }
      }]);

      return DoctorProfileSettingsComponent;
    }();

    DoctorProfileSettingsComponent.ɵfac = function DoctorProfileSettingsComponent_Factory(t) {
      return new (t || DoctorProfileSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    DoctorProfileSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorProfileSettingsComponent,
      selectors: [["app-doctor-profile-settings"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container-fluid", "mb-2"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "row", "form-row"], [1, "col-12", "col-md-12"], [1, "form-group"], [1, "col-2"], ["class", "img-fluid patient-img", "alt", "Doctor Image", 3, "src", 4, "ngIf"], ["class", "img-fluid patient-img", "src", "assets/img/default-doctor.png", "alt", "Doctor Image", 4, "ngIf"], [1, "col-10"], [1, "col-12"], [1, "text-center"], [1, "change-photo-btn", "btn_primary"], ["for", "file"], [1, "fa", "fa-upload"], ["id", "file", "type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [4, "ngIf"], [1, "col-md-6"], [1, "text-danger"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["type", "email", "readonly", "", 1, "form-control", 3, "value"], ["type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "form-group", "mb-0"], ["rows", "5", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "ml-3"], ["type", "submit", 1, "btn", "btn_secondary", "m-2", 3, "click"], ["alt", "Doctor Image", 1, "img-fluid", "patient-img", 3, "src"], ["src", "assets/img/default-doctor.png", "alt", "Doctor Image", 1, "img-fluid", "patient-img"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"]],
      template: function DoctorProfileSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoctorProfileSettingsComponent_div_1_Template, 72, 14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctor);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: ["input[type=\"date\"][_ngcontent-%COMP%], focus[_ngcontent-%COMP%] {\n    color: #95a5a6;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n\n.patient-img[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n}\n\n.change-photo-btn[_ngcontent-%COMP%] {\n    background-color: #20c0f3;\n    border-radius: 50px;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 13px;\n    font-weight: 600;\n    margin: 0 auto;\n    padding: 10px 15px;\n    position: relative;\n    transition: .3s;\n    text-align: center;\n    width: 220px;\n}\n\n.change-photo-btn[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\n    bottom: 0;\n    cursor: pointer;\n    filter: alpha(opacity=0);\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2RvY3Rvci1wcm9maWxlLXNldHRpbmdzL2RvY3Rvci1wcm9maWxlLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItcHJvZmlsZS1zZXR0aW5ncy9kb2N0b3ItcHJvZmlsZS1zZXR0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImRhdGVcIl0sIGZvY3VzIHtcbiAgICBjb2xvcjogIzk1YTVhNjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wYXRpZW50LWltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2hhbmdlLXBob3RvLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYzBmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIyMHB4O1xufVxuXG4uY2hhbmdlLXBob3RvLWJ0biBpbnB1dC51cGxvYWQge1xuICAgIGJvdHRvbTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorProfileSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-profile-settings',
          templateUrl: './doctor-profile-settings.component.html',
          styleUrls: ['./doctor-profile-settings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-review/doctor-review.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-review/doctor-review.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DoctorReviewComponent */

  /***/
  function srcAppPagesDoctorDoctorReviewDoctorReviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewComponent", function () {
      return DoctorReviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../components/rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");

    function DoctorReviewComponent_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r367.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx_r367.patient.lastname), "");
      }
    }

    var DoctorReviewComponent =
    /*#__PURE__*/
    function () {
      function DoctorReviewComponent(patientService) {
        _classCallCheck(this, DoctorReviewComponent);

        this.patientService = patientService;
      }

      _createClass(DoctorReviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.patientService.getById(this.review.patientId).subscribe(function (patient) {
            _this30.patient = patient;
          });
          this.patientService.getAvatar(this.review.patientId).subscribe(function (avatar) {
            _this30.patientAvatar = 'data:image/jpeg;base64,' + avatar.image.data;
          });
        }
      }]);

      return DoctorReviewComponent;
    }();

    DoctorReviewComponent.ɵfac = function DoctorReviewComponent_Factory(t) {
      return new (t || DoctorReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]));
    };

    DoctorReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorReviewComponent,
      selectors: [["app-doctor-review"]],
      inputs: {
        review: "review"
      },
      decls: 16,
      vars: 5,
      consts: [[2, "list-style", "none"], [1, "comment"], [1, "comment-body"], [1, "row", "pl-2"], [1, "col-4"], [1, "row"], ["alt", "Patient Image", 1, "avatar", "avatar-sm", "rounded-circle", 3, "src"], [1, "row", "mt-2"], [1, "meta-data"], ["class", "comment-author", 4, "ngIf"], [3, "currentRate", "readonly"], [1, "col-8"], [1, "comment-content"], [1, "comment-author"]],
      template: function DoctorReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DoctorReviewComponent_span_10_Template, 4, 6, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-rating-star", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.patientAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx.review == null ? null : ctx.review.rating)("readonly", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.review == null ? null : ctx.review.content, " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_3__["RatingStarComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItcmV2aWV3L2RvY3Rvci1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-review',
          templateUrl: './doctor-review.component.html',
          styleUrls: ['./doctor-review.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_1__["PatientService"]
        }];
      }, {
        review: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-reviews/doctor-reviews.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-reviews/doctor-reviews.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DoctorReviewsComponent */

  /***/
  function srcAppPagesDoctorDoctorReviewsDoctorReviewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorReviewsComponent", function () {
      return DoctorReviewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/review.service */
    "./src/app/services/review.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../doctor-review/doctor-review.component */
    "./src/app/pages/doctor/doctor-review/doctor-review.component.ts");

    function DoctorReviewsComponent_app_doctor_review_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor-review", 21);
      }

      if (rf & 2) {
        var review_r128 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r128);
      }
    }

    function DoctorReviewsComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No Reviews");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DoctorReviewsComponent =
    /*#__PURE__*/
    function () {
      function DoctorReviewsComponent(authService, reviewService, doctorService) {
        var _this31 = this;

        _classCallCheck(this, DoctorReviewsComponent);

        this.authService = authService;
        this.reviewService = reviewService;
        this.doctorService = doctorService;
        this.authService.getCurrentUser().subscribe(function (user) {
          console.log("user ", JSON.stringify(user));

          _this31.doctorService.getById(user.id).subscribe(function (doc) {
            _this31.doctor = doc;
          });

          _this31.doctorService.getAvatar(user.id).subscribe(function (avatar) {
            var _a, _b;

            _this31.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
          });

          _this31.reviewService.getReviews(user.id).subscribe(function (reviews) {
            _this31.reviews = reviews;
          });
        });
      }

      _createClass(DoctorReviewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorReviewsComponent;
    }();

    DoctorReviewsComponent.ɵfac = function DoctorReviewsComponent_Factory(t) {
      return new (t || DoctorReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]));
    };

    DoctorReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorReviewsComponent,
      selectors: [["app-doctor-reviews"]],
      decls: 25,
      vars: 3,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12"], [1, "comments-list"], [3, "review", 4, "ngFor", "ngForOf"], ["style", "list-style: none", "class", "appointments", 4, "ngIf"], [3, "review"], [1, "appointments", 2, "list-style", "none"]],
      template: function DoctorReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Doctor Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-doctor-side-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DoctorReviewsComponent_app_doctor_review_23_Template, 1, 1, "app-doctor-review", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DoctorReviewsComponent_li_24_Template, 3, 0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews.length === 0);
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _doctor_review_doctor_review_component__WEBPACK_IMPORTED_MODULE_6__["DoctorReviewComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3ItcmV2aWV3cy9kb2N0b3ItcmV2aWV3cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorReviewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-reviews',
          templateUrl: './doctor-reviews.component.html',
          styleUrls: ['./doctor-reviews.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_3__["DoctorService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DoctorSideBarComponent */

  /***/
  function srcAppPagesDoctorDoctorSideBarDoctorSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSideBarComponent", function () {
      return DoctorSideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DoctorSideBarComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r342.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r342.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DoctorSideBarComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DoctorSideBarComponent =
    /*#__PURE__*/
    function () {
      // avatar:any;
      function DoctorSideBarComponent(authService, doctorService, tokenStorageService, router) {
        _classCallCheck(this, DoctorSideBarComponent);

        this.authService = authService;
        this.doctorService = doctorService;
        this.tokenStorageService = tokenStorageService;
        this.router = router; // @Input() doctor:Doctor;

        this.showDefaultAvatar = false;
      }

      _createClass(DoctorSideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this32.doctorService.getById(user.id).subscribe(function (doc) {
              _this32.doctor = doc;
              console.log("print avatar : ", _this32.avatar); // if (!this.avatar) {
              //   this.showDefaultAvatar = true;
              //   console.log("show default");
              // } else {
              //   this.showDefaultAvatar = false;
              // }
            }); // this.doctorService.getAvatar(user.id).subscribe(avatar => {
            //   this.avatar = 'data:image/jpeg;base64,' + avatar?.image?.data;
            // // });
            // if (!this.avatar) {
            //   this.showDefaultAvatar = true;
            //   console.log("show default");
            // } else {
            //   this.showDefaultAvatar = false;
            // }

          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut(); //window.location.reload();

          this.router.navigate(["home"]).then(function () {
            window.location.reload();
          });
        }
      }]);

      return DoctorSideBarComponent;
    }();

    DoctorSideBarComponent.ɵfac = function DoctorSideBarComponent_Factory(t) {
      return new (t || DoctorSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    DoctorSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DoctorSideBarComponent,
      selectors: [["app-doctor-side-bar"]],
      inputs: {
        avatar: "avatar"
      },
      decls: 48,
      vars: 8,
      consts: [[1, "card", "p-1"], [1, "row"], [1, "col-12"], [1, "row", "text-center", "pb-2"], ["data-fancybox", "gallery", 3, "href", 4, "ngIf"], ["data-fancybox", "gallery", "href", "assets/img/default-doctor.png", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/doctor/appointments"], ["aria-hidden", "true", 1, "fa", "fa-bookmark", "p-1"], ["routerLink", "/doctor/reviews"], ["aria-hidden", "true", 1, "fa", "fa-reply", "p-1"], ["routerLink", "/doctor/profile-settings"], [1, "fa", "fa-user", "p-1"], ["routerLink", "/doctor/clinic-settings"], ["routerLink", "/doctor/change-password"], [1, "fa", "fa-lock", "p-1"], [1, "col-12", 3, "click"], ["href", "#"], [1, "fa", "fa-sign-out"], ["data-fancybox", "gallery", 3, "href"], ["alt", "Doctor Image", 1, "img-fluid", "img-thumbnail", "doctor-img", 3, "src"], ["data-fancybox", "gallery", "href", "assets/img/default-doctor.png"], ["src", "assets/img/default-doctor.png", "alt", "Patient Image", 1, "img-fluid", "img-thumbnail", "doctor-img"]],
      template: function DoctorSideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoctorSideBarComponent_a_5_Template, 2, 2, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DoctorSideBarComponent_a_6_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Clinic Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoctorSideBarComponent_Template_div_click_42_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, ctx.doctor == null ? null : ctx.doctor.lastname), "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: [".doctor-img[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n}\n\n.active[_ngcontent-%COMP%] {\n    border-color: #FF5358;\n    border-right-style: solid;\n    border-width: 3px;\n    color: #FF5358;\n}\n\n.active[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    color: #FF5358 !important;\n}\n\n.nav-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    color: rgb(99, 88, 88);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2RvY3Rvci1zaWRlLWJhci9kb2N0b3Itc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9kb2N0b3Itc2lkZS1iYXIvZG9jdG9yLXNpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdG9yLWltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICNGRjUzNTg7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBjb2xvcjogI0ZGNTM1ODtcbn1cblxuLmFjdGl2ZSA+ICoge1xuICAgIGNvbG9yOiAjRkY1MzU4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSA+ICoge1xuICAgIGNvbG9yOiByZ2IoOTksIDg4LCA4OCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-side-bar',
          templateUrl: './doctor-side-bar.component.html',
          styleUrls: ['./doctor-side-bar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/login/login.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/doctor/login/login.component.ts ***!
    \*******************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesDoctorLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_form_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r29.errorMessage, " ");
      }
    }

    function LoginComponent_form_13_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_13_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_13_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_13_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_13_div_15_div_1_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_13_div_15_div_2_Template, 2, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r32.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r32.errors.minlength);
      }
    }

    function LoginComponent_form_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_13_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r28.form.valid && ctx_r36.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_13_div_3_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15, 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_13_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_13_div_9_Template, 2, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_13_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_form_13_div_15_Template, 3, 2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don\u2019t have an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.submitted && ctx_r27.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.submitted && _r30.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r27.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r28.submitted && _r32.invalid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "doctor/profile";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this33.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this33.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this34 = this;

          this.authService.doctorLogin(this.form).subscribe(function (user) {
            _this34.tokenStorage.saveToken(user.accessToken);

            _this34.tokenStorage.saveUser(user);

            _this34.tokenStorage.saveUserType(user.userType);

            _this34.isLoginFailed = false;
            _this34.isLoggedIn = true;
            _this34.roles = _this34.tokenStorage.getUser().roles;

            _this34.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this34.tokenStorage.getUser());
            console.log('return to ' + _this34.retUrl);

            if (_this34.retUrl != null) {
              _this34.router.navigate([_this34.retUrl]);
            } else {
              _this34.router.navigate(['doctor/appointments']);
            }
          }, function (err) {
            _this34.errorMessage = err.error.message;
            _this34.isLoginFailed = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-doctor-login"]],
      decls: 14,
      vars: 1,
      consts: [[1, "container-fluid", "m-0", "bg-white"], [1, "row", "pt-5", "pb-5"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Doccure Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/forgot-password", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn_primary", "btn-block"], [1, "text-center", "dont-have"], ["routerLink", "/doctor/signup"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "AirDoc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_form_13_Template, 25, 5, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".content[_ngcontent-%COMP%]{\n    height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdG9yL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/profile/profile.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/doctor/profile/profile.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesDoctorProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../components/rating-star/rating-star.component */
    "./src/app/components/rating-star/rating-star.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../components/doctor-over-view/doctor-over-view.component */
    "./src/app/components/doctor-over-view/doctor-over-view.component.ts");
    /* harmony import */


    var _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../components/clinic/clinic.component */
    "./src/app/components/clinic/clinic.component.ts");
    /* harmony import */


    var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/reviews/reviews.component */
    "./src/app/components/reviews/reviews.component.ts");

    function ProfileComponent_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_img_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 38);
      }
    }

    function ProfileComponent_li_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", photo_r21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_span_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var clinicService_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", clinicService_r22, " ");
      }
    }

    function ProfileComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-over-view", 43);
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", ctx_r18.doctor)("clinic", ctx_r18.clinic);
      }
    }

    function ProfileComponent_ng_template_63_app_clinic_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinic", 45);
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clinic", ctx_r23.clinic)("doctor", ctx_r23.doctor);
      }
    }

    function ProfileComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_ng_template_63_app_clinic_0_Template, 1, 2, "app-clinic", 44);
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.clinic);
      }
    }

    function ProfileComponent_ng_template_67_app_reviews_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reviews", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ProfileComponent_ng_template_67_app_reviews_0_Template_app_reviews_refresh_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.refresh();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", ctx_r24.doctor)("isPatient", ctx_r24.isPatient);
      }
    }

    function ProfileComponent_ng_template_67_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProfileComponent_ng_template_67_app_reviews_0_Template, 1, 2, "app-reviews", 46);
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.doctor);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(route, doctorService, tokenStorage) {
        _classCallCheck(this, ProfileComponent);

        this.route = route;
        this.doctorService = doctorService;
        this.tokenStorage = tokenStorage;
        this.showDefaultAvatar = false;
        this.id = "";
        this.isPatient = false;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.route.params.subscribe(function (params) {
            _this35.id = params['id'];
            console.log("Doctor id" + _this35.id); //Get Doctor

            _this35.doctorService.getById(_this35.id).subscribe(function (res) {
              _this35.doctor = res;
              console.log("rating: ", _this35.doctor.rating);
            });

            _this35.doctorService.getAvatar(_this35.id).subscribe(function (res) {
              var _a, _b, _c, _d;

              _this35.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = res) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
              console.log("print avatar : ", _this35.avatar);

              if (((_d = (_c = res) === null || _c === void 0 ? void 0 : _c.image) === null || _d === void 0 ? void 0 : _d.data) === undefined) {
                _this35.showDefaultAvatar = true;
                console.log("show default");
              }
            });

            _this35.doctorService.getClinic(_this35.id).subscribe(function (res) {
              _this35.clinic = res;
              console.log("clinic from Profile", _this35.clinic);
            });

            _this35.doctorService.getClinicPhotos(_this35.id).subscribe(function (res) {
              //Convert image to base64 and return it;
              _this35.clinicPhotos = res.map(function (photo) {
                return 'data:image/jpeg;base64,' + photo.image.data;
              });
            });

            _this35.isPatient = _this35.tokenStorage.getUserType() == "PATIENT";
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this36 = this;

          this.doctorService.getById(this.doctor.id).subscribe(function (res) {
            _this36.doctor = res;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 69,
      vars: 37,
      consts: [[1, "container"], [1, "card", "m-2"], [1, "card-body"], [1, "row"], [1, "col-md-8", "col-sm-12"], [1, "row", "text-md-left", "text-center"], [1, "col-md-4", "col-sm-12"], [3, "routerLink"], ["class", "img-fluid w-100", "alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/default-doctor.png", "class", "doc-img img-fluid w-100", "alt", "Doctor Image", 4, "ngIf"], [1, "col-md-8", "col-sm-12", "text-md-left", "text-center"], [1, "doc-name"], [1, "doc-speciality", "text-dark"], [1, "text_primary"], [1, "rating"], [3, "currentRate"], [1, "d-inline-block", "h5"], [1, "clinic-details"], [1, "doc-location"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "d-flex", "flex-row"], ["class", "m-1 clinic-photo", 4, "ngFor", "ngForOf"], [1, "clinic-services"], ["class", "service border", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-12", "text-md-left", "text-center"], [1, "clini-infos", "p-2"], [1, "fa", "fa-comment"], ["aria-hidden", "true", 1, "fa", "fa-money"], [1, "text-center"], [1, "app_btn", 3, "routerLink"], [1, "card-body", "pt-0"], ["ngbNav", "", 1, "nav-tabs"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["alt", "Doctor Image", 1, "img-fluid", "w-100", 3, "src"], ["src", "assets/img/default-doctor.png", "alt", "Doctor Image", 1, "doc-img", "img-fluid", "w-100"], [1, "m-1", "clinic-photo"], ["data-fancybox", "gallery", 3, "href"], [1, "img-fluid", "w-100", 3, "src"], [1, "service", "border"], [3, "doctor", "clinic"], [3, "clinic", "doctor", 4, "ngIf"], [3, "clinic", "doctor"], [3, "doctor", "isPatient", "refresh", 4, "ngIf"], [3, "doctor", "isPatient", "refresh"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_img_8_Template, 1, 1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProfileComponent_img_9_Template, 1, 0, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-rating-star", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProfileComponent_li_31_Template, 3, 2, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProfileComponent_span_33_Template, 2, 1, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "BOOK APPOINTMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ProfileComponent_ng_template_59_Template, 1, 2, "ng-template", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Clinic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ProfileComponent_ng_template_63_Template, 1, 1, "ng-template", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, ProfileComponent_ng_template_67_Template, 1, 1, "ng-template", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDefaultAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 23, ctx.doctor == null ? null : ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 25, ctx.doctor == null ? null : ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.doctor == null ? null : ctx.doctor.speciality);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentRate", ctx.doctor == null ? null : ctx.doctor.rating);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.doctor == null ? null : ctx.doctor.averageRating, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 27, ctx.clinic == null ? null : ctx.clinic.country), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 29, ctx.clinic == null ? null : ctx.clinic.city), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinicPhotos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clinic == null ? null : ctx.clinic.services);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.doctor == null ? null : ctx.doctor.reviews == null ? null : ctx.doctor.reviews.length, " Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 31, (ctx.clinic == null ? null : ctx.clinic.country) + " " + (ctx.clinic == null ? null : ctx.clinic.city)), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 33, ctx.clinic == null ? null : ctx.clinic.minPrice), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 35, ctx.clinic == null ? null : ctx.clinic.maxPrice), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/booking/", ctx.doctor == null ? null : ctx.doctor.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r17);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_rating_star_rating_star_component__WEBPACK_IMPORTED_MODULE_5__["RatingStarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavOutlet"], _components_doctor_over_view_doctor_over_view_component__WEBPACK_IMPORTED_MODULE_7__["DoctorOverViewComponent"], _components_clinic_clinic_component__WEBPACK_IMPORTED_MODULE_8__["ClinicComponent"], _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: [".doc-img[_ngcontent-%COMP%] {\n    max-width: 200px;\n    max-height: 200px;\n}\n\n.doc-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgb(22, 22, 22);\n    padding: 1rem 0;\n}\n\n.service[_ngcontent-%COMP%] {\n    padding:5px;\n    margin: 2px;\n    border-radius: 5px;\n    color:grey;\n    font-size: small;\n}\n\n.app_btn[_ngcontent-%COMP%] {\n    display: block;\n    padding: 10px;\n    margin: 10px;\n    background-color: #7353D2;\n    border-radius: 10px;\n    text-align: center;\n    color: aliceblue;\n    text-transform: uppercase;\n    box-shadow: 0px 2px 4px -1px rgba(171,158,171,0.77);\n}\n\n.clinic-photo[_ngcontent-%COMP%] {\n    width:50px;\n    border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb2MtaW1nIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uZG9jLW5hbWUgPiBhIHtcbiAgICBjb2xvcjogcmdiKDIyLCAyMiwgMjIpO1xuICAgIHBhZGRpbmc6IDFyZW0gMDtcbn1cblxuLnNlcnZpY2Uge1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIG1hcmdpbjogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjb2xvcjpncmV5O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cblxuLmFwcF9idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzUzRDI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgxNzEsMTU4LDE3MSwwLjc3KTtcbn1cblxuLmNsaW5pYy1waG90byB7XG4gICAgd2lkdGg6NTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/signup/signup.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/doctor/signup/signup.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesDoctorSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupComponent_form_12_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_7_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_7_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_7_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r43.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_13_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_13_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_13_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r45.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r45.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_19_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_19_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_19_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r47.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_25_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_25_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_25_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r49.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at least 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at most 50 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_31_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_31_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_31_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r51.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r51.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r51.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_37_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_37_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_37_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r53.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r53.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r53.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r55.errorMessage, " ");
      }
    }

    function SignupComponent_form_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_12_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r42.form.valid && ctx_r74.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r76.form.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_12_div_7_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r77.form.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_12_div_13_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r78.form.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_12_div_19_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r79.form.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_12_div_25_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_form_12_div_31_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r81.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_form_12_div_37_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already have an account?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_form_12_div_43_Template, 4, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r43.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r45.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r47.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r49.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r51.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r40.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && _r53.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r42.submitted && ctx_r40.isSignUpFailed);
      }
    }

    function SignupComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, authService) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this37 = this;

          this.authService.doctorRegister(this.form).subscribe(function (data) {
            console.log(data);
            _this37.isSuccessful = true;
            _this37.isSignUpFailed = false;

            _this37.router.navigate(["doctor/login"]);
          }, function (err) {
            _this37.errorMessage = err.error.message;
            _this37.isSignUpFailed = true;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-doctor-signup"]],
      decls: 14,
      vars: 2,
      consts: [[1, "container-fluid", "bg-white"], [1, "rowpt-5", "pb-5", "m-0"], [1, "col-md-8", "offset-md-2"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "login-left"], ["src", "assets/img/login-banner.png", "alt", "Login Banner", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["routerLink", "patient/signup", 1, "text_primary", "h6"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "form-focus"], ["type", "text", "name", "firstname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "name", "lastname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "tel", "name", "phone", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "email", "name", "email", "required", "", "minlength", "10", "maxlength", "50", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "/doctor/login", 1, "forgot-link"], ["type", "submit", 1, "btn", "btn_secondary", "btn-block", "btn-lg"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Doctor Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Not a Doctor?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_form_12_Template, 44, 13, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_div_13_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-doctor-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/doctor/video-chat/video-chat.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/doctor/video-chat/video-chat.component.ts ***!
    \*****************************************************************/

  /*! exports provided: VideoChatComponent */

  /***/
  function srcAppPagesDoctorVideoChatVideoChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoChatComponent", function () {
      return VideoChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_CallState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../models/CallState */
    "./src/app/models/CallState.ts");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../doctor-side-bar/doctor-side-bar.component */
    "./src/app/pages/doctor/doctor-side-bar/doctor-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["localeVideo"];
    var _c1 = ["remoteVideo"];

    function VideoChatComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ready");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_10_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r238);

          var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r237.startCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ringing");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_11_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r240);

          var ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r239.cancelCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ended");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_12_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r242);

          var ctx_r241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r241.startCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Denied");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_13_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r244);

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r243.startCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cancled");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_14_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r246);

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r245.startCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_17_video_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 22, 23);
      }
    }

    function VideoChatComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoChatComponent_div_17_video_1_Template, 2, 0, "video", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_17_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r250);

          var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r249.endCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "End Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r236.isOngoing());
      }
    }

    var offerOptions = {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    };

    var VideoChatComponent =
    /*#__PURE__*/
    function () {
      function VideoChatComponent(route, patientService, doctorService, authService) {
        _classCallCheck(this, VideoChatComponent);

        this.route = route;
        this.patientService = patientService;
        this.doctorService = doctorService;
        this.authService = authService; // websocket stuff

        this.websocketUrl = src_app_shared__WEBPACK_IMPORTED_MODULE_3__["BASE_SOCKET_URL"] + "/socket"; // production url
        // call states

        this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Idle;
        this.callerName = "";
        this.myName = "";
      }

      _createClass(VideoChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          // this.conn = new WebSocket('ws://' + location.hostname + (location.port ? ':' + location.port : '') + '/socket')
          // getting patient info
          this.route.params.subscribe(function (params) {
            _this38.patientId = params['id'];

            _this38.patientService.getById(_this38.patientId).subscribe(function (patient) {
              _this38.patient = patient;
            });
          });
          this.authService.getCurrentUser().subscribe(function (res) {
            _this38.doctorService.getById(res.id).subscribe(function (doc) {
              _this38.doctor = doc;
            });

            _this38.doctorService.getAvatar(res.id).subscribe(function (avatar) {
              var _a, _b;

              _this38.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
          console.log("socket url", this.websocketUrl);
          this.conn = new WebSocket(this.websocketUrl);

          this.conn.onopen = function (ev) {
            return _this38.onOpen(ev);
          };

          this.conn.onmessage = function (msg) {
            return _this38.onMessage(msg);
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('vid1', this.localeVideo);
          console.log('vid2', this.remoteVideo);
        }
      }, {
        key: "onOpen",
        value: function onOpen(ev) {
          console.log("Connected to the signaling server", ev);
        }
      }, {
        key: "onMessage",
        // on Message Recieved from WebSocket Server;
        value: function onMessage(msg) {
          console.log("Got message", msg.data);
          var content = JSON.parse(msg.data);
          var data = content.data;

          switch (content.event) {
            // when somebody wants to call us
            case "offer":
              this.handleOffer(data);
              break;

            case "answer":
              this.handleAnswer(data);
              break;
            // when a remote peer sends an ice candidate to us

            case "candidate":
              this.handleCandidate(data);
              break;

            case "call":
              this.handleCall(data);
              break;

            case "accept_call":
              this.handleAcceptCall(data);
              break;

            case "deny_call":
              this.handleDenyCall(data);
              break;

            case "end_call":
              this.handleEndCall(data);
              break;

            default:
              break;
          }
        }
      }, {
        key: "initializePeer",
        value: function initializePeer() {
          var _this39 = this;

          var configuration = {
            iceServers: [{
              urls: "stun:23.21.150.121"
            }, {
              urls: "stun:stun.l.google.com:19302"
            }, {
              urls: "turn:numb.viagenie.ca",
              "credential": "webrtcdemo",
              "username": "louis@mozilla.com"
            }]
          };
          this.peerConnection = new RTCPeerConnection(configuration);
          console.log("peer Connection created", this.peerConnection); // Setup ice handling

          this.peerConnection.onicecandidate = function (event) {
            if (event.candidate) {
              _this39.send({
                event: "candidate",
                data: event.candidate
              });
            }
          };

          this.peerConnection.ontrack = function (ev) {
            return _this39.gotRemoteStream(ev);
          };
        }
      }, {
        key: "initializingCall",
        value: function initializingCall() {
          var _this40 = this;

          // creating peer connection
          this.initializePeer(); // Adding support for video

          var constraints = {
            video: true,
            audio: true
          }; // requesting Media Devices 

          return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            /* use the stream */
            //    stream.getTracks().forEach(track => pc1.addTrack(track, localStream));
            stream.getTracks().forEach(function (track) {
              return _this40.peerConnection.addTrack(track, stream);
            });

            _this40.gotStream(stream);
          })["catch"](function (err) {
            /* handle the error */
            console.log("error adding stream ", JSON.stringify(err));
          });
        }
      }, {
        key: "send",
        value: function send(message) {
          console.log("sending message", JSON.stringify(message));
          this.conn.send(JSON.stringify(message));
        }
      }, {
        key: "createOffer",
        value: function createOffer() {
          var _this41 = this;

          return this.peerConnection.createOffer(offerOptions).then(function (offer) {
            _this41.peerConnection.setLocalDescription(offer).then(function () {
              return _this41.send({
                event: "offer",
                data: offer
              });
            });
          }, function (error) {
            alert("Error creating an offer");
            console.log(error);
          });
        }
      }, {
        key: "handleOffer",
        value: function handleOffer(offer) {
          var _this42 = this;

          this.peerConnection.setRemoteDescription(new RTCSessionDescription(offer)); // create and send an answer to an offer

          this.peerConnection.createAnswer().then(function (answer) {
            _this42.peerConnection.setLocalDescription(answer).then(function () {
              return _this42.send({
                event: "answer",
                data: answer
              });
            });
          }, function (error) {
            alert("Error creating an answer");
            console.log("handleOffer Error", error);
          });
        }
      }, {
        key: "handleCandidate",
        value: function handleCandidate(candidate) {
          this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
          console.log("handel Candidate", JSON.stringify(candidate));
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(answer) {
          this.peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
          console.log("connection established successfully!!");
        }
      }, {
        key: "handleCall",
        value: function handleCall(caller) {
          console.log("call form", caller);
          this.callerName = caller;
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ringing;
        }
      }, {
        key: "handleAcceptCall",
        value: function handleAcceptCall(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("handle accept call", data);
                    console.log("creating offer"); // setTimeout(() => this.createOffer(), 400);

                    _context.next = 4;
                    return this.createOffer();

                  case 4:
                    console.log("call accepted");
                    this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ongoing;

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "handleDenyCall",
        value: function handleDenyCall(data) {
          console.log("handle deny call", data);
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
        }
      }, {
        key: "handleEndCall",
        value: function handleEndCall(data) {
          console.log("handle End call", data);
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
          this.stop();
        }
      }, {
        key: "startCall",
        value: function startCall() {
          var _this43 = this;

          console.log("starting a call");

          if (!this.doctor) {
            console.log("need doctor info first");
            return;
          }

          if (!this.patient) {
            console.log("need patient info first");
            return;
          }

          this.initializingCall().then(function () {
            _this43.send({
              data: _this43.myName,
              event: "call",
              calleeId: _this43.patient.id,
              callerId: _this43.doctor.id
            });

            _this43.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ringing;
          });
        }
      }, {
        key: "acceptCall",
        value: function acceptCall() {
          var _this44 = this;

          console.log("accept call"); // requesting media

          console.log("requesting media"); // this.start();

          this.initializingCall().then(function () {
            _this44.send({
              data: _this44.callerName,
              event: "accept_call"
            });

            _this44.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ongoing;
          });
        }
      }, {
        key: "denyCall",
        value: function denyCall() {
          console.log("deny call");
          this.send({
            data: this.callerName,
            event: "deny_call"
          });
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
        }
      }, {
        key: "endCall",
        value: function endCall() {
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
          this.send({
            data: this.callerName,
            event: "end_call"
          });
          this.stop();
        }
      }, {
        key: "cancelCall",
        value: function cancelCall() {
          this.stop();
          this.callState = _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Canceled;
          this.send({
            data: this.callerName,
            event: "cancel_call"
          });
        }
      }, {
        key: "gotRemoteStream",
        value: function gotRemoteStream(e) {
          console.log('gotRemoteStream', e.track, e.streams[0]);

          try {
            this.remoteVideo.nativeElement.srcObject = null;
            this.remoteVideo.nativeElement.srcObject = e.streams[0];
            ;
          } catch (error) {
            console.log('error setting remote stream', error);
            this.remoteVideo.nativeElement.src = URL.createObjectURL(e.streams[0]);
          }
        }
      }, {
        key: "gotStream",
        value: function gotStream(stream) {
          console.log('Received local stream');

          try {
            this.localeVideo.nativeElement.srcObject = stream;
          } catch (error) {
            console.log('error setting locale stream', error);
            this.localeVideo.nativeElement.src = URL.createObjectURL(stream);
          }

          this.localstream = stream;
        }
      }, {
        key: "stop",
        value: function stop() {
          console.log('Ending Call' + '\n\n');
          this.peerConnection.close();
          this.peerConnection = null;
          this.localstream.getTracks().forEach(function (track) {
            console.log('stoping doctor locale stream', track);
            track.stop();
          });
          this.localeVideo.nativeElement.srcObject = null;
        }
      }, {
        key: "isIdle",
        value: function isIdle() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Idle;
        }
      }, {
        key: "isDenied",
        value: function isDenied() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
        }
      }, {
        key: "isOngoing",
        value: function isOngoing() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ongoing;
        }
      }, {
        key: "isEnded",
        value: function isEnded() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
        }
      }, {
        key: "isRinging",
        value: function isRinging() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ringing;
        }
      }, {
        key: "isCanceled",
        value: function isCanceled() {
          return this.callState == _models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Canceled;
        }
      }]);

      return VideoChatComponent;
    }();

    VideoChatComponent.ɵfac = function VideoChatComponent_Factory(t) {
      return new (t || VideoChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]));
    };

    VideoChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VideoChatComponent,
      selectors: [["app-video-chat"]],
      viewQuery: function VideoChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.localeVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
        }
      },
      decls: 18,
      vars: 8,
      consts: [[1, "container-fluid", "mb-3", "m-2"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], ["id", "container"], ["id", "idle", "class", "ringing view-size", 4, "ngIf"], ["class", "ringing view-size", 4, "ngIf"], ["id", "locale", "playsinline", "", "autoplay", "", "muted", "", 3, "hidden"], ["localeVideo", ""], ["id", "ongoing", 4, "ngIf"], ["id", "idle", 1, "ringing", "view-size"], [1, "status"], [1, "buttons"], [1, "btn", "btn_secondary", 3, "click"], [1, "ringing", "view-size"], ["id", "ongoing"], ["id", "remote", "playsinline", "", "autoplay", "", 4, "ngIf"], [1, "btn", "btn_secondary", "end-call", 3, "click"], ["id", "remote", "playsinline", "", "autoplay", ""], ["remoteVideo", ""]],
      template: function VideoChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-doctor-side-bar", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VideoChatComponent_div_10_Template, 8, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VideoChatComponent_div_11_Template, 8, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VideoChatComponent_div_12_Template, 8, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VideoChatComponent_div_13_Template, 8, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VideoChatComponent_div_14_Template, 8, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "video", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, VideoChatComponent_div_17_Template, 4, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIdle());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRinging());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnded());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDenied());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCanceled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isOngoing());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOngoing());
        }
      },
      directives: [_doctor_side_bar_doctor_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["DoctorSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["video[_ngcontent-%COMP%] {\n    \n    \n    \n    width: 100%;\n    height: 100%;\n} \n\n#container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n} \n\n#locale[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    position:  absolute;\n    top: 10px;\n    left: 10px;\n    \n} \n\n.thumbnail[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    position:  absolute;\n    top: 10px;\n    left: 10px;\n} \n\n.status[_ngcontent-%COMP%] {\n    background-color: #FF5358;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 2px 4px 8px -2px rgba(171,158,171,0.77);\n} \n\n.view-size[_ngcontent-%COMP%] {\n    height: 80vh;\n} \n\n.ringing[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n} \n\n.ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n} \n\n.ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .status[_ngcontent-%COMP%] {\n    align-self: center;\n    margin-bottom: 2rem;\n} \n\n.ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly; \n} \n\n#ongoing[_ngcontent-%COMP%]  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n} \n\n.end-call[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 20px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yL3ZpZGVvLWNoYXQvdmlkZW8tY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci92aWRlby1jaGF0L3ZpZGVvLWNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiB2aWRlbyB7XG4gICAgLyogYm9yZGVyOiA1cHggc29saWQgYmxhY2s7ICovXG4gICAgLyogd2lkdGg6IDMyMHB4OyAqL1xuICAgIC8qIGhlaWdodDogMjQwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSBcblxuI2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbG9jYWxlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogIGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIC8qIHotaW5kZXg6IDQwMDAwOyAqL1xufVxuXG4udGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBwb3NpdGlvbjogIGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4uc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1MzU4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggOHB4IC0ycHggcmdiYSgxNzEsMTU4LDE3MSwwLjc3KTtcbn0gXG5cbi52aWV3LXNpemUge1xuICAgIGhlaWdodDogODB2aDtcbn1cblxuLnJpbmdpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuLnJpbmdpbmcgPiBkaXYge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnJpbmdpbmcgPiBkaXYgPiAuc3RhdHVzIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnJpbmdpbmcgPiBkaXYgPiAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXG59XG5cbiNvbmdvaW5nICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4uZW5kLWNhbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-video-chat',
          templateUrl: './video-chat.component.html',
          styleUrls: ['./video-chat.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_5__["PatientService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      }, {
        localeVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['localeVideo']
        }],
        remoteVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['remoteVideo']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/search-box/search-box.component */
    "./src/app/components/search-box/search-box.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "search",
        value: function search(city, query) {
          console.log("city: " + city, "query : " + query);
          this.router.navigate(["search"], {
            queryParams: {
              "city": city,
              "query": query
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "section-search"], [1, "text-center"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Search Doctor, Make an Appointment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discover the best doctors, clinic & hospital the city nearest to you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-search-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_2__["SearchBoxComponent"]],
      styles: [".section-search[_ngcontent-%COMP%] {\n    height: 90vh;\n    background: white url('search-bg.png') no-repeat bottom center;\n    min-height: 450px;\n    background-size: 100% auto;\n    position: relative;\n    background-blend-mode: Darken;\n    padding: 80px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osOERBQWdGO0lBQ2hGLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zZWFyY2gge1xuICAgIGhlaWdodDogOTB2aDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9zZWFyY2gtYmcucG5nKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBEYXJrZW47XG4gICAgcGFkZGluZzogODBweCAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/change-password/change-password.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/patient/change-password/change-password.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppPagesPatientChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/Password */
    "./src/app/models/Password.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ChangePasswordComponent_div_29_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_29_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_29_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_29_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_29_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_29_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r207.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r207.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r207.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_34_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_34_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_34_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_34_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_34_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_34_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r209.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r209.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r209.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_39_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_39_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_39_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChangePasswordComponent_div_39_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChangePasswordComponent_div_39_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChangePasswordComponent_div_39_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r211.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r211.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r211.errors.maxlength);
      }
    }

    function ChangePasswordComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " new Password and Confirm Password must match ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r214.errorMessage, " ");
      }
    }

    function ChangePasswordComponent_div_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r215.successMessage, " ");
      }
    }

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(patientService, authService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.patientService = patientService;
        this.authService = authService;
        this.isPasswordFailed = false;
        this.isPasswordSuccess = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.passwordMatch = true;
        this.form = {};
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this45.patientService.getById(user.id).subscribe(function (patient) {
              _this45.patient = patient;
            });

            _this45.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this45.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this46 = this;

          if (this.form.newPassword !== this.form.confirmPassword) {
            this.passwordMatch = false;
            setTimeout(function () {
              return _this46.passwordMatch = true;
            }, 2000);
            console.log("password does not match");
            return;
          }

          var password = new src_app_models_Password__WEBPACK_IMPORTED_MODULE_1__["Password"](this.form.oldPassword, this.form.newPassword);
          this.patientService.updatePassword(this.patient.id, password).subscribe(function (message) {
            console.log("password success: ", JSON.stringify(message));
            _this46.isPasswordFailed = false;
            _this46.isPasswordSuccess = true;
            _this46.successMessage = message.message;
            setTimeout(function () {
              return _this46.successMessage = '';
            }, 2000);
          }, function (err) {
            _this46.isPasswordFailed = true;
            setTimeout(function () {
              return _this46.isPasswordFailed = false;
            }, 2000);
            console.log("password failed: ", JSON.stringify(err));
            _this46.errorMessage = err.error.message;
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 46,
      vars: 10,
      consts: [[1, "main-wrapper"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card"], [1, "card-body"], [1, "col-md-12", "col-lg-6"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["type", "password", "name", "oldPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["oldPassword", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "password", "name", "newPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn_primary"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-patient-side-bar", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225);

            var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            return _r206.form.valid && ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.form.oldPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 4, 3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.form.newPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ChangePasswordComponent_div_34_Template, 4, 3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.form.confirmPassword = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Confirm New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ChangePasswordComponent_div_39_Template, 4, 3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ChangePasswordComponent_div_40_Template, 2, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ChangePasswordComponent_div_41_Template, 4, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ChangePasswordComponent_div_42_Template, 5, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          var _r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

          var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.oldPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.submitted && _r207.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.newPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.submitted && _r209.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.form.confirmPassword);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.submitted && _r211.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.passwordMatch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.submitted && ctx.isPasswordFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r206.submitted && ctx.successMessage);
        }
      },
      directives: [_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSideBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".main-wrapper[_ngcontent-%COMP%] {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13cmFwcGVyIHtcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-change-password',
          templateUrl: './change-password.component.html',
          styleUrls: ['./change-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/login/login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/patient/login/login.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesPatientLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LoginComponent_form_14_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r131.errorMessage, " ");
      }
    }

    function LoginComponent_form_14_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 6 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_14_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_form_14_div_15_div_1_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_form_14_div_15_div_2_Template, 2, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r134.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r134.errors.minlength);
      }
    }

    function LoginComponent_form_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_14_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r130.form.valid && ctx_r138.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_14_div_3_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r140.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_14_div_9_Template, 2, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_14_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139);

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r141.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_form_14_div_15_Template, 3, 2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password ?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Don\u2019t have an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r130.submitted && ctx_r129.isLoginFailed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r129.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r130.submitted && _r132.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r129.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r130.submitted && _r134.invalid);
      }
    }

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, tokenStorage, router, activatedRoute) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
        this.retUrl = "patient/profile";
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
          }

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this47.retUrl = params.get('retUrl');
            console.log('LoginComponent/ngOnInit ' + _this47.retUrl);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this48 = this;

          this.authService.patientLogin(this.form).subscribe(function (user) {
            _this48.tokenStorage.saveToken(user.accessToken);

            _this48.tokenStorage.saveUser(user);

            _this48.tokenStorage.saveUserType(user.userType);

            _this48.isLoginFailed = false;
            _this48.isLoggedIn = true;
            _this48.roles = _this48.tokenStorage.getUser().roles;

            _this48.authService.getLoggedInUser.emit(user);

            console.log("login successful");
            console.log(_this48.tokenStorage.getUser());
            console.log('return to ' + _this48.retUrl);

            if (_this48.retUrl != null) {
              _this48.router.navigate([_this48.retUrl]);
            } else {
              _this48.router.navigate(['patient/appointments']);
            }
          }, function (err) {
            _this48.errorMessage = err.error.message;
            _this48.isLoginFailed = true;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-patient-login"]],
      decls: 15,
      vars: 1,
      consts: [[1, "container-fluid", "m-0", "bg-white"], [1, "row", "pt-5", "pb-5"], [1, "col-md-8", "offset-md-2"], [1, "account-content"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "d-none", "d-md-block"], ["src", "assets/img/login-banner.png", "alt", "Login", 1, "img-fluid"], [1, "col-md-12", "col-lg-6"], [1, "d-inline"], [1, "text-right"], ["routerLink", "/doctor/login", 1, "text_primary"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "form-focus"], ["name", "email", "required", "", "type", "email", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "focus-label"], ["name", "password", "required", "", "minlength", "6", "type", "password", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["routerLink", "/patient/forgot-password", 1, "forgot-link", "text_primary"], ["type", "submit", 1, "btn", "btn-block", "btn-lg", "btn_secondary", "text-white"], [1, "text-center", "text-dark"], ["routerLink", "/patient/signup", 1, "text_primary"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not a Patient?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_form_14_Template, 25, 5, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/patient-appointment/patient-appointment.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/patient/patient-appointment/patient-appointment.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PatientAppointmentComponent */

  /***/
  function srcAppPagesPatientPatientAppointmentPatientAppointmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAppointmentComponent", function () {
      return PatientAppointmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-countdown */
    "./node_modules/ngx-countdown/__ivy_ngcc__/fesm2015/ngx-countdown.js");

    function PatientAppointmentComponent_img_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r325.doctorAvatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PatientAppointmentComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }
    }

    function PatientAppointmentComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r327.appointment.state));
      }
    }

    function PatientAppointmentComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r328.appointment.state));
      }
    }

    function PatientAppointmentComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r329.appointment.state));
      }
    }

    var PatientAppointmentComponent =
    /*#__PURE__*/
    function () {
      function PatientAppointmentComponent(doctorSerivce) {
        _classCallCheck(this, PatientAppointmentComponent);

        this.doctorSerivce = doctorSerivce;
        this.config = {
          leftTime: 0,
          size: 'large',
          demand: false
        };
      }

      _createClass(PatientAppointmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          this.config.leftTime = Math.floor(new Date(this.appointment.appointmentDate).getTime() - new Date().getTime() / 1000);
          console.log("left time", this.config.leftTime);
          this.appointmentDate = new Date(this.appointment.appointmentDate);
          this.bookingDate = new Date(this.appointment.bookingDate);
          this.doctorSerivce.getById(this.appointment.doctorId).subscribe(function (doc) {
            _this49.doctor = doc;
            console.log("debug appointment doctor: ", JSON.stringify(_this49.doctor));
          });
          this.doctorSerivce.getAvatar(this.appointment.doctorId).subscribe(function (avatar) {
            var _a, _b;

            _this49.doctorAvatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
          });
        }
      }, {
        key: "onFinished",
        value: function onFinished() {
          console.log("timer finished");
        }
      }]);

      return PatientAppointmentComponent;
    }();

    PatientAppointmentComponent.ɵfac = function PatientAppointmentComponent_Factory(t) {
      return new (t || PatientAppointmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]));
    };

    PatientAppointmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAppointmentComponent,
      selectors: [["app-patient-appointment"]],
      inputs: {
        appointment: "appointment"
      },
      decls: 27,
      vars: 27,
      consts: [[1, "list-group-item"], [1, "text-dark", 3, "routerLink"], [1, "row"], [1, "col-sm"], [3, "routerLink"], [1, "avatar"], ["alt", "Doctor Image", 3, "src", 4, "ngIf"], ["src", "assets/img/default-doctor.png", "class", "avatar-img rounded-circle", "alt", "Doctor Image", 4, "ngIf"], ["class", "col-sm", 4, "ngIf"], [3, "config", "finished"], ["alt", "Doctor Image", 3, "src"], ["src", "assets/img/default-doctor.png", "alt", "Doctor Image", 1, "avatar-img", "rounded-circle"], [1, "badge", "badge-pill", "bg-success"], [1, "badge", "badge-pill", "bg-danger"], [1, "badge", "badge-pill", "badge-warning"]],
      template: function PatientAppointmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PatientAppointmentComponent_img_6_Template, 1, 1, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PatientAppointmentComponent_img_7_Template, 1, 0, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PatientAppointmentComponent_div_21_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PatientAppointmentComponent_div_22_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PatientAppointmentComponent_div_23_Template, 4, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "countdown", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("finished", function PatientAppointmentComponent_Template_countdown_finished_25_listener() {
            return ctx.onFinished();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "$!h!:$!m!:$!s!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/patient/chat/video/", ctx.appointment.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/doctor/profile/", ctx.appointment.doctorId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorAvatar.length > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doctorAvatar.length < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Dr ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, ctx.doctor.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, ctx.doctor.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 17, ctx.appointment.description, 0, 30));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 21, ctx.appointmentDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 24, ctx.bookingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "ACCEPTED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "CANCELED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appointment.state == "PENDING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: [".cursor-pointer[_ngcontent-%COMP%]{\n    cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LWFwcG9pbnRtZW50L3BhdGllbnQtYXBwb2ludG1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC1hcHBvaW50bWVudC9wYXRpZW50LWFwcG9pbnRtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Vyc29yLXBvaW50ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAppointmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-appointment',
          templateUrl: './patient-appointment.component.html',
          styleUrls: ['./patient-appointment.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }];
      }, {
        appointment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/patient-appointments/patient-appointments.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/patient/patient-appointments/patient-appointments.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PatientAppointmentsComponent */

  /***/
  function srcAppPagesPatientPatientAppointmentsPatientAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAppointmentsComponent", function () {
      return PatientAppointmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../patient-appointment/patient-appointment.component */
    "./src/app/pages/patient/patient-appointment/patient-appointment.component.ts");

    function PatientAppointmentsComponent_app_patient_appointment_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-patient-appointment", 19);
      }

      if (rf & 2) {
        var appointment_r203 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appointment", appointment_r203);
      }
    }

    function PatientAppointmentsComponent_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You Have No appointments");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PatientAppointmentsComponent =
    /*#__PURE__*/
    function () {
      function PatientAppointmentsComponent(appointmentService, authService, patientService) {
        _classCallCheck(this, PatientAppointmentsComponent);

        this.appointmentService = appointmentService;
        this.authService = authService;
        this.patientService = patientService;
        this.appointments = [];
      }

      _createClass(PatientAppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this50.patientService.getById(user.id).subscribe(function (patient) {
              _this50.patient = patient;
            });

            _this50.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this50.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });

            _this50.appointmentService.getAllPatientAppoitments(user.id).subscribe(function (apps) {
              _this50.appointments = apps;
              console.log("appointments: ", JSON.stringify(apps));
            });
          });
        }
      }]);

      return PatientAppointmentsComponent;
    }();

    PatientAppointmentsComponent.ɵfac = function PatientAppointmentsComponent_Factory(t) {
      return new (t || PatientAppointmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]));
    };

    PatientAppointmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientAppointmentsComponent,
      selectors: [["app-patient-appointments"]],
      decls: 33,
      vars: 3,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container-fluid", "mb-2"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "list-group"], [1, "list-group-item"], [1, "col-sm"], [3, "appointment", 4, "ngFor", "ngForOf"], ["class", "list-group-item", 4, "ngIf"], [3, "appointment"]],
      template: function PatientAppointmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-patient-side-bar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Doctor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Appointment Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Booking Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " State ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Time Left ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PatientAppointmentsComponent_app_patient_appointment_31_Template, 1, 1, "app-patient-appointment", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PatientAppointmentsComponent_li_32_Template, 3, 0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.appointments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.appointments == null ? null : ctx.appointments.length) === 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_5__["PatientSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _patient_appointment_patient_appointment_component__WEBPACK_IMPORTED_MODULE_7__["PatientAppointmentComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC1hcHBvaW50bWVudHMvcGF0aWVudC1hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAppointmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-appointments',
          templateUrl: './patient-appointments.component.html',
          styleUrls: ['./patient-appointments.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_1__["AppointmentService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: PatientSideBarComponent */

  /***/
  function srcAppPagesPatientPatientSideBarPatientSideBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSideBarComponent", function () {
      return PatientSideBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/token-storage.service */
    "./src/app/services/token-storage.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PatientSideBarComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r344.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r344.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PatientSideBarComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PatientSideBarComponent_h5_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r346.patient.birthday), " ");
      }
    }

    function PatientSideBarComponent_h5_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r347.patient.country), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r347.patient.city), " ");
      }
    }

    var PatientSideBarComponent =
    /*#__PURE__*/
    function () {
      function PatientSideBarComponent(authService, patientService, tokenStorageService, router) {
        _classCallCheck(this, PatientSideBarComponent);

        this.authService = authService;
        this.patientService = patientService;
        this.tokenStorageService = tokenStorageService;
        this.router = router;
      }

      _createClass(PatientSideBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this51.patientService.getById(user.id).subscribe(function (patient) {
              _this51.patient = patient;
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenStorageService.signOut(); //window.location.reload();

          this.router.navigate(["home"]).then(function () {
            window.location.reload();
          });
        }
      }]);

      return PatientSideBarComponent;
    }();

    PatientSideBarComponent.ɵfac = function PatientSideBarComponent_Factory(t) {
      return new (t || PatientSideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PatientSideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PatientSideBarComponent,
      selectors: [["app-patient-side-bar"]],
      inputs: {
        avatar: "avatar"
      },
      decls: 39,
      vars: 10,
      consts: [[1, "card", "p-1"], [1, "row"], [1, "col-12"], [1, "row", "text-center", "pb-2"], ["data-fancybox", "gallery", 3, "href", 4, "ngIf"], ["data-fancybox", "gallery", "href", "assets/img/default-patient.jpeg", 4, "ngIf"], [1, "patient-details"], [4, "ngIf"], ["class", "mb-0", 4, "ngIf"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/patient/appointments"], [1, "fa", "fa-bookmark", "p-1"], ["routerLink", "/patient/profile"], [1, "fa", "fa-user", "p-1"], ["routerLink", "/patient/change-password"], [1, "fa", "fa-lock", "p-1"], [1, "col-12", 3, "click"], ["href", "#"], [1, "fa", "fa-sign-out"], ["data-fancybox", "gallery", 3, "href"], ["alt", "Patient Image", 1, "img-fluid", "img-thumbnail", "patient-img", 3, "src"], ["data-fancybox", "gallery", "href", "assets/img/default-patient.jpeg"], ["src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 1, "img-fluid", "img-thumbnail", "patient-img"], [1, "fa", "fa-birthday-cake"], [1, "mb-0"], [1, "fas", "fa-map-marker-alt"]],
      template: function PatientSideBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientSideBarComponent_a_5_Template, 2, 2, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PatientSideBarComponent_a_6_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PatientSideBarComponent_h5_13_Template, 4, 3, "h5", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PatientSideBarComponent_h5_14_Template, 5, 6, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Appointments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientSideBarComponent_Template_div_click_33_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) > 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.avatar == null ? null : ctx.avatar.length) < 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.patient == null ? null : ctx.patient.firstname), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.patient == null ? null : ctx.patient.lastname), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.patient == null ? null : ctx.patient.birthday);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.patient == null ? null : ctx.patient.country) && (ctx.patient == null ? null : ctx.patient.city));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".patient-img[_ngcontent-%COMP%]{\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n}\n\n.active[_ngcontent-%COMP%] {\n    border-color: #FF5358;\n    border-right-style: solid;\n    border-width: 3px;\n    color: #FF5358;\n}\n\n.active[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    color: #FF5358 !important;\n}\n\n.nav-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    color: rgb(99, 88, 88);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wYXRpZW50LXNpZGUtYmFyL3BhdGllbnQtc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvcGF0aWVudC1zaWRlLWJhci9wYXRpZW50LXNpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC1pbWd7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uYWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6ICNGRjUzNTg7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgICBjb2xvcjogI0ZGNTM1ODtcbn1cblxuLmFjdGl2ZSA+ICoge1xuICAgIGNvbG9yOiAjRkY1MzU4ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSA+ICoge1xuICAgIGNvbG9yOiByZ2IoOTksIDg4LCA4OCk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientSideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-side-bar',
          templateUrl: './patient-side-bar.component.html',
          styleUrls: ['./patient-side-bar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
        }, {
          type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, {
        avatar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/profile/profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/patient/profile/profile.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesPatientProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProfileComponent_div_19_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 44);
      }

      if (rf & 2) {
        var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r185.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfileComponent_div_19_img_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 45);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function ProfileComponent_div_19_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r187.uploadProgress + "%"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx_r187.uploadProgress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r187.uploadProgress, "% ");
      }
    }

    function ProfileComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_19_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r188.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfileComponent_div_19_img_7_Template, 1, 1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProfileComponent_div_19_img_8_Template, 1, 0, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Upload Photo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileComponent_div_19_Template_input_change_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r190.uploadAvatar($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "small", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Allowed JPG, GIF or PNG. Max size of 2MB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_div_19_div_21_Template, 3, 5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.patient.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r192.patient.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date of Birth");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_36_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.patient.birthday = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Blood Group");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_select_ngModelChange_41_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r194.patient.bloodGroup = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "A+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "B+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "AB-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "AB+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "O-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "O+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r195.patient.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mobile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_67_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r196.patient.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_72_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r197.patient.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_77_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r198.patient.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Zip Code");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_82_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r199.patient.zipCode = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_div_19_Template_input_ngModelChange_87_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r189);

          var ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r200.patient.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r184.avatar.length > 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r184.avatar.length < 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r184.currentSelectedAvatar);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.firstname)("ngModel", ctx_r184.patient.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.lastname)("ngModel", ctx_r184.patient.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r184.patient.birthday);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient == null ? null : ctx_r184.patient.bloodGroup)("ngModel", ctx_r184.patient.bloodGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.email)("ngModel", ctx_r184.patient.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.phone)("ngModel", ctx_r184.patient.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.address)("ngModel", ctx_r184.patient.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.city)("ngModel", ctx_r184.patient.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.zipCode)("ngModel", ctx_r184.patient.zipCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r184.patient.country)("ngModel", ctx_r184.patient.country);
      }
    }

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(authService, patientService) {
        _classCallCheck(this, ProfileComponent);

        this.authService = authService;
        this.patientService = patientService;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this52 = this;

          this.authService.getCurrentUser().subscribe(function (user) {
            _this52.patientService.getById(user.id).subscribe(function (patient) {
              _this52.patient = patient; // const isoBirthday = new Date(patient.birthday);
              // this.birthday = isoBirthday.toISOString().substr(0, 10);;

              console.log("birthday : ", _this52.patient.birthday);
            });

            _this52.patientService.getAvatar(user.id).subscribe(function (avatar) {
              var _a, _b;

              _this52.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
            });
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this53 = this;

          console.log("patient new name: ", JSON.stringify(this.patient)); // const birthday = new Date(this.birthday)
          // this.patient.birthday = birthday.toISOString();

          this.patientService.updatePatient(this.patient).subscribe(function (patient) {
            _this53.patient = patient;
            window.location.reload();
          });
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(event) {
          var _this54 = this;

          console.log("upload started");
          this.currentSelectedAvatar = event.target.files.item(0);
          this.patientService.uploadAvatar(this.patient.id, this.currentSelectedAvatar).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this54.uploadProgress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
              _this54.patientService.getAvatar(_this54.patient.id).subscribe(function (avatar) {
                _this54.avatar = 'data:image/jpeg;base64,' + avatar.image.data;
                _this54.uploadProgress = 0;
                _this54.currentSelectedAvatar = undefined;
              });
            }
          }, function (err) {
            _this54.uploadProgress = 0;
            _this54.uploadErrorMessage = 'Could not upload the Photo!';
            _this54.currentSelectedAvatar = undefined;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 20,
      vars: 2,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "#"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "row", "mb-3"], [1, "col-md-5", "col-lg-4", "col-xl-3"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "card", "p-1", "m-1"], [4, "ngIf"], [3, "ngSubmit"], [1, "row"], [1, "col-12", "col-md-12"], [1, "form-group"], [1, "col-2"], ["class", "img-fluid patient-img", "alt", "Patient Image", 3, "src", 4, "ngIf"], ["class", "img-fluid patient-img", "src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 4, "ngIf"], [1, "col-10"], [1, "col-12"], [1, "text-center"], [1, "change-photo-btn", "btn_primary"], ["for", "file"], [1, "fa", "fa-upload"], ["id", "file", "type", "file", 1, "upload", 3, "change"], [1, "form-text", "text-muted"], [1, "col-12", "col-md-6"], ["name", "firstname", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "lastname", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "birthday", "type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "bloodGroup", 1, "form-control", "select", 3, "value", "ngModel", "ngModelChange"], ["name", "email", "type", "email", "readonly", "", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "phone", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "address", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "city", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "zipCode", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], ["name", "country", "type", "text", 1, "form-control", 3, "value", "ngModel", "ngModelChange"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn_primary"], ["alt", "Patient Image", 1, "img-fluid", "patient-img", 3, "src"], ["src", "assets/img/default-patient.jpeg", "alt", "Patient Image", 1, "img-fluid", "patient-img"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Patient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Profile Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-patient-side-bar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfileComponent_div_19_Template, 91, 22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.patient);
        }
      },
      directives: [_patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
      styles: ["input[type=\"date\"][_ngcontent-%COMP%]::-webkit-clear-button {\n    display: none;\n}\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-inner-spin-button { \n    display: none;\n}\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n    color: #2c3e50;\n}\n\n\n\n\n\ninput[type=\"date\"][_ngcontent-%COMP%], focus[_ngcontent-%COMP%] {\n    color: #95a5a6;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n}\n\n.patient-img[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n    border-radius: 10px;\n}\n\n.change-photo-btn[_ngcontent-%COMP%] {\n    background-color: #20c0f3;\n    border-radius: 50px;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 13px;\n    font-weight: 600;\n    margin: 0 auto;\n    padding: 10px 15px;\n    position: relative;\n    transition: .3s;\n    text-align: center;\n    width: 220px;\n}\n\n.change-photo-btn[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\n    bottom: 0;\n    cursor: pointer;\n    filter: alpha(opacity=0);\n    left: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsNEJBQTRCOztBQUM1QjtJQUNJLGFBQWE7QUFDakI7O0FBRUEsdUNBQXVDOztBQUN2QztJQUNJLGNBQWM7QUFDbEI7O0FBRUEsd0NBQXdDOztBQUN4Qzs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07SUFDTixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF0aWVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNsZWFyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogUmVtb3ZlcyB0aGUgc3BpbiBidXR0b24gKi9cbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgXG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogQWx3YXlzIGRpc3BsYXkgdGhlIGRyb3AgZG93biBjYXJldCAqL1xuaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi8qIEEgZmV3IGN1c3RvbSBzdHlsZXMgZm9yIGRhdGUgaW5wdXRzICovXG4vKiBpbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgY29sb3I6ICM5NWE1YTY7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCIsIGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlY2YwZjE7XG4gICAgYmFja2dyb3VuZDojZWNmMGYxO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn0gKi9cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0sIGZvY3VzIHtcbiAgICBjb2xvcjogIzk1YTVhNjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wYXRpZW50LWltZ3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2hhbmdlLXBob3RvLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYzBmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDIyMHB4O1xufVxuXG4uY2hhbmdlLXBob3RvLWJ0biBpbnB1dC51cGxvYWQge1xuICAgIGJvdHRvbTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/signup/signup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/patient/signup/signup.component.ts ***!
    \**********************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppPagesPatientSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SignupComponent_form_12_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_7_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_7_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_7_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r145.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_13_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_13_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_13_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_19_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Username is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at least 3 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Username must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_19_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_19_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_19_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r149.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_25_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone Number must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_25_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_25_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_25_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at least 10 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email must be at most 50 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_31_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_31_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_31_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r153.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r153.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r153.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at least 8 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password must be at most 20 characters ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_12_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_form_12_div_37_div_1_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_form_12_div_37_div_2_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_form_12_div_37_div_3_Template, 2, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r155.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r155.errors.minlength);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r151.errors.maxlength);
      }
    }

    function SignupComponent_form_12_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Signup failed!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r157.errorMessage, " ");
      }
    }

    function SignupComponent_form_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_form_12_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return _r144.form.valid && ctx_r176.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 14, 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r178.form.firstname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignupComponent_form_12_div_7_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r179.form.lastname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_form_12_div_13_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r180.form.username = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Username");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_form_12_div_19_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 22, 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r181.form.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SignupComponent_form_12_div_25_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r182.form.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SignupComponent_form_12_div_31_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 26, 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_form_12_Template_input_ngModelChange_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r177);

          var ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r183.form.password = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Create Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_form_12_div_37_Template, 4, 3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Already have an account?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_form_12_div_43_Template, 4, 1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

        var _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

        var _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

        var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.firstname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r145.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.lastname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r147.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r149.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r151.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r153.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r142.form.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && _r155.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r144.submitted && ctx_r142.isSignUpFailed);
      }
    }

    function SignupComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your registration is successful! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(router, authService) {
        _classCallCheck(this, SignupComponent);

        this.router = router;
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this55 = this;

          this.authService.patientRegister(this.form).subscribe(function (data) {
            console.log(data);
            _this55.isSuccessful = true;
            _this55.isSignUpFailed = false;

            _this55.router.navigate(["patient/login"]);
          }, function (err) {
            _this55.errorMessage = err.error.message;
            _this55.isSignUpFailed = true;
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-patient-signup"]],
      decls: 14,
      vars: 2,
      consts: [[1, "container-fluid", "m-0", "bg-white"], [1, "row", "pt-5", "pb-5", "m-0"], [1, "col-md-8", "offset-md-2"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-lg-6", "d-none", "d-md-block"], ["src", "assets/img/login-banner.png", "alt", "Login Banner", 1, "img-fluid"], [1, "col-md-12", "col-lg-6", "login-right"], [1, "login-header"], ["routerLink", "/doctor/signup", 1, "text_primary", "h6"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success ", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "form-focus"], ["type", "text", "name", "firstname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["firstname", "ngModel"], [1, "focus-label"], ["class", "alert-danger", 4, "ngIf"], ["type", "text", "name", "lastname", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["lastname", "ngModel"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["type", "tel", "name", "phone", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "email", "name", "email", "required", "", "minlength", "10", "maxlength", "50", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "8", "maxlength", "20", 1, "form-control", "floating", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "text-right"], ["routerLink", "patient/login", 1, "forgot-link", "text_primary"], ["type", "submit", 1, "btn", "btn_secondary", "btn-block", "btn-lg"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Patient Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Not a Patient?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignupComponent_form_12_Template, 44, 13, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignupComponent_div_13_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhdGllbnQvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-patient-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/patient/video-chat/video-chat.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/patient/video-chat/video-chat.component.ts ***!
    \******************************************************************/

  /*! exports provided: VideoChatComponent */

  /***/
  function srcAppPagesPatientVideoChatVideoChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoChatComponent", function () {
      return VideoChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/CallState */
    "./src/app/models/CallState.ts");
    /* harmony import */


    var src_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared */
    "./src/app/shared.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/appointment.service */
    "./src/app/services/appointment.service.ts");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../patient-side-bar/patient-side-bar.component */
    "./src/app/pages/patient/patient-side-bar/patient-side-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["localeVideo"];
    var _c1 = ["remoteVideo"];
    var _c2 = ["cd"];

    function VideoChatComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Waiting");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ringing");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_22_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r259);

          var ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r258.acceptCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Accept Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_22_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r259);

          var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r260.denyCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Deny Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Ended");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Denied");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Canceled");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VideoChatComponent_div_28_video_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 33, 34);
      }
    }

    function VideoChatComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VideoChatComponent_div_28_video_1_Template, 2, 0, "video", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VideoChatComponent_div_28_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r264);

          var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r263.endCall();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "End Call");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r257.isOngoing());
      }
    }

    var offerOptions = {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true
    };

    var VideoChatComponent =
    /*#__PURE__*/
    function () {
      function VideoChatComponent(route, appointmentService, doctorService, patientService) {
        _classCallCheck(this, VideoChatComponent);

        this.route = route;
        this.appointmentService = appointmentService;
        this.doctorService = doctorService;
        this.patientService = patientService; // websocket stuff

        this.websocketUrl = src_app_shared__WEBPACK_IMPORTED_MODULE_3__["BASE_SOCKET_URL"] + "/socket"; // production url
        // call states

        this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Idle; // callState: CallState = CallState.Ringing;

        this.callerName = "";
        this.config = {
          leftTime: 0,
          size: 'large',
          demand: true
        };
      }

      _createClass(VideoChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          // getting patient info
          this.route.params.subscribe(function (params) {
            var appointmentId = params['id'];

            _this56.appointmentService.getById(appointmentId).subscribe(function (appointment) {
              _this56.appointment = appointment; // get coundown time 

              _this56.config.leftTime = Math.floor(new Date(_this56.appointment.appointmentDate).getTime() - new Date().getTime() / 1000);
              console.log("left time", _this56.config.leftTime);

              _this56.patientService.getById(appointment.doctorId).subscribe(function (patient) {
                _this56.patient = patient;
              });

              _this56.patientService.getAvatar(appointment.doctorId).subscribe(function (avatar) {
                var _a, _b;

                _this56.avatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
              });

              _this56.doctorService.getById(appointment.doctorId).subscribe(function (doc) {
                _this56.doctor = doc;
              });

              _this56.doctorService.getAvatar(appointment.doctorId).subscribe(function (avatar) {
                var _a, _b;

                _this56.doctorAvatar = 'data:image/jpeg;base64,' + ((_b = (_a = avatar) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.data);
              });
            });
          });
          this.conn = new WebSocket(this.websocketUrl);

          this.conn.onopen = function (ev) {
            return _this56.onOpen(ev);
          };

          this.conn.onmessage = function (msg) {
            return _this56.onMessage(msg);
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('vid1', this.localeVideo);
          console.log('vid2', this.remoteVideo);
          this.config.leftTime = Math.floor(new Date(this.appointment.appointmentDate).getTime() - new Date().getTime() / 1000);
          this.cd.begin();
        }
      }, {
        key: "onOpen",
        value: function onOpen(ev) {
          console.log("Connected to the signaling server", ev);
        }
      }, {
        key: "onMessage",
        // on Message Recieved from WebSocket Server;
        value: function onMessage(msg) {
          console.log("Got message", msg.data);
          var content = JSON.parse(msg.data);
          var data = content.data;

          switch (content.event) {
            // when somebody wants to call us
            case "offer":
              this.handleOffer(data);
              break;

            case "answer":
              this.handleAnswer(data);
              break;
            // when a remote peer sends an ice candidate to us

            case "candidate":
              this.handleCandidate(data);
              break;

            case "call":
              this.handleCall(data);
              break;

            case "accept_call":
              this.handleAcceptCall(data);
              break;

            case "deny_call":
              this.handleDenyCall(data);
              break;

            case "cancel_call":
              this.handleCancelCall(data);
              break;

            case "end_call":
              this.handleEndCall(data);
              break;

            default:
              break;
          }
        }
      }, {
        key: "createOffer",
        value: function createOffer() {
          var _this57 = this;

          return this.peerConnection.createOffer(offerOptions).then(function (offer) {
            _this57.peerConnection.setLocalDescription(offer).then(function () {
              return _this57.send({
                event: "offer",
                data: offer
              });
            });
          }, function (error) {
            alert("Error creating an offer");
            console.log(error);
          });
        }
      }, {
        key: "initializePeer",
        value: function initializePeer() {
          var _this58 = this;

          var configuration = {
            iceServers: [{
              urls: "stun:23.21.150.121"
            }, {
              urls: "stun:stun.l.google.com:19302"
            }, {
              urls: "turn:numb.viagenie.ca",
              "credential": "webrtcdemo",
              "username": "louis@mozilla.com"
            }]
          };
          this.peerConnection = new RTCPeerConnection(configuration);
          console.log("peer Connection created", this.peerConnection); // Setup ice handling

          this.peerConnection.onicecandidate = function (event) {
            if (event.candidate) {
              _this58.send({
                event: "candidate",
                data: event.candidate
              });
            }
          };

          this.peerConnection.ontrack = function (ev) {
            return _this58.gotRemoteStream(ev);
          };
        }
      }, {
        key: "initializingCall",
        value: function initializingCall() {
          var _this59 = this;

          // creating peer connection
          this.initializePeer(); // Adding support for video
          // const constraints = {
          //   video: true, audio: true
          // };

          var constraints = {
            video: {
              width: 1280,
              height: 720
            },
            audio: true
          }; // requesting Media Devices 

          return navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
            /* use the stream */
            //    stream.getTracks().forEach(track => pc1.addTrack(track, localStream));
            stream.getTracks().forEach(function (track) {
              return _this59.peerConnection.addTrack(track, stream);
            });

            _this59.gotStream(stream);
          })["catch"](function (err) {
            /* handle the error */
            console.log("error adding stream ", JSON.stringify(err));
          });
        }
      }, {
        key: "handleOffer",
        value: function handleOffer(offer) {
          var _this60 = this;

          this.peerConnection.setRemoteDescription(new RTCSessionDescription(offer)); // create and send an answer to an offer

          this.peerConnection.createAnswer().then(function (answer) {
            _this60.peerConnection.setLocalDescription(answer).then(function () {
              return _this60.send({
                event: "answer",
                data: answer
              });
            });
          }, function (error) {
            alert("Error creating an answer");
            console.log("handleOffer Error", error);
          });
        }
      }, {
        key: "handleCandidate",
        value: function handleCandidate(candidate) {
          this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
          console.log("handel Candidate", JSON.stringify(candidate));
        }
      }, {
        key: "handleAnswer",
        value: function handleAnswer(answer) {
          this.peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
          console.log("connection established successfully!!");
        }
      }, {
        key: "handleCall",
        value: function handleCall(caller) {
          console.log("call form", caller);
          this.callerName = caller;
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ringing;
        }
      }, {
        key: "handleAcceptCall",
        value: function handleAcceptCall(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("handle accept call", data);
                    console.log("creating offer"); // setTimeout(() => this.createOffer(), 400);

                    _context2.next = 4;
                    return this.createOffer();

                  case 4:
                    console.log("call accepted");

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "handleDenyCall",
        value: function handleDenyCall(data) {
          console.log("handle deny call", data);
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
          this.stop();
        }
      }, {
        key: "handleCancelCall",
        value: function handleCancelCall(data) {
          console.log("handle deny call", data);
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Canceled;
          this.stop();
        }
      }, {
        key: "handleEndCall",
        value: function handleEndCall(data) {
          console.log("handle End call", data);
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
          this.stop();
        }
      }, {
        key: "acceptCall",
        value: function acceptCall() {
          var _this61 = this;

          console.log("accept call"); // requesting media

          console.log("requesting media"); // this.start();

          this.initializingCall().then(function () {
            _this61.send({
              data: _this61.callerName,
              event: "accept_call"
            });

            _this61.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ongoing;
          });
        }
      }, {
        key: "denyCall",
        value: function denyCall() {
          console.log("deny call");
          this.send({
            data: this.callerName,
            event: "deny_call"
          });
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
          this.stop();
        }
      }, {
        key: "endCall",
        value: function endCall() {
          this.stop();
          this.callState = src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
          this.send({
            data: this.callerName,
            event: "end_call"
          });
        }
      }, {
        key: "send",
        value: function send(message) {
          console.log("sending message", JSON.stringify(message));
          this.conn.send(JSON.stringify(message));
        }
      }, {
        key: "gotRemoteStream",
        value: function gotRemoteStream(e) {
          // console.log('gotRemoteStream', e.track, e.streams[0]);
          try {
            this.remoteVideo.nativeElement.srcObject = null;
            this.remoteVideo.nativeElement.srcObject = e.streams[0];
          } catch (error) {
            console.log('error setting remote stream', error);
            this.remoteVideo.nativeElement.src = URL.createObjectURL(e.streams[0]);
          }
        }
      }, {
        key: "gotStream",
        value: function gotStream(stream) {
          console.log('Received local stream');

          try {
            this.localeVideo.nativeElement.srcObject = stream;
          } catch (error) {
            console.log('error setting locale stream', error);
            this.localeVideo.nativeElement.src = URL.createObjectURL(stream);
          }

          this.localstream = stream;
        }
      }, {
        key: "stop",
        value: function stop() {
          console.log('Ending Call' + '\n\n');
          this.peerConnection.close();
          this.peerConnection = null;
          this.localstream.getTracks().forEach(function (track) {
            console.log("stoping stream", track);
            track.stop();
          });
          this.localeVideo.nativeElement.srcObject = null;
        }
      }, {
        key: "isIdle",
        value: function isIdle() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Idle;
        }
      }, {
        key: "isDenied",
        value: function isDenied() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Denied;
        }
      }, {
        key: "isOngoing",
        value: function isOngoing() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ongoing;
        }
      }, {
        key: "isEnded",
        value: function isEnded() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ended;
        }
      }, {
        key: "isRinging",
        value: function isRinging() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Ringing;
        }
      }, {
        key: "isCanceled",
        value: function isCanceled() {
          return this.callState == src_app_models_CallState__WEBPACK_IMPORTED_MODULE_2__["CallState"].Canceled;
        }
      }, {
        key: "onFinished",
        value: function onFinished() {
          console.log("timer finished");
        }
      }]);

      return VideoChatComponent;
    }();

    VideoChatComponent.ɵfac = function VideoChatComponent_Factory(t) {
      return new (t || VideoChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"]));
    };

    VideoChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VideoChatComponent,
      selectors: [["app-video-chat"]],
      viewQuery: function VideoChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.localeVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.remoteVideo = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cd = _t.first);
        }
      },
      decls: 29,
      vars: 8,
      consts: [[1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-12", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container-fluid", "m-3"], [1, "row"], [1, "col-md-5", "col-lg-4", "col-xl-3", "theiaStickySidebar"], [3, "avatar"], [1, "col-md-7", "col-lg-8", "col-xl-9"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "card-body"], ["id", "container"], ["id", "idle", "class", "d-flex justify-content-center align-items-center view-size", 4, "ngIf"], ["id", "ringing", "class", "view-size", 4, "ngIf"], ["id", "ended", "class", "d-flex justify-content-center align-items-center view-size", 4, "ngIf"], ["id", "locale", "playsinline", "", "autoplay", "", "muted", "", 3, "hidden"], ["localeVideo", ""], ["id", "ongoing", 4, "ngIf"], ["id", "idle", 1, "d-flex", "justify-content-center", "align-items-center", "view-size"], [1, "status"], ["id", "ringing", 1, "view-size"], [1, "buttons"], [1, "btn", "btn_secondary", 3, "click"], ["id", "ended", 1, "d-flex", "justify-content-center", "align-items-center", "view-size"], ["id", "ongoing"], ["id", "remote", "playsinline", "", "autoplay", "", 4, "ngIf"], [1, "btn", "btn_secondary", "end-call", 3, "click"], ["id", "remote", "playsinline", "", "autoplay", ""], ["remoteVideo", ""]],
      template: function VideoChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Video Chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-patient-side-bar", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VideoChatComponent_div_21_Template, 5, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VideoChatComponent_div_22_Template, 10, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, VideoChatComponent_div_23_Template, 4, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VideoChatComponent_div_24_Template, 4, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VideoChatComponent_div_25_Template, 4, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "video", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, VideoChatComponent_div_28_Template, 4, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("avatar", ctx.avatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIdle());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isRinging());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEnded());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDenied());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isCanceled());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isOngoing());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOngoing());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _patient_side_bar_patient_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["PatientSideBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
      styles: ["video[_ngcontent-%COMP%] {\n    \n    \n    \n    width: 100%;\n    height: 100%;\n} \n\n#container[_ngcontent-%COMP%] {\n    width: 100%;\n    position: relative;\n} \n\n#locale[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    position:  absolute;\n    top: 10px;\n    left: 10px;\n    \n} \n\n.thumbnail[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    position:  absolute;\n    top: 10px;\n    left: 10px;\n} \n\n \n\n.status[_ngcontent-%COMP%] {\n    background-color: #FF5358;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 2px 4px 8px -2px rgba(171,158,171,0.77);\n} \n\n.view-size[_ngcontent-%COMP%] {\n    height: 80vh;\n} \n\n#ringing[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n} \n\n#ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-self: center;\n} \n\n#ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .status[_ngcontent-%COMP%] {\n    align-self: center;\n    margin-bottom: 2rem;\n} \n\n#ringing[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > .buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly; \n} \n\n#ongoing[_ngcontent-%COMP%]  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n} \n\n.end-call[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 20px;\n    text-align: center;\n} \n\n.countdown[_ngcontent-%COMP%]{\n    display: block;\n    font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF0aWVudC92aWRlby1jaGF0L3ZpZGVvLWNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFDQTs7Ozs7OztDQU9DOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXRpZW50L3ZpZGVvLWNoYXQvdmlkZW8tY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xuICAgIC8qIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrOyAqL1xuICAgIC8qIHdpZHRoOiAzMjBweDsgKi9cbiAgICAvKiBoZWlnaHQ6IDI0MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0gXG5cbiNjb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2xvY2FsZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICAvKiB6LWluZGV4OiA0MDAwMDsgKi9cbn1cblxuLnRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246ICBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbn1cbi8qIFxuI2lkbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLWhlaWdodDogODB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuKi9cblxuLnN0YXR1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNTM1ODtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDhweCAtMnB4IHJnYmEoMTcxLDE1OCwxNzEsMC43Nyk7XG59IFxuXG4udmlldy1zaXplIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG59XG5cbiNyaW5naW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cbiNyaW5naW5nID4gZGl2IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiNyaW5naW5nID4gZGl2ID4gLnN0YXR1cyB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbiNyaW5naW5nID4gZGl2ID4gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxufVxuXG4jb25nb2luZyAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLmVuZC1jYWxsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvdW50ZG93bntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-video-chat',
          templateUrl: './video-chat.component.html',
          styleUrls: ['./video-chat.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_appointment_service__WEBPACK_IMPORTED_MODULE_5__["AppointmentService"]
        }, {
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]
        }, {
          type: src_app_services_patient_service__WEBPACK_IMPORTED_MODULE_7__["PatientService"]
        }];
      }, {
        localeVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['localeVideo']
        }],
        remoteVideo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['remoteVideo']
        }],
        cd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['cd']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/search/search.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/search/search.component.ts ***!
    \**************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppPagesSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/doctor.service */
    "./src/app/services/doctor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/search-box/search-box.component */
    "./src/app/components/search-box/search-box.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/doctor/doctor.component */
    "./src/app/components/doctor/doctor.component.ts");

    function SearchComponent_app_doctor_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-doctor", 15);
      }

      if (rf & 2) {
        var doctor_r205 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("doctor", doctor_r205);
      }
    }

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(doctorService, activatedRoute) {
        _classCallCheck(this, SearchComponent);

        this.doctorService = doctorService;
        this.activatedRoute = activatedRoute;
        this.doctors = [];
        this.searchCity = "";
        this.searchQuery = "";
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this62.searchCity = params.get('city');
            _this62.searchQuery = params.get('query');

            _this62.search(_this62.searchCity, _this62.searchQuery);
          }); // this.doctorService.getDoctors().subscribe((doctors) => {
          //     console.log(doctors);
          //     this.doctors = doctors;
          //   });
        }
      }, {
        key: "search",
        value: function search(location, query) {
          var _this63 = this;

          console.log("searchCom", "location: " + location, "query: " + query);
          this.doctorService.search(location, query).subscribe(function (doctors) {
            return _this63.doctors = doctors;
          });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 19,
      vars: 4,
      consts: [[1, "bg-white"], [1, "breadcrumb-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-8", "col-12"], ["aria-label", "breadcrumb", 1, "page-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/home"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "breadcrumb-title"], [1, "container-fluid", "bg_dark"], [1, "row"], [1, "col-md-12", "col-lg-10", "p-md-3", "p-sm-2", "m-auto"], [3, "doctor", 4, "ngFor", "ngForOf"], [3, "doctor"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-search-box");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SearchComponent_app_doctor_18_Template, 1, 1, "app-doctor", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.doctors.length, " matches found for : ", ctx.searchQuery, " In ", ctx.searchCity, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.doctors);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_3__["SearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_doctor_doctor_component__WEBPACK_IMPORTED_MODULE_5__["DoctorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/admin-auth.guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/admin-auth.guard.ts ***!
    \**********************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppServicesAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var AdminAuthGuard =
    /*#__PURE__*/
    function () {
      function AdminAuthGuard(router, authStorage) {
        _classCallCheck(this, AdminAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(AdminAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "ADMIN") {
            alert('You are not allowed to view this page. You are redirected to login Page');
            console.log("next : " + next);
            console.log("state : " + state);
            this.router.navigate(["admin/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return AdminAuthGuard;
    }();

    AdminAuthGuard.ɵfac = function AdminAuthGuard_Factory(t) {
      return new (t || AdminAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    AdminAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminAuthGuard,
      factory: AdminAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/appointment.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/appointment.service.ts ***!
    \*************************************************/

  /*! exports provided: AppointmentService */

  /***/
  function srcAppServicesAppointmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentService", function () {
      return AppointmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppointmentService =
    /*#__PURE__*/
    function () {
      function AppointmentService(http) {
        _classCallCheck(this, AppointmentService);

        this.http = http; // appoitmentUrl:string= "http://localhost:8080/appointments";

        this.appoitmentUrl = _shared__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"] + "/appointments"; // appoitmentUrl:string= "/appointments";

        this.appURL = _shared__WEBPACK_IMPORTED_MODULE_1__["REST"] + '/appointments';
        console.log("appURL", this.appURL);
      }

      _createClass(AppointmentService, [{
        key: "add",
        value: function add(appointment) {
          return this.http.post(this.appoitmentUrl, appointment);
        }
      }, {
        key: "update",
        value: function update(appointment) {
          return this.http.put(this.appoitmentUrl, appointment);
        }
      }, {
        key: "getAppointments",
        value: function getAppointments() {
          return this.http.get(this.appoitmentUrl);
        }
      }, {
        key: "getAllDoctorAppoitments",
        value: function getAllDoctorAppoitments(doctorId) {
          return this.http.get(this.appoitmentUrl + '/doctor/' + doctorId);
        }
      }, {
        key: "getAllPatientAppoitments",
        value: function getAllPatientAppoitments(patientId) {
          return this.http.get(this.appoitmentUrl + '/patient/' + patientId);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get(this.appoitmentUrl + '/' + id);
        }
      }]);

      return AppointmentService;
    }();

    AppointmentService.ɵfac = function AppointmentService_Factory(t) {
      return new (t || AppointmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppointmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppointmentService,
      factory: AppointmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth-interceptor.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/auth-interceptor.service.ts ***!
    \******************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppServicesAuthInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var TOKEN_HEADER_KEY = 'Authorization';
    var USER_TYPE_HEADER_KEY = 'User-Type';

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(token) {
        _classCallCheck(this, AuthInterceptor);

        this.token = token;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authReq = req;
          var token = this.token.getToken();
          var userType = this.token.getUserType();
          var headers = req.headers;

          if (token != null) {
            headers = headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token);
          }

          if (userType != null) {
            console.log("userType", userType);
            headers = headers.set(USER_TYPE_HEADER_KEY, userType);
          }

          authReq = req.clone({
            headers: headers
          });
          return next.handle(authReq);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts");

    var AUTH_API = _shared__WEBPACK_IMPORTED_MODULE_2__["REST"] + '/api/auth';
    var USER = AUTH_API + '/user';
    var DOCTOR = AUTH_API + '/doctor';
    var PATIENT = AUTH_API + '/patient';
    var ADMIN = AUTH_API + '/admin'; // const AUTH_USER = 'http://localhost:8080/api/auth/user'

    var AUTH_USER = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/api/auth/user'; // const DOCTOR_API = 'http://localhost:8080/api/auth/doctor/'; //TODO make this just /auth/doctor/

    var DOCTOR_API = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/api/auth/doctor/'; //TODO make this just /auth/doctor/
    // const PATIENT_API = 'http://localhost:8080/api/auth/patient/';

    var PATIENT_API = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/api/auth/patient/'; // const ADMIN_API = 'http://localhost:8080/api/auth/admin/';

    var ADMIN_API = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/api/auth/admin/';
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
      })
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.getLoggedInUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        console.log("AUTH URL", AUTH_API);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(credentials, api) {
          console.log("email: " + credentials.email + " password: " + credentials.password);
          return this.http.post(api + 'signin', {
            email: credentials.email,
            password: credentials.password
          }, httpOptions);
        } //TODO define registration params

      }, {
        key: "register",
        value: function register(user, api) {
          return this.http.post(api + 'signup', {
            email: user.email,
            password: user.password,
            phone: user.phone,
            username: user.username,
            lastname: user.lastname,
            firstname: user.firstname
          }, httpOptions);
        } //TODO define patients

      }, {
        key: "doctorLogin",
        value: function doctorLogin(credentials) {
          return this.login(credentials, DOCTOR_API);
        } //TODO define registration params

      }, {
        key: "doctorRegister",
        value: function doctorRegister(user) {
          return this.register(user, DOCTOR_API);
        }
      }, {
        key: "patientLogin",
        value: function patientLogin(credentials) {
          return this.login(credentials, PATIENT_API);
        } //TODO define registration params

      }, {
        key: "patientRegister",
        value: function patientRegister(user) {
          return this.register(user, PATIENT_API);
        }
      }, {
        key: "adminLogin",
        value: function adminLogin(credentials) {
          return this.login(credentials, ADMIN_API);
        } //TODO define registration params

      }, {
        key: "adminRegister",
        value: function adminRegister(user) {
          return this.register(user, ADMIN_API);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.http.get(AUTH_USER);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        getLoggedInUser: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/contact.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/contact.service.ts ***!
    \*********************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppServicesContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContactService =
    /*#__PURE__*/
    function () {
      function ContactService(http) {
        _classCallCheck(this, ContactService);

        this.http = http; // contactUrl:string = "http://localhost:8080/contacts";

        this.contactUrl = _shared__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"] + "/contacts";
        this.contactURL = _shared__WEBPACK_IMPORTED_MODULE_1__["REST"] + '/contacts';
        console.log("CONTACT URL", this.contactURL);
      }

      _createClass(ContactService, [{
        key: "getContacts",
        value: function getContacts() {
          return this.http.get(this.contactUrl);
        }
      }, {
        key: "addContact",
        value: function addContact(contact) {
          return this.http.post(this.contactUrl, contact);
        }
      }]);

      return ContactService;
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/doctor-auth.guard.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/doctor-auth.guard.ts ***!
    \***********************************************/

  /*! exports provided: DoctorAuthGuard */

  /***/
  function srcAppServicesDoctorAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorAuthGuard", function () {
      return DoctorAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var DoctorAuthGuard =
    /*#__PURE__*/
    function () {
      function DoctorAuthGuard(router, authStorage) {
        _classCallCheck(this, DoctorAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(DoctorAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "DOCTOR") {
            // alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigate(["doctor/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return DoctorAuthGuard;
    }();

    DoctorAuthGuard.ɵfac = function DoctorAuthGuard_Factory(t) {
      return new (t || DoctorAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    DoctorAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DoctorAuthGuard,
      factory: DoctorAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/doctor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/doctor.service.ts ***!
    \********************************************/

  /*! exports provided: DoctorService */

  /***/
  function srcAppServicesDoctorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorService", function () {
      return DoctorService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts"); // const API_URL = 'http://localhost:8080/api/test/';


    var API_URL = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/api/test/';

    var DoctorService =
    /*#__PURE__*/
    function () {
      function DoctorService(http) {
        _classCallCheck(this, DoctorService);

        this.http = http; // doctorUrl:string = "http://localhost:8080/doctors";

        this.doctorUrl = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + "/doctors";
        this.doctorURL = _shared__WEBPACK_IMPORTED_MODULE_2__["REST"] + '/doctors';
        console.log("doctor URL", this.doctorURL);
      }

      _createClass(DoctorService, [{
        key: "getDoctors",
        value: function getDoctors() {
          return this.http.get(this.doctorUrl);
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get(this.doctorUrl + "/" + id);
        }
      }, {
        key: "updateDoctor",
        value: function updateDoctor(doctor) {
          return this.http.put(this.doctorUrl, doctor);
        }
      }, {
        key: "getByUsername",
        value: function getByUsername(username) {
          return this.http.get(this.doctorUrl + "/username/" + username);
        }
      }, {
        key: "search",
        value: function search(city, query) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('city', city).set('query', query);
          console.log("doc service", "city: " + city, "query : " + query);
          return this.http.get(this.doctorUrl, {
            'params': params
          });
        }
      }, {
        key: "getAvatar",
        value: function getAvatar(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/avatar');
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(doctorId, file) {
          var formData = new FormData();
          formData.append('avatar', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.doctorUrl + '/' + doctorId + '/avatar', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "getClinic",
        value: function getClinic(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/clinic');
        }
      }, {
        key: "getClinicPhotos",
        value: function getClinicPhotos(id) {
          return this.http.get(this.doctorUrl + "/" + id + '/clinic/photos');
        }
      }, {
        key: "updateClinic",
        value: function updateClinic(doctorId, clinic) {
          return this.http.post(this.doctorUrl + '/' + doctorId + '/clinic', clinic);
        }
      }, {
        key: "deleteClinicPhoto",
        value: function deleteClinicPhoto(doctorId, photoId) {
          return this.http["delete"](this.doctorUrl + '/' + doctorId + '/clinic/photos/' + photoId);
        }
      }, {
        key: "uploadClinicPhoto",
        value: function uploadClinicPhoto(doctorId, file) {
          var formData = new FormData();
          formData.append('photo', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', this.doctorUrl + '/' + doctorId + '/clinic/photos', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(doctorId, password) {
          return this.http.post(this.doctorUrl + '/' + doctorId + '/password', password);
        }
      }]);

      return DoctorService;
    }();

    DoctorService.ɵfac = function DoctorService_Factory(t) {
      return new (t || DoctorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    DoctorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DoctorService,
      factory: DoctorService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoctorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/patient-auth-guard.ts":
  /*!************************************************!*\
    !*** ./src/app/services/patient-auth-guard.ts ***!
    \************************************************/

  /*! exports provided: PatientAuthGuard */

  /***/
  function srcAppServicesPatientAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientAuthGuard", function () {
      return PatientAuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./token-storage.service */
    "./src/app/services/token-storage.service.ts");

    var PatientAuthGuard =
    /*#__PURE__*/
    function () {
      function PatientAuthGuard(router, authStorage) {
        _classCallCheck(this, PatientAuthGuard);

        this.router = router;
        this.authStorage = authStorage;
      }

      _createClass(PatientAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.authStorage.getUser() == null || this.authStorage.getUserType() !== "PATIENT") {
            //alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigate(["patient/login"], {
              queryParams: {
                retUrl: state.url
              }
            });
            return false;
          }

          return true;
        }
      }]);

      return PatientAuthGuard;
    }();

    PatientAuthGuard.ɵfac = function PatientAuthGuard_Factory(t) {
      return new (t || PatientAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]));
    };

    PatientAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientAuthGuard,
      factory: PatientAuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/patient.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/patient.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts");

    var baseUrl = _shared__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"] + '/patients'; // const baseUrl = 'http://localhost:8080/patients';

    var PATIENT_URL = _shared__WEBPACK_IMPORTED_MODULE_2__["REST"] + '/patients';

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
        console.log("patient URL ", PATIENT_URL);
      } //TODO Ayoub chaque method doit avoir le type de retour


      _createClass(PatientService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get(baseUrl);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(data) {
          return this.http.post(baseUrl, data);
        }
      }, {
        key: "update",
        value: function update(id, data) {
          return this.http.put("".concat(baseUrl, "/").concat(id), data);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"]("".concat(baseUrl, "/").concat(id));
        }
      }, {
        key: "deleteAll",
        value: function deleteAll() {
          return this.http["delete"](baseUrl);
        }
      }, {
        key: "getAvatar",
        value: function getAvatar(id) {
          return this.http.get(baseUrl + "/" + id + '/avatar');
        }
      }, {
        key: "uploadAvatar",
        value: function uploadAvatar(patientId, file) {
          var formData = new FormData();
          formData.append('avatar', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', baseUrl + '/' + patientId + '/avatar', formData, {
            reportProgress: true,
            responseType: 'json'
          });
          return this.http.request(req);
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(patientId, password) {
          return this.http.post(baseUrl + '/' + patientId + '/password', password);
        }
      }, {
        key: "updatePatient",
        value: function updatePatient(patirnt) {
          return this.http.put(baseUrl, patirnt);
        }
      }]);

      return PatientService;
    }();

    PatientService.ɵfac = function PatientService_Factory(t) {
      return new (t || PatientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PatientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PatientService,
      factory: PatientService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/review.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/review.service.ts ***!
    \********************************************/

  /*! exports provided: ReviewService */

  /***/
  function srcAppServicesReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared */
    "./src/app/shared.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ReviewService =
    /*#__PURE__*/
    function () {
      // doctorUrl = this.doctorsURL; // test if this works
      function ReviewService(http) {
        _classCallCheck(this, ReviewService);

        this.http = http;
        this.doctorUrl = _shared__WEBPACK_IMPORTED_MODULE_1__["BASE_URL"] + "/doctors"; // doctorUrl:string = "http://localhost:8080/doctors";

        this.doctorsURL = _shared__WEBPACK_IMPORTED_MODULE_1__["REST"] + '/doctors';
        console.log("doctor URL", this.doctorsURL);
      }

      _createClass(ReviewService, [{
        key: "getReviews",
        value: function getReviews(doctorId) {
          return this.http.get(this.doctorUrl + '/' + doctorId + '/reviews');
        }
      }, {
        key: "addReview",
        value: function addReview(doctorId, review) {
          console.log("review in service: ", review);
          return this.http.post(this.doctorUrl + '/' + doctorId + '/reviews', review);
        }
      }, {
        key: "updateReview",
        value: function updateReview(doctorId, review) {
          return this.http.put(this.doctorUrl + '/' + doctorId + '/reviews/' + review.id, review);
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(doctorId, reviewId) {
          return this.http["delete"](this.doctorUrl + '/' + doctorId + '/reviews/' + reviewId);
        }
      }, {
        key: "likeReview",
        value: function likeReview(reviewId, like) {
          return this.http.post(this.doctorUrl + '/reviews/' + reviewId + '/like', like);
        }
      }, {
        key: "unlikeReview",
        value: function unlikeReview(reviewId, like) {
          return this.http.post(this.doctorUrl + '/reviews/' + reviewId + '/unlike', like);
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ɵfac = function ReviewService_Factory(t) {
      return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReviewService,
      factory: ReviewService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/token-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/token-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: TokenStorageService */

  /***/
  function srcAppServicesTokenStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenStorageService", function () {
      return TokenStorageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TOKEN_KEY = 'auth-token';
    var USER_KEY = 'auth-user';
    var USER_TYPE = 'user-type';

    var TokenStorageService =
    /*#__PURE__*/
    function () {
      function TokenStorageService() {
        _classCallCheck(this, TokenStorageService);
      }

      _createClass(TokenStorageService, [{
        key: "signOut",
        value: function signOut() {
          //window.sessionStorage.clear();
          localStorage.clear();
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          console.log("saving in storage " + TOKEN_KEY + " : " + token); //window.sessionStorage.removeItem(TOKEN_KEY);
          //window.sessionStorage.setItem(TOKEN_KEY, token);

          localStorage.removeItem(TOKEN_KEY);
          localStorage.setItem(TOKEN_KEY, token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          // return window.sessionStorage.getItem(TOKEN_KEY);
          return localStorage.getItem(TOKEN_KEY);
        }
      }, {
        key: "saveUserType",
        value: function saveUserType(userType) {
          console.log("saving in storage " + USER_TYPE + " : " + userType); // window.sessionStorage.removeItem(USER_TYPE);
          // window.sessionStorage.setItem(USER_TYPE, userType);

          localStorage.removeItem(USER_TYPE);
          localStorage.setItem(USER_TYPE, userType);
        }
      }, {
        key: "getUserType",
        value: function getUserType() {
          // return sessionStorage.getItem(USER_TYPE);
          return localStorage.getItem(USER_TYPE);
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          console.log("saving in storage " + USER_KEY + " : " + user);
          localStorage.removeItem(USER_KEY);
          localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return JSON.parse(localStorage.getItem(USER_KEY));
        }
      }]);

      return TokenStorageService;
    }();

    TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
      return new (t || TokenStorageService)();
    };

    TokenStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenStorageService,
      factory: TokenStorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared.ts":
  /*!***************************!*\
    !*** ./src/app/shared.ts ***!
    \***************************/

  /*! exports provided: BASE_URL, BASE_SOCKET_URL, REST, CHAT, AUTH */

  /***/
  function srcAppSharedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_URL", function () {
      return BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_SOCKET_URL", function () {
      return BASE_SOCKET_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REST", function () {
      return REST;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHAT", function () {
      return CHAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUTH", function () {
      return AUTH;
    }); // services 
    // export const BASE_URL = location.hostname + (location.port ? ':' + location.port : '')


    var BASE_URL = location.origin;
    var BASE_SOCKET_URL = 'ws://' + location.hostname + (location.port ? ':' + location.port : '');
    var REST = BASE_URL + '/rest';
    console.log("rest URL", REST);
    var CHAT = BASE_URL + '/chat';
    console.log("rest URL", CHAT);
    var AUTH = BASE_URL + '/auth';
    console.log("rest URL", AUTH);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); ///<reference path="typings.d.ts"/>


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rootman/Development/formation/telemed/client/telemed-client/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map