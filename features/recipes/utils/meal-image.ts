type MealImageSize = 'small' | 'medium' | 'large';

export function mealImageUrl(url: string, size?: MealImageSize): string {
  if (!size) {
    return url;
  }

  return `${url}/${size}`;
}
