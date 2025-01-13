import { inject, injectable } from 'inversify';
import { action, makeAutoObservable } from 'mobx';

import { AuthResource } from 'src/services';
import { injectionTokens, Nullable } from 'src/types';

interface UserDetails {
  name: string;
}

@injectable()
export class UserStore {
  user: Nullable<UserDetails> = null;
  isUserLoading: boolean = false;
  email: string = '';
  password: string = '';
  jwt: string = '';

  constructor(@inject(injectionTokens.authResource) public api: AuthResource) {
    makeAutoObservable(this);
  }

  handleSignIn(): void {
    this.fetchUserDetails();
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  async fetchUserDetails(): Promise<void> {
    try {
      this.setIsLoading(true);
      // const userDetails = await this.api.fetchMe();

      // console.log('-> userDetails: ', userDetails);

      // this.setUserDetails(userDetails);
    } catch (err) {
      // console.log('ERROR: ', err);
    } finally {
      this.setIsLoading(false);
    }
  }

  setIsLoading(isLoading: boolean): void {
    this.isUserLoading = isLoading;
  }

  @action
  private setUserDetails(details: UserDetails): void {
    this.user = details;
  }
}
