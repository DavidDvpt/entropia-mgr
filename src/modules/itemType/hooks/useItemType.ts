'use client';

import useQuerySelect from '@/shared/hooks/useQuerySelect';
import { itemTypeParser } from '../itemTypeParser';

interface IUseItemTypeProps {
  initialDatas?: AppItemTypes;
  params?: Partial<IAppItemType>;
  waitForParams?: boolean;
}

function useItemType({
  initialDatas,
  params,
  waitForParams,
}: IUseItemTypeProps) {
  const result = useQuerySelect({
    queryKey: ['itemTypes', params],
    url: '/api/itemTypes',
    parserSingle: itemTypeParser,
    initDatas: initialDatas,
    params,
    waitForParams,
  });

  return result;
}

export default useItemType;
