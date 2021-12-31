import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import SingIn from '../screens/SingIn'

export type RootStackParamList = {
  Home: undefined;
  SingIn: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function AuthRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false, }}>
      <Screen 
        name='SingIn'
        component={SingIn}
      />
      <Screen 
        name='Home'
        component={Home}
      />
    </Navigator>
  );
}