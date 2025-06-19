import { model, Schema } from "mongoose";

const noteSchema = new Schema({
    title: { type: String, default: "This is Default" },
    content: { type: String, default: "" },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: { type: Boolean, default: false }
},
    {
        versionKey: false,
        timestamps: true
    })

export const Note = model("Note", noteSchema);