import { useQuery } from '@tanstack/react-query';

import { fetchMealById } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useMealDetail(id: string) {
  return useQuery({
    queryKey: recipeKeys.detail(id),
    queryFn: () => fetchMealById(id),
    enabled: Boolean(id),
  });
}
