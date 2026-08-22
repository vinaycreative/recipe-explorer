import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Bookmark } from 'lucide-react-native';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import type { MealSummary } from '@/features/recipes/types';
import { mealImageUrl } from '@/features/recipes/utils/meal-image';
import { useSavedStore } from '@/features/saved/store';

type RecipeCardProps = {
  meal: MealSummary;
  width?: number;
  height?: number;
  compact?: boolean;
};

export function RecipeCard({ meal, width = 168, height = 200, compact = false }: RecipeCardProps) {
  const router = useRouter();
  const isSaved = useSavedStore((state) => state.isSaved(meal.id));
  const toggleSaved = useSavedStore((state) => state.toggleSaved);

  return (
    <Pressable
      className="overflow-hidden rounded-3xl bg-card dark:bg-card-dark"
      style={{ width }}
      onPress={() => router.push(`/recipe/${meal.id}`)}>
      <Image
        source={{ uri: mealImageUrl(meal.thumbnail, 'medium') }}
        style={{ width, height }}
        contentFit="cover"
        transition={250}
      />

      <Pressable
        className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-full bg-black/35"
        onPress={(event) => {
          event.stopPropagation();
          if (process.env.EXPO_OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
          toggleSaved(meal.id);
        }}
        hitSlop={8}>
        <Bookmark
          size={15}
          color="#FFFFFF"
          strokeWidth={2}
          fill={isSaved ? '#FFFFFF' : 'transparent'}
        />
      </Pressable>

      {!compact ? (
        <View className="px-3 py-3">
          <Text className="font-serif-semibold text-base leading-5" numberOfLines={2}>
            {meal.name}
          </Text>
          {meal.category ? (
            <Text variant="caption" className="mt-1" numberOfLines={1}>
              {meal.category}
            </Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
}
