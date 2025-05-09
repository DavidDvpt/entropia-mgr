import ItemCategoryTable from '@/modules/itemCategory/components/itemCategoryTable/ItemCategoryTable';
import { getDbItemCategories } from '@/modules/itemCategory/dbItemCategory';
import { itemCategoryParser } from '@/modules/itemCategory/itemCategoryParser';
import GenericServerFetcher from '@/shared/components/wrappers/GenericServerFetcher';
import { use } from 'react';

function ManagePage(props: { params: Promise<IManagePageProps> }) {
  const { manageType } = use(props.params);

  if (manageType === 'categories')
    return (
      <GenericServerFetcher
        fetchFn={getDbItemCategories}
        parser={itemCategoryParser}
        render={(data) => <ItemCategoryTable initialDatas={data} />}
      />
    );
  if (manageType === 'types') return <div>manage itemType</div>;
  if (manageType === 'items') return <div>manage item</div>;

  return <div></div>;
}

export default ManagePage;
