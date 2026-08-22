import { useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Padded } from '@/components/layout';
import { ScreenHeader } from '@/components/layout/screen-header';
import { ScreenSection } from '@/components/layout/screen-section';
import { Chip } from '@/components/ui/chip';
import { HorizontalScroll } from '@/components/ui/horizontal-scroll';
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
      <ScreenHeader
        title="Search"
        subtitle="Find recipes by name, ingredient, or cuisine."
        delay={0}
      />

      <Animated.View entering={FadeInDown.delay(100).duration(400)}>
        <Padded className="mt-6">
          <SearchInput
            value={query}
            onChangeText={setQuery}
            placeholder="Ingredients, dishes, cuisines..."
          />
        </Padded>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(400)} className="mt-4">
        <HorizontalScroll gap={8}>
          {FILTER_CHIPS.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              selected={selectedFilter === chip}
              onPress={() => setSelectedFilter(chip)}
            />
          ))}
        </HorizontalScroll>
      </Animated.View>

      <ScreenSection title="Trending now" delay={300} paddedContent className="mt-4">
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
      </ScreenSection>

      <ScreenSection title="Results" delay={400} paddedContent>
        <View className="rounded-3xl bg-card p-6 dark:bg-card-dark">
          <Text variant="muted" className="text-center">
            {query.length > 0
              ? `Ready to search for "${query}" once the recipes API is connected.`
              : 'Type a query to preview the search flow.'}
          </Text>
        </View>
      </ScreenSection>
    </Screen>
  );
}
