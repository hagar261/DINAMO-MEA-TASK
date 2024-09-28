import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";
import { orderStatus, paymentMethod } from "src/constants/enum";

@Schema({ _id: false })
class ProductItems {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: string

    @Prop({
        type: Number,
        trim: true,
    })
    quantity: number

    @Prop({
        type: Number,
        trim: true,
    })
    price: number
}
const productItemsSchema = SchemaFactory.createForClass(ProductItems);

@Schema({ _id: false })
class ShippingAddress {
    @Prop({
        type: String,
        trim: true,
    })
    street: string
    @Prop({
        type: String,
        trim: true,
    })
    city: string
    @Prop({
        type: String,
        trim: true,
    })
    state: string
    @Prop({
        type: String,
        trim: true,
    })
    zipCode: string
}
const ShippingAddressSchema = SchemaFactory.createForClass(ShippingAddress);

export type OrderDocument = Order & Document;
export class Order {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({
        type: String,
        trim: true,
    })
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    consumer: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    vendor: string

    @Prop({ type: [productItemsSchema] })
    productItems: ProductItems[]

    @Prop({
        type: Number,
        trim: true,
    })
    totalPrice: number

    @Prop({
        type: String,
        enum: orderStatus,
    })
    orderStatus: orderStatus

    @Prop({
        type: String,
        enum: paymentMethod,
    })
    paymentMethod: paymentMethod

    @Prop({ type: [ShippingAddressSchema] })
    shippingAddress: ShippingAddress[]

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    rider: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' })
    customerAddress: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Address' })
    vendorAddress: string

}

export const OrderSchema = SchemaFactory.createForClass(Order);