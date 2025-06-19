import express, { Application, Request, Response } from 'express';
import { noteRoutes } from './app/controllers/notes.controller';
const app: Application = express();

app.use(express.json())
app.use("/notes", noteRoutes)






app.get("/", (req: Request, res: Response) => {
    res.send({ message: "welcome to note app" })
})
export default app;