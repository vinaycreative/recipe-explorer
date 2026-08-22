export type {
  Ingredient,
  MealCategory,
  MealDetail,
  MealIngredient,
  MealSummary,
} from '@/features/recipes/types';

export {
  fetchCategories,
  fetchDiscoveryMeals,
  fetchFeaturedCuisineMeals,
  fetchIngredients,
  fetchMealById,
  fetchMealsByArea,
  fetchMealsByCategory,
  fetchMealsByIngredient,
  fetchPopularMeals,
  fetchRandomMeal,
  fetchRandomMeals,
  searchMeals,
} from '@/features/recipes/api/client';
export type { SearchMode } from '@/features/recipes/api/client';
export { recipeKeys } from '@/features/recipes/api/keys';

export { FEATURED_AREAS, FEATURED_INGREDIENTS } from '@/features/recipes/constants';

export { useCategories } from '@/features/recipes/hooks/use-categories';
export { useDiscoveryMeals } from '@/features/recipes/hooks/use-discovery-meals';
export { useFeaturedCuisineMeals } from '@/features/recipes/hooks/use-featured-cuisine-meals';
export { useIngredients } from '@/features/recipes/hooks/use-ingredients';
export { useMealDetail } from '@/features/recipes/hooks/use-meal-detail';
export { useMealsByArea } from '@/features/recipes/hooks/use-meals-by-area';
export { useMealsByCategory } from '@/features/recipes/hooks/use-meals-by-category';
export { useMealsByIngredient } from '@/features/recipes/hooks/use-meals-by-ingredient';
export { usePopularMeals } from '@/features/recipes/hooks/use-popular-meals';
export { useRandomMeal } from '@/features/recipes/hooks/use-random-meal';
export { useRandomMeals } from '@/features/recipes/hooks/use-random-meals';
export { useRecentlyViewedMeals } from '@/features/recipes/hooks/use-recently-viewed-meals';
export { useSearchMeals } from '@/features/recipes/hooks/use-search-meals';

export { CategoryCard } from '@/features/recipes/components/category-card';
export { CategoryCardRow } from '@/features/recipes/components/category-card-row';
export { CategoryChips } from '@/features/recipes/components/category-chips';
export { CuisineChips } from '@/features/recipes/components/cuisine-chips';
export { HomeHeader } from '@/features/recipes/components/home-header';
export { HomeSection } from '@/features/recipes/components/home-section';
export { IngredientChips } from '@/features/recipes/components/ingredient-chips';
export { RecipeCard } from '@/features/recipes/components/recipe-card';
export { RecipeCardRow } from '@/features/recipes/components/recipe-card-row';
export { RecipeOfTheDayCard } from '@/features/recipes/components/recipe-of-the-day-card';
export { SectionHeader } from '@/features/recipes/components/section-header';

export { useRecentlyViewedStore } from '@/features/recipes/store/recently-viewed';
export { getTimeGreeting } from '@/features/recipes/utils/greeting';
export { ingredientImageUrl } from '@/features/recipes/utils/ingredient-image';
export { mealImageUrl } from '@/features/recipes/utils/meal-image';
