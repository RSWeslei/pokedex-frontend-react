import { Link } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import api from '../../plugins/axios';
import { Styles } from './style';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateSignUp = () => {
        if(name !== '' && email !== '' && password !== '') {
            api.post('/signup', { username: name, email: email, password: password })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            navigation.navigate('Login');
        }
    }

    return (
        <KeyboardAvoidingView style={Styles.LayoutStyle}>
            <Link to={{ screen: 'Login' }} style={Styles.LinkRetorno}>{'< Login'}</Link>
            <Text style={Styles.Title}>Cadastro Pokedéx</Text>
            <TextInput style={Styles.InputLogin} onChangeText={text => setName(text)} placeholder="Nome" clearTextOnFocus />
            <TextInput style={Styles.InputLogin} onChangeText={text => setEmail(text)} placeholder="E-mail" clearTextOnFocus />
            <TextInput style={Styles.InputLogin} onChangeText={text => setPassword(text)} placeholder="Senha" clearTextOnFocus />
            <Pressable onPress={validateSignUp} style={Styles.BotaoPadrao}>
                <Text style={Styles.TextoBotao}>Cadastrar</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

export default SignUp;