import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ generated: 'uuid' }) // generated specifies if this column will use auto increment (sequence, generated identity, rowid).
  user_id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  /*
   * Select indicates row selection in QueryBuilder
   * Default value is "true".
   */
  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  created_on: Date;

  @UpdateDateColumn()
  updated_on: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_on: Date;

  /* previous relationship if any */
}
