import dbClient from '@orm/dbClient';

async function getNavigation() {
  try {
    const response = await dbClient.navigation.findMany({
      where: {
        parentId: null,
        isActive: true,
      },
      include: {
        children: {
          where: {
            isActive: true,
          },
          orderBy: {
            order: 'asc',
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });

    return response;
  } catch (error) {
    return Promise.reject();
  }
}

export { getNavigation };
