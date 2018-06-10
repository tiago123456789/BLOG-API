function NegotiationException(message) {
    this.code = "NEGOTIATION";
    this.message = message;   
}

NegotiationException.prototype = Error.prototype;

export default NegotiationException;