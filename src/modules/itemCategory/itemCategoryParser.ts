import {
  genericArrayParser,
  objectBaseParser,
  objectBaseToTableParser,
} from '@/shared/tools/parserTool';

async function itemCategoryParser(data: any): Promise<IAppItemCategory> {
  try {
    const itemCategory: IAppItemCategory = await objectBaseParser(data);

    return itemCategory;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function itemCategoryForTableParser<T>(
  data: T[]
): Promise<TableDataDisplayType<T>> {
  try {
    const parsed = (await genericArrayParser(
      data,
      objectBaseToTableParser
    )) as TableDataDisplayType<T>;

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
export { itemCategoryForTableParser, itemCategoryParser };
