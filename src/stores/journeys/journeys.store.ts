import { action, computed, makeObservable, observable } from 'mobx';

import { Journey } from '@type/';

import { JOURNEYS_MOCK } from './journeysMock';

export class JourneysStore {
  @observable journeys: Journey[] = [];
  @observable isJourneysLoading = false;

  constructor() {
    makeObservable(this);
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