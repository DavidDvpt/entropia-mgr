import { ImgHTMLAttributes } from 'react';
import SelectOption from './SelectOption';

interface ISelectProps extends ImgHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionsType;
  noValueDisplay?: string;
}

function Select({ options = [], noValueDisplay }: ISelectProps) {
  return (
    <select>
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
