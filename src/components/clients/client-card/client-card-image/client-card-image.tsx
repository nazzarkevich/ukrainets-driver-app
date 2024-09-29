// import { Avatar } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from 'src/components/themed';

export const ClientCardImage = () => {
  return (
    <View style={styles.clientImage}>
      {/* <Avatar
        size="large"
        source={require('../../../../assets/images/user-avatar.png')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  clientImage: {
    justifyContent: 'center',
  },
});
