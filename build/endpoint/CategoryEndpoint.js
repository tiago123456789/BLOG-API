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

var CategoryEndpoint = function () {
    function CategoryEndpoint(bo) {
        (0, _classCallCheck3.default)(this, CategoryEndpoint);

        this._bo = bo;
        this.save = this.save.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    (0, _createClass3.default)(CategoryEndpoint, [{
        key: "save",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response, next) {
                var newCategory;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                newCategory = request.body;
                                _context.next = 4;
                                return this._bo.save(newCategory);

                            case 4:
                                response.sendStatus(201);
                                _context.next = 10;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);

                                next(_context.t0);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function save(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "findAll",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response, next) {
                var categories;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return this._bo.findAll();

                            case 3:
                                categories = _context2.sent;

                                response.status(200).json(categories);
                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2["catch"](0);

                                next(_context2.t0);

                            case 10:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 7]]);
            }));

            function findAll(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(request, response, next) {
                var id, category;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                id = request.params.id;
                                _context3.next = 4;
                                return this._bo.findById(id);

                            case 4:
                                category = _context3.sent;

                                response.status(200).json(category);
                                _context3.next = 12;
                                break;

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3["catch"](0);

                                console.log(_context3.t0);
                                next(_context3.t0);

                            case 12:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 8]]);
            }));

            function findById(_x7, _x8, _x9) {
                return _ref3.apply(this, arguments);
            }

            return findById;
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

            function _delete(_x10, _x11, _x12) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(request, response, next) {
                var id, categoryModified;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                id = request.params.id;
                                categoryModified = request.body;
                                _context5.next = 5;
                                return this._bo.update(id, categoryModified);

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

            function update(_x13, _x14, _x15) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }]);
    return CategoryEndpoint;
}();

exports.default = CategoryEndpoint;