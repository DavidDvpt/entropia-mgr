import dbClient from '@orm/dbClient';

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

export { getDbItemCategories };
