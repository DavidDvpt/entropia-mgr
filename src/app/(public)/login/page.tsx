'use client';

import GenericForm from '@/shared/components/form/GenericForm';
import Button from '@/shared/components/ui/button/Button';
import FormField from '@/shared/components/ui/formField/FormField';
import Input from '@/shared/components/ui/input/Input';
import Section from '@/shared/components/ui/section/Section';
import { useRouter } from 'next/navigation';
import { intialLoginValues } from './constants';
import styles from './login.module.scss';

function Login(): React.ReactElement {
  const router = useRouter();

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
    // signIn('credentials', {
    //   email: values.email,
    //   password: values.password,
    //   redirect: false,
    //   callbackUrl: '/',
    // })
    //   .then((response: any) => {
    //     console.log(response);

    //     if (response.status === 200) {
    //       router.push('/');
    //     }
    //     // if (response.status === 401) {
    //     //   switch (response.error) {
    //     //     case 'bad email':
    //     //       setError('email', { message: 'Mail inconnu' });
    //     //       break;
    //     //     case 'bad password':
    //     //       setError('password', { message: 'Mauvais mot de passe' });
    //     //       break;
    //     //     default:
    //     //       break;
    //     //   }
    //     // }
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //     alert(error.message);
    //   });
  };
  return (
    <Section className={styles.section}>
      <GenericForm defaultValues={intialLoginValues} onSubmit={onSubmit}>
        <FormField name="email" label="Email :" children={<Input />} />

        <FormField
          name="password"
          label="Mot de passe :"
          children={<Input />}
        />

        <Button variant="primary">Bouton</Button>
        {/* <div className={styles.buttonContainer}> */}
        {/* <button type="submit">Se connecter</button> */}
        {/* </div> */}
      </GenericForm>
    </Section>
  );
}

export default Login;
