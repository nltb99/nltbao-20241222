import type { ColumnsType } from 'antd/es/table';

import type { TCoinMarket, TMarketData } from '@/common/types/coin.type';
import { formatUSD } from '@/common/utils/helper';

import { RenderImage } from '../RenderImage/RenderImage';

const renderName = (data: TCoinMarket) => (
  <div className="flex flex-row items-center gap-2">
    <RenderImage src={data.image} alt="img" width={20} height={20} />
    <div>{data.name}</div>
  </div>
);

const renderCurrentPrice = (current_price: number) => (
  <div>{`${formatUSD(current_price)}`}</div>
);

const renderTotalSupply = (total_supply: number) => (
  <div>{`${formatUSD(total_supply)}`}</div>
);

const renderUSDPrice = (marketData: TMarketData) => (
  <div>{`${formatUSD(marketData.current_price.usd)}`}</div>
);

const renderMarketCap = (marketData: TMarketData) => (
  <div>{`${formatUSD(marketData.market_cap.usd)}`}</div>
);

const renderTotalVolume = (marketData: TMarketData) => (
  <div>{`${formatUSD(marketData.total_volume.usd)}`}</div>
);

export const columns: ColumnsType<TCoinMarket> = [
  {
    title: 'Coin',
    key: 'name',
    render: renderName,
  },
  {
    title: 'Current Price',
    dataIndex: 'current_price',
    key: 'current_price',
    render: renderCurrentPrice,
  },
  {
    title: 'Total Supply',
    dataIndex: 'total_supply',
    key: 'total_supply',
    render: renderTotalSupply,
  },
  {
    title: 'Current Price (USD)',
    dataIndex: 'market_data',
    key: 'current_price_usd',
    render: renderUSDPrice,
  },
  {
    title: 'Market Cap (USD)',
    dataIndex: 'market_data',
    key: 'market_cap_usd',
    render: renderMarketCap,
  },
  {
    title: 'Total Volume (USD)',
    dataIndex: 'market_data',
    key: 'total_volume_usd',
    render: renderTotalVolume,
  },
];
