import { Model, model, Schema } from "mongoose";
import { Address, User, userInstsanceMethods, userStaticMethods } from "../interfaces/user.interface";
import bcrypt from "bcryptjs";


const addressSchema = new Schema<Address>({
    city: { type: String },
    street: { type: String },
    zip: { type: Number },
}, { _id: false })
const userSchema = new Schema<User, userStaticMethods>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 4
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Email unique dite hobe"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    address: addressSchema,
})

userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    return password;
})

userSchema.static("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    return password
})

const User = model<User, userStaticMethods>("User", userSchema)
export default User;
//assignment 2 is still undone