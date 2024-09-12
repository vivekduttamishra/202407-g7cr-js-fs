import axios from 'axios';

const _customAxios= axios.create({
    baseURL: 'http://localhost:8000/api'
});

//custom axios request interceptor to inject token from local storage

_customAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default _customAxios;