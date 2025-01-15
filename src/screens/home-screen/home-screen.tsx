import { Divider } from '@/components/ui/divider';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';

import {
  ActiveJourneySection,
  LastJourneysSection,
  ScreenContainer,
  ScreenLoader,
  View,
  useRootStore,
} from 'src/components';

import { RootDrawerScreenProps } from 'src/types';

export const HomeScreen = observer(function HomeScreen({
  navigation,
}: RootDrawerScreenProps<'Home'>) {
  const { journeyStore, journeysStore, clientsStore, parcelsStore, userStore } =
    useRootStore();

  useEffect(() => {
    parcelsStore.fetchParcels();
    journeyStore.fetchActiveJourney();
    clientsStore.fetchClients();
    journeysStore.fetchJourneys();
    // userStore.fetchUserDetails();
  }, []);

  if (journeyStore.isJourneyLoading) {
    return <ScreenLoader />;
  }

  return (
    <ScreenContainer>
      <Divider className="bg-gray-300" />

      <View style={styles.homeScreen}>
        <ActiveJourneySection />
        <LastJourneysSection />
        {/* <NewClientsSection />
        <LastParcelsSection />
        <LastJourneysSection /> */}
      </View>
    </ScreenContainer>
  );
});

const styles = StyleSheet.create({
  homeScreen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 25,
    columnGap: 16,
  },
});
