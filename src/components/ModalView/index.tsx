import React, { ReactNode } from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import Background from '../Background'
import { styles } from './styles'

type Props = ModalProps & {
  children: ReactNode
  closeModal: () => void;
  adaptiveHeigth?: boolean
}

export default function ModalView({children, closeModal, adaptiveHeigth = false, ...rest}: Props){
  return (
    <Modal 
      transparent
      animationType='slide'
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={adaptiveHeigth ? styles.adaptiveContainer : styles.defaultContainer }>
            
            <Background adaptiveHeight>
              <View style={styles.bar} />
              {children}
            </Background>
          </View> 
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}