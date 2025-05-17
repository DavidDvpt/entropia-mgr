import { SelectHTMLAttributes } from 'react';
import useSafeFormContext from '../../form/hookForm/useSafeFormContext';
import SelectOption from './SelectOption';
import styles from './select.module.scss';
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOptionsType;
  noValueDisplay?: string;
  className?: string;
}

function Select({
  name,
  options = [],
  noValueDisplay,
  className,
  value,
  onChange,
}: ISelectProps) {
  const form = useSafeFormContext();
  const register = form?.register?.(name as string);
  const isControlledByForm = !!register;

  const css = [styles.select];
  className && css.push(className);

  return (
    <select
      className={css.join(' ')}
      {...(isControlledByForm
        ? {
            ...register,
            defaultValue: value,
          }
        : {
            value,
            onChange,
          })}
    >
      {noValueDisplay && (
        <option value="" disabled>
          {noValueDisplay}
        </option>
      )}
      {options.map((m) => (
        <SelectOption key={m.id} {...m} />
      ))}
    </select>
  );
}

export default Select;
