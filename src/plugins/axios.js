import axios from 'axios';
import storage from './storage';

const api = axios.create({
    baseURL: 'http://54.232.172.233',
});

api.interceptors.request.use(async response => {
    const token = await storage.getGlobalToken();
    if (token) {
        response.headers.Authorization = `Bearer ${token}`;
    }
    return response;
});

export default api;