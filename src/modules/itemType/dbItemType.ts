import dbClient from '@orm/dbClient';

interface IGetItemTypesProps {
  id?: string;
  itemCategoryId?: string;
}
async function getDbItemTypes({ id, itemCategoryId }: IGetItemTypesProps) {
  try {
    const result = await dbClient.itemType.findMany({
      where: {
        itemCategoryId,
        id,
      },
      include: { itemCategory: true },
      orderBy: [{ name: 'asc' }],
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { getDbItemTypes };
