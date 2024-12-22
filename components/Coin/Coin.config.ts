import type { TCoinMarket } from '@/common/types/coin.type';
import type { TAntSelect } from '@/common/types/common.type';
import { getDateDaysAgo } from '@/common/utils/helper';

enum TimeRangeDays {
  Today = 0,
  Last3Days = 3,
  Last7Days = 7,
  Last30Days = 30,
  Last1Year = 365,
}

export const getTimeRangeOptions = (): TAntSelect[] => {
  const timeRangeOptions = [
    { label: 'Today', daysAgo: TimeRangeDays.Today },
    { label: 'Last 3 days', daysAgo: TimeRangeDays.Last3Days },
    { label: 'Last 7 days', daysAgo: TimeRangeDays.Last7Days },
    { label: 'Last 30 days', daysAgo: TimeRangeDays.Last30Days },
    { label: 'Last 1 year', daysAgo: TimeRangeDays.Last1Year },
  ];

  return timeRangeOptions.map(({ label, daysAgo }) => ({
    label,
    value: getDateDaysAgo(daysAgo),
  }));
};

export const getTop5Trending = (cryptoList: TCoinMarket[]) => {
  const sortedList = cryptoList.sort(
    (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h,
  );
  const top5Trending = sortedList.slice(0, 5);
  return top5Trending;
};
