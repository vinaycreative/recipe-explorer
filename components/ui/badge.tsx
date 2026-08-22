import { View, type ViewProps } from 'react-native';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

type BadgeVariant = 'accent' | 'neutral';

const variantClasses: Record<BadgeVariant, string> = {
  accent: 'bg-accent dark:bg-accent-dark',
  neutral: 'bg-card dark:bg-card-dark',
};

const labelClasses: Record<BadgeVariant, string> = {
  accent: 'text-white',
  neutral: 'text-foreground dark:text-foreground-dark',
};

type BadgeProps = ViewProps & {
  label: string;
  variant?: BadgeVariant;
};

export function Badge({ label, variant = 'accent', className, ...props }: BadgeProps) {
  return (
    <View className={cn('self-start rounded-full px-3 py-1', variantClasses[variant], className)} {...props}>
      <Text className={cn('font-sans-semibold text-[10px] uppercase tracking-wider', labelClasses[variant])}>
        {label}
      </Text>
    </View>
  );
}
