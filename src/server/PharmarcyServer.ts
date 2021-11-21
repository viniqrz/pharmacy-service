import * as grpc from '@grpc/grpc-js';
import { IPharmacyServer } from '../../proto/pharmacy_grpc_pb';
import { Void, PharmacyList, PharmacyItem } from '../../proto/pharmacy_pb';

const db = [{ name: 'pague menos' }, { name: 'chico' }];

export class PharmacyServer implements IPharmacyServer {
  [name: string]: grpc.UntypedHandleCall;

  list(
    _: grpc.ServerUnaryCall<Void, PharmacyList>,
    callback: grpc.sendUnaryData<PharmacyList>
  ): void {
    const response = new PharmacyList();

    db.forEach((i) => {
      const item = new PharmacyItem();

      item.setName(i.name);

      response.addList(item);
    });

    callback(null, response);
  }
}
