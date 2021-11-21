import { EntityRepository, Repository } from 'typeorm';
import { Pharmacy } from '../models/Pharmacy';
import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';

@EntityRepository(Pharmacy)
export class PharmacyRepository
  extends Repository<Pharmacy>
  implements IPharmacyRepository
{
  public async findById(id: number): Promise<Pharmacy> {
    return await this.findOne(id);
  }

  public async deleteById(id: number): Promise<Pharmacy> {
    return await this.remove({ id } as Pharmacy);
  }
}
