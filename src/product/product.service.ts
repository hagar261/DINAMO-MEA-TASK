import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./entity/product.entity";

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Product.name) public productModel: Model<ProductDocument>,
    ) { }

    //* vendor
    async create() {
    }

    //* vendor
    async update() {
    }

    //* vendor
    async delete() {
    }

    //* vendor
    async getMyProducts() {

    }

    //* admin , customer
    async getVendorProducts() {

    }

    //* vendor , admin , customer
    async getOneProduct() {

    }



}