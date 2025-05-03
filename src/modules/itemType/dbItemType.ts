import dbClient from '@orm/dbClient';

async function getDbItemTypes() {
  try {
    const result = await dbClient.itemType.findMany({
      orderBy: [{ name: 'asc' }],
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function getDbItemTypesByCategoryId(itemCategoryId: string) {
  try {
    if (!itemCategoryId) throw new Error('category id missing');

    const result = await dbClient.itemType.findMany({
      where: {
        itemCategoryId,
      },
      orderBy: [{ name: 'asc' }],
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItemTypes, getDbItemTypesByCategoryId };
