import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserType } from 'src/constants/enum';
import { UserTypes } from 'src/user/decorators/user.decorator';
import { UserAuthGuard } from 'src/user/guards/user-auth-guard';
import { UserTypeGuard } from 'src/user/guards/user-type-guard';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    @Post()
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async create(@Body() createOrderDto: any) {

    }

    @Put(':id')
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async update(@Param('id') orderId: string, @Body() updateOrderDto: any) {

    }

    @Put(':id/cancel')
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async cancel(@Param('id') orderId: string) {

    }

    @Get('my-orders')
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getConsumerOrders() {

    }

    @Put(':id/status')
    @UserTypes(UserType.Admin)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async updateOrderStatus(@Param('id') orderId: string, @Body() updateStatusDto: any) {

    }

    @Put(':id/assign-rider')
    @UserTypes(UserType.Admin)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async assignOrderToRider(@Param('id') orderId: string, @Body() assignRiderDto: any) {
    }

    @Get()
    @UserTypes(UserType.Admin)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getAllOrders() {
    }

    @Put(':id/delivery-status')
    @UserTypes(UserType.Rider)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async updateDeliveryStatus(@Param('id') orderId: string, @Body() updateDeliveryStatusDto: any) {
    }

    @Get('vendor-orders')
    @UserTypes(UserType.Vendor)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getVendorOrders() {

    }

}
