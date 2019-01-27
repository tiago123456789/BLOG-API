"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ArticleDAO = require("./../dao/ArticleDAO");

var _ArticleDAO2 = _interopRequireDefault(_ArticleDAO);

var _ArticleBO = require("./../bo/ArticleBO");

var _ArticleBO2 = _interopRequireDefault(_ArticleBO);

var _ArticleEndpoint = require("./../endpoint/ArticleEndpoint");

var _ArticleEndpoint2 = _interopRequireDefault(_ArticleEndpoint);

var _AuthService = require("./../security/AuthService");

var _AuthService2 = _interopRequireDefault(_AuthService);

var _InvalidIdMongodb = require("../middleware/InvalidIdMongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleDAO = new _ArticleDAO2.default();
var articleBO = new _ArticleBO2.default(articleDAO, null);
var articleEndpoint = new _ArticleEndpoint2.default(articleBO);
var authService = new _AuthService2.default();

exports.default = function (router) {

    router.get("", articleEndpoint.findAll);
    router.get("/:id", authService.temAcesso, _InvalidIdMongodb.invalidIdMongodb, articleEndpoint.findById);
    router.post("", authService.temAcesso, articleEndpoint.save);
    router.delete("/:id", authService.temAcesso, _InvalidIdMongodb.invalidIdMongodb, articleEndpoint.delete);
    router.put("/:id", authService.temAcesso, _InvalidIdMongodb.invalidIdMongodb, articleEndpoint.update);
    router.post("/:id/comments", authService.temAcesso, _InvalidIdMongodb.invalidIdMongodb, articleEndpoint.addComment);
    return router;
};