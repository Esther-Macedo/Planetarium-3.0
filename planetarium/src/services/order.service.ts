import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { orderToDelete } from 'src/interfaces/order.delete.interface';
import { Orders } from '../entity/orders.entity';
import { order } from '../interfaces/order.interface';
import { Product } from '../entity/product.entity';
import { User } from '../entity/user.entity';

@Injectable()
export class OrderService {
  @InjectRepository(Orders) private ordRepo: Repository<Orders>;

  @InjectRepository(User) private costRepo: Repository<User>;

  @InjectRepository(Product) private prodRep: Repository<Product>;

  async getAllOrders(): Promise<Orders[]> {
    const data = await this.ordRepo.find();
    return data;
  }

  async addOrder({ prodId, costId, askdqtd }: order): Promise<Orders> {
    try {
      const requestedcostumer = await this.costRepo.findOneOrFail(costId);
      const requestedproduct = await this.prodRep.findOneOrFail(prodId);

      if (!requestedcostumer || !requestedproduct) {
        throw Error('ops,Alguma coisa foi esquecida');
      }
      if (askdqtd > requestedproduct.qtd) {
        throw HttpException;
      }
      const neworder = this.ordRepo.create({ prodId, costId, askdqtd });
      await this.ordRepo.save(neworder);
      return neworder;
    } catch (e) {
      console.log(e);
      throw Error('Ops');
    }
  }

  async deleteOrder(cid: number) {
    const toDelete = await this.ordRepo.find({
      where: { id: cid },
      select: ['id', 'prodId', 'costId', 'askdqtd'],
    });
    await this.ordRepo.remove(toDelete);
    return toDelete;
  }
}
