"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var home_component_1 = require("./components/Home/home.component");
var menu_component_1 = require("./components/Menu/menu.component");
var user_component_1 = require("./components/User/user.component");
var user_service_1 = require("./Service/user.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
//import { AlertComponent } from './_directives/index';
var auth_guard_1 = require("./_guards/auth.guard");
var jwt_interceptor_1 = require("./_helpers/jwt.interceptor");
var alert_service_1 = require("./Service/alert.service");
var authentication_service_1 = require("./Service/authentication.service");
// used to create fake backend
var fack_backend_1 = require("./_helpers/fack-backend");
var login_component_1 = require("./Components/Login/login.component");
var register_component_1 = require("./Components/Register/register.component");
var usertemp_service_1 = require("./Service/usertemp.service");
var http_1 = require("@angular/common/http");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, http_1.HttpClientModule, app_routing_1.routing, ng2_bs3_modal_1.Ng2Bs3ModalModule],
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                user_component_1.UserComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: jwt_interceptor_1.JwtInterceptor,
                    multi: true
                },
                user_service_1.UserService,
                usertemp_service_1.UserTempService,
                auth_guard_1.AuthGuard,
                alert_service_1.AlertService,
                authentication_service_1.AuthenticationService,
                fack_backend_1.fakeBackendProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map