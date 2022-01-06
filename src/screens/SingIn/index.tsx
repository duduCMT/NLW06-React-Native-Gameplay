import React from 'react'
import { ActivityIndicator, Alert, Image, Text, View, } from 'react-native';

import { styles } from './styles';
import IllustrationImg from '../../assets/illustration.png';
import ButtonIcon from '../../components/ButtonIcon';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

export default function SingIn() {
  const { singIn, loading } = useAuth();

  async function handleSingIn(){
    try {
      await singIn()
    } catch (error) {
      console.log(error)
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
        { loading ? <ActivityIndicator color={theme.colors.primary} /> :
           <ButtonIcon 
            title='Entrar com o Discord' 
            onPress={handleSingIn}
          />
        }
        
      </View>
    </View>
  );
}
