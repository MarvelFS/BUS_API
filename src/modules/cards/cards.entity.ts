import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../shared/base.entity';
import { Transaction } from '../transactions/transactions.entity';

@Entity()
export class Card extends BaseModel {
  @Column()
  amount: number;

  @Column({ default: null })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phoneNumber: string;

  @Column({ default: 0, type: 'int' })
  totalTransaction: number;
}