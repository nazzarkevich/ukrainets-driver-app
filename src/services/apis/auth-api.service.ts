import { AxiosError, AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';

import { ApiConfig } from './config-api';
import { HttpClientBaseFactory } from './http-client-base.factory';

@injectable()
export class AuthResource extends HttpClientBaseFactory {
  private readonly client: AxiosInstance;
  private readonly resources = {
    me: 'auth/me',
    signup: 'auth/signup',
    login: 'auth/login',
  };

  constructor(
    @inject(injectionTokens.apiConfigFactory)
    public apiConfigFactory: ({ baseURL }: { baseURL: string }) => ApiConfig,
  ) {
    super(devConfig.api.driverApiUrl);
    this.client = this.createClient();
  }

  async fetchMe() {
    console.log('this.resources.me:', this.resources.me);
    console.log('this.client:', this.client);

    try {
      const data = await this.client.get(this.resources.me);

      console.log('-> data: ', data);
    } catch (err: any) {
      console.log('ERR: ', err?.response);
    }
  }

  async login() {
    return await this.client.get(this.resources.login);
  }
}
