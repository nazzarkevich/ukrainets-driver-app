import { observer } from 'mobx-react';
import React from 'react';
import { StyleSheet } from 'react-native';

import { useRootStore } from 'src/components/root-store-provider';

import { SectionTitle } from '../../section-title';
import { Text, View } from '../../themed';
import { ClientCard } from '../client-card';

export const NewClients = observer(() => {
  const { clientsStore } = useRootStore();

  if (!clientsStore.newClients) {
    return <Text>No New Clients</Text>;
  }

  return (
    <View style={styles.newClient}>
      {clientsStore.newClients.map((client) => (
        <ClientCard
          key={client.id}
          firstName={client.firstName}
          lastName={client.lastName}
          phone={client.phone}
          address={client.address}
        />
      ))}
    </View>
  );
});

export const NewClientsSection = () => {
  return (
    <View style={styles.newClientsSection}>
      <SectionTitle>Нові клієнти</SectionTitle>
      <NewClients />
    </View>
  );
};

const styles = StyleSheet.create({
  newClientsSection: {
    width: '60%',
    maxWidth: 440,
  },
  newClient: {
    gap: 25,
  },
});
