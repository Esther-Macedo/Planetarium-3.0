import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { OrderService } from '../services/order.service';
import { OrderController } from '../controllers/orders.controller';
import { Orders } from '../entity/orders.entity';
import { Product } from '../entity/product.entity';
import { OrderSubscriber } from '../subscribers/order.subscruber';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, User, Product])],
  controllers: [OrderController],
  providers: [OrderService, OrderSubscriber],
  exports: [OrderService],
})
export class OrderModule {}
