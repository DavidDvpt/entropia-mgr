import { PrismaClient } from '@generated/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// 👇 Force le typage ici
const dbClient: PrismaClient = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = dbClient;
}

export default dbClient;
export type { User } from '@generated/client';
