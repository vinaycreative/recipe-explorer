const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

/**
 * TanStack Query v5 ships a "modern" build that uses native private class fields.
 * Hermes in Expo Go cannot parse `#field` syntax when those files are bundled
 * without transpilation. The legacy build avoids private fields entirely.
 */
const tanstackLegacyEntries = {
  '@tanstack/react-query': path.join(
    __dirname,
    'node_modules/@tanstack/react-query/build/legacy/index.cjs',
  ),
  '@tanstack/query-core': path.join(
    __dirname,
    'node_modules/@tanstack/query-core/build/legacy/index.cjs',
  ),
};

const defaultResolveRequest = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const legacyEntry = tanstackLegacyEntries[moduleName];

  if (legacyEntry) {
    return {
      filePath: legacyEntry,
      type: 'sourceFile',
    };
  }

  if (defaultResolveRequest) {
    return defaultResolveRequest(context, moduleName, platform);
  }

  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './global.css' });
