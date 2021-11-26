import { AddressDto, PartialAddressDto } from '../@types/dtos/AddressDto';
import { IAddressRepository } from '../@types/repositories/IAddressRepository';
import { Address } from '../models/Address';

export class UpdateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  public async execute(
    currentAddress: AddressDto,
    dto: PartialAddressDto
  ): Promise<Address> {
    return await this.addressRepository.save({
      ...currentAddress,
      ...dto,
    } as Address);
  }
}
