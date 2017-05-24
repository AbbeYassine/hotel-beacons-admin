"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Vyndee on 24/05/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
/**
 * Created by Vyndee on 08/03/2017.
 */
var core_1 = require('@angular/core');
var upload_file_1 = require("../../helpers/upload-file");
var config_1 = require("../../config");
var PromotionsComponent = (function () {
    function PromotionsComponent(uploaderService) {
        this.uploaderService = uploaderService;
    }
    PromotionsComponent.prototype.ngOnInit = function () {
    };
    PromotionsComponent.prototype.ngOnDestroy = function () {
    };
    PromotionsComponent.prototype.addPromotion = function () {
        console.log(this.promotion);
        var uploadFile = window.document.getElementById('photoEvent').files[0];
        if (uploadFile) {
            var url = config_1.Config.apiUrl + "/promotions/add";
            var myUploadItem = new upload_file_1.UploadFile(uploadFile, url);
            //myUploadItem.formData = {eventImageURL: uploadFile};  // (optional) form data can be sent with file
            myUploadItem.formData = {
                title: this.promotion.title,
                description: this.promotion.description,
                rating: this.promotion.percentage
            };
            this.uploaderService.onSuccessUpload = function (item, response, status, headers) {
                // success callback
                console.log("Success");
                console.log(item, response, status, headers);
            };
            this.uploaderService.onErrorUpload = function (item, response, status, headers) {
                // error callback
                console.log("Error");
                console.log(item, response, status, headers);
            };
            this.uploaderService.onCompleteUpload = function (item, response, status, headers) {
                // complete callback, called regardless of success or failure
                console.log("Complete");
                console.log(item, response, status, headers);
            };
            this.uploaderService.upload(myUploadItem);
        }
    };
    PromotionsComponent = __decorate([
        core_1.Component({
            selector: 'promotions-component',
            styleUrls: ['./promotions.component.css'],
            templateUrl: './promotions.component.html'
        })
    ], PromotionsComponent);
    return PromotionsComponent;
}());
exports.PromotionsComponent = PromotionsComponent;
