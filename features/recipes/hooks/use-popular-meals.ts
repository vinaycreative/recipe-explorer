import { useQuery } from '@tanstack/react-query';

import { fetchPopularMeals } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function usePopularMeals() {
  return useQuery({
    queryKey: recipeKeys.popular(),
    queryFn: () => fetchPopularMeals(),
    staleTime: 30 * 60 * 1000,
  });
}
