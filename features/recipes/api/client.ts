import { http } from '@/lib/http';

import {
  FEATURED_AREAS,
  POPULAR_CATEGORIES,
  POPULAR_MEAL_COUNT,
  RANDOM_MEAL_COUNT,
  SECTION_MEAL_LIMIT,
} from '@/features/recipes/constants';
import { parseCategoriesResponse } from '@/features/recipes/schemas/category';
import { parseIngredientsResponse } from '@/features/recipes/schemas/ingredient';
import type { Ingredient, MealCategory, MealDetail, MealSummary } from '@/features/recipes/types';
import { dedupeMeals, shuffleMeals } from '@/features/recipes/utils/collection';
import { ingredientFilterValue } from '@/features/recipes/utils/ingredient-image';
import { normalizeMealDetail, normalizeMealSummary } from '@/features/recipes/utils/normalize-meal';

type MealsResponse = {
  meals: Record<string, unknown>[] | null;
};

function parseMealSummaries(data: unknown): MealSummary[] {
  const response = data as MealsResponse;
  if (!response.meals) {
    return [];
  }

  return response.meals
    .map((meal) => normalizeMealSummary(meal))
    .filter((meal): meal is MealSummary => meal !== null);
}

function parseMealDetail(data: unknown): MealDetail | null {
  const response = data as MealsResponse;
  const raw = response.meals?.[0];
  if (!raw) {
    return null;
  }

  return normalizeMealDetail(raw);
}

export async function fetchRandomMeal(): Promise<MealDetail> {
  const { data } = await http.get('/random.php');
  const meal = parseMealDetail(data);

  if (!meal) {
    throw new Error('No random meal returned from TheMealDB.');
  }

  return meal;
}

export async function fetchCategories(): Promise<MealCategory[]> {
  const { data } = await http.get('/categories.php');
  return parseCategoriesResponse(data);
}

export async function fetchMealsByCategory(category: string): Promise<MealSummary[]> {
  const { data } = await http.get('/filter.php', {
    params: { c: category },
  });

  return parseMealSummaries(data);
}

export async function fetchMealsByArea(area: string): Promise<MealSummary[]> {
  const { data } = await http.get('/filter.php', {
    params: { a: area },
  });

  return parseMealSummaries(data);
}

export async function fetchMealsByIngredient(ingredient: string): Promise<MealSummary[]> {
  const { data } = await http.get('/filter.php', {
    params: { i: ingredientFilterValue(ingredient) },
  });

  return parseMealSummaries(data);
}

export async function fetchIngredients(): Promise<Ingredient[]> {
  const { data } = await http.get('/list.php', {
    params: { i: 'list' },
  });

  return parseIngredientsResponse(data);
}

export async function fetchPopularMeals(limit = POPULAR_MEAL_COUNT): Promise<MealSummary[]> {
  const results = await Promise.all(POPULAR_CATEGORIES.map((category) => fetchMealsByCategory(category)));
  const sampled = results.flatMap((meals, index) =>
    meals.slice(0, Math.ceil(limit / POPULAR_CATEGORIES.length) + index),
  );

  return dedupeMeals(sampled).slice(0, limit);
}

export async function fetchRandomMeals(count = RANDOM_MEAL_COUNT): Promise<MealSummary[]> {
  const requests = Array.from({ length: count * 2 }, () => fetchRandomMeal().catch(() => null));
  const results = await Promise.all(requests);

  return dedupeMeals(
    results.filter((meal): meal is MealDetail => meal !== null),
  ).slice(0, count);
}

export async function fetchFeaturedCuisineMeals(limit = SECTION_MEAL_LIMIT): Promise<MealSummary[]> {
  const results = await Promise.all(FEATURED_AREAS.map((area) => fetchMealsByArea(area)));
  const sampled = results.flatMap((meals, index) =>
    meals.slice(0, Math.ceil(limit / FEATURED_AREAS.length) + index),
  );

  return dedupeMeals(sampled).slice(0, limit);
}

export async function fetchDiscoveryMeals(limit = SECTION_MEAL_LIMIT): Promise<MealSummary[]> {
  const [popular, randomMeals] = await Promise.all([
    fetchPopularMeals(limit),
    fetchRandomMeals(limit),
  ]);

  return dedupeMeals(shuffleMeals([...popular, ...randomMeals])).slice(0, limit);
}

export async function fetchMealById(id: string): Promise<MealDetail> {
  const { data } = await http.get('/lookup.php', {
    params: { i: id },
  });

  const meal = parseMealDetail(data);
  if (!meal) {
    throw new Error(`Meal not found: ${id}`);
  }

  return meal;
}

export async function fetchMealsByIds(ids: string[]): Promise<MealSummary[]> {
  if (ids.length === 0) {
    return [];
  }

  const meals = await Promise.all(
    ids.map(async (id) => {
      try {
        return await fetchMealById(id);
      } catch {
        return null;
      }
    }),
  );

  return meals.filter((meal): meal is MealDetail => meal !== null);
}

export type SearchMode = 'name' | 'ingredient';

export async function searchMeals(query: string, mode: SearchMode = 'name'): Promise<MealSummary[]> {
  const trimmed = query.trim();
  if (!trimmed) {
    return [];
  }

  if (mode === 'ingredient') {
    return fetchMealsByIngredient(trimmed);
  }

  const { data } = await http.get('/search.php', {
    params: { s: trimmed },
  });

  return parseMealSummaries(data);
}
