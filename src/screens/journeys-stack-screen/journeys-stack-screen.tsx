import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { CreateJourneyScreen, JourneysScreen } from 'src/screens';
import { JourneysStackParams } from 'src/types';

const JourneysStack = createNativeStackNavigator<JourneysStackParams>();

export function JourneyStackScreen() {
  return (
    <JourneysStack.Navigator
      initialRouteName="Journeys"
      screenOptions={{ headerShown: false }}>
      <JourneysStack.Screen name="Journeys" component={JourneysScreen} />
      <JourneysStack.Screen
        name="CreateJourneyScreen"
        component={CreateJourneyScreen}
      />
    </JourneysStack.Navigator>
  );
}
