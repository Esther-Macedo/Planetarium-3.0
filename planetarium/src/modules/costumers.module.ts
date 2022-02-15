import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostumerController } from 'src/controllers/user.controller';
import { CostumerService } from 'src/services/costumer.service';
import { User } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [CostumerController],
  providers: [CostumerService],
  exports: [CostumerService],
})
export class CostumerModule {}
