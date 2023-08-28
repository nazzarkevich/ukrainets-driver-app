/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParams } from '../types';

export function useLinkingConfiguration(): {
  linkingConfiguration: LinkingOptions<RootStackParams>;
} {
  const prefix = Linking.createURL('/');

  const linkingConfiguration = {
    prefixes: [prefix],
    config: {
      screens: {
            TabOne: {
              screens: {
                TabOneScreen: 'one',
              },
            },
            TabTwo: {
              screens: {
                TabTwoScreen: 'two',
              },
            },
        Modal: 'modal',
        NotFound: '*',
      },
    },
  };

  return {
    linkingConfiguration,
  };
}
