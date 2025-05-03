import dbClient from '@orm/dbClient';

async function getItemCategories() {
  try {
    const result = dbClient.itemCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}
