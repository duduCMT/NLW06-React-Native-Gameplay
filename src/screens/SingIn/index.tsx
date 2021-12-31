import React from 'react'
import { 
  Image,
  Text, 
  View,
  StatusBar
} from 'react-native';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

export default function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos 
        </Text>
        <ButtonIcon 
          title='Entrar com o Discord' 
        />
      </View>
    </View>
  );
}
