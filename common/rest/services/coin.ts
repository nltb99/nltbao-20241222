import qs from 'qs';

import { HttpService } from '@/common/http/http.service';
import type {
  TCoin,
  TCoinHistory,
  TCoinHistoryPayload,
  TCoinMarket,
  TCoinMarketFilter,
} from '@/common/types/coin.type';
import { REST_API } from '@/config/apis';

export const getCoinList = async (): Promise<TCoin[]> => {
  const route = REST_API.GET_LIST_COIN.uri;
  return HttpService.get(route);
};

export const getCoinListWithMarketData = async (
  payload: TCoinMarketFilter,
): Promise<TCoinMarket[]> => {
  const route = `${REST_API.GET_LIST_COIN_WITH_MARKET_DATA.uri}?${qs.stringify(
    payload,
  )}`;

  return HttpService.get(route);
};

export const getCoinHistoryData = async ({
  coin_id,
  payload,
}: {
  coin_id: string;
  payload: TCoinHistoryPayload;
}): Promise<TCoinHistory> => {
  const route = `${REST_API.GET_COIN_HISTORY_DATA.uri.replace(
    ':coin_id',
    coin_id,
  )}?${qs.stringify(payload)}`;

  return HttpService.get(route);
};
