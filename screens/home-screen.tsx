import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { firebaseService } from '../services';
import { db } from '../firebase';
import { firestoreConst } from '../constants';
import { ClientType } from '../types';

export const HomeScreen = () => {
  async function fetchClients() {
    const clients: ClientType[] = [];

    // await addDoc(collection(db, firestoreConst.clients), {
    //   firstName: 'Ryu',
    //   lastName: 'Tee',
    //   phone: '922748111',
    //   isBlocked: false,
    //   comment: '',
    //   address: {
    //     apartment: '2',
    //     building: '55',
    //     city: 'Lviv',
    //     country: 'Ukraine',
    //     postCode: '79000',
    //     street: 'Chornovola',
    //   },
    // });

    const querySnapshot = await getDocs(collection(db, firestoreConst.clients));

    querySnapshot.forEach((item) => {
      clients.push(item.data() as ClientType);
      console.log('item: ', item.data());
    });

    return clients;
  }
  useEffect(() => {
    console.log('firebaseService: ', firebaseService.currentUser?.uid);
    async function getData() {
      const a = await fetchClients();

      return a;
    }

    const clients = getData();

    console.log('clients: ', clients);
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
