import {
  booleanToString,
  genericArrayParser,
  objectBaseParser,
  objectBaseToTableParser,
} from '@/shared/tools/parserTool';
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
      itemTypeId: data.itemTypeId,
    };

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function itemForTableParser<T>(
  data: T[]
): Promise<TableDataDisplayType<T>> {
  try {
    const parsedLine = async (value: IAppItem) => {
      const ob = await objectBaseToTableParser(value);
      const parsed = {
        ...ob,
        itemType: value.itemType?.name,
        isLimited: booleanToString(value.isLimited),
        value: value.value.toFixed(3),
        imgUrlId: value.imgUrlId,
      };

      return parsed;
    };

    const parsed = (await genericArrayParser(
      data,
      parsedLine
    )) as TableDataDisplayType<T>;

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
export { itemForTableParser, itemParser };
