import { ChangeEvent, useState } from 'react';
import FormField from '../formField/FormField';
import Input from '../input/Input';
import styles from './table.module.scss';

interface ISearchContainerProps {
  onChange: (pattern: string) => void;
}
function SearchContainer({ onChange }: ISearchContainerProps) {
  const [searchPattern, setSearchPattern] = useState<string>('');

  const handleChangePattern = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange?.(value);
    setSearchPattern(value);
  };

  return (
    <div className={styles.searchContainer}>
      <FormField
        name="search"
        label="Recherche :"
        labelPosition="left"
        children={
          <Input
            type="text"
            className={styles.fields}
            value={searchPattern}
            onChange={handleChangePattern}
          />
        }
      />
    </div>
  );
}

export default SearchContainer;
