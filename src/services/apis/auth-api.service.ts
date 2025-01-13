import { AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';
import { HttpClientBaseFactory } from './http-client-base.factory';

@injectable()
export class AuthResource {
  private readonly client: AxiosInstance;
  private readonly resources = {
    signup: 'auth/signup',
    login: 'auth/login',
  };

  constructor(
    @inject(injectionTokens.apiBaseConfigFactory)
    public apiBaseConfigFactory: ({
      baseURL,
    }: {
      baseURL: string;
    }) => HttpClientBaseFactory,
  ) {
    this.client = this.apiBaseConfigFactory({
      baseURL: devConfig.api.driverApiUrl,
    }).createClient();
  }

  login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<string | null> => {
    const { data } = await this.client.post(this.resources.login, {
      email,
      password,
    });

    return data;
  };
}
