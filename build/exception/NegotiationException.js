"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function NegotiationException(message) {
    this.name = "NEGOTIATION";
    this.message = message;
}

NegotiationException.prototype = Error.prototype;

exports.default = NegotiationException;