import { action, computed, makeObservable, observable } from 'mobx';

import { Journey, Nullable } from 'src/types';

import { JOURNEY_MOCK } from './journeyMock';

export class JourneyStore {
  @observable activeJourney: Nullable<Journey> = null;
  @observable isJourneyLoading = false;

  constructor() {
    makeObservable(this);
  }

  @computed get journeyLoadCapacity(): number {
    const parcelsLoad = this.activeJourney?.parcels.reduce((acc, parcel) => {
      return acc + parcel.weight;
    }, 0);

    return parcelsLoad || 0;
  }

  @action
  setActiveJourney(activeJourney: Journey): void {
    this.activeJourney = activeJourney;
  }

  @action
  setJourneyLoading(isLoading: boolean): void {
    this.isJourneyLoading = isLoading;
  }

  @action
  async fetchActiveJourney(): Promise<void> {
    const journeyPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, JOURNEY_MOCK),
    );

    this.setJourneyLoading(true);

    try {
      const activeJourney = await journeyPromise;

      this.setActiveJourney(activeJourney as Journey);
    } finally {
      this.setJourneyLoading(false);
    }
  }
}
