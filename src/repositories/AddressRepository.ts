import { EntityRepository, Repository } from 'typeorm';
import { Address } from '../models/Address';
import { IAddressRepository } from '../@types/repositories/IAddressRepository';

@EntityRepository(Address)
export class AddressRepository
  extends Repository<Address>
  implements IAddressRepository
{
  public async findById(id: number): Promise<Address> {
    return await this.findOne(id);
  }

  public async deleteById(id: number): Promise<Address> {
    return await this.remove({ id } as Address);
  }
}
