import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Field title required."],
        validate: {
            validator: function(value) {
                return value.length >= 3;
            },
            message: "Field title mininum 3 caracters."
        }
    },
    content: { 
        type: String,
        required: [true, "Field content is required!"],
        validate: {
            validator: function(value) {
                return value.length >= 3;
            },
            message: "Field content mininum 15 caracters."
        }
    },
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