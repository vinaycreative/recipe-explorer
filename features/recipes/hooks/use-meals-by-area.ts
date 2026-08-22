import { useQuery } from '@tanstack/react-query';

import { fetchMealsByArea } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useMealsByArea(area: string | null) {
  return useQuery({
    queryKey: recipeKeys.byArea(area ?? 'none'),
    queryFn: () => fetchMealsByArea(area!),
    enabled: Boolean(area),
    staleTime: 30 * 60 * 1000,
  });
}
