import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { get } from 'lodash';

import { InstanceAxios } from '../rest/axios/axios.config';
import { HandleResponseError } from '../rest/errors/errors';

class HttpRestService {
  constructor(private axiosInstance: AxiosInstance) {}

  async get<T>(route: string, configs?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance
      .get(route, configs)
      .then((data) => get(data, 'data'))
      .catch(HandleResponseError);
  }

  async post<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axiosInstance
      .post(route, payload, configs)
      .then((data) => get(data, 'data'))
      .catch(HandleResponseError);
  }

  async patch<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axiosInstance
      .patch(route, payload, configs)
      .then((data) => get(data, 'data'))
      .catch(HandleResponseError);
  }

  async put<P, R>(
    route: string,
    payload?: P,
    configs?: AxiosRequestConfig,
  ): Promise<R> {
    return this.axiosInstance
      .put(route, payload, configs)
      .then((data) => get(data, 'data'))
      .catch(HandleResponseError);
  }

  async delete<R>(route: string, configs?: AxiosRequestConfig): Promise<R> {
    return this.axiosInstance
      .delete(route, configs)
      .then((data) => get(data, 'data'))
      .catch(HandleResponseError);
  }
}

export const HttpService = new HttpRestService(InstanceAxios);
