import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routesApp from "./src/routes/Index";

const app = express();

// Setting lib promise using mongoose.
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/blog");

// Setting middleware parse data in json
app.use(bodyParser.json());
routesApp(app);


app.listen(3000, () => console.log("Server running!!!"));