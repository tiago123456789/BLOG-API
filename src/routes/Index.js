import express from "express";
import tagRouter from "./Tag";
import categoryRouter from "./Category";
import authorRouter from "./Author";
import articleRouter from "./Article";
import authRouter from "./Auth";
import AuthService from "./../security/AuthService";

import errorHandler from "../middleware/ErrorHandler";

const authService = new AuthService();

export default (app) => {
    app.use("/tags",  authService.temAcesso, tagRouter(express.Router()));
    app.use("/categories",  authService.temAcesso, categoryRouter(express.Router()));
    app.use("/authors",  authService.temAcesso, authorRouter(express.Router()));
    app.use("/articles", articleRouter(express.Router()));
    app.use("/auth", authRouter(express.Router()));

    app.use((request, response) => {
        const message = {
            status: 404,
            message: "Sorry! Route not found."
        };
        response.status(message.status).json(message);
    });

    app.use(errorHandler);
}