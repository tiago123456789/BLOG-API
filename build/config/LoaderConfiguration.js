"use strict";

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFileWithConfigurations = function getFileWithConfigurations() {
    var environment = process.env.NODE_ENV || "";
    environment = environment.toLowerCase();
    return environment.length == 0 ? "./.env" : "./.env-" + environment;
};

(function loaderConfigurations() {
    _dotenv2.default.config({ path: getFileWithConfigurations() });
})();