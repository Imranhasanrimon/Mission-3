import { model, Schema } from "mongoose"
import { NoteInterface } from "../interfaces/note.interface"

const noteSchema = new Schema<NoteInterface>({
    title: { type: String, required: true },
    content: String,
    pinned: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
})

export const Note = model<NoteInterface>("Note", noteSchema)