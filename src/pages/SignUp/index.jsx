import { Link } from '@react-navigation/native';
import { KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import React from 'react';
import { useState } from 'react';

import apiFetch from '../../plugins/fetch'
import { Styles } from './style';

const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateSignUp = async () => {
        try {
            if (!username || !email || !password) {
                return alert('Please fill all fields');
            }
            let data = { username: username, email: email, password: password }
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
            }
            const response = await apiFetch('/signup', options);
            const json = await response.json();
            if (json.type === 'error' && response.status != 200) {
                return alert(json.message);
            }
            if (json.type === 'success' && response.status == 200) {
                return navigation.navigate('Login');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <KeyboardAvoidingView style={Styles.layoutStyle}>
            <Link to={{ screen: 'Login' }} style={Styles.returnLink}>{'< Login'}</Link>
            <Text style={Styles.title}>Pokedex Signup</Text>
            <TextInput style={Styles.inputLogin} onChangeText={text => setUsername(text)} placeholder="Username" clearTextOnFocus />
            <TextInput style={Styles.inputLogin} onChangeText={text => setEmail(text)} placeholder="E-mail" clearTextOnFocus />
            <TextInput style={Styles.inputLogin} onChangeText={text => setPassword(text)} placeholder="Password" clearTextOnFocus secureTextEntry={true}/>
            <Pressable onPress={validateSignUp} style={Styles.defaultButton}>
                <Text style={Styles.buttonText}>Signup</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

export default SignUp;