import { genericArrayParser } from '@/shared/tools/parserTool';
import dbClient from '@orm/dbClient';
import { itemCategoryParser } from './itemCategoryParser';

async function getDbItemCategories() {
  try {
    const result = await dbClient.itemCategory.findMany({
      orderBy: [{ name: 'asc' }],
    });

    return result as AppItemCategories;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getDbItemCategoriesWithParser() {
  try {
    const result = await getDbItemCategories();
    const parsed = genericArrayParser(result, itemCategoryParser);

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItemCategories, getDbItemCategoriesWithParser };
