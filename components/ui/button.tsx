import * as Haptics from 'expo-haptics';
import { Pressable, type PressableProps } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ButtonVariant = 'primary' | 'accent' | 'outline' | 'ghost';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary dark:bg-primary-dark',
  accent: 'bg-accent dark:bg-accent-dark',
  outline: 'border border-border dark:border-border-dark bg-transparent',
  ghost: 'bg-transparent',
};

const labelClasses: Record<ButtonVariant, string> = {
  primary: 'text-white',
  accent: 'text-white',
  outline: 'text-foreground dark:text-foreground-dark',
  ghost: 'text-accent dark:text-accent-dark',
};

type ButtonProps = PressableProps & {
  label: string;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ label, variant = 'primary', className, onPress, ...props }: ButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      className={cn('items-center justify-center rounded-full px-6 py-3.5', variantClasses[variant], className)}
      style={animatedStyle}
      onPressIn={() => {
        scale.value = withSpring(0.96, { damping: 15, stiffness: 300 });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping: 15, stiffness: 300 });
      }}
      onPress={(event) => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        onPress?.(event);
      }}
      {...props}>
      <Text className={cn('font-sans-semibold text-base', labelClasses[variant])}>{label}</Text>
    </AnimatedPressable>
  );
}
