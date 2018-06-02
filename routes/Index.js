import express from "express";
import tagRouter from "./Tag";

export default (app) => {

    app.use("/tags", tagRouter(express.Router()));

    app.use((error, request, response, next) => {
        console.log(error);
    });
}