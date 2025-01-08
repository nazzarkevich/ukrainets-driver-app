module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
        },
      ],
      'nativewind/babel',
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      'babel-plugin-transform-typescript-metadata',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['react-native-reanimated/plugin'],
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
          root: ['./'],
          alias: {
            '@': './',
            '@assets': './src/assets/',
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
