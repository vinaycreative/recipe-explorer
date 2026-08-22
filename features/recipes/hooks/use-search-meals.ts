import { useQuery } from '@tanstack/react-query';

import { type SearchMode, searchMeals } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

const MIN_QUERY_LENGTH = 2;

export function useSearchMeals(query: string, mode: SearchMode) {
  const trimmed = query.trim();

  return useQuery({
    queryKey: recipeKeys.search(trimmed, mode),
    queryFn: () => searchMeals(trimmed, mode),
    enabled: trimmed.length >= MIN_QUERY_LENGTH,
    staleTime: 60_000,
  });
}
