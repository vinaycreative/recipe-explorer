import { Bookmark } from 'lucide-react-native';
import { View, useColorScheme } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Padded } from '@/components/layout';
import { ScreenHeader } from '@/components/layout/screen-header';
import { Button } from '@/components/ui/button';
import { Screen } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';
import { colors } from '@/theme/colors';

export default function SavedScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];

  return (
    <Screen>
      <ScreenHeader
        title="Saved Recipes"
        subtitle="Your bookmarked recipes, stored on this device."
        delay={0}
      />

      <Animated.View entering={FadeInDown.delay(150).duration(500)} className="mt-16">
        <Padded className="items-center">
          <View className="mb-6 h-20 w-20 items-center justify-center rounded-full bg-card dark:bg-card-dark">
            <Bookmark size={36} color={palette.accent} strokeWidth={1.5} />
          </View>
          <Text variant="h2" className="text-center">
            No saved recipes yet
          </Text>
          <Text variant="muted" className="mt-2 text-center">
            Bookmark recipes to build your personal collection. Saved state will persist on device.
          </Text>
          <Button label="Explore recipes" variant="accent" className="mt-8" disabled />
          <Text variant="caption" className="mt-3 text-center">
            Button disabled — feature not implemented yet
          </Text>
        </Padded>
      </Animated.View>
    </Screen>
  );
}
