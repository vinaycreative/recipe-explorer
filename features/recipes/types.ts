export type MealSummary = {
  id: string;
  name: string;
  thumbnail: string;
  area?: string | null;
  category?: string | null;
};

export type MealIngredient = {
  name: string;
  measure: string;
};

export type MealDetail = MealSummary & {
  instructions?: string | null;
  tags: string[];
  youtube?: string | null;
  source?: string | null;
  ingredients: MealIngredient[];
};

export type MealCategory = {
  id: string;
  name: string;
  thumbnail: string;
  description: string;
};

export type Ingredient = {
  name: string;
};
