export type TMarketData = {
  current_price: { usd: number };
  market_cap: { usd: number };
  total_volume: { usd: number };
};

export type TCoin = {
  id: string;
  name: string;
};

export type TCoinMarket = {
  id: string;
  price_change_percentage_24h: number;
  name: string;
  current_price: number;
  total_supply: number;
  market_data: TMarketData;
  image: string;
};

export type TCoinMarketFilter = {
  ids?: string;
  vs_currency: string;
  page: number;
  per_page: number;
};

export type TCoinHistory = {
  market_data: object;
};

export type TCoinHistoryPayload = {
  date: string;
  localization: boolean;
};
