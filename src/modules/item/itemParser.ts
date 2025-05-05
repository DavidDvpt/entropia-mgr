import { objectBaseParser } from '@/shared/tools/parserTool';

async function itemParser(data: any) {
  try {
    const parsedBase = await objectBaseParser(data);

    const parsed: IAppItem = {
      ...parsedBase,
      imgUrlId: data.imageUrlId,
      isLimited: data.isLimited,
      value: data.value,
    };

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemParser };
