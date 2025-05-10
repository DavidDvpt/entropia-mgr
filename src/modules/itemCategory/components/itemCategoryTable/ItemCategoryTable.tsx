'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import Table from '@/shared/components/table/Table';
import useItemCategory from '../../hooks/useItemCategory';
import { itemCategoryForTableParser } from '../../itemCategoryParser';
import styles from './itemCategoryTable.module.scss';

const header: HeaderCellsType<IAppItemCategory> = [
  { key: 'name', label: 'Nom' },
  { key: 'isActive', label: 'Actif' },
];

interface IItemCategoryTableClientProps {
  initialDatas: AppItemCategories;
}

function ItemCategoryTable({ initialDatas }: IItemCategoryTableClientProps) {
  const { data } = useItemCategory({ initialDatas });
  const dispatch = useAppDispatch();
  if (!data) return null;

  const handleUpdate = (itemCategory: IAppItemCategory) =>
    dispatch(
      modalActions.setItemCategoryForm({ item: itemCategory, display: true })
    );

  return (
    <Table
      datas={data}
      header={header}
      className={styles.itemCategoryTable}
      parserToTable={itemCategoryForTableParser}
      onClick={handleUpdate}
      name="itemCategory"
    />
  );
}

export default ItemCategoryTable;
