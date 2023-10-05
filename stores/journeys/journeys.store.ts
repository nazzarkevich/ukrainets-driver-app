import { action, computed, makeObservable, observable } from 'mobx';

import { Journey } from '@type/';

export class JourneysStore {
  @observable journeys: Journey[] = [];

  constructor() {
    makeObservable(this);
  }

  @computed
  get journeysCount(): number {
    return this.journeys.length;
  }

  @action
  async fetchJourneys(): Promise<void> {}

  @action
  async addJourney(journey: Journey): Promise<void> {}
}
