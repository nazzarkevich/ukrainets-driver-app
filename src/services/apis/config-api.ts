import Axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { AuthStore } from 'src/stores';
import { StatusCodes } from 'src/types';

import { notificationService } from '../notification';

interface ResponseError {
  code: string;
  message: string;
  values?: any;
}

interface ApiInstanceOptions {
  baseURL: string;
  authStore: () => AuthStore;
}

interface CustomHandlers {
  useCustomRequestInterceptor?: (data: unknown) => InternalAxiosRequestConfig;
  useCustomResponseErrorHandler?: boolean;
  useAnonRequestHeader?: boolean;
}

export class ApiConfig {
  httpRequest: AxiosInstance;
  fileRequest: AxiosInstance;

  private readonly authStore: () => AuthStore;

  constructor(options: ApiInstanceOptions) {
    this.initInstance(options);
    this.applyRequestInterceptors(this.httpRequest);
    this.applyResponseInterceptors(this.httpRequest);

    this.authStore = options.authStore;
  }

  private initInstance({ baseURL }: ApiInstanceOptions): void {
    this.httpRequest = Axios.create({
      baseURL,
    });
  }

  private applyRequestInterceptors(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      async (request: InternalAxiosRequestConfig) => {
        const requestData = request.data as CustomHandlers;

        if (requestData && requestData.useCustomRequestInterceptor) {
          return requestData.useCustomRequestInterceptor(
            request,
          ) as InternalAxiosRequestConfig;
        }

        const token = await this.authStore().getAccessToken();

        request.headers = {
          ...request.headers,
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
    error: AxiosError<{ errors: ResponseError[] }>,
  ) {
    if (error.response && error.response.data) {
      error.response.data.errors.forEach((error: ResponseError) => {
        notificationService.showError({
          message: error.values,
          details: error.message,
        });
      });
    } else {
      notificationService.showError({
        message: error.message,
      });
    }
  }
}
