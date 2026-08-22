import type { MealSummary } from '@/features/recipes/types';

export function dedupeMeals(meals: MealSummary[]): MealSummary[] {
  return [...new Map(meals.map((meal) => [meal.id, meal])).values()];
}

export function shuffleMeals<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}
