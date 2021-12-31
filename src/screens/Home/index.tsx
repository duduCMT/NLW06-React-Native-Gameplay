import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'

export default function Home(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
    </View>   
  )
}