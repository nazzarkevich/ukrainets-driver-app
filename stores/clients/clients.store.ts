import { action, computed, makeObservable, observable } from 'mobx';

import { ClientType } from '../../types';

export class ClientsStore {
  @observable clients: ClientType[] = [];

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
  async addClient(client: ClientType): Promise<void> {}
}
