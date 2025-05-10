import useCssArray from '@/shared/hooks/useCssArray';
import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './checkbox.module.scss';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name: string;
  id: string;
}

function Checkbox(props: ICheckboxProps) {
  const { register } = useFormContext();
  const css = useCssArray({ cssArray: [styles.checkbox, props.className] });

  if (!props.name) return null;

  return (
    <div className={css}>
      <input type="checkbox" {...register(props.name)} />
    </div>
  );
}

export default Checkbox;
