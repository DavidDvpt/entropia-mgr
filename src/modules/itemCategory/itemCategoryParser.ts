async function itemCategoryParser(data: any): Promise<IAppItemCategory> {
  try {
    const itemCategory: IAppItemCategory = {
      id: data.id,
      isActive: data.isActive,
      name: data.name,
    };

    return itemCategory;
  } catch (error) {
    return Promise.reject(error);
  }
}

export { itemCategoryParser };
