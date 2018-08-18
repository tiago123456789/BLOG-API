import express from "express";
import tagRouter from "./Tag";
import categoryRouter from "./Category";
import authorRouter from "./Author";
import articleRouter from "./Article";

import errorHandler from "../middleware/ErrorHandler";

export default (app) => {

    app.use("/tags", tagRouter(express.Router()));
    app.use("/categories", categoryRouter(express.Router()));
    app.use("/authors", authorRouter(express.Router()));
    app.use("/articles", articleRouter(express.Router()));

    app.use((request, response) => {
        const message = {
            status: 404,
            message: "Sorry! Route not found."
        };
        response.status(message.status).json(message);
    });

    app.use(errorHandler);
}