import React from 'react';
import { TextInput, View, Image, Pressable, KeyboardAvoidingView } from 'react-native';
import { Link } from '@react-navigation/native';

import apiFetch from '../../plugins/fetch'

import Text from '../../utils/TextSF';
import { Styles } from "./styles";

import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from '../../assets/pokeball.json';
import storage from '../../plugins/storage';

const Login = ({ navigation, setUSerToken, getUserToken }) => {
  const [usernameEmail, setUsernameEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  };

  async function validateLogin() {
    try {
      if (!usernameEmail || !password) {
        return alert('Please fill all fields');
      }
      let isEmail = validateEmail(usernameEmail);
      
      let data = {}
      isEmail ? data = { email: usernameEmail, password: password } : data = { username: usernameEmail, password: password }
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
      }
      const response = await apiFetch('/login', options);
      const json = await response.json();
      if (json.type === 'error' && response.status != 200) {
        return alert(json.message);
      }
      if (json.type === 'success' && response.status == 200) {
        storage.setGlobalToken(json.data.token);
        return navigation.navigate('Home');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <KeyboardAvoidingView>
      <View style={{ backgroundColor: 'white', height: '100%', width: '100%', alignItems: 'center' }}>
        <AnimatedLottieView autoPlay source={pokemonAnimation} style={Styles.pokemonAnimation} loop />
        <Image source={require('../../assets/logo.png')} style={Styles.logoLogin} />
        <TextInput style={Styles.inputLogin} onChangeText={text => setUsernameEmail(text)} placeholder="Username or email" clearTextOnFocus />
        <TextInput style={Styles.inputLogin} onChangeText={text => setPassword(text)} placeholder="Password" clearTextOnFocus secureTextEntry={true} />
        <Pressable onPress={validateLogin} style={Styles.defaultButton}>
          <Text style={Styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={() => {
          navigation.navigate('Home')
        }} style={Styles.defaultButton}>
          <Text style={Styles.buttonText}>Enter as guest</Text>
        </Pressable>
        <Link to={{ screen: 'SignUp' }} style={Styles.signupLinkText}>Don't have an account? Sign up</Link>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;