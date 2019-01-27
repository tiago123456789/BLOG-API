"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function NotFoundException(message) {
    this.name = "NOT_FOUND";
    this.message = message;
};

NotFoundException.prototype = Error.prototype;

exports.default = NotFoundException;