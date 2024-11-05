import axios, { AxiosInstance } from 'axios';
import { injectable } from 'inversify';

import { HttpClientFactory } from './http-client.factory';

@injectable()
export class HttpClientBaseFactory implements HttpClientFactory {
  constructor(protected baseUrl: string) {}

  createClient(): AxiosInstance {
    const httpClient = axios.create({
      baseURL: this.baseUrl,
    });

    return httpClient;
  }
}