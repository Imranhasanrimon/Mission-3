"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todoRouter = express_1.default.Router();
app.use(express_1.default.json());
app.use('/todo', todoRouter);
todoRouter.get('/all-todos', (req, res) => {
    res.send({ msg: "all todos are here" });
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/todo/all-todos', (req, res) => {
    res.send({ haha: "this is from app router" });
});
exports.default = app;
//This file is responsible for routing handle, middleware, route related error
