import React from 'react';

import { RootStore } from 'src/stores';
import { Nullable } from 'src/types';

const RootStoreContext = React.createContext<Nullable<RootStore>>(null);

export const RootStoreProvider: React.FC<{
  store: RootStore;
  children: React.ReactNode;
}> = ({ store, children }) => {
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
