import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { FoundationSection } from '@/components/foundation/section';
import { Chip } from '@/components/ui/chip';
import { Screen } from '@/components/ui/screen';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';

const FILTER_CHIPS = ['Filters', 'Under 30 min', 'Vegetarian', 'Low-Carb'];
const TRENDING_TAGS = ['Slow Cooker', 'Summer Salads', 'One-Pot Pasta', 'Tofu'];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Filters');

  return (
    <Screen scroll={false}>
      <Animated.View entering={FadeInDown.duration(400)}>
        <Text variant="h1">Search</Text>
        <Text variant="muted" className="mt-2">
          Search UI foundation — recipe API integration comes next.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(100).duration(400)} className="mt-6">
        <SearchInput
          value={query}
          onChangeText={setQuery}
          placeholder="Ingredients, dishes, cuisines..."
        />
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(400)} className="mt-4">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
          {FILTER_CHIPS.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              selected={selectedFilter === chip}
              onPress={() => setSelectedFilter(chip)}
            />
          ))}
        </ScrollView>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(400)} className="mt-8">
        <FoundationSection title="Trending now">
          <View className="flex-row flex-wrap gap-2">
            {TRENDING_TAGS.map((tag) => (
              <View
                key={tag}
                className="rounded-2xl border border-border bg-card px-4 py-2.5 dark:border-border-dark dark:bg-card-dark">
                <Text className="font-sans-medium text-sm text-foreground dark:text-foreground-dark">
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(400)}>
        <FoundationSection title="Results preview">
          <View className="rounded-3xl bg-card p-6 dark:bg-card-dark">
            <Text variant="muted" className="text-center">
              {query.length > 0
                ? `Ready to search for "${query}" once the recipes API is connected.`
                : 'Type a query to preview the search flow.'}
            </Text>
          </View>
        </FoundationSection>
      </Animated.View>
    </Screen>
  );
}
