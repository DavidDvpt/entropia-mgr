'use client';

import { axiosInstance } from '@/lib/axios/axios';
import { genericArrayParser } from '@/shared/tools/parserTool';
import { useQuery } from '@tanstack/react-query';

interface IUseQuerySelectProps<T> {
  initDatas?: T[];
  queryKey: any[];
  url: string;
  parserSingle?: (data: any) => Promise<T>;
  params?: Partial<T>;
  waitForParams?: boolean;
}

function useQuerySelect<T>(props: IUseQuerySelectProps<T>) {
  const { params, waitForParams } = props;

  const paramsExists = params
    ? Object.values(params).some((value) => value !== undefined)
    : undefined;
  console.log(props.queryKey, params, paramsExists, waitForParams);
  return useQuery<T[]>({
    queryKey: props.queryKey,
    queryFn: async () => {
      if ((props.waitForParams && paramsExists) || !props.waitForParams) {
        console.log('cocou');
        const { data } = await axiosInstance().get<any[]>(props.url, {
          params: props.params,
        });
        const parsed = props.parserSingle
          ? await genericArrayParser<T>(data, props.parserSingle)
          : data;

        return parsed;
      } else {
        return [];
      }
    },
    initialData: props.initDatas,
    refetchOnMount: !Boolean(props.initDatas),
  });
}

export default useQuerySelect;
