import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { costumer } from 'src/interfaces/costumer.interface';
import { toUpdate } from 'src/types/update.costumer.type';

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

  async updateUser({ newname, newemail, newpassword }: toUpdate, id: number) {
    const cost = await this.costRepo.findOne(id);

    if (!cost) {
      throw Error('Ops, algo deu errado');
    }
    cost.name = newname || cost.name;
    cost.email = newemail || cost.email;
    cost.password = newpassword || cost.password;

    return this.costRepo.save(cost);
  }
}
