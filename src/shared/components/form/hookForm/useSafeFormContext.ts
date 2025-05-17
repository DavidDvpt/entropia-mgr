'use client';

import {
  FieldErrors,
  FieldValues,
  useFormContext,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';

function useSafeFormContext(): {
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
} | null {
  try {
    const { formState, register, watch } = useFormContext();
    return { register, errors: formState.errors, watch };
  } catch {
    return null;
  }
}

export default useSafeFormContext;
