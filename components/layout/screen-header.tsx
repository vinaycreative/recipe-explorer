import { type ReactNode } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { Padded } from '@/components/layout/padded';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  delay?: number;
  animated?: boolean;
  className?: string;
  children?: ReactNode;
};

export function ScreenHeader({
  title,
  subtitle,
  delay = 0,
  animated = true,
  className,
  children,
}: ScreenHeaderProps) {
  const content = (
    <Padded className={className}>
      <Text variant="h1">{title}</Text>
      {subtitle ? (
        <Text variant="muted" className="mt-2">
          {subtitle}
        </Text>
      ) : null}
      {children}
    </Padded>
  );

  if (!animated) {
    return content;
  }

  return <Animated.View entering={FadeInDown.delay(delay).duration(400)}>{content}</Animated.View>;
}
