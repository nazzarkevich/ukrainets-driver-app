import { Nullable } from './global.type';

export interface ClientType {
  phone: string;
  lastName: string;
  firstName: string;
  isBlocked: boolean;
  address: ClientAddress;
  comment: Nullable<string>;
}

export interface ClientAddress {
  city: string;
  street: string;
  country: string;
  postCode: string;
  building: string;
  apartment: string;
}
