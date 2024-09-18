import { AxiosInstance } from 'axios';
import { inject } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';

import { ApiConfig } from './config-api';

export class AuthResource {
  private readonly client: AxiosInstance;

  private readonly resources = {
    me: 'auth/me',
    signup: 'auth/signup',
    login: 'auth/login',
  };

  constructor(
    @inject(injectionTokens.apiConfigFactory)
    apiConfigFactory: ({ baseURL }: { baseURL: string }) => ApiConfig,
  ) {
    this.client = apiConfigFactory({
      baseURL: devConfig.api.driverApiUrl,
    }).httpRequest;
  }

  async fetchMe() {
    const { data } = await this.client.get(this.resources.me);

    return data;
  }

  async login() {
    const { data } = await this.client.get(this.resources.login);

    return data;
  }
}
