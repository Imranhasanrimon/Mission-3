import { Request, Response } from "express";
import Mango from "./mango.model";

const createMango = async (req: Request, res: Response) => {
    const data = await Mango.create(req.body)
    res.send({
        success: true,
        message: "Mango Added Successfully ✅",
        data
    })
}

const getMangos = async (req: Request, res: Response) => {
    const data = await Mango.find()
    res.send({
        success: true,
        message: "Mangos retrieved Successfully ✅",
        data
    })
}

const getMangoById = async (req: Request, res: Response) => {
    const data = await Mango.findById(req.params.mangoId)
    res.send({
        success: true,
        message: "Mango retrieved Successfully ✅",
        data
    })
}

const updateMango = async (req: Request, res: Response) => {
    const mangoId = req.params.mangoId;
    const payload = req.body;
    const data = await Mango.findByIdAndUpdate(mangoId, payload, { new: true, runValidators: true })
    res.send({
        success: true,
        message: "Mango updated Successfully ✅",
        data
    })
}

const deleteMango = async (req: Request, res: Response) => {
    const mangoId = req.params.mangoId;
    const data = await Mango.findByIdAndDelete(mangoId)
    res.send({
        success: true,
        message: "Mango deleted Successfully ✅",
        data
    })
}

export const mangoController = {
    createMango,
    getMangos,
    getMangoById,
    updateMango,
    deleteMango
}