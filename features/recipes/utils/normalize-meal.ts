import type { MealDetail, MealIngredient, MealSummary } from '@/features/recipes/types';

type RawMeal = Record<string, unknown>;

function parseIngredients(raw: RawMeal): MealIngredient[] {
  const ingredients: MealIngredient[] = [];

  for (let index = 1; index <= 20; index += 1) {
    const name = raw[`strIngredient${index}`];
    if (typeof name !== 'string' || !name.trim()) {
      continue;
    }

    const measure = raw[`strMeasure${index}`];
    ingredients.push({
      name: name.trim(),
      measure: typeof measure === 'string' ? measure.trim() : '',
    });
  }

  return ingredients;
}

function parseTags(value: unknown): string[] {
  if (typeof value !== 'string' || !value.trim()) {
    return [];
  }

  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function normalizeMealSummary(raw: RawMeal): MealSummary | null {
  const id = raw.idMeal;
  const name = raw.strMeal;
  const thumbnail = raw.strMealThumb;

  if (typeof id !== 'string' || typeof name !== 'string' || typeof thumbnail !== 'string') {
    return null;
  }

  return {
    id,
    name,
    thumbnail,
    area: typeof raw.strArea === 'string' ? raw.strArea : null,
    category: typeof raw.strCategory === 'string' ? raw.strCategory : null,
  };
}

export function normalizeMealDetail(raw: RawMeal): MealDetail | null {
  const summary = normalizeMealSummary(raw);
  if (!summary) {
    return null;
  }

  return {
    ...summary,
    instructions: typeof raw.strInstructions === 'string' ? raw.strInstructions : null,
    tags: parseTags(raw.strTags),
    youtube: typeof raw.strYoutube === 'string' ? raw.strYoutube : null,
    source: typeof raw.strSource === 'string' ? raw.strSource : null,
    ingredients: parseIngredients(raw),
  };
}
