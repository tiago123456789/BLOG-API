import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

import routesApp from "./../routes/Index";
import logger from "./Logger";
import "./LoaderConfiguration";
import "./Database";

const app = express();

// Setting middleware parse data in json
app.use(bodyParser.json());

// Setting middleware logger http.
app.use(morgan("combined", { stream: logger.stream }));
app.use(cors());

routesApp(app);

export default app;