import { AxiosInstance } from 'axios';

export interface HttpClientFactory {
  createClient(): AxiosInstance;
}
