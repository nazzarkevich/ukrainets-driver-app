import { defaults } from 'src/consts';
import { AuthResource } from 'src/services';
import { injectionTokens } from 'src/types';
import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { RootStore } from '../root';
import { UserStore } from '../user';

@injectable()
export class AuthStore {
  token: string | null;
  tokenSchema = 'Bearer';
  isAuthenticated = false;
  isLoading = false;

  constructor(
    @inject(injectionTokens.authResource) public authResource: AuthResource,
    @inject(injectionTokens.lazyRootStore)
    private lazyRootStore: () => RootStore,
  ) {
    makeAutoObservable(this);
  }

  private get authorizationSchema(): string {
    return `${this.tokenSchema} ${this.token}`;
  }

  getAccessToken(): string {
    if (this.token) {
      return this.authorizationSchema;
    }

    return defaults.emptyString;
  }

  login = async (): Promise<void> => {
    this.setIsLoading(true);

    try {
      const token = await this.authResource.login({
        email: this.userStore.email,
        password: this.userStore.password,
      });

      this.setAccessToken(token as string);
      this.setIsAuthenticated(true);
    } catch (err) {
      this.setIsAuthenticated(false);
    } finally {
      this.setIsLoading(false);
    }
  };

  private setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  private setIsAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }

  private setAccessToken(token: string): void {
    this.token = token;
  }

  private get userStore(): UserStore {
    return this.lazyRootStore().userStore;
  }
}
