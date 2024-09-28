import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
    ProductModule,
    OrderModule,
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
