function SecurityException(message, status) {
    this.name = "SECURITY";
    this.message = message;
    this.status = status;
};

SecurityException.prototype = Error.prototype;

export default SecurityException;