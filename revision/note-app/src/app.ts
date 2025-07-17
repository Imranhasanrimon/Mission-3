import express, { Request, Application, Response } from "express"
import { noteRoutes } from "./app/controllers/note.controllers";
const app: Application = express();

app.use(express.json())

app.use("/notes", noteRoutes)



app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "hellow world"
    })
})

export default app;