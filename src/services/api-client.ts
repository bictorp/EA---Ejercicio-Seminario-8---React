import axios, { CanceledError } from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:1337',
});

// Añadimos un "interceptor" para inyectar el token en cada petición
apiClient.interceptors.request.use(
  (config) => {
    // Buscamos el token en el localStorage (ajusta el nombre si lo guardaste diferente)
    const token = localStorage.getItem('token'); 
    
    // Si hay token, lo metemos en la cabecera de Autorización
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
export { CanceledError };