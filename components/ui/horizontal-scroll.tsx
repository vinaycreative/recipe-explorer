import { ScrollView, type ScrollViewProps, type StyleProp, type ViewStyle } from 'react-native';

import { SCREEN_PADDING_X } from '@/constants/layout';

type HorizontalScrollProps = ScrollViewProps & {
  gap?: number;
  contentContainerClassName?: string;
};

export function HorizontalScroll({
  children,
  gap = 12,
  contentContainerStyle,
  ...props
}: HorizontalScrollProps) {
  const paddedContentStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: SCREEN_PADDING_X,
    gap,
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[paddedContentStyle, contentContainerStyle]}
      {...props}>
      {children}
    </ScrollView>
  );
}
