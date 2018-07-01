import express from "express";
import bodyParser from "body-parser";

import routesApp from "./../routes/Index";
import "./LoaderConfiguration";
import "./Database";

const app = express();

// Setting middleware parse data in json
app.use(bodyParser.json());
routesApp(app);

export default app;