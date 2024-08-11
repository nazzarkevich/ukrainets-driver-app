module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'nativewind/babel',
      ['react-native-reanimated/plugin'],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@assets': './src/assets/',
            '@components': './src/components/',
            '@hooks': './src/hooks/',
            '@type': './src/type/',
            '@stores': './src/stores/',
            '@services': './src/services/',
            '@navigation': './src/navigation/',
            '@screens': './src/screens/',
            '@constants': './src/constants/',
          },
        },
      ],
    ],
  };
};
