'use client';

import Table from '@/shared/components/table/Table';
import useItemCategory from '../../hooks/useItemCategory';

const header: HeaderCellsType = [{ key: 'name', label: 'Nom' }];
interface IItemCategoryTableClientProps {
  initialDatas: AppItemCategories;
}

function ItemCategoryTableClient({
  initialDatas,
}: IItemCategoryTableClientProps) {
  const { data } = useItemCategory({ initDatas: initialDatas });

  if (!data) return null;

  return <Table datas={data} header={header} />;
}

export default ItemCategoryTableClient;
