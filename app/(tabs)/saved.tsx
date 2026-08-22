import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background dark:bg-background-dark">
      <View className="flex-1 px-6 pt-4">
        <Text className="font-serif text-3xl text-foreground dark:text-foreground-dark">
          Saved Recipes
        </Text>
        <Text className="mt-2 font-sans text-foreground-muted dark:text-foreground-muted-dark">
          Saved recipes screen placeholder.
        </Text>
      </View>
    </SafeAreaView>
  );
}
