import mongoose from "mongoose";
import NotFoundException from "../exception/NotFoundException";

export const invalidIdMongodb = (request, response, next) => {
    const id = request.params.id;
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        return next();
    }

    return next(new NotFoundException("Registro não encontrado!"));
}