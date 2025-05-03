async function navigationParser(data: any): Promise<DropDownElementType> {
  return new Promise((res, rej) => {
    try {
      const childs = data.children.map((m: any) => ({
        label: m.label,
        url: m.url,
        isSubElement: true,
      }));

      const parsed: DropDownElementType = {
        label: data.label,
        url: data.url,
        isSubElement: false,
        childs,
      };

      return res(parsed);
    } catch (error) {
      rej(error);
    }
  });
}

export { navigationParser };
