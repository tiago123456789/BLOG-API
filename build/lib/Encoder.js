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

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Encoder = function () {
    function Encoder() {
        (0, _classCallCheck3.default)(this, Encoder);
    }

    (0, _createClass3.default)(Encoder, null, [{
        key: "getHash",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(textPlain) {
                var saltRound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _bcrypt2.default.hash(textPlain, saltRound);

                            case 2:
                                return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getHash(_x) {
                return _ref.apply(this, arguments);
            }

            return getHash;
        }()
    }, {
        key: "isEqual",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(textPlain, contentHash) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _bcrypt2.default.compare(textPlain, contentHash);

                            case 2:
                                return _context2.abrupt("return", _context2.sent);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function isEqual(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return isEqual;
        }()
    }]);
    return Encoder;
}();

exports.default = Encoder;