import React from 'react'
import { Text, Image, View, ViewStyle, TouchableWithoutFeedback, } from 'react-native'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: string,
  type?: string,
  conteinerStyle?: ViewStyle 
}

export default function Button({title, type = 'primary', conteinerStyle, ...rest }: Props){
  var buttonStyle = styles.primaryButton
  var viewStyle;

  if(type === 'secondary'){
    buttonStyle = styles.secondaryButton
    viewStyle = styles.secondaryButtonView
  }

  return (
    <View style={[styles.container, viewStyle ? viewStyle : null, conteinerStyle]}>
      <RectButton 
        style={[styles.container, buttonStyle]}
        {...rest}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </RectButton>
    </View>
  )
}