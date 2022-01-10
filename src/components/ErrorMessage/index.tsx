import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import Icon from '@expo/vector-icons/MaterialIcons';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string,
  message: string,
}

export default function ErrorMessage({title, message}: Props){
  return (

    <View style={styles.container}>
      <Icon name='warning' color={theme.colors.primary} size={96} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}