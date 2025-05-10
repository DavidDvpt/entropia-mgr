import {
  genericArrayParser,
  objectBaseParser,
  objectBaseToTableParser,
} from '@/shared/tools/parserTool';
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
async function itemTypeForTableParser<T>(
  data: T[]
): Promise<TableDataDisplayType<T>> {
  try {
    const parsedLine = async (value: IAppItemType) => {
      const ob = await objectBaseToTableParser(value);
      const parsed = {
        ...ob,
        itemCategory: value.itemCategory?.name,
      };

      return parsed;
    };

    const parsed = (await genericArrayParser(
      data,
      parsedLine
    )) as TableDataDisplayType<T>;

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemTypeForTableParser, itemTypeParser };
