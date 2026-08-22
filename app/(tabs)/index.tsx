import { Image } from 'expo-image';
import { useState } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { FoundationSection } from '@/components/foundation/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Chip } from '@/components/ui/chip';
import { Screen } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';

const DEMO_IMAGE =
  'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80';

const COLOR_SWATCHES = [
  { name: 'Background', className: 'bg-background dark:bg-background-dark' },
  { name: 'Card', className: 'bg-card dark:bg-card-dark' },
  { name: 'Accent', className: 'bg-accent dark:bg-accent-dark' },
  { name: 'Primary', className: 'bg-primary dark:bg-primary-dark' },
] as const;

export default function HomeScreen() {
  const [selectedChip, setSelectedChip] = useState('All');

  return (
    <Screen>
      <Animated.View entering={FadeInDown.duration(500)}>
        <Text variant="label">Good morning</Text>
        <Text variant="h1" className="mt-1">
          Recipe Explorer
        </Text>
        <Text variant="muted" className="mt-2">
          Foundation starter — typography, theme, and components are ready.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(100).duration(500)} className="mt-8">
        <FoundationSection title="Featured card">
          <View className="overflow-hidden rounded-3xl">
            <Image
              source={{ uri: DEMO_IMAGE }}
              style={{ width: '100%', height: 200 }}
              contentFit="cover"
              transition={300}
            />
            <View className="absolute left-4 top-4">
              <Badge label="Foundation" variant="accent" />
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-black/40 p-4">
              <Text className="font-serif text-xl text-white">Design system preview</Text>
              <Text className="mt-1 font-sans text-sm text-white/80">
                Expo Image · NativeWind · Reanimated
              </Text>
            </View>
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(500)}>
        <FoundationSection title="Typography">
          <View className="gap-2 rounded-3xl bg-card p-4 dark:bg-card-dark">
            <Text variant="h2">Playfair Display — Heading</Text>
            <Text variant="body">Inter — Body text for labels and descriptions.</Text>
            <Text variant="muted">Muted text for secondary information.</Text>
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <FoundationSection title="Semantic colors">
          <View className="flex-row flex-wrap gap-3">
            {COLOR_SWATCHES.map((swatch) => (
              <View key={swatch.name} className="items-center">
                <View className={`h-12 w-12 rounded-2xl ${swatch.className}`} />
                <Text variant="caption" className="mt-1.5">
                  {swatch.name}
                </Text>
              </View>
            ))}
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400).duration(500)}>
        <FoundationSection title="Chips">
          <View className="flex-row flex-wrap gap-2">
            {['All', 'Breakfast', 'Italian', 'Healthy'].map((chip) => (
              <Chip
                key={chip}
                label={chip}
                selected={selectedChip === chip}
                onPress={() => setSelectedChip(chip)}
              />
            ))}
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500).duration(500)}>
        <FoundationSection title="Buttons">
          <View className="gap-3">
            <Button label="Primary action" variant="primary" />
            <Button label="Accent action" variant="accent" />
            <Button label="Outline action" variant="outline" />
          </View>
        </FoundationSection>
      </Animated.View>
    </Screen>
  );
}
