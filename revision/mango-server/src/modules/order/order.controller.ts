import { Request, Response } from "express";
import Order from "./order.model";

const createOrder = async (req: Request, res: Response) => {
    const data = await Order.create(req.body);

    res.send({
        success: true,
        message: "Order Successful",
        data
    })
}

const getOrder = async (req: Request, res: Response) => {
    const data = await Order.find()
    res.send({
        success: true,
        message: "Orders retrived Successfully",
        data
    })
}

const deleteOrder = async (req: Request, res: Response) => {
    const data = await Order.findByIdAndDelete(req.params.orderId)
    res.send({
        success: true,
        message: "Order deleted Successfully",
        data
    })
}

export const orderController = {
    createOrder,
    getOrder,
    deleteOrder,
}