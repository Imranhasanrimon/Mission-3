import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "welcome to note app" })
})
export default app;