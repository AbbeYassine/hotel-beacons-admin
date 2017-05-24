"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vyndee on 08/03/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
require('rxjs/add/operator/toPromise');
var _ = require('underscore');
var BeaconService = (function () {
    function BeaconService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    BeaconService.prototype.create = function (beacon) {
        console.log(JSON.stringify(beacon));
        return this.http
            .post(config_1.Config.apiUrl + "/beacons/add", JSON.stringify(beacon), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    BeaconService.prototype.getAll = function () {
        return this.http
            .get(config_1.Config.apiUrl + "/beacons")
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    BeaconService.prototype.filter = function () {
        return this.http
            .get(config_1.Config.apiUrl + "/beacons")
            .toPromise()
            .then(function (res) {
            var beacons = JSON.parse(res.json());
            var filtered = _.where(beacons, { date: "1" });
            return filtered;
        })
            .catch(this.handleError);
    };
    BeaconService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BeaconService = __decorate([
        core_1.Injectable()
    ], BeaconService);
    return BeaconService;
}());
exports.BeaconService = BeaconService;
