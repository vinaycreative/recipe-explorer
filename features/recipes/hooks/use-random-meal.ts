import { useQuery } from '@tanstack/react-query';

import { fetchRandomMeal } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useRandomMeal() {
  return useQuery({
    queryKey: recipeKeys.random(),
    queryFn: fetchRandomMeal,
    staleTime: 60 * 60 * 1000,
  });
}
