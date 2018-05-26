import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { type: String, minlength: [3, "Field title mininum 3 caracters."] },
    content: { type: String, minlength: [3, "Field content mininum 3 caracters."]},
    created_at: { type: Date, default: Date.now },
    category: { type: String, required: [true, "Field category required."]},
    tags: { type: [String] },
    comments: { type: [String] }
});