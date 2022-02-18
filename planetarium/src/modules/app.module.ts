import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { CostumerModule } from './costumers.module';
import { OrderModule } from './orders.module';
import { ProductModule } from './products.module';
import { SpecialModule } from './special.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ProductModule,
    CostumerModule,
    OrderModule,
    SpecialModule,
  ],
})
export class AppModule {}
