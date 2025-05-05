import { objectBaseParser } from '@/shared/tools/parserTool';
import { itemCategoryParser } from '../itemCategory/itemCategoryParser';

async function itemTypeParser(data: any): Promise<IAppItemType> {
  try {
    const parsed = await objectBaseParser(data);
    const itemCategory = data.itemCategory
      ? await itemCategoryParser(data.itemCategory)
      : undefined;

    const itemType: IAppItemType = {
      ...parsed,
      itemCategoryId: data.itemCategoryId,
      isStackable: data.isStackable,
      itemCategory: itemCategory,
    };

    return itemType;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemTypeParser };
