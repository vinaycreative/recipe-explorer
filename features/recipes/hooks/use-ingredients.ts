import { useQuery } from '@tanstack/react-query';

import { fetchIngredients } from '@/features/recipes/api/client';
import { recipeKeys } from '@/features/recipes/api/keys';

export function useIngredients() {
  return useQuery({
    queryKey: recipeKeys.ingredients(),
    queryFn: fetchIngredients,
    staleTime: 24 * 60 * 60 * 1000,
  });
}
