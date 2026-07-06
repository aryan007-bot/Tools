import { apiClient } from './client';

const API = '/api/v1/user';

export const userApi = {
  getProfile: async () => {
    const response = await apiClient.get(`${API}/profile`);
    return response.data;
  },
  updateProfile: async (data: any) => {
    const response = await apiClient.put(`${API}/profile`, data);
    return response.data;
  },
  getUsage: async () => {
    const response = await apiClient.get(`${API}/usage`);
    return response.data;
  },
  getInvoices: async () => {
    const response = await apiClient.get(`${API}/invoices`);
    return response.data;
  },
  getPaymentMethods: async () => {
    const response = await apiClient.get(`${API}/payment-methods`);
    return response.data;
  },
  addPaymentMethod: async (data: any) => {
    const response = await apiClient.post(`${API}/payment-methods`, data);
    return response.data;
  },
  deletePaymentMethod: async (methodId: string) => {
    const response = await apiClient.delete(`${API}/payment-methods/${methodId}`);
    return response.data;
  },
  getNotifications: async () => {
    const response = await apiClient.get(`${API}/notifications`);
    return response.data;
  },
  markNotificationRead: async (notificationId: string) => {
    const response = await apiClient.put(`${API}/notifications/${notificationId}/read`);
    return response.data;
  },
  markAllNotificationsRead: async () => {
    const response = await apiClient.put(`${API}/notifications/read-all`);
    return response.data;
  },
};
