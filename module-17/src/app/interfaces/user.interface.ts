import { Model } from "mongoose";

export interface Address {
    city: string;
    street: string;
    zip: number
}
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "User" | "Admin",
    address: Address
}
export interface userInstsanceMethods {
    hashPassword(password: string): string
}
export interface userStaticMethods extends Model<User> {
    hashPassword(password: string): string
}