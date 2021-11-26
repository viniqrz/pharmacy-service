import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pharmacy } from './Pharmacy';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  street: string;

  @Column({ length: 120 })
  district: string;

  @Column()
  number: number;

  @Column({ length: 20 })
  cep: string;

  @OneToOne(() => Pharmacy, (pharmacy) => pharmacy.address)
  pharmacy: Pharmacy;
}
