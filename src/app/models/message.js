"use strict";
/**
 * Created by Vyndee on 08/03/2017.
 */
var Message = (function () {
    function Message(object) {
    }
    Message.prototype.isValid = function () {
        if (this.in && this.out && this.timeout.isValid()) {
            return true;
        }
        return false;
    };
    return Message;
}());
exports.Message = Message;
