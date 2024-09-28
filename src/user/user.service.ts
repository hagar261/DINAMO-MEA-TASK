import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/user.dto';
import { User, UserDocument } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) public userModel: Model<UserDocument>,
    ) { }

    async signUp(dto: SignUpDto) {

    }

    async login() {

    }

    async logOut() {

    }

    async updateUser() {

    }

    async changePassword() {

    }

    async getProfile() {

    }

    //* customer
    async getVendors() {

    }
    //* customer
    async getOneVendor() {

    }

    //* admin
    async getUsersByUserType() {

    }
    //* admin
    async getOneById() {

    }

    findOneByQuery(query) {
        return this.userModel.findOne({
            removed: false,
            ...query,
        });
    }
}
