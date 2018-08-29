import ErrorValidation from "../lib/ErrorValidation";
import logger from "./../config/Logger";

export default (error, request, response, next) => {
    if (error.hasOwnProperty("errors")) {
        return response.status(400).json({ mgs: ErrorValidation.getErrorValidation(error) })
    }
    
    switch(error.name) {
        case "SECURITY": 
        case 'JsonWebTokenError':
            return response.status(error.status || 403).json({ msg: error.message })
        case "NOT_FOUND":
            return response.status(404).json({ msg: error.message });
        case "NEGOTIATION":
            return response.status(409).json({ msg: error.message });
        default:
            logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            return response.status(500).json({ mgs: error.message });
    }
};