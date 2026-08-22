import { useQuery } from '@tanstack/react-query';

import { fetchDiscoveryMeals } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useDiscoveryMeals() {
  return useQuery({
    queryKey: recipeKeys.discovery(),
    queryFn: () => fetchDiscoveryMeals(),
    staleTime: 20 * 60 * 1000,
  });
}
