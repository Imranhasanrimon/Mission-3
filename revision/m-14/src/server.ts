import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
    res.send("hellow world")
})

app.listen(3000, () => {
    console.log("server is running");
})

//now I'm focused on module 15. but it is entirely in nosql booster software
