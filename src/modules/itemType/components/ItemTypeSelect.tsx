'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';

import { ChangeEvent } from 'react';
import useItemType from '../hooks/useItemType';

interface IItemCategorySelectProps {
  className?: string;
  value?: string;
  itemCategoryId?: string;
  onChange?: (type: IAppItemType) => void;
  waitForParams?: boolean;
}
function ItemTypeSelect(props: IItemCategorySelectProps) {
  const { itemCategoryId } = props;
  const { data } = useItemType({
    params: { itemCategoryId },
    waitForParams: true,
  });

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
          options={data}
          noValueDisplay="Types"
          value={props.value ?? ''}
          onChange={handleChange}
        />
      }
      name="type"
      label="Type :"
    />
  );
}

export default ItemTypeSelect;
