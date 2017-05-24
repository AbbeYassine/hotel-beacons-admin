"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_1 = require('../../models/user');
var HomeComponent = (function () {
    function HomeComponent(msgServ, breadServ) {
        this.msgServ = msgServ;
        this.breadServ = breadServ;
        this.date = new Date();
        // TODO
    }
    HomeComponent.prototype.ngOnInit = function () {
        // setttings the header for the home
        this.breadServ.set({
            description: 'HomePage',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                }
            ]
        });
        // defining some test users
        var user1 = new user_1.User({
            avatarUrl: 'public/assets/img/user2-160x160.jpg',
            email: 'weber.antoine.pro@gmail.com',
            firstname: 'WEBER',
            lastname: 'Antoine'
        });
        var user2 = new user_1.User({
            avatarUrl: 'public/assets/img/user2-160x160.jpg',
            email: 'EMAIL',
            firstname: 'FIRSTNAME',
            lastname: 'LASTNAME'
        });
        // sending a test message
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            styleUrls: ['./home.component.css'],
            templateUrl: './home.component.html'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
