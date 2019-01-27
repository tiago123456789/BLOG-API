"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ExceptionMessage = require("./ExceptionMessage");

var _ExceptionMessage2 = _interopRequireDefault(_ExceptionMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DatasInvalidException(message) {
    this.name = "DATA_INVALID";
    this.message = message || _ExceptionMessage2.default.DATA_INVALID;
}

DatasInvalidException.prototype = Error.prototype;
exports.default = DatasInvalidException;