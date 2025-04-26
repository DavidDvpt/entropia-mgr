export const navLinks: NavLinkGlobalsType = [
  { url: '/transaction/buy', label: 'Achat', subMenus: [] },
  { url: '/transaction/sell', label: 'Vente', subMenus: [] },
  // { url: '/stock', label: 'Stock', subMenus: [] },
  // { url: '/statistic', label: 'Statistiques', subMenus: [] },
  {
    url: '/manage',
    label: 'Manage',
    subMenus: [
      { url: '/manage/categories', label: 'Catégories' },
      { url: '/manage/types', label: 'Types' },
      { url: '/manage/items', label: 'Items' },
      { url: '/manage/transactions', label: 'Transactions' },
    ],
  },
];
