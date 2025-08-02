// babel.config.js

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@/*': './src/*',
          },
        },
      ],
      // IMPORTANT: react-native-reanimated/plugin must be the last plugin.
      'react-native-reanimated/plugin',
    ],
  };
};