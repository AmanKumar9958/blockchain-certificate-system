import axios from 'axios';

// Prefer env override if provided at build-time; fallback to deployed backend
const baseURL = import.meta?.env?.VITE_API_URL || 'https://blockchain-certificate-system-backend.onrender.com';

// Centralized API client
export const api = axios.create({ baseURL });

// Helper methods (optional)
export const post = (url, data, config) => api.post(url, data, config);
export const get = (url, config) => api.get(url, config);
