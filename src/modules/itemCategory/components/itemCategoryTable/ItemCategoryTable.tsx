'use client';

import useItemCategory from '../../hooks/useItemCategory';

function ItemCategoryTable() {
  const { data } = useItemCategory();
  return <div>ItemCategoryTable</div>;
}

export default ItemCategoryTable;
