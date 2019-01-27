"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _AuthService = require("../security/AuthService");

var _AuthService2 = _interopRequireDefault(_AuthService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthEndpoint = function () {
    function AuthEndpoint() {
        (0, _classCallCheck3.default)(this, AuthEndpoint);

        this._authService = new _AuthService2.default();
        this.login = this.login.bind(this);
        this.loginByRefreshToken = this.loginByRefreshToken.bind(this);
    }

    (0, _createClass3.default)(AuthEndpoint, [{
        key: "login",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response, next) {
                var credenciais, datasUserAuthenticated;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                credenciais = request.body;
                                _context.next = 4;
                                return this._authService.login(credenciais);

                            case 4:
                                datasUserAuthenticated = _context.sent;

                                response.status(200).json(datasUserAuthenticated);
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](0);

                                next(_context.t0);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 8]]);
            }));

            function login(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return login;
        }()
    }, {
        key: "loginByRefreshToken",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response, next) {
                var refreshToken, datasUserAuthenticated;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                refreshToken = request.params.refreshToken;
                                _context2.next = 4;
                                return this._authService.loginByRefreshToken(refreshToken);

                            case 4:
                                datasUserAuthenticated = _context2.sent;

                                response.status(200).json(datasUserAuthenticated);
                                _context2.next = 11;
                                break;

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2["catch"](0);

                                next(_context2.t0);

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function loginByRefreshToken(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return loginByRefreshToken;
        }()
    }]);
    return AuthEndpoint;
}();

exports.default = AuthEndpoint;