"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorValidation = function () {
    function ErrorValidation() {
        (0, _classCallCheck3.default)(this, ErrorValidation);
    }

    (0, _createClass3.default)(ErrorValidation, null, [{
        key: "getErrorValidation",
        value: function getErrorValidation(error) {
            var errorsValidation = error.errors;
            if (errorsValidation) {
                return Object.keys(errorsValidation).map(function (chave) {
                    return errorsValidation[chave].message;
                });
            }
        }
    }]);
    return ErrorValidation;
}();

exports.default = ErrorValidation;