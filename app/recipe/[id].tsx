import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Bookmark, ExternalLink } from 'lucide-react-native';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  Linking,
  Pressable,
  ScrollView,
  View,
  useColorScheme,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Badge } from '@/components/ui/badge';
import { Padded } from '@/components/layout/padded';
import { Text } from '@/components/ui/text';
import {
  mealImageUrl,
  useMealDetail,
  useRecentlyViewedStore,
} from '@/features/recipes';
import { useSavedStore } from '@/features/saved';
import { colors } from '@/theme/colors';

export default function RecipeDetailScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];
  const { id } = useLocalSearchParams<{ id: string }>();
  const mealId = Array.isArray(id) ? id[0] : id;

  const { data: meal, isLoading, isError, refetch } = useMealDetail(mealId ?? '');
  const addRecentlyViewed = useRecentlyViewedStore((state) => state.addMeal);
  const isSaved = useSavedStore((state) => (mealId ? state.isSaved(mealId) : false));
  const toggleSaved = useSavedStore((state) => state.toggleSaved);

  useEffect(() => {
    if (mealId) {
      addRecentlyViewed(mealId);
    }
  }, [addRecentlyViewed, mealId]);

  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator color={palette.primary} size="large" />
          </View>
        ) : isError || !meal ? (
          <Padded className="flex-1 items-center justify-center">
            <Text variant="h2" className="text-center">
              Recipe not found
            </Text>
            <Pressable className="mt-4" onPress={() => refetch()}>
              <Text className="font-sans-semibold text-accent dark:text-accent-dark">Try again</Text>
            </Pressable>
          </Padded>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
            <View className="relative">
              <Image
                source={{ uri: mealImageUrl(meal.thumbnail, 'large') }}
                style={{ width: '100%', height: 320 }}
                contentFit="cover"
                transition={300}
              />

              <View
                className="absolute left-0 right-0 flex-row items-center justify-between px-4"
                style={{ top: insets.top + 8 }}>
                <Pressable
                  className="h-10 w-10 items-center justify-center rounded-full bg-black/35"
                  onPress={() => router.back()}>
                  <ArrowLeft size={20} color="#FFFFFF" strokeWidth={2} />
                </Pressable>

                <Pressable
                  className="h-10 w-10 items-center justify-center rounded-full bg-black/35"
                  onPress={() => toggleSaved(meal.id)}>
                  <Bookmark
                    size={18}
                    color="#FFFFFF"
                    strokeWidth={2}
                    fill={isSaved ? '#FFFFFF' : 'transparent'}
                  />
                </Pressable>
              </View>
            </View>

            <Padded className="pt-6">
              <Text variant="h1">{meal.name}</Text>

              <View className="mt-4 flex-row flex-wrap gap-2">
                {meal.category ? <Badge label={meal.category} variant="neutral" /> : null}
                {meal.area ? <Badge label={meal.area} variant="neutral" /> : null}
                {meal.tags.map((tag) => (
                  <Badge key={tag} label={tag} variant="neutral" />
                ))}
              </View>

              <Text variant="h2" className="mt-8">
                Ingredients
              </Text>
              <View className="mt-3 gap-3 rounded-3xl bg-card p-4 dark:bg-card-dark">
                {meal.ingredients.map((ingredient) => (
                  <View key={`${ingredient.name}-${ingredient.measure}`} className="flex-row justify-between gap-4">
                    <Text className="flex-1 font-sans text-base">{ingredient.name}</Text>
                    <Text variant="muted">{ingredient.measure || '—'}</Text>
                  </View>
                ))}
              </View>

              <Text variant="h2" className="mt-8">
                Instructions
              </Text>
              <Text variant="body" className="mt-3 leading-7">
                {meal.instructions?.replace(/\r\n/g, '\n')}
              </Text>

              {meal.youtube ? (
                <Pressable
                  className="mt-6 flex-row items-center gap-2"
                  onPress={() => {
                    if (meal.youtube) {
                      Linking.openURL(meal.youtube);
                    }
                  }}>
                  <ExternalLink size={18} color={palette.accent} strokeWidth={2} />
                  <Text className="font-sans-medium text-accent dark:text-accent-dark">
                    Watch on YouTube
                  </Text>
                </Pressable>
              ) : null}

              <Text variant="caption" className="mt-8 text-center">
                Recipe data and imagery: TheMealDB
              </Text>
            </Padded>
          </ScrollView>
        )}
    </View>
  );
}
