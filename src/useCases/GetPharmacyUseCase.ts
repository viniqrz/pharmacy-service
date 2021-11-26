import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';
import { Pharmacy } from '../models/Pharmacy';

export class GetPharmacyUseCase {
  constructor(private pharmacyRepository: IPharmacyRepository) {}

  public async execute(id: number): Promise<Pharmacy> {
    return await this.pharmacyRepository.findById(id);
  }
}
