import { useEffect } from 'react';

import { useProfileStore } from '@/features/profile/store';
import { useRecentlyViewedStore } from '@/features/recipes/store/recently-viewed';
import { useSavedStore } from '@/features/saved/store';

export function StorageHydrator() {
  useEffect(() => {
    void Promise.all([
      useProfileStore.getState().hydrate(),
      useSavedStore.getState().hydrate(),
      useRecentlyViewedStore.getState().hydrate(),
    ]);
  }, []);

  return null;
}
