import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
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

async function createDbItemCategory(body: Partial<IAppItemCategory>) {
  try {
    if (!body.name) {
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.nameRequired]?.api ?? 'unknown'
      );
    }

    const result = await dbClient.itemCategory.create({
      data: {
        name: body.name,
        isActive: body.isActive,
      },
    });

    const parsed = await itemCategoryParser(result);
    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateDbItemCategory(id: string, body: IAppItemCategory) {
  try {
    if (!body.name) {
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.nameRequired]?.api ?? 'unknown'
      );
    }

    const result = await dbClient.itemCategory.update({
      where: { id },
      data: {
        name: body.name,
        isActive: body.isActive,
      },
    });

    const parsed = await itemCategoryParser(result);
    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function deleteDbItemCategory(id: string) {
  try {
    if (!id) {
      throw new Error('No Id found');
    }

    const result = await dbClient.itemCategory.delete({
      where: { id },
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}

export {
  createDbItemCategory,
  deleteDbItemCategory,
  getDbItemCategories,
  getDbItemCategoriesWithParser,
  updateDbItemCategory,
};
