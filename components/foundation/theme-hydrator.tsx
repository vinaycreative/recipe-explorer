import { useEffect } from 'react';

import { hydrateThemePreference } from '@/lib/theme-store';

export function ThemeHydrator() {
  useEffect(() => {
    hydrateThemePreference();
  }, []);

  return null;
}
