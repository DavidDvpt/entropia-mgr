'use client';

import useCssArray from '@/shared/hooks/useCssArray';
import { useEffect, useState } from 'react';
import Pagination from '../../pagination/Pagination';
import usePagination from '../../pagination/usePagination';
import FormField from '../formField/FormField';
import Input from '../input/Input';
import Table from './Table';
import styles from './table.module.scss';
import useSearch from './useSearch';

interface ITableExtendedProps<T> {
  name: string;
  header: HeaderCellsType<T>;
  datas: T[];
  className?: string;
  tableClassName?: string;
  enablePagination?: boolean;
  enableSearch?: boolean;
  parserToTable: (datas: T[]) => Promise<TableDataDisplayType<T>>;
  onClick: (value: T) => void;
  keySearch?: keyof T;
}
function TableExtended<T extends Record<string, any>>({
  className,
  enablePagination,
  enableSearch,
  datas,
  tableClassName,
  header,
  name,
  parserToTable,
  keySearch = 'name',
  onClick,
}: ITableExtendedProps<T>) {
  const [filtered, setFiltered] = useState<TableDataDisplayType<T>>([]);
  const { handleChangePattern, searchPattern } = useSearch();
  const pagination = usePagination();
  const { indexEnd, indexStart } = pagination;
  const css = useCssArray({ cssArray: [styles.tableContainer, className] });

  const handleUpdate = (index: number) => {
    const id = filtered[index].id;
    const item = datas.find((f) => f.id === id) as T;
    onClick(item);
  };

  useEffect(() => {
    pagination.handleItemCountChange(datas?.length ?? 0);
  }, [datas]);

  useEffect(() => {
    const f = datas.filter((f) =>
      f[keySearch].toLowerCase().includes(searchPattern.toLowerCase())
    );

    // parse datas for table
    parserToTable(f).then(
      (res) => {
        setFiltered(res);
      },
      (err) => {}
    );

    // update pagination with new totalItems
    pagination.handleItemCountChange(f.length);
  }, [searchPattern]);

  const final = filtered.filter((ff, i) => i >= indexStart && i < indexEnd);

  return (
    <div className={css}>
      {enableSearch && (
        <div className={styles.searchContainer}>
          <FormField
            name="search"
            label="Recherche :"
            labelPosition="left"
            children={
              <Input
                type="text"
                className={styles.fields}
                value={searchPattern}
                onChange={handleChangePattern}
              />
            }
          />
        </div>
      )}

      <Table
        parsedDatas={final}
        header={header}
        className={tableClassName}
        onUpdate={handleUpdate}
        name={name}
      />

      {enablePagination && (
        <Pagination
          params={pagination}
          onPageChange={pagination.handleCurrentPageChange}
        />
      )}
    </div>
  );
}

export default TableExtended;
