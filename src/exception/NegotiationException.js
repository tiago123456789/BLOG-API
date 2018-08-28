function NegotiationException(message) {
    this.name = "NEGOTIATION";
    this.message = message;   
}

NegotiationException.prototype = Error.prototype;

export default NegotiationException;