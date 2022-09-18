import axios from 'axios'

const api = axios.create({
    baseURL: 'http://18.230.25.188'
});
api.interceptors.response.use(response => {
    return response.data;
});

export default api;