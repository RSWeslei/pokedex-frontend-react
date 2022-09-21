import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.207.217.224'
});
api.interceptors.response.use(response => {
    return response.data;
});

export default api;