import { AxiosInstance } from 'axios';
import { inject, injectable } from 'inversify';

import { devConfig } from 'src/consts';
import { injectionTokens } from 'src/types';

import { ApiConfig } from './config-api';

@injectable()
export class ClientsResource {
  private readonly client: AxiosInstance;

  private readonly resources = {
    clients: 'clients',
  };

  constructor(
    @inject(injectionTokens.apiConfigFactory)
    public apiConfigFactory: ({ baseURL }: { baseURL: string }) => ApiConfig,
  ) {
    console.log('CONSTRUCT CLIENTS-API');
    this.client = apiConfigFactory({
      baseURL: devConfig.api.driverApiUrl,
    }).httpRequest;
  }

  async fetchClients() {
    const { data } = await this.client.get(this.resources.clients);

    return data;
  }
}
