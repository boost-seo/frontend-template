import { isProd } from '@/config/env';

export const constants = {
  backendUrl: 'https://backend.boostseo.ai',
};

export const REVALIDATE_TIME = isProd ? 3600 * 1 : 0; // 1 hours in prod, 0 in dev; for server side rendering
