import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { theme } from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'
import { styles } from './styles'

type Props = {
  onCancel?: () => void
}

export default function Logout({ onCancel }: Props) {
  const { singOut } = useAuth()

  function handleYes() {
    singOut()
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Deseja sair do </Text>
        <Text style={[styles.title, styles.titleAppName]}>Game</Text>
        <Text style={[styles.title, styles.titleAppName, { color: theme.colors.primary }]}>Play</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.noButton]}
          onPress={onCancel}
          activeOpacity={.7}
        >
          <Text style={styles.buttonText}>Não</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.yesButton]}
          onPress={handleYes}
          activeOpacity={.7}
        >
          <Text style={styles.buttonText}>Sim</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}