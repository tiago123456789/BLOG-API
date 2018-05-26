import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    name: { type: String, required: [ true, "Field name required."] }
});

export default mongoose.model("tag", tagSchema);