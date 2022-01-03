import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons'

import CategorySelect from '../../components/CategotySelect'
import Header from '../../components/Header'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import ModalView from '../../components/ModalView'
import Guilds from '../Guilds'
import { GuildProps } from '../../components/Guild'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

type Props = {

}

export default function AppointmentCreate({ }: Props) {
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
 
  function handleOpenGuilds(){
    setOpenGuildsModal(true)   
  }
  function handleCloseGuilds(){
    setOpenGuildsModal(false)   
  }

  function handleGuildsSelect(guildSelected: GuildProps){
    setGuild(guildSelected)
    setOpenGuildsModal(false)   
  }

  function hendleCategorySelect(categoryId: string){
    setCategory(categoryId)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >

      <Header title='Agendar Partida' />
      <ScrollView>
        <Text style={[styles.label, styles.labelCategory]}>
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={hendleCategorySelect}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              { guild.icon 
                ? <GuildIcon />
                : <View style={styles.image} />
              }
              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : 'Selecione um servidor'}
                </Text>
              </View>
              <Icon
                name='chevron-right'
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={styles.label}>
                Dia e Mês
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e Minuto
              </Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 18 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />
          <View style={styles.footer}>
            <Button title='Agendar' />
          </View>
        </View>
      </ScrollView>

      <ModalView
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds handleGuildsSelect={handleGuildsSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  )
}