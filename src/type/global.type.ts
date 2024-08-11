import { RootDrawerParams } from './navigation.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParams {}
  }
}

export type Nullable<T> = T | null;
