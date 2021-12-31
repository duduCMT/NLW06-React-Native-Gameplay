import React from 'react'
import { Text, View } from 'react-native'
import { RectButtonProps, RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { SvgProps } from 'react-native-svg'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = RectButtonProps & {
  title: string,
  icon: React.FC<SvgProps>,
  checked?: boolean,
}

export default function Category({title, icon: Icon, checked = false, ...rest}: Props){
  const {secondary50, secondary100} = theme.colors
 
  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[secondary50, secondary100]}
        style={styles.container}
      >
        <View style={[styles.content, {opacity: checked ? 1 : 0.4}]}>
          <View style={[styles.defaultCheck , checked ? styles.checked : styles.check]} />
          <Icon 
            width={48} 
            height={48} 
          />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}