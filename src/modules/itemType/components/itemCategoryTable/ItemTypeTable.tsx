'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import Table from '@/shared/components/table/Table';
import useItemType from '../../hooks/useItemType';
import { itemTypeForTableParser } from '../../itemTypeParser';
import styles from './itemTypeTable.module.scss';

const header: HeaderCellsType<IAppItemType> = [
  { key: 'name', label: 'Nom' },
  { key: 'isActive', label: 'Actif' },
  { key: 'itemCategory', label: 'Catégorie' },
];

interface IItemTypeTableClientProps {
  initialDatas: AppItemTypes;
}

function ItemTypeTable({ initialDatas }: IItemTypeTableClientProps) {
  const { data } = useItemType({ initialDatas });

  const dispatch = useAppDispatch();

  if (!data) return null;

  const handleUpdate = (itemType: IAppItemCategory) =>
    dispatch(modalActions.setItemTypeForm({ item: itemType, display: true }));

  return (
    <Table
      datas={data}
      header={header}
      className={styles.itemTypeTable}
      parserToTable={itemTypeForTableParser}
      onClick={handleUpdate}
      name="itemType"
    />
  );
}

export default ItemTypeTable;
