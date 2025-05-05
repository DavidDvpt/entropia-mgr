import dbClient from '@orm/dbClient';

async function getDbItems() {
  try {
    const result = await dbClient.item.findMany({
      orderBy: [{ name: 'asc' }],
    });

    return result as AppItemCategories;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItems };
