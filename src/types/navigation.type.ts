/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootDrawerParams = {
  Vehicle: undefined;
  Couriers: undefined;
  Home: undefined;
  Journeys: undefined;
  JourneyStackScreen: NavigatorScreenParams<JourneysStackParams>;
  Parcels: undefined;
  Clients: undefined;
  Modal: undefined;
  NotFound: undefined;
  CreateJourneyScreen: undefined;
  LoginScreen: undefined;
};

export type JourneysStackParams = {
  Journeys: undefined;
  CreateJourneyScreen: undefined;
};

export type AuthStackParams = {
  LoginScreen: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParams> =
  NativeStackScreenProps<RootDrawerParams, Screen>;
