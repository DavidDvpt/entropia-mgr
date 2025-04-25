import { RoleEnum } from '@/app/generated/prisma';
import { encodeFnc } from '@/lib/jwt/encodeFunc';
import dbClient from './dbClient';

async function createUsers() {
  const user = {
    firstname: 'test',
    lastname: 'test',
    email: 'test@test.com',
    password: encodeFnc('test'),
    role: RoleEnum.USER,
  };

  const u = await dbClient.user.upsert({
    where: { email: user.email },
    update: {},
    create: user,
  });

  console.log(u);
}
async function createNavigation() {
  const nav = [
    {
      label: 'Achat',
      url: '/transaction/buy',
      childs: [{ label: '', url: '' }],
    },
    {
      label: 'Vente',
      url: '/transaction/sell',
      childs: [{ label: '', url: '' }],
    },
    {
      label: 'Manage',
      childs: [
        { url: '/manage/categories', label: 'Catégories' },
        { url: '/manage/types', label: 'Types' },
        { url: '/manage/items', label: 'Items' },
        { url: '/manage/transactions', label: 'Transactions' },
      ],
    },
  ];

  for (const item of nav) {
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

async function seedDatas() {
  try {
    const users = await createUsers();
    console.log(users);
    const navigation = await createNavigation();
    console.log(navigation);
  } catch (error) {
    console.log(error);
  }
}

seedDatas();

export {};
