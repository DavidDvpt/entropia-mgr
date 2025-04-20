import { useFormContext } from 'react-hook-form';
import Select, { IOnSelectChange } from '../Select';

interface IHookFormSelectProps {
  items: SelectTypes;
  name?: string;
  noValue?: string;
  onSelectChange?: (props: IOnSelectChange) => void;
}

function HookFormSelect({
  items,
  name = '',
  noValue,
  onSelectChange,
}: IHookFormSelectProps) {
  const {
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const r = register(name);

  const handleChange = ({ e, name, item }: IOnSelectChange) => {
    setValue(name, e.target.value);
    if (errors[name]) {
      clearErrors(name);
    }
    onSelectChange && onSelectChange({ e, name, item });
  };

  return (
    <Select
      ref={r.ref}
      noValue={noValue}
      items={items}
      onSelectChange={handleChange}
    />
  );
}

export default HookFormSelect;
