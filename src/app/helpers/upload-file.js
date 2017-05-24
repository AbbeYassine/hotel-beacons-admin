"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Vyndee on 24/05/2017.
 */
/**
 * Created by Vyndee on 31/03/2017.
 */
var angular2_http_file_upload_1 = require('angular2-http-file-upload');
var UploadFile = (function (_super) {
    __extends(UploadFile, _super);
    function UploadFile(file, url) {
        _super.call(this);
        this.url = url;
        /*if (token)
         this.headers = {"Authorization": "Bearer " + token};*/
        this.file = file;
    }
    return UploadFile;
}(angular2_http_file_upload_1.UploadItem));
exports.UploadFile = UploadFile;
