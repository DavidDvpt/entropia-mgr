import { useFormContext } from 'react-hook-form';

interface IHookFormCheckboxProps {
  name: string;
  disabled?: boolean;
}
function HookFormCheckbox({ name, disabled }: IHookFormCheckboxProps) {
  const { register } = useFormContext();
  const r = register(name);
  return (
    <input
      ref={r.ref}
      type='checkbox'
      name={r.name}
      disabled={disabled || r.disabled}
      onChange={r.onChange}
    />
  );
}

export default HookFormCheckbox;
