import { Container, interfaces } from 'inversify';

import { ApiConfig, AuthResource, ClientsResource } from 'src/services';
import {
  AuthStore,
  ClientsStore,
  JourneyStore,
  JourneysStore,
  ParcelsStore,
  RootStore,
  UserStore,
} from 'src/stores';
import { injectionTokens } from 'src/types';

export const injector = new Container({ defaultScope: 'Singleton' });

export function setupInjector() {
  injector.bind(injectionTokens.rootStore).to(RootStore);
  injector.bind(injectionTokens.clientsStore).to(ClientsStore);
  injector.bind(injectionTokens.journeyStore).to(JourneyStore);
  injector.bind(injectionTokens.journeysStore).to(JourneysStore);
  injector.bind(injectionTokens.parcelsStore).to(ParcelsStore);
  injector.bind(injectionTokens.authStore).to(AuthStore);
  injector.bind(injectionTokens.userStore).to(UserStore);

  injector.bind(injectionTokens.authResource).to(AuthResource);
  injector.bind(injectionTokens.clientsResource).to(ClientsResource);

  injector
    .bind(injectionTokens.lazyRootStore)
    .toFactory<RootStore>((context: interfaces.Context) => {
      return () => {
        return context.container.get<RootStore>(injectionTokens.rootStore);
      };
    });

  injector
    .bind(injectionTokens.apiConfigFactory)
    .toFactory((context: interfaces.Context) => {
      return ({ baseURL }) => {
        const authStore = context.container.get(
          injectionTokens.authStore,
        ) as AuthStore;

        return new ApiConfig({
          baseURL,
          getAccessToken: () => {
            return authStore.getAccessToken();
          },
        });
      };
    });
}
