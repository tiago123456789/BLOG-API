"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function SecurityException(message, status) {
    this.name = "SECURITY";
    this.message = message;
    this.status = status;
};

SecurityException.prototype = Error.prototype;

exports.default = SecurityException;