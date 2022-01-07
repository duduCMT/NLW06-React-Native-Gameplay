import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Alert, Share, Platform } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { FlatList, RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons'
import * as Linking from 'expo-linking'

import BannerImg from '../../assets/banner.png'

import { AppointmentProps } from '../../components/Appointment'
import { MemberProps } from '../../components/Member'

import Header from '../../components/Header'
import ListHeader from '../../components/ListHeader'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'

import { api } from '../../services/api'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import Load from '../../components/Load'


type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}

type Props = {

}

export default function AppointmentDetails({ }: Props) {
  const route = useRoute()
  const { guildSelected } = route.params as Params
  
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
  const [loading, setLoading] = useState(true)

  async function fetchGuildWidget() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
      setWidget(response.data)
    } catch {
      Alert.alert('Membros Indisponíveis', 'Verifique as configurações do seervidor. Será que o Widget está habilitado?')
    } finally {
      setLoading(false)
    }
  }

  function handleShareInvitation(){
    const message = Platform.OS === 'ios' 
      ? `Juste-se a ${guildSelected.guild.name}`
      : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite
    })
  }

  function handleOpenGuild(){
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildWidget()    
  }, [])

  return (
    <View style={styles.container}>
      <Header title='Detalhes' action={
        guildSelected.guild.owner &&
        <RectButton style={{ padding: 8, }} onPress={handleShareInvitation}>
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
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      { loading ? <Load /> :
        <>
          { 
            widget.members ?
            <ListHeader 
              title='Jogadores'
              subtitle={`Total ${widget.members.length}`}
              style={styles.listHeader}
            />
            : null
          }
          
          <FlatList 
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <Member data={item} />
            )}
            ItemSeparatorComponent={ () =>
              <ListDivider width={76} />
            }
            contentContainerStyle={styles.members}
          />
        </>
      }

      { guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon 
            title='Entrar na partida'
            onPress={handleOpenGuild}
          />
        </View>
      }
      
      
    </View>
  )
}