import { Pharmacy } from '../../models/Pharmacy';

export interface IPharmacyRepository {
  save(pharmacy: Pharmacy): Promise<Pharmacy>;
  findById(id: number): Promise<Pharmacy>;
  findByName(name: string): Promise<Pharmacy[]>;
  deleteById(id: number): Promise<Pharmacy>;
  find(): Promise<Pharmacy[]>;
  remove(pharmacy: Pharmacy): Promise<Pharmacy>;
}
