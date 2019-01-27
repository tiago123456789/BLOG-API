"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TokenBuiler = function () {
    function TokenBuiler(token) {
        (0, _classCallCheck3.default)(this, TokenBuiler);

        this._token = token;
    }

    (0, _createClass3.default)(TokenBuiler, [{
        key: "build",
        value: function build() {
            return _jsonwebtoken2.default.sign(this._token.getPayload(), this._token.getSecret(), { expiresIn: this._token.getTimeExpired() });
        }
    }]);
    return TokenBuiler;
}();

exports.default = TokenBuiler;