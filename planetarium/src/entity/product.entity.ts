import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Orders } from './orders.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    details: string;

  @Column()
    qtd: number;

  @OneToMany(() => Orders, (order) => order.product)
    orders: Orders[];
}
