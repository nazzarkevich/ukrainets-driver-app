/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

export type RootStackParams = {
  Home: undefined;
  Journeys: undefined;
  Parcels: undefined;
  Clients: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, Screen>;

export type RootTabParamList = {
  TabHomeScreen: undefined;
  TabParcelsScreen: undefined;
  TabJourneysScreen: undefined;
  TabCustomersScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParams>
  >;

export type Nullable<T> = T | null;
