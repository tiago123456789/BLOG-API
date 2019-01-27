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

var TagEndpoint = function () {
    function TagEndpoint(bo) {
        (0, _classCallCheck3.default)(this, TagEndpoint);

        this._tagBO = bo;
        this.findAll = this.findAll.bind(this);
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.findById = this.findById.bind(this);
    }

    (0, _createClass3.default)(TagEndpoint, [{
        key: "findAll",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(request, response, next) {
                var tags;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return this._tagBO.findAll();

                            case 3:
                                tags = _context.sent;

                                response.json(tags);
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

            function findAll(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return findAll;
        }()
    }, {
        key: "findById",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(request, response, next) {
                var id, tag;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                id = request.params.id;
                                _context2.next = 4;
                                return this._tagBO.findById(id);

                            case 4:
                                tag = _context2.sent;

                                response.json(tag);
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

            function findById(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(request, response, next) {
                var newTag;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                newTag = request.body;
                                _context3.next = 4;
                                return this._tagBO.save(newTag);

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

            function save(_x7, _x8, _x9) {
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
                                return this._tagBO.delete(id);

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
                var id, modifiedTag;
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.prev = 0;
                                id = request.params.id;
                                modifiedTag = request.body;
                                _context5.next = 5;
                                return this._tagBO.update(id, modifiedTag);

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
    return TagEndpoint;
}();

exports.default = TagEndpoint;