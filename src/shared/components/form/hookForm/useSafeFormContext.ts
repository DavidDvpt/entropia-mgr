'use client';

import { FieldErrors, useFormContext } from 'react-hook-form';

function useSafeFormContext(): { errors: FieldErrors } | null {
  try {
    const { formState } = useFormContext();
    return { errors: formState.errors };
  } catch {
    return null;
  }
}

export default useSafeFormContext;
