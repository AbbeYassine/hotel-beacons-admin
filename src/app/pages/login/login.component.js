"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require('../../models/user');
var LoginComponent = (function () {
    function LoginComponent(userServ, router) {
        this.userServ = userServ;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.dispatchEvent(new Event('resize'));
    };
    LoginComponent.prototype.login = function () {
        // test les champs en js
        // envoyer les champs a php
        // si retour positif, log le user
        if (1 === 1) {
            var user1 = new user_1.User({
                avatarUrl: 'public/assets/img/user2-160x160.jpg',
                email: 'weber.antoine.pro@gmail.com',
                firstname: 'WEBER',
                lastname: 'Antoine'
            });
            user1.connected = true;
            this.userServ.setCurrentUser(user1);
            this.router.navigate(['beacons/add']);
        }
        else {
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html'
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
