import React from 'react'
import { Text, Image, View, } from 'react-native'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export default function ButtonAdd({...rest}: RectButtonProps){
  return (
    <RectButton 
      style={styles.container} 
      {...rest}
    >
      <Icon 
        name='plus'
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}