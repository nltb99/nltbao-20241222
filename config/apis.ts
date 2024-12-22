export const REST_API = {
  GET_LIST_COIN: {
    uri: '/api/v3/coins/list',
    method: 'GET',
  },
  GET_LIST_COIN_WITH_MARKET_DATA: {
    uri: '/api/v3/coins/markets',
    method: 'GET',
  },
  GET_COIN_HISTORY_DATA: {
    uri: '/api/v3/coins/:coin_id/history',
    method: 'GET',
  },
};
