const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathName = url.pathname

    //GET all Todos
    if (pathName === "/todos" && req.method === "GET") {
        const data = fs.readFileSync("./db/todo.json", { encoding: "utf-8" })
        res.writeHead(201, {
            "content-type": "application/json"
        })
        res.end(data)
    }
    //Post a todo
    else if (pathName === "/todos/create-todo" && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk
        })
        req.on("end", () => {
            const newTodo = JSON.parse(data);
            const allTodos = JSON.parse(fs.readFileSync("./db/todo.json", { encoding: "utf-8" }))
            allTodos.push(newTodo)
            fs.writeFileSync("./db/todo.json", JSON.stringify(allTodos, null, 2), { encoding: "utf-8" })
        })
        res.end("Todo created")
    }
    //GET a single todo
    else if (pathName === "/todo" && req.method === "GET") {
        const query = url.searchParams.get("title");
        const allTodos = JSON.parse(fs.readFileSync("./db/todo.json", { encoding: "utf-8" }))
        const singleTodo = allTodos.find(todo => todo.title === query)
        console.log(singleTodo);
        res.end(JSON.stringify(singleTodo))
    }
    //update a todo
    else if (pathName === "/todos/update-todo" && req.method === "PATCH") {
        const title = url.searchParams.get("title")
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk
        })
        req.on("end", () => {
            const newContent = JSON.parse(data);
            const allTodos = JSON.parse(fs.readFileSync("./db/todo.json", { encoding: "utf-8" }))
            const todoIndex = allTodos.findIndex((todo) => todo.title === title);
            allTodos[todoIndex].content = newContent;
            fs.writeFileSync("./db/todo.json", JSON.stringify(allTodos, null, 2), { encoding: "utf-8" })
        })
        res.end("Todo updated successfully")
    } else if (pathName === "/todos/delete-todo" && req.method === "DELETE") {
        const title = url.searchParams.get("title")
        const allTodos = JSON.parse(fs.readFileSync("./db/todo.json", { encoding: "utf-8" }))
        const todoIndex = allTodos.findIndex((todo) => todo.title === title);
        allTodos.splice(todoIndex, 1);
        fs.writeFileSync("./db/todo.json", JSON.stringify(allTodos, null, 2), { encoding: "utf-8" })
        res.end(`${title} todo has been deleted`)
    } else {
        res.end("Route Not Found")
    }
});

server.listen(5000, "127.0.0.1", () => {
    console.log("✅ server is on");
})