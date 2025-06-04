import express, { Application, Request, Response } from "express"
const app: Application = express()
const todoRouter = express.Router()

app.use(express.json())
app.use('/todo', todoRouter)

todoRouter.get('/all-todos', (req, res) => {

    res.send({ msg: "all todos are here" })
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.get('/todo/all-todos', (req: Request, res: Response) => {


    res.send({ haha: "this is from app router" })
})




export default app;
//This file is responsible for routing handle, middleware, route related error