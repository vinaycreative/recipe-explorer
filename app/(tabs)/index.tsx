import { useRouter } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Padded } from '@/components/layout';
import { ScreenSection } from '@/components/layout/screen-section';
import { Screen } from '@/components/ui/screen';
import {
  CategoryCardRow,
  CuisineChips,
  FEATURED_INGREDIENTS,
  HomeHeader,
  IngredientChips,
  RecipeCardRow,
  RecipeOfTheDayCard,
  useCategories,
  useDiscoveryMeals,
  useMealsByArea,
  useMealsByCategory,
  useMealsByIngredient,
  useRandomMeal,
  useRandomMeals,
  useRecentlyViewedMeals,
} from '@/features/recipes';

export default function HomeScreen() {
  const router = useRouter();
  const [browseCategory, setBrowseCategory] = useState<string | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<string>(FEATURED_INGREDIENTS[0]);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('Italian');

  const randomMealQuery = useRandomMeal();
  const categoriesQuery = useCategories();
  const randomMealsQuery = useRandomMeals();
  const discoveryMealsQuery = useDiscoveryMeals();
  const browseMealsQuery = useMealsByCategory(browseCategory);
  const ingredientMealsQuery = useMealsByIngredient(selectedIngredient);
  const cuisineMealsQuery = useMealsByArea(selectedCuisine);
  const recentlyViewedQuery = useRecentlyViewedMeals();

  const categories = categoriesQuery.data ?? [];

  useEffect(() => {
    if (!browseCategory && categories.length > 0) {
      setBrowseCategory(categories[0].name);
    }
  }, [browseCategory, categories]);

  const ingredientOptions = useMemo(() => [...FEATURED_INGREDIENTS], []);

  return (
    <Screen>
      <Animated.View entering={FadeInDown.duration(400)}>
        <Padded>
          <HomeHeader />
        </Padded>
      </Animated.View>

      <ScreenSection title="Recipe of the Day" delay={100} paddedContent>
        <RecipeOfTheDayCard
          meal={randomMealQuery.data}
          isLoading={randomMealQuery.isLoading}
          onRetry={() => randomMealQuery.refetch()}
        />
      </ScreenSection>

      <ScreenSection
        title="Browse by Category"
        subtitle="Tap a category to explore dishes"
        delay={150}>
        <CategoryCardRow
          categories={categories}
          selectedCategory={browseCategory}
          onSelectCategory={setBrowseCategory}
        />
        <View className="mt-4">
          <RecipeCardRow
            meals={browseMealsQuery.data?.slice(0, 8)}
            isLoading={browseMealsQuery.isLoading || categoriesQuery.isLoading}
            emptyMessage={
              browseCategory
                ? `No ${browseCategory.toLowerCase()} recipes found.`
                : 'Loading categories...'
            }
          />
        </View>
      </ScreenSection>

      <ScreenSection
        title="Lucky Dip"
        subtitle="Fresh random picks every time you visit"
        delay={200}
        actionLabel="Shuffle"
        onActionPress={() => randomMealsQuery.refetch()}>
        <RecipeCardRow
          meals={randomMealsQuery.data}
          isLoading={randomMealsQuery.isLoading}
          emptyMessage="Could not load random recipes."
        />
      </ScreenSection>

      <ScreenSection
        title="Cook with Ingredients"
        subtitle={`Recipes featuring ${selectedIngredient.toLowerCase()}`}
        delay={250}>
        <IngredientChips
          ingredients={ingredientOptions}
          selectedIngredient={selectedIngredient}
          onSelectIngredient={setSelectedIngredient}
        />
        <View className="mt-4">
          <RecipeCardRow
            meals={ingredientMealsQuery.data?.slice(0, 8)}
            isLoading={ingredientMealsQuery.isLoading}
            emptyMessage={`No recipes found with ${selectedIngredient.toLowerCase()}.`}
          />
        </View>
      </ScreenSection>

      <ScreenSection
        title="World Cuisines"
        subtitle={`Explore ${selectedCuisine} flavors`}
        delay={300}>
        <CuisineChips selectedArea={selectedCuisine} onSelectArea={setSelectedCuisine} />
        <View className="mt-4">
          <RecipeCardRow
            meals={cuisineMealsQuery.data?.slice(0, 8)}
            isLoading={cuisineMealsQuery.isLoading}
            emptyMessage={`No ${selectedCuisine} recipes found.`}
          />
        </View>
      </ScreenSection>

      <ScreenSection
        title="More to Explore"
        subtitle="A mixed feed of popular and surprise picks"
        delay={350}
        actionLabel="Refresh"
        onActionPress={() => discoveryMealsQuery.refetch()}>
        <RecipeCardRow
          meals={discoveryMealsQuery.data}
          isLoading={discoveryMealsQuery.isLoading}
          emptyMessage="Discovery feed is loading..."
        />
      </ScreenSection>

      <ScreenSection
        title="Recently Viewed"
        delay={400}
        actionLabel={recentlyViewedQuery.data?.length ? 'See all' : undefined}
        onActionPress={
          recentlyViewedQuery.data?.length ? () => router.push('/saved') : undefined
        }>
        <RecipeCardRow
          meals={recentlyViewedQuery.data}
          isLoading={recentlyViewedQuery.isLoading}
          compact
          cardHeight={176}
          emptyMessage="Recipes you open will appear here."
        />
      </ScreenSection>

      <View className="h-4" />
    </Screen>
  );
}
