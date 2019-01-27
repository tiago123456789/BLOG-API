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

var _Constantes = require("../config/Constantes");

var _Token = require("./Token");

var _Token2 = _interopRequireDefault(_Token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TokenService = function () {
    function TokenService() {
        (0, _classCallCheck3.default)(this, TokenService);

        this._token = new _Token2.default();
        this.isValid = this.isValid.bind(this);
    }

    (0, _createClass3.default)(TokenService, [{
        key: "getAccessToken",
        value: function getAccessToken(request) {
            var token = request.get(_Constantes.CONSTANTES.PARAM_AUTHORIZATION) || "";
            token = token.replace(_Constantes.CONSTANTES.PARAM_PREFIX_TOKEN + " ", "");
            return token;
        }
    }, {
        key: "decode",
        value: function decode(token) {
            if (this._isJwtValid(token)) {
                throw new SecurityException("Token invalid!");
            }
            return _jsonwebtoken2.default.decode(token);
        }
    }, {
        key: "isValid",
        value: function isValid(token) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                if (_this._isJwtValid(token)) {
                    reject(new SecurityException("Token invalid!"));
                }

                _jsonwebtoken2.default.verify(token, _this._token.getSecret(), function (err, jwtDecoded) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(jwtDecoded);
                    }
                });
            });
        }
    }, {
        key: "_isJwtValid",
        value: function _isJwtValid(token) {
            var expressionValidTokenJwt = /^([a-z0-9])+\.([a-z0-9])+\.([a-z0-9])+$/;
            var isJwt = expressionValidTokenJwt.test(token);
            return token == null || isJwt;
        }
    }]);
    return TokenService;
}();

exports.default = TokenService;