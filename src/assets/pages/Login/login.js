import React, { useEffect, useState } from 'react';
import api from '../../../plugins/axios';
import { SafeAreaView, StyleSheet, TextInput, ScrollView, Text, View, Image, Button, Pressable, KeyboardAvoidingView } from 'react-native';
import { Styles } from "./styles";
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from '../../../assets/pokeball.json'

const Login = ({ navigation }) => {

    function validateLogin() {
        navigation.navigate('Home');
    }

  return (
    <KeyboardAvoidingView>
        <View style={{ backgroundColor: 'white', height: '100%', width:'100%', alignItems:'center'}}>
            <AnimatedLottieView autoPlay source={pokemonAnimation} style={Styles.pokemonAnimation} loop />
            <Image source={require('../../../assets/logo.png')} style={Styles.logoLogin}/>
            <TextInput style={Styles.InputLogin } placeholder="Usuário" clearTextOnFocus/>
            <TextInput style={Styles.InputLogin } placeholder="Senha" clearTextOnFocus/>
            <Pressable onPress={validateLogin} style={ Styles.BotaoPadrao }>
                <Text style={Styles.TextoBotao }>Entrar</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
  );
}

export default Login;