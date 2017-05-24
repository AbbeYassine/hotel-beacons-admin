"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PageNumComponent = (function () {
    function PageNumComponent(route, breadServ) {
        this.route = route;
        this.breadServ = breadServ;
        this.id = 0;
        // TODO
    }
    PageNumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when calling routes change
        var idkey = 'id';
        this.sub = this.route.params.subscribe(function (data) {
            _this.id = data[idkey];
            // changing header
            _this.breadServ.set({
                description: 'This is our ' + _this.id + ' page',
                display: true,
                levels: [
                    {
                        icon: 'dashboard',
                        link: ['/'],
                        title: 'Home'
                    },
                    {
                        icon: 'clock-o',
                        link: ['/page/' + _this.id],
                        title: 'Page ' + _this.id
                    }
                ]
            });
        });
    };
    PageNumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.breadServ.clear();
        this.route = null;
    };
    PageNumComponent = __decorate([
        core_1.Component({
            selector: 'app-page-num',
            styleUrls: ['./page-num.component.css'],
            templateUrl: './page-num.component.html'
        })
    ], PageNumComponent);
    return PageNumComponent;
}());
exports.PageNumComponent = PageNumComponent;
