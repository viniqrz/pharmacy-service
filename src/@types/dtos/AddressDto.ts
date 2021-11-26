export type AddressDto = {
  id?: number;
  street: string;
  district: string;
  number: number;
  cep: string;
};

export type PartialAddressDto = {
  street?: string;
  district?: string;
  number?: number;
  cep?: string;
};
