import { type ReactNode } from 'react';
import { View, type ViewProps } from 'react-native';

import { cn } from '@/lib/cn';

type PaddedProps = ViewProps & {
  children: ReactNode;
};

export function Padded({ children, className, ...props }: PaddedProps) {
  return (
    <View className={cn('px-6', className)} {...props}>
      {children}
    </View>
  );
}
