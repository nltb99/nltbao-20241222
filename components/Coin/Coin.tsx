'use client';

import { Skeleton, Space } from 'antd';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { TABLE_PAGE_LIMIT } from '@/common/constants/constant';
import {
  useGetCoinHistoryData,
  useGetCoinList,
  useGetCoinListWithMarketData,
  // eslint-disable-next-line import/extensions
} from '@/common/rest/hooks/coin.query.ts';
import type {
  TCoinMarket,
  TCoinMarketFilter,
  TMarketData,
} from '@/common/types/coin.type';
import type { TAntSelect } from '@/common/types/common.type';
import { TableAnt } from '@/components/core/Table/TableAnt';

import SelectAnt from '../core/Input/SelectAnt';
import { columns } from './Coin.columns';
import { getTimeRangeOptions, getTop5Trending } from './Coin.config';

export function Coin() {
  // State
  const [page, setPage] = useState<number>(1);
  const [dataTable, setDataTable] = useState<TCoinMarket[]>([]);
  const [searchOptions, setSearchOptions] = useState<TAntSelect[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState<TCoinMarketFilter>({
    vs_currency: 'usd',
    page,
    per_page: TABLE_PAGE_LIMIT,
  });

  // Use query
  const coinList = useGetCoinList();
  const coinListWithMarketData = useGetCoinListWithMarketData(searchParams);
  const coinHistoryData = useGetCoinHistoryData();

  // Use Memo
  const timeRangeOptions: TAntSelect[] = useMemo(() => {
    return getTimeRangeOptions();
  }, []);

  useEffect(() => {
    setSearchParams((prev) => ({
      ...prev,
      page,
    }));
  }, [page]);

  useEffect(() => {
    if (
      !coinList.isLoading &&
      !coinListWithMarketData.isLoading &&
      coinList.isSuccess &&
      coinListWithMarketData.isSuccess
    ) {
      const trendingCoins = getTop5Trending(coinListWithMarketData.data);
      const options: TAntSelect[] = coinList.data.map((coin) => ({
        value: coin.id,
        label: coin.name,
        isOnTrend: trendingCoins.some((e) => e.id === coin.id),
      }));

      options.sort((a, b) => (b.isOnTrend ? 1 : -1) - (a.isOnTrend ? 1 : -1));
      setSearchOptions(options);
    }
  }, [
    coinList.isLoading,
    coinList.isSuccess,
    coinListWithMarketData.isLoading,
    coinListWithMarketData.isSuccess,
  ]);

  useEffect(() => {
    if (!coinListWithMarketData.isLoading && coinListWithMarketData.isSuccess) {
      const fetchCoinMarketData = async () => {
        const { data } = coinListWithMarketData;

        const updatedData = await Promise.all(
          data.map(async (coin) => {
            const historyData = await coinHistoryData.mutateAsync({
              coin_id: coin.id,
              payload: {
                date: selectedTime || '',
                localization: true,
              },
            });

            return {
              ...coin,
              market_data: historyData.market_data as TMarketData,
            };
          }),
        );
        setDataTable(updatedData);
      };

      fetchCoinMarketData();
    }
  }, [
    coinListWithMarketData.isLoading,
    coinListWithMarketData.isSuccess,
    selectedTime,
    searchParams,
  ]);

  useEffect(() => {
    setSelectedTime(timeRangeOptions?.[0]?.value || null);
  }, [timeRangeOptions]);

  const onSearchChange = (values: string[]) => {
    setSearchParams((prev) => ({
      ...prev,
      ids: values.join(','),
    }));
  };

  const onTimeRangeChange = useCallback((value: string) => {
    setSelectedTime(value);
  }, []);

  const optionRender = (option: any) => {
    return (
      <Space>
        {option.data.isOnTrend && <span role="img">📈</span>}
        <span role="img">{option.data.value}</span>
      </Space>
    );
  };

  if (coinList.isLoading || coinList.isFetching) {
    return <Skeleton active paragraph={{ rows: 10 }} />;
  }

  return (
    <div className="w-full">
      <div className="space-y-5">
        <h3 className="text-center text-2xl font-bold">Cryptocurrency price</h3>

        <div className="flex w-full flex-row items-center justify-around gap-5">
          <div className="w-4/5">
            <SelectAnt
              label="Search"
              className="w-full space-y-2"
              mode="tags"
              placeholder="Search coin..."
              allowClear
              style={{ width: '100%' }}
              options={searchOptions}
              optionRender={optionRender}
              onChange={onSearchChange}
            />
          </div>

          <div className="flex w-1/5">
            <SelectAnt
              label="Time range"
              className="w-full space-y-2"
              showSearch
              placeholder="Select time range"
              optionFilterProp="label"
              value={selectedTime}
              onChange={onTimeRangeChange}
              options={timeRangeOptions}
            />
          </div>
        </div>

        <TableAnt
          rowKey="id"
          total={20}
          dataSource={dataTable}
          columns={columns}
          page={page}
          setPage={setPage}
          loading={
            coinListWithMarketData.isLoading ||
            coinListWithMarketData.isFetching ||
            coinHistoryData.isLoading
          }
        />
      </div>
    </div>
  );
}
