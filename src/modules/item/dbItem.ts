import { apiErrorMessages } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import { genericArrayParser } from '@/shared/tools/parserTool';
import dbClient from '@orm/dbClient';
import { itemParser } from './itemParser';

interface IGetItemsProps {
  params?: Partial<IAppItem>;
}

async function getDbItems({ params }: IGetItemsProps) {
  try {
    const result = await dbClient.item.findMany({
      where: { ...params },
      include: { itemType: true },
      orderBy: [{ name: 'asc' }],
    });

    const parsed = await genericArrayParser(result, itemParser);
    return parsed as AppItems;
  } catch (error) {
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
