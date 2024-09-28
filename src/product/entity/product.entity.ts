import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";

export type ProductDocument = Product & Document;

export class Product {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    vendor: string;

    @Prop({
        type: String,
        trim: true,
    })
    name: string;

    @Prop({
        type: String,
        trim: true,
    })
    description: string

    @Prop({
        type: Number,
        trim: true,
    })
    price: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: string

    @Prop({
        type: Number,
        trim: true,
    })
    stockQuantity: number

    @Prop({
        type: [String],
        trim: true,
    })
    images: [String]

}

export const ProductSchema = SchemaFactory.createForClass(Product);