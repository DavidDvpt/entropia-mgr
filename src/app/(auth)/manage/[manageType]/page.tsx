import ItemCategoryTableClient from '@/modules/itemCategory/components/itemCategoryTable/ItemCategoryTableClient';
import { getDbItemCategories } from '@/modules/itemCategory/dbItemCategory';
import { itemCategoryParser } from '@/modules/itemCategory/itemCategoryParser';
import GenericServerTableWrapper from '@/shared/components/table/GenericServerTableWrapper';
import { use } from 'react';

function ManagePage(props: { params: Promise<IManagePageProps> }) {
  const { manageType } = use(props.params);

  if (manageType === 'categories')
    return (
      <GenericServerTableWrapper
        fetchFn={getDbItemCategories}
        parser={itemCategoryParser}
        render={(data) => <ItemCategoryTableClient initialDatas={data} />}
      />
    );
  if (manageType === 'types') return <div>manage itemType</div>;
  if (manageType === 'items') return <div>manage item</div>;

  return <div></div>;
}

export default ManagePage;
