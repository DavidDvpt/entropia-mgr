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

async function itemCategoryForTableParser(
  data: AppItemCategories
): Promise<Record<keyof IAppItemCategory, string>[]> {
  try {
    const parsed = genericArrayParser(data, objectBaseToTableParser);

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
export { itemCategoryForTableParser, itemCategoryParser };
