import { type ReactNode } from 'react';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type FoundationSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function FoundationSection({ title, children, className }: FoundationSectionProps) {
  return (
    <View className={cn('mb-8', className)}>
      <Text variant="label" className="mb-3">
        {title}
      </Text>
      {children}
    </View>
  );
}
