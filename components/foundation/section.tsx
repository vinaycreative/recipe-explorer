import { type ReactNode } from 'react';
import { View } from 'react-native';

import { Padded } from '@/components/layout/padded';
import { SectionHeader } from '@/components/layout/section-header';
import { cn } from '@/lib/cn';

type FoundationSectionProps = {
  title: string;
  children: ReactNode;
  className?: string;
  paddedContent?: boolean;
};

export function FoundationSection({
  title,
  children,
  className,
  paddedContent = true,
}: FoundationSectionProps) {
  return (
    <View className={cn('mb-8', className)}>
      <Padded>
        <SectionHeader title={title} />
      </Padded>
      <View className={cn(paddedContent && 'px-6')}>{children}</View>
    </View>
  );
}
