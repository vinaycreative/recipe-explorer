import { Text as RNText, type TextProps } from 'react-native';

import { cn } from '@/lib/cn';

type TextVariant = 'h1' | 'h2' | 'body' | 'muted' | 'label' | 'caption';

const variantClasses: Record<TextVariant, string> = {
  h1: 'font-serif text-3xl text-foreground dark:text-foreground-dark',
  h2: 'font-serif-semibold text-xl text-foreground dark:text-foreground-dark',
  body: 'font-sans text-base text-foreground dark:text-foreground-dark',
  muted: 'font-sans text-sm text-foreground-muted dark:text-foreground-muted-dark',
  label:
    'font-sans-medium text-xs uppercase tracking-widest text-foreground-muted dark:text-foreground-muted-dark',
  caption: 'font-sans text-xs text-foreground-muted dark:text-foreground-muted-dark',
};

type AppTextProps = TextProps & {
  variant?: TextVariant;
};

export function Text({ variant = 'body', className, ...props }: AppTextProps) {
  return <RNText className={cn(variantClasses[variant], className)} {...props} />;
}
