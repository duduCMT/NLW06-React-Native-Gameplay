import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import AppointmentDetails from '../screens/AppointmentDetails';
import AppointmentCreate from '../screens/AppointmentCreate';

export type RootStackParamList = {
  Home: undefined;
  AppointmentDetails: undefined;
  AppointmentCreate: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function AuthRoutes(){
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='Home'
        component={Home}
      />
      <Screen 
        name='AppointmentDetails'
        component={AppointmentDetails}
      />
      <Screen 
        name='AppointmentCreate'
        component={AppointmentCreate}
      />
    </Navigator>
  );
}