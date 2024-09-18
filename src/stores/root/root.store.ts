import { inject, injectable } from 'inversify';

import { ParcelsStore } from 'src/stores/parcels';
import { injectionTokens } from 'src/types';

import { AuthStore } from '../auth';
import { ClientsStore } from '../clients';
import { JourneyStore, JourneysStore } from '../journeys';
import { UserStore } from '../user';

@injectable()
export class RootStore {
  constructor(
    @inject(injectionTokens.authStore) public authStore: AuthStore,
    @inject(injectionTokens.clientsStore) public clientsStore: ClientsStore,
    @inject(injectionTokens.journeyStore) public journeyStore: JourneyStore,
    @inject(injectionTokens.journeysStore) public journeysStore: JourneysStore,
    @inject(injectionTokens.parcelsStore) public parcelsStore: ParcelsStore,
    @inject(injectionTokens.userStore) public userStore: UserStore,
  ) {}
}
