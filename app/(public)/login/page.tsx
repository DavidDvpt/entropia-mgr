'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.scss';

type LoginFormValues = { email: string; password: string };
const intialLoginValues: LoginFormValues = {
  email: '',
  password: '',
};

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
        alert(error.message);
      });
  };
  return (
    <FormProvider {...formOptions}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <LabelForm
          label="Email :"
          formComponentRender={
            <FieldSet name="email" formComponent={<HookFormInput />} />
          }
        />

        <LabelForm
          label="Mot de passe :"
          formComponentRender={
            <FieldSet
              name="password"
              formComponent={<HookFormInput type="password" />}
            />
          }
        />

        <div className={styles.buttonContainer}>
          <button type="submit">Se connecter</button>
        </div>
      </form>
    </FormProvider>
  );
}

export default Login;
