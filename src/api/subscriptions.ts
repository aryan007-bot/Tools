import { apiClient } from './client';

const SUB = '/api/v1/subscriptions';

export const subscriptionsApi = {
  getSubscriptions: async () => {
    const response = await apiClient.get(SUB);
    return response.data;
  },
  pauseSubscription: async (id: string) => {
    const response = await apiClient.post(`${SUB}/${id}/pause`);
    return response.data;
  },
  resumeSubscription: async (id: string) => {
    const response = await apiClient.post(`${SUB}/${id}/resume`);
    return response.data;
  },
  cancelSubscription: async (id: string) => {
    const response = await apiClient.post(`${SUB}/${id}/cancel`);
    return response.data;
  },
  upgradeSubscription: async (id: string, data: any) => {
    const response = await apiClient.post(`${SUB}/${id}/upgrade`, data);
    return response.data;
  },
  downgradeSubscription: async (id: string, data: any) => {
    const response = await apiClient.post(`${SUB}/${id}/downgrade`, data);
    return response.data;
  },
};

export const pricingApi = {
  getTools: async () => {
    const response = await apiClient.get('/api/v1/pricing/tools');
    return response.data;
  },
  getPlansForTool: async (toolSlug: string) => {
    const response = await apiClient.get(`/api/v1/pricing/plans/${toolSlug}`);
    return response.data;
  },
};
