type IngredientImageSize = 'small' | 'medium' | 'large';

export function ingredientImageUrl(name: string, size?: IngredientImageSize): string {
  const slug = name.trim().replace(/\s+/g, '_');
  const base = `https://www.themealdb.com/images/ingredients/${slug}.png`;
  return size ? `${base}/${size}` : base;
}

export function ingredientFilterValue(name: string): string {
  return name.trim().replace(/\s+/g, '_');
}
