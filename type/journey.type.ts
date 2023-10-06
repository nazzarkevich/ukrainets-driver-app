import { Country } from './country.type';
import { Nullable } from './global.type';
import { Parcel } from './parcel.type';
import { User } from './user.type';
import { Vehicle } from './vehicle.type';

export interface Journey {
  id: string;
  origin: Country;
  destination: Country;
  drivers: User[];
  notes: Nullable<string>;
  departureDate: string;
  parcels: Parcel[];
  isCompleted: boolean;
  arrivalDate: Nullable<string>;
  journeyNumber: string;
  vehicle: Vehicle;
}
