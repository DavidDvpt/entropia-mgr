import { RoleEnum } from '@/app/generated/prisma';
import { encodeFnc } from '@/lib/jwt/encodeFunc';

const userDatas = [
  {
    firstname: 'test',
    lastname: 'test',
    email: 'test@test.com',
    password: encodeFnc('test'),
    role: RoleEnum.USER,
  },
];
const navDatas = [
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
const itemCategoryDatas = [
  {
    id: 'clhvrs30g0000krjovziohxd8',
    name: 'Ressources',
    isActive: true,
    createdAt: new Date('2023-05-20 09:10:57.088'),
  },
];
const itemTypeDatas = [
  {
    id: 'clgs40jfv0000kr97eiehfpyd',
    name: 'Enmatter',
    isActive: true,
    isStackable: true,
    createdAt: new Date('2023-04-22 15:02:39.980'),
    itemCategoryId: 'clhvrs30g0000krjovziohxd8',
  },
  {
    id: 'clgs40jfv0001kr97e8lxbn1i',
    name: 'Refined Enmatter',
    isActive: true,
    isStackable: true,
    createdAt: new Date('2023-04-22 15:02:39.980'),
    itemCategoryId: 'clhvrs30g0000krjovziohxd8',
  },
  {
    id: 'clgs40jfv0002kr97xp7k1oct',
    name: 'Ore',
    isActive: true,
    isStackable: true,
    createdAt: new Date('2023-04-22 15:02:39.980'),
    itemCategoryId: 'clhvrs30g0000krjovziohxd8',
  },
  {
    id: 'clgs40jfv0003kr975qoce83q',
    name: 'Refined Ore',
    isActive: true,
    isStackable: true,
    createdAt: new Date('2023-04-22 15:02:39.980'),
    itemCategoryId: 'clhvrs30g0000krjovziohxd8',
  },
];
const itemDatas = [];

export { itemCategoryDatas, itemDatas, itemTypeDatas, navDatas, userDatas };
