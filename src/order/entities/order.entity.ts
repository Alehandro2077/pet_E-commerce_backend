import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  order_id: number;

  @Column()
  total: number;

  @Column()
  ordered_on: Date;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_on: Date;

  /* previous relationship if any */
  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Product, (product) => product.orders)
  @JoinTable({ name: 'order_products' })
  products: Product[];
}
