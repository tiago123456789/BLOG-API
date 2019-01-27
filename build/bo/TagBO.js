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

var _NotFoundException = require("../exception/NotFoundException");

var _NotFoundException2 = _interopRequireDefault(_NotFoundException);

var _NegotiationException = require("../exception/NegotiationException");

var _NegotiationException2 = _interopRequireDefault(_NegotiationException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagBO = function () {
    function TagBO(dao) {
        (0, _classCallCheck3.default)(this, TagBO);

        this._tagDAO = dao;
    }

    (0, _createClass3.default)(TagBO, [{
        key: "save",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(newTag) {
                var existTag;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._existTagWithName(newTag.name);

                            case 2:
                                existTag = _context.sent;

                                if (!existTag) {
                                    _context.next = 5;
                                    break;
                                }

                                throw new _NegotiationException2.default("Already exists this tag!");

                            case 5:
                                _context.next = 7;
                                return this._tagDAO.save(newTag);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function save(_x) {
                return _ref.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
                var tag;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._tagDAO.findById(id);

                            case 2:
                                tag = _context2.sent;

                                if (!(tag == null)) {
                                    _context2.next = 5;
                                    break;
                                }

                                throw new _NotFoundException2.default("Tag not found!");

                            case 5:
                                return _context2.abrupt("return", tag);

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function findById(_x2) {
                return _ref2.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "findAll",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._tagDAO.findAll();

                            case 2:
                                return _context3.abrupt("return", _context3.sent);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function findAll() {
                return _ref3.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "delete",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.findById(id);

                            case 2:
                                _context4.next = 4;
                                return this._tagDAO.delete(id);

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function _delete(_x3) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, dataModified) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.findById(id);

                            case 2:
                                this._tagDAO.update(id, dataModified);

                            case 3:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function update(_x4, _x5) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "_existTagWithName",
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(name) {
                var tagReturned;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this._tagDAO.findByName(name);

                            case 2:
                                tagReturned = _context6.sent;
                                return _context6.abrupt("return", tagReturned);

                            case 4:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function _existTagWithName(_x6) {
                return _ref6.apply(this, arguments);
            }

            return _existTagWithName;
        }()
    }]);
    return TagBO;
}();

exports.default = TagBO;