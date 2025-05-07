async function navigationParser(data: any): Promise<NavigationElementType> {
  try {
    const childs = data.children.map((m: any) => ({
      label: m.label,
      url: m.url,
      isSubElement: true,
    }));

    const parsed: NavigationElementType = {
      label: data.label,
      url: data.url,
      isSubElement: false,
      childs,
    };

    return parsed;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { navigationParser };
