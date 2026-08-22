import { useQuery } from '@tanstack/react-query';

import { fetchMealsByCategory } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useMealsByCategory(category: string | null) {
  return useQuery({
    queryKey: recipeKeys.byCategory(category ?? 'none'),
    queryFn: () => fetchMealsByCategory(category!),
    enabled: Boolean(category),
    staleTime: 30 * 60 * 1000,
  });
}
