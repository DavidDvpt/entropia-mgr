import { SelectHTMLAttributes } from 'react';
import SelectOption from './SelectOption';
import styles from './select.module.scss';
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionsType;
  noValueDisplay?: string;
  className?: string;
}

function Select({
  options = [],
  noValueDisplay,
  className,
  value,
}: ISelectProps) {
  const css = [styles.select];
  className && css.push(className);

  return (
    <select className={css.join(' ')} value={value}>
      {noValueDisplay && (
        <option value="" disabled>
          {noValueDisplay}
        </option>
      )}
      {options.map((m) => (
        <SelectOption key={m.value} {...m} />
      ))}
    </select>
  );
}

export default Select;
