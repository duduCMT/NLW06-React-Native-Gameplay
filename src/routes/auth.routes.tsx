import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import SingIn from '../screens/SingIn'
import AppointmentDetails from '../screens/AppointmentDetails';

export type RootStackParamList = {
  Home: undefined;
  SingIn: undefined;
  AppointmentDetails: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function AuthRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='SingIn'
        component={SingIn}
      />
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='AppointmentDetails'
        component={AppointmentDetails}
      />
    </Navigator>
  );
}