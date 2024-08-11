import { ParcelsStore } from 'stores/parcels';

import { ClientsStore } from '../clients';
import { JourneyStore } from '../journey';
import { JourneysStore } from '../journeys';

export class RootStore {
  clientsStore: ClientsStore;
  journeysStore: JourneysStore;
  journeyStore: JourneyStore;
  parcelsStore: ParcelsStore;

  constructor() {
    this.clientsStore = new ClientsStore();
    this.journeysStore = new JourneysStore();
    this.journeyStore = new JourneyStore();
    this.parcelsStore = new ParcelsStore();
  }
}
