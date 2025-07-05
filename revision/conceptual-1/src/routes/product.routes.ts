import { IncomingMessage, ServerResponse } from "http";
import { handleProducts } from "../controller/product.controller";

export const routeHandler = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    if (url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("this is home route")
        console.log(url);
    } else if (url?.startsWith("/products")) {
        await handleProducts(req, res)
    } else {
        res.end("route does not match")
    }


}