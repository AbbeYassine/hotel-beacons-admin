"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var client_1 = require('../../models/client');
var client_dal_1 = require('../../dal/client.dal');
var ClientComponent = (function () {
    function ClientComponent(dal, breadServ) {
        var _this = this;
        this.dal = dal;
        this.breadServ = breadServ;
        this.save = function (client) {
            _this.dal.update(client.clientId, new client_1.Client(client.name, client.clientId, client.address));
        };
        this.delete = function (client) {
            _this.dal.delete(client);
        };
        this.add = function () {
            _this.dal.create(new client_1.Client());
        };
        // TODO
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.clients = this.dal.readAll();
        this.breadServ.set({
            description: 'This is our Client page',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                },
                {
                    icon: 'clock-o',
                    link: ['/client'],
                    title: 'Client'
                }
            ]
        });
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        this.breadServ.clear();
        this.clients = null;
    };
    ClientComponent = __decorate([
        core_1.Component({
            providers: [client_dal_1.ClientDAL],
            selector: 'app-client',
            styleUrls: ['./client.component.css'],
            templateUrl: './client.component.html'
        })
    ], ClientComponent);
    return ClientComponent;
}());
exports.ClientComponent = ClientComponent;
