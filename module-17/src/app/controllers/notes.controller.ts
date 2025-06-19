import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
export const noteRoutes = express.Router()

noteRoutes.post("/create-note", async (req: Request, res: Response) => {
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
noteRoutes.get("/", async (req: Request, res: Response) => {
    const myNote = await Note.find();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
noteRoutes.get("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const myNote = await Note.findById(noteId);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
noteRoutes.patch("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const body = req.body;
    const myNote = await Note.findByIdAndUpdate(noteId, body, { new: true });

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})
noteRoutes.delete("/:noteId", async (req: Request, res: Response) => {
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