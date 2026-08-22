import { type ReactNode } from 'react';
import { View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Padded } from '@/components/layout/padded';
import { SectionHeader } from '@/components/layout/section-header';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type ScreenSectionProps = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onActionPress?: () => void;
  delay?: number;
  animated?: boolean;
  className?: string;
  paddedContent?: boolean;
  children: ReactNode;
};

export function ScreenSection({
  title,
  subtitle,
  actionLabel,
  onActionPress,
  delay = 0,
  animated = true,
  className,
  paddedContent = false,
  children,
}: ScreenSectionProps) {
  const content = (
    <>
      <Padded>
        <SectionHeader title={title} actionLabel={actionLabel} onActionPress={onActionPress} />
        {subtitle ? (
          <Text variant="muted" className="mb-4 -mt-2">
            {subtitle}
          </Text>
        ) : null}
      </Padded>
      <View className={cn(paddedContent && 'px-6')}>{children}</View>
    </>
  );

  if (!animated) {
    return <View className={cn('mb-8', className)}>{content}</View>;
  }

  return (
    <Animated.View entering={FadeInDown.delay(delay).duration(400)} className={cn('mb-8', className)}>
      {content}
    </Animated.View>
  );
}
