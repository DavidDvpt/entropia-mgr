'use client';

import { quickErrorAccess } from '@/lib/errorMgr/apiErrorMessages';
import ErrorKeyEnum from '@/lib/errorMgr/ErrorKeyEnum';
import GenericForm from '@/shared/components/form/GenericForm';
import Button from '@/shared/components/ui/button/Button';
import FormField from '@/shared/components/ui/formField/FormField';
import Input from '@/shared/components/ui/input/Input';
import Section from '@/shared/components/ui/section/Section';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { intialLoginValues } from './constants';
import styles from './login.module.scss';

function Login(): React.ReactElement {
  const [error, setError] = useState<ErrorStatesType | null>(null);
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: '/',
    })
      .then((response: any) => {
        if (response.status === 401 && response.error) {
          const login = quickErrorAccess(401, ErrorKeyEnum.badLogin);
          const pwd = quickErrorAccess(401, ErrorKeyEnum.badPwd);
          const both = quickErrorAccess(401, ErrorKeyEnum.noCredentials);

          switch (response.error) {
            case login.api:
              setError([
                {
                  key: 'email',
                  msg: login.user,
                },
              ]);
              break;
            case pwd.api:
              setError([
                {
                  key: 'password',
                  msg: pwd.user,
                },
              ]);
              break;
            case both.api:
            default:
              setError([
                {
                  key: 'email',
                  msg: login.user,
                },
                {
                  key: 'password',
                  msg: pwd.user,
                },
              ]);
              break;
          }
        }

        if (response.status === 200) {
          router.push('/');
        }
      })
      .catch((error: any) => {
        const err = quickErrorAccess(error.status, error.message);
      });
  };
  return (
    <Section className={styles.section}>
      <GenericForm
        externalError={error ?? null}
        defaultValues={intialLoginValues}
        onSubmit={onSubmit}
      >
        <FormField
          name="email"
          label="Email :"
          children={<Input type="email" className={styles.fields} />}
        />

        <FormField
          name="password"
          label="Mot de passe :"
          children={<Input type="password" className={styles.fields} />}
        />

        <Button variant="primary" type="submit" className={styles.submitBtn}>
          Se connecter
        </Button>
      </GenericForm>
    </Section>
  );
}

export default Login;
