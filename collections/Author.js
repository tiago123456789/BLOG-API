import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: { type: String, required: [ true, "Field name required."] },
    description: String
});

export default mongoose.model("author", authorSchema);