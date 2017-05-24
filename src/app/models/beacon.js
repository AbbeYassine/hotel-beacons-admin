"use strict";
var Beacon = (function () {
    function Beacon() {
    }
    Beacon.prototype.isValid = function () {
        if (this.name && this.uuid && this.major && this.minor && this.position) {
            return true;
        }
        return false;
    };
    return Beacon;
}());
exports.Beacon = Beacon;
