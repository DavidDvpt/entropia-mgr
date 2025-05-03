import dbClient from '@orm/dbClient';

async function getDbItemCategories() {
  try {
    const result = await dbClient.itemCategory.findMany({
      include: { ItemType: { orderBy: [{ name: 'asc' }] } },
      orderBy: [{ name: 'asc' }],
    });
    const parsed: any = result.map((m: any) => ({
      ...m,
      itemTypes: m.ItemType,
    }));
    delete parsed.ItemType;

    return parsed as AppItemCatgories;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItemCategories };
