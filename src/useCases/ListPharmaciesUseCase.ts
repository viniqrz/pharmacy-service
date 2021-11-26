import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';
import { Pharmacy } from '../models/Pharmacy';

export class ListPharmaciesUseCase {
  constructor(private pharmacyRepository: IPharmacyRepository) {}

  public async execute(): Promise<Pharmacy[]> {
    return await this.pharmacyRepository.find();
  }
}
