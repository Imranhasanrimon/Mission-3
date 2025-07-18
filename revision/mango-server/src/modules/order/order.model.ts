import { model, Schema } from "mongoose";
import { IOrder } from "./order.interface";
import Mango from "../mango/mango.model";

const orderAddressSchema = new Schema({
    zipCode: String,
    state: String,
    country: String,
    street: String
})

const orderSchema = new Schema<IOrder>({
    user: { type: Schema.Types.ObjectId },
    mango: { type: Schema.Types.ObjectId },
    quantity: { type: Number, min: 0 },
    totalPrice: { type: Number, min: 0 },
    status: { type: String, required: true },
    address: {
        type: orderAddressSchema,
        required: true
    }
})

orderSchema.pre("save", async function () {
    const mango = await Mango.findById(this.mango);
    if (!mango) throw new Error("Mango not found")

    this.totalPrice = mango.price * this.quantity;
})

const Order = model("order", orderSchema)

export default Order;