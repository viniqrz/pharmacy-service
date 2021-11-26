import { getCustomRepository } from 'typeorm';
import { PartialPharmacyDto } from '../@types/dtos/PhamarcyDto';
import { IPharmacyRepository } from '../@types/repositories/IPharmacyRepository';
import { Pharmacy } from '../models/Pharmacy';
import { AddressRepository } from '../repositories/AddressRepository';
import { UpdateAddressUseCase } from './UpdateAddressUseCase';

export class UpdatePharmacyUseCase {
  constructor(private pharmacyRepository: IPharmacyRepository) {}

  public async execute(id: number, dto: PartialPharmacyDto): Promise<Pharmacy> {
    const currentPharmacy = await this.pharmacyRepository.findById(id);

    const newPharmacy = { ...currentPharmacy, ...dto };

    if (dto.address) {
      const addressRepository = getCustomRepository(AddressRepository);
      const updateAddressUseCase = new UpdateAddressUseCase(addressRepository);

      const { address } = currentPharmacy;

      const updatedAddress = await updateAddressUseCase.execute(
        address,
        dto.address
      );

      newPharmacy.address = updatedAddress;
    }

    return await this.pharmacyRepository.save(newPharmacy);
  }
}
