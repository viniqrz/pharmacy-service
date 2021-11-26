import { Address } from '../../models/Address';

export type PhamarcyDto = {
  logo: string;
  name: string;
  isMain: boolean;
  cnpj: string;
  phone: string;
  managerName: string;
  startDate: Date;
  finishDate: Date;
  address: Address;
};

export type PartialPharmacyDto = {
  logo?: string;
  name?: string;
  isMain?: boolean;
  cnpj?: string;
  phone?: string;
  managerName?: string;
  startDate?: Date;
  finishDate?: Date;
  address?: Address;
};
