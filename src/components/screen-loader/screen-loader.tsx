import { StyleSheet, View } from 'react-native';

import { Loader } from '../loader';
import { ScreenContainer } from '../screen-container';

export const ScreenLoader = () => {
  return (
    <ScreenContainer>
      <View style={styles.screen}>
        <Loader />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 80,
    columnGap: 16,
  },
});
