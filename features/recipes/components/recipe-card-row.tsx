import { ActivityIndicator, View, useColorScheme } from 'react-native';

import { HorizontalScroll } from '@/components/ui/horizontal-scroll';
import { Text } from '@/components/ui/text';
import { RecipeCard } from '@/features/recipes/components/recipe-card';
import type { MealSummary } from '@/features/recipes/types';
import { colors } from '@/theme/colors';

type RecipeCardRowProps = {
  meals?: MealSummary[];
  isLoading?: boolean;
  emptyMessage?: string;
  compact?: boolean;
  cardHeight?: number;
};

export function RecipeCardRow({
  meals = [],
  isLoading,
  emptyMessage = 'No recipes to show yet.',
  compact = false,
  cardHeight = 200,
}: RecipeCardRowProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];

  if (isLoading) {
    return (
      <View className="mx-6 h-[248px] items-center justify-center rounded-3xl bg-card dark:bg-card-dark">
        <ActivityIndicator color={palette.primary} />
      </View>
    );
  }

  if (meals.length === 0) {
    return (
      <View className="mx-6 rounded-3xl bg-card px-6 py-8 dark:bg-card-dark">
        <Text variant="muted" className="text-center">
          {emptyMessage}
        </Text>
      </View>
    );
  }

  return (
    <HorizontalScroll gap={12}>
      {meals.map((meal) => (
        <RecipeCard key={meal.id} meal={meal} compact={compact} height={cardHeight} />
      ))}
    </HorizontalScroll>
  );
}
