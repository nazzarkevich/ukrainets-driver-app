import { defaults } from 'src/consts';
import { AuthResource } from 'src/services';
import { injectionTokens } from 'src/types';
import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class AuthStore {
  token: string;
  tokenSchema = 'Bearer';
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  async getAccessToken(): Promise<string> {
    try {
      console.log('in token');
      // const token = await this.getToken();
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsIm5hbWUiOiJKYXkiLCJpYXQiOjE3MzYxOTg0MjMsImV4cCI6MTczNjI4NDgyM30.5s0QnKdt8DF5aaUzAgBgpTKTsUyi2Bp3uBje4vex758';

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
    // return await this.api.login();
  }

  private get authorizationSchema(): string {
    return `${this.tokenSchema} ${this.token}`;
  }
}
