import { useState } from 'react';

const paginationParamsDefault: IPaginationParams = {
  currentPage: 1,
  totalPage: 1,
  itemPerPage: 15,
  itemCount: 0,
  indexStart: 0,
  indexEnd: 15,
};

function usePagination() {
  const [params, setParams] = useState<IPaginationParams>(
    paginationParamsDefault
  );
  const {
    currentPage,
    totalPage,
    itemPerPage,
    itemCount,
    indexStart,
    indexEnd,
  } = params;

  const updateParams = (ic: number, ipp: number) => {
    const tp = Math.ceil(ic / ipp);
    const oof = currentPage > tp;
    const curPage = oof ? tp : currentPage;
    const iStart = oof ? (tp - 1) * itemPerPage : indexStart;
    const iEnd = oof ? tp * itemPerPage : indexEnd;

    const updated = {
      totalPage: tp,
      itemPerPage: ipp,
      itemCount: ic,
      currentPage: curPage,
      indexStart: iStart,
      indexEnd: iEnd,
    };

    return updated;
  };

  const handleCurrentPageChange = (page: number) => {
    if (totalPage !== 0) {
      if (page > totalPage) setParams({ ...params, currentPage: itemCount });
      else if (page < 1) setParams({ ...params, currentPage: 1 });
    }
  };

  const handleItemPerPageChange = (value: number) =>
    setParams(updateParams(itemCount, value));
  const handleItemCountChange = (count: number) => {
    setParams(updateParams(count, itemPerPage));
  };

  return {
    ...params,
    handleCurrentPageChange,
    handleItemPerPageChange,
    handleItemCountChange,
  };
}

export default usePagination;
