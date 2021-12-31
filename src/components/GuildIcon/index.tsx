import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

type Props = {

}

export default function GuildIcon({}: Props) {
  return (
    <Image
      source={{uri: 'https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC'}}
      resizeMode='cover'
      style={styles.container} 
    />
  )
}