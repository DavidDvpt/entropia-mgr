import { cloneElement } from 'react';
import { FieldValues } from 'react-hook-form';

import HookFormErrorMessage from './hookForm/HookFormErrorMessage';

interface IFieldSetProps {
  name: keyof FieldValues;
  formComponent: React.ReactElement;
  isHookForm?: boolean;
  errorMessage?: string;
}

function FieldSet({
  formComponent,
  name,
  isHookForm,
  errorMessage,
}: IFieldSetProps) {
  return (
    <fieldset>
      {formComponent && cloneElement(formComponent, { name })}
      {isHookForm && <HookFormErrorMessage name={name} />}
      {errorMessage && <HookFormErrorMessage name={name} />}
    </fieldset>
  );
}

export default FieldSet;
