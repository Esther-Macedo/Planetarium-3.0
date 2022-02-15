import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
/* import { AppController } from './app.controller';
import { AppService } from './app.service'; */
import { ProductsController } from './controllers/products.controller';
import { ProductModule } from './modules/products.module';
import { ProductsService } from './services/products.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), ProductModule],
})
export class AppModule {}
