"use strict";
var angular2_uuid_1 = require('angular2-uuid');
var GuidHelper = (function () {
    function GuidHelper() {
    }
    GuidHelper.generateGUID = function () {
        return angular2_uuid_1.UUID.UUID();
    };
    return GuidHelper;
}());
exports.GuidHelper = GuidHelper;
