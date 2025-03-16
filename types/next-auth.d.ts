import { User } from '@prisma/client';
import 'next-auth';

declare module 'next-auth' {
  // interface User {
  //   id: string;
  //   firstname: string | null;
  //   lastname: string | null;
  //   email: string;
  //   image: string;
  //   role: string;
  // }
  interface Session {
    user: User;
  }
}
