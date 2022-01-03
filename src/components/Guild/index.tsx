import React from 'react'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import GuildIcon from '../GuildIcon'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export default function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      {...rest}
    >
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>

        </View>

      </View>
      <Icon
        name='chevron-right'
        color={theme.colors.heading}
        size={24}
      />
    </TouchableOpacity>
  )
}