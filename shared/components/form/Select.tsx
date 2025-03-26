import { ChangeEvent, LegacyRef, forwardRef } from 'react';
import { dosis } from '../../../scss/fonts';

export interface IOnSelectChange {
  e: React.ChangeEvent<HTMLSelectElement>;
  name: string;
  item?: SelectType;
}

interface IHookFormSelectProps {
  items: SelectTypes;
  name?: string;
  noValue?: string;
  value?: string;
  onSelectChange?: ({ e, name, item }: IOnSelectChange) => void;
}

const Select = forwardRef(
  (
    { items, name = '', noValue, value, onSelectChange }: IHookFormSelectProps,
    ref: LegacyRef<HTMLSelectElement>
  ) => {
    const handlChange = (e: ChangeEvent<HTMLSelectElement>, name: string) => {
      const item = items.find((f) => f.id === e.target.value);
      onSelectChange && onSelectChange({ e, name, item });
    };

    return (
      <fieldset>
        <select
          ref={ref}
          onChange={(e) => handlChange(e, name)}
          name={name}
          value={value}
          style={dosis.style}
        >
          {noValue && (
            <option value='' disabled>
              {noValue}
            </option>
          )}
          {items?.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </fieldset>
    );
  }
);

Select.displayName = 'Select';

export default Select;
