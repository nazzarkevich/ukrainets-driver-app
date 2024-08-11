/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootDrawerParams } from '@type/';

export function useLinkingConfiguration(): {
  linkingConfiguration: LinkingOptions<RootDrawerParams>;
} {
  const prefix = Linking.createURL('/');

  const linkingConfiguration = {
    prefixes: [prefix],
    config: {
      screens: {
        home: '',
        Modal: 'modal',
        NotFound: '*',
      },
    },
  };

  return {
    linkingConfiguration,
  };
}
