export interface User {
    firstName: string;
    lastName: string;
    email: string;
    role: "User" | "Admin"
}