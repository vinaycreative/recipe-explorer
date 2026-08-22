import { useQuery } from '@tanstack/react-query';

import { fetchRandomMeals } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';
import { RANDOM_MEAL_COUNT } from '@/features/recipes/constants';

export function useRandomMeals(count = RANDOM_MEAL_COUNT) {
  return useQuery({
    queryKey: recipeKeys.randomMeals(count),
    queryFn: () => fetchRandomMeals(count),
    staleTime: 15 * 60 * 1000,
  });
}
