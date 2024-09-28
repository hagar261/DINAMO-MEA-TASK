import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Expose, Transform } from "class-transformer";
import { UserType } from "src/constants/enum";

export type UserDocument = User & Document;

export class User {

    @Transform((value) => {
        if (value.obj) return value.obj._id.toString();
    })
    @Expose()
    _id: string;

    @Prop({
        type: String,
        trim: true,
    })
    firstName: string;

    @Prop({
        type: String,
        trim: true,
    })
    lastName: string;

    @Prop({
        type: String,
        trim: true,
        unique: true
    })
    email: string;

    @Prop({
        type: String,
        enum: UserType,
    })
    UserType: UserType

    @Prop({ type: String })
    phoneNumber: string;

    @Prop({ type: Date, required: false })
    birthDate: Date;

    @Prop({ type: String, })
    password: string;

    @Prop({ type: Boolean, default: false })
    removed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);