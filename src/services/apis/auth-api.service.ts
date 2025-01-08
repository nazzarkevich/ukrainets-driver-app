import { AxiosError, AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';

import { ApiConfig } from './config-api';
import { HttpClientBaseFactory } from './http-client-base.factory';

@injectable()
export class AuthResource {
  private readonly client: AxiosInstance;
  private readonly clientWithAuth: AxiosInstance;
  private readonly resources = {
    me: 'auth/me',
    signup: 'auth/signup',
    login: 'auth/login',
    // login: 'posts',
  };

  constructor(
    @inject(injectionTokens.apiConfigFactory)
    public apiConfigFactory: ({ baseURL }: { baseURL: string }) => ApiConfig,
  ) {
    // super(devConfig.api.driverApiUrl);
    // this.client = this.createClient();
    this.clientWithAuth = this.apiConfigFactory({
      baseURL: devConfig.api.driverApiUrl,
    }).httpRequest;
  }

  async fetchMe() {
    console.log('this.resources.me:', this.resources.me);
    console.log('this.client:', this.client);

    try {
      const data = await this.clientWithAuth.get(this.resources.me);

      console.log('-> data: ', data);
    } catch (err: any) {
      console.log('ERR: ', err?.response);
    }
  }

  login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      return await this.clientWithAuth.post(this.resources.login, {
        email,
        password,
        useAnonRequestHeader: true,
      });
    } catch (error: any) {
      console.log('Error -> ', error);
    }
  };
}
