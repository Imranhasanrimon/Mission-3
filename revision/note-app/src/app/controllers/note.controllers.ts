import express, { Request, Response } from "express";
import { Note } from "../models/note.models";
import z from "zod";

export const noteRoutes = express.Router()

const CreateNoteZodSchema = z.object({
    title: z.string(),
    content: z.string(),
    createdAt: z.string(),
    pinned: z.boolean(),
    password: z.string()
})

noteRoutes.post("/create-note", async (req: Request, res: Response) => {
    // const myNote = new Note({
    //     title: "Mongoose",
    //     content: "Now I'm learning mongoose, this is second notenoteRoutes"
    // })
    // myNote.save();

    const body = await CreateNoteZodSchema.parseAsync(req.body);
    const note = new Note(body)
    const password = await note.hashPassword(body.password)
    note.password = password;

    res.send({
        message: "note created",
        success: true,
        note: note
    })
})
noteRoutes.get("/", async (req: Request, res: Response) => {
    const notes = await Note.find()

    res.send({
        message: "note created",
        success: true,
        note: notes
    })
})
noteRoutes.get("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId)

    res.send({
        message: "note created",
        success: true,
        note: note
    })
})
noteRoutes.patch("/:noteId", async (req: Request, res: Response) => {
    const noteId = req.params.noteId;
    const body = req.body;
    const note = await Note.findByIdAndUpdate(noteId, body, { new: true })

    res.send({
        message: "note created",
        success: true,
        note: note
    })
})