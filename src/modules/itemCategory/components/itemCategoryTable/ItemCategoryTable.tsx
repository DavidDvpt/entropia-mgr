'use client';

import Table from '@/shared/components/table/Table';
import { useEffect, useState } from 'react';
import useItemCategory from '../../hooks/useItemCategory';
import { itemCategoryForTableParser } from '../../itemCategoryParser';
import styles from './itemCategoryTable.module.scss';

const header: HeaderCellsType = [
  { key: 'name', label: 'Nom' },
  { key: 'isActive', label: 'Actif' },
];

interface IItemCategoryTableClientProps {
  initialDatas: AppItemCategories;
}

function ItemCategoryTable({ initialDatas }: IItemCategoryTableClientProps) {
  const [parsedForTableState, setParsedForTableState] = useState<
    Record<keyof IAppItemCategory, string>[]
  >([]);
  const { data } = useItemCategory({ initDatas: initialDatas });

  if (!data) return null;

  useEffect(() => {
    if (data) {
      itemCategoryForTableParser(data).then(
        (res) => setParsedForTableState(res),
        (err) => setParsedForTableState([])
      );
    }
  }, [data]);

  return (
    <Table
      datas={parsedForTableState}
      header={header}
      className={styles.itemCategoryTable}
    />
  );
}

export default ItemCategoryTable;
