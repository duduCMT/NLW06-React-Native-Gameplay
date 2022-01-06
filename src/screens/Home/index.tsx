import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { styles } from './styles'

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategotySelect'
import ListHeader from '../../components/ListHeader'
import { FlatList } from 'react-native-gesture-handler'
import Appointment, { AppointmentProps } from '../../components/Appointment'
import ListDivider from '../../components/ListDivider'
import AsyncStorageLib from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENT } from '../../configs/database'
import Load from '../../components/Load'

export default function Home() {
  const navigation = useNavigation()
  const [category, setCategory] = useState('')
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])
  const [loading, setLoading] = useState(true)

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }
  function handleAppointmentDetails(data: AppointmentProps) {
    navigation.navigate('AppointmentDetails')
  }
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    setLoading(true)

    const response = await AsyncStorageLib.getItem(COLLECTION_APPOINTMENT)
    const storage: AppointmentProps[] = response ? JSON.parse(response) : []

    if (category) {
      setAppointments(storage.filter(item => item.category === category))
    } else {
      setAppointments(storage)
    }

    setLoading(false)
  }

  useFocusEffect(useCallback(() => {
    loadAppointments()
  }, [category]))

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
        <>
        <View style={styles.content}>
          <ListHeader title="Partidas Agendadas" subtitle={`Total ${appointments.length}`} />
        </View>

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={() => handleAppointmentDetails(item)}
            />
          )}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 8 }}
          ItemSeparatorComponent={() => <ListDivider width={74} />}
        />
        </>
      }

    </View>
  )
}