import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'

import { styles } from './styles'

type Props = {
  
}

export default function AppointmentDetails({}: Props){
  return (
    <View style={styles.container}>
      <Header title='Titulo' />
    </View>
  )
}