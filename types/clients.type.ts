export interface ClientType {
  firstName: string;
  lastName: string;
  phone: string;
  isBlocked: boolean;
  comment: string;
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
