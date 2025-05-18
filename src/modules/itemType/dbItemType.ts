import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import dbClient from '@orm/dbClient';
import { itemTypeParser } from './itemTypeParser';

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
async function createDbItemType(body: Partial<IAppItemType>) {
  try {
    if (!body.name)
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.nameRequired]?.api ?? 'unknown'
      );
    if (!body.itemCategoryId)
      throw new Error(
        apiErrorMessages.manage?.[ErrorKeyEnum.itemCategoryIdRequired]?.api ??
          'unknown'
      );

    const result = await dbClient.itemType.create({
      data: {
        name: body.name,
        isActive: body.isActive,
        isStackable: body.isStackable,
        itemCategoryId: body.itemCategoryId,
      },
    });

    const parsed = await itemTypeParser(result);

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function updateDbItemType(id: string, body: IAppItemType) {
  try {
    if (!id) {
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.idIsRequired]?.api ?? 'unknown'
      );
    }

    const result = await dbClient.itemType.update({
      where: { id },
      data: {
        name: body.name,
        isActive: body.isActive,
        itemCategoryId: body.itemCategoryId,
        isStackable: body.isStackable,
      },
    });

    const parsed = await itemTypeParser(result);
    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function deleteDbItemType(id: string) {
  try {
    if (!id) {
      throw new Error('No Id found');
    }

    const result = await dbClient.itemType.delete({
      where: { id },
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}
export { createDbItemType, deleteDbItemType, getDbItemTypes, updateDbItemType };
