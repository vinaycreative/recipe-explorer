import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, View } from 'react-native';

import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import { useProfileStore } from '@/features/profile/store';
import { getTimeGreeting } from '@/features/recipes/utils/greeting';

export function HomeHeader() {
  const router = useRouter();
  const displayName = useProfileStore((state) => state.displayName);
  const avatarUri = useProfileStore((state) => state.avatarUri);

  return (
    <View className="mb-8">
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-4">
          <Text variant="label">{getTimeGreeting()},</Text>
          <Text variant="h1" className="mt-1">
            {displayName}
          </Text>
        </View>

        <Pressable onPress={() => router.push('/profile')} accessibilityRole="button">
          {avatarUri ? (
            <Image
              source={{ uri: avatarUri }}
              style={{ width: 48, height: 48, borderRadius: 24 }}
              contentFit="cover"
              transition={200}
            />
          ) : (
            <View className="h-12 w-12 items-center justify-center rounded-full bg-primary dark:bg-primary-dark">
              <Text className="font-sans-semibold text-lg text-white">
                {displayName.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}
        </Pressable>
      </View>

      <Pressable className="mt-6" onPress={() => router.push('/search')}>
        <View pointerEvents="none">
          <SearchInput value="" onChangeText={() => {}} placeholder="What are you craving?" />
        </View>
      </Pressable>
    </View>
  );
}
