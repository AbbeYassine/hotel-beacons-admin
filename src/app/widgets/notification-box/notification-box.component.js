"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NotificationBoxComponent = (function () {
    function NotificationBoxComponent() {
        this.notifLength = { 0: '10' };
        // TODO 
    }
    NotificationBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    NotificationBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.notificationsBox',
            /* tslint:enable */
            styleUrls: ['./notification-box.component.css'],
            templateUrl: './notification-box.component.html'
        })
    ], NotificationBoxComponent);
    return NotificationBoxComponent;
}());
exports.NotificationBoxComponent = NotificationBoxComponent;
