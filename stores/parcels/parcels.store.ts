import { action, computed, makeObservable, observable } from 'mobx';

import { Parcel } from '@type/';

import { LAST_PARCELS_MOCK } from './parcelsMock';

export class ParcelsStore {
  @observable lastParcels: Parcel[] = [];
  @observable isParcelsLoading = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  get parcelsCount(): number {
    return this.lastParcels.length;
  }

  @action
  setLastParcels(lastParcels: Parcel[]): void {
    this.lastParcels = lastParcels;
  }

  @action
  setParcelsLoading(isLoading: boolean): void {
    this.isParcelsLoading = isLoading;
  }

  @action
  async fetchLastParcels(): Promise<void> {
    const parcelsPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, LAST_PARCELS_MOCK),
    );

    this.setParcelsLoading(true);

    try {
      const lastParcels = await parcelsPromise;
      this.setLastParcels(lastParcels as Parcel[]);
    } finally {
      this.setParcelsLoading(false);
    }
  }

  @action
  async addParcel(parcel: Parcel): Promise<void> {}
}
