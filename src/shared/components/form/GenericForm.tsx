import { ReactNode, useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  Path,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import useWatchFields from './useWatchFields';

interface FormProps<TFormValues extends FieldValues> {
  externalError: ErrorStatesType | null;
  resetExternalError?: () => void;
  defaultValues?: UseFormProps<TFormValues>['defaultValues'];
  onSubmit: SubmitHandler<TFormValues>;
  children: ReactNode;
}

function GenericForm<TFormValues extends Record<string, any>>({
  externalError,
  resetExternalError,
  defaultValues,
  onSubmit,
  children,
}: FormProps<TFormValues>) {
  const methods = useForm<TFormValues>({ defaultValues });
  useWatchFields({
    control: methods.control,
    errorState: externalError,
    onFieldChange: () => resetExternalError?.(),
  });
  useEffect(() => {
    if (externalError?.length) {
      externalError.forEach((e) =>
        methods.setError(e.key as Path<TFormValues>, {
          type: 'manual', // Erreur manuelle (pas générée par les règles de validation)
          message: e.msg,
        })
      );
    }
  }, [externalError]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default GenericForm;
