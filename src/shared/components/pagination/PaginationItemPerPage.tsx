import { isNumber } from 'lodash';
import { ChangeEvent } from 'react';
import FormField from '../ui/formField/FormField';
import Select from '../ui/select/Select';
import { paginationItemParPageValues } from './constants';
import styles from './pagination.module.scss';

interface IPaginationItemPerPageProps extends IPaginationParams {
  onItemPerPageChange: (value: number) => void;
}
function PaginationItemPerPage({
  itemPerPage,
  totalPage,
  onItemPerPageChange,
}: IPaginationItemPerPageProps) {
  const selectOptions = paginationItemParPageValues.map((m) => ({
    id: m,
    name: m,
  }));

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;

    isNumber(parseInt(v)) && onItemPerPageChange(parseInt(v));
  };
  return (
    <div className={styles.itemPerPageContainer}>
      <div>Pages : {totalPage}</div>
      <FormField
        name="itemPerPage"
        label="Item par Page :"
        labelPosition="left"
        childContainerClassName={styles.selectPosition}
      >
        <Select
          options={selectOptions}
          value={itemPerPage}
          className={styles.select}
          onChange={handleChange}
        />
      </FormField>
    </div>
  );
}

export default PaginationItemPerPage;
