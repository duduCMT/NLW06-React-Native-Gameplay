import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import AppointmentDetails from '../screens/AppointmentDetails';
import AppointmentCreate from '../screens/AppointmentCreate';
import { AppointmentProps } from '../components/Appointment';

export type RootStackParamList = {
  Home: undefined;
  AppointmentDetails: {
    guildSelected: AppointmentProps
  };
  AppointmentCreate: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>()

export default function AppRoutes(){
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