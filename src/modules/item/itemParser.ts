import { objectBaseParser } from '@/shared/tools/parserTool';
import { itemTypeParser } from '../itemType/itemTypeParser';

async function itemParser(data: any): Promise<IAppItem> {
  try {
    const parsedBase = await objectBaseParser(data);
    const itemType = data.itemType
      ? await itemTypeParser(data.itemType)
      : undefined;

    const parsed: IAppItem = {
      ...parsedBase,
      imgUrlId: data.imageUrlId,
      isLimited: data.isLimited,
      value: data.value,
      itemType: itemType,
    };

    return parsed;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}

export { itemParser };
