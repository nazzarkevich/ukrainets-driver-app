import { ClientsStore } from '../clients';

export class RootStore {
  clientsStore: ClientsStore;

  constructor() {
    this.clientsStore = new ClientsStore();
  }
}
