import { action, computed, makeObservable, observable } from 'mobx';

import { Client } from '@type/';

export class ClientsStore {
  @observable clients: Client[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed
  get clientsCount(): number {
    return this.clients.length;
  }

  @action
  async fetchClients(): Promise<void> {}

  @action
  async addClient(client: Client): Promise<void> {}
}
