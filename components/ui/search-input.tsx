import { Search, X } from 'lucide-react-native';
import { Pressable, TextInput, View, useColorScheme } from 'react-native';

import { cn } from '@/lib/cn';
import { colors } from '@/theme/colors';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  className?: string;
};

export function SearchInput({
  value,
  onChangeText,
  placeholder = 'Search...',
  className,
}: SearchInputProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const palette = colors[colorScheme];

  return (
    <View
      className={cn(
        'flex-row items-center rounded-full bg-card px-4 py-3.5 dark:bg-card-dark',
        className,
      )}>
      <Search size={20} color={palette.foregroundMuted} strokeWidth={2} />
      <TextInput
        className="ml-3 flex-1 font-sans text-base text-foreground dark:text-foreground-dark"
        placeholder={placeholder}
        placeholderTextColor={palette.foregroundMuted}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
      />
      {value.length > 0 ? (
        <Pressable onPress={() => onChangeText('')} hitSlop={8}>
          <X size={18} color={palette.foregroundMuted} strokeWidth={2} />
        </Pressable>
      ) : null}
    </View>
  );
}
