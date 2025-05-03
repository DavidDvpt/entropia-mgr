'use client';

import FormField from '@/shared/components/ui/formField/FormField';
import Select from '@/shared/components/ui/select/Select';

import useItemType from '../../useItemType';
import styles from './itemTypeSelect.module.scss';

interface IItemCategorySelectProps {
  className?: string;
  value?: string;
}
function ItemTypeSelect(props: IItemCategorySelectProps) {
  const { data, isError, isLoading } = useItemType();

  const options = data?.map((m) => ({ value: m.id, display: m.name }));
  if (isLoading || isError || !options) return null;

  const css = [styles.itemCategorySelect];
  props.className && css.push(props.className);

  return (
    <FormField
      children={
        <Select
          options={options}
          className={css.join(' ')}
          noValueDisplay="Types"
          value={props.value ?? ''}
        />
      }
      name="type"
      label="Type :"
    />
  );
}

export default ItemTypeSelect;
