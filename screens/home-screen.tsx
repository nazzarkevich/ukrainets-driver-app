import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

import { useRootStore } from '../components';

export const HomeScreen = () => {
  const { clientsStore } = useRootStore();

  async function fetchData() {
    await clientsStore.fetchClients();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
