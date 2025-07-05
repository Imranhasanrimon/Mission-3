import { IncomingMessage, ServerResponse } from "http";
import { products } from "../data/product";

export const handleProducts = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if (url === "/products" && method === "GET") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(products))
    }
}