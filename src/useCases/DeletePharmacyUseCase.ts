import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';
import { Pharmacy } from '../models/Pharmacy';

export class DeletePharmacyUseCase {
  constructor(private pharmacyRepository: IPharmacyRepository) {}

  public async execute(id: number): Promise<Pharmacy> {
    return await this.pharmacyRepository.remove({ id } as Pharmacy);
  }
}
