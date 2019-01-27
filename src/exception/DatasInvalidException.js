import ExceptionMessage from "./ExceptionMessage";

function DatasInvalidException(message) {
    this.name = "DATA_INVALID";
    this.message = message || ExceptionMessage.DATA_INVALID;
}

DatasInvalidException.prototype = Error.prototype;
export default DatasInvalidException;