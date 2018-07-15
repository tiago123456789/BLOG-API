import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String, minlength: [3, "Field title mininum 3 caracters."] },
    content: { type: String, minlength: [3, "Field content mininum 3 caracters."]},
    created_at: { type: Date, default: Date.now },
    category: { type: String, required: [true, "Field category required."]},
    author: {
        id: {
            type: mongoose.SchemaTypes.ObjectId,
            required: [true, "Author is required!"]
        },
        name: {
            type: String,
            required: [true, "Name author is required!"]
        }
    },
    tags: { type: [String] },
    comments: { type: [String] }
});

export default mongoose.model("article", articleSchema);