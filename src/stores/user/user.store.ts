import { inject, injectable } from 'inversify';
import { action, makeAutoObservable, observable } from 'mobx';

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

  @action
  handleSignIn(): void {
    this.fetchUserDetails();
  }

  @action setEmail(email: string): void {
    this.email = email;
  }

  @action setPassword(password: string): void {
    this.password = password;
  }

  @action setJwt(jwt: string): void {
    this.jwt = jwt;
  }

  @action login = async (): Promise<void> => {
    this.setIsLoading(true);

    try {
      const jwt = await this.api.login({
        email: this.email,
        password: this.password,
      });

      console.log('jwt:', jwt);
    } catch (err) {
      console.log('ERROR: ', err);
    } finally {
      this.setIsLoading(false);
    }

    // this.setJwt(jwt);
  };

  @action
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

  @action setIsLoading(isLoading: boolean): void {
    this.isUserLoading = isLoading;
  }

  @action
  private setUserDetails(details: UserDetails): void {
    this.user = details;
  }
}
