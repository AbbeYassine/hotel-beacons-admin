"use strict";
/**
 * Created by Vyndee on 08/03/2017.
 */
var TimeOut = (function () {
    function TimeOut(object) {
    }
    TimeOut.prototype.isValid = function () {
        if (this.content && this.period) {
            return true;
        }
        else {
            return false;
        }
    };
    return TimeOut;
}());
exports.TimeOut = TimeOut;
