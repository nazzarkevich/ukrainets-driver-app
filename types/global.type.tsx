/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackList {}
  }
}

export type RootStackList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Login: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackList> =
  NativeStackScreenProps<RootStackList, Screen>;

export type RootTabParamList = {
  TabHomeScreen: undefined;
  TabParcelsScreen: undefined;
  TabJourneysScreen: undefined;
  TabCustomersScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackList>
  >;

export type Nullable<T> = T | null;
