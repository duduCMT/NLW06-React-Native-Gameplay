import React from 'react'
import { View, Text } from 'react-native'
import { theme } from '../../global/styles/theme'
import Button from '../Button'
import { styles } from './styles'

type Props = {
  
}

export default function SingOut({}: Props){
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Deseja sair do </Text>
        <Text style={[styles.title, styles.titleAppName]}>Game</Text>
        <Text style={[styles.title, styles.titleAppName, {color: theme.colors.primary}]}>Play</Text>
      </View>
      <View style={styles.buttons}>
        <Button title='Não' type='secondary' conteinerStyle={{marginRight: 8}}/>
        <Button title='Sim'/>
      </View>
    </View>
  )
}