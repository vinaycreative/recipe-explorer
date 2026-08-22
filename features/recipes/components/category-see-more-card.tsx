import * as Haptics from 'expo-haptics';
import { ArrowRight } from 'lucide-react-native';
import { Pressable, View, useColorScheme } from 'react-native';

import { Text } from '@/components/ui/text';
import { colors } from '@/theme/colors';

type CategorySeeMoreCardProps = {
  categoryName: string;
  onPress: () => void;
};

export function CategorySeeMoreCard({ categoryName, onPress }: CategorySeeMoreCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];

  return (
    <Pressable
      className="items-center"
      style={{ width: 108 }}
      onPress={() => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.selectionAsync();
        }
        onPress();
      }}>
      <View className="h-[104px] w-[104px] items-center justify-center rounded-3xl border border-dashed border-border bg-card px-2 dark:border-border-dark dark:bg-card-dark">
        <ArrowRight size={22} color={palette.accent} strokeWidth={2} />
        <Text className="mt-2 text-center font-sans-semibold text-sm text-accent dark:text-accent-dark">
          See More
        </Text>
        <Text variant="caption" className="mt-1 text-center" numberOfLines={2}>
          {categoryName}
        </Text>
      </View>
    </Pressable>
  );
}
