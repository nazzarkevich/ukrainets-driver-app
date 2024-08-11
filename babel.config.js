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
            '@assets': './assets/',
            '@components': './components/',
            '@hooks': './hooks/',
            '@type': './type/',
            '@stores': './stores/',
            '@services': './services/',
            '@navigation': './navigation/',
            '@screens': './screens/',
            '@constants': './constants/',
          },
        },
      ],
    ],
  };
};
