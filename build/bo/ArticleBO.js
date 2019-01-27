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

var _AuthorBO = require("./AuthorBO");

var _AuthorBO2 = _interopRequireDefault(_AuthorBO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleBO = function () {
    function ArticleBO(dao, authorBO) {
        (0, _classCallCheck3.default)(this, ArticleBO);

        this._dao = dao;
        this._authorBO = authorBO || new _AuthorBO2.default(new _AuthorDAO2.default());
    }

    (0, _createClass3.default)(ArticleBO, [{
        key: "findAll",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", this._dao.findAll());

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function findAll() {
                return _ref.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
                var article;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this._dao.findById(id);

                            case 2:
                                article = _context2.sent;

                                if (article) {
                                    _context2.next = 5;
                                    break;
                                }

                                throw new _NotFoundException2.default("Article not found!");

                            case 5:
                                return _context2.abrupt("return", article);

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function findById(_x) {
                return _ref2.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(article) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (article.category) {
                                    _context3.next = 2;
                                    break;
                                }

                                throw new _NegotiationException2.default("Category is required.");

                            case 2:
                                if (article.author) {
                                    _context3.next = 4;
                                    break;
                                }

                                throw new _NegotiationException2.default("Author is required.");

                            case 4:
                                _context3.next = 6;
                                return this._authorBO.findById(article.author.id);

                            case 6:
                                _context3.next = 8;
                                return this._dao.save(article);

                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function save(_x2) {
                return _ref3.apply(this, arguments);
            }

            return save;
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
                                this._dao.delete(id);

                            case 3:
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
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(id, articleModified) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.findById(id);

                            case 2:
                                this._dao.update(id, articleModified);

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
        key: "addComment",
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(idArticle, commnet) {
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return this.findById(idArticle);

                            case 2:
                                this._dao.addComment(idArticle, commnet);

                            case 3:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function addComment(_x6, _x7) {
                return _ref6.apply(this, arguments);
            }

            return addComment;
        }()
    }]);
    return ArticleBO;
}();

exports.default = ArticleBO;