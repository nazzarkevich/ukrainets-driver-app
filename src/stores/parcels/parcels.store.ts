import { action, computed, makeAutoObservable } from 'mobx';
import { injectable } from 'inversify';

import { Parcel } from 'src/types';
import { PARCELS_MOCK } from './parcelsMock';

@injectable()
export class ParcelsStore {
  parcels: Parcel[] = [];
  isParcelsLoading = false;

  constructor() {
    makeAutoObservable(this);
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
