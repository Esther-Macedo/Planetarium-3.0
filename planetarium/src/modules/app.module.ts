import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { CostumerModule } from './costumers.module';
import { OrderModule } from './orders.module';
import { ProductModule } from './products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ProductModule,
    CostumerModule,
    OrderModule,
  ],
})
export class AppModule {}
