import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from 'src/entity/orders.entity';
import { SpecialService } from 'src/services/special.service';
import { SpecialController } from 'src/controllers/special.controller';
import { User } from 'src/entity/user.entity';
import { Product } from 'src/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, User, Product])],
  controllers: [SpecialController],
  providers: [SpecialService],
  exports: [SpecialService],
})
export class SpecialModule {}
