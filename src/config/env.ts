import { constants } from '@/config/constants';

export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';

export const environmentVariables = {
  API_BACKEND_URL: isProd
    ? constants.backendUrl
    : process.env.API_BACKEND_URL?.replace(/\/$/, '') || constants.backendUrl,
  API_KEY: process.env.API_KEY || '',
};

export const REVALIDATE_TIME = isProd ? 3600 * 1 : 0; // 1 hours in prod, 0 in dev; for server side rendering
