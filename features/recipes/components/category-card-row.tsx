import { useRouter } from 'expo-router';

import { HorizontalScroll } from '@/components/ui/horizontal-scroll';
import { CategoryCard } from '@/features/recipes/components/category-card';
import { CategorySeeMoreCard } from '@/features/recipes/components/category-see-more-card';
import type { MealCategory } from '@/features/recipes/types';

type CategoryCardRowProps = {
  categories: MealCategory[];
  selectedCategory?: string | null;
  onSelectCategory?: (category: string) => void;
};

export function CategoryCardRow({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryCardRowProps) {
  const router = useRouter();
  const seeMoreCategory = selectedCategory ?? categories[0]?.name;

  return (
    <HorizontalScroll gap={0}>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          selected={selectedCategory === category.name}
          onPress={() => onSelectCategory?.(category.name)}
        />
      ))}
      {seeMoreCategory ? (
        <CategorySeeMoreCard
          categoryName={seeMoreCategory}
          onPress={() =>
            router.push(`/category/${encodeURIComponent(seeMoreCategory)}`)
          }
        />
      ) : null}
    </HorizontalScroll>
  );
}
