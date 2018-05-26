import express from "express";
import mongoose from "mongoose";

const app = express();
// Setting lib promise using mongoose.
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/blog");



app.listen(3000, () => console.log("Server running!!!"));