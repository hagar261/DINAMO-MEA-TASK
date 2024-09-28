import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from './entity/address.entity';
import { Model } from 'mongoose';

@Injectable()
export class AddressService {
    constructor(
        @InjectModel(Address.name) public orderModel: Model<AddressDocument>,
    ) { }

    //* customer , vendor
    async create() {
    }

    //* customer , vendor
    async update() {
    }

    //* customer , vendor
    async delete() {
    }

    //* customer , vendor
    async getAddress() {
    }

}
