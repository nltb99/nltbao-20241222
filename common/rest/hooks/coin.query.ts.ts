'use client';

import type { UseQueryOptions } from 'react-query';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import type {
  TCoin,
  TCoinMarket,
  TCoinMarketFilter,
} from '@/common/types/coin.type';
import { REST_API } from '@/config/apis';

import {
  getCoinHistoryData,
  getCoinList,
  getCoinListWithMarketData,
} from '../services/coin';

export const useGetCoinList = (_options?: UseQueryOptions<TCoin>) => {
  return useQuery<TCoin[]>(
    [...Object.values(REST_API.GET_LIST_COIN)],
    () => getCoinList(),
    {
      staleTime: 1800000,
      refetchInterval: 1800000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
};

export const useGetCoinListWithMarketData = (
  payload: TCoinMarketFilter,
  _options?: UseQueryOptions<TCoinMarket>,
) => {
  return useQuery<TCoinMarket[]>(
    [...Object.values(REST_API.GET_LIST_COIN_WITH_MARKET_DATA), payload],
    () => getCoinListWithMarketData(payload),
    {
      staleTime: 1800000,
      refetchInterval: 1800000,
      refetchIntervalInBackground: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
};

export const useGetCoinHistoryData = () => {
  const queryClient = useQueryClient();

  return useMutation(getCoinHistoryData, {
    onSuccess: (data) => {
      queryClient.setQueryData('coinHistory', data);
    },
    onError: (error) => {
      console.error('Error fetching coin history data:', error);
    },
  });
};
