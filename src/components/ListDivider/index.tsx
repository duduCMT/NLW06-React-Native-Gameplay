import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
  width?: number
}

export default function ListDivider({width = 100}: Props){
  return (
    <View style={[styles.container, {width: `${width}%`}]} />
  )
}