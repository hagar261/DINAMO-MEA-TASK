import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserType } from 'src/constants/enum';
import { UserTypes } from 'src/user/decorators/user.decorator';
import { UserAuthGuard } from 'src/user/guards/user-auth-guard';
import { UserTypeGuard } from 'src/user/guards/user-type-guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    @UserTypes(UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async create(@Body() createProductDto: any) {

    }

    @Put(':id')
    @UserTypes(UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async update(@Param('id') productId: string, @Body() updateProductDto: any) {

    }

    @Delete(':id')
    @UserTypes(UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async delete(@Param('id') productId: string) {

    }

    @Get('my-products')
    @UserTypes(UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getMyProducts() {

    }

    @Get('vendor/:vendorId')
    @UserTypes(UserType.Admin, UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getVendorProducts(@Param('vendorId') vendorId: string) {

    }

    @Get(':id')
    @UserTypes(UserType.Vendor, UserType.Admin, UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getOneProduct(@Param('id') productId: string) {

    }

}
