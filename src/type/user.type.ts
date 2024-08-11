import { Nullable } from './global.type';

export enum UserTypesEnum {
  Manager = 1,
  Driver = 2,
  ParcelDriver = 3,
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  uaPhone: string;
  ukPhone: Nullable<string>;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  type: UserTypesEnum;
  isBlocked: boolean;
  imageUrl?: Nullable<string>;
}
