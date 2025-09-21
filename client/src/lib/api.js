import axios from 'axios';

// Centralized API client
export const api = axios.create({
  baseURL: 'https://blockchain-certificate-system-backend.onrender.com',
});

// Helper methods (optional)
export const post = (url, data, config) => api.post(url, data, config);
export const get = (url, config) => api.get(url, config);
