import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: true })
  dob: Date;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatar_url: string;

  @Column()
  phone_number: string;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_on: Date;

  /* previous relationship if any */

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
