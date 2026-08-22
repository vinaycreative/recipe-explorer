import { useQuery } from '@tanstack/react-query';

import { fetchMealsByIngredient } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useMealsByIngredient(ingredient: string | null) {
  return useQuery({
    queryKey: recipeKeys.byIngredient(ingredient ?? 'none'),
    queryFn: () => fetchMealsByIngredient(ingredient!),
    enabled: Boolean(ingredient),
    staleTime: 30 * 60 * 1000,
  });
}
