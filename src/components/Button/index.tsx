import React from 'react'
import { Text, Image, View, } from 'react-native'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: string,
}

export default function Button({title, style, ...rest }: Props){
  return (
    <RectButton 
      style={styles.container} 
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}