import express from "express";
import tagRouter from "./Tag";
import categoryRouter from "./Category";
import authorRouter from "./Author";

import ErrorValidation from "../lib/ErrorValidation";

export default (app) => {

    app.use("/tags", tagRouter(express.Router()));
    app.use("/categories", categoryRouter(express.Router()));
    app.use("/authors", authorRouter(express.Router()));
    

    app.use((error, request, response, next) => {

        if (error.hasOwnProperty("errors")) {
            return response.status(400).json({ mgs: ErrorValidation.getErrorValidation(error) })
        }
        
        switch(error.code) {
            case "NOT_FOUND":
                return response.status(404).json({ msg: error.message });
            case "NEGOTIATION":
                return response.status(409).json({ msg: error.message });
            default:
                return response.status(500).json({ mgs: error.message });
        }
    });
}