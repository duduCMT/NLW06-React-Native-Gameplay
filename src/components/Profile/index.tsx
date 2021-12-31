import React from 'react'
import { Text, View } from 'react-native'
import Avatar from '../Avatar'
import { styles } from './styles'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage='https://github.com/duduCMT.png' />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Eduardo</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória!</Text>
      </View>
    </View>
  )
}