import { Check, Monitor, Moon, Sun } from 'lucide-react-native';
import { Pressable, View, useColorScheme } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { FoundationSection } from '@/components/foundation/section';
import { Screen } from '@/components/ui/screen';
import { Text } from '@/components/ui/text';
import { type ThemeMode, useThemeStore } from '@/lib/theme-store';
import { colors } from '@/theme/colors';

const THEME_OPTIONS: { mode: ThemeMode; label: string; Icon: typeof Sun }[] = [
  { mode: 'system', label: 'System', Icon: Monitor },
  { mode: 'light', label: 'Light', Icon: Sun },
  { mode: 'dark', label: 'Dark', Icon: Moon },
];

const FOUNDATION_ITEMS = [
  'NativeWind + semantic tokens',
  'Playfair Display + Inter fonts',
  'TanStack Query + Axios',
  'Zustand + MMKV ready',
  'FlashList + Bottom Sheet',
  'Floating glass tab bar',
] as const;

export default function ProfileScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];
  const { mode, setMode } = useThemeStore();

  return (
    <Screen>
      <Animated.View entering={FadeInDown.duration(400)}>
        <Text variant="h1">Profile</Text>
        <Text variant="muted" className="mt-2">
          Theme preferences and foundation status.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(100).duration(400)} className="mt-8">
        <FoundationSection title="Appearance">
          <View className="flex-row gap-2">
            {THEME_OPTIONS.map(({ mode: optionMode, label, Icon }) => {
              const isSelected = mode === optionMode;

              return (
                <Pressable
                  key={optionMode}
                  className={`flex-1 items-center rounded-3xl border px-3 py-4 ${
                    isSelected
                      ? 'border-accent bg-card dark:border-accent-dark dark:bg-card-dark'
                      : 'border-border bg-card/50 dark:border-border-dark dark:bg-card-dark/50'
                  }`}
                  onPress={() => setMode(optionMode)}>
                  <Icon
                    size={22}
                    color={isSelected ? palette.accent : palette.foregroundMuted}
                    strokeWidth={2}
                  />
                  <Text
                    className={`mt-2 font-sans-medium text-sm ${
                      isSelected
                        ? 'text-accent dark:text-accent-dark'
                        : 'text-foreground-muted dark:text-foreground-muted-dark'
                    }`}>
                    {label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200).duration(400)}>
        <FoundationSection title="Foundation checklist">
          <View className="gap-3 rounded-3xl bg-card p-4 dark:bg-card-dark">
            {FOUNDATION_ITEMS.map((item) => (
              <View key={item} className="flex-row items-center gap-3">
                <View className="h-6 w-6 items-center justify-center rounded-full bg-primary dark:bg-primary-dark">
                  <Check size={14} color="#FFFFFF" strokeWidth={3} />
                </View>
                <Text variant="body">{item}</Text>
              </View>
            ))}
          </View>
        </FoundationSection>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300).duration(400)}>
        <View className="items-center rounded-3xl border border-border bg-card/50 py-6 dark:border-border-dark dark:bg-card-dark/50">
          <Text variant="label">Status</Text>
          <Text variant="h2" className="mt-2 text-primary dark:text-primary-dark">
            Foundation Ready
          </Text>
          <Text variant="caption" className="mt-2">
            Expo SDK 54 · React Native 0.81
          </Text>
        </View>
      </Animated.View>
    </Screen>
  );
}
