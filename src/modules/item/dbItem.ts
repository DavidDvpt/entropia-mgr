import dbClient from '@orm/dbClient';

interface IGetItemsProps {
  id?: string;
  itemTypeId?: string;
}

async function getDbItems({ id, itemTypeId }: IGetItemsProps) {
  try {
    const result = await dbClient.item.findMany({
      where: { itemTypeId, id },
      include: { itemType: true },
      orderBy: [{ name: 'asc' }],
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export { getDbItems };
