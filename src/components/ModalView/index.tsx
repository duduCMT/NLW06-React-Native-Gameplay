import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import Background from '../Background'
import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode
  closeModal: () => void;
  adaptiveHeight?: boolean
}

export default function ModalView({ children, closeModal, adaptiveHeight = false, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={adaptiveHeight ? styles.adaptiveContainer : styles.defaultContainer}>
        <Background adaptiveHeight>
          <View style={styles.bar} />
          {children}
        </Background>
      </View>
    </Modal>
  )
}