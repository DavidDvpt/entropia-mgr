import { objectBaseParser } from '@/shared/tools/parserTool';

async function itemCategoryParser(data: any): Promise<IAppItemCategory> {
  try {
    const itemCategory: IAppItemCategory = await objectBaseParser(data);

    return itemCategory;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemCategoryParser };
