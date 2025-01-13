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
import { HttpClientBaseFactory } from '../services/apis/http-client-base.factory';

let isInjectorSetUp = false;

export const injector = new Container({ defaultScope: 'Singleton' });

export function setupInjector() {
  if (isInjectorSetUp) return;

  isInjectorSetUp = true;

  // Stores

  injector
    .bind<ClientsStore>(injectionTokens.clientsStore)
    .to(ClientsStore)
    .inSingletonScope();
  injector
    .bind<JourneyStore>(injectionTokens.journeyStore)
    .to(JourneyStore)
    .inSingletonScope();
  injector
    .bind<JourneysStore>(injectionTokens.journeysStore)
    .to(JourneysStore)
    .inSingletonScope();
  injector
    .bind<ParcelsStore>(injectionTokens.parcelsStore)
    .to(ParcelsStore)
    .inSingletonScope();
  injector
    .bind<AuthStore>(injectionTokens.authStore)
    .to(AuthStore)
    .inSingletonScope();
  injector
    .bind<UserStore>(injectionTokens.userStore)
    .to(UserStore)
    .inSingletonScope();
  injector
    .bind<RootStore>(injectionTokens.rootStore)
    .to(RootStore)
    .inSingletonScope();

  // Resources
  injector
    .bind<AuthResource>(injectionTokens.authResource)
    .to(AuthResource)
    .inSingletonScope();
  injector
    .bind<ClientsResource>(injectionTokens.clientsResource)
    .to(ClientsResource)
    .inSingletonScope();

  // Factories
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

  injector
    .bind(injectionTokens.apiBaseConfigFactory)
    .toFactory((context: interfaces.Context) => {
      return ({ baseURL }) => {
        return new HttpClientBaseFactory(baseURL);
      };
    });
}
