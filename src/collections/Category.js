import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    description: { type: String, required: [true, "Field description required."] },
    number_articles: { type: Number, default: 0 }
});

export default mongoose.model("categoria", categorySchema);