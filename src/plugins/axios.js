import axios from 'axios';
import { AsyncStorage } from 'react-native';

async function setGlobalToken(token) {
    console.log(token);
    await AsyncStorage.setItem('token', token);
};

async function getGlobalToken() {
    const token = await AsyncStorage.getItem('token');
    console.log('token encontrado:', token);
    return token;
}

const api = axios.create({
    baseURL: 'http://54.232.172.233',
});

api.interceptors.request.use(async config => {
    const token = await getGlobalToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
export { setGlobalToken, getGlobalToken };