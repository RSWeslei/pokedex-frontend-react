import { AsyncStorage } from 'react-native';

async function setGlobalToken(token) {
    await AsyncStorage.setItem('token', token);
};

async function getGlobalToken() {
    const token = await AsyncStorage.getItem('token');
    return token;
}

async function removeGlobalToken() {
    await AsyncStorage.removeItem('token');
}

export default { setGlobalToken, getGlobalToken, removeGlobalToken };