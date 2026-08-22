import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_PREFIX = 'recipe-explorer:';

function storageKey(key: string) {
  return `${STORAGE_PREFIX}${key}`;
}

export async function readStorage(key: string): Promise<string | null> {
  return AsyncStorage.getItem(storageKey(key));
}

export async function writeStorage(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(storageKey(key), value);
}

export async function readStorageJson<T>(key: string): Promise<T | null> {
  const raw = await readStorage(key);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function writeStorageJson(key: string, value: unknown): Promise<void> {
  await writeStorage(key, JSON.stringify(value));
}

export const secureStorageKeys = {
  // Reserved for sensitive credentials when needed.
} as const;
