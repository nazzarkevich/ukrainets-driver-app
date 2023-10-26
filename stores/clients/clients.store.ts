import { action, computed, makeObservable, observable } from 'mobx';

import { Client } from '@type/';

import { NEW_CLIENTS_MOCK } from './clientsMock';

export class ClientsStore {
  @observable newClients: Client[] = [];
  @observable isClientsLoading = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  get clientsCount(): number {
    return this.newClients.length;
  }

  @action
  setNewClients(newClients: Client[]): void {
    this.newClients = newClients;
  }

  @action
  setClientsLoading(isLoading: boolean): void {
    this.isClientsLoading = isLoading;
  }

  @action
  async fetchClients(): Promise<void> {
    const clientsPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, NEW_CLIENTS_MOCK),
    );

    this.setClientsLoading(true);

    try {
      const newClients = await clientsPromise;
      this.setNewClients(newClients as Client[]);
    } finally {
      this.setClientsLoading(false);
    }
  }

  @action
  async addClient(client: Client): Promise<void> {}
}
