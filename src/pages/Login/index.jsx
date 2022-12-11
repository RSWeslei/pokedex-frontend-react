import React from 'react';
import { TextInput, View, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import Text from '../../utils/TextSF';
import { Styles } from "./styles";
import api from '../../plugins/axios';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from '../../assets/pokeball.json';
import { Link } from '@react-navigation/native';
import SignUp from '../SignUp';
import { setGlobalToken } from '../../plugins/axios';

const Login = ({ navigation, setUSerToken, getUserToken }) => {
  const [username, setUsername] = React.useState('testegabriel');
  const [password, setPassword] = React.useState('teste');

  function validateLogin() {
    console.log(username, password);
    if(username !== '' || password !== '') {
      console.log(username, password);
      api.post('/login', { username: username, password: password })
      .then((response) => {
        console.log(response);
        setGlobalToken(response.data.token);
        navigation.navigate('Home');
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ backgroundColor: 'white', height: '100%', width: '100%', alignItems: 'center' }}>
        <AnimatedLottieView autoPlay source={pokemonAnimation} style={Styles.pokemonAnimation} loop />
        <Image source={require('../../assets/logo.png')} style={Styles.logoLogin} />
        <TextInput style={Styles.InputLogin} onChangeText={text => setUsername(text)} placeholder="Usuário" clearTextOnFocus />
        <TextInput style={Styles.InputLogin} onChangeText={text => setPassword(text)} placeholder="Senha" clearTextOnFocus />
        <Pressable onPress={validateLogin} style={Styles.BotaoPadrao}>
          <Text style={Styles.TextoBotao}>Entrar</Text>
        </Pressable>
        <Link to={{ screen: 'SignUp' }} style={Styles.TextLinkCadastro}>Não possui uma conta? Cadastre-se!</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;