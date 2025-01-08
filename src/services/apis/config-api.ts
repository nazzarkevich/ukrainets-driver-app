import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { StatusCodes } from 'src/types';

import { notificationService } from '../notification';
import { HttpClientFactory } from './http-client.factory';

interface ErrorDetails {
  error: string;
  message: string;
  statusCode: number;
}

interface ApiInstanceOptions {
  baseURL: string;
  getAccessToken: () => Promise<string>;
}

interface CustomHandlers {
  useCustomResponseErrorHandler?: boolean;
  useAnonRequestHeader?: boolean;
}

export class ApiConfig {
  httpRequest: AxiosInstance;
  fileRequest: AxiosInstance;

  private readonly getAccessToken: () => Promise<string>;

  constructor(options: ApiInstanceOptions) {
    this.initInstance(options);
    this.applyRequestInterceptors(this.httpRequest);
    this.applyResponseInterceptors(this.httpRequest);

    this.getAccessToken = options.getAccessToken;
  }

  private initInstance({ baseURL }: ApiInstanceOptions): void {
    this.httpRequest = Axios.create({
      baseURL,
    });
  }

  private applyRequestInterceptors(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      async (request: InternalAxiosRequestConfig) => {
        console.log('REQUEST INTERCEPT: ', request);
        const requestData = request.data as CustomHandlers;

        if (requestData && requestData?.useAnonRequestHeader) {
          return request;
        }

        const token = await this.getAccessToken();

        request.headers = {
          ...request.headers,
          'Content-Type': 'application/json',
          Authorization: token,
        } as AxiosRequestHeaders;

        return request;
      },
    );
  }

  private applyResponseInterceptors(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (resp: AxiosResponse) => resp.data,
      async (error: AxiosError) => {
        if (Axios.isCancel(error)) {
          return Promise.reject({
            response: {
              status: StatusCodes.ClientClosedRequest,
              data: { errors: [error.message] },
            },
          });
        }

        if (this.isCustomError(error)) {
          return Promise.reject(error);
        }

        this.showErrorNotifications(error);

        return Promise.reject(error);
      },
    );
  }

  private isCustomError(error: AxiosError): boolean | undefined {
    return (
      error.config?.data &&
      (JSON.parse(error.config.data) as CustomHandlers)
        .useCustomResponseErrorHandler
    );
  }

  private showErrorNotifications(
    error: AxiosError<{ errorDetails: ErrorDetails }>,
  ) {
    if (error.response && error.response.data) {
      const errorDetails = error.response.data.errorDetails;
      notificationService.showError({
        message: errorDetails.message,
        details: errorDetails.error,
      });
    }
  }
}
