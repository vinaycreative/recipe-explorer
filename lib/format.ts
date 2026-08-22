export function capitalizeWords(value: string): string {
  return value
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function ingredientFilterParam(name: string): string {
  return encodeURIComponent(name.trim().replace(/\s+/g, '_'));
}
