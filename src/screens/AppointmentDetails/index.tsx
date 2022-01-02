import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'

//Apenas para teste
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons' 

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {
  
}

export default function AppointmentDetails({}: Props){
  return (
    <View style={styles.container}>
      <Header title='Titulo' action={
        <RectButton style={{padding: 8,}}>
          <Icon 
            name="share"
            size={24}
            color={theme.colors.primary}
          />
        </RectButton>   
      } />
    </View>
  )
}