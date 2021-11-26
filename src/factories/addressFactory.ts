import { AddressDto } from '../@types/dtos/AddressDto';
import { Address } from '../models/Address';

export function addressFactory(dto: AddressDto): Address {
  const address = new Address();

  Object.keys(dto).forEach((key) => (address[key] = dto[key]));

  return address;
}
