import { ImgHTMLAttributes } from 'react';
import SelectOption from './SelectOption';

interface ISelectProps extends ImgHTMLAttributes<HTMLSelectElement> {
  options: SelectOptionsType;
}

function Select({ options }: ISelectProps) {
  return (
    <select>
      {options.map((m) => (
        <SelectOption key={m.value} {...m} />
      ))}
    </select>
  );
}

export default Select;
