'use client';

import useQuerySelect from '@/shared/hooks/useQuerySelect';
import { itemParser } from './itemParser';

interface IUseItemProps {
  params?: Partial<IAppItem>;
  waitForParams?: boolean;
  initialDatas?: AppItems;
}

function useItem({ params, waitForParams, initialDatas }: IUseItemProps) {
  const result = useQuerySelect({
    queryKey: ['items', params],
    url: '/api/items',
    parserSingle: itemParser,
    initDatas: initialDatas,
    params,
    waitForParams,
  });

  return result;
}

export default useItem;
