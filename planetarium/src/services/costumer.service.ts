import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { costumer } from 'src/interfaces/costumer.interface';

@Injectable()
export class CostumerService {
  @InjectRepository(User) private costRepo: Repository<User>;

  async getAllUsers(): Promise<User[]> {
    const data = await this.costRepo.find();
    return data;
  }

  async addUser({ name, email, password }: costumer): Promise<User> {
    const newCostumer = this.costRepo.create({ name, email, password });
    try {
      await this.costRepo.save(newCostumer);
      return newCostumer;
    } catch (e) {
      console.log(e);
      throw Error('Ops');
    }
  }

  async deletUser(id: number) {
    const toDelete = await this.costRepo.findOne(id);
    return this.costRepo.remove(toDelete);
  }
}
