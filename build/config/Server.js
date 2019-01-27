"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _Index = require("./../routes/Index");

var _Index2 = _interopRequireDefault(_Index);

var _Logger = require("./Logger");

var _Logger2 = _interopRequireDefault(_Logger);

require("./LoaderConfiguration");

require("./Database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Setting middleware parse data in json
app.use(_bodyParser2.default.json());

// Setting middleware logger http.
app.use((0, _morgan2.default)("combined", { stream: _Logger2.default.stream }));
app.use((0, _cors2.default)());

(0, _Index2.default)(app);

exports.default = app;