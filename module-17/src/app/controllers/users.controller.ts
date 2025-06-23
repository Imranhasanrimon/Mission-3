import express, { Request, Response } from "express"
import { Note } from "../models/notes.model";
import User from "../models/users.model";
export const userRoutes = express.Router();

userRoutes.post("/create-user", async (req: Request, res: Response) => {
    const body = req.body;
    const user = await User.create(body);
    res.status(200).json({
        success: "true",
        message: "User is successfully created",
        user: user
    })
})
userRoutes.get("/", (req: Request, res: Response) => {

})