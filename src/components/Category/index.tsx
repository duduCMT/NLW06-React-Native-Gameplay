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
  checked: boolean,
  hasCheckBox?: boolean,
}

export default function Category({title, icon: Icon, checked = false, hasCheckBox = false, ...rest}: Props){
  const { colors } = theme
  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[
          colors.secondary50, 
          colors.secondary70
        ]}
        style={styles.container}
      >
        <LinearGradient 
          colors={[
            checked 
              ? colors.secondary85 
              : colors.secondary50, 
            colors.secondary40 
          ]}
          style={[styles.content, {opacity: checked ? 1 : 0.5}]}
        >
          { 
            hasCheckBox &&
            <View style={[styles.defaultCheck , checked ? styles.checked : styles.check]} />
          }
          <Icon 
            width={48} 
            height={48} 
          />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}