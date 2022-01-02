import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

//Apenas para teste
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons'

import Header from '../../components/Header'
import BannerImg from '../../assets/banner.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {

}

export default function AppointmentDetails({ }: Props) {
  return (
    <View style={styles.container}>
      <Header title='Titulo' action={
        <RectButton style={{ padding: 8, }}>
          <Icon
            name="share"
            size={24}
            color={theme.colors.primary}
          />
        </RectButton>
      } />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>League of Legends</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}