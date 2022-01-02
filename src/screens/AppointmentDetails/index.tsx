import React from 'react'
import { View, Text, ImageBackground } from 'react-native'

//Apenas para teste
import { FlatList, RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons'

import Header from '../../components/Header'
import BannerImg from '../../assets/banner.png'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import ListHeader from '../../components/ListHeader'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'

const members = [
  {
    id: '1',
    username: 'Eduardo',
    avatar_url: 'https://github.com/duduCMT.png',
    status: 'online',
  },
  {
    id: '2',
    username: 'Tiago Rodrigo',
    avatar_url: 'https://static.diverseui.com/anders.png',
    status: 'online',
  },
  {
    id: '3',
    username: 'Kaio Junior',
    avatar_url: 'https://static.diverseui.com/88b95197-fd1e-4e11-8793-2903a5cfd06e-10584053_10153749310922416_3125632463004974493_n.jpg',
    status: 'online',
  },
]

type Props = {

}

export default function AppointmentDetails({ }: Props) {
  return (
    <View style={styles.container}>
      <Header title='Detalhes' action={
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

      <ListHeader 
        title='Jogadores'
        subtitle='Total 3'
        style={styles.listHeader}
      />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={ () =>
          <ListDivider width={76} />
        }
        contentContainerStyle={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon 
          title='Entrar na partida'
        />
      </View>
      
    </View>
  )
}