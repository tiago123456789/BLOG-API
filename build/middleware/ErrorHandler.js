"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ErrorValidation = require("../lib/ErrorValidation");

var _ErrorValidation2 = _interopRequireDefault(_ErrorValidation);

var _Logger = require("./../config/Logger");

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (error, request, response, next) {
    if (error.hasOwnProperty("errors")) {
        return response.status(400).json({ msg: _ErrorValidation2.default.getErrorValidation(error) });
    }

    switch (error.name) {
        case "DATA_INVALID":
            return response.status(400).json({ msg: error.message });
        case "SECURITY":
        case 'JsonWebTokenError':
            return response.status(error.status || 403).json({ msg: error.message });
        case "NOT_FOUND":
            return response.status(404).json({ msg: error.message });
        case "NEGOTIATION":
            return response.status(409).json({ msg: error.message });
        default:
            _Logger2.default.error((error.status || 500) + " - " + error.message + " - " + request.originalUrl + " - " + request.method + " - " + request.ip);
            return response.status(500).json({ msg: error.message });
    }
};