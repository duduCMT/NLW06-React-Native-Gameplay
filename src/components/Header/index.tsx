import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons' 

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string,
  action?: ReactNode
}

export default function Header({title, action}: Props){
  const { colors } = theme
  const navigation = useNavigation()

  function handleGoBack(){
    navigation.goBack()
  }

  return (
    <LinearGradient 
      style={styles.container}
      colors={[colors.secondary100, colors.secondary40,]}
    >
      <View style={styles.content}>
        <RectButton 
          style={styles.backButton}
          onPress={handleGoBack}
        >
          <Icon 
            name="arrow-back"
            size={24}
            color={colors.heading}
          />
        </RectButton>

        <Text style={styles.title}>{title}</Text>

        { action && <View>{action}</View> }
      </View>
    </LinearGradient>
  )
}