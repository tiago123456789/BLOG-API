"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articleSchema = new _mongoose2.default.Schema({
    title: {
        type: String,
        required: [true, "Field title required."],
        validate: {
            validator: function validator(value) {
                return value.length >= 3;
            },
            message: "Field title mininum 3 caracters."
        }
    },
    content: {
        type: String,
        required: [true, "Field content is required!"],
        validate: {
            validator: function validator(value) {
                return value.length >= 3;
            },
            message: "Field content mininum 15 caracters."
        }
    },
    created_at: { type: Date, default: Date.now },
    category: { type: String, required: [true, "Field category required."] },
    author: {
        id: {
            type: _mongoose2.default.SchemaTypes.ObjectId,
            required: [true, "Author is required!"]
        },
        name: {
            type: String,
            required: [true, "Name author is required!"]
        }
    },
    tags: { type: [String] },
    comments: { type: [String] }
});

exports.default = _mongoose2.default.model("article", articleSchema);