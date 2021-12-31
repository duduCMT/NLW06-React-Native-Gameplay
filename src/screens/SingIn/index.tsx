import React from 'react'
import { Image, Text, View, } from 'react-native';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/auth.routes';

type homeScreenProp = 
  StackNavigationProp<RootStackParamList, 'Home'>;

export default function SingIn() {
  const navigation = useNavigation<homeScreenProp>()

  function handleSingIn(){
    try{
      navigation.navigate("Home")
    } catch(error){

    }
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
