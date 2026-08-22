import { create } from 'axios';

import { env } from '@/lib/env';

export const http = create({
  baseURL: `${env.EXPO_PUBLIC_THEMEALDB_BASE_URL}/${env.EXPO_PUBLIC_THEMEALDB_API_KEY}`,
  timeout: 10_000,
  headers: {
    Accept: 'application/json',
  },
});
