import { z } from 'zod';

import type { MealCategory } from '@/features/recipes/types';

const rawCategorySchema = z.object({
  idCategory: z.string(),
  strCategory: z.string(),
  strCategoryThumb: z.string(),
  strCategoryDescription: z.string(),
});

const categoriesResponseSchema = z.object({
  categories: z.array(rawCategorySchema).nullable(),
});

export function parseCategoriesResponse(data: unknown): MealCategory[] {
  const parsed = categoriesResponseSchema.safeParse(data);
  if (!parsed.success || !parsed.data.categories) {
    return [];
  }

  return parsed.data.categories.map((category) => ({
    id: category.idCategory,
    name: category.strCategory,
    thumbnail: category.strCategoryThumb,
    description: category.strCategoryDescription,
  }));
}
