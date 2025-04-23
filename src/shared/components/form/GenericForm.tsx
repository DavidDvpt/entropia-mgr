import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';

interface FormProps<TFormValues extends FieldValues> {
  defaultValues?: UseFormProps<TFormValues>['defaultValues'];
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
}

function GenericForm<TFormValues extends Record<string, any>>({
  defaultValues,
  onSubmit,
  children,
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>({ defaultValues });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default GenericForm;
