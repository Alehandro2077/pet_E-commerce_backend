import { Category } from 'src/category/entities/category.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  product_id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_on: Date;

  /* previous relationship if any */

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
