import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      firstname: string | null;
      lastname: string | null;
      email: string;
      image: string;
      role: string;
    };
  }

  interface User {
    id: string;
    firstname: string | null;
    lastname: string | null;
    role: string;
  }
}
