import axios from 'axios';
import { AsyncStorage } from 'react-native';

const globalToken = null;

async function setGlobalToken(token) {
    console.log(token);
    await AsyncStorage.setItem('token', token);
};

async function getGlobalToken() {
    let token = await AsyncStorage.getItem('token');
    console.log('token encontrado:', token);
    return token;
}

const api = axios.create({
    baseURL: 'http://54.232.172.233'
});
api.interceptors.response.use(response => {
    return response.data;
});

export default api;
export { setGlobalToken, getGlobalToken };