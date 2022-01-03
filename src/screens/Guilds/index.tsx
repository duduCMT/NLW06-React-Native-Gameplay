import React from 'react'
import { View, FlatList } from 'react-native'

import Guild, { GuildProps } from '../../components/Guild'
import ListDivider from '../../components/ListDivider'

import { styles } from './styles'

const guilds = [
  {
    id: '1',
    name: 'Lendários',
    icon: 'https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC',
    owner: true,
  },
  {
    id: '2',
    name: 'Rumo ao Topo',
    icon: 'https://play-lh.googleusercontent.com/Wq15hCMPJW-eUz-c4DtnUxHkk2s-pVra14td-E4b05Eo-Cu8Koj6BqPUNULbh9HfjpkC',
    owner: false,
  },
]

type Props = {
  handleGuildsSelect: (guild: GuildProps) => void;  
}

export default function Guilds({handleGuildsSelect}: Props){
  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Guild data={item} onPress={() => handleGuildsSelect(item)} />   
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <ListDivider width={74} />
        )}
        style={styles.guilds}
        contentContainerStyle={{paddingHorizontal: 8, paddingBottom: 32}}
      />
    </View>
  )
}