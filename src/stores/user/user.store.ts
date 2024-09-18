import { AuthResource } from '@root/services';
import { injectionTokens, Nullable } from '@root/types';
import { inject } from 'inversify';
import { action, makeObservable, observable } from 'mobx';

interface UserDetails {
  name: string;
}

export class UserStore {
  @observable user: Nullable<UserDetails> = null;

  constructor(@inject(injectionTokens.authResource) private api: AuthResource) {
    makeObservable(this);
  }

  @action
  async fetchUserDetails(): Promise<void> {
    try {
      const userDetails = await this.api.fetchMe();

      this.setUserDetails(userDetails);
    } catch (err) {
      console.log('ERROR: ', err);
    }
  }

  @action
  private setUserDetails(details: UserDetails): void {
    this.user = details;
  }
}
