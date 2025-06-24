import express, { Request, Response } from "express"
import User from "../models/users.model";
import { string, z } from "zod";
export const userRoutes = express.Router();

const CreateUserZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional()
})

userRoutes.post("/create-user", async (req: Request, res: Response) => {
    try {
        const body = await CreateUserZodSchema.parseAsync(req.body);
        console.log(body);

        const user = await User.create(body);
        res.status(200).json({
            success: "true",
            message: "User is successfully created",
            user: user
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User is not created",

        })
    }
})
userRoutes.get("/", (req: Request, res: Response) => {

})