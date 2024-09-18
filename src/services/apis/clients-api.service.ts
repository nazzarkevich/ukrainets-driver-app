import { AxiosInstance } from 'axios';
import { inject } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';

import { ApiConfig } from './config-api';

export class ClientsResource {
  private readonly client: AxiosInstance;

  private readonly resources = {
    clients: 'clients',
  };

  constructor(
    @inject(injectionTokens.apiConfigFactory)
    apiConfigFactory: ({ baseURL }: { baseURL: string }) => ApiConfig,
  ) {
    this.client = apiConfigFactory({
      baseURL: devConfig.api.driverApiUrl,
    }).httpRequest;
  }

  async fetchClients() {
    const { data } = await this.client.get(this.resources.clients);

    return data;
  }
}
