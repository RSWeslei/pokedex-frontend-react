import axios from 'axios'

const api = axios.create({
    baseURL: 'http://52.67.218.73'
});
api.interceptors.response.use(response => {
    return response.data;
});

export default api;