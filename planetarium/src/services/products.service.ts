import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product } from 'src/interfaces/product.interface';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductsService {
  @InjectRepository(Product) private prodRepo: Repository<Product>;

  async getAllProducts(): Promise<Product[]> {
    const data = await this.prodRepo.find();
    return data;
  }

  async addProduct({ name, details, qtd }: product): Promise<Product> {
    const newProduct = this.prodRepo.create({ name, details, qtd });
    try {
      await this.prodRepo.save(newProduct);
      return newProduct;
    } catch (e) {
      console.log(e);
      throw Error('Ops');
    }
  }

  async deleteProduct(id: number) {
    const toDelete = await this.prodRepo.findOne(id);
    return this.prodRepo.remove(toDelete);
  }
}
