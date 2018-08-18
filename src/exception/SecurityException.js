function SecurityException(message, status) {
    this.code = "SECURITY";
    this.message = message;
    this.status = status;
};

SecurityException.prototype = Error.prototype;

export default SecurityException;