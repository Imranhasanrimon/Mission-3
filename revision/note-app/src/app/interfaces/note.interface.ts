export interface NoteInterface {
    title: string,
    content: string,
    pinned: boolean,
    createdAt: Date,
    password: string
}

export interface NoteInterfaceMethod {
    hashPassword(pass: string): string;
}