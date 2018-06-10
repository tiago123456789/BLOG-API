function NotFoundException(message) {
    this.code = "NOT_FOUND";
    this.message = message;
};

NotFoundException.prototype = Error.prototype;

export default NotFoundException;