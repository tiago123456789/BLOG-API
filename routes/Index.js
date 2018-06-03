import express from "express";
import tagRouter from "./Tag";
import ErrorValidation from "../lib/ErrorValidation";

export default (app) => {

    app.use("/tags", tagRouter(express.Router()));

    app.use((error, request, response, next) => {
        switch(error.code) {
            case "NEGOTIATION":
                return response.status(409).json({ msg: error.message });
            default:
                return response.status(400).json({ mgs: ErrorValidation.getErrorValidation(error) })
        }
    });
}