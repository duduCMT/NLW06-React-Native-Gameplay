import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'
import { useAuth } from '../hooks/auth'

export default function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer theme={{...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
      }
    }}>
      { user.id ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
}