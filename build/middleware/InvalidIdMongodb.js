"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.invalidIdMongodb = undefined;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _NotFoundException = require("../exception/NotFoundException");

var _NotFoundException2 = _interopRequireDefault(_NotFoundException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var invalidIdMongodb = exports.invalidIdMongodb = function invalidIdMongodb(request, response, next) {
    var id = request.params.id;

    if (_mongoose2.default.Types.ObjectId.isValid(id)) {
        return next();
    }

    return next(new _NotFoundException2.default("Registro não encontrado!"));
};