import { PhamarcyDto } from '../@types/dtos/PhamarcyDto';
import { Pharmacy } from '../models/Pharmacy';
import { addressFactory } from './addressFactory';

export function pharmacyFactory(dto: PhamarcyDto): Pharmacy {
  const pharmacy = new Pharmacy();

  Object.keys(dto).forEach((key) => (pharmacy[key] = dto[key]));

  pharmacy.address = addressFactory(dto.address);

  return pharmacy;
}
