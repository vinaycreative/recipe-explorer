import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';

import { HorizontalScroll } from '@/components/ui/horizontal-scroll';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';
import { ingredientImageUrl } from '@/features/recipes/utils/ingredient-image';

type IngredientChipsProps = {
  ingredients: string[];
  selectedIngredient: string | null;
  onSelectIngredient: (ingredient: string) => void;
};

export function IngredientChips({
  ingredients,
  selectedIngredient,
  onSelectIngredient,
}: IngredientChipsProps) {
  return (
    <HorizontalScroll gap={8}>
      {ingredients.map((ingredient) => {
        const selected = selectedIngredient === ingredient;

        return (
          <Pressable
            key={ingredient}
            className={cn(
              'flex-row items-center rounded-full px-3 py-2',
              selected ? 'bg-primary dark:bg-primary-dark' : 'bg-card dark:bg-card-dark',
            )}
            onPress={() => {
              if (process.env.EXPO_OS === 'ios') {
                Haptics.selectionAsync();
              }
              onSelectIngredient(ingredient);
            }}>
            <Image
              source={{ uri: ingredientImageUrl(ingredient, 'small') }}
              style={{ width: 24, height: 24, borderRadius: 12 }}
              contentFit="cover"
            />
            <Text
              className={cn(
                'ml-2 font-sans-medium text-sm',
                selected ? 'text-white' : 'text-foreground dark:text-foreground-dark',
              )}>
              {ingredient}
            </Text>
          </Pressable>
        );
      })}
    </HorizontalScroll>
  );
}
