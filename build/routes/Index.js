"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Tag = require("./Tag");

var _Tag2 = _interopRequireDefault(_Tag);

var _Category = require("./Category");

var _Category2 = _interopRequireDefault(_Category);

var _Author = require("./Author");

var _Author2 = _interopRequireDefault(_Author);

var _Article = require("./Article");

var _Article2 = _interopRequireDefault(_Article);

var _Auth = require("./Auth");

var _Auth2 = _interopRequireDefault(_Auth);

var _AuthService = require("./../security/AuthService");

var _AuthService2 = _interopRequireDefault(_AuthService);

var _ErrorHandler = require("../middleware/ErrorHandler");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authService = new _AuthService2.default();

exports.default = function (app) {
    app.use("/tags", authService.temAcesso, (0, _Tag2.default)(_express2.default.Router()));
    app.use("/categories", authService.temAcesso, (0, _Category2.default)(_express2.default.Router()));
    app.use("/authors", authService.temAcesso, (0, _Author2.default)(_express2.default.Router()));
    app.use("/articles", (0, _Article2.default)(_express2.default.Router()));
    app.use("/auth", (0, _Auth2.default)(_express2.default.Router()));

    app.use(function (request, response) {
        var message = {
            status: 404,
            message: "Sorry! Route not found."
        };
        response.status(message.status).json(message);
    });

    app.use(_ErrorHandler2.default);
};