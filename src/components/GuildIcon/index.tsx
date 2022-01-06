import React from 'react'
import { View, Text, Image, ViewProps } from 'react-native'
import { styles } from './styles'
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = ViewProps & {
  guildId: string;
  iconId: string | null;
}

export default function GuildIcon({guildId, iconId, style, ...rest}: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png` 

  return (
    <View style={[styles.container, style]} {...rest}>
      {
        iconId ?
        <Image
          source={{uri}}
          resizeMode='cover'
          style={styles.image} 
        />
        : 
        <DiscordSvg 
          width={40}
          height={40} 
        />
      }
    </View>
  )
}