import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {
  ActiveJourneySection,
  ScreenContainer,
  Text,
  View,
  useRootStore,
} from 'components';
import { LastJourneysSection } from 'components/journey/last-journeys-section';
import { colorsConst, typographyConst } from 'consts';
import { RootStackScreenProps } from 'type';

export const HomeScreen = observer(function HomeScreen({
  navigation,
}: RootStackScreenProps<'Home'>) {
  const { journeyStore } = useRootStore();

  useEffect(() => {
    journeyStore.fetchActiveJourney();
  }, []);

  if (journeyStore.isJourneyLoading) {
    return (
      <ScreenContainer>
        <View style={styles.homeScreen}>
          <Text>LOADING...</Text>
        </View>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <View style={styles.homeScreen}>
        <ActiveJourneySection />
        <LastJourneysSection />
      </View>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 80,
    columnGap: 16,
  },
  activeJourney: {
    width: '60%',
    maxWidth: 440,
  },
  recentItems: {
    width: '40%',
  },

  journeyCard: {
    padding: 16,
    borderRadius: 14,
    gap: 12,
    backgroundColor: colorsConst.background.default,
  },
  journeyCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  journeyDestination: {
    columnGap: 5,
    maxHeight: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colorsConst.background.default,
  },
  destinationName: {
    fontWeight: 'bold',
    fontSize: typographyConst.font.l,
  },

  journeyStatus: {
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    maxWidth: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorsConst.roles.warning,
  },

  journeyDetails: {
    columnGap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  journeyDetailsTextRow: {
    gap: 6,
  },
  journeyDetailsText: {
    fontWeight: '700',
  },

  journeyLoadDetails: {
    gap: 6,
  },
  journeyLoadIndicator: {
    height: 12,
    width: '100%',
    borderRadius: 15,
    backgroundColor: 'papayawhip',
  },
});
