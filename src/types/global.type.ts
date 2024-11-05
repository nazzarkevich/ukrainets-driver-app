import { RootDrawerParams } from './navigation.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootDrawerParams {}
  }
}

export type Nullable<T> = T | null;

export interface DevConfig {
  api: {
    driverApiUrl: string;
  };
}

export interface ResponseData {
  // errors?: {[]:};
}
