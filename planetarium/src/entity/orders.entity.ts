import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  prodId: number;

  @OneToMany(() => Product, (product) => product.orders)
  @JoinColumn({ name: 'prodId' })
  product: Product;

  @Column()
  costId: number;

  @OneToMany(() => User, (costumer) => costumer.orders)
  @JoinColumn({ name: 'costId' })
  costumer: User;

  @Column()
  askdqtd: number;
}
