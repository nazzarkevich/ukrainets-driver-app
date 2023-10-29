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
  setLastJourney(lastJourneys: Journey[]): void {
    this.journeys = lastJourneys;
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
      const lastJourneys = await journeyPromise;
      this.setLastJourney(lastJourneys as Journey[]);
    } finally {
      this.setJourneysLoading(false);
    }
  }

  @action
  async addJourney(journey: Journey): Promise<void> {}
}
