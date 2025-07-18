import { Model, model, Schema } from "mongoose"
import { NoteInterface, NoteInterfaceMethod } from "../interfaces/note.interface"
import bcrypt from "bcrypt"

const noteSchema = new Schema<NoteInterface, Model<NoteInterface>, NoteInterfaceMethod>({
    title: { type: String, required: true },
    content: String,
    pinned: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    password: { type: String, required: true }
})

noteSchema.method("hashPassword", async function hashPassword(plainPass: string) {
    const password = await bcrypt.hash(plainPass, 10)
    return password
})

export const Note = model("Note", noteSchema)