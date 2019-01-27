"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authorSchema = new _mongoose2.default.Schema({
    name: { type: String, required: [true, "Field name required."] },
    description: String,
    email: {
        type: String,
        required: [true, "Field email required."],
        set: function set(value) {
            return value.toLowerCase();
        },
        unique: true
    },
    password: {
        type: String,
        required: [true, "Field password required."]
    }
});

exports.default = _mongoose2.default.model("author", authorSchema);