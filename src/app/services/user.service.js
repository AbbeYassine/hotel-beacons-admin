"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_1 = require('../models/user');
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.currentUser = new Rx_1.ReplaySubject(1);
        // TODO
    }
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser.next(user);
    };
    UserService.prototype.logout = function () {
        var user = new user_1.User();
        user.connected = false;
        this.setCurrentUser(user);
        this.router.navigate(['login']);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
