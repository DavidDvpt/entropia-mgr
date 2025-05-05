async function objectBaseParser(data: any) {
  try {
    if (!data.id || !data.name) throw new Error('No required param to parse');

    const parsed: IObjectBase = {
      id: data.id,
      isActive: Boolean(data.isActive),
      name: data.name,
    };

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}
async function genericArrayParser<T>(
  data: any[],
  singleParser: (data: any) => Promise<T>
): Promise<T[]> {
  try {
    if (!data) throw new Error('No ObjectBase tab to parse');
    const array = await Promise.all(data.map((m) => singleParser(m)));

    return array;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { genericArrayParser, objectBaseParser };
