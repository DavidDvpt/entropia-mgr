import { signIn } from 'next-auth/react';
import { quickErrorAccess } from '../errorMgr/apiErrorMessages';
import ErrorKeyEnum from '../errorMgr/ErrorKeyEnum';

interface ISignInProps {
  type: string;
  body: {
    email: string;
    password: string;
    redirect: boolean;
    callbackUrl: string;
  };
}
async function signInRequest({ type, body }: ISignInProps) {
  try {
    const response: any = await signIn('credentials', { ...body });

    if (response.status === 200) {
      return { status: response.status };
    }
    if (response.status === 401) {
      const login = quickErrorAccess('login', ErrorKeyEnum.badLogin);
      const pwd = quickErrorAccess('login', ErrorKeyEnum.badPwd);
      const both = quickErrorAccess('login', ErrorKeyEnum.noCredentials);

      let result: ErrorStatesType | null = null;
      switch (response.error) {
        case login.api:
          result = [
            {
              key: 'email',
              msg: login.user,
            },
          ];
          break;
        case pwd.api:
          result = [
            {
              key: 'password',
              msg: pwd.user,
            },
          ];
          break;
        case both.api:
        default:
          result = [
            {
              key: 'email',
              msg: login.user,
            },
            {
              key: 'password',
              msg: pwd.user,
            },
          ];
          break;
      }
      return { status: response.status, error: result };
    }
  } catch (error) {
    return 'error';
  }
}

export { signInRequest };
