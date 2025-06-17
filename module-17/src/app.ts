import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
const app: Application = express();

const noteSchema = new Schema({
    title: { type: String, default: "This is Default" },
    content: { type: String, default: "" },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: { type: Boolean, default: false }
})

const Note = model("Note", noteSchema);

app.post("/create-note", (req: Request, res: Response) => {
    const myNote = new Note({
        title: "Learning Mongoose",
        content: "I'm learning Mongoose",

    })

    myNote.save();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})


app.get("/", (req: Request, res: Response) => {
    res.send({ message: "welcome to note app" })
})
export default app;