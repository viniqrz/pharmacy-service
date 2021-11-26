import { PhamarcyDto } from '../@types/dtos/PhamarcyDto';
import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';
import { Pharmacy } from '../models/Pharmacy';
import { pharmacyFactory } from '../factories/pharmacyFactory';

export class CreatePharmacyUseCase {
  constructor(private pharmacyRepository: IPharmacyRepository) {}

  public async execute(dto: PhamarcyDto): Promise<Pharmacy> {
    try {
      const { name, isMain } = dto;

      const pharmacyAlreadyExists = await this.pharmacyRepository.findByName(
        name
      );

      const pharmacyUnits = pharmacyAlreadyExists.length;

      if (pharmacyUnits === 0) return this.createMainPharmacy(dto);

      if (pharmacyUnits > 3) throw new Error('Can only create up to 4 units');
      if (isMain) throw new Error('Group can only have 1 main unit');

      const pharmacy = pharmacyFactory(dto);

      return await this.pharmacyRepository.save(pharmacy);
    } catch (err) {
      throw new Error(`Couldn't create pharmacy: ${err.message}`);
    }
  }

  private async createMainPharmacy(dto: PhamarcyDto): Promise<Pharmacy> {
    const { isMain } = dto;

    if (!isMain) throw new Error('First pharmacy with name is not main');

    const pharmacy = pharmacyFactory(dto);
    return pharmacy;
  }
}
