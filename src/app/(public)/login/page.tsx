'use client';

import { signInRequest } from '@/lib/nextAuth/signInRequest';
import GenericForm from '@/shared/components/form/GenericForm';
import Button from '@/shared/components/ui/button/Button';
import FormField from '@/shared/components/ui/formField/FormField';
import Input from '@/shared/components/ui/input/Input';
import Section from '@/shared/components/ui/section/Section';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { intialLoginValues } from './constants';
import styles from './login.module.scss';

function Login(): React.ReactElement {
  const [error, setError] = useState<ErrorStatesType | null>(null);
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    signInRequest({
      type: 'credentials',
      body: {
        ...values,
        redirect: false,
        callbackUrl: '/',
      },
    }).then(
      (response: any) => {
        if (response.status === 200) {
          router.push('/');
        }
        if (response.status === 401) {
          setError(response.error);
          console.log(response);
        }
      },
      (err) => {}
    );
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
