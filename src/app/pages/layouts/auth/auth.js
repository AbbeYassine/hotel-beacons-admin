"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var LayoutsAuthComponent = (function () {
    function LayoutsAuthComponent(userServ, toastr, translate) {
        this.userServ = userServ;
        this.toastr = toastr;
        this.translate = translate;
        this.mylinks = [];
        this.toastrConfig = new angular2_toaster_1.ToasterConfig({
            newestOnTop: true,
            showCloseButton: true,
            tapToDismiss: false
        });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    LayoutsAuthComponent.prototype.ngOnInit = function () {
        //  sedding the resize event, for AdminLTE to place the height
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event_1 = document.createEvent('Event');
            event_1.initEvent('resize', false, true);
            window.dispatchEvent(event_1);
        }
        // define here your own links menu structure
        this.mylinks = [
            {
                'title': 'Manage Beacons',
                'icon': 'dashboard',
                'sublinks': [
                    {
                        'title': "Add Beacons",
                        "link": ["/beacons/add"]
                    },
                    {
                        'title': "Affect Message",
                        "link": ["/beacons/message"]
                    }
                ]
            },
            {
                'title': 'Prédiction',
                'icon': 'dashboard',
                'sublinks': [
                    {
                        'title': "Population",
                        "link": ["/prediction/population"]
                    }
                ]
            }
        ];
    };
    LayoutsAuthComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    LayoutsAuthComponent = __decorate([
        core_1.Component({
            selector: 'app-layouts-auth',
            templateUrl: './auth.html'
        })
    ], LayoutsAuthComponent);
    return LayoutsAuthComponent;
}());
exports.LayoutsAuthComponent = LayoutsAuthComponent;
