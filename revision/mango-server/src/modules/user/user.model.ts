import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            },
            message: (props) => `${props.value} is not a valid email`
        },
        immutable: true,
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Your phone no is not valid"],
        unique: true
    },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: { values: ["Admin", "Customer"], message: "Your Role is not valid" },
        required: true
    },
})

const User = model<IUser>("user", userSchema)
export default User;