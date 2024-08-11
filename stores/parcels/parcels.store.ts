import { action, computed, makeObservable, observable } from 'mobx';

import { Parcel } from '@type/';

import { PARCELS_MOCK } from './parcelsMock';

export class ParcelsStore {
  @observable parcels: Parcel[] = [];
  @observable isParcelsLoading = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  get parcelsCount(): number {
    return this.parcels.length;
  }

  @computed
  get lastParcels(): Parcel[] {
    const lastParcels = this.parcels.slice(-3);

    return lastParcels;
  }

  @action
  setParcels(parcels: Parcel[]): void {
    this.parcels = parcels;
  }

  @action
  setParcelsLoading(isLoading: boolean): void {
    this.isParcelsLoading = isLoading;
  }

  @action
  async fetchParcels(): Promise<void> {
    const parcelsPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, PARCELS_MOCK),
    );

    this.setParcelsLoading(true);

    try {
      const parcels = await parcelsPromise;
      this.setParcels(parcels as Parcel[]);
    } finally {
      this.setParcelsLoading(false);
    }
  }

  @action
  async addParcel(parcel: Parcel): Promise<void> {}
}
