"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var langs = ['en', 'fr', 'ru', 'he', 'zh'];
var langmatch = /en|fr|ru|he|zh/;
var AdminLTETranslateService = (function () {
    function AdminLTETranslateService(userServ, translate) {
        var _this = this;
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        this.userServ.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            var useLang = 'en';
            var prefLang = (_this.currentUser) ? _this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            _this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }
    AdminLTETranslateService.prototype.ngOnInit = function () {
        // TODO
    };
    AdminLTETranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    AdminLTETranslateService = __decorate([
        core_1.Injectable()
    ], AdminLTETranslateService);
    return AdminLTETranslateService;
}());
exports.AdminLTETranslateService = AdminLTETranslateService;
