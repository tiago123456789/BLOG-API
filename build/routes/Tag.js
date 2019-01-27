"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TagDAO = require("../dao/TagDAO");

var _TagDAO2 = _interopRequireDefault(_TagDAO);

var _TagBO = require("../bo/TagBO");

var _TagBO2 = _interopRequireDefault(_TagBO);

var _TagEndpoint = require("../endpoint/TagEndpoint");

var _TagEndpoint2 = _interopRequireDefault(_TagEndpoint);

var _InvalidIdMongodb = require("../middleware/InvalidIdMongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tagDAO = new _TagDAO2.default();
var tagBO = new _TagBO2.default(tagDAO);
var tagEndpoint = new _TagEndpoint2.default(tagBO);

exports.default = function (router) {

    router.get("", tagEndpoint.findAll);
    router.get("/:id", tagEndpoint.findById);
    router.post("", tagEndpoint.save);
    router.delete("/:id", _InvalidIdMongodb.invalidIdMongodb, tagEndpoint.delete);
    router.put("/:id", _InvalidIdMongodb.invalidIdMongodb, tagEndpoint.update);
    return router;
};