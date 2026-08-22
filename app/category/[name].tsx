import { FlashList } from '@shopify/flash-list';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { ActivityIndicator, Dimensions, Pressable, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Padded } from '@/components/layout/padded';
import { Text } from '@/components/ui/text';
import { SCREEN_PADDING_X } from '@/constants/layout';
import { RecipeCard } from '@/features/recipes/components/recipe-card';
import { useMealsByCategory } from '@/features/recipes/hooks/use-meals-by-category';
import { colors } from '@/theme/colors';

const GRID_GAP = 12;

export default function CategoryScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];
  const { name } = useLocalSearchParams<{ name: string }>();
  const categoryName = decodeURIComponent(Array.isArray(name) ? name[0] : (name ?? ''));

  const { data: meals = [], isLoading, isError, refetch } = useMealsByCategory(
    categoryName || null,
  );

  const cardWidth =
    (Dimensions.get('window').width - SCREEN_PADDING_X * 2 - GRID_GAP) / 2;

  return (
    <View className="flex-1 bg-background dark:bg-background-dark">
      <Padded
        className="border-b border-border pb-4 dark:border-border-dark"
        style={{ paddingTop: insets.top + 8 }}>
        <View className="flex-row items-center gap-3">
          <Pressable
            className="h-10 w-10 items-center justify-center rounded-full bg-card dark:bg-card-dark"
            onPress={() => router.back()}>
            <ArrowLeft size={20} color={palette.foreground} strokeWidth={2} />
          </Pressable>
          <View className="flex-1">
            <Text variant="label">Category</Text>
            <Text variant="h1" className="mt-0.5">
              {categoryName || 'Recipes'}
            </Text>
          </View>
        </View>
      </Padded>

      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator color={palette.primary} size="large" />
        </View>
      ) : isError ? (
        <Padded className="flex-1 items-center justify-center">
          <Text variant="muted" className="text-center">
            Could not load {categoryName.toLowerCase()} recipes.
          </Text>
          <Pressable className="mt-4" onPress={() => refetch()}>
            <Text className="font-sans-semibold text-accent dark:text-accent-dark">Try again</Text>
          </Pressable>
        </Padded>
      ) : meals.length === 0 ? (
        <Padded className="flex-1 items-center justify-center">
          <Text variant="muted" className="text-center">
            No recipes found in this category.
          </Text>
        </Padded>
      ) : (
        <FlashList
          data={meals}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingHorizontal: SCREEN_PADDING_X,
            paddingTop: 16,
            paddingBottom: insets.bottom + 24,
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                width: cardWidth,
                marginBottom: GRID_GAP,
                marginRight: index % 2 === 0 ? GRID_GAP : 0,
              }}>
              <RecipeCard meal={item} width={cardWidth} height={180} />
            </View>
          )}
        />
      )}
    </View>
  );
}
