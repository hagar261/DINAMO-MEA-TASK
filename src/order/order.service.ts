import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./entity/order.entity";

@Injectable()
export class OrderService {
    constructor(
        @InjectModel(Order.name) public orderModel: Model<OrderDocument>,
    ) { }

    //* customer
    async create() {
    }

    //* customer
    async update() {
    }

    //* customer
    async cancel() {
    }

    //* customer
    async getConsumerOrders() {

    }

    //* admin
    async updateOrderStatus() {

    }
    //* admin
    async assignOrderToRider() {

    }
    //* admin
    async getAllOrders() {

    }

    //* rider
    async updateDeliveryStatus() {

    }

    //* vendor
    async getVendorOrders() {

    }

}