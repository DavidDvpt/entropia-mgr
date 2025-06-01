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

  const updateParams = (ic: number, ipp: number, curP: number) => {
    const tp = Math.ceil(ic / ipp);
    const oof = curP > tp;
    const curPage = oof ? tp : curP;
    const iStart = oof ? (tp - 1) * ipp : (curPage - 1) * ipp;
    const iEnd = oof ? tp * ipp : curPage * ipp;

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

  const handePaginationValueChange = (newValue: IPaginationParams) => {
    if (newValue.currentPage !== params.currentPage)
      handleCurrentPageChange(newValue.currentPage);
    else if (newValue.itemPerPage !== params.itemPerPage)
      setParams(updateParams(itemCount, newValue.itemPerPage, currentPage));
    else if (newValue.itemCount !== params.itemCount)
      setParams(updateParams(newValue.itemCount, itemPerPage, currentPage));
  };

  return {
    fullParams: params,
    ...params,
    handePaginationValueChange,
  };
}

export default usePagination;
