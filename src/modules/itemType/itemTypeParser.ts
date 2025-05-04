async function itemTypeParser(data: any): Promise<IAppItemType> {
  try {
    const itemType: IAppItemType = {
      id: data.id,
      isActive: data.isActive,
      name: data.name,
      itemCategoryId: data.itemCategoryId,
      isStackable: data.isStackable,
    };

    return itemType;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemTypeParser };
