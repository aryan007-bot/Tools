import { apiClient } from './client';

const API = '/api/v1/checkout';

export const checkoutApi = {
  preview: async (data: any) => {
    const response = await apiClient.post(`${API}/preview`, data);
    return response.data;
  },
  create: async (data: any) => {
    const response = await apiClient.post(`${API}/create`, data);
    return response.data;
  },
  applyCoupon: async (data: any) => {
    const response = await apiClient.post(`${API}/apply-coupon`, data);
    return response.data;
  },
};
