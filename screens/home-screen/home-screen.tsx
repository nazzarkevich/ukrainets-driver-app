import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import { useRootStore } from '../../components';

export const HomeScreen = observer(function HomeScreen() {
  const { clientsStore } = useRootStore();

  async function fetchData(): Promise<void> {
    await clientsStore.fetchClients();
  }

  async function setClient(): Promise<void> {
    const client = {
      firstName: 'Nick',
      lastName: 'Poll',
      phone: '99282882199912',
      isBlocked: false,
      comment: null,
      address: {
        apartment: '1',
        building: '10',
        city: 'Ternopil',
        country: 'Ukraine',
        postCode: '76000',
        street: 'Kyivska',
      },
    };

    await clientsStore.addClient(client);
  }

  useEffect(() => {
    fetchData();

    // setClient();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
});

const styles = StyleSheet.create({});
