import React from 'react';
import { TextInput, View, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import Text from '../../utils/TextSF';
import { Styles } from "./styles";
import api from '../../plugins/axios';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from '../../assets/pokeball.json';
import { Link } from '@react-navigation/native';
import SignUp from '../SignUp';

const Login = ({ navigation }) => {

  function validateLogin() {
    navigation.navigate('Home');
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ backgroundColor: 'white', height: '100%', width: '100%', alignItems: 'center' }}>
        <AnimatedLottieView autoPlay source={pokemonAnimation} style={Styles.pokemonAnimation} loop />
        <Image source={require('../../assets/logo.png')} style={Styles.logoLogin} />
        <TextInput style={Styles.InputLogin} placeholder="Usuário" clearTextOnFocus />
        <TextInput style={Styles.InputLogin} placeholder="Senha" clearTextOnFocus />
        <Pressable onPress={validateLogin} style={Styles.BotaoPadrao}>
          <Text style={Styles.TextoBotao}>Entrar</Text>
        </Pressable>
        <Link to={{ screen: 'SignUp' }} style={Styles.TextLinkCadastro}>Não possui uma conta? Cadastre-se!</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;