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
  const { currentPage, totalPage, itemPerPage, itemCount } = params;

  const updateParams = (ic: number, ipp: number, cp: number) => {
    const tp = Math.ceil(ic / ipp);
    const oof = cp > tp;
    const curPage = oof ? tp : cp;
    const iStart = oof ? (tp - 1) * itemPerPage : (curPage - 1) * itemPerPage;
    const iEnd = oof ? tp * itemPerPage : curPage * itemPerPage;

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
      else if (page < 1) {
        setParams({ ...params, currentPage: 1 });
      } else {
        setParams(updateParams(itemCount, itemPerPage, page));
      }
    }
  };

  const handleItemPerPageChange = (value: number) =>
    setParams(updateParams(itemCount, value, currentPage));
  const handleItemCountChange = (count: number) => {
    setParams(updateParams(count, itemPerPage, currentPage));
  };

  return {
    ...params,
    handleCurrentPageChange,
    handleItemPerPageChange,
    handleItemCountChange,
  };
}

export default usePagination;
