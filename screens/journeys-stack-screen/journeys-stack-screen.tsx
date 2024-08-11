import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { CreateJourneyScreen, JourneysScreen } from '@screens/';
import { JourneysStackParams } from '@type/';

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
