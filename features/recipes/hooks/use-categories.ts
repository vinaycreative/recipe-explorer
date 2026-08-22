import { useQuery } from '@tanstack/react-query';

import { fetchCategories } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useCategories() {
  return useQuery({
    queryKey: recipeKeys.categories(),
    queryFn: fetchCategories,
    staleTime: 24 * 60 * 60 * 1000,
  });
}
