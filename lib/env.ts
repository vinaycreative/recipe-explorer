import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_THEMEALDB_API_KEY: z.string().min(1).default('1'),
  EXPO_PUBLIC_THEMEALDB_BASE_URL: z
    .string()
    .url()
    .default('https://www.themealdb.com/api/json/v1'),
});

export const env = envSchema.parse({
  EXPO_PUBLIC_THEMEALDB_API_KEY: process.env.EXPO_PUBLIC_THEMEALDB_API_KEY,
  EXPO_PUBLIC_THEMEALDB_BASE_URL: process.env.EXPO_PUBLIC_THEMEALDB_BASE_URL,
});
