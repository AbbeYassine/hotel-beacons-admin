"use strict";
/**
 * Created by Vyndee on 08/03/2017.
 */
var Config = (function () {
    function Config() {
    }
    Config.apiUrl = "http://localhost:3000/api";
    Config.apiPredictionUrl = "http://localhost:8001/queries.json";
    return Config;
}());
exports.Config = Config;
