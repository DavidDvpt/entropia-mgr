async function itemCategoryParser(data: any): Promise<AppItemCategory> {
  try {
    console.log(data);
    const itemCategory: AppItemCategory = {
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
