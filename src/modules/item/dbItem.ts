import dbClient from '@orm/dbClient';

interface IGetItemsProps {
  id?: string;
  itemTypeId?: string;
}

async function getDbItems({ id, itemTypeId }: IGetItemsProps) {
  try {
    const result = await dbClient.item.findMany({
      where: { itemTypeId, id },
      orderBy: [{ name: 'asc' }],
    });

    return result as AppItemCategories;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getDbItemsByTypeId(itemTypeId: string) {
  try {
    const result = await dbClient.item.findMany({
      where: { itemTypeId },
      orderBy: [{ name: 'asc' }],
    });

    return result as AppItemCategories;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItems, getDbItemsByTypeId };
