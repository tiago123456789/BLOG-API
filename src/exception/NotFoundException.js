function NotFoundException(message) {
    this.name = "NOT_FOUND";
    this.message = message;
};

NotFoundException.prototype = Error.prototype;

export default NotFoundException;