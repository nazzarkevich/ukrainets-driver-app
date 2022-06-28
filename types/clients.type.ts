import { Nullable } from './global.type';

export interface ClientType {
  firstName: string;
  lastName: string;
  phone: string;
  isBlocked: boolean;
  comment: Nullable<string>;
  address: ClientAddress;
}

export interface ClientAddress {
  apartment: string;
  building: string;
  city: string;
  country: string;
  postCode: string;
  street: string;
}
