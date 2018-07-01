import mongoose from "mongoose";

// Setting lib promise using mongoose.
mongoose.Promise = Promise;
mongoose.connect(process.env.URL_DB);