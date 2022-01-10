import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import Avatar from '../Avatar'

import { getRandomPhrase } from '../../services/phrases'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'
import ModalView from '../ModalView'
import SingOut from '../Logout'
import Button from '../Button'

export default function Profile() {
  const { user, singOut } = useAuth()
  const [ visible, setVisible ] = useState(false)
  const phrase = getRandomPhrase()

  function handleSingOut(){
    setVisible(true)
  }

  function handleCloseModal(){
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSingOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message} numberOfLines={1}>{phrase}</Text>
      </View>
      
      <ModalView
        visible={visible}
        closeModal={handleCloseModal}
        adaptiveHeight
      >
        <SingOut onCancel={handleCloseModal} />
      </ModalView>
    </View>
  )
}