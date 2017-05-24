"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ClientDAL = (function () {
    function ClientDAL(af, notif) {
        var _this = this;
        this.af = af;
        this.notif = notif;
        this.readAll = function () {
            return _this.af.database.list('clients');
        };
        this.read = function (id) {
            return _this.af.database.list('clients', {
                query: {
                    equalTo: id,
                    orderByChild: 'clientId'
                }
            });
        };
        this.create = function (newClient) {
            _this.af.database.list('clients').push(newClient).then(function (resp) {
                return _this.notif.success('New client has been added');
            });
        };
        this.update = function (id, client) {
            _this.af.database.list('clients').update(id, client).then(function (resp) {
                return _this.notif.success('Client ' + client.name + ' has been updated');
            });
        };
        this.delete = function (client) {
            _this.af.database.list('clients').remove(client).then(function (resp) {
                return _this.notif.success('Client ' + client.name + ' has been deleted');
            });
        };
    }
    ClientDAL = __decorate([
        core_1.Injectable()
    ], ClientDAL);
    return ClientDAL;
}());
exports.ClientDAL = ClientDAL;
