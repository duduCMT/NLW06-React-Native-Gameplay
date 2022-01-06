import React from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'

import AuthRoutes from './auth.routes'
import SingInRoutes from './singin.routes'
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
      { user.id ? <AuthRoutes /> : <SingInRoutes /> }
    </NavigationContainer>
  )
}