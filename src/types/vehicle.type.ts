import { Nullable } from './global.type';

export interface Vehicle {
  plateNumber: string;
  model: string;
  brand: string;
  isActive: boolean;
  images: Nullable<string[]>;
  manufactureYear: string;
}
