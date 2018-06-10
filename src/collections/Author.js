import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: [ true, "Field name required."] },
    description: String,
    email: { type: String, required: [true, "Field email required."], set: (values) => value.toLowerCase() },
    password: { type: String, required: [true, "Field password required."] }
});

export default mongoose.model("author", authorSchema);