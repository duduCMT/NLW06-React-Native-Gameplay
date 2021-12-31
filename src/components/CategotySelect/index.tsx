import React from 'react'
import { ScrollView } from 'react-native'

import Category from '../Category'

import { categories } from '../../utils/categories'
import { styles } from './styles'

type Props = {
  categorySelected: string,
  setCategory: (categoryId: string) => void 
}

export default function CategorySelect({categorySelected, setCategory}: Props){
  return (
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingLeft: 24, paddingRight: 16}}
    >
      {categories.map(category => (
        <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))

      }
    </ScrollView>
  )
}