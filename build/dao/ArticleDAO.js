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

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Article = require("../collections/Article");

var _Article2 = _interopRequireDefault(_Article);

var _DAO2 = require("./DAO");

var _DAO3 = _interopRequireDefault(_DAO2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleDao = function (_DAO) {
    (0, _inherits3.default)(ArticleDao, _DAO);

    function ArticleDao() {
        (0, _classCallCheck3.default)(this, ArticleDao);
        return (0, _possibleConstructorReturn3.default)(this, (ArticleDao.__proto__ || Object.getPrototypeOf(ArticleDao)).call(this, _Article2.default));
    }

    (0, _createClass3.default)(ArticleDao, [{
        key: "addComment",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(idArticle, comment) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getDAO().update({ _id: idArticle }, { $push: { comments: comment } });

                            case 2:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addComment(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return addComment;
        }()
    }]);
    return ArticleDao;
}(_DAO3.default);

exports.default = ArticleDao;