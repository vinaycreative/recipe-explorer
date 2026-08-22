import { z } from 'zod';

import type { Ingredient } from '@/features/recipes/types';

const rawIngredientSchema = z.object({
  strIngredient: z.string(),
});

const ingredientsResponseSchema = z.object({
  meals: z.array(rawIngredientSchema).nullable(),
});

export function parseIngredientsResponse(data: unknown): Ingredient[] {
  const parsed = ingredientsResponseSchema.safeParse(data);
  if (!parsed.success || !parsed.data.meals) {
    return [];
  }

  return parsed.data.meals.map((ingredient) => ({
    name: ingredient.strIngredient.trim(),
  }));
}
