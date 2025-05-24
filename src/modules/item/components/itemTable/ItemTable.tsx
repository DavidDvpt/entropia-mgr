'use client';

import Table from '@/shared/components/ui/table/Table';
import { itemForTableParser } from '../../itemParser';
import useItem from '../../useItem';
import styles from './itemTable.module.scss';

const header: HeaderCellsType<IAppItem> = [
  { key: 'name', label: 'Nom' },
  { key: 'itemType', label: 'Type' },
  { key: 'isActive', label: 'Actif' },
  { key: 'isLimited', label: 'Limited' },
  { key: 'value', label: 'Valeur TT' },
];

interface IItemTableClientProps {
  initialDatas: AppItems;
}
function ItemTable({ initialDatas }: IItemTableClientProps) {
  const { data } = useItem({ initialDatas });

  if (!data) return null;

  const handleUpdate = (toUpdate: IAppItem) => {};
  return (
    <Table
      datas={data}
      header={header}
      className={styles.itemTable}
      parserToTable={itemForTableParser}
      onClick={handleUpdate}
      name="itemType"
    />
  );
}

export default ItemTable;
