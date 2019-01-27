"use strict";

var _Server = require("./config/Server");

var _Server2 = _interopRequireDefault(_Server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Server2.default.listen(process.env.PORT, function (error) {
  return console.log("Server running!!!");
});