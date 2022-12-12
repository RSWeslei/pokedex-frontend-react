import fetch from 'node-fetch';
import storage from './storage';

const apiFetch = async (url, options) => {
    const token = await storage.getGlobalToken();
    options.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
    return await fetch(`http://54.232.172.233${url}`, options)
};

export default apiFetch;