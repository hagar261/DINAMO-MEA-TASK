import { Optional } from "@nestjs/common";
import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import mongoose from "mongoose";

export type AddressDocument = Address & Document;

export class Address {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: string

    @Prop({
        type: String,
        trim: true,
    })
    name: string;

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
        required: false
    })
    zipCode: String

}

export const AddressSchema = SchemaFactory.createForClass(Address);