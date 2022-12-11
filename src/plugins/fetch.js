import fetch from 'node-fetch';

const apiFetch = async (url, options) => {
    options.headers = {
        'Content-Type': 'application/json',
    }
    return await fetch(`http://54.232.172.233${url}`, options)
};

export default apiFetch;