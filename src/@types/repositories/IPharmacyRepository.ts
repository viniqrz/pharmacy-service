import { Pharmacy } from '../../models/Pharmacy';

export interface IPharmacyRepository {
  save(pharmacy: Pharmacy): Promise<Pharmacy>;
  findById(id: number): Promise<Pharmacy>;
  deleteById(id: number): Promise<Pharmacy>;
}
