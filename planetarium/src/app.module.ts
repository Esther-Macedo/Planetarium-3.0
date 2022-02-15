import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { CostumerModule } from './modules/costumers.module';
import { ProductModule } from './modules/products.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductModule, CostumerModule],
})
export class AppModule {}
