import React from 'react'
import { Image, Text, View, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { styles } from './styles';
import { RootStackParamList } from '../../routes/auth.routes';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';

type homeScreenProp = 
  StackNavigationProp<RootStackParamList, 'Home'>;

export default function SingIn() {
  const navigation = useNavigation<homeScreenProp>()

  function handleSingIn(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
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
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
