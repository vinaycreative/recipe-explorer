import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';
import type { MealCategory } from '@/features/recipes/types';

type CategoryCardProps = {
  category: MealCategory;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryCard({ category, selected = false, onPress }: CategoryCardProps) {
  return (
    <Pressable
      className="mr-3 items-center"
      style={{ width: 108 }}
      onPress={() => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.selectionAsync();
        }
        onPress?.();
      }}>
      <View
        className={cn(
          'overflow-hidden rounded-3xl',
          selected && 'border-2 border-primary dark:border-primary-dark',
        )}>
        <Image
          source={{ uri: category.thumbnail }}
          style={{ width: 104, height: 104 }}
          contentFit="cover"
          transition={250}
        />
      </View>
      <Text
        className={cn(
          'mt-2 text-center font-sans-medium text-sm',
          selected ? 'text-primary dark:text-primary-dark' : 'text-foreground dark:text-foreground-dark',
        )}
        numberOfLines={1}>
        {category.name}
      </Text>
    </Pressable>
  );
}
