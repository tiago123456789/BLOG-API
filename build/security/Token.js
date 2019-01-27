"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Token = function () {
    function Token() {
        var typeToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Token.TYPE.ACCESS;
        (0, _classCallCheck3.default)(this, Token);

        this._payload = {};
        this._secret = process.env.TOKEN_SECRET;
        this._type = typeToken;
        this.addValuePayload("type", typeToken);
    }

    (0, _createClass3.default)(Token, [{
        key: "addValuePayload",
        value: function addValuePayload(key, value) {
            this._payload[key] = value;
            return this;
        }
    }, {
        key: "getPayload",
        value: function getPayload() {
            return this._payload;
        }
    }, {
        key: "getSecret",
        value: function getSecret() {
            return Buffer.from(this._secret || process.env.TOKEN_SECRET).toString("base64");
        }
    }, {
        key: "getTimeExpired",
        value: function getTimeExpired() {
            if (this._type == Token.TYPE.ACCESS) {
                return process.env.ACCESS_TOKEN_TIME_EXPIRED;
            } else {
                return process.env.REFRESH_TOKEN_TIME_EXPIRED;
            }
        }
    }]);
    return Token;
}();

Token.TYPE = {
    REFRESH: "REFRESH",
    ACCESS: "ACCESS"
};
exports.default = Token;