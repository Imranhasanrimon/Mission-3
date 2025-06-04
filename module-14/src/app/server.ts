import app from "./app";

let server;
const port = 3000

const bootstrap = async () => {
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
bootstrap()



//This file is responsible for server handling like - starting, closing, closing error handling of server. this is only related to server