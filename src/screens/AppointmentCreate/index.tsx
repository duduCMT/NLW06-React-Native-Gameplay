import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import Header from '../../components/Header'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import CategorySelect from '../../components/CategotySelect'
import { RectButton } from 'react-native-gesture-handler'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'


type Props = {

}

export default function AppointmentCreate({ }: Props) {
  const [category, setCategory] = useState('')

  return (
    <View style={styles.container}>
      <Header title='Agendar Partida' />
      <Text style={[styles.label, styles.labelCategory]}>
        Categoria
      </Text>

      <CategorySelect
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <GuildIcon />
              <View style={styles.image} />
            }


            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>

            <Icon
              name='chevron-right'
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>

        <SmallInput />
      </View>

    </View>
  )
}