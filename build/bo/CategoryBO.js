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

var _NegotiationException = require("./../exception/NegotiationException");

var _NegotiationException2 = _interopRequireDefault(_NegotiationException);

var _NotFoundException = require("./../exception/NotFoundException");

var _NotFoundException2 = _interopRequireDefault(_NotFoundException);

var _ExceptionMessage = require("./../exception/ExceptionMessage");

var _ExceptionMessage2 = _interopRequireDefault(_ExceptionMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryBO = function () {
    function CategoryBO(dao) {
        (0, _classCallCheck3.default)(this, CategoryBO);

        this._dao = dao;
    }

    (0, _createClass3.default)(CategoryBO, [{
        key: "save",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(newCategory) {
                var alreadyCategoryWithName;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._existCategoryWithName(newCategory.description);

                            case 2:
                                alreadyCategoryWithName = _context.sent;

                                if (!alreadyCategoryWithName) {
                                    _context.next = 5;
                                    break;
                                }

                                throw new _NegotiationException2.default(_ExceptionMessage2.default.ALREADY_EXISTS);

                            case 5:
                                _context.next = 7;
                                return this._dao.save(newCategory);

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
        key: "findAll",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._dao.findAll();

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
                var category;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._dao.findById(id);

                            case 2:
                                category = _context3.sent;

                                if (category) {
                                    _context3.next = 5;
                                    break;
                                }

                                throw new _NotFoundException2.default(_ExceptionMessage2.default.NOT_FOUND);

                            case 5:
                                return _context3.abrupt("return", category);

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
        key: "delete",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(id) {
                var category;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.findById(id);

                            case 2:
                                category = _context4.sent;

                                if (category.number_articles) {
                                    (0, _NegotiationException2.default)("Category is relationship one article.");
                                }
                                _context4.next = 6;
                                return this._dao.delete(id);

                            case 6:
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
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, categoryModified) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.findById(id);

                            case 2:
                                _context5.next = 4;
                                return this._dao.update(id, categoryModified);

                            case 4:
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
        key: "_existCategoryWithName",
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(name) {
                var category;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this._dao.findByName(name);

                            case 2:
                                category = _context6.sent;
                                return _context6.abrupt("return", category);

                            case 4:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function _existCategoryWithName(_x6) {
                return _ref6.apply(this, arguments);
            }

            return _existCategoryWithName;
        }()
    }]);
    return CategoryBO;
}();

exports.default = CategoryBO;