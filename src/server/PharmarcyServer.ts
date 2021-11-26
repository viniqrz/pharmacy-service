import * as grpc from '@grpc/grpc-js';
import { getCustomRepository } from 'typeorm';
import { IPharmacyServer } from '../../proto/pharmacy_grpc_pb';
import { Void, PharmacyList, PharmacyItem } from '../../proto/pharmacy_pb';
import { PharmacyRepository } from '../repositories/PharmacyRepository';
import { ListPharmaciesUseCase } from '../useCases/ListPharmaciesUseCase';

const db = [{ name: 'pague menos' }, { name: 'chico' }];

export class PharmacyServer implements IPharmacyServer {
  [name: string]: grpc.UntypedHandleCall;

  async list(
    _: grpc.ServerUnaryCall<Void, PharmacyList>,
    callback: grpc.sendUnaryData<PharmacyList>
  ) {
    try {
      const response = new PharmacyList();

      const pharmacyRepository = getCustomRepository(PharmacyRepository);
      const listPharmaciesUseCase = new ListPharmaciesUseCase(
        pharmacyRepository
      );

      const pharmacies = await listPharmaciesUseCase.execute();

      pharmacies.forEach((i) => {
        const item = new PharmacyItem();

        item.setName(i.name);

        response.addList(item);
      });

      callback(null, response);
    } catch (err) {
      callback(err.message, null);
    }
  }
}
