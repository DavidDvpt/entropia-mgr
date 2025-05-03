import dbClient from '@orm/dbClient';

async function getDbItemTypes() {
  try {
    const result = await dbClient.itemType.findMany({
      orderBy: [{ name: 'asc' }],
    });

    return result as AppItemCatgories;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItemTypes };
