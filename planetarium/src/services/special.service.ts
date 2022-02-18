import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { orderToDelete } from 'src/interfaces/order.delete.interface';
import { Orders } from '../entity/orders.entity';
import { order } from '../interfaces/order.interface';
import { Product } from '../entity/product.entity';
import { User } from '../entity/user.entity';

@Injectable()
export class SpecialService {
  @InjectRepository(User) private userRepo: Repository<User>;

  @InjectRepository(Product) private prodRepo: Repository<Product>;

  async getcostbyorderid(): Promise<User[]> {
    const data = await this.userRepo.find({ relations: ['orders'] });

    return data;
  }

  async getodbyorderid(): Promise<Product[]> {
    const data = await this.prodRepo.find({ select: ['orders'] });

    return data;
  }
}
