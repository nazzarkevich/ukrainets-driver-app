import { action, computed, makeAutoObservable } from 'mobx';

import { Journey } from 'src/types';

import { JOURNEYS_MOCK } from './journeysMock';
import { injectable } from 'inversify';

@injectable()
export class JourneysStore {
  journeys: Journey[] = [];
  isJourneysLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get lastJourneys(): Journey[] {
    const lastJourneys = this.journeys.slice(-3);

    return lastJourneys;
  }

  @action
  setJourneys(journeys: Journey[]): void {
    this.journeys = journeys;
  }

  @action
  setJourneysLoading(isLoading: boolean): void {
    this.isJourneysLoading = isLoading;
  }

  @action
  async fetchJourneys(): Promise<void> {
    const journeyPromise = new Promise((resolve) =>
      setTimeout(resolve, 1000, JOURNEYS_MOCK),
    );

    this.setJourneysLoading(true);

    try {
      const journeys = await journeyPromise;
      this.setJourneys(journeys as Journey[]);
    } finally {
      this.setJourneysLoading(false);
    }
  }

  @action
  async addJourney(journey: Journey): Promise<void> {}
}
