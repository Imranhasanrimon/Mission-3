import express, { Application } from "express";
import cors from "cors"
import mongoose from "mongoose";
import config from "./config";
import routes from "./routes/routes";

const app: Application = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(config.port, () => {
    console.log("✅ server running on port", config.port);
})

async function sever() {
    try {
        mongoose.connect(config.database_url!)
        console.log("🛢️  connected to Db");
    } catch (err) {
        console.log(err);
    }
}
sever()