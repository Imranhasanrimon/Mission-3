import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
const app: Application = express();

app.use(express.json())

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

app.post("/notes/create-note", async (req: Request, res: Response) => {
    const body = req.body;
    // const myNote = new Note({
    //     title: "Learning Mongoose",
    //     content: "I'm learning Mongoose",
    // })
    // await myNote.save();
    const myNote = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
app.get("/notes", async (req: Request, res: Response) => {
    const myNote = await Note.find();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
app.get("/notes/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const myNote = await Note.findById(noteId);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
app.patch("/notes/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const body = req.body;
    const myNote = await Note.findByIdAndUpdate(noteId, body, { new: true });

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
app.delete("/notes/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const myNote = await Note.findByIdAndDelete(noteId);
    // const myNote2 = await Note.findOneAndDelete({ _id: noteId });
    // const myNote3 = await Note.deleteOne({ _id: noteId });

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