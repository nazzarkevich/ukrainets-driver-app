import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useRootStore } from 'components/root-store-provider';

import { SectionTitle } from '../../section-title';
import { Text, View } from '../../themed';
import { ParcelCard } from '../parcel-card';

export const LastParcels = observer(() => {
  const { parcelsStore } = useRootStore();

  if (!parcelsStore.lastParcels) {
    return <Text>No Last Parcels</Text>;
  }

  return (
    <View style={styles.lastParcel}>
      {parcelsStore.lastParcels.map((parcels) => (
        <ParcelCard
          key={parcels.id}
          id={parcels.id}
          sender={parcels.sender}
          recipient={parcels.recipient}
          type={parcels.type}
          deliveryDate={parcels.deliveryDate}
        />
      ))}
    </View>
  );
});

export const LastParcelsSection = () => {
  return (
    <View style={styles.lastParcelsSection}>
      <SectionTitle>Останні посилки</SectionTitle>
      <LastParcels />
    </View>
  );
};

const styles = StyleSheet.create({
  lastParcelsSection: {
    width: '60%',
    maxWidth: 440,
  },
  lastParcel: {
    gap: 25,
  },
});
