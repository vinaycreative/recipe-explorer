import { type ReactNode } from 'react';
import { ScrollView, View, type ScrollViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { cn } from '@/lib/cn';

type ScreenProps = {
  children: ReactNode;
  scroll?: boolean;
  horizontalPadding?: boolean;
  className?: string;
  contentClassName?: string;
  scrollProps?: Omit<ScrollViewProps, 'children'>;
};

export function Screen({
  children,
  scroll = true,
  horizontalPadding = false,
  className,
  contentClassName,
  scrollProps,
}: ScreenProps) {
  const content = (
    <View className={cn(horizontalPadding && 'px-6', 'pb-32 pt-4', contentClassName)}>{children}</View>
  );

  return (
    <SafeAreaView className={cn('flex-1 bg-background dark:bg-background-dark', className)} edges={['top']}>
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          {...scrollProps}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}
