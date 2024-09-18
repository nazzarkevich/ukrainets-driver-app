import { ApiConfig, ClientsResource } from '@root/services';
import {
  AuthStore,
  ClientsStore,
  JourneyStore,
  JourneysStore,
  ParcelsStore,
  UserStore,
} from '@root/stores';
import { injectionTokens } from '@root/types';
import { Container, interfaces } from 'inversify';

export const injector = new Container({ defaultScope: 'Singleton' });

injector.bind(injectionTokens.clientsStore).to(ClientsStore);
injector.bind(injectionTokens.journeyStore).to(JourneyStore);
injector.bind(injectionTokens.journeysStore).to(JourneysStore);
injector.bind(injectionTokens.parcelsStore).to(ParcelsStore);
injector.bind(injectionTokens.authStore).to(AuthStore);
injector.bind(injectionTokens.userStore).to(UserStore);

injector.bind(injectionTokens.authResource).to(ClientsResource);
injector.bind(injectionTokens.clientsResource).to(ClientsResource);

injector
  .bind(injectionTokens.lazyRootStore)
  .toFactory((context: interfaces.Context) => {
    return () => {
      return context.container.get(injectionTokens.rootStore);
    };
  });

injector
  .bind(injectionTokens.apiConfigFactory)
  .toFactory((context: interfaces.Context) => {
    return ({ baseURL }) => {
      return new ApiConfig({
        baseURL,
        authStore: () => context.container.get(injectionTokens.authStore),
      });
    };
  });
