import React, { useState } from 'react'
import { View, Text, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Icon from '@expo/vector-icons/MaterialIcons'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { GuildProps } from '../../components/Guild'

import CategorySelect from '../../components/CategotySelect'
import Header from '../../components/Header'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import TextArea from '../../components/TextArea'
import Button from '../../components/Button'
import ModalView from '../../components/ModalView'
import Guilds from '../Guilds'

import { COLLECTION_APPOINTMENT } from '../../configs/database'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { useNavigation } from '@react-navigation/native'

type Props = {

}

export default function AppointmentCreate({ }: Props) {
  const [category, setCategory] = useState('')
  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

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

  async function handleSave() {
    if(!(guild && category && day && month && hour && minute && description)){
      Alert.alert('Informações Incompletas', 'Todas as informações devem ser preenchidas. Verifique os campos e tente novamente.')
      return
    }

    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description
    }

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT)
    const appointments = storage ? JSON.parse(storage) : []

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENT,
      JSON.stringify([...appointments, newAppointment])
    )

    navigation.navigate('Home')
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
              <GuildIcon guildId={guild.id} iconId={guild.icon} style={styles.image} />
              
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
                <SmallInput 
                  maxLength={2} 
                  onChangeText={setDay}
                />
                <Text style={styles.divider}>/</Text>
                <SmallInput 
                  maxLength={2} 
                  onChangeText={setMonth}
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>
                Hora e Minuto
              </Text>
              <View style={styles.column}>
                <SmallInput 
                  maxLength={2} 
                  onChangeText={setHour}
                />
                <Text style={styles.divider}>:</Text>
                <SmallInput 
                  maxLength={2} 
                  onChangeText={setMinute}
                />
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
            onChangeText={setDescription}
          />
          <View style={styles.footer}>
            <Button 
              title='Agendar' 
              onPress={handleSave}
            />
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