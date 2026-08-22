import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'recipe-explorer',
});

export const secureStorageKeys = {
  // Reserved for sensitive credentials when needed.
} as const;
