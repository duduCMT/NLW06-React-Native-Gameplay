import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

import Profile from '../../components/Profile'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategotySelect'
import ListHeader from '../../components/ListHeader'

export default function Home(){
  const [ category, setCategory ] = useState('')

  function handleCategorySelect(categoryId: string){
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect categorySelected={category} setCategory={ handleCategorySelect } />

        <View style={styles.content}>
          <ListHeader title="Partidas Agendadas" subtitle="Total 6"/>
        </View>
      
      </View>
    </View>   
  )
}