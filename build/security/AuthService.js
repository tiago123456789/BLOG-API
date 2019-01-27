"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _TokenService = require("./TokenService");

var _TokenService2 = _interopRequireDefault(_TokenService);

var _AuthorBO = require("./../bo/AuthorBO");

var _AuthorBO2 = _interopRequireDefault(_AuthorBO);

var _Encoder = require("./../lib/Encoder");

var _Encoder2 = _interopRequireDefault(_Encoder);

var _DatasInvalidException = require("./../exception/DatasInvalidException");

var _DatasInvalidException2 = _interopRequireDefault(_DatasInvalidException);

var _SecurityException = require("./../exception/SecurityException");

var _SecurityException2 = _interopRequireDefault(_SecurityException);

var _ExceptionMessage = require("./../exception/ExceptionMessage");

var _ExceptionMessage2 = _interopRequireDefault(_ExceptionMessage);

var _TokenBuilder = require("./TokenBuilder");

var _TokenBuilder2 = _interopRequireDefault(_TokenBuilder);

var _Token = require("./Token");

var _Token2 = _interopRequireDefault(_Token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthService = function () {
    function AuthService(authorBO) {
        (0, _classCallCheck3.default)(this, AuthService);

        this._authorBo = authorBO || new _AuthorBO2.default();
        this._tokenService = new _TokenService2.default();
        this.temAcesso = this.temAcesso.bind(this);
    }

    (0, _createClass3.default)(AuthService, [{
        key: "temAcesso",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response, next) {
                var accessToken, eUmTokenValido;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                accessToken = this._tokenService.getAccessToken(request);

                                if (!(accessToken.length == 0)) {
                                    _context.next = 4;
                                    break;
                                }

                                return _context.abrupt("return", response.status(403).json({ msg: "Need to inform token!" }));

                            case 4:
                                _context.next = 6;
                                return this._tokenService.isValid(accessToken);

                            case 6:
                                eUmTokenValido = _context.sent;

                                if (eUmTokenValido) {
                                    _context.next = 9;
                                    break;
                                }

                                return _context.abrupt("return", next(new _SecurityException2.default(_ExceptionMessage2.default.DATA_INVALID)));

                            case 9:
                                return _context.abrupt("return", next());

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](0);

                                next(_context.t0);

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 12]]);
            }));

            function temAcesso(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return temAcesso;
        }()
    }, {
        key: "login",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(credenciais) {
                var emailAutenticacao, password, pessoa, senhaEValida, email, name, id;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                emailAutenticacao = credenciais.email;
                                password = credenciais.password;

                                if (!(!emailAutenticacao || !password)) {
                                    _context2.next = 4;
                                    break;
                                }

                                throw new _DatasInvalidException2.default();

                            case 4:
                                _context2.next = 6;
                                return this._authorBo.findByEmail(emailAutenticacao);

                            case 6:
                                pessoa = _context2.sent;

                                if (pessoa) {
                                    _context2.next = 9;
                                    break;
                                }

                                throw new _SecurityException2.default(AuthService.DATA_INVALID, 401);

                            case 9:
                                _context2.next = 11;
                                return _Encoder2.default.isEqual(password, pessoa.password);

                            case 11:
                                senhaEValida = _context2.sent;

                                if (senhaEValida) {
                                    _context2.next = 14;
                                    break;
                                }

                                throw new _SecurityException2.default(AuthService.DATA_INVALID, 401);

                            case 14:
                                email = pessoa.email, name = pessoa.name, id = pessoa.id;
                                return _context2.abrupt("return", (0, _extends3.default)({}, this._getAccessERefreshToken({ email: email, name: name, id: id }), {
                                    id: id,
                                    name: name
                                }));

                            case 16:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function login(_x4) {
                return _ref2.apply(this, arguments);
            }

            return login;
        }()
    }, {
        key: "loginByRefreshToken",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(refreshToken) {
                var refreshTokenEValid, payloadToken, author, email, name, id;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._tokenService.isValid(refreshToken);

                            case 2:
                                refreshTokenEValid = _context3.sent;

                                if (refreshTokenEValid) {
                                    _context3.next = 5;
                                    break;
                                }

                                throw new _SecurityException2.default(_ExceptionMessage2.default.DATA_INVALID, 403);

                            case 5:
                                _context3.next = 7;
                                return this._tokenService.decode(refreshToken);

                            case 7:
                                payloadToken = _context3.sent;
                                _context3.next = 10;
                                return this._authorBo.findByEmail(payloadToken.email);

                            case 10:
                                author = _context3.sent;

                                if (author) {
                                    _context3.next = 13;
                                    break;
                                }

                                throw new _SecurityException2.default(_ExceptionMessage2.default.DATA_INVALID, 401);

                            case 13:
                                email = author.email, name = author.name, id = author.id;
                                return _context3.abrupt("return", (0, _extends3.default)({}, this._getAccessERefreshToken({ email: email, name: name, id: id }), {
                                    id: id,
                                    name: name
                                }));

                            case 15:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function loginByRefreshToken(_x5) {
                return _ref3.apply(this, arguments);
            }

            return loginByRefreshToken;
        }()
    }, {
        key: "_getAccessERefreshToken",
        value: function _getAccessERefreshToken(dados) {
            var accessToken = new _Token2.default(_Token2.default.TYPE.ACCESS);
            var refreshToken = new _Token2.default(_Token2.default.TYPE.REFRESH);

            var chaves = Object.keys(dados);
            chaves.forEach(function (chave) {
                accessToken.addValuePayload(chave, dados[chave]);
                refreshToken.addValuePayload(chave, dados[chave]);
            });

            return {
                accessToken: new _TokenBuilder2.default(accessToken).build(),
                refreshToken: new _TokenBuilder2.default(refreshToken).build()
            };
        }
    }]);
    return AuthService;
}();

exports.default = AuthService;