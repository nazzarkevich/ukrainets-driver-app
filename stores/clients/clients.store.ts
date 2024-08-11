import { action, computed, makeObservable, observable } from 'mobx';

import { Client } from '@type/';

import { CLIENTS_MOCK } from './clientsMock';

export class ClientsStore {
  @observable clients: Client[] = [];
  @observable isClientsLoading = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  get clientsCount(): number {
    return this.clients.length;
  }

  @computed
  get newClients(): Client[] {
    const newClients = this.clients.slice(-3);

    return newClients;
  }

  @action
  setClients(clients: Client[]): void {
    this.clients = clients;
  }

  @action
  setClientsLoading(isLoading: boolean): void {
    this.isClientsLoading = isLoading;
  }

  @action
  async fetchClients(): Promise<void> {
    const clientsPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, CLIENTS_MOCK),
    );

    this.setClientsLoading(true);

    try {
      const clients = await clientsPromise;
      this.setClients(clients as Client[]);
    } finally {
      this.setClientsLoading(false);
    }
  }

  @action
  async addClient(client: Client): Promise<void> {}
}
