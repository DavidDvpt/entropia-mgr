'use client';

import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import InputComponent from '../inputComponent/InputComponent';

function HookFormInput(props: IInputComponentProps) {
  const {
    name = '',
    type = 'text',
    disabled,
    onInputChange,
    selectOnFocus,
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const r = register(name);

  const errorMessage = errors[name]?.message as string | undefined;

  const handleChange = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    onInputChange && onInputChange(e, name);
    r.onChange(e);
  };

  return (
    <InputComponent
      ref={r.ref}
      {...props}
      type={type}
      disabled={disabled || r.disabled}
      onInputChange={handleChange}
      selectOnFocus={selectOnFocus}
      error={errorMessage}
    />
  );
}

export default HookFormInput;
