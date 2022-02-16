import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostumerController } from '../controllers/user.controller';
import { CostumerService } from '../services/costumer.service';
import { User } from '../entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CostumerController],
  providers: [CostumerService],
  exports: [CostumerService],
})
export class CostumerModule {}
