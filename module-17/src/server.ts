import mongoose from "mongoose";
import app from "./app";
const PORT = 5000;


async function main() {
    try {
        await mongoose.connect("mongodb+srv://common:common@cluster0.7hbnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB is connected");

        app.listen(PORT, () => {
            console.log("Server is running on prot 5000");
        })
    } catch (error) {
        console.log(error);
    }
}

main()