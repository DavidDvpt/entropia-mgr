'use client';

import HookFormInput from '@/shared/components/form/hookForm/HookFormInput';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { intialLoginValues } from './constants';
// import styles from './login.module.scss';

function Login(): React.ReactElement {
  const router = useRouter();
  const formOptions = useForm<LoginFormValues>({
    defaultValues: intialLoginValues,
  });

  const { handleSubmit } = formOptions;

  const onSubmit = async (values: LoginFormValues) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: '/',
    })
      .then((response: any) => {
        console.log(response);

        if (response.status === 200) {
          router.push('/');
        }
        // if (response.status === 401) {
        //   switch (response.error) {
        //     case 'bad email':
        //       setError('email', { message: 'Mail inconnu' });
        //       break;
        //     case 'bad password':
        //       setError('password', { message: 'Mauvais mot de passe' });
        //       break;
        //     default:
        //       break;
        //   }
        // }
      })
      .catch((error: any) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <section>
      <FormProvider {...formOptions}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HookFormInput name="email" label="Email :" />

          <HookFormInput
            type="password"
            name="password"
            label="Mot de passe :"
          />

          {/* <div className={styles.buttonContainer}> */}
          {/* <button type="submit">Se connecter</button> */}

          <button>Secondaire</button>
          {/* </div> */}
        </form>
      </FormProvider>
    </section>
  );
}

export default Login;
