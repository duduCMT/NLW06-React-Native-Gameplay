import React from 'react'
import AppLoading from 'expo-app-loading'

//Importação de Fontes
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import SingIn from './src/screens/SingIn'
import { StatusBar } from 'react-native'
import Background from './src/components/Background'
import Home from './src/screens/Home'

export default function App() {
  //Carregamento de Fontes
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </Background>
  );
}
