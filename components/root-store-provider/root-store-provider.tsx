import React from 'react';

import { Nullable } from '../../types';
import { RootStore } from '../../stores';

const RootStoreContext = React.createContext<Nullable<RootStore>>(null);

export const RootStoreProvider: React.FC<{ store: RootStore }> = ({
  store,
  children,
}) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

export function useRootStore() {
  const store = React.useContext(RootStoreContext);

  if (!store) {
    throw new Error('useRootStore() must be used within <RootStoreProvider>');
  }

  return store;
}
