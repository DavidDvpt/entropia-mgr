import dbClient from './dbClient';
import {
  itemCategoryDatas,
  itemDatas,
  itemTypeDatas,
  navDatas,
  userDatas,
} from './seedDatas';

async function createUsers() {
  for (const user of userDatas) {
    const u = await dbClient.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }
}
async function createNavigation() {
  for (const item of navDatas) {
    // upsert du parent
    const parent = await dbClient.navigation.upsert({
      where: { label: item.label },
      update: {
        url: item.url ?? null,
      },
      create: {
        label: item.label,
        url: item.url ?? null,
      },
    });

    // upsert des enfants
    for (const child of item.childs) {
      await dbClient.navigation.upsert({
        where: { label: child.label },
        update: {
          url: child.url ?? null,
          parentId: parent.id,
        },
        create: {
          label: child.label,
          url: child.url ?? null,
          parentId: parent.id,
        },
      });
    }
  }
}
async function createCategories() {
  for (const cat of itemCategoryDatas) {
    await dbClient.itemCategory.upsert({
      where: { name: cat.name },
      update: {},
      create: cat,
    });
  }
}
async function createTypes() {
  for (const type of itemTypeDatas) {
    await dbClient.itemType.upsert({
      where: { name: type.name },
      update: {},
      create: type,
    });
  }
}
async function createItems() {
  for (const item of itemDatas) {
    await dbClient.item.upsert({
      where: { name: item.name },
      update: {},
      create: item,
    });
  }
}
async function seedDatas() {
  try {
    await createUsers();
    await createNavigation();
    await createCategories();
    await createTypes();
    await createItems();
  } catch (error) {
    console.log(error);
  }
}

seedDatas();

export {};
