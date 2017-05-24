"use strict";
var guid_helper_1 = require('../helpers/guid.helper');
var Client = (function () {
    function Client(name, clientId, adress) {
        this.name = name || '';
        this.clientId = clientId || guid_helper_1.GuidHelper.generateGUID();
        this.address = adress || '';
    }
    return Client;
}());
exports.Client = Client;
