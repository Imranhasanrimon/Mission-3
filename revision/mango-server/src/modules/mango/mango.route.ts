import { Router } from "express";
import { mangoController } from "./mango.controller";

const mangoRoute = Router();

mangoRoute.post("/", mangoController.createMango)
mangoRoute.get("/:mangoId", mangoController.getMangoById)
mangoRoute.get("/", mangoController.getMangos)
mangoRoute.patch("/:mangoId", mangoController.updateMango)
mangoRoute.delete("/:mangoId", mangoController.deleteMango)

export default mangoRoute;