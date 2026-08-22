import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Bookmark, Leaf, MapPin } from 'lucide-react-native';
import { ActivityIndicator, Pressable, View, useColorScheme } from 'react-native';

import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import type { MealSummary } from '@/features/recipes/types';
import { mealImageUrl } from '@/features/recipes/utils/meal-image';
import { useSavedStore } from '@/features/saved/store';
import { colors } from '@/theme/colors';

type RecipeOfTheDayCardProps = {
  meal?: MealSummary;
  isLoading?: boolean;
  onRetry?: () => void;
};

export function RecipeOfTheDayCard({ meal, isLoading, onRetry }: RecipeOfTheDayCardProps) {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];
  const isSaved = useSavedStore((state) => (meal ? state.isSaved(meal.id) : false));
  const toggleSaved = useSavedStore((state) => state.toggleSaved);

  if (isLoading) {
    return (
      <View className="h-[280px] items-center justify-center rounded-[28px] bg-card dark:bg-card-dark">
        <ActivityIndicator color={palette.primary} />
      </View>
    );
  }

  if (!meal) {
    return (
      <View className="h-[280px] items-center justify-center rounded-[28px] bg-card px-6 dark:bg-card-dark">
        <Text variant="muted" className="text-center">
          Could not load today&apos;s recipe.
        </Text>
        {onRetry ? (
          <Pressable className="mt-3" onPress={onRetry}>
            <Text className="font-sans-semibold text-accent dark:text-accent-dark">Try again</Text>
          </Pressable>
        ) : null}
      </View>
    );
  }

  const metadata = meal.area ?? meal.category;

  return (
    <Pressable
      className="overflow-hidden rounded-[28px]"
      onPress={() => router.push(`/recipe/${meal.id}`)}>
      <Image
        source={{ uri: mealImageUrl(meal.thumbnail, 'large') }}
        style={{ width: '100%', height: 280 }}
        contentFit="cover"
        transition={300}
      />

      <View className="absolute left-4 top-4">
        <Badge label="Editor's Pick" variant="accent" />
      </View>

      <Pressable
        className="absolute right-4 top-4 h-10 w-10 items-center justify-center rounded-full bg-black/35"
        onPress={(event) => {
          event.stopPropagation();
          if (process.env.EXPO_OS === 'ios') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
          toggleSaved(meal.id);
        }}
        hitSlop={8}>
        <Bookmark
          size={18}
          color="#FFFFFF"
          strokeWidth={2}
          fill={isSaved ? '#FFFFFF' : 'transparent'}
        />
      </Pressable>

      <View className="absolute bottom-0 left-0 right-0 bg-black/45 px-5 pb-5 pt-10">
        <Text className="font-serif text-2xl leading-8 text-white">{meal.name}</Text>
        {metadata ? (
          <View className="mt-2 flex-row items-center gap-4">
            <View className="flex-row items-center gap-1.5">
              <MapPin size={14} color="#FFFFFF" strokeWidth={2} />
              <Text className="font-sans text-sm text-white/90">{metadata}</Text>
            </View>
            {meal.category ? (
              <View className="flex-row items-center gap-1.5">
                <Leaf size={14} color="#FFFFFF" strokeWidth={2} />
                <Text className="font-sans text-sm text-white/90">{meal.category}</Text>
              </View>
            ) : null}
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}
