import * as Haptics from 'expo-haptics';
import { Pressable, type PressableProps } from 'react-native';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type ChipProps = PressableProps & {
  label: string;
  selected?: boolean;
};

export function Chip({ label, selected = false, className, onPress, ...props }: ChipProps) {
  return (
    <Pressable
      className={cn(
        'rounded-full px-4 py-2.5',
        selected ? 'bg-primary dark:bg-primary-dark' : 'bg-card dark:bg-card-dark',
        className,
      )}
      onPress={(event) => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.selectionAsync();
        }
        onPress?.(event);
      }}
      {...props}>
      <Text
        className={cn(
          'font-sans-medium text-sm',
          selected ? 'text-white' : 'text-foreground dark:text-foreground-dark',
        )}>
        {label}
      </Text>
    </Pressable>
  );
}
