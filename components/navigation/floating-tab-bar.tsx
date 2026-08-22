import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Bookmark, Home, Search, User } from 'lucide-react-native';
import { Pressable, View, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/theme/colors';

const TAB_ICONS = {
  index: Home,
  search: Search,
  saved: Bookmark,
  profile: User,
} as const;

type TabRouteName = keyof typeof TAB_ICONS;

export function FloatingTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];

  return (
    <View className="absolute bottom-0 left-0 right-0 items-center" style={{ paddingBottom: insets.bottom + 12 }}>
      <View className="overflow-hidden rounded-full shadow-lg" style={{ shadowColor: '#000', shadowOpacity: 0.12, shadowRadius: 16, elevation: 8 }}>
        <BlurView
          intensity={colorScheme === 'dark' ? 60 : 80}
          tint={colorScheme === 'dark' ? 'dark' : 'light'}
          className="flex-row items-center rounded-full border border-border/50 px-2 py-2 dark:border-border-dark/50">
          {state.routes.map((route, index) => {
            if (route.name === 'explore') {
              return null;
            }

            const isFocused = state.index === index;
            const Icon = TAB_ICONS[route.name as TabRouteName];

            if (!Icon) {
              return null;
            }

            const iconColor = isFocused ? palette.accent : palette.foregroundMuted;

            return (
              <Pressable
                key={route.key}
                className="items-center justify-center rounded-full px-5 py-3"
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    if (process.env.EXPO_OS === 'ios') {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }
                    navigation.navigate(route.name, route.params);
                  }
                }}>
                <Icon size={24} color={iconColor} strokeWidth={isFocused ? 2.5 : 2} />
              </Pressable>
            );
          })}
        </BlurView>
      </View>
    </View>
  );
}
