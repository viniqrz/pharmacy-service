import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { startServer } from './server';

createConnection()
  .then((connection) => console.log('DB succesfully connected!'))
  .catch((error) => console.log(error));

startServer();
