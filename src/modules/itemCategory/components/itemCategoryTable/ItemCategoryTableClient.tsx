'use client';

import Table from '@/shared/components/table/Table';
import { useGetItemCategoriesQuery } from '../../itemCategoryApi';

const header: HeaderCellsType = [{ key: 'name', label: 'Nom' }];
interface IItemCategoryTableClientProps {
  initialDatas: AppItemCategories;
}

function ItemCategoryTableClient({
  initialDatas,
}: IItemCategoryTableClientProps) {
  const { data, isLoading, isError } = useGetItemCategoriesQuery({});
  // const { data } = useItemCategory({ initDatas: initialDatas });

  if (!data) return null;

  return <Table datas={data} header={header} />;
}

export default ItemCategoryTableClient;
