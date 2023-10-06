import { RootStackParams } from './navigation.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

export type Nullable<T> = T | null;
