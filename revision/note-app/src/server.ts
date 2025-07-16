import mongoose from "mongoose";
import app from "./app";

async function main() {
    try {
        await mongoose.connect("mongodb+srv://common:common@cluster0.7hbnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("DB connected");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        })
    } catch (err) {
        console.log(err);
    }
}
main()

