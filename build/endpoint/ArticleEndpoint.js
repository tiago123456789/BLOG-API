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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleEndpoint = function () {
    function ArticleEndpoint(bo) {
        (0, _classCallCheck3.default)(this, ArticleEndpoint);

        this._bo = bo;
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    (0, _createClass3.default)(ArticleEndpoint, [{
        key: "findAll",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response) {
                var articles;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this._bo.findAll();

                            case 2:
                                articles = _context.sent;

                                response.json(articles);

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function findAll(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response, next) {
                var id, article;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                id = request.params.id;
                                _context2.next = 4;
                                return this._bo.findById(id);

                            case 4:
                                article = _context2.sent;

                                response.json(article);
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

            function findById(_x3, _x4, _x5) {
                return _ref2.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(request, response, next) {
                var newArticle;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                newArticle = request.body;
                                _context3.next = 4;
                                return this._bo.save(newArticle);

                            case 4:
                                response.sendStatus(201);
                                _context3.next = 10;
                                break;

                            case 7:
                                _context3.prev = 7;
                                _context3.t0 = _context3["catch"](0);

                                next(_context3.t0);

                            case 10:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 7]]);
            }));

            function save(_x6, _x7, _x8) {
                return _ref3.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "delete",
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(request, response, next) {
                var id;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                id = request.params.id;
                                _context4.next = 4;
                                return this._bo.delete(id);

                            case 4:
                                response.sendStatus(204);
                                _context4.next = 10;
                                break;

                            case 7:
                                _context4.prev = 7;
                                _context4.t0 = _context4["catch"](0);

                                next(_context4.t0);

                            case 10:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 7]]);
            }));

            function _delete(_x9, _x10, _x11) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(request, response, next) {
                var id, articleModified;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                id = request.params.id;
                                articleModified = request.body;
                                _context5.next = 5;
                                return this._bo.update(id, articleModified);

                            case 5:
                                response.sendStatus(204);
                                _context5.next = 11;
                                break;

                            case 8:
                                _context5.prev = 8;
                                _context5.t0 = _context5["catch"](0);

                                next(_context5.t0);

                            case 11:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[0, 8]]);
            }));

            function update(_x12, _x13, _x14) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "addComment",
        value: function () {
            var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(request, response, next) {
                var id, body;
                return _regenerator2.default.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.prev = 0;
                                id = request.params.id;
                                body = request.body;
                                _context6.next = 5;
                                return this._bo.addComment(id, body.comment);

                            case 5:
                                response.sendStatus(201);
                                _context6.next = 11;
                                break;

                            case 8:
                                _context6.prev = 8;
                                _context6.t0 = _context6["catch"](0);

                                next(_context6.t0);

                            case 11:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this, [[0, 8]]);
            }));

            function addComment(_x15, _x16, _x17) {
                return _ref6.apply(this, arguments);
            }

            return addComment;
        }()
    }]);
    return ArticleEndpoint;
}();

exports.default = ArticleEndpoint;