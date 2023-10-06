/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParams = {
  Vehicle: undefined;
  Couriers: undefined;
  Home: undefined;
  Journeys: undefined;
  Parcels: undefined;
  Clients: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, Screen>;
