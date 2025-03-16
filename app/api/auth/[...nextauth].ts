import { authOptions } from '@/lib/nextAuth/authOptions';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';

const prisma = new PrismaClient();

export default NextAuth(authOptions);
