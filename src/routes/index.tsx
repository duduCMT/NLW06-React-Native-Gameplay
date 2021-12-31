import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import AuthRoutes from './auth.routes'
import Background from '../components/Background'
import { StatusBar } from 'react-native'

export default function Routes() {
  return (
    <NavigationContainer theme={{...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
      }
    }}>
      <AuthRoutes />
    </NavigationContainer>
  )
}