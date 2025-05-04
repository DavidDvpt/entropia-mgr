import { objectBaseParser } from '@/shared/tools/parserTool';

async function itemTypeParser(data: any): Promise<IAppItemType> {
  try {
    const parsed = await objectBaseParser(data);

    const itemType: IAppItemType = {
      ...parsed,
      itemCategoryId: data.itemCategoryId,
      isStackable: data.isStackable,
    };

    return itemType;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemTypeParser };
