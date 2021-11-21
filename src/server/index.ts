import * as grpc from '@grpc/grpc-js';

import { PharmacyServer } from './PharmarcyServer';
import { PharmacyService } from '../../proto/pharmacy_grpc_pb';

import 'dotenv/config';

export const startServer = () => {
  const server = new grpc.Server();

  server.addService(PharmacyService, new PharmacyServer());

  server.bindAsync(
    `localhost:${process.env.PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) throw err;

      console.log(`Listening on PORT ${port}`);
      server.start();
    }
  );
};
