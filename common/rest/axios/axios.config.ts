import type { AxiosInstance } from 'axios';
import axios from 'axios';

import { appConfig } from '@/config/appConfig';

export const InstanceAxios: AxiosInstance = axios.create({
  baseURL: appConfig.NEXT_PUBLIC_COIN_GEKKO_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

InstanceAxios.interceptors.request.use((config) => {
  if (config.headers) {
    Object.assign(config.headers, {
      'x-cg-demo-api-key': appConfig.NEXT_PUBLIC_COIN_GEKKO_API_KEY,
    });
  }

  return config;
});
