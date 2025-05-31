'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';
import { ChangeEvent, SelectHTMLAttributes } from 'react';
import useItemCategory from '../hooks/useItemCategory';

interface IItemCategorySelectProps {
  className?: string;
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  value?: string;
  label?: string;
  name?: string;
  onChange?: (cat: IAppItemCategory) => void;
}

function ItemCategorySelect(props: IItemCategorySelectProps) {
  const { data } = useItemCategory({});

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const cat = data?.find((f) => f.id === value);

    cat && props.onChange?.(cat);
  };

  return (
    <FormField
      className={props.className}
      children={
        <Select
          {...props.selectProps}
          options={data ?? []}
          noValueDisplay="Catégories"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name={props.name ?? 'itemCategoryId'}
      label={props.label ?? 'Catégorie'}
    />
  );
}

export default ItemCategorySelect;
