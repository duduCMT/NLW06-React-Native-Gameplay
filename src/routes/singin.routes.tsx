import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../screens/SingIn';

export type RootStackParamList = {
  SingIn: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function SingInRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='SingIn'
        component={SingIn}
      />
    </Navigator>
  );
}