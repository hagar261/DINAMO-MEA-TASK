import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { UserType } from 'src/constants/enum';
import { UserTypes } from './decorators/user.decorator';
import { SignUpDto } from './dto/user.dto';
import { UserAuthGuard } from './guards/user-auth-guard';
import { UserTypeGuard } from './guards/user-type-guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('register')
    async create(@Body() dto: SignUpDto) {
        return this.userService.signUp(dto);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
        return this.userService.updateUser();
    }

    @Put(':id/change-password')
    async changePassword(@Param('id') id: string, @Body() changePasswordDto: any) {
        return this.userService.changePassword();
    }

    @Get('profile')
    async getProfile(@Query('userId') userId: string) {
        return this.userService.getProfile();
    }

    @Get('vendors')
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getVendors() {
        return this.userService.getVendors();
    }

    @Get('vendors/:id')
    @UserTypes(UserType.Consumer)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getOneVendor(@Param('id') id: string) {
        return this.userService.getOneVendor();
    }

    @Get('UserType/:UserType')
    @UserTypes(UserType.Admin)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getUsersByUserType(@Param('UserType') UserType: string) {
        return this.userService.getUsersByUserType();
    }

    @Get(':id')
    @UserTypes(UserType.Admin)
    @UseGuards(UserAuthGuard, UserTypeGuard)
    async getOneById(@Param('id') id: string) {
        return this.userService.getOneById();
    }
}
