"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AuthEndpoint = require("./../endpoint/AuthEndpoint");

var _AuthEndpoint2 = _interopRequireDefault(_AuthEndpoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authEndpoint = new _AuthEndpoint2.default();

exports.default = function (router) {

    router.post("/login", authEndpoint.login);
    router.post("/login/:refreshToken/refresh", authEndpoint.loginByRefreshToken);
    return router;
};