import { action, computed, makeObservable, observable } from 'mobx';

import { ClientType, FirestoreCollections } from '../../types';
import { firebaseService } from '../../services';

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
  async fetchClients(): Promise<void> {
    this.clients = await firebaseService.getDocuments(
      FirestoreCollections.clients
    );
  }

  @action
  async addClient(client: ClientType): Promise<void> {
    await firebaseService.addDocument(FirestoreCollections.clients, client);
  }
}
