import { useQuery } from '@tanstack/react-query';

import { fetchMealsByIds } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';
import { useRecentlyViewedStore } from '@/features/recipes/store/recently-viewed';

export function useRecentlyViewedMeals() {
  const ids = useRecentlyViewedStore((state) => state.ids);
  const hydrated = useRecentlyViewedStore((state) => state.hydrated);

  return useQuery({
    queryKey: recipeKeys.recentlyViewed(ids),
    queryFn: () => fetchMealsByIds(ids),
    enabled: hydrated && ids.length > 0,
    staleTime: 5 * 60 * 1000,
  });
}
