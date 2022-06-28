import { getDocs, collection } from 'firebase/firestore';
import { action, computed, makeObservable, observable } from 'mobx';

import { db } from '../../firebase';
import { firestoreConst } from '../../constants';
import { ClientType } from '../../types';

export class ClientsStore {
  @observable clients = [] as ClientType[];

  constructor() {
    makeObservable(this);
  }

  @computed
  get clientsCount(): number {
    return this.clients.length;
  }

  @action
  async fetchClients(): Promise<void> {
    const querySnapshot = await getDocs(collection(db, firestoreConst.clients));

    querySnapshot.forEach((item) => {
      this.clients.push(item.data() as ClientType);

      console.log('STORE: item: ', item.data());
    });
  }
}
