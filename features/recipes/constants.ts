export type Ingredient = {
  name: string;
};

export const POPULAR_CATEGORIES = ['Chicken', 'Pasta', 'Dessert', 'Seafood'] as const;
export const FEATURED_AREAS = ['Italian', 'Mexican', 'Indian', 'Japanese', 'British'] as const;
export const FEATURED_INGREDIENTS = [
  'Chicken',
  'Salmon',
  'Tomato',
  'Chocolate',
  'Egg',
  'Rice',
  'Garlic',
  'Beef',
] as const;

export const RANDOM_MEAL_COUNT = 8;
export const POPULAR_MEAL_COUNT = 10;
export const SECTION_MEAL_LIMIT = 8;
