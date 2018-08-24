"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var usertemp_service_1 = require("../../Service/usertemp.service");
var authentication_service_1 = require("../../Service/authentication.service");
var HomeComponent = /** @class */ (function () {
    //users: User[] = [];
    function HomeComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('user:' + this.currentUser.username);
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html'
        }),
        __metadata("design:paramtypes", [usertemp_service_1.UserTempService, authentication_service_1.AuthenticationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map