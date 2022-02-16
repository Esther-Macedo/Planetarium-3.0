import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  Connection,
  getRepository,
  Repository,
} from 'typeorm';
import { Orders } from 'src/entity/orders.entity';
import { Product } from 'src/entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Orders> {
  @InjectRepository(Product) private prodRepo: Repository<Product>;

  @InjectRepository(Orders) private ordRepo: Repository<Orders>;

  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo(): string | Function {
    return Orders;
  }

  async afterInsert(event: InsertEvent<Orders>) {
    const orderAskqtd = event.entity.askdqtd;
    const productId = event.entity.prodId;
    const getprod = await this.prodRepo.findOne(productId);
    if (!getprod) {
      throw Error('Ops, alfo deu errado');
    }
    getprod.qtd -= orderAskqtd;
    await event.connection.getRepository(Product).save(getprod);
    console.log('oibbbbbbb');
  }
}
