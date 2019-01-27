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

var _NotFoundException = require("./../exception/NotFoundException");

var _NotFoundException2 = _interopRequireDefault(_NotFoundException);

var _NegotiationException = require("./../exception/NegotiationException");

var _NegotiationException2 = _interopRequireDefault(_NegotiationException);

var _AuthorDAO = require("./../dao/AuthorDAO");

var _AuthorDAO2 = _interopRequireDefault(_AuthorDAO);

var _Encoder = require("../lib/Encoder");

var _Encoder2 = _interopRequireDefault(_Encoder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthorBO = function () {
    function AuthorBO(dao) {
        (0, _classCallCheck3.default)(this, AuthorBO);

        this._dao = dao || new _AuthorDAO2.default();
    }

    (0, _createClass3.default)(AuthorBO, [{
        key: "findByEmail",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._dao.findByEmail(email);

                            case 2:
                                return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function findByEmail(_x) {
                return _ref.apply(this, arguments);
            }

            return findByEmail;
        }()
    }, {
        key: "findAll",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._dao.findAll({ email: 1, name: 1 });

                            case 2:
                                return _context2.abrupt("return", _context2.sent);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function findAll() {
                return _ref2.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(id) {
                var author;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._dao.findById(id);

                            case 2:
                                author = _context3.sent;

                                if (author) {
                                    _context3.next = 5;
                                    break;
                                }

                                throw new _NotFoundException2.default("Author not found!");

                            case 5:
                                return _context3.abrupt("return", author);

                            case 6:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function findById(_x2) {
                return _ref3.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(newAuthor) {
                var someAuthorUsedEmail;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this._verifyIfEmailExists(newAuthor.email);

                            case 2:
                                someAuthorUsedEmail = _context4.sent;

                                if (!someAuthorUsedEmail) {
                                    _context4.next = 5;
                                    break;
                                }

                                throw new _NegotiationException2.default("Email already used!");

                            case 5:
                                _context4.next = 7;
                                return _Encoder2.default.getHash(newAuthor.password);

                            case 7:
                                newAuthor.password = _context4.sent;
                                _context4.next = 10;
                                return this._dao.save(newAuthor);

                            case 10:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function save(_x3) {
                return _ref4.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "delete",
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.findById(id);

                            case 2:
                                _context5.next = 4;
                                return this._dao.delete(id);

                            case 4:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function _delete(_x4) {
                return _ref5.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(id, authorModify) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this.findById(id);

                            case 2:
                                if (!authorModify.password) {
                                    _context6.next = 6;
                                    break;
                                }

                                _context6.next = 5;
                                return _Encoder2.default.getHash(authorModify.password);

                            case 5:
                                authorModify.password = _context6.sent;

                            case 6:
                                _context6.next = 8;
                                return this._dao.update(id, authorModify);

                            case 8:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function update(_x5, _x6) {
                return _ref6.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "_verifyIfEmailExists",
        value: function () {
            var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(email) {
                var author;
                return _regenerator2.default.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return this._dao.findByEmail(email);

                            case 2:
                                author = _context7.sent;
                                return _context7.abrupt("return", author);

                            case 4:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function _verifyIfEmailExists(_x7) {
                return _ref7.apply(this, arguments);
            }

            return _verifyIfEmailExists;
        }()
    }]);
    return AuthorBO;
}();

exports.default = AuthorBO;