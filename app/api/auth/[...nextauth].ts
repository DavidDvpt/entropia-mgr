import { encodeFnc } from '@/lib/jwt/encodeFunc';
import { getUserByEmail } from '@/lib/prisma/user';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }

        const user = await getUserByEmail(credentials.email);

        if (!user) throw new Error("This user don't exist");
        const hashedPwd = encodeFnc(user.password);
        const pwdCorrect = await bcrypt.compare(
          credentials.password,
          hashedPwd
        );
        if (!pwdCorrect) throw new Error('Invalid password');

        return {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
});
