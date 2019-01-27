"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _CategoryDAO = require("./../dao/CategoryDAO");

var _CategoryDAO2 = _interopRequireDefault(_CategoryDAO);

var _CategoryBO = require("./../bo/CategoryBO");

var _CategoryBO2 = _interopRequireDefault(_CategoryBO);

var _CategoryEndpoint = require("./../endpoint/CategoryEndpoint");

var _CategoryEndpoint2 = _interopRequireDefault(_CategoryEndpoint);

var _InvalidIdMongodb = require("../middleware/InvalidIdMongodb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var categoryDAO = new _CategoryDAO2.default();
var categoryBO = new _CategoryBO2.default(categoryDAO);
var categoryEndpoint = new _CategoryEndpoint2.default(categoryBO);

exports.default = function (router) {

    router.get("", categoryEndpoint.findAll);
    router.get("/:id", _InvalidIdMongodb.invalidIdMongodb, categoryEndpoint.findById);
    router.post("", categoryEndpoint.save);
    router.delete("/:id", _InvalidIdMongodb.invalidIdMongodb, categoryEndpoint.delete);
    router.put("/:id", _InvalidIdMongodb.invalidIdMongodb, categoryEndpoint.update);

    return router;
};