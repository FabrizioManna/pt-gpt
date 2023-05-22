import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ length: 8 })
  datanasc: string;

  @Column({ length: 1, default: 'A' })
  status: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ length: 1 })
  sex: string;

  @Column({ nullable: true })
  numberPhone: string;

  @Column({ nullable: true })
  height: number;

  @Column()
  shaemail: string;

  @Column({ default: false })
  validatemail: boolean;

  @Column({ nullable: true })
  weight: string;

  @Column({ length: 2, default: 'US' })
  level: string;

  @Column({ type: 'integer', nullable: true })
  createdAt: Date;

  @Column({ type: 'integer', nullable: true })
  updatedAt: Date;
}
