export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: "User" | "Admin",
    address: {
        city: string;
        street: string;
        zip: number
    }
}