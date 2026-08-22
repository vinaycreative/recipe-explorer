import { ScrollView } from 'react-native';

import { Chip } from '@/components/ui/chip';
import type { MealCategory } from '@/features/recipes/types';

type CategoryChipsProps = {
  categories: MealCategory[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

export function CategoryChips({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2">
      <Chip label="All" selected={selectedCategory === null} onPress={() => onSelectCategory(null)} />
      {categories.map((category) => (
        <Chip
          key={category.id}
          label={category.name}
          selected={selectedCategory === category.name}
          onPress={() => onSelectCategory(category.name)}
        />
      ))}
    </ScrollView>
  );
}
