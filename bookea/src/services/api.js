import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
});

export default api;

api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('Error:', error.response ? error.response.data : error.message);
      return Promise.reject(error);
    }
  );
  
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  