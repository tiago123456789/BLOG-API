import ErrorValidation from "../lib/ErrorValidation";

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
            return response.status(500).json({ mgs: error.message });
    }
};