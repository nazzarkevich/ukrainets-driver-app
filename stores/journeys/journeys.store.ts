import { action, computed, makeObservable, observable } from 'mobx';

import { Journey } from '@type/';

import { LAST_JOURNEY_MOCK } from './lastJourneysMock';

export class JourneysStore {
  @observable lastJourneys: Journey[] = [];
  @observable isJourneysLoading = false;

  constructor() {
    makeObservable(this);
  }

  // @computed get journeyLoadCapacity(): number {
  //   const parcelsLoad = this.lastJourneys?.parcels?.reduce((acc, parcel) => {
  //     return acc + parcel.weight;
  //   }, 0);

  //   return parcelsLoad || 0;
  // }

  @computed
  get journeysCount(): number {
    return this.lastJourneys.length;
  }

  @action
  setLastJourney(lastJourneys: Journey[]): void {
    this.lastJourneys = lastJourneys;
  }

  @action
  setJourneysLoading(isLoading: boolean): void {
    this.isJourneysLoading = isLoading;
  }

  @action
  async fetchLastJourneys(): Promise<void> {
    const journeyPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, LAST_JOURNEY_MOCK),
    );

    this.setJourneysLoading(true);

    try {
      const lastJourneys = await journeyPromise;
      this.setLastJourney(lastJourneys as Journey[]);
    } finally {
      this.setJourneysLoading(false);
    }
  }

  @action
  async addJourney(journey: Journey): Promise<void> {}
}
