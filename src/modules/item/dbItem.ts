import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import dbClient from '@orm/dbClient';
import { itemParser } from './itemParser';

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
async function createDbItem(body: Partial<IAppItem>) {
  try {
    if (!body.name)
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.nameRequired]?.api ?? 'unknown'
      );
    if (!body.itemTypeId)
      throw new Error(
        apiErrorMessages.manage?.[ErrorKeyEnum.itemTypeIdRequired]?.api ??
          'unknown'
      );
    if (!body.value)
      throw new Error(
        apiErrorMessages.manage?.[ErrorKeyEnum.itemTypeIdRequired]?.api ??
          'unknown'
      );

    const result = await dbClient.item.create({
      data: {
        name: body.name,
        isActive: body.isActive,
        itemTypeId: body.itemTypeId,
        imageUrlId: body.imgUrlId,
        isLimied: body.isLimited,
        value: body.value,
      },
    });

    const parsed = await itemParser(result);

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function updateDbItem(id: string, body: IAppItem) {
  try {
    if (!id) {
      throw new Error(
        apiErrorMessages.common?.[ErrorKeyEnum.idIsRequired]?.api ?? 'unknown'
      );
    }

    const result = await dbClient.item.update({
      where: { id },
      data: {
        name: body.name,
        isActive: body.isActive,
        itemTypeId: body.itemTypeId,
        imageUrlId: body.imgUrlId,
        isLimied: body.isLimited,
        value: body.value,
      },
    });

    const parsed = await itemParser(result);
    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function deleteDbItem(id: string) {
  try {
    if (!id) {
      throw new Error('No Id found');
    }

    const result = await dbClient.item.delete({
      where: { id },
    });

    return result;
  } catch (error) {
    return Promise.reject(error);
  }
}
export { createDbItem, deleteDbItem, getDbItems, updateDbItem };
