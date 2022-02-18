import {
 Entity, Column, PrimaryGeneratedColumn, OneToMany 
} from 'typeorm';
import { Orders } from './orders.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Orders, (order) => order.costumer)
  orders: Orders[];
}
