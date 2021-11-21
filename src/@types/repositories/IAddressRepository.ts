import { Address } from '../../models/Address';

export interface IAddressRepository {
  save(address: Address): Promise<Address>;
  findById(id: number): Promise<Address>;
  deleteById(id: number): Promise<Address>;
}
