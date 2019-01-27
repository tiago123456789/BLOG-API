"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AuthorDAO = require("./../dao/AuthorDAO");

var _AuthorDAO2 = _interopRequireDefault(_AuthorDAO);

var _AuthorBO = require("./../bo/AuthorBO");

var _AuthorBO2 = _interopRequireDefault(_AuthorBO);

var _AuthorEndpoint = require("./../endpoint/AuthorEndpoint");

var _AuthorEndpoint2 = _interopRequireDefault(_AuthorEndpoint);

var _InvalidIdMongodb = require("../middleware/InvalidIdMongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorDAO = new _AuthorDAO2.default();
var authorBO = new _AuthorBO2.default(authorDAO);
var authorEndpoint = new _AuthorEndpoint2.default(authorBO);

exports.default = function (router) {

    router.get("", authorEndpoint.findAll);
    router.get("/:id", _InvalidIdMongodb.invalidIdMongodb, authorEndpoint.findById);
    router.post("", authorEndpoint.save);
    router.delete("/:id", _InvalidIdMongodb.invalidIdMongodb, authorEndpoint.delete);
    router.put("/:id", _InvalidIdMongodb.invalidIdMongodb, authorEndpoint.update);

    return router;
};