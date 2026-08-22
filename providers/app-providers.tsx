import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { QueryClientProvider } from '@tanstack/react-query';
import { HeroUINativeProvider } from 'heroui-native';
import type { ReactNode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { StorageHydrator } from '@/components/foundation/storage-hydrator';
import { queryClient } from '@/lib/query-client';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <HeroUINativeProvider config={{ devInfo: { stylingPrinciples: false } }}>
        <QueryClientProvider client={queryClient}>
          <BottomSheetModalProvider>
            <StorageHydrator />
            {children}
          </BottomSheetModalProvider>
        </QueryClientProvider>
      </HeroUINativeProvider>
    </GestureHandlerRootView>
  );
}
