import { defaults } from '@root/consts';
import { AuthResource } from '@root/services';
import { injectionTokens } from '@root/types';
import { inject } from 'inversify';
import { action, makeObservable, observable } from 'mobx';

export class AuthStore {
  @observable token: string;
  @observable tokenSchema = 'Bearer';
  @observable isAuthenticated = false;

  constructor(@inject(injectionTokens.authResource) private api: AuthResource) {
    makeObservable(this);
  }

  async getAccessToken(): Promise<string> {
    try {
      const token = await this.getToken();

      this.setAccessToken(token);

      return this.authorizationSchema;
    } catch {
      return defaults.emptyString;
    }
  }

  @action
  private setAccessToken(token: string): void {
    this.token = token;
  }

  @action
  private async getToken(): Promise<string> {
    return this.api.login();
  }

  private get authorizationSchema(): string {
    return `${this.tokenSchema} ${this.token}`;
  }
}
