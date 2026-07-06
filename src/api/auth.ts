import { apiClient } from './client';

export const authApi = {
  login: async (data: any) => {
    const response = await apiClient.post('/api/auth/login', { email: data.email, password: data.password });
    return response.data;
  },
  signup: async (data: any) => {
    const response = await apiClient.post('/api/auth/signup', data);
    return response.data;
  },
  logout: async () => {
    const response = await apiClient.post('/api/auth/logout');
    return response.data;
  },
  getMe: async () => {
    const response = await apiClient.get('/api/auth/me');
    return response.data;
  },
};
