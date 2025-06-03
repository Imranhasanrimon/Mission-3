const http = require('http')
const path = require('path')
const fs = require('fs')
const filePath = path.join(__dirname, "./db/todo.json")
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const pathName = url.pathname;

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    if (req.url === "/todos" && req.method === "GET") {
        res.writeHead(201, {
            "content-type": "application/json",
        })
        res.end(data)
    } else if (req.url === "/todos-create" && req.method === "POST") {
        let newTodoData = ""
        req.on("data", (chunk) => {
            newTodoData = JSON.parse(chunk);
        })
        req.on("end", () => {
            const newAllTodoData = JSON.parse(data)
            newAllTodoData.push(newTodoData)
            const jsonnewAllTodoData = JSON.stringify(newAllTodoData, null, 2)
            fs.writeFileSync(filePath, jsonnewAllTodoData, { encoding: "utf-8" })
            res.end(JSON.stringify(newTodoData, null, 2))
        })
    } else if (pathName === "/todo" && req.method === "GET") {
        const title = url.searchParams.get("title")
        console.log(title);
        const result = JSON.parse(data).find(d => d.title == title)

        res.end(JSON.stringify(result, null, 2))
    } else {
        res.end("something went wrong")
    };
})

server.listen(5000, "127.0.0.1", () => {
    console.log('server is running on port 5000');
})