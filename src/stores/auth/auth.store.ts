import { defaults } from 'src/consts';
import { AuthResource } from 'src/services';
import { injectionTokens } from 'src/types';
import { inject, injectable } from 'inversify';
import { makeObservable, observable } from 'mobx';

// @provide(injectionTokens.authStore)
@injectable()
export class AuthStore {
  @observable token: string;
  @observable tokenSchema = 'Bearer';
  @observable isAuthenticated = false;

  constructor(@inject(injectionTokens.authResource) private api: AuthResource) {
    makeObservable(this);
  }

  async getAccessToken(): Promise<string> {
    try {
      console.log('in token');
      const token = await this.getToken();
      // const token = '';

      this.setAccessToken(token);

      return this.authorizationSchema;
    } catch {
      return defaults.emptyString;
    }
  }

  // @action
  private setAccessToken(token: string): void {
    this.token = token;
  }

  // @action
  private async getToken(): Promise<any> {
    return await this.api.login();
  }

  private get authorizationSchema(): string {
    return `${this.tokenSchema} ${this.token}`;
  }
}
