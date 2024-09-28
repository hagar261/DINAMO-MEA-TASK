import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, } from '@nestjs/common';
import { UserType } from 'src/constants/enum';
import { UserTypes } from 'src/user/decorators/user.decorator';
import { UserAuthGuard } from 'src/user/guards/user-auth-guard';
import { UserTypeGuard } from 'src/user/guards/user-type-guard';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
    constructor(private addressService: AddressService) { }

    @Post()
    @UserTypes(UserType.Consumer, UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async create(@Body() createAddressDto: any) {
    }


    @Put(':id')
    @UserTypes(UserType.Consumer, UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async update(@Param('id') addressId: string, @Body() updateAddressDto: any) {
    }


    @Delete(':id')
    @UserTypes(UserType.Consumer, UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async delete(@Param('id') addressId: string) {

    }

    @Get()
    @UserTypes(UserType.Consumer, UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getAddress() {

    }
}
