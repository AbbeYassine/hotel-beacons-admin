"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vyndee on 30/04/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var config_1 = require("../config");
require('rxjs/add/operator/toPromise');
var PredictionService = (function () {
    function PredictionService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    PredictionService.prototype.predictPopulation = function (date) {
        return this.http
            .post(config_1.Config.apiUrl + "/prediction", JSON.stringify({
            date: date
        }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    PredictionService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PredictionService = __decorate([
        core_1.Injectable()
    ], PredictionService);
    return PredictionService;
}());
exports.PredictionService = PredictionService;
