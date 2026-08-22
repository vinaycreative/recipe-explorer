import { type ReactNode } from 'react';
import { Pressable, View } from 'react-native';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  className?: string;
  children?: ReactNode;
};

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <View className={cn('mb-4 flex-row items-end justify-between', className)}>
      <Text variant="h2">{title}</Text>
      {actionLabel && onActionPress ? (
        <Pressable onPress={onActionPress} hitSlop={8}>
          <Text className="font-sans-medium text-sm text-accent dark:text-accent-dark">{actionLabel}</Text>
        </Pressable>
      ) : (
        children
      )}
    </View>
  );
}
