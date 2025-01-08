import { action, computed, makeAutoObservable } from 'mobx';

import { Journey, Nullable } from 'src/types';

import { JOURNEY_MOCK } from './journeyMock';
import { injectable } from 'inversify';

@injectable()
export class JourneyStore {
  activeJourney: Nullable<Journey> = null;
  isJourneyLoading = false;

  constructor() {
    makeAutoObservable(this);
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
