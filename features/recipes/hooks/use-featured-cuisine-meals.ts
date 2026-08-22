import { useQuery } from '@tanstack/react-query';

import { fetchFeaturedCuisineMeals } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useFeaturedCuisineMeals() {
  return useQuery({
    queryKey: recipeKeys.featuredCuisines(),
    queryFn: () => fetchFeaturedCuisineMeals(),
    staleTime: 30 * 60 * 1000,
  });
}
