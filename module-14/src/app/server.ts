import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";

let server;
const port = 3000

const uri = "mongodb+srv://common:common@cluster0.7hbnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const bootstrap = async () => {
    await client.connect();
    console.log('DB connected');
    server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
bootstrap()



//This file is responsible for server handling like - starting, closing, closing error handling of server. this is only related to server