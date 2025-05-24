'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import Table from '@/shared/components/ui/table/Table';
import useItemType from '../../hooks/useItemType';
import { itemTypeForTableParser } from '../../itemTypeParser';
import styles from './itemTypeTable.module.scss';

const header: HeaderCellsType<IAppItemType> = [
  { key: 'name', label: 'Nom' },
  { key: 'isActive', label: 'Actif' },
  { key: 'isStackable', label: 'Empilable' },
  { key: 'itemCategory', label: 'Catégorie' },
];

interface IItemTypeTableClientProps {
  initialDatas: AppItemTypes;
}

function ItemTypeTable({ initialDatas }: IItemTypeTableClientProps) {
  const { data } = useItemType({ initialDatas });

  const dispatch = useAppDispatch();

  if (!data) return null;

  const handleUpdate = (index: number) => {
    const it = data[index];
    dispatch(modalActions.setItemTypeForm({ item: it, display: true }));
  };

  return (
    <Table
      datas={data}
      header={header}
      className={styles.itemTypeTable}
      parserToTable={itemTypeForTableParser}
      onUpdate={handleUpdate}
      name="itemType"
    />
  );
}

export default ItemTypeTable;
