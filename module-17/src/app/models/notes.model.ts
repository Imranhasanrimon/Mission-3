import { model, Schema } from "mongoose";
import { string } from "zod";

const noteSchema = new Schema({
    title: { type: String, default: "This is Default" },
    content: { type: String, default: "" },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: { type: Boolean, default: false },
    user: { type: String, require }
},
    {
        versionKey: false,
        timestamps: true
    })

export const Note = model("Note", noteSchema);