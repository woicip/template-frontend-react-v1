import { env } from '@/config/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.API_URL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(env.TOKEN_NAME);
  config.headers["Authorization"] = `Bearer ${token}`;
  return config
})

