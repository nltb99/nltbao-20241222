import type { TEnvironment } from '@/common/types/common.type';

const config: TEnvironment = {
  APP_ENV: process.env.APP_ENV || 'development',
  NEXT_PUBLIC_COIN_GEKKO_API_URL:
    process.env.NEXT_PUBLIC_COIN_GEKKO_API_URL || '',
  NEXT_PUBLIC_COIN_GEKKO_API_KEY:
    process.env.NEXT_PUBLIC_COIN_GEKKO_API_KEY || '',
};

export default config;
