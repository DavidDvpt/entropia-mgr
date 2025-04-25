import { quickErrorAccess } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import { getUserByEmail } from '@/lib/prisma/user';
import bcrypt from 'bcryptjs';
import { randomBytes, randomUUID } from 'crypto';
import NextAuth, { User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const handler = NextAuth({
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<User | null> {
        const login = quickErrorAccess('login', ErrorKeyEnum.badLogin);
        const pwd = quickErrorAccess('login', ErrorKeyEnum.badPwd);
        const both = quickErrorAccess('login', ErrorKeyEnum.noCredentials);

        if (!credentials?.email || !credentials?.password) {
          throw new Error(both.api);
        }
        const user = await getUserByEmail(credentials.email);
        if (!user) throw new Error(login.api);

        const pwdCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!pwdCorrect) throw new Error(pwd.api);

        return user;
      },
    }),
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 6 * 60 * 60, // 12 hours

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours

    // The session token is usually either a random UUID or string, however if you
    // need a more customized session token string, you can define your own generate function.
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex');
    },
  },
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: 60 * 60 * 6,
    // You can define your own encode/decode functions for signing and encryption
    // async encode({}) {},
    // async decode() {},
  },
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        return {
          ...token,
          name: user.lastname,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.sub,
        name: token.lastname,
        firstname: token.firstname,
        lastname: token.lastname,
        email: token.email,
        role: token.role,
      } as User;

      return session;
    },
  },
});
export { handler as GET, handler as POST };
