import React, { useState } from 'react'
import { Text, View, ViewProps, ViewPropTypes } from 'react-native'
import { styles } from './styles'

type Props = ViewProps & {
  title: string,
  subtitle: string,
}

export default function ListHeader({title, subtitle, style, ...rest}: Props){
  return (
    <View style={[styles.container, style]} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>   
  )
}