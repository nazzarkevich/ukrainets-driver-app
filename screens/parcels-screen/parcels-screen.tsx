import { StyleSheet } from 'react-native';

import { ScreenContainer, Text, StyledView } from '@components/';
import { RootStackScreenProps } from '@type/';

export function ParcelsScreen({ navigation }: RootStackScreenProps<'Parcels'>) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Parcels</Text>
      <StyledView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
