import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  OneToOne,
} from 'typeorm';

import { Address } from './Address';

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  logo: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  isMain: boolean;

  @Column({ length: 20 })
  cnpj: string;

  @Column({ length: 50, unique: true })
  phone: string;

  @Column({ length: 50 })
  managerName: string;

  @Column()
  startDate: Date;

  @Column()
  finishDate: Date;

  @OneToOne(() => Address, (address) => address.pharmacy, { cascade: true })
  @JoinColumn()
  address: Address;
}
