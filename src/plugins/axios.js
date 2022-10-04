import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.232.172.233'
});
api.interceptors.response.use(response => {
    return response.data;
});

export default api;