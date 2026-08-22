import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { Bookmark, Home, Search, User } from 'lucide-react-native';
import { Pressable, StyleSheet, View, useColorScheme } from 'react-native';
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
  const borderColor = colorScheme === 'dark' ? 'rgba(61, 56, 48, 0.5)' : 'rgba(232, 226, 217, 0.5)';

  return (
    <View
      pointerEvents="box-none"
      style={[styles.wrapper, { paddingBottom: insets.bottom + 12 }]}>
      <View style={styles.shadow}>
        <BlurView
          intensity={colorScheme === 'dark' ? 60 : 80}
          tint={colorScheme === 'dark' ? 'dark' : 'light'}
          style={[styles.blur, { borderColor }]}>
          <View style={styles.row}>
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
                  style={[styles.tab, isFocused && { backgroundColor: `${palette.accent}18` }]}
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
          </View>
        </BlurView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  shadow: {
    borderRadius: 9999,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  blur: {
    borderRadius: 9999,
    overflow: 'hidden',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
