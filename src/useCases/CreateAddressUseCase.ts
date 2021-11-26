import { AddressDto } from '../@types/dtos/AddressDto';
import { IAddressRepository } from '../@types/repositories/IAddressRepository';
import { addressFactory } from '../factories/addressFactory';
import { Address } from '../models/Address';

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  public async execute(dto: AddressDto): Promise<Address> {
    const address = addressFactory(dto);

    return await this.addressRepository.save(address);
  }
}
