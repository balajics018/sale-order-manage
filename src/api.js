// src/api.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const fetchSaleOrders = async (status) => {
  // Mock API call
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: [] }), 1000)
  );
  return response.data;
};

export const useSaleOrders = (status) => {
  return useQuery(['saleOrders', status], () => fetchSaleOrders(status));
};

const createSaleOrder = async (newOrder) => {
  // Mock API call
  const response = await new Promise((resolve) =>
    setTimeout(() => resolve({ data: newOrder }), 1000)
  );
  return response.data;
};

export const useCreateSaleOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(createSaleOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries(['saleOrders', 'active']);
    },
  });
};
