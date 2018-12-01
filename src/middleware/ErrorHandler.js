import ErrorValidation from "../lib/ErrorValidation";
import logger from "./../config/Logger";

export default (error, request, response, next) => {
    if (error.hasOwnProperty("errors")) {
        return response.status(400).json({ msg: ErrorValidation.getErrorValidation(error) })
    }
    
    switch(error.name) {
        case "DATA_INVALID":
            return response.status(400).json({ msg: error.message })
        case "SECURITY": 
        case 'JsonWebTokenError':
            return response.status(error.status || 403).json({ msg: error.message })
        case "NOT_FOUND":
            return response.status(404).json({ msg: error.message });
        case "NEGOTIATION":
            return response.status(409).json({ msg: error.message });
        default:
            logger.error(`${error.status || 500} - ${error.message} - ${request.originalUrl} - ${request.method} - ${request.ip}`);
            return response.status(500).json({ msg: error.message });
    }
};